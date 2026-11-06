import Link from "next/link";
import { rotulosInterface } from "@/content/navegacao";
import { JsonLd } from "./JsonLd";
import { dadosTrilha } from "@/lib/dados-estruturados";
import { RotuloSecao, TextoComDestaque } from "./ui";

type ItemTrilha = { nome: string; caminho: string };

/**
 * Faixa escura no topo das páginas internas: trilha (breadcrumb), rótulo,
 * título (h1) e introdução.
 */
export function CabecalhoPagina({
  trilha,
  rotulo,
  numero,
  titulo,
  introducao,
  children,
}: {
  trilha: ItemTrilha[];
  rotulo?: string;
  numero?: number;
  titulo: string;
  introducao?: string;
  children?: React.ReactNode;
}) {
  const itens: ItemTrilha[] = [{ nome: rotulosInterface.inicio, caminho: "/" }, ...trilha];
  return (
    <section className="tema-escuro relative overflow-hidden bg-surface text-ink">
      <div
        aria-hidden="true"
        className="grade-fina pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_70%_90%_at_85%_0%,#000_10%,transparent_75%)]"
      />
      <div className="container-site relative pt-32 pb-14 sm:pt-36 lg:pt-40 lg:pb-20">
        <nav aria-label={rotulosInterface.trilha} className="animar-entrada">
          <ol className="rotulo-mono flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.6875rem] text-ink-muted">
            {itens.map((item, indice) => {
              const ultimo = indice === itens.length - 1;
              return (
                <li key={item.caminho} className="flex items-center gap-2">
                  {ultimo ? (
                    <span aria-current="page" className="text-ink">
                      {item.nome}
                    </span>
                  ) : (
                    <>
                      <Link href={item.caminho} className="link-sublinhado hover:text-ink">
                        {item.nome}
                      </Link>
                      <span aria-hidden="true">/</span>
                    </>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>

        {rotulo && (
          <RotuloSecao numero={numero} className="animar-entrada mt-12 [--atraso:60ms]">
            {rotulo}
          </RotuloSecao>
        )}
        <h1
          className={`animar-entrada max-w-[24ch] font-serif text-[2.5rem] leading-[1.04] tracking-[-0.012em] [--atraso:100ms] sm:text-[3.25rem] lg:text-[4rem] ${rotulo ? "mt-5" : "mt-12"}`}
        >
          <TextoComDestaque texto={titulo} />
        </h1>
        {introducao && (
          <p className="animar-entrada mt-6 max-w-[62ch] text-[1.0625rem] leading-relaxed text-ink-muted [--atraso:160ms] sm:text-[1.125rem]">
            {introducao}
          </p>
        )}
        {children && <div className="animar-entrada [--atraso:200ms]">{children}</div>}
      </div>
      <JsonLd dados={dadosTrilha(itens)} />
    </section>
  );
}
