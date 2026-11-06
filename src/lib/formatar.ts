import type { InscricaoOab } from "@/content/types";
import { site } from "@/content/site";

const formatoData = new Intl.DateTimeFormat("pt-BR", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

const formatoDataCurta = new Intl.DateTimeFormat("pt-BR", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
  timeZone: "UTC",
});

/** "2026-11-06" → "6 de novembro de 2026" */
export function dataPorExtenso(iso: string): string {
  return formatoData.format(new Date(`${iso}T12:00:00Z`));
}

/** "2026-11-06" → "06/11/2026" */
export function dataCurta(iso: string): string {
  return formatoDataCurta.format(new Date(`${iso}T12:00:00Z`));
}

/** { uf: "SP", numero: "123.456" } → "OAB/SP nº 123.456" */
export function inscricaoOab({ uf, numero }: InscricaoOab): string {
  return `OAB/${uf} nº ${numero}`;
}

export function registroSociedade(): string {
  return inscricaoOab(site.registroSociedade);
}

export function enderecoEmLinha(): string {
  const { logradouro, bairro, cidade, uf, cep } = site.endereco;
  return `${logradouro}, ${bairro}, ${cidade}/${uf}, CEP ${cep}`;
}

/** Iniciais para o retrato neutro, ignorando trechos entre colchetes. */
export function iniciais(nome: string): string {
  const partes = nome
    .replace(/\[[^\]]*\]/g, " ")
    .split(/\s+/)
    .filter((p) => p && !/^(de|da|do|das|dos|e)$/i.test(p));
  if (partes.length === 0) return "";
  const primeira = partes[0][0];
  const ultima = partes.length > 1 ? partes[partes.length - 1][0] : "";
  return `${primeira}${ultima}`.toUpperCase();
}

/** Converte _trecho_ em itálico (usado nos títulos). */
export function partesComDestaque(
  texto: string,
): { texto: string; destaque: boolean }[] {
  return texto
    .split(/(_[^_]+_)/g)
    .filter(Boolean)
    .map((parte) =>
      parte.startsWith("_") && parte.endsWith("_")
        ? { texto: parte.slice(1, -1), destaque: true }
        : { texto: parte, destaque: false },
    );
}

/** Remove a marcação de destaque (para metadata e atributos). */
export function semDestaque(texto: string): string {
  return texto.replace(/_([^_]+)_/g, "$1");
}
