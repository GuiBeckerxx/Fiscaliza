import Link from "next/link";
import type { ArtigoComLeitura } from "@/lib/artigos";
import { conteudoSecao } from "@/content/home";
import { getSocio } from "@/content/socios";
import { dataPorExtenso, inscricaoOab } from "@/lib/formatar";
import { SetaDireita } from "./icones";

function Autoria({ autorId }: { autorId: string }) {
  const autor = getSocio(autorId);
  if (!autor) return null;
  return (
    <>
      <span className="whitespace-nowrap">
        {conteudoSecao.por} {autor.nome}
      </span>
      <span className="font-mono text-[0.8125rem] whitespace-nowrap text-ink-muted">
        {autor.inscricoes.slice(0, 1).map(inscricaoOab).join("")}
      </span>
    </>
  );
}

export function ListaArtigos({
  artigos,
  nivelTitulo = "h3",
}: {
  artigos: ArtigoComLeitura[];
  nivelTitulo?: "h2" | "h3";
}) {
  const Titulo = nivelTitulo;
  return (
    <ol className="border-t border-rule-strong">
      {artigos.map((artigo) => (
        <li key={artigo.slug} data-reveal className="border-b border-rule">
          <article className="group relative grid gap-5 py-8 has-[a:focus-visible]:outline-2 has-[a:focus-visible]:outline-offset-4 has-[a:focus-visible]:outline-focus lg:grid-cols-12 lg:gap-8 lg:py-10">
            <div className="rotulo-mono flex flex-wrap gap-x-4 gap-y-1 text-[0.6875rem] text-ink-muted lg:col-span-3 lg:flex-col lg:pt-2">
              <time dateTime={artigo.data}>{dataPorExtenso(artigo.data)}</time>
              <span className="text-brass-ink">{artigo.tema}</span>
            </div>
            <div className="lg:col-span-7">
              <Titulo className="font-serif text-[1.625rem] leading-[1.15] transition-colors duration-300 group-hover:text-brass-ink sm:text-[1.875rem]">
                {artigo.titulo}
              </Titulo>
              <p className="mt-3 max-w-[62ch] text-[1rem] leading-relaxed text-ink-muted">{artigo.resumo}</p>
              <p className="mt-4 flex flex-wrap items-baseline gap-x-3 gap-y-1 text-[0.875rem] text-ink">
                <Autoria autorId={artigo.autor} />
                <span aria-hidden="true" className="text-rule-strong">
                  /
                </span>
                <span className="whitespace-nowrap text-ink-muted">
                  {artigo.minutosLeitura} {conteudoSecao.minutosDeLeitura}
                </span>
              </p>
            </div>
            <div className="flex items-start lg:col-span-2 lg:justify-end lg:pt-2">
              <Link
                href={`/artigos/${artigo.slug}`}
                className="inline-flex items-center gap-2 text-[0.875rem] text-ink after:absolute after:inset-0 after:content-[''] focus-visible:outline-none"
              >
                <span className="link-sublinhado group-hover:bg-[length:100%_1px]">{conteudoSecao.lerArtigo}</span>
                <span className="sr-only">: {artigo.titulo}</span>
                <SetaDireita className="size-3.5 text-brass transition-transform duration-300 group-hover:translate-x-0.5 motion-reduce:transition-none" />
              </Link>
            </div>
          </article>
        </li>
      ))}
    </ol>
  );
}
