/**
 * Placeholders são valores entre colchetes, ex.: "[ANO]", "[URL do LinkedIn]".
 * Enquanto pendentes, não geram links nem entram em dados estruturados.
 */
const PLACEHOLDER = /\[[^\]\n]+\]/;

export function pendente(valor?: string | null): boolean {
  return !valor || PLACEHOLDER.test(valor);
}

export function definido(valor?: string | null): valor is string {
  return !pendente(valor);
}

/** Remove recursivamente campos pendentes (para JSON-LD). */
export function semPendencias<T>(valor: T): T | undefined {
  if (typeof valor === "string") return definido(valor) ? valor : undefined;
  if (Array.isArray(valor)) {
    const itens = valor
      .map((item) => semPendencias(item))
      .filter((item) => item !== undefined);
    return (itens.length ? itens : undefined) as T | undefined;
  }
  if (valor && typeof valor === "object") {
    const saida: Record<string, unknown> = {};
    for (const [chave, item] of Object.entries(valor)) {
      const limpo = semPendencias(item);
      if (limpo !== undefined) saida[chave] = limpo;
    }
    // Objetos só com "@type"/"@context" ficam vazios de informação e são
    // descartados; referências {"@id": ...} são mantidas.
    const chaves = Object.keys(saida).filter(
      (c) => c !== "@type" && c !== "@context",
    );
    return (chaves.length ? saida : undefined) as T | undefined;
  }
  return valor;
}
