import type { Metadata } from "next";
import { politicaDePrivacidade as doc } from "@/content/legal";
import { DocumentoLegal } from "@/components/DocumentoLegal";
import { metadadosPagina } from "@/lib/metadados";

const caminho = "/politica-de-privacidade";

export const metadata: Metadata = metadadosPagina({
  titulo: doc.titulo,
  descricao: doc.descricao,
  caminho,
});

export default function PaginaPolitica() {
  return (
    <DocumentoLegal
      titulo={doc.titulo}
      caminho={caminho}
      introducao={doc.introducao}
      atualizadaEm={doc.atualizadaEm}
      secoes={doc.secoes}
    />
  );
}
