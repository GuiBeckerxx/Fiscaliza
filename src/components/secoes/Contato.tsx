import { contato } from "@/content/contato";
import { secoes } from "@/content/navegacao";
import { site } from "@/content/site";
import { formEndpoint } from "@/lib/config";
import { enderecoEmLinha } from "@/lib/formatar";
import { definido, pendente } from "@/lib/pendente";
import { CabecalhoSecao, LinkExterno } from "../ui";
import { FormularioContato } from "../FormularioContato";
import { MapaFachada } from "../MapaFachada";
import { Telefone } from "./Transparencia";

export function Contato({ numero }: { numero: number }) {
  const { canais } = contato;
  const endereco = enderecoEmLinha();
  const enderecoPendente = pendente(site.endereco.logradouro) || pendente(site.endereco.cidade);

  const linhas: { rotulo: string; valor: React.ReactNode }[] = [
    {
      rotulo: canais.telefone,
      valor: <Telefone className="link-sublinhado font-mono text-[1rem]" />,
    },
    {
      rotulo: canais.whatsapp,
      valor: definido(site.whatsapp.numero) ? (
        <LinkExterno
          href={`https://wa.me/${site.whatsapp.numero}`}
          rotuloAcessivel={`WhatsApp ${site.whatsapp.exibicao}`}
          className="link-sublinhado font-mono text-[1rem]"
        >
          {site.whatsapp.exibicao}
        </LinkExterno>
      ) : (
        <span className="font-mono text-[1rem]">{site.whatsapp.exibicao}</span>
      ),
    },
    {
      rotulo: canais.email,
      valor: (
        <a href={`mailto:${site.email}`} className="link-sublinhado break-all">
          {site.email}
        </a>
      ),
    },
    { rotulo: canais.endereco, valor: <address className="not-italic">{endereco}</address> },
    { rotulo: canais.horario, valor: site.horario.texto },
  ];

  return (
    <section
      id={secoes.contato}
      aria-labelledby="contato-titulo"
      className="tema-escuro bg-surface text-ink"
    >
      <div className="container-site grid gap-14 py-24 lg:grid-cols-12 lg:gap-8 lg:py-32">
        <div className="lg:col-span-5">
          <CabecalhoSecao
            tamanho="medio"
            numero={numero}
            rotulo={contato.rotulo}
            titulo={contato.titulo}
            introducao={contato.introducao}
            idTitulo="contato-titulo"
          />

          <dl className="mt-12 border-t border-rule-strong" data-reveal>
            {linhas.map((linha) => (
              <div key={linha.rotulo} className="grid gap-1.5 border-b border-rule py-4 sm:grid-cols-[10.5rem_1fr] sm:gap-4">
                <dt className="rotulo-mono pt-1 text-[0.6875rem] text-ink-muted">{linha.rotulo}</dt>
                <dd className="text-[1rem] leading-relaxed">{linha.valor}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-10" data-reveal>
            <MapaFachada endereco={endereco} pendente={enderecoPendente} />
          </div>
        </div>

        <div className="lg:col-span-6 lg:col-start-7" data-reveal>
          <FormularioContato endpoint={formEndpoint} />
        </div>
      </div>
    </section>
  );
}
