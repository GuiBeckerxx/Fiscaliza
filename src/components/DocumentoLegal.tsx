import Link from "next/link";
import type { SecaoDocumento } from "@/content/types";
import { documentoLegal } from "@/content/legal";
import { linksLegais } from "@/content/navegacao";
import { dataPorExtenso } from "@/lib/formatar";
import { CabecalhoPagina } from "./CabecalhoPagina";
import { rotulosAuxiliares } from "@/content/interface";

/** Página de documento legal (Política de Privacidade, Termos de Uso). */
export function DocumentoLegal({
  titulo,
  caminho,
  introducao,
  atualizadaEm,
  secoes,
}: {
  titulo: string;
  caminho: string;
  introducao: string;
  atualizadaEm: string;
  secoes: SecaoDocumento[];
}) {
  const outros = linksLegais.filter((link) => link.href !== caminho);
  return (
    <>
      <CabecalhoPagina trilha={[{ nome: titulo, caminho }]} titulo={titulo} introducao={introducao}>
        <p className="rotulo-mono mt-8 text-[0.6875rem] text-ink-muted">
          {documentoLegal.atualizadaEm}{" "}
          <time dateTime={atualizadaEm} className="text-ink">
            {dataPorExtenso(atualizadaEm)}
          </time>
        </p>
      </CabecalhoPagina>

      <div className="tema-claro bg-surface text-ink">
        <div className="container-site grid gap-12 py-16 lg:grid-cols-12 lg:gap-8 lg:py-24">
          <nav aria-label={`${rotulosAuxiliares.secoesDoDocumento}: ${titulo}`} className="hidden lg:col-span-3 lg:block">
            <ol className="sticky top-28 space-y-2 border-l border-rule pl-4 text-[0.875rem]">
              {secoes.map((secao, indice) => (
                <li key={secao.titulo}>
                  <a href={`#secao-${indice + 1}`} className="link-sublinhado text-ink-muted hover:text-ink">
                    {secao.titulo}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <article className="prosa max-w-[70ch] lg:col-span-8 lg:col-start-5">
            {secoes.map((secao, indice) => (
              <section key={secao.titulo} aria-labelledby={`secao-${indice + 1}`}>
                <h2 id={`secao-${indice + 1}`}>{secao.titulo}</h2>
                {secao.conteudo.map((bloco, i) =>
                  typeof bloco === "string" ? (
                    <p key={i}>{bloco}</p>
                  ) : (
                    <ul key={i}>
                      {bloco.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ),
                )}
              </section>
            ))}

            <p className="!mt-16 border-t border-rule pt-8 text-[0.9375rem] text-ink-muted">
              {outros.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.rotulo}
                </Link>
              ))}
            </p>
          </article>
        </div>
      </div>
    </>
  );
}
