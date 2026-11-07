import Link from "next/link";
import { faqSecao } from "@/content/home";
import { perguntas } from "@/content/faq";
import { secoes } from "@/content/navegacao";
import { CabecalhoSecao } from "../ui";
import { Acordeao } from "../Acordeao";

export function Faq({ numero }: { numero: number }) {
  return (
    <section
      id={secoes.faq}
      aria-labelledby="faq-titulo"
      className="tema-claro border-t border-rule bg-surface text-ink"
    >
      <div className="container-site grid gap-12 py-24 lg:grid-cols-12 lg:gap-8 lg:py-32">
        <div className="lg:col-span-4">
          <CabecalhoSecao
            tamanho="medio"
            numero={numero}
            rotulo={faqSecao.rotulo}
            titulo={faqSecao.titulo}
            introducao={faqSecao.introducao}
            idTitulo="faq-titulo"
          />
          <p className="mt-8 text-[0.9375rem] text-ink-muted">
            {faqSecao.outrasDuvidas}{" "}
            <Link href={`/#${secoes.contato}`} className="link-texto text-ink">
              {faqSecao.entreEmContato.toLowerCase()}
            </Link>
            .
          </p>
        </div>
        <div className="lg:col-span-7 lg:col-start-6" data-reveal>
          <Acordeao itens={perguntas} />
        </div>
      </div>
    </section>
  );
}
