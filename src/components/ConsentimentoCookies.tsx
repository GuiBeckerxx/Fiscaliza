"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { avisoCookies } from "@/content/interface";

/**
 * Banner de consentimento — exibido SOMENTE quando há analytics configurado
 * (variável NEXT_PUBLIC_GA_ID). Por padrão o site não usa analytics.
 * Barra discreta no rodapé da tela (não é pop-up modal), com "Recusar" e
 * "Aceitar" com o mesmo destaque. O script de medição só é carregado após
 * o aceite; a escolha pode ser revista em "Preferências de cookies".
 */

const CHAVE = "mrb-consentimento-cookies";
const EVENTO_PREFERENCIAS = "mrb:preferencias-cookies";

type Escolha = "aceito" | "recusado";

const textos = avisoCookies;

function lerEscolha(): Escolha | null {
  try {
    const valor = window.localStorage.getItem(CHAVE);
    return valor === "aceito" || valor === "recusado" ? valor : null;
  } catch {
    return null;
  }
}

function gravarEscolha(escolha: Escolha) {
  try {
    window.localStorage.setItem(CHAVE, escolha);
  } catch {
    /* armazenamento indisponível: a escolha vale só para esta visita */
  }
}

function carregarAnalytics(id: string) {
  const w = window as unknown as Record<string, unknown> & { dataLayer?: unknown[] };
  w[`ga-disable-${id}`] = false;
  if (document.getElementById("ga-script")) return;
  w.dataLayer = w.dataLayer || [];
  // O gtag.js exige o objeto `arguments` (não um array) na dataLayer.
  const gtag: (...parametros: unknown[]) => void = function () {
    // eslint-disable-next-line prefer-rest-params
    w.dataLayer!.push(arguments);
  };
  gtag("js", new Date());
  gtag("config", id, { anonymize_ip: true });
  const script = document.createElement("script");
  script.id = "ga-script";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`;
  document.head.appendChild(script);
}

function desativarAnalytics(id: string) {
  (window as unknown as Record<string, unknown>)[`ga-disable-${id}`] = true;
  const dominio = window.location.hostname.replace(/^www\./, "");
  for (const cookie of document.cookie.split(";")) {
    const nome = cookie.split("=")[0]?.trim();
    if (nome && nome.startsWith("_ga")) {
      for (const d of ["", `; domain=${dominio}`, `; domain=.${dominio}`]) {
        document.cookie = `${nome}=; Max-Age=0; path=/${d}`;
      }
    }
  }
}

export function ConsentimentoCookies({ id }: { id: string }) {
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const escolha = lerEscolha();
    if (escolha === "aceito") carregarAnalytics(id);
    // Exibe o banner após a hidratação, apenas se não houver escolha registrada.
    const quadro = window.requestAnimationFrame(() => setVisivel(escolha === null));
    const reabrir = () => setVisivel(true);
    window.addEventListener(EVENTO_PREFERENCIAS, reabrir);
    return () => {
      window.cancelAnimationFrame(quadro);
      window.removeEventListener(EVENTO_PREFERENCIAS, reabrir);
    };
  }, [id]);

  const decidir = useCallback(
    (escolha: Escolha) => {
      gravarEscolha(escolha);
      if (escolha === "aceito") carregarAnalytics(id);
      else desativarAnalytics(id);
      setVisivel(false);
    },
    [id],
  );

  if (!visivel) return null;

  return (
    <section
      aria-labelledby="cookies-titulo"
      className="tema-escuro fixed inset-x-3 bottom-3 z-30 mx-auto max-w-3xl rounded-lg border border-rule-strong bg-surface-raised/95 p-5 text-ink shadow-[0_8px_40px_rgb(0_0_0/0.35)] backdrop-blur-md sm:inset-x-6 sm:bottom-6 sm:p-6"
    >
      <h2 id="cookies-titulo" className="rotulo-mono text-ink-muted">
        {textos.titulo}
      </h2>
      <p className="mt-3 text-[0.9375rem] leading-relaxed">
        {textos.descricao}{" "}
        <Link href="/politica-de-privacidade" className="link-texto">
          {textos.politica}
        </Link>
        .
      </p>
      <div className="mt-5 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => decidir("recusado")}
          className="inline-flex min-h-11 items-center rounded-md border border-rule-strong px-5 text-[0.9375rem] transition-colors hover:border-brass"
        >
          {textos.recusar}
        </button>
        <button
          type="button"
          onClick={() => decidir("aceito")}
          className="inline-flex min-h-11 items-center rounded-md border border-rule-strong px-5 text-[0.9375rem] transition-colors hover:border-brass"
        >
          {textos.aceitar}
        </button>
      </div>
    </section>
  );
}

/** Link do rodapé que reabre o banner para alterar a escolha. */
export function PreferenciasCookiesLink({ className = "" }: { className?: string }) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => window.dispatchEvent(new Event(EVENTO_PREFERENCIAS))}
    >
      {textos.preferencias}
    </button>
  );
}
