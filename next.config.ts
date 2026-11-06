import type { NextConfig } from "next";
import createMDX from "@next/mdx";

/**
 * Exportação estática (pasta `out/`), pronta para a Vercel ou qualquer
 * servidor de arquivos estáticos. Não há servidor Node em produção:
 * o formulário de contato envia para um endpoint externo configurável
 * (ver README → "Formulário de contato").
 */
const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    // A otimização padrão do next/image exige servidor. Na exportação
    // estática as imagens são servidas como estão: envie fotos já
    // otimizadas (ex.: WebP, até ~1200 px de largura).
    unoptimized: true,
  },
};

const withMDX = createMDX({
  options: {
    // Plugins informados por nome (string) para compatibilidade com o Turbopack.
    remarkPlugins: ["remark-gfm"],
  },
});

export default withMDX(nextConfig);
