import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { areaPagina, areas, getArea } from "@/content/areas";
import { areasSecao } from "@/content/home";
import { secoes } from "@/content/navegacao";
import { listarArtigos } from "@/lib/artigos";
import { metadadosPagina } from "@/lib/metadados";
import { CabecalhoPagina } from "@/components/CabecalhoPagina";
import { AvisoInformativo } from "@/components/AvisoInformativo";
import { SetaDireita } from "@/components/icones";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return areas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) return {};
  return metadadosPagina({
    titulo: area.titulo,
    descricao: area.descricaoSeo,
    caminho: `/areas/${area.slug}`,
  });
}

const ancoras = {
  oQueE: "o-que-e",
  quemPodeSerAfetado: "quem-pode-ser-afetado",
  documentos: "documentos",
  pontosDeAtencao: "pontos-de-atencao",
  referencias: "referencias",
} as const;

function Lista({ itens, numerada = false }: { itens: string[]; numerada?: boolean }) {
  return (
    <ul className="mt-6 border-t border-rule">
      {itens.map((item, indice) => (
        <li key={item} className="flex gap-4 border-b border-rule py-4 text-[1.0625rem] leading-relaxed">
          <span aria-hidden="true" className="rotulo-mono w-6 shrink-0 pt-1.5 text-[0.6875rem] text-brass-ink">
            {numerada ? String(indice + 1).padStart(2, "0") : "—"}
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function TituloBloco({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="font-serif text-[1.875rem] leading-tight sm:text-[2.25rem]">
      {children}
    </h2>
  );
}

export default async function PaginaArea({ params }: Props) {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) notFound();

  const numero = areas.findIndex((a) => a.slug === area.slug) + 1;
  const outras = areas.filter((a) => a.slug !== area.slug);
  const artigoRelacionado = listarArtigos().find((artigo) => artigo.area === area.slug);
  const t = areaPagina.secoes;

  const indice = [
    { id: ancoras.oQueE, rotulo: t.oQueE },
    { id: ancoras.quemPodeSerAfetado, rotulo: t.quemPodeSerAfetado },
    { id: ancoras.documentos, rotulo: t.documentos },
    { id: ancoras.pontosDeAtencao, rotulo: t.pontosDeAtencao },
    { id: ancoras.referencias, rotulo: t.referencias },
  ];

  return (
    <>
      <CabecalhoPagina
        trilha={[
          { nome: areasSecao.rotulo, caminho: `/#${secoes.areas}` },
          { nome: area.titulo, caminho: `/areas/${area.slug}` },
        ]}
        rotulo={areaPagina.rotuloArea}
        numero={numero}
        titulo={area.titulo}
        introducao={area.introducao}
      />

      <div className="tema-claro bg-surface text-ink">
        <div className="container-site grid gap-12 py-16 lg:grid-cols-12 lg:gap-8 lg:py-24">
          {/* Índice da página */}
          <div className="lg:col-span-3">
            <nav aria-labelledby="indice-titulo" className="lg:sticky lg:top-28">
              <p id="indice-titulo" className="rotulo-mono text-[0.6875rem] text-ink-muted">
                {areaPagina.nestaPagina}
              </p>
              <ol className="mt-4 space-y-2.5 border-l border-rule pl-4 text-[0.9375rem]">
                {indice.map((item) => (
                  <li key={item.id}>
                    <a href={`#${item.id}`} className="link-sublinhado text-ink-muted hover:text-ink">
                      {item.rotulo}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </div>

          <article className="space-y-16 lg:col-span-8 lg:col-start-5 lg:space-y-20">
            <section aria-labelledby={ancoras.oQueE}>
              <TituloBloco id={ancoras.oQueE}>{t.oQueE}</TituloBloco>
              <div className="mt-6 space-y-5 text-[1.0625rem] leading-[1.75]">
                {area.oQueE.map((paragrafo) => (
                  <p key={paragrafo}>{paragrafo}</p>
                ))}
              </div>
            </section>

            <section aria-labelledby={ancoras.quemPodeSerAfetado}>
              <TituloBloco id={ancoras.quemPodeSerAfetado}>{t.quemPodeSerAfetado}</TituloBloco>
              <Lista itens={area.quemPodeSerAfetado} />
            </section>

            <section aria-labelledby={ancoras.documentos}>
              <TituloBloco id={ancoras.documentos}>{t.documentos}</TituloBloco>
              <Lista itens={area.documentos} numerada />
            </section>

            <section aria-labelledby={ancoras.pontosDeAtencao}>
              <TituloBloco id={ancoras.pontosDeAtencao}>{t.pontosDeAtencao}</TituloBloco>
              <Lista itens={area.pontosDeAtencao} />
            </section>

            <section aria-labelledby={ancoras.referencias}>
              <TituloBloco id={ancoras.referencias}>{t.referencias}</TituloBloco>
              <ul className="mt-6 space-y-2 font-mono text-[0.875rem] leading-relaxed text-ink-muted">
                {area.referencias.map((referencia) => (
                  <li key={referencia}>{referencia}</li>
                ))}
              </ul>
            </section>

            <AvisoInformativo>{areaPagina.aviso}</AvisoInformativo>

            {artigoRelacionado && (
              <section aria-labelledby="artigo-relacionado" className="border-t border-rule pt-10">
                <p id="artigo-relacionado" className="rotulo-mono text-[0.6875rem] text-ink-muted">
                  {areaPagina.artigosRelacionados}
                </p>
                <Link
                  href={`/artigos/${artigoRelacionado.slug}`}
                  className="group mt-4 flex items-start justify-between gap-6"
                >
                  <span className="font-serif text-[1.5rem] leading-snug transition-colors group-hover:text-brass-ink">
                    {artigoRelacionado.titulo}
                  </span>
                  <SetaDireita className="mt-2 size-4 shrink-0 text-brass-ink transition-transform group-hover:translate-x-0.5" />
                </Link>
              </section>
            )}

            <p className="border-t border-rule pt-10 text-[1rem] text-ink-muted">
              {areaPagina.contato.texto}{" "}
              <Link href={`/#${secoes.contato}`} className="link-texto text-ink">
                {areaPagina.contato.acao}
              </Link>
              .
            </p>
          </article>
        </div>
      </div>

      {/* Outras áreas */}
      <nav aria-labelledby="outras-areas" className="tema-claro border-t border-rule bg-surface text-ink">
        <div className="container-site py-16 lg:py-20">
          <h2 id="outras-areas" className="rotulo-mono text-ink-muted">
            {areaPagina.outrasAreas}
          </h2>
          <ul className="mt-8 grid gap-x-8 border-t border-rule sm:grid-cols-2 lg:grid-cols-3">
            {outras.map((outra) => (
              <li key={outra.slug} className="border-b border-rule">
                <Link
                  href={`/areas/${outra.slug}`}
                  className="group flex items-center justify-between gap-4 py-5 text-[1rem]"
                >
                  <span className="transition-colors group-hover:text-brass-ink">{outra.titulo}</span>
                  <SetaDireita className="size-4 shrink-0 text-brass-ink transition-transform group-hover:translate-x-0.5" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
