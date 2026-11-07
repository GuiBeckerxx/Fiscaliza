import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

/**
 * Ícone para dispositivos Apple e logotipo dos dados estruturados,
 * gerado no build como /apple-touch-icon.png.
 */
export const dynamic = "force-static";

const size = { width: 180, height: 180 };

export async function GET() {
  const serif = await readFile(join(process.cwd(), "src/assets/fonts/InstrumentSerif-Regular.ttf"));
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0b0f17",
        }}
      >
        <div
          style={{
            width: 148,
            height: 148,
            border: "2px solid #b4935a",
            borderRadius: 8,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#f4f2ed",
            fontFamily: "Instrument Serif",
            fontSize: 60,
            letterSpacing: 2,
            paddingTop: 6,
          }}
        >
          MRB
        </div>
      </div>
    ),
    { ...size, fonts: [{ name: "Instrument Serif", data: serif, style: "normal", weight: 400 }] },
  );
}
