import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import { rotulosInterface } from "@/content/navegacao";
import { rotulosAuxiliares } from "@/content/interface";

/**
 * Componentes usados na renderização dos artigos MDX. A tipografia é
 * definida pela classe `prosa` (globals.css), aplicada no contêiner.
 */
const components = {
  a: ({ href = "", children, ...props }) => {
    if (/^https?:\/\//.test(href)) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
          {children}
          <span className="sr-only"> {rotulosInterface.abreEmNovaAba}</span>
        </a>
      );
    }
    return (
      <Link href={href} {...props}>
        {children}
      </Link>
    );
  },
  // Tabelas largas rolam na horizontal no celular, acessíveis pelo teclado.
  table: ({ children, ...props }) => (
    <div className="overflow-x-auto" role="region" aria-label={rotulosAuxiliares.tabela} tabIndex={0}>
      <table {...props}>{children}</table>
    </div>
  ),
} satisfies MDXComponents;

export function useMDXComponents(): MDXComponents {
  return components;
}
