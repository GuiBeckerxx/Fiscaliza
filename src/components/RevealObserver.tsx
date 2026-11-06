"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Revela elementos com [data-reveal] ao entrarem na tela (fade/slide de
 * 400 ms, definido em globals.css). Elementos já visíveis no carregamento
 * não são animados; sem JavaScript ou com prefers-reduced-motion, tudo
 * permanece visível.
 */
export function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    const raiz = document.documentElement;
    const elementos = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]:not([data-revelado])"),
    );

    const observador = new IntersectionObserver(
      (entradas) => {
        for (const entrada of entradas) {
          if (entrada.isIntersecting) {
            entrada.target.setAttribute("data-revelado", "");
            observador.unobserve(entrada.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.1 },
    );

    const altura = window.innerHeight;
    for (const elemento of elementos) {
      const { top, bottom } = elemento.getBoundingClientRect();
      if (top < altura && bottom > 0) elemento.setAttribute("data-revelado", "");
      else observador.observe(elemento);
    }

    raiz.setAttribute("data-reveal-pronto", "");
    return () => observador.disconnect();
  }, [pathname]);

  return null;
}
