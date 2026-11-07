"use client";

import Link from "next/link";
import { useId, useRef, useState } from "react";
import { contato } from "@/content/contato";
import { SetaDireita } from "./icones";

/**
 * Formulário de contato com validação no navegador, estados de envio,
 * sucesso e erro anunciados por região "live".
 *
 * Envio: POST em JSON para NEXT_PUBLIC_FORM_ENDPOINT (Formspree ou API
 * própria). Inclui campo-armadilha contra spam (_gotcha).
 */

type Campos = {
  nome: string;
  email: string;
  telefone: string;
  mensagem: string;
  consentimento: boolean;
};

type Erros = Partial<Record<keyof Campos, string>>;
type Estado = "ocioso" | "enviando" | "sucesso" | "erro" | "indisponivel";

const vazio: Campos = { nome: "", email: "", telefone: "", mensagem: "", consentimento: false };
const textos = contato.formulario;
const LIMITE_MENSAGEM = 2000;

function validar(campos: Campos): Erros {
  const erros: Erros = {};
  if (campos.nome.trim().length < 3) erros.nome = textos.erros.nome;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(campos.email.trim())) erros.email = textos.erros.email;
  const digitos = campos.telefone.replace(/\D/g, "");
  if (campos.telefone.trim() && (digitos.length < 10 || digitos.length > 13)) {
    erros.telefone = textos.erros.telefone;
  }
  if (campos.mensagem.trim().length < 10) erros.mensagem = textos.erros.mensagem;
  else if (campos.mensagem.length > LIMITE_MENSAGEM) erros.mensagem = textos.erros.mensagemLonga;
  if (!campos.consentimento) erros.consentimento = textos.erros.consentimento;
  return erros;
}

const ORDEM: (keyof Campos)[] = ["nome", "email", "telefone", "mensagem", "consentimento"];

export function FormularioContato({ endpoint }: { endpoint: string }) {
  const id = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);
  const [campos, setCampos] = useState<Campos>(vazio);
  const [erros, setErros] = useState<Erros>({});
  const [tocados, setTocados] = useState<Partial<Record<keyof Campos, boolean>>>({});
  const [estado, setEstado] = useState<Estado>("ocioso");

  const idCampo = (nome: keyof Campos) => `${id}-${nome}`;
  const idErro = (nome: keyof Campos) => `${id}-${nome}-erro`;

  function atualizar<K extends keyof Campos>(nome: K, valor: Campos[K]) {
    const proximos = { ...campos, [nome]: valor };
    setCampos(proximos);
    if (tocados[nome]) setErros((atuais) => ({ ...atuais, [nome]: validar(proximos)[nome] }));
    if (estado === "erro" || estado === "sucesso" || estado === "indisponivel") setEstado("ocioso");
  }

  function aoSair(nome: keyof Campos) {
    setTocados((atuais) => ({ ...atuais, [nome]: true }));
    setErros((atuais) => ({ ...atuais, [nome]: validar(campos)[nome] }));
  }

  async function enviar(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    if (estado === "enviando") return;

    const encontrados = validar(campos);
    setErros(encontrados);
    setTocados({ nome: true, email: true, telefone: true, mensagem: true, consentimento: true });
    const primeiro = ORDEM.find((campo) => encontrados[campo]);
    if (primeiro) {
      formRef.current?.querySelector<HTMLElement>(`#${CSS.escape(idCampo(primeiro))}`)?.focus();
      return;
    }

    const armadilha = new FormData(evento.currentTarget).get("_gotcha");
    if (armadilha) {
      setEstado("sucesso");
      return;
    }

    if (!endpoint) {
      setEstado("indisponivel");
      statusRef.current?.focus();
      return;
    }

    setEstado("enviando");
    try {
      const resposta = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          nome: campos.nome.trim(),
          email: campos.email.trim(),
          telefone: campos.telefone.trim(),
          mensagem: campos.mensagem.trim(),
          consentimento_lgpd: "sim",
          consentimento_data: new Date().toISOString(),
          _subject: textos.assunto,
        }),
      });
      if (!resposta.ok) throw new Error(String(resposta.status));
      setEstado("sucesso");
      setCampos(vazio);
      setTocados({});
      setErros({});
    } catch {
      setEstado("erro");
    } finally {
      window.requestAnimationFrame(() => statusRef.current?.focus());
    }
  }

  const classeCampo = (nome: keyof Campos) =>
    `mt-2 block w-full rounded-md border bg-surface px-4 py-3 text-[1rem] text-ink transition-colors placeholder:text-ink-muted/70 focus:border-brass focus-visible:outline-2 focus-visible:outline-offset-2 ${
      erros[nome] ? "border-danger" : "border-rule-strong hover:border-ink-muted"
    }`;

  const rotulo = (nome: keyof Campos, texto: string, obrigatorio = true) => (
    <label htmlFor={idCampo(nome)} className="text-[0.875rem] font-medium text-ink">
      {texto}
      {obrigatorio && (
        <span className="text-brass-ink" aria-hidden="true">
          {" "}*
        </span>
      )}
    </label>
  );

  const mensagemErro = (nome: keyof Campos) =>
    erros[nome] ? (
      <p id={idErro(nome)} className="mt-2 text-[0.8125rem] text-danger">
        {erros[nome]}
      </p>
    ) : null;

  const descricaoDe = (nome: keyof Campos, ajuda?: string) =>
    [ajuda, erros[nome] ? idErro(nome) : undefined].filter(Boolean).join(" ") || undefined;

  const enviando = estado === "enviando";
  const temErros = Object.values(erros).some(Boolean);

  return (
    <form
      ref={formRef}
      noValidate
      onSubmit={enviar}
      aria-describedby={`${id}-descricao`}
      className="rounded-lg border border-rule bg-surface-raised p-6 sm:p-8"
    >
      <h3 className="font-serif text-[1.75rem] leading-tight text-ink">{textos.titulo}</h3>
      <p id={`${id}-descricao`} className="mt-3 text-[0.875rem] leading-relaxed text-ink-muted">
        {textos.descricao}
      </p>

      <div className="mt-8 grid gap-6">
        <div>
          {rotulo("nome", textos.campos.nome.rotulo)}
          <input
            id={idCampo("nome")}
            name="nome"
            type="text"
            autoComplete={textos.campos.nome.autocomplete}
            required
            aria-required="true"
            aria-invalid={Boolean(erros.nome)}
            aria-describedby={descricaoDe("nome")}
            value={campos.nome}
            onChange={(e) => atualizar("nome", e.target.value)}
            onBlur={() => aoSair("nome")}
            className={classeCampo("nome")}
          />
          {mensagemErro("nome")}
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            {rotulo("email", textos.campos.email.rotulo)}
            <input
              id={idCampo("email")}
              name="email"
              type="email"
              inputMode="email"
              autoComplete={textos.campos.email.autocomplete}
              required
              aria-required="true"
              aria-invalid={Boolean(erros.email)}
              aria-describedby={descricaoDe("email")}
              value={campos.email}
              onChange={(e) => atualizar("email", e.target.value)}
              onBlur={() => aoSair("email")}
              className={classeCampo("email")}
            />
            {mensagemErro("email")}
          </div>
          <div>
            {rotulo("telefone", textos.campos.telefone.rotulo, false)}
            <input
              id={idCampo("telefone")}
              name="telefone"
              type="tel"
              inputMode="tel"
              autoComplete={textos.campos.telefone.autocomplete}
              aria-invalid={Boolean(erros.telefone)}
              aria-describedby={descricaoDe("telefone", `${id}-telefone-ajuda`)}
              value={campos.telefone}
              onChange={(e) => atualizar("telefone", e.target.value)}
              onBlur={() => aoSair("telefone")}
              className={classeCampo("telefone")}
            />
            <p id={`${id}-telefone-ajuda`} className="mt-2 text-[0.8125rem] text-ink-muted">
              {textos.campos.telefone.ajuda}
            </p>
            {mensagemErro("telefone")}
          </div>
        </div>

        <div>
          {rotulo("mensagem", textos.campos.mensagem.rotulo)}
          <textarea
            id={idCampo("mensagem")}
            name="mensagem"
            rows={5}
            required
            aria-required="true"
            maxLength={LIMITE_MENSAGEM}
            aria-invalid={Boolean(erros.mensagem)}
            aria-describedby={descricaoDe("mensagem", `${id}-mensagem-ajuda`)}
            value={campos.mensagem}
            onChange={(e) => atualizar("mensagem", e.target.value)}
            onBlur={() => aoSair("mensagem")}
            className={`${classeCampo("mensagem")} resize-y`}
          />
          <p id={`${id}-mensagem-ajuda`} className="mt-2 flex justify-between gap-4 text-[0.8125rem] text-ink-muted">
            <span>{textos.campos.mensagem.ajuda}</span>
            <span className="font-mono" aria-hidden="true">
              {campos.mensagem.length}/{LIMITE_MENSAGEM}
            </span>
          </p>
          {mensagemErro("mensagem")}
        </div>

        {/* Campo-armadilha para robôs: invisível para pessoas. */}
        <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
          <label htmlFor={`${id}-gotcha`}>Não preencha este campo</label>
          <input id={`${id}-gotcha`} type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
        </div>

        <div>
          <div className="flex items-start gap-3">
            <input
              id={idCampo("consentimento")}
              name="consentimento"
              type="checkbox"
              required
              aria-required="true"
              aria-invalid={Boolean(erros.consentimento)}
              aria-describedby={descricaoDe("consentimento")}
              checked={campos.consentimento}
              onChange={(e) => {
                atualizar("consentimento", e.target.checked);
                setTocados((atuais) => ({ ...atuais, consentimento: true }));
                setErros((atuais) => ({
                  ...atuais,
                  consentimento: e.target.checked ? undefined : textos.erros.consentimento,
                }));
              }}
              className="mt-0.5 size-5 shrink-0 cursor-pointer accent-[var(--brass)]"
            />
            <label htmlFor={idCampo("consentimento")} className="text-[0.875rem] leading-relaxed text-ink">
              {textos.consentimento.antes}
              <Link href="/politica-de-privacidade" className="link-texto">
                {textos.consentimento.link}
              </Link>
              {textos.consentimento.depois}
              <span className="text-brass-ink" aria-hidden="true">
                {" "}*
              </span>
            </label>
          </div>
          {mensagemErro("consentimento")}
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={enviando}
          aria-disabled={enviando}
          className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-md bg-btn px-6 text-[0.9375rem] font-medium text-btn-ink transition-colors duration-300 hover:bg-btn-hover disabled:cursor-wait disabled:opacity-70"
        >
          {enviando && (
            <span
              aria-hidden="true"
              className="size-4 animate-spin rounded-full border-2 border-current border-t-transparent motion-reduce:animate-none"
            />
          )}
          <span>{enviando ? textos.enviando : textos.enviar}</span>
          {!enviando && (
            <SetaDireita className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          )}
        </button>
      </div>

      <div
        ref={statusRef}
        tabIndex={-1}
        role="status"
        aria-live="polite"
        className="mt-6 text-[0.9375rem] leading-relaxed outline-none empty:hidden"
      >
        {estado === "sucesso" && (
          <p className="rounded-md border border-rule-strong border-l-2 border-l-brass px-4 py-3 text-ink">
            {textos.sucesso}
          </p>
        )}
        {estado === "erro" && (
          <p className="rounded-md border border-danger/60 px-4 py-3 text-ink">{textos.erroEnvio}</p>
        )}
        {estado === "indisponivel" && (
          <p className="rounded-md border border-rule-strong px-4 py-3 text-ink">{textos.naoConfigurado}</p>
        )}
        {estado === "ocioso" && temErros && <span className="sr-only">{textos.resumoErros}</span>}
      </div>
    </form>
  );
}
