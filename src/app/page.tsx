import type { Metadata } from "next";
import { Hero } from "@/components/secoes/Hero";
import { Escritorio } from "@/components/secoes/Escritorio";
import { Areas } from "@/components/secoes/Areas";
import { Socios } from "@/components/secoes/Socios";
import { Transparencia } from "@/components/secoes/Transparencia";
import { Conteudo } from "@/components/secoes/Conteudo";
import { Faq } from "@/components/secoes/Faq";
import { Contato } from "@/components/secoes/Contato";
import { JsonLd } from "@/components/JsonLd";
import { dadosEscritorio } from "@/lib/dados-estruturados";
import { metadadosPagina } from "@/lib/metadados";
import { site } from "@/content/site";

export const metadata: Metadata = metadadosPagina({
  titulo: `${site.razaoSocial} · ${site.descritor}`,
  descricao: site.descricao,
  caminho: "/",
  tituloAbsoluto: true,
});

export default function PaginaInicial() {
  return (
    <>
      <Hero />
      <Escritorio numero={1} />
      <Areas numero={2} />
      <Socios numero={3} />
      <Transparencia numero={4} />
      <Conteudo numero={5} />
      <Faq numero={6} />
      <Contato numero={7} />
      <JsonLd dados={dadosEscritorio()} />
    </>
  );
}
