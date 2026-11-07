import Link from "next/link";
import { hero } from "@/content/home";
import { Botao, TextoComDestaque } from "../ui";
import { SetaDireita } from "../icones";

/** Proposta B — "Capa editorial": tipografia monumental sobre grafite. */
export function HeroCapa() {
  return (
    <section
      aria-labelledby="hero-titulo"
      className="tema-escuro relative isolate overflow-hidden bg-surface text-ink"
    >
      {/* Guias de coluna (12 colunas) e grade fina */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="container-site grid h-full grid-cols-4 lg:grid-cols-12">
          {Array.from({ length: 12 }, (_, i) => (
            <div
              key={i}
              className={`border-l border-rule/70 ${i >= 4 ? "hidden lg:block" : ""} ${
                i === 3 ? "border-r lg:border-r-0" : ""
              } ${i === 11 ? "lg:border-r" : ""}`}
            />
          ))}
        </div>
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(35%_40%_at_30%_62%,rgb(180_147_90/0.16),transparent_70%)]"
      />

      <div className="container-site flex min-h-[100svh] flex-col pt-24 pb-10 lg:min-h-[min(100svh,60rem)] lg:pt-28 lg:pb-20">
        {/* Expediente: faixa informativa */}
        <ul className="animar-entrada rotulo-mono grid gap-1.5 border-y border-rule-strong py-3 text-[0.625rem] text-ink-muted sm:grid-cols-3 sm:gap-6 sm:text-[0.6875rem]">
          {hero.faixa.map((item, i) => (
            <li
              key={item}
              className={i === 1 ? "sm:text-center" : i === 2 ? "sm:text-right" : ""}
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Tipografia monumental (decorativa: o título real é o h1 abaixo) */}
        <div
          aria-hidden="true"
          className="my-auto py-10 font-serif leading-[0.84] tracking-[-0.035em] text-ink sm:py-14 lg:py-12"
        >
          <span className="block overflow-hidden pb-[0.06em]">
            <span className="proposta-revelar block text-[clamp(3.6rem,min(20vw,27svh),15.5rem)] sm:text-[clamp(3.6rem,min(15.5vw,27svh),15.5rem)]">
              Tributário
            </span>
          </span>
          <span className="block overflow-hidden pb-[0.06em] text-right">
            <span className="proposta-revelar block text-[clamp(3.6rem,min(20vw,27svh),15.5rem)] sm:text-[clamp(3.6rem,min(15.5vw,27svh),15.5rem)] [--atraso:90ms]">
              <em className="pr-[0.08em] text-brass italic">&amp;</em>Bancário
            </span>
          </span>
        </div>

        {/* Bloco editorial */}
        <div className="grid gap-8 border-t border-rule-strong pt-8 lg:grid-cols-12 lg:gap-8">
          <h1
            id="hero-titulo"
            className="animar-entrada font-serif text-[1.875rem] leading-[1.08] tracking-[-0.01em] [--atraso:160ms] sm:text-[2.375rem] lg:col-span-5"
          >
            <TextoComDestaque texto={hero.titulo} classeDestaque="text-brass" />
          </h1>
          <p className="animar-entrada max-w-[46ch] text-[1rem] leading-relaxed text-ink-muted [--atraso:220ms] lg:col-span-4 lg:pt-2">
            {hero.subtitulo}
          </p>
          <div className="animar-entrada flex flex-col items-start gap-5 [--atraso:280ms] lg:col-span-3 lg:items-end lg:pt-1">
            <Botao href={hero.acoes.primaria.href}>{hero.acoes.primaria.rotulo}</Botao>
            <Link
              href={hero.acoes.secundaria.href}
              className="group inline-flex items-center gap-2 text-[0.875rem] font-medium text-ink"
            >
              <span className="link-sublinhado group-hover:bg-[length:100%_1px]">
                {hero.acoes.secundaria.rotulo}
              </span>
              <SetaDireita className="size-4 text-brass transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
