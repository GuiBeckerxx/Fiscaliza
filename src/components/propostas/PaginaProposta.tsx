import type { IdProposta } from "@/content/propostas";
import { BarraPropostas } from "./BarraPropostas";
import { Escritorio } from "../secoes/Escritorio";
import { Areas } from "../secoes/Areas";
import { Socios } from "../secoes/Socios";
import { Transparencia } from "../secoes/Transparencia";
import { Conteudo } from "../secoes/Conteudo";
import { Faq } from "../secoes/Faq";
import { Contato } from "../secoes/Contato";

/**
 * Estilos só da apresentação: cabeçalho claro sobre aberturas claras (via
 * :has, sem alterar o componente do site), animação de revelação da
 * proposta B e espaço para o botão flutuante no fim da página.
 */
const estilos = `
body:has(#proposta-tema-claro) > header {
  --surface: #f4f2ed; --surface-raised: #ebe8e1; --ink: #1a1d24; --ink-muted: #5f646d;
  --rule: rgb(26 29 36 / 0.12); --rule-strong: rgb(26 29 36 / 0.24);
  --brass-ink: #7d6034; --focus: #7d6034; --btn: #1a1d24; --btn-ink: #f4f2ed; --btn-hover: #7d6034;
  color-scheme: light;
}
body:has(#proposta-tema-claro) > header.backdrop-blur-md { background-color: rgb(244 242 237 / 0.85); }
@media (width < 85rem) { body:has(#barra-propostas) > footer { padding-bottom: 4.5rem; } }
@keyframes proposta-revelar { from { transform: translateY(104%); } to { transform: none; } }
.proposta-revelar { animation: proposta-revelar 400ms var(--ease-suave) both; animation-delay: var(--atraso, 0ms); }
@media (prefers-reduced-motion: reduce) { .proposta-revelar { animation: none; } }
`;

export function PaginaProposta({ id, hero }: { id: IdProposta; hero: React.ReactNode }) {
  return (
    <>
      <style>{estilos}</style>
      {hero}
      <Escritorio numero={1} />
      <Areas numero={2} />
      <Socios numero={3} />
      <Transparencia numero={4} />
      <Conteudo numero={5} />
      <Faq numero={6} />
      <Contato numero={7} />
      <BarraPropostas atual={id} />
    </>
  );
}
