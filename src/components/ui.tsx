import Link from "next/link";
import { partesComDestaque } from "@/lib/formatar";
import { definido } from "@/lib/pendente";
import { rotulosInterface } from "@/content/navegacao";
import { SetaDireita, SetaDiagonal } from "./icones";

/* -------------------------------------------------------------------------- */
/* Botões (links com aparência de botão)                                       */
/* -------------------------------------------------------------------------- */

type BotaoProps = {
  href: string;
  children: React.ReactNode;
  variante?: "primario" | "secundario" | "destaque";
  className?: string;
};

const baseBotao =
  "group inline-flex min-h-12 items-center justify-center gap-3 rounded-full px-6 text-[0.9375rem] font-medium tracking-[0.005em] transition-[background-color,border-color,color] duration-300 ease-[var(--ease-suave)]";

const variantesBotao = {
  primario: "bg-btn text-btn-ink hover:bg-btn-hover",
  secundario: "border border-rule-strong text-ink hover:border-brass",
  /** Bronze com texto branco (contraste AA), para a ação principal da abertura. */
  destaque: "bg-bronze text-white hover:bg-bronze-escuro",
};

export function Botao({ href, children, variante = "primario", className = "" }: BotaoProps) {
  return (
    <Link href={href} className={`${baseBotao} ${variantesBotao[variante]} ${className}`}>
      <span>{children}</span>
      <SetaDireita className="size-4 shrink-0 transition-transform duration-300 ease-[var(--ease-suave)] group-hover:translate-x-0.5 motion-reduce:transition-none" />
    </Link>
  );
}

/* -------------------------------------------------------------------------- */
/* Rótulo numerado em mono: "01 / Áreas de atuação"                           */
/* -------------------------------------------------------------------------- */

export function RotuloSecao({
  numero,
  children,
  className = "",
}: {
  numero?: number;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={`rotulo-mono flex items-center gap-2 text-ink-muted ${className}`}>
      {numero !== undefined && (
        <>
          <span aria-hidden="true" className="text-brass-ink">
            {String(numero).padStart(2, "0")}
          </span>
          <span aria-hidden="true">/</span>
        </>
      )}
      <span>{children}</span>
    </p>
  );
}

/* -------------------------------------------------------------------------- */
/* Texto com trechos em itálico (_assim_)                                      */
/* -------------------------------------------------------------------------- */

export function TextoComDestaque({
  texto,
  classeDestaque = "",
}: {
  texto: string;
  classeDestaque?: string;
}) {
  return (
    <>
      {partesComDestaque(texto).map((parte, i) =>
        parte.destaque ? (
          <em key={i} className={`italic ${classeDestaque}`}>
            {parte.texto}
          </em>
        ) : (
          <span key={i}>{parte.texto}</span>
        ),
      )}
    </>
  );
}

/* -------------------------------------------------------------------------- */
/* Cabeçalho de seção                                                          */
/* -------------------------------------------------------------------------- */

export function CabecalhoSecao({
  numero,
  rotulo,
  titulo,
  introducao,
  idTitulo,
  tamanho = "grande",
  className = "",
}: {
  numero?: number;
  rotulo: string;
  titulo: string;
  introducao?: string;
  idTitulo: string;
  /** "medio" para títulos em colunas estreitas. */
  tamanho?: "grande" | "medio";
  className?: string;
}) {
  const tamanhoTitulo =
    tamanho === "grande"
      ? "max-w-[26ch] text-[2.125rem] sm:text-[2.75rem] lg:text-[3.25rem]"
      : "max-w-[20ch] text-[2rem] sm:text-[2.5rem] lg:text-[2.625rem]";
  return (
    <div className={className}>
      <RotuloSecao numero={numero}>{rotulo}</RotuloSecao>
      <h2
        id={idTitulo}
        className={`mt-5 font-serif leading-[1.05] tracking-[-0.01em] text-ink ${tamanhoTitulo}`}
      >
        <TextoComDestaque texto={titulo} />
      </h2>
      {introducao && (
        <p className="mt-5 max-w-[56ch] text-[1.0625rem] leading-relaxed text-ink-muted">
          {introducao}
        </p>
      )}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Link externo (abre em nova aba). Se o endereço ainda for placeholder,       */
/* exibe apenas o texto, sem link.                                             */
/* -------------------------------------------------------------------------- */

export function LinkExterno({
  href,
  children,
  className = "",
  rotuloAcessivel,
  comIcone = true,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  rotuloAcessivel?: string;
  comIcone?: boolean;
}) {
  if (!definido(href)) {
    return (
      <span className={className} title={rotulosInterface.linkPendente}>
        {children}{" "}
        <span className="rotulo-mono text-[0.625rem] whitespace-nowrap text-ink-muted">
          [{rotulosInterface.linkPendente}]
        </span>
      </span>
    );
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={rotuloAcessivel ? `${rotuloAcessivel} ${rotulosInterface.abreEmNovaAba}` : undefined}
      className={`group ${className}`}
    >
      {children}
      {!rotuloAcessivel && <span className="sr-only"> {rotulosInterface.abreEmNovaAba}</span>}
      {comIcone && (
        <SetaDiagonal className="ml-1 inline-block size-3.5 align-[-0.1em] text-brass transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none" />
      )}
    </a>
  );
}
