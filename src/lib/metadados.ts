import type { Metadata } from "next";
import { site } from "@/content/site";

/** Imagem de compartilhamento gerada em src/app/og.png/route.tsx. */
export const imagemCompartilhamento = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: `${site.razaoSocial} — ${site.descritor}`,
  type: "image/png",
};

type Opcoes = {
  titulo: string;
  descricao: string;
  caminho: string;
  /** Usa o título sem o sufixo do template (página inicial). */
  tituloAbsoluto?: boolean;
  tipo?: "website" | "article";
  publicadoEm?: string;
  autores?: string[];
};

/**
 * Metadados completos de uma página (título, descrição, URL canônica,
 * Open Graph e Twitter). No Next.js, o `openGraph` de uma página substitui
 * o do layout; por isso a imagem é repetida aqui.
 */
export function metadadosPagina({
  titulo,
  descricao,
  caminho,
  tituloAbsoluto = false,
  tipo = "website",
  publicadoEm,
  autores,
}: Opcoes): Metadata {
  const tituloCompartilhamento = tituloAbsoluto ? titulo : `${titulo} · ${site.nome}`;
  return {
    title: tituloAbsoluto ? { absolute: titulo } : titulo,
    description: descricao,
    alternates: { canonical: caminho },
    authors: autores?.map((name) => ({ name })),
    openGraph: {
      type: tipo,
      locale: "pt_BR",
      siteName: site.razaoSocial,
      title: tituloCompartilhamento,
      description: descricao,
      url: caminho,
      images: [imagemCompartilhamento],
      ...(tipo === "article" ? { publishedTime: publicadoEm, authors: autores } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: tituloCompartilhamento,
      description: descricao,
      images: [imagemCompartilhamento.url],
    },
  };
}
