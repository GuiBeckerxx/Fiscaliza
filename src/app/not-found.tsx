import type { Metadata } from "next";
import { Botao, RotuloSecao } from "@/components/ui";
import { paginaNaoEncontrada as textos } from "@/content/interface";

export const metadata: Metadata = {
  title: textos.titulo,
  robots: { index: false, follow: true },
};

export default function NaoEncontrada() {
  return (
    <section className="tema-escuro relative overflow-hidden bg-surface text-ink">
      <div
        aria-hidden="true"
        className="grade-fina pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_70%_80%_at_80%_10%,#000_15%,transparent_75%)]"
      />
      <div className="container-site relative flex min-h-[80svh] flex-col justify-center pt-32 pb-20">
        <RotuloSecao>{textos.rotulo}</RotuloSecao>
        <h1 className="mt-6 font-serif text-[2.75rem] leading-[1.04] sm:text-[4rem]">{textos.titulo}</h1>
        <p className="mt-6 max-w-[52ch] text-[1.0625rem] leading-relaxed text-ink-muted">{textos.texto}</p>
        <div className="mt-10">
          <Botao href="/">{textos.voltar}</Botao>
        </div>
      </div>
    </section>
  );
}
