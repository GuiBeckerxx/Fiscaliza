import { site } from "@/content/site";
import { socios } from "@/content/socios";
import { areas } from "@/content/areas";
import { getSocio } from "@/content/socios";
import type { ArtigoComLeitura } from "./artigos";
import { semPendencias, definido } from "./pendente";
import { urlAbsoluta } from "./config";
import { inscricaoOab } from "./formatar";

/**
 * Dados estruturados (schema.org / JSON-LD) apenas com informações
 * factuais. Campos ainda pendentes ([...]) são omitidos automaticamente.
 * Por regra do projeto, não há notas nem avaliações de clientes.
 */

const idEscritorio = urlAbsoluta("/#escritorio");
const idSocio = (id: string) => urlAbsoluta(`/#socio-${id}`);

/** Pessoa (sócio). Omitida enquanto o nome completo estiver pendente. */
function pessoa(socioId: string) {
  const socio = getSocio(socioId);
  if (!socio || !definido(socio.nome)) return undefined;
  return {
    "@type": "Person",
    "@id": idSocio(socio.id),
    name: socio.nome,
    jobTitle: socio.cargo,
    worksFor: { "@id": idEscritorio },
    identifier: socio.inscricoes
      .filter((inscricao) => definido(inscricao.uf) && definido(inscricao.numero))
      .map((inscricao) => ({
        "@type": "PropertyValue",
        propertyID: `OAB/${inscricao.uf}`,
        value: inscricao.numero,
        name: inscricaoOab(inscricao),
      })),
    sameAs: socio.linkedin ? [socio.linkedin] : undefined,
  };
}

export function dadosEscritorio() {
  const { endereco, horario } = site;
  const grafo = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LegalService",
        "@id": idEscritorio,
        name: site.razaoSocial,
        legalName: site.razaoSocial,
        alternateName: site.nome,
        description: site.descricao,
        url: urlAbsoluta("/"),
        logo: urlAbsoluta("/apple-touch-icon.png"),
        image: urlAbsoluta("/og.png"),
        email: site.email,
        telephone: site.telefoneFixo.internacional,
        foundingDate: site.anoFundacao,
        taxID: site.cnpj,
        address: {
          "@type": "PostalAddress",
          streetAddress: endereco.logradouro,
          addressLocality: endereco.cidade,
          addressRegion: endereco.uf,
          postalCode: endereco.cep,
          addressCountry: "BR",
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: horario.dias,
            opens: horario.abertura,
            closes: horario.fechamento,
          },
        ],
        knowsAbout: areas.map((area) => area.titulo),
        member: socios
          .filter((socio) => definido(socio.nome))
          .map((socio) => ({ "@id": idSocio(socio.id) })),
        sameAs: site.redes.map((rede) => rede.href),
      },
      ...socios.map((socio) => pessoa(socio.id)),
    ],
  };
  return semPendencias(grafo);
}

export function dadosArtigo(artigo: ArtigoComLeitura) {
  return semPendencias({
    "@context": "https://schema.org",
    "@type": "Article",
    headline: artigo.titulo,
    description: artigo.resumo,
    datePublished: artigo.data,
    inLanguage: "pt-BR",
    mainEntityOfPage: urlAbsoluta(`/artigos/${artigo.slug}`),
    image: urlAbsoluta("/og.png"),
    author: pessoa(artigo.autor),
    publisher: {
      "@type": "LegalService",
      "@id": idEscritorio,
      name: site.razaoSocial,
      logo: { "@type": "ImageObject", url: urlAbsoluta("/apple-touch-icon.png") },
    },
  });
}

export function dadosTrilha(itens: { nome: string; caminho: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: itens.map((item, indice) => ({
      "@type": "ListItem",
      position: indice + 1,
      name: item.nome,
      item: urlAbsoluta(item.caminho),
    })),
  };
}
