import Link from "next/link";
import { Monograma } from "./Logo";
import { LinkExterno } from "./ui";
import { site } from "@/content/site";
import { socios } from "@/content/socios";
import { linksLegais, secoes } from "@/content/navegacao";
import { inscricaoOab, registroSociedade } from "@/lib/formatar";
import { analyticsId } from "@/lib/config";
import { PreferenciasCookiesLink } from "./ConsentimentoCookies";
import { rodape } from "@/content/interface";

export function Footer() {
  const ano = new Date().getFullYear();
  const { endereco } = site;

  return (
    <footer className="tema-escuro border-t border-rule bg-[#080b11] text-ink">
      <div className="container-site py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Identificação */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <Monograma className="size-11 text-ink" />
              <span className="rotulo-mono text-[0.6875rem] text-ink-muted">{site.descritor}</span>
            </div>
            <p className="mt-6 max-w-[26ch] font-serif text-[1.5rem] leading-[1.15]">{site.razaoSocial}</p>
            <dl className="mt-6 space-y-1.5 text-[0.875rem] text-ink-muted">
              <div className="flex flex-wrap gap-x-2">
                <dt className="sr-only">{rodape.registro}</dt>
                <dd className="font-mono text-[0.8125rem]">
                  {rodape.registro} {registroSociedade()}
                </dd>
              </div>
              <div className="flex flex-wrap gap-x-2">
                <dt>{rodape.cnpj}</dt>
                <dd className="font-mono text-[0.8125rem]">{site.cnpj}</dd>
              </div>
            </dl>
          </div>

          {/* Contato */}
          <div className="lg:col-span-3">
            <h2 className="rotulo-mono text-ink-muted">{rodape.contato}</h2>
            <address className="mt-5 space-y-3 text-[0.9375rem] not-italic leading-relaxed">
              <p>
                {endereco.logradouro}
                <br />
                {endereco.bairro} · {endereco.cidade}/{endereco.uf}
                <br />
                CEP {endereco.cep}
              </p>
              <p className="font-mono text-[0.875rem]">{site.telefoneFixo.exibicao}</p>
              <p>
                <a href={`mailto:${site.email}`} className="link-sublinhado break-all">
                  {site.email}
                </a>
              </p>
              <p className="text-ink-muted">{site.horario.texto}</p>
            </address>
          </div>

          {/* Sócios */}
          <div className="lg:col-span-2">
            <h2 className="rotulo-mono text-ink-muted">{rodape.socios}</h2>
            <ul className="mt-5 space-y-3 text-[0.9375rem]">
              {socios.map((socio) => (
                <li key={socio.id}>
                  <span className="block">{socio.nome}</span>
                  <span className="font-mono text-[0.8125rem] text-ink-muted">
                    {socio.inscricoes.map(inscricaoOab).join(" · ")}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Informações e redes */}
          <div className="lg:col-span-3">
            <h2 className="rotulo-mono text-ink-muted">{rodape.informacoes}</h2>
            <ul className="mt-5 space-y-3 text-[0.9375rem]">
              {linksLegais.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="link-sublinhado">
                    {link.rotulo}
                  </Link>
                </li>
              ))}
              <li>
                <Link href={`/#${secoes.transparencia}`} className="link-sublinhado">
                  {rodape.dadosDoEscritorio}
                </Link>
              </li>
              {analyticsId && (
                <li>
                  <PreferenciasCookiesLink className="link-sublinhado text-left" />
                </li>
              )}
            </ul>
            <h2 className="rotulo-mono mt-8 text-ink-muted">{rodape.redes}</h2>
            <ul className="mt-5 space-y-3 text-[0.9375rem]">
              {site.redes.map((rede) => (
                <li key={rede.rotulo}>
                  <LinkExterno href={rede.href} className="link-sublinhado">
                    {rede.rotulo}
                  </LinkExterno>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-rule pt-8 text-[0.8125rem] text-ink-muted lg:flex-row lg:items-start lg:justify-between">
          <p>
            © {ano} {site.razaoSocial}. {rodape.direitos}
          </p>
          <p className="max-w-[62ch] lg:text-right">{rodape.aviso}</p>
        </div>
      </div>
    </footer>
  );
}
