import type { Metadata } from "next";
import { listaArtigosPagina } from "@/content/artigos";
import { listarArtigos } from "@/lib/artigos";
import { metadadosPagina } from "@/lib/metadados";
import { CabecalhoPagina } from "@/components/CabecalhoPagina";
import { ListaArtigos } from "@/components/ListaArtigos";

export const metadata: Metadata = metadadosPagina({
  titulo: listaArtigosPagina.titulo,
  descricao: listaArtigosPagina.descricao,
  caminho: "/artigos",
});

export default function PaginaArtigos() {
  return (
    <>
      <CabecalhoPagina
        trilha={[{ nome: listaArtigosPagina.rotulo, caminho: "/artigos" }]}
        rotulo={listaArtigosPagina.rotulo}
        titulo={listaArtigosPagina.titulo}
        introducao={listaArtigosPagina.descricao}
      />
      <div className="tema-claro bg-surface text-ink">
        <div className="container-site py-16 lg:py-24">
          <ListaArtigos artigos={listarArtigos()} nivelTitulo="h2" />
        </div>
      </div>
    </>
  );
}
