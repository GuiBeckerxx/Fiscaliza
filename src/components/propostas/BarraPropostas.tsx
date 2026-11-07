"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { apresentacao, propostas, type IdProposta } from "@/content/propostas";

/**
 * Rótulo ao lado de cada botão. A partir de 85rem (1360px) aparece no hover
 * ou no foco; abaixo disso, fica visível enquanto a lista estiver aberta.
 */
function Dica({ children }: { children: React.ReactNode }) {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute top-1/2 right-full mr-3 -translate-y-1/2 rounded-full font-sans border border-rule-strong bg-grafite px-3 py-1.5 text-[0.75rem] whitespace-nowrap text-ink shadow-[0_8px_24px_rgb(0_0_0/0.3)] transition-opacity duration-200 min-[85rem]:opacity-0 min-[85rem]:group-hover:opacity-100 min-[85rem]:group-focus-visible:opacity-100"
    >
      {children}
    </span>
  );
}

function IconeGrade() {
  return (
    <svg aria-hidden="true" viewBox="0 0 14 14" className="size-3.5" fill="currentColor">
      <rect x="0" y="0" width="6" height="6" rx="1" />
      <rect x="8" y="0" width="6" height="6" rx="1" />
      <rect x="0" y="8" width="6" height="6" rx="1" />
      <rect x="8" y="8" width="6" height="6" rx="1" />
    </svg>
  );
}

function IconeFechar() {
  return (
    <svg aria-hidden="true" viewBox="0 0 14 14" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <path d="M2.5 2.5l9 9M11.5 2.5l-9 9" />
    </svg>
  );
}

/**
 * Navegação entre as propostas, fora da área de conteúdo para não cobrir a
 * abertura durante a apresentação. A partir de 85rem: pílula vertical na
 * margem direita, sempre aberta. Abaixo disso: botão discreto no canto
 * inferior direito que abre a lista (Esc ou clique fora fecham).
 */
export function BarraPropostas({ atual }: { atual: IdProposta }) {
  const [aberta, setAberta] = useState(false);
  const idLista = useId();
  const raiz = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!aberta) return;
    function aoTeclar(evento: KeyboardEvent) {
      if (evento.key === "Escape") setAberta(false);
    }
    function aoTocarFora(evento: PointerEvent) {
      if (!raiz.current?.contains(evento.target as Node)) setAberta(false);
    }
    document.addEventListener("keydown", aoTeclar);
    document.addEventListener("pointerdown", aoTocarFora);
    return () => {
      document.removeEventListener("keydown", aoTeclar);
      document.removeEventListener("pointerdown", aoTocarFora);
    };
  }, [aberta]);

  const classeBotao = "group relative grid size-9 place-items-center rounded-full transition-colors";

  return (
    <nav
      ref={raiz}
      id="barra-propostas"
      aria-label={apresentacao.barra.rotulo}
      className="tema-escuro fixed right-4 bottom-4 z-30 min-[85rem]:top-1/2 min-[85rem]:right-5 min-[85rem]:bottom-auto min-[85rem]:-translate-y-1/2"
    >
      <div className="flex flex-col items-center gap-1 rounded-full border border-rule-strong bg-grafite/90 p-1.5 text-ink shadow-[0_12px_40px_rgb(0_0_0/0.35)] backdrop-blur-md">
        <div id={idLista} className={`${aberta ? "flex" : "hidden"} flex-col items-center gap-1 min-[85rem]:flex`}>
          <Link
            href="/propostas"
            aria-label={apresentacao.barra.todasRotulo}
            onClick={() => setAberta(false)}
            className={`${classeBotao} text-ink-muted hover:text-ink`}
          >
            <IconeGrade />
            <Dica>{apresentacao.barra.todasRotulo}</Dica>
          </Link>
          <span aria-hidden="true" className="my-0.5 h-px w-5 bg-rule-strong" />
          {propostas.map((proposta) => {
            const ativa = proposta.id === atual;
            const nome = `Proposta ${proposta.letra} · ${proposta.nome}`;
            return (
              <Link
                key={proposta.id}
                href={`/propostas/${proposta.id}`}
                aria-label={nome}
                aria-current={ativa ? "page" : undefined}
                onClick={() => setAberta(false)}
                className={`${classeBotao} font-mono text-[0.8125rem] ${
                  ativa ? "bg-brass text-grafite" : "text-ink-muted hover:text-ink"
                }`}
              >
                {proposta.letra}
                <Dica>{nome}</Dica>
              </Link>
            );
          })}
          <span aria-hidden="true" className="my-0.5 h-px w-5 bg-rule-strong min-[85rem]:hidden" />
        </div>
        <button
          type="button"
          aria-expanded={aberta}
          aria-controls={idLista}
          aria-label={apresentacao.barra.rotulo}
          onClick={() => setAberta((valor) => !valor)}
          className={`${classeBotao} text-ink-muted hover:text-ink min-[85rem]:hidden`}
        >
          {aberta ? <IconeFechar /> : <IconeGrade />}
        </button>
      </div>
    </nav>
  );
}
