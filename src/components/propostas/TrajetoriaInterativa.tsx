"use client";

import Link from "next/link";
import { useId, useRef, useState } from "react";
import { SetaDireita } from "../icones";

type Etapa = { titulo: string; texto: string; areas: { slug: string; titulo: string }[] };

/**
 * Linha do tempo em abas (padrão WAI-ARIA): setas (horizontais e verticais),
 * Home e End navegam entre as etapas; cada etapa mostra as áreas de atuação
 * relacionadas.
 */
export function TrajetoriaInterativa({
  etapas,
  textos,
}: {
  etapas: Etapa[];
  textos: { rotulo: string; dica: string };
}) {
  const base = useId();
  const [ativa, setAtiva] = useState(0);
  const abas = useRef<(HTMLButtonElement | null)[]>([]);
  const progresso = etapas.length > 1 ? ativa / (etapas.length - 1) : 0;

  function aoTeclar(evento: React.KeyboardEvent, i: number) {
    const ultimo = etapas.length - 1;
    const destino =
      evento.key === "ArrowRight" || evento.key === "ArrowDown" ? (i === ultimo ? 0 : i + 1)
      : evento.key === "ArrowLeft" || evento.key === "ArrowUp" ? (i === 0 ? ultimo : i - 1)
      : evento.key === "Home" ? 0
      : evento.key === "End" ? ultimo
      : null;
    if (destino === null) return;
    evento.preventDefault();
    setAtiva(destino);
    abas.current[destino]?.focus();
  }

  return (
    <div className="tema-escuro relative overflow-hidden rounded-xl border border-rule bg-surface text-ink shadow-[0_40px_80px_-50px_rgb(11_15_23/0.7)]">
      <div
        aria-hidden="true"
        className="grade-fina pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,#000,transparent_85%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(40%_60%_at_50%_0%,rgb(180_147_90/0.14),transparent_70%)]"
      />

      <div className="relative px-5 pt-6 pb-7 sm:px-10 sm:pt-8 sm:pb-9">
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
          <p className="rotulo-mono text-[0.625rem] text-ink-muted sm:text-[0.6875rem]">{textos.rotulo}</p>
          <p className="text-[0.8125rem] text-ink-muted">{textos.dica}</p>
        </div>

        {/* Linha do tempo: vertical no celular, horizontal a partir de 640px */}
        <div className="relative mt-6 sm:mt-8">
          <div aria-hidden="true" className="absolute top-[7px] right-[12.5%] left-[12.5%] hidden h-px bg-rule-strong sm:block">
            <div
              className="h-full bg-brass transition-[width] duration-[400ms] ease-[var(--ease-suave)] motion-reduce:transition-none"
              style={{ width: `${progresso * 100}%` }}
            />
          </div>
          <div aria-hidden="true" className="absolute top-[22px] bottom-[22px] left-[7px] w-px bg-rule-strong sm:hidden">
            <div
              className="w-full bg-brass transition-[height] duration-[400ms] ease-[var(--ease-suave)] motion-reduce:transition-none"
              style={{ height: `${progresso * 100}%` }}
            />
          </div>
          <div role="tablist" aria-label={textos.rotulo} className="relative grid sm:grid-cols-4">
            {etapas.map((item, i) => {
              const selecionada = i === ativa;
              return (
                <button
                  key={item.titulo}
                  ref={(elemento) => {
                    abas.current[i] = elemento;
                  }}
                  id={`${base}-aba-${i}`}
                  type="button"
                  role="tab"
                  aria-selected={selecionada}
                  aria-controls={`${base}-painel-${i}`}
                  tabIndex={selecionada ? 0 : -1}
                  onClick={() => setAtiva(i)}
                  onKeyDown={(evento) => aoTeclar(evento, i)}
                  className="group flex h-11 items-center gap-3.5 rounded-md text-left sm:h-auto sm:flex-col sm:gap-2.5 sm:px-1 sm:pb-1 sm:text-center"
                >
                  <span
                    aria-hidden="true"
                    className={`size-[15px] shrink-0 rounded-full border transition-[background-color,border-color,box-shadow] duration-300 ${
                      i <= ativa ? "border-brass bg-brass" : "border-rule-strong bg-surface group-hover:border-brass"
                    } ${selecionada ? "shadow-[0_0_0_6px_rgb(180_147_90/0.18)]" : ""}`}
                  />
                  <span aria-hidden="true" className="rotulo-mono text-[0.625rem] text-brass">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`text-[0.9375rem] leading-tight ${
                      selecionada ? "font-medium text-ink" : "text-ink-muted group-hover:text-ink"
                    }`}
                  >
                    {item.titulo}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Painéis: a partir de 1024px todos ocupam a mesma célula da grade,
            de modo que a altura acompanha o maior deles e a página não "pula"
            ao trocar de etapa; os inativos ficam invisíveis (fora da leitura e
            do foco). No celular, só o painel ativo é exibido. */}
        <div className="mt-7 grid border-t border-rule pt-7">
          {etapas.map((item, i) => {
            const selecionada = i === ativa;
            return (
              <div
                key={item.titulo}
                id={`${base}-painel-${i}`}
                role="tabpanel"
                aria-labelledby={`${base}-aba-${i}`}
                className={`col-start-1 row-start-1 content-start gap-6 lg:grid-cols-12 lg:gap-8 ${
                  selecionada ? "grid" : "hidden lg:invisible lg:grid"
                }`}
              >
                <p
                  className={`font-serif text-[1.375rem] leading-snug [--atraso:0ms] sm:text-[1.625rem] lg:col-span-7 ${
                    selecionada ? "animar-entrada" : ""
                  }`}
                >
                  {item.texto}
                </p>
                <ul className="lg:col-span-5">
                  {item.areas.map((area, j) => (
                    <li
                      key={area.slug}
                      className={selecionada ? "animar-entrada" : ""}
                      style={{ "--atraso": `${60 + j * 60}ms` } as React.CSSProperties}
                    >
                      <Link
                        href={`/areas/${area.slug}`}
                        className="group flex items-center justify-between gap-4 border-b border-rule py-2.5 text-[0.9375rem] text-ink transition-colors hover:text-brass"
                      >
                        {area.titulo}
                        <SetaDireita className="size-4 shrink-0 text-brass transition-transform duration-300 group-hover:translate-x-0.5" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
