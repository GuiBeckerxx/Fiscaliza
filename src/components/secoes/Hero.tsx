import Image from "next/image";
import Link from "next/link";
import { hero } from "@/content/home";
import { areas } from "@/content/areas";
import { Botao, TextoComDestaque } from "../ui";
import { Monograma } from "../Logo";
import { SetaDireita } from "../icones";
import { HeroAreas } from "./HeroAreas";

/**
 * Painel central em arco. Com `hero.imagem` definida, exibe a foto do
 * escritório ou dos sócios; sem ela, uma composição com o monograma.
 */
function PainelCentral() {
  const { imagem, painel } = hero;
  return (
    <div className="animar-entrada relative mx-auto h-[25rem] w-full max-w-[21rem] [--atraso:120ms] sm:h-[28rem] md:h-full md:min-h-[30rem] md:max-w-none lg:min-h-0">
      {/* Brilho suave atrás do painel */}
      <div
        aria-hidden="true"
        className="absolute inset-x-[-14%] top-[6%] bottom-0 -z-10 rounded-full bg-[radial-gradient(closest-side,rgb(180_147_90/0.24),transparent)] blur-2xl"
      />
      <div className="tema-escuro relative h-full overflow-hidden rounded-t-full rounded-b-lg bg-grafite shadow-[0_40px_80px_-40px_rgb(11_15_23/0.55)] lg:rounded-b-none">
        {imagem ? (
          <>
            <Image
              src={imagem.src}
              alt={imagem.alt}
              fill
              priority
              sizes="(min-width: 1024px) 400px, (min-width: 768px) 50vw, 90vw"
              className="object-cover"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-grafite/50 via-transparent" />
          </>
        ) : (
          <div aria-hidden="true" className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(120%_75%_at_50%_0%,#1e2534_0%,#0b0f17_68%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(48%_30%_at_50%_33%,rgb(180_147_90/0.28),transparent_72%)]" />
            <div className="grade-fina absolute inset-0 [background-size:36px_36px] [mask-image:linear-gradient(to_bottom,#000_15%,transparent_92%)]" />
            <div className="absolute inset-3 rounded-t-full border border-brass/35" />
            <div className="absolute inset-6 rounded-t-full border border-brass/15" />
            <div className="absolute inset-x-0 top-[26%] flex justify-center">
              <Monograma className="w-[44%] max-w-[11rem] text-offwhite" />
            </div>
            <div className="absolute inset-x-0 bottom-12 flex flex-col items-center gap-2.5 px-6 text-center">
              <span className="h-px w-10 bg-brass" />
              <span className="font-serif text-[1.375rem] leading-tight text-ink">{painel.nome}</span>
              <span className="rotulo-mono text-[0.625rem] tracking-[0.18em] text-ink-muted">
                {painel.legenda}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function Hero() {
  const itensAreas = areas.map(({ slug, titulo, resumo, icone }) => ({ slug, titulo, resumo, icone }));

  return (
    <section
      aria-labelledby="hero-titulo"
      className="tema-claro relative isolate overflow-hidden bg-surface text-ink"
    >
      {/* Fundo: luz suave ao centro e grade fina de 1 px. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(55%_60%_at_52%_42%,#fbfaf7_0%,rgb(251_250_247/0)_75%)]"
      />
      <div
        aria-hidden="true"
        className="grade-fina pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_55%_65%_at_52%_40%,#000_0%,transparent_75%)]"
      />

      <div className="container-site grid gap-12 pt-28 pb-14 sm:pt-32 md:grid-cols-2 md:gap-x-10 lg:min-h-[min(100svh,58rem)] lg:grid-cols-12 lg:gap-x-8 lg:pb-0">
        {/* Esquerda: título, texto, ações e faixa informativa */}
        <div className="flex flex-col lg:col-span-5 lg:pb-14">
          <h1
            id="hero-titulo"
            className="animar-entrada font-serif text-[2.625rem] leading-[1.02] tracking-[-0.015em] min-[400px]:text-[2.9rem] sm:text-[3.4rem] lg:text-[3.4rem] xl:text-[3.9rem]"
          >
            <TextoComDestaque texto={hero.titulo} classeDestaque="text-latao-titulo" />
          </h1>
          <p className="animar-entrada mt-7 max-w-[44ch] text-[1.0625rem] leading-relaxed text-ink-muted [--atraso:80ms]">
            {hero.subtitulo}
          </p>
          <div className="animar-entrada mt-9 flex flex-wrap items-center gap-x-6 gap-y-4 [--atraso:140ms]">
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
              <SetaDireita className="size-4 text-bronze transition-transform duration-300 group-hover:translate-x-0.5 motion-reduce:transition-none" />
            </Link>
          </div>
          <ul className="animar-entrada mt-12 flex flex-col gap-2.5 [--atraso:200ms] lg:mt-auto lg:pt-12">
            {hero.faixa.map((item) => (
              <li
                key={item}
                className="rotulo-mono flex items-center gap-3 text-[0.6875rem] leading-snug text-ink-muted"
              >
                <span aria-hidden="true" className="size-1.5 shrink-0 bg-brass" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Centro: painel em arco */}
        <div className="lg:col-span-4 lg:self-stretch">
          <PainelCentral />
        </div>

        {/* Direita: áreas de atuação e números factuais */}
        <div className="flex flex-col gap-12 md:col-span-2 md:grid md:grid-cols-2 md:items-end lg:col-span-3 lg:flex lg:items-stretch lg:pb-14">
          <div className="animar-entrada [--atraso:180ms]">
            <HeroAreas itens={itensAreas} textos={hero.areas} />
          </div>
          <dl className="animar-entrada grid grid-cols-2 gap-6 [--atraso:240ms] lg:mt-auto">
            {hero.numeros.map((numero) => (
              <div key={numero.rotulo}>
                <dt className="rotulo-mono text-[0.6875rem] text-ink-muted">{numero.rotulo}</dt>
                <dd className="mt-2 font-serif text-[3rem] leading-none">{numero.valor}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
