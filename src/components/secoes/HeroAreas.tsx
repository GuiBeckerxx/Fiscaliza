"use client";

import Link from "next/link";
import { useId, useState } from "react";
import type { IconeArea } from "@/content/types";
import { IconeDaArea, SetaDiagonal, SetaDireita } from "../icones";

type ItemArea = { slug: string; titulo: string; resumo: string; icone: IconeArea };

/**
 * Coluna de áreas da abertura: os ícones escolhem qual área exibe o resumo;
 * cada título leva à página da área. Sem JavaScript, a primeira área fica
 * aberta e todos os links funcionam.
 */
export function HeroAreas({
  itens,
  textos,
}: {
  itens: ItemArea[];
  textos: { rotulo: string; grupoIcones: string; destacar: string };
}) {
  const base = useId();
  const [ativo, setAtivo] = useState(0);
  const idResumo = (i: number) => `${base}-resumo-${i}`;

  return (
    <div>
      <p className="rotulo-mono text-[0.6875rem] text-ink-muted">{textos.rotulo}</p>

      <div role="group" aria-label={textos.grupoIcones} className="mt-4 flex flex-wrap gap-2">
        {itens.map((item, i) => {
          const selecionado = i === ativo;
          return (
            <button
              key={item.slug}
              type="button"
              aria-pressed={selecionado}
              aria-controls={idResumo(i)}
              aria-label={`${textos.destacar} ${item.titulo}`}
              onClick={() => setAtivo(i)}
              className={`inline-flex size-9 items-center justify-center rounded-full border transition-colors duration-300 ${
                selecionado
                  ? "border-bronze bg-bronze text-white"
                  : "border-brass/60 bg-surface/60 text-brass-ink hover:border-bronze hover:text-bronze-escuro"
              }`}
            >
              <IconeDaArea nome={item.icone} className="size-4" />
            </button>
          );
        })}
      </div>

      <ul className="mt-7 space-y-3.5">
        {itens.map((item, i) => {
          const selecionado = i === ativo;
          return (
            <li key={item.slug}>
              <Link
                href={`/areas/${item.slug}`}
                className={`group flex items-start gap-3 text-[0.9375rem] leading-snug transition-colors ${
                  selecionado ? "font-medium text-ink" : "text-ink-muted hover:text-ink"
                }`}
              >
                {selecionado ? (
                  <SetaDiagonal className="mt-0.5 size-4 shrink-0 text-bronze" />
                ) : (
                  <SetaDireita className="mt-0.5 size-4 shrink-0 text-brass-ink/70 transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none" />
                )}
                <span>{item.titulo}</span>
              </Link>
              <div
                id={idResumo(i)}
                inert={!selecionado}
                className="grid transition-[grid-template-rows] duration-300 ease-[var(--ease-suave)] motion-reduce:transition-none"
                style={{ gridTemplateRows: selecionado ? "1fr" : "0fr" }}
              >
                <p className="overflow-hidden pl-7 text-[0.8125rem] leading-relaxed text-ink-muted">
                  <span className="block pt-2">{item.resumo}</span>
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
