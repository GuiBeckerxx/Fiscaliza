import Link from "next/link";
import { hero } from "@/content/home";
import { site } from "@/content/site";
import { getArea } from "@/content/areas";
import { trajetoria } from "@/content/propostas";
import { Botao, TextoComDestaque } from "../ui";
import { SetaDireita } from "../icones";
import { TrajetoriaInterativa } from "./TrajetoriaInterativa";

/** Proposta C — "Trajetória": temas por etapa da vida profissional. */
export function HeroTrajetoria() {
  const etapas = trajetoria.etapas.map((etapa) => ({
    titulo: etapa.titulo,
    texto: etapa.texto,
    areas: etapa.areas.map((slug) => ({ slug, titulo: getArea(slug)?.titulo ?? slug })),
  }));

  return (
    <section
      id="proposta-tema-claro"
      aria-labelledby="hero-titulo"
      className="tema-claro relative isolate overflow-hidden bg-surface text-ink"
    >
      <div
        aria-hidden="true"
        className="grade-fina pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_70%_55%_at_50%_30%,#000_10%,transparent_80%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(50%_40%_at_50%_25%,#fbfaf7,transparent_75%)]"
      />

      <div className="container-site pt-28 pb-14 sm:pt-32 lg:pb-16">
        <div className="mx-auto max-w-[56rem] text-center">
          <p className="animar-entrada rotulo-mono inline-flex items-center gap-3 text-ink-muted">
            <span aria-hidden="true" className="h-px w-8 bg-brass" />
            {site.descritor}
            <span aria-hidden="true" className="h-px w-8 bg-brass" />
          </p>
          <h1
            id="hero-titulo"
            className="animar-entrada mt-6 font-serif text-[2.5rem] leading-[1.03] tracking-[-0.015em] [--atraso:60ms] min-[400px]:text-[2.8rem] sm:text-[3.75rem] lg:text-[4.25rem]"
          >
            <TextoComDestaque texto={hero.titulo} classeDestaque="text-latao-titulo" />
          </h1>
          <p className="animar-entrada mx-auto mt-6 max-w-[54ch] text-[1.0625rem] leading-relaxed text-ink-muted [--atraso:120ms]">
            {hero.subtitulo}
          </p>
          <div className="animar-entrada mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-4 [--atraso:180ms]">
            <Botao href={hero.acoes.primaria.href} variante="destaque">
              {hero.acoes.primaria.rotulo}
            </Botao>
            <Link
              href={hero.acoes.secundaria.href}
              className="group inline-flex items-center gap-2 text-[0.875rem] font-medium text-ink"
            >
              <span className="link-sublinhado group-hover:bg-[length:100%_1px]">
                {hero.acoes.secundaria.rotulo}
              </span>
              <SetaDireita className="size-4 text-bronze transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>

        <div className="animar-entrada mt-12 [--atraso:240ms] lg:mt-14">
          <TrajetoriaInterativa etapas={etapas} textos={{ rotulo: trajetoria.rotulo, dica: trajetoria.dica }} />
        </div>

        <ul className="rotulo-mono mt-8 flex flex-wrap justify-center gap-x-8 gap-y-2 text-[0.6875rem] text-ink-muted">
          {hero.faixa.map((item) => (
            <li key={item} className="flex items-center gap-2.5">
              <span aria-hidden="true" className="size-1.5 bg-brass" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
