import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { artigoPagina, listaArtigosPagina } from "@/content/artigos";
import { conteudoSecao } from "@/content/home";
import { getArea } from "@/content/areas";
import { getSocio } from "@/content/socios";
import { listarArtigos, obterArtigo } from "@/lib/artigos";
import { dadosArtigo } from "@/lib/dados-estruturados";
import { metadadosPagina } from "@/lib/metadados";
import { dataPorExtenso, inscricaoOab } from "@/lib/formatar";
import { CabecalhoPagina } from "@/components/CabecalhoPagina";
import { AvisoInformativo } from "@/components/AvisoInformativo";
import { JsonLd } from "@/components/JsonLd";
import { SetaDireita } from "@/components/icones";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return listarArtigos().map((artigo) => ({ slug: artigo.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const artigo = obterArtigo(slug);
  if (!artigo) return {};
  const autor = getSocio(artigo.autor);
  return metadadosPagina({
    titulo: artigo.titulo,
    descricao: artigo.resumo,
    caminho: `/artigos/${artigo.slug}`,
    tipo: "article",
    publicadoEm: artigo.data,
    autores: autor ? [autor.nome] : undefined,
  });
}

export default async function PaginaArtigo({ params }: Props) {
  const { slug } = await params;
  const artigo = obterArtigo(slug);
  if (!artigo) notFound();

  const { default: Texto } = await import(`@/content/artigos/${slug}.mdx`);
  const autor = getSocio(artigo.autor);
  const area = artigo.area ? getArea(artigo.area) : undefined;
  const outros = listarArtigos().filter((a) => a.slug !== artigo.slug).slice(0, 2);

  const meta = [
    {
      rotulo: artigoPagina.publicadoEm,
      valor: <time dateTime={artigo.data}>{dataPorExtenso(artigo.data)}</time>,
    },
    {
      rotulo: artigoPagina.autoria,
      valor: autor ? (
        <>
          {autor.nome}
          <span className="block font-mono text-[0.8125rem] text-ink-muted">
            {autor.inscricoes.slice(0, 1).map(inscricaoOab).join("")}
          </span>
        </>
      ) : null,
    },
    {
      rotulo: artigoPagina.leitura,
      valor: `${artigo.minutosLeitura} ${conteudoSecao.minutosDeLeitura}`,
    },
  ];

  return (
    <>
      <CabecalhoPagina
        trilha={[
          { nome: listaArtigosPagina.rotulo, caminho: "/artigos" },
          { nome: artigo.titulo, caminho: `/artigos/${artigo.slug}` },
        ]}
        rotulo={artigo.tema}
        titulo={artigo.titulo}
        introducao={artigo.resumo}
      />

      <div className="tema-claro bg-surface text-ink">
        <div className="container-site grid gap-12 py-16 lg:grid-cols-12 lg:gap-8 lg:py-24">
          <div className="lg:col-span-3">
            <dl className="grid grid-cols-2 gap-6 border-t border-rule-strong pt-6 sm:grid-cols-3 lg:sticky lg:top-28 lg:grid-cols-1">
              {meta.map((item) => (
                <div key={item.rotulo}>
                  <dt className="rotulo-mono text-[0.6875rem] text-ink-muted">{item.rotulo}</dt>
                  <dd className="mt-1.5 text-[0.9375rem] leading-snug">{item.valor}</dd>
                </div>
              ))}
              {area && (
                <div>
                  <dt className="rotulo-mono text-[0.6875rem] text-ink-muted">{artigoPagina.areaRelacionada}</dt>
                  <dd className="mt-1.5 text-[0.9375rem] leading-snug">
                    <Link href={`/areas/${area.slug}`} className="link-texto">
                      {area.titulo}
                    </Link>
                  </dd>
                </div>
              )}
            </dl>
          </div>

          <article className="lg:col-span-7 lg:col-start-5">
            <div className="prosa max-w-[68ch]">
              <Texto />
            </div>
            <div className="mt-14 max-w-[68ch]">
              <AvisoInformativo>{artigoPagina.aviso}</AvisoInformativo>
            </div>
          </article>
        </div>
      </div>

      {outros.length > 0 && (
        <nav aria-labelledby="outros-artigos" className="tema-claro border-t border-rule bg-surface text-ink">
          <div className="container-site py-16 lg:py-20">
            <div className="flex items-end justify-between gap-6">
              <h2 id="outros-artigos" className="rotulo-mono text-ink-muted">
                {artigoPagina.outrosArtigos}
              </h2>
              <Link href="/artigos" className="link-sublinhado text-[0.9375rem]">
                {artigoPagina.voltar}
              </Link>
            </div>
            <ul className="mt-8 grid gap-x-8 border-t border-rule md:grid-cols-2">
              {outros.map((outro) => (
                <li key={outro.slug} className="border-b border-rule">
                  <Link href={`/artigos/${outro.slug}`} className="group flex items-start justify-between gap-6 py-6">
                    <span>
                      <span className="rotulo-mono block text-[0.6875rem] text-ink-muted">
                        {dataPorExtenso(outro.data)}
                      </span>
                      <span className="mt-2 block font-serif text-[1.375rem] leading-snug transition-colors group-hover:text-brass-ink">
                        {outro.titulo}
                      </span>
                    </span>
                    <SetaDireita className="mt-8 size-4 shrink-0 text-brass-ink transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      )}

      <JsonLd dados={dadosArtigo(artigo)} />
    </>
  );
}
