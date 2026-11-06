import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { site } from "@/content/site";
import { hero } from "@/content/home";
import { semDestaque } from "@/lib/formatar";

/**
 * Imagem de compartilhamento (Open Graph), gerada no build como /og.png.
 * Route handler estático (em vez de opengraph-image.tsx) para que o arquivo
 * exportado tenha extensão .png e seja servido com o tipo correto.
 */
export const dynamic = "force-static";

const size = { width: 1200, height: 630 };

const GRAFITE = "#0b0f17";
const PAPEL = "#e8e6e1";
const CINZA = "#8a8f98";
const LATAO = "#b4935a";

export async function GET() {
  const [serif, mono] = await Promise.all([
    readFile(join(process.cwd(), "src/assets/fonts/InstrumentSerif-Regular.ttf")),
    readFile(join(process.cwd(), "src/assets/fonts/GeistMono-Regular.ttf")),
  ]);

  const colunas = Array.from({ length: 17 }, (_, i) => i * 72);
  const linhas = Array.from({ length: 9 }, (_, i) => i * 72);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: GRAFITE,
          color: PAPEL,
          padding: "64px 72px",
          position: "relative",
        }}
      >
        <svg
          width="1200"
          height="630"
          viewBox="0 0 1200 630"
          style={{ position: "absolute", top: 0, left: 0 }}
        >
          {colunas.map((x) => (
            <line key={`c${x}`} x1={x} y1="0" x2={x} y2="630" stroke="rgba(232,230,225,0.06)" strokeWidth="1" />
          ))}
          {linhas.map((y) => (
            <line key={`l${y}`} x1="0" y1={y} x2="1200" y2={y} stroke="rgba(232,230,225,0.06)" strokeWidth="1" />
          ))}
          <path d="M858 216h12M864 210v12M1002 72h12M1008 66v12" stroke={LATAO} strokeOpacity="0.6" />
        </svg>

        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div
            style={{
              width: 84,
              height: 84,
              border: `1.5px solid ${LATAO}`,
              borderRadius: 5,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "Instrument Serif",
              fontSize: 36,
              letterSpacing: 1,
              paddingTop: 4,
            }}
          >
            MRB
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <div style={{ fontFamily: "Instrument Serif", fontSize: 40, lineHeight: 1 }}>{site.nome}</div>
            <div style={{ fontFamily: "Geist Mono", fontSize: 15, letterSpacing: 2.5, color: CINZA }}>
              {site.razaoSocial.replace(site.nome, "").trim().toUpperCase()}
            </div>
          </div>
        </div>

        <div
          style={{
            fontFamily: "Instrument Serif",
            fontSize: 68,
            lineHeight: 1.04,
            letterSpacing: -0.5,
            maxWidth: 940,
          }}
        >
          {semDestaque(hero.titulo)}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            borderTop: "1px solid rgba(232,230,225,0.16)",
            paddingTop: 24,
            fontFamily: "Geist Mono",
            fontSize: 16,
            letterSpacing: 2.5,
            color: CINZA,
          }}
        >
          <div style={{ width: 8, height: 8, background: LATAO }} />
          {site.descritor.toUpperCase()}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Instrument Serif", data: serif, style: "normal", weight: 400 },
        { name: "Geist Mono", data: mono, style: "normal", weight: 400 },
      ],
    },
  );
}
