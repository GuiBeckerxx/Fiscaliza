import type { Metadata } from "next";
import { termosDeUso as doc } from "@/content/legal";
import { DocumentoLegal } from "@/components/DocumentoLegal";
import { metadadosPagina } from "@/lib/metadados";

const caminho = "/termos-de-uso";

export const metadata: Metadata = metadadosPagina({
  titulo: doc.titulo,
  descricao: doc.descricao,
  caminho,
});

export default function PaginaTermos() {
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
