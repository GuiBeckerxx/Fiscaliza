import { escritorio } from "@/content/home";
import { secoes } from "@/content/navegacao";
import { CabecalhoSecao } from "../ui";
import { SetaDireita } from "../icones";
import { rotulosAuxiliares } from "@/content/interface";

export function Escritorio({ numero }: { numero: number }) {
  const { etapas, titulo: tituloEtapas } = escritorio.comoTrabalhamos;
  return (
    <section
      id={secoes.escritorio}
      aria-labelledby="escritorio-titulo"
      className="tema-claro bg-surface text-ink"
    >
      <div className="container-site py-24 lg:py-32">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <CabecalhoSecao
            className="lg:col-span-7"
            numero={numero}
            rotulo={escritorio.rotulo}
            titulo={escritorio.titulo}
            idTitulo="escritorio-titulo"
          />
          <div
            data-reveal
            className="space-y-5 text-[1.0625rem] leading-relaxed text-ink-muted lg:col-span-5 lg:pt-12"
          >
            {escritorio.paragrafos.map((paragrafo) => (
              <p key={paragrafo}>{paragrafo}</p>
            ))}
          </div>
        </div>

        <dl data-reveal className="mt-16 grid grid-cols-2 border-t border-rule lg:mt-20 lg:grid-cols-4">
          {escritorio.fatos.map((fato, indice) => (
            <div
              key={fato.rotulo}
              className={`border-b border-rule py-6 pr-4 lg:border-b-0 lg:py-8 ${
                indice % 2 === 1 ? "border-l pl-4 lg:pl-6" : ""
              } ${indice >= 2 ? "lg:border-l lg:pl-6" : ""}`}
            >
              <dt className="rotulo-mono text-[0.6875rem] text-ink-muted">{fato.rotulo}</dt>
              <dd className="mt-3 font-serif text-[1.375rem] leading-tight sm:text-[1.625rem]">
                {fato.valor}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-24 lg:mt-32">
          <h3 className="font-serif text-[1.875rem] leading-tight sm:text-[2.25rem]">{tituloEtapas}</h3>
          <ol className="mt-10 grid gap-10 md:grid-cols-2 md:gap-x-8 lg:grid-cols-4 lg:gap-x-6">
            {etapas.map((etapa, indice) => (
              <li
                key={etapa.titulo}
                data-reveal
                style={{ "--atraso": `${indice * 80}ms` } as React.CSSProperties}
                className="relative border-t border-rule-strong pt-6"
              >
                <span aria-hidden="true" className="absolute -top-[3.5px] left-0 size-1.5 bg-brass" />
                <div className="flex items-center justify-between">
                  <span className="rotulo-mono text-brass-ink">
                    <span className="sr-only">{rotulosAuxiliares.etapa} </span>
                    {String(indice + 1).padStart(2, "0")}
                  </span>
                  {indice < etapas.length - 1 && (
                    <SetaDireita className="hidden size-4 text-ink-muted lg:block" />
                  )}
                </div>
                <h4 className="mt-6 font-serif text-[1.625rem] leading-tight">{etapa.titulo}</h4>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-muted">{etapa.texto}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
