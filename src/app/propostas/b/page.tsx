import type { Metadata } from "next";
import { PaginaProposta } from "@/components/propostas/PaginaProposta";
import { HeroCapa } from "@/components/propostas/HeroCapa";

export const metadata: Metadata = {
  title: "Proposta B · Capa editorial",
  robots: { index: false, follow: false },
};

export default function PropostaB() {
  return <PaginaProposta id="b" hero={<HeroCapa />} />;
}
