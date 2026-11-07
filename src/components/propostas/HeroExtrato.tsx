import Link from "next/link";
import { hero } from "@/content/home";
import { site } from "@/content/site";
import { extrato } from "@/content/propostas";
import { Botao, TextoComDestaque } from "../ui";
import { Monograma } from "../Logo";
import { SetaDireita } from "../icones";

/** Proposta A — "Extrato": as áreas como linhas de um documento bancário. */
function Documento() {
  const { registroSociedade: registro, endereco } = site;
  return (
    <div className="relative mx-auto w-full max-w-[34rem] pt-4 pb-6">
      {/* Folhas ao fundo */}
      <div
        aria-hidden="true"
        className="animar-entrada absolute inset-x-8 top-1 bottom-3 rotate-[3.5deg] rounded-[3px] border border-rule bg-[#ebe7df] shadow-[0_24px_40px_-28px_rgb(11_15_23/0.35)] [--atraso:60ms]"
      />
      <div
        aria-hidden="true"
        className="animar-entrada absolute inset-x-4 top-3 bottom-1 -rotate-[2.25deg] rounded-[3px] border border-rule bg-[#f0ede6] shadow-[0_24px_40px_-28px_rgb(11_15_23/0.35)] [--atraso:100ms]"
      />

      {/* Folha principal */}
      <article
        aria-labelledby="extrato-titulo"
        className="animar-entrada relative rounded-[3px] border border-rule bg-[#fcfbf8] px-5 pt-7 pb-6 shadow-[0_44px_70px_-36px_rgb(11_15_23/0.5)] [--atraso:140ms] sm:px-8 sm:pt-9 sm:pb-8"
      >
        {/* Serrilha de destaque no topo */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-[5px] h-[10px] bg-[radial-gradient(circle,#f4f2ed_3.5px,transparent_4px)] bg-[length:14px_10px] bg-repeat-x"
        />

        <header className="flex flex-wrap items-start justify-between gap-x-4 gap-y-3">
          <div className="flex items-center gap-3">
            <Monograma className="size-9 shrink-0 text-ink" />
            <div className="rotulo-mono text-[0.5625rem] leading-relaxed sm:text-[0.625rem]">
              <p className="text-ink">{site.nome}</p>
              <p className="text-ink-muted">Sociedade de Advogados</p>
            </div>
          </div>
          <div className="rotulo-mono ml-auto text-right text-[0.5625rem] leading-relaxed sm:text-[0.625rem]">
            <p id="extrato-titulo" className="text-ink">
              {extrato.titulo}
            </p>
            <p className="text-ink-muted">
              Reg. OAB/{registro.uf} nº {registro.numero}
            </p>
          </div>
        </header>

        <div aria-hidden="true" className="my-5 border-t border-dashed border-rule-strong" />

        <div
          aria-hidden="true"
          className="rotulo-mono grid grid-cols-[1.75rem_1fr_auto] gap-x-3 text-[0.5625rem] text-ink-muted sm:text-[0.625rem]"
        >
          <span>{extrato.colunas.numero}</span>
          <span>{extrato.colunas.area}</span>
          <span>{extrato.colunas.base}</span>
        </div>

        <ol className="mt-2">
          {extrato.linhas.map((linha, i) => (
            <li
              key={linha.slug}
              className="animar-entrada"
              style={{ "--atraso": `${260 + i * 70}ms` } as React.CSSProperties}
            >
              <Link
                href={`/areas/${linha.slug}`}
                className="group grid grid-cols-[1.75rem_1fr_auto] items-baseline gap-x-3 border-b border-rule py-3 text-[0.875rem] transition-colors duration-200 hover:bg-[#f3efe7] sm:text-[0.9375rem]"
              >
                <span className="font-mono text-[0.75rem] text-brass-ink">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex min-w-0 items-baseline gap-2">
                  <span className="text-ink">{linha.rotulo}</span>
                  <span
                    aria-hidden="true"
                    className="hidden flex-1 -translate-y-1 border-b border-dotted border-rule-strong sm:block"
                  />
                </span>
                <span className="flex items-center gap-1.5 font-mono text-[0.6875rem] text-ink-muted transition-colors group-hover:text-ink sm:text-[0.75rem]">
                  {linha.base}
                  <SetaDireita className="size-3 text-bronze opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                </span>
              </Link>
            </li>
          ))}
        </ol>

        <div aria-hidden="true" className="mt-5 border-t border-dashed border-rule-strong" />

        <footer className="rotulo-mono mt-4 flex flex-wrap items-center justify-between gap-x-4 gap-y-1 text-[0.5625rem] text-ink-muted sm:text-[0.625rem]">
          <span>Atendimento presencial em {endereco.cidade} e online</span>
          <span>Desde {site.anoFundacao}</span>
        </footer>
        <p className="mt-3 text-[0.6875rem] text-ink-muted">{extrato.rodape}</p>
      </article>
    </div>
  );
}

export function HeroExtrato() {
  return (
    <section
      id="proposta-tema-claro"
      aria-labelledby="hero-titulo"
      className="tema-claro relative isolate overflow-hidden bg-surface text-ink"
    >
      <div
        aria-hidden="true"
        className="grade-fina pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_75%_70%_at_68%_45%,#000_10%,transparent_78%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(38%_48%_at_74%_52%,rgb(180_147_90/0.16),transparent_70%)]"
      />

      <div className="container-site grid items-center gap-14 pt-28 pb-16 sm:pt-32 lg:min-h-[min(100svh,58rem)] lg:grid-cols-12 lg:gap-8 lg:pb-20">
        <div className="lg:col-span-6 lg:pr-6">
          <p className="animar-entrada rotulo-mono flex items-center gap-3 text-ink-muted">
            <span aria-hidden="true" className="h-px w-10 bg-brass" />
            {site.descritor}
          </p>
          <h1
            id="hero-titulo"
            className="animar-entrada mt-7 font-serif text-[2.625rem] leading-[1.02] tracking-[-0.015em] [--atraso:60ms] min-[400px]:text-[2.9rem] sm:text-[3.6rem] xl:text-[4.25rem]"
          >
            <TextoComDestaque texto={hero.titulo} classeDestaque="text-latao-titulo" />
          </h1>
          <p className="animar-entrada mt-7 max-w-[46ch] text-[1.0625rem] leading-relaxed text-ink-muted [--atraso:120ms]">
            {hero.subtitulo}
          </p>
          <div className="animar-entrada mt-9 flex flex-wrap items-center gap-x-6 gap-y-4 [--atraso:180ms]">
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

        <div className="lg:col-span-6">
          <Documento />
        </div>
      </div>
    </section>
  );
}
