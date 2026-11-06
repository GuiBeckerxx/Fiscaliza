import Link from "next/link";
import { areas } from "@/content/areas";
import { areasSecao } from "@/content/home";
import { secoes } from "@/content/navegacao";
import { CabecalhoSecao } from "../ui";
import { SetaDiagonal, SetaDireita } from "../icones";

export function Areas({ numero }: { numero: number }) {
  return (
    <section
      id={secoes.areas}
      aria-labelledby="areas-titulo"
      className="tema-escuro bg-surface text-ink"
    >
      <div className="container-site py-24 lg:py-32">
        <CabecalhoSecao
          numero={numero}
          rotulo={areasSecao.rotulo}
          titulo={areasSecao.titulo}
          introducao={areasSecao.introducao}
          idTitulo="areas-titulo"
        />

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {areas.map((area, indice) => (
            <li
              key={area.slug}
              data-reveal
              style={{ "--atraso": `${(indice % 3) * 80}ms` } as React.CSSProperties}
            >
              <article className="group relative flex h-full flex-col rounded-lg border border-rule bg-surface p-6 transition-[border-color,background-color] duration-300 ease-[var(--ease-suave)] hover:border-brass/60 hover:bg-surface-raised has-[a:focus-visible]:outline-2 has-[a:focus-visible]:outline-offset-4 has-[a:focus-visible]:outline-focus sm:p-7">
                <div className="flex items-start justify-between">
                  <span className="rotulo-mono text-brass-ink" aria-hidden="true">
                    {String(indice + 1).padStart(2, "0")}
                  </span>
                  <SetaDiagonal className="size-4 text-ink-muted transition-[color,transform] duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brass motion-reduce:transition-none" />
                </div>
                <h3 className="mt-8 font-serif text-[1.625rem] leading-[1.12] sm:mt-12 sm:text-[1.75rem]">
                  {area.titulo}
                </h3>
                <p className="mt-4 text-[0.9375rem] leading-relaxed text-ink-muted">{area.resumo}</p>
                <div className="mt-auto pt-8">
                  <Link
                    href={`/areas/${area.slug}`}
                    className="inline-flex items-center gap-2 text-[0.875rem] text-ink after:absolute after:inset-0 after:content-[''] focus-visible:outline-none"
                  >
                    <span className="link-sublinhado group-hover:bg-[length:100%_1px]">
                      {areasSecao.saibaMais}
                    </span>
                    <span className="sr-only">: {area.titulo}</span>
                    <SetaDireita className="size-3.5 text-brass transition-transform duration-300 group-hover:translate-x-0.5 motion-reduce:transition-none" />
                  </Link>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
