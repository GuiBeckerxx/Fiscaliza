import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { apresentacao, propostas } from "@/content/propostas";
import { CabecalhoPagina } from "@/components/CabecalhoPagina";
import { SetaDireita } from "@/components/icones";

export const metadata: Metadata = {
  title: apresentacao.titulo,
  robots: { index: false, follow: false },
};

export default function PaginaPropostas() {
  return (
    <>
      <CabecalhoPagina
        trilha={[{ nome: apresentacao.titulo, caminho: "/propostas" }]}
        rotulo={apresentacao.rotulo}
        titulo={apresentacao.titulo}
        introducao={apresentacao.introducao}
      />

      <div className="tema-claro bg-surface text-ink">
        <div className="container-site py-16 lg:py-24">
          <ul className="grid gap-10 md:grid-cols-3 md:gap-6 lg:gap-8">
            {propostas.map((proposta) => {
              const miniatura = `/propostas/${proposta.id}.png`;
              const temMiniatura = existsSync(join(process.cwd(), "public", miniatura));
              return (
                <li key={proposta.id}>
                  <article className="group relative flex h-full flex-col has-[a:focus-visible]:outline-2 has-[a:focus-visible]:outline-offset-4 has-[a:focus-visible]:outline-focus">
                    <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-rule bg-surface-raised">
                      {temMiniatura ? (
                        <Image
                          src={miniatura}
                          alt=""
                          fill
                          sizes="(min-width: 768px) 33vw, 100vw"
                          className="object-cover object-top transition-transform duration-500 ease-[var(--ease-suave)] group-hover:scale-[1.02] motion-reduce:transition-none"
                        />
                      ) : (
                        <div aria-hidden="true" className="grade-fina absolute inset-0" />
                      )}
                    </div>
                    <p className="rotulo-mono mt-6 text-brass-ink">Proposta {proposta.letra}</p>
                    <h2 className="mt-2 font-serif text-[2rem] leading-tight">{proposta.nome}</h2>
                    <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-muted">{proposta.resumo}</p>
                    <ul className="mt-5 space-y-2 border-t border-rule pt-5 text-[0.875rem]">
                      {proposta.destaques.map((destaque) => (
                        <li key={destaque} className="flex gap-3">
                          <span aria-hidden="true" className="mt-[0.55em] h-px w-3 shrink-0 bg-brass" />
                          {destaque}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto pt-7">
                      <Link
                        href={`/propostas/${proposta.id}`}
                        className="inline-flex items-center gap-2 text-[0.9375rem] font-medium after:absolute after:inset-0 after:content-[''] focus-visible:outline-none"
                      >
                        <span className="link-sublinhado group-hover:bg-[length:100%_1px]">
                          {apresentacao.verProposta} {proposta.letra}
                        </span>
                        <SetaDireita className="size-4 text-bronze transition-transform duration-300 group-hover:translate-x-0.5" />
                      </Link>
                    </div>
                  </article>
                </li>
              );
            })}
          </ul>

          <p className="mt-16 border-t border-rule pt-8 text-[0.9375rem] text-ink-muted">
            <Link href="/" className="link-texto text-ink">
              {apresentacao.versaoAtual}
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
