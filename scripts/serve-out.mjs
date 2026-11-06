#!/usr/bin/env node
/**
 * npm run preview — serve a exportação estática (pasta out/) localmente,
 * com URLs limpas (/artigos/x → out/artigos/x.html), página 404 e
 * compressão, de forma semelhante à hospedagem em produção.
 */
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { join, extname, normalize, sep } from "node:path";
import { brotliCompressSync, gzipSync } from "node:zlib";

const RAIZ = join(process.cwd(), "out");
const PORTA = Number(process.env.PORT || 3000);

const TIPOS = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
  ".woff": "font/woff",
  ".webmanifest": "application/manifest+json",
};
const COMPRIMIVEIS = new Set([".html", ".js", ".css", ".json", ".txt", ".xml", ".svg", ".webmanifest"]);

async function existeArquivo(caminho) {
  try {
    return (await stat(caminho)).isFile();
  } catch {
    return false;
  }
}

async function resolver(urlPath) {
  const limpo = normalize(decodeURIComponent(urlPath.split("?")[0])).replace(/^(\.\.(\/|\\|$))+/, "");
  const base = join(RAIZ, limpo);
  if (!base.startsWith(RAIZ + sep) && base !== RAIZ) return null;
  const candidatos = [base, `${base}.html`, join(base, "index.html")];
  for (const c of candidatos) if (await existeArquivo(c)) return c;
  return null;
}

createServer(async (req, res) => {
  let arquivo = await resolver(req.url || "/");
  let status = 200;
  if (!arquivo) {
    arquivo = join(RAIZ, "404.html");
    status = 404;
  }
  try {
    let corpo = await readFile(arquivo);
    const ext = extname(arquivo);
    const cabecalhos = { "Content-Type": TIPOS[ext] || "application/octet-stream" };
    if ((req.url || "").startsWith("/_next/static/")) {
      cabecalhos["Cache-Control"] = "public, max-age=31536000, immutable";
    }
    const aceita = String(req.headers["accept-encoding"] || "");
    if (COMPRIMIVEIS.has(ext)) {
      if (aceita.includes("br")) {
        corpo = brotliCompressSync(corpo);
        cabecalhos["Content-Encoding"] = "br";
      } else if (aceita.includes("gzip")) {
        corpo = gzipSync(corpo);
        cabecalhos["Content-Encoding"] = "gzip";
      }
      cabecalhos["Vary"] = "Accept-Encoding";
    }
    res.writeHead(status, cabecalhos);
    res.end(corpo);
  } catch {
    res.writeHead(500);
    res.end("Erro ao servir o arquivo. Rode `npm run build` antes de `npm run preview`.");
  }
}).listen(PORTA, () => {
  console.log(`Pré-visualização da exportação estática em http://localhost:${PORTA}`);
});
