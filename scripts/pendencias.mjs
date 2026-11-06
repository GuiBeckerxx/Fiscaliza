#!/usr/bin/env node
/**
 * npm run pendencias          → lista os itens marcados com [CONFIRMAR]
 * npm run pendencias:strict   → idem, mas encerra com erro se houver itens
 *                               (use antes de publicar a versão definitiva)
 *
 * Se a pasta out/ existir (após `npm run build`), também lista os
 * placeholders entre colchetes que ainda aparecem nas páginas geradas.
 */
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, relative, extname } from "node:path";

const RAIZ = process.cwd();
const estrito = process.argv.includes("--strict");

function listar(dir, extensoes) {
  const saida = [];
  for (const nome of readdirSync(dir)) {
    const caminho = join(dir, nome);
    if (statSync(caminho).isDirectory()) saida.push(...listar(caminho, extensoes));
    else if (extensoes.has(extname(caminho))) saida.push(caminho);
  }
  return saida;
}

// 1) Marcadores [CONFIRMAR] no código-fonte
const marcadores = [];
for (const arquivo of listar(join(RAIZ, "src"), new Set([".ts", ".tsx", ".mdx", ".md"]))) {
  readFileSync(arquivo, "utf8")
    .split(/\r?\n/)
    .forEach((linha, i) => {
      if (linha.includes("[CONFIRMAR]")) {
        marcadores.push({ arquivo: relative(RAIZ, arquivo), linha: i + 1, texto: linha.trim() });
      }
    });
}

console.log(`\nPendências [CONFIRMAR] no código-fonte: ${marcadores.length}\n`);
let atual = "";
for (const m of marcadores) {
  if (m.arquivo !== atual) {
    atual = m.arquivo;
    console.log(`  ${atual}`);
  }
  console.log(`    l.${String(m.linha).padEnd(4)} ${m.texto.slice(0, 150)}`);
}

// 2) Placeholders visíveis nas páginas geradas
const pastaOut = join(RAIZ, "out");
let visiveis = 0;
if (existsSync(pastaOut)) {
  const porPagina = new Map();
  for (const arquivo of listar(pastaOut, new Set([".html"]))) {
    const texto = readFileSync(arquivo, "utf8")
      .replace(/<script[\s\S]*?<\/script>/gi, " ")
      .replace(/<style[\s\S]*?<\/style>/gi, " ")
      .replace(/<[^>]+>/g, " ")
      .replace(/&amp;/g, "&");
    const encontrados = texto.match(/\[[^\]\n<>]{1,90}\]/g) ?? [];
    if (encontrados.length) porPagina.set(relative(pastaOut, arquivo), [...new Set(encontrados)]);
  }
  console.log(`\nPlaceholders visíveis nas páginas geradas (out/): ${porPagina.size} página(s)\n`);
  for (const [pagina, itens] of porPagina) {
    visiveis += itens.length;
    console.log(`  ${pagina}: ${itens.join("  ")}`);
  }
} else {
  console.log("\n(Rode `npm run build` para listar também os placeholders visíveis nas páginas.)");
}

console.log("");
if (estrito && (marcadores.length > 0 || visiveis > 0)) {
  console.error("pendencias:strict ✗ há dados a confirmar antes da publicação.\n");
  process.exit(1);
}
