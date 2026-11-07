import type { Metadata } from "next";
import { PaginaProposta } from "@/components/propostas/PaginaProposta";
import { HeroTrajetoria } from "@/components/propostas/HeroTrajetoria";

export const metadata: Metadata = {
  title: "Proposta C · Trajetória",
  robots: { index: false, follow: false },
};

export default function PropostaC() {
  return <PaginaProposta id="c" hero={<HeroTrajetoria />} />;
}
