/**
 * Tipos do conteúdo editável do site.
 *
 * Convenção de placeholders: todo dado ainda não confirmado aparece entre
 * colchetes no próprio valor (ex.: "[ANO]", "[CIDADE]") e é sinalizado com
 * um comentário de confirmação ao lado. Valores entre colchetes são tratados
 * como pendentes pelo código: links não são gerados e os dados não entram
 * nos dados estruturados (JSON-LD). Rode `npm run pendencias` para listar.
 */

export type Link = {
  rotulo: string;
  href: string;
};

export type InscricaoOab = {
  uf: string;
  numero: string;
};

export type Socio = {
  /** Identificador usado em artigos (campo `autor`). */
  id: string;
  nome: string;
  /** "Sócio" ou "Sócia". */
  cargo: string;
  /** Inscrição principal primeiro; suplementares, se houver, em seguida. */
  inscricoes: InscricaoOab[];
  /**
   * Formação acadêmica e títulos. Somente itens verdadeiros e comprováveis
   * (Provimento 205/2021, art. 4º, § 1º). Não mencionar cargos ou empregos
   * anteriores, salvo magistério (CED, art. 44, § 2º).
   */
  formacao: string[];
  linkedin?: string;
  /** Caminho de uma foto em /public (ex.: "/socios/nome.webp"). Opcional. */
  foto?: string;
};

export type Area = {
  slug: string;
  titulo: string;
  /** Texto do card na página inicial (cerca de duas linhas). */
  resumo: string;
  /** Parágrafo de abertura da página interna. */
  introducao: string;
  oQueE: string[];
  quemPodeSerAfetado: string[];
  documentos: string[];
  pontosDeAtencao: string[];
  referencias: string[];
  /** Descrição usada em metadata/Open Graph. */
  descricaoSeo: string;
};

export type Artigo = {
  slug: string;
  titulo: string;
  resumo: string;
  /** Data de publicação no formato AAAA-MM-DD. */
  data: string;
  /** `id` de um sócio em src/content/socios.ts. */
  autor: string;
  tema: string;
  /** `slug` de uma área relacionada (opcional). */
  area?: string;
};

export type Pergunta = {
  pergunta: string;
  resposta: string[];
};

export type SecaoDocumento = {
  titulo: string;
  /** Na ordem de exibição: texto = parágrafo; lista de textos = lista. */
  conteudo: (string | string[])[];
};
