#!/usr/bin/env node
/**
 * npm run lint:copy
 *
 * Procura, em src/, termos vedados ou de risco segundo o Provimento CFOAB
 * nº 205/2021 e o Código de Ética e Disciplina da OAB (arts. 39 a 47).
 * Encerra com código 1 (e interrompe o `npm run build`) se encontrar algum.
 *
 * A busca ignora maiúsculas/minúsculas e acentos ("Grátis" = "gratis") e
 * alcança textos, comentários, atributos alt, metadata e artigos MDX.
 *
 * Exceções legítimas (ex.: o nome da cidade de Vitória/ES) devem ser
 * incluídas em PERMITIDOS, com justificativa.
 */
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative, extname, basename } from "node:path";

const RAIZ = process.cwd();
const PASTAS = ["src"];
const EXTENSOES = new Set([
  ".ts", ".tsx", ".js", ".jsx", ".mjs", ".cjs", ".md", ".mdx",
  ".json", ".css", ".html", ".txt", ".svg", ".xml", ".webmanifest",
]);
const EXTENSOES_IMAGEM = new Set([".svg", ".png", ".jpg", ".jpeg", ".webp", ".gif", ".avif", ".ico"]);

/**
 * Termos vedados. Os padrões são aplicados ao texto em minúsculas e sem
 * acentos (o "º" é preservado).
 */
const TERMOS = [
  // Lista obrigatória do projeto
  { termo: "honorário(s)", re: /\bhonorarios?\b/, motivo: "referência a honorários (Prov. 205/2021, art. 3º, I)" },
  { termo: "grátis", re: /\bgratis\b/, motivo: "referência a gratuidade (Prov. 205/2021, art. 3º, I)" },
  { termo: "gratuito(a)", re: /\bgratuit(o|a|os|as)\b/, motivo: "referência a gratuidade (Prov. 205/2021, art. 3º, I)" },
  { termo: "gratuidade", re: /\bgratuidade\b/, motivo: "referência a gratuidade (Prov. 205/2021, art. 3º, I)" },
  { termo: "desconto(s)", re: /\bdescontos?\b/, motivo: "referência a descontos (Prov. 205/2021, art. 3º, I)" },
  { termo: "garantido(a)", re: /\bgarantid(o|a|os|as)\b/, motivo: "promessa de resultado (Prov. 205/2021, art. 6º)" },
  { termo: "garantia de", re: /\bgarantias? de\b/, motivo: "promessa de resultado (Prov. 205/2021, art. 6º)" },
  { termo: "recupere", re: /\brecuperem?\b/, motivo: "sugestão de resultado (Prov. 205/2021, art. 6º)" },
  { termo: "melhor(es)", re: /\bmelhor(es)?\b/, motivo: "expressão de comparação (Prov. 205/2021, art. 3º, IV)" },
  { termo: "líder", re: /\blider(es)?\b/, motivo: "autoengrandecimento (Prov. 205/2021, art. 3º, IV)" },
  { termo: "nº 1", re: /\bn\.?\s?[º°]\s?1(?!\d|[.,/]\d)/, motivo: "autoengrandecimento (Prov. 205/2021, art. 3º, IV)" },
  { termo: "especialista", re: /\bespecialistas?\b/, motivo: "especialidade sem título certificado (Prov. 205/2021, art. 3º, III)" },
  { termo: "ganhamos", re: /\bganhamos\b/, motivo: "menção a resultados (Prov. 205/2021, arts. 4º, § 2º, e 6º)" },
  { termo: "vitória(s)", re: /\bvitorias?\b/, motivo: "menção a resultados (Prov. 205/2021, arts. 4º, § 2º, e 6º)" },
  { termo: "depoimento(s)", re: /\bdepoimentos?\b/, motivo: "depoimentos de clientes (CED, art. 39; Prov. 205/2021, art. 3º)" },

  // Complementares
  { termo: "especializado(a)", re: /\bespecializad(o|a|os|as)\b/, motivo: "especialidade sem título certificado (Prov. 205/2021, art. 3º, III)" },
  { termo: "liderança", re: /\blideranca\b/, motivo: "autoengrandecimento (Prov. 205/2021, art. 3º, IV)" },
  { termo: "número 1", re: /\bnumero (1|um)\b(?![.,/]\d)/, motivo: "autoengrandecimento (Prov. 205/2021, art. 3º, IV)" },
  { termo: "primeiro lugar", re: /\bprimeiro lugar\b/, motivo: "autoengrandecimento (Prov. 205/2021, art. 3º, IV)" },
  { termo: "o mais experiente", re: /\b(o|a|os|as) mais experientes?\b/, motivo: "comparação (Prov. 205/2021, art. 3º, IV)" },
  { termo: "somos referência", re: /\b(somos|sendo|tornou-se|consolidou-se como) (uma |a )?referencia\b/, motivo: "autoengrandecimento (Prov. 205/2021, art. 3º, IV)" },
  { termo: "excelência", re: /\bexcelencia\b/, motivo: "autoengrandecimento (Prov. 205/2021, art. 3º, IV)" },
  { termo: "renomado(a)", re: /\brenomad(o|a|os|as)\b/, motivo: "autoengrandecimento (Prov. 205/2021, art. 3º, IV)" },
  { termo: "premiado / prêmio / ranking", re: /\b(premiad(o|a|os|as)|premios?|rankings?)\b/, motivo: "prêmios e rankings (Prov. 205/2021, art. 5º, § 1º)" },
  { termo: "garantimos", re: /\bgarantimos\b/, motivo: "promessa de resultado (Prov. 205/2021, art. 6º)" },
  { termo: "recuperar / recuperamos", re: /\brecuper(ar|amos)\b/, motivo: "sugestão de resultado (Prov. 205/2021, art. 6º)" },
  { termo: "vencemos / causa ganha", re: /\b(vencemos|causas? ganhas?|ganho de causa)\b/, motivo: "menção a resultados (Prov. 205/2021, art. 6º)" },
  { termo: "dinheiro esquecido", re: /\b(dinheiro|valores?) esquecid(o|a|os|as)\b/, motivo: "sugestão de resultado / captação (Prov. 205/2021, art. 6º)" },
  { termo: "descubra quanto", re: /\bdescubra quanto\b/, motivo: "sugestão de resultado / captação (Prov. 205/2021, art. 6º)" },
  { termo: "você tem direito", re: /\bvoce tem direito\b/, motivo: "sugestão de resultado (Prov. 205/2021, art. 6º)" },
  { termo: "dinheiro de volta", re: /\bdinheiro de volta\b/, motivo: "sugestão de resultado (Prov. 205/2021, art. 6º)" },
  { termo: "sem custo", re: /\bsem custos?\b/, motivo: "referência a gratuidade (Prov. 205/2021, art. 3º, I)" },
  { termo: "100% de…", re: /\b100\s?%\s+(de|dos|das|em|garantid\w*|segur\w*|eficaz|aprovad\w*)\b/, motivo: "promessa ou percentual de êxito (Prov. 205/2021, art. 6º)" },
  { termo: "taxa de êxito", re: /\b(taxa|percentual|indice) de (exito|sucesso)\b/, motivo: "percentual de êxito (Prov. 205/2021, art. 6º)" },
  { termo: "calculadora / simulador", re: /\b(calculadoras?|simuladore?s?|simule|calcule)\b/, motivo: "simulador de restituição ou indenização (captação)" },
  { termo: "imperdível / aproveite", re: /\b(imperdivel|aproveite|nao perca|ligue ja|ultimas vagas)\b/, motivo: "expressão persuasiva (Prov. 205/2021, art. 3º, IV)" },
  { termo: "parcelamos / aceitamos", re: /\b(parcelamos|aceitamos|em ate \d+ ?x)\b/, motivo: "forma de pagamento (Prov. 205/2021, art. 3º, I)" },
  { termo: "aggregateRating / review", re: /\b(aggregaterating|reviews?)\b/, motivo: "avaliações em dados estruturados (vedado no projeto)" },
];

/** Trechos legítimos removidos antes da verificação (texto sem acentos). */
const PERMITIDOS = [
  // Nomes próprios de municípios que contêm "Vitória".
  /\bvitoria\s*(\/|-|–|,|\()\s*es\b/g,
  /\bvitoria da conquista\b/g,
  /\bvitoria de santo antao\b/g,
];

function normalizar(texto) {
  return texto
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase();
}

function listarArquivos(dir) {
  const saida = [];
  for (const nome of readdirSync(dir)) {
    const caminho = join(dir, nome);
    const info = statSync(caminho);
    if (info.isDirectory()) saida.push(...listarArquivos(caminho));
    else saida.push(caminho);
  }
  return saida;
}

const ocorrencias = [];
const arquivosImagemSuspeitos = [];
let total = 0;

for (const pasta of [...PASTAS, "public"]) {
  let arquivos = [];
  try {
    arquivos = listarArquivos(join(RAIZ, pasta));
  } catch {
    continue;
  }
  for (const arquivo of arquivos) {
    const ext = extname(arquivo).toLowerCase();

    // Símbolos oficiais da OAB não podem ser usados (Prov. 205/2021, art. 5º, § 2º).
    if (EXTENSOES_IMAGEM.has(ext) && /(^|[^a-z])oab([^a-z]|$)/i.test(basename(arquivo))) {
      arquivosImagemSuspeitos.push(relative(RAIZ, arquivo));
    }

    if (!PASTAS.includes(pasta) || !EXTENSOES.has(ext)) continue;
    total++;
    const linhas = readFileSync(arquivo, "utf8").split(/\r?\n/);
    linhas.forEach((linhaOriginal, indice) => {
      let linha = normalizar(linhaOriginal);
      for (const permitido of PERMITIDOS) linha = linha.replace(permitido, (m) => " ".repeat(m.length));
      for (const { termo, re, motivo } of TERMOS) {
        const encontrado = re.exec(linha);
        if (encontrado) {
          ocorrencias.push({
            arquivo: relative(RAIZ, arquivo),
            linha: indice + 1,
            coluna: encontrado.index + 1,
            termo,
            motivo,
            trecho: linhaOriginal.trim().slice(0, 140),
          });
        }
      }
    });
  }
}

if (ocorrencias.length === 0 && arquivosImagemSuspeitos.length === 0) {
  console.log(`lint:copy ✓ ${total} arquivos verificados em ${PASTAS.join(", ")}/ — nenhum termo vedado encontrado.`);
  process.exit(0);
}

console.error("\nlint:copy ✗ termos vedados encontrados (Provimento CFOAB 205/2021 / CED arts. 39–47):\n");
for (const o of ocorrencias) {
  console.error(`  ${o.arquivo}:${o.linha}:${o.coluna}  “${o.termo}” — ${o.motivo}`);
  console.error(`      ${o.trecho}\n`);
}
for (const arquivo of arquivosImagemSuspeitos) {
  console.error(`  ${arquivo}  — nome de imagem sugere símbolo da OAB (vedado: Prov. 205/2021, art. 5º, § 2º)\n`);
}
console.error(
  `${ocorrencias.length + arquivosImagemSuspeitos.length} ocorrência(s). Reescreva os trechos ou, se for um nome próprio legítimo, inclua-o em PERMITIDOS em scripts/lint-copy.mjs.\n`
);
process.exit(1);
