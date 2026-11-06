import Image from "next/image";
import { socios } from "@/content/socios";
import { sociosSecao } from "@/content/home";
import { secoes } from "@/content/navegacao";
import { site } from "@/content/site";
import { iniciais, inscricaoOab } from "@/lib/formatar";
import { CabecalhoSecao, LinkExterno } from "../ui";
import { rotulosAuxiliares } from "@/content/interface";

/** Quadro neutro com iniciais, usado enquanto não houver foto profissional. */
function RetratoNeutro({ nome }: { nome: string }) {
  return (
    <div aria-hidden="true" className="grade-fina absolute inset-0 flex items-center justify-center [background-size:36px_36px]">
      <span className="font-serif text-[5.5rem] leading-none text-ink-muted/45">{iniciais(nome)}</span>
      <span className="absolute inset-x-6 bottom-6 h-px bg-rule-strong" />
    </div>
  );
}

export function Socios({ numero }: { numero: number }) {
  return (
    <section
      id={secoes.socios}
      aria-labelledby="socios-titulo"
      className="tema-claro bg-surface text-ink"
    >
      <div className="container-site py-24 lg:py-32">
        <CabecalhoSecao
          numero={numero}
          rotulo={sociosSecao.rotulo}
          titulo={sociosSecao.titulo}
          idTitulo="socios-titulo"
        />
        <p className="mt-5 max-w-[60ch] text-[1.0625rem] leading-relaxed text-ink-muted">
          {sociosSecao.introducao.antes}
          <LinkExterno href={site.cna} className="link-texto text-ink" comIcone={false}>
            {sociosSecao.introducao.link}
          </LinkExterno>
          {sociosSecao.introducao.depois}
        </p>

        <ul className="mt-14 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {socios.map((socio, indice) => (
            <li
              key={socio.id}
              id={`socio-${socio.id}`}
              data-reveal
              style={{ "--atraso": `${(indice % 3) * 80}ms` } as React.CSSProperties}
            >
              <div className="relative aspect-square overflow-hidden rounded-md border border-rule bg-surface-raised sm:aspect-[4/5]">
                {socio.foto ? (
                  <Image
                    src={socio.foto}
                    alt={rotulosAuxiliares.retrato(socio.nome)}
                    fill
                    sizes="(min-width: 1024px) 380px, (min-width: 640px) 45vw, 100vw"
                    className="object-cover"
                  />
                ) : (
                  <RetratoNeutro nome={socio.nome} />
                )}
              </div>

              <p className="rotulo-mono mt-6 text-ink-muted">{socio.cargo}</p>
              <h3 className="mt-2 font-serif text-[1.75rem] leading-tight">{socio.nome}</h3>

              <dl className="mt-5 space-y-4 border-t border-rule pt-5 text-[0.9375rem]">
                <div>
                  <dt className="rotulo-mono text-[0.6875rem] text-ink-muted">{sociosSecao.inscricao}</dt>
                  <dd className="mt-1.5 font-mono text-[0.875rem]">
                    {socio.inscricoes.map(inscricaoOab).join(" · ")}
                  </dd>
                </div>
                {socio.formacao.length > 0 && (
                  <div>
                    <dt className="rotulo-mono text-[0.6875rem] text-ink-muted">{sociosSecao.formacao}</dt>
                    <dd className="mt-1.5">
                      <ul className="space-y-1.5 leading-relaxed">
                        {socio.formacao.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </dd>
                  </div>
                )}
              </dl>

              {socio.linkedin && (
                <p className="mt-5 text-[0.9375rem]">
                  <LinkExterno
                    href={socio.linkedin}
                    rotuloAcessivel={rotulosAuxiliares.perfilLinkedin(socio.nome)}
                    className="link-sublinhado"
                  >
                    {sociosSecao.perfilLinkedin}
                  </LinkExterno>
                </p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
