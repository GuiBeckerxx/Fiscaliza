/** Dados estruturados (JSON-LD) renderizados no HTML estático. */
export function JsonLd({ dados }: { dados: unknown }) {
  if (!dados) return null;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(dados).replace(/</g, "\\u003c"),
      }}
    />
  );
}
