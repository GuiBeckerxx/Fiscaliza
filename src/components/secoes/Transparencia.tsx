import { transparenciaSecao } from "@/content/home";
import { secoes } from "@/content/navegacao";
import { site } from "@/content/site";
import { socios } from "@/content/socios";
import { enderecoEmLinha, inscricaoOab, registroSociedade } from "@/lib/formatar";
import { definido } from "@/lib/pendente";
import { CabecalhoSecao, LinkExterno } from "../ui";
import { IconeAviso } from "../icones";

export function Telefone({ className = "" }: { className?: string }) {
  const { exibicao, internacional } = site.telefoneFixo;
  if (!definido(internacional)) return <span className={className}>{exibicao}</span>;
  return (
    <a href={`tel:${internacional}`} className={className}>
      {exibicao}
    </a>
  );
}

export function Transparencia({ numero }: { numero: number }) {
  const { campos, aviso } = transparenciaSecao;
  const linhas: { rotulo: string; valor: React.ReactNode }[] = [
    { rotulo: campos.razaoSocial, valor: site.razaoSocial },
    { rotulo: campos.cnpj, valor: <span className="font-mono text-[0.9375rem]">{site.cnpj}</span> },
    {
      rotulo: campos.registro,
      valor: <span className="font-mono text-[0.9375rem]">{registroSociedade()}</span>,
    },
    { rotulo: campos.endereco, valor: <address className="not-italic">{enderecoEmLinha()}</address> },
    {
      rotulo: campos.telefone,
      valor: <Telefone className="link-sublinhado font-mono text-[0.9375rem]" />,
    },
    {
      rotulo: campos.socios,
      valor: (
        <ul className="space-y-1">
          {socios.map((socio) => (
            <li key={socio.id}>
              {socio.nome}{" "}
              <span className="font-mono text-[0.875rem] text-ink-muted">
                — {socio.inscricoes.map(inscricaoOab).join(" · ")}
              </span>
            </li>
          ))}
        </ul>
      ),
    },
    {
      rotulo: campos.conferencia,
      valor: (
        <LinkExterno href={site.cna} className="link-texto">
          {transparenciaSecao.conferenciaTexto}
        </LinkExterno>
      ),
    },
  ];

  return (
    <section
      id={secoes.transparencia}
      aria-labelledby="transparencia-titulo"
      className="tema-claro border-t border-rule bg-surface text-ink"
    >
      <div className="container-site grid gap-12 py-24 lg:grid-cols-12 lg:gap-8 lg:py-32">
        <CabecalhoSecao
          className="lg:col-span-5"
          tamanho="medio"
          numero={numero}
          rotulo={transparenciaSecao.rotulo}
          titulo={transparenciaSecao.titulo}
          introducao={transparenciaSecao.introducao}
          idTitulo="transparencia-titulo"
        />

        <div className="lg:col-span-7" data-reveal>
          <dl className="border-t border-rule-strong">
            {linhas.map((linha) => (
              <div
                key={linha.rotulo}
                className="grid gap-1.5 border-b border-rule py-4 sm:grid-cols-[13rem_1fr] sm:gap-6 sm:py-5"
              >
                <dt className="rotulo-mono pt-0.5 text-[0.6875rem] text-ink-muted">{linha.rotulo}</dt>
                <dd className="text-[1rem] leading-relaxed">{linha.valor}</dd>
              </div>
            ))}
          </dl>

          <div
            role="note"
            aria-labelledby="aviso-titulo"
            className="mt-10 rounded-md border border-rule border-l-2 border-l-brass bg-surface-raised p-6 sm:p-7"
          >
            <p id="aviso-titulo" className="rotulo-mono flex items-center gap-2 text-brass-ink">
              <IconeAviso className="size-4" />
              {aviso.titulo}
            </p>
            <p className="mt-4 text-[1.0625rem] leading-relaxed text-ink">{aviso.texto}</p>
            <p className="mt-4 text-[0.9375rem] text-ink-muted">
              {campos.telefone}: <Telefone className="link-sublinhado font-mono text-ink" />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
