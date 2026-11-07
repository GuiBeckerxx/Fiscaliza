import type { Metadata, Viewport } from "next";
import { Geist_Mono, Instrument_Serif, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RevealObserver } from "@/components/RevealObserver";
import { ConsentimentoCookies } from "@/components/ConsentimentoCookies";
import { site } from "@/content/site";
import { rotulosInterface } from "@/content/navegacao";
import { analyticsId, siteUrl } from "@/lib/config";
import { metadadosPagina } from "@/lib/metadados";

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const mono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const tituloPadrao = `${site.razaoSocial} · ${site.descritor}`;
const padrao = metadadosPagina({
  titulo: tituloPadrao,
  descricao: site.descricao,
  caminho: "/",
  tituloAbsoluto: true,
});

export const metadata: Metadata = {
  ...padrao,
  metadataBase: new URL(siteUrl),
  title: { default: tituloPadrao, template: `%s · ${site.nome}` },
  applicationName: site.nome,
  creator: site.razaoSocial,
  publisher: site.razaoSocial,
  icons: { apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }] },
  robots: { index: true, follow: true },
  formatDetection: { telephone: false, email: false, address: false },
  referrer: "strict-origin-when-cross-origin",
};

export const viewport: Viewport = {
  themeColor: "#0b0f17",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt-BR"
      data-scroll-behavior="smooth"
      className={`${serif.variable} ${sans.variable} ${mono.variable}`}
    >
      <body>
        <a
          href="#conteudo-principal"
          className="tema-escuro fixed top-3 left-3 z-50 -translate-y-24 rounded-md border border-brass bg-surface px-4 py-3 text-[0.9375rem] text-ink focus:translate-y-0"
        >
          {rotulosInterface.pularParaConteudo}
        </a>
        <Header />
        <main id="conteudo-principal" tabIndex={-1} className="outline-none">
          {children}
        </main>
        <Footer />
        <RevealObserver />
        {analyticsId && <ConsentimentoCookies id={analyticsId} />}
      </body>
    </html>
  );
}
