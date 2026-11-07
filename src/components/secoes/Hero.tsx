import { hero } from "@/content/home";
import { Botao, TextoComDestaque } from "../ui";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-titulo"
      className="tema-escuro relative isolate overflow-hidden bg-surface text-ink"
    >
      {/* Textura: grade fina de 1 px, esmaecida nas bordas. */}
      <div
        aria-hidden="true"
        className="grade-fina pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_80%_75%_at_78%_22%,#000_15%,transparent_78%)]"
      />
      {/* Marcações discretas em latão nas interseções da grade. */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute top-0 right-0 -z-10 hidden h-[504px] w-[720px] text-brass/50 lg:block"
        viewBox="0 0 720 504"
        fill="none"
      >
        {[
          [144, 144],
          [432, 72],
          [576, 288],
          [288, 360],
        ].map(([x, y]) => (
          <path
            key={`${x}-${y}`}
            d={`M${x - 6} ${y}h12M${x} ${y - 6}v12`}
            stroke="currentColor"
            strokeWidth="1"
          />
        ))}
      </svg>

      <div className="container-site flex min-h-[100svh] flex-col justify-end pt-32 pb-8 sm:pt-40 lg:min-h-[min(100svh,58rem)] lg:pb-10">
        <div className="max-w-[68rem]">
          <p className="animar-entrada rotulo-mono flex items-center gap-3 text-ink-muted">
            <span aria-hidden="true" className="h-px w-10 bg-brass" />
            {hero.rotulo}
          </p>
          <h1
            id="hero-titulo"
            className="animar-entrada mt-8 font-serif text-[2.75rem] leading-[1.02] tracking-[-0.015em] [--atraso:60ms] min-[400px]:text-[3.1rem] sm:text-[4rem] lg:text-[5.25rem] xl:text-[5.75rem]"
          >
            <TextoComDestaque texto={hero.titulo} />
          </h1>
          <p className="animar-entrada mt-8 max-w-[54ch] text-[1.0625rem] leading-relaxed text-ink-muted [--atraso:120ms] sm:text-[1.1875rem]">
            {hero.subtitulo}
          </p>
          <div className="animar-entrada mt-10 flex flex-col gap-3 [--atraso:180ms] sm:flex-row sm:flex-wrap">
            <Botao href={hero.acoes.primaria.href}>{hero.acoes.primaria.rotulo}</Botao>
            <Botao href={hero.acoes.secundaria.href} variante="secundario">
              {hero.acoes.secundaria.rotulo}
            </Botao>
          </div>
        </div>

        {/* Faixa informativa (somente dados verdadeiros). */}
        <ul className="animar-entrada mt-16 grid border-t border-rule [--atraso:240ms] sm:grid-cols-3 lg:mt-24">
          {hero.faixa.map((item, indice) => (
            <li
              key={item}
              className={`rotulo-mono flex items-center gap-3 border-b border-rule py-4 text-[0.6875rem] leading-snug text-ink-muted sm:border-b-0 sm:py-5 ${
                indice > 0 ? "sm:border-l sm:pl-6" : ""
              } ${indice < hero.faixa.length - 1 ? "sm:pr-6" : ""}`}
            >
              <span aria-hidden="true" className="size-1.5 shrink-0 bg-brass" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
