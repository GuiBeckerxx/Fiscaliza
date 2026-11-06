import { readFileSync } from "node:fs";
import { join } from "node:path";
import { artigos } from "@/content/artigos";
import type { Artigo } from "@/content/types";

/**
 * Leitura dos artigos (somente em Server Components / build).
 * O tempo de leitura é estimado a partir do texto do arquivo MDX.
 */

export type ArtigoComLeitura = Artigo & { minutosLeitura: number };

const PALAVRAS_POR_MINUTO = 200;

function minutosDeLeitura(slug: string): number {
  const arquivo = join(process.cwd(), "src", "content", "artigos", `${slug}.mdx`);
  const texto = readFileSync(arquivo, "utf8")
    .replace(/^(import|export)\s.*$/gm, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/[#>*_|`\-]/g, " ");
  const palavras = texto.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(palavras / PALAVRAS_POR_MINUTO));
}

export function listarArtigos(): ArtigoComLeitura[] {
  return [...artigos]
    .sort((a, b) => b.data.localeCompare(a.data))
    .map((artigo) => ({ ...artigo, minutosLeitura: minutosDeLeitura(artigo.slug) }));
}

export function obterArtigo(slug: string): ArtigoComLeitura | undefined {
  return listarArtigos().find((artigo) => artigo.slug === slug);
}
