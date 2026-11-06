import type { Artigo } from "./types";

/**
 * Índice dos artigos. O texto de cada artigo fica em
 * src/content/artigos/<slug>.mdx (mesmo `slug` informado aqui).
 *
 * Para publicar um novo artigo:
 * 1. crie o arquivo .mdx com o texto;
 * 2. adicione um item nesta lista (o tempo de leitura é calculado sozinho).
 *
 * Tom obrigatório: educativo e neutro, sem incitar ao litígio, sem
 * casos concretos e sem chamada para contratação.
 */
export const artigos: Artigo[] = [
  {
    slug: "jornada-do-bancario-seis-horas-e-cargo-de-confianca",
    titulo: "Jornada do bancário: a regra das seis horas e o cargo de confiança",
    resumo:
      "O que a CLT estabelece sobre a duração do trabalho nos bancos e como a jurisprudência analisa o enquadramento em cargo de confiança.",
    data: "2026-10-27", // [CONFIRMAR] data de publicação
    autor: "bressan",
    tema: "Direito do trabalho bancário",
    area: "jornada-bancaria-cargo-de-confianca",
  },
  {
    slug: "previdencia-complementar-tabela-progressiva-ou-regressiva",
    titulo:
      "Previdência complementar: como funcionam as tabelas progressiva e regressiva",
    resumo:
      "As diferenças entre os dois regimes de tributação, o momento da escolha e os fatores que costumam ser considerados na decisão.",
    data: "2026-10-06", // [CONFIRMAR] data de publicação
    autor: "rahman",
    tema: "Previdência complementar",
    area: "imposto-de-renda-previdencia-complementar",
  },
  {
    slug: "isencao-de-imposto-de-renda-por-doenca-grave",
    titulo:
      "Isenção de imposto de renda por doença grave: o que diz a legislação",
    resumo:
      "Quem pode ser alcançado pela isenção, quais rendimentos são abrangidos e quais documentos a legislação exige para o reconhecimento.",
    data: "2026-09-15", // [CONFIRMAR] data de publicação
    autor: "melo",
    tema: "Imposto de renda",
    area: "isencao-imposto-de-renda-doenca-grave",
  },
];

export const artigoPagina = {
  rotulo: "Artigo",
  publicadoEm: "Publicado em",
  autoria: "Autoria",
  leitura: "Leitura",
  tema: "Tema",
  aviso:
    "Este texto tem caráter exclusivamente informativo e reflete a legislação e a jurisprudência na data de publicação. Não constitui consulta jurídica nem substitui a análise individual de cada situação.",
  outrosArtigos: "Outros artigos",
  voltar: "Todos os artigos",
  areaRelacionada: "Área relacionada",
};

export const listaArtigosPagina = {
  rotulo: "Conteúdo",
  titulo: "Artigos informativos",
  descricao:
    "Textos educativos sobre imposto de renda, previdência complementar, jornada bancária e contratos de crédito.",
};
