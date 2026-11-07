import { site } from "@/content/site";

/**
 * Configurações por variável de ambiente (ver .env.example).
 * Variáveis NEXT_PUBLIC_* são embutidas no build estático.
 */

/** URL pública do site, sem barra final. */
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || site.url).replace(
  /\/+$/,
  "",
);

/** Endpoint que recebe o formulário de contato (POST JSON). */
export const formEndpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT?.trim() || "";

/**
 * ID de medição do Google Analytics 4 (ex.: G-XXXXXXX). Vazio = sem
 * analytics e sem banner de cookies (padrão do projeto).
 */
export const analyticsId = process.env.NEXT_PUBLIC_GA_ID?.trim() || "";

export function urlAbsoluta(caminho = "/"): string {
  return `${siteUrl}${caminho.startsWith("/") ? caminho : `/${caminho}`}`;
}
