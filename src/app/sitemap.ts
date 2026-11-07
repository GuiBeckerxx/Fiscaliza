import type { MetadataRoute } from "next";
import { areas } from "@/content/areas";
import { politicaDePrivacidade, termosDeUso } from "@/content/legal";
import { listarArtigos } from "@/lib/artigos";
import { urlAbsoluta } from "@/lib/config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const artigos = listarArtigos();
  return [
    { url: urlAbsoluta("/"), changeFrequency: "monthly", priority: 1 },
    ...areas.map((area) => ({
      url: urlAbsoluta(`/areas/${area.slug}`),
      changeFrequency: "yearly" as const,
      priority: 0.8,
    })),
    {
      url: urlAbsoluta("/artigos"),
      lastModified: artigos[0]?.data,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...artigos.map((artigo) => ({
      url: urlAbsoluta(`/artigos/${artigo.slug}`),
      lastModified: artigo.data,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
    {
      url: urlAbsoluta("/politica-de-privacidade"),
      lastModified: politicaDePrivacidade.atualizadaEm,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: urlAbsoluta("/termos-de-uso"),
      lastModified: termosDeUso.atualizadaEm,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}
