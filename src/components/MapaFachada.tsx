"use client";

import { useState } from "react";
import { contato } from "@/content/contato";
import { IconeMapa } from "./icones";
import { LinkExterno } from "./ui";

/**
 * Mapa do Google Maps (iframe) carregado somente após autorização do
 * usuário: evita o envio de dados ao Google sem consentimento (LGPD) e
 * mantém o carregamento inicial leve.
 */
export function MapaFachada({ endereco, pendente }: { endereco: string; pendente: boolean }) {
  const [carregado, setCarregado] = useState(false);
  const textos = contato.mapa;
  const consulta = encodeURIComponent(endereco);
  const urlIncorporada = `https://www.google.com/maps?q=${consulta}&output=embed`;
  const urlExterna = `https://www.google.com/maps/search/?api=1&query=${consulta}`;

  return (
    <figure className="overflow-hidden rounded-lg border border-rule">
      <div className="relative aspect-[16/10] bg-surface-raised">
        {carregado ? (
          <iframe
            src={urlIncorporada}
            title={textos.tituloIframe}
            className="absolute inset-0 size-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        ) : (
          <div className="grade-fina absolute inset-0 flex flex-col items-center justify-center gap-4 p-6 text-center">
            <IconeMapa className="size-7 text-brass" />
            {pendente ? (
              <p className="max-w-[36ch] text-[0.875rem] text-ink-muted">{textos.pendente}</p>
            ) : (
              <>
                <p className="max-w-[44ch] text-[0.8125rem] leading-relaxed text-ink-muted">
                  {textos.aviso}
                </p>
                <button
                  type="button"
                  onClick={() => setCarregado(true)}
                  className="inline-flex min-h-11 items-center rounded-md border border-rule-strong px-5 text-[0.875rem] text-ink transition-colors hover:border-brass"
                >
                  {textos.carregar}
                </button>
              </>
            )}
          </div>
        )}
      </div>
      {!pendente && (
        <figcaption className="flex items-center justify-between gap-4 border-t border-rule px-4 py-3 text-[0.8125rem] text-ink-muted">
          <span>{textos.titulo}</span>
          <LinkExterno href={urlExterna} className="link-sublinhado text-ink">
            {textos.abrirExterno}
          </LinkExterno>
        </figcaption>
      )}
    </figure>
  );
}
