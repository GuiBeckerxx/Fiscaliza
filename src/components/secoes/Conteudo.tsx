import Link from "next/link";
import { conteudoSecao } from "@/content/home";
import { secoes } from "@/content/navegacao";
import { listarArtigos } from "@/lib/artigos";
import { CabecalhoSecao } from "../ui";
import { ListaArtigos } from "../ListaArtigos";
import { SetaDireita } from "../icones";

export function Conteudo({ numero }: { numero: number }) {
  const artigos = listarArtigos().slice(0, 3);
  return (
    <section
      id={secoes.conteudo}
      aria-labelledby="conteudo-titulo"
      className="tema-claro border-t border-rule bg-surface text-ink"
    >
      <div className="container-site py-24 lg:py-32">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <CabecalhoSecao
            numero={numero}
            rotulo={conteudoSecao.rotulo}
            titulo={conteudoSecao.titulo}
            introducao={conteudoSecao.introducao}
            idTitulo="conteudo-titulo"
          />
          <Link
            href="/artigos"
            className="group inline-flex shrink-0 items-center gap-2 text-[0.9375rem] text-ink"
          >
            <span className="link-sublinhado group-hover:bg-[length:100%_1px]">{conteudoSecao.todos}</span>
            <SetaDireita className="size-4 text-brass-ink transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
        </div>
        <div className="mt-14 lg:mt-16">
          <ListaArtigos artigos={artigos} />
        </div>
      </div>
    </section>
  );
}
