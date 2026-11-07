"use client";

import { useId, useState } from "react";
import { Mais } from "./icones";
import type { Pergunta } from "@/content/types";

/**
 * Acordeão acessível (padrão WAI-ARIA): botões dentro de títulos, com
 * aria-expanded/aria-controls; painéis com role="region". Painéis fechados
 * ficam inertes (fora do foco e da árvore de acessibilidade).
 */
export function Acordeao({ itens }: { itens: Pergunta[] }) {
  const base = useId();
  const [aberto, setAberto] = useState<number | null>(null);

  return (
    <div className="border-t border-rule">
      {itens.map((item, indice) => {
        const idBotao = `${base}-botao-${indice}`;
        const idPainel = `${base}-painel-${indice}`;
        const expandido = aberto === indice;
        return (
          <div key={item.pergunta} className="border-b border-rule">
            <h3>
              <button
                type="button"
                id={idBotao}
                aria-expanded={expandido}
                aria-controls={idPainel}
                onClick={() => setAberto(expandido ? null : indice)}
                className="group flex w-full items-start justify-between gap-6 py-6 text-left"
              >
                <span className="flex gap-4">
                  <span aria-hidden="true" className="rotulo-mono pt-1.5 text-[0.6875rem] text-brass-ink">
                    {String(indice + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[1.0625rem] leading-snug font-medium text-ink transition-colors group-hover:text-brass-ink sm:text-[1.125rem]">
                    {item.pergunta}
                  </span>
                </span>
                <span
                  aria-hidden="true"
                  className="mt-0.5 inline-flex size-7 shrink-0 items-center justify-center rounded-full border border-rule-strong transition-[border-color,transform] duration-300 ease-[var(--ease-suave)] group-hover:border-brass motion-reduce:transition-none"
                  style={{ transform: expandido ? "rotate(45deg)" : undefined }}
                >
                  <Mais className="size-3.5" />
                </span>
              </button>
            </h3>
            <div
              id={idPainel}
              role="region"
              aria-labelledby={idBotao}
              inert={!expandido}
              className="grid transition-[grid-template-rows] duration-300 ease-[var(--ease-suave)] motion-reduce:transition-none"
              style={{ gridTemplateRows: expandido ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <div className="space-y-3 pr-12 pb-7 pl-[2.6rem] text-[0.98rem] leading-relaxed text-ink-muted">
                  {item.resposta.map((paragrafo) => (
                    <p key={paragrafo}>{paragrafo}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
