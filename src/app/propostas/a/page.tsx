import type { Metadata } from "next";
import { PaginaProposta } from "@/components/propostas/PaginaProposta";
import { HeroExtrato } from "@/components/propostas/HeroExtrato";

export const metadata: Metadata = {
  title: "Proposta A · Extrato",
  robots: { index: false, follow: false },
};

export default function PropostaA() {
  return <PaginaProposta id="a" hero={<HeroExtrato />} />;
}
