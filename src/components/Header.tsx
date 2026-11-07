"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { Logo } from "./Logo";
import { IconeFechar, IconeMenu, SetaDireita } from "./icones";
import {
  botaoCabecalho,
  menuPrincipal,
  rotulosInterface,
  secoes,
} from "@/content/navegacao";
import { site } from "@/content/site";

/** Indica a seção correspondente quando o usuário está em páginas internas. */
function ehSecaoAtual(pathname: string, href: string): boolean {
  if (pathname.startsWith("/artigos")) return href.endsWith(`#${secoes.conteudo}`);
  if (pathname.startsWith("/areas")) return href.endsWith(`#${secoes.areas}`);
  return false;
}

export function Header() {
  const pathname = usePathname();
  // A página inicial abre com fundo claro; as internas, com faixa escura.
  const temaClaro = pathname === "/";
  const [rolou, setRolou] = useState(false);
  const [menuAberto, setMenuAberto] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const temporizador = useRef<number | undefined>(undefined);

  // Fundo com blur após rolar a página.
  useEffect(() => {
    let quadro = 0;
    const atualizar = () => {
      quadro = 0;
      setRolou(window.scrollY > 8);
    };
    const aoRolar = () => {
      if (!quadro) quadro = window.requestAnimationFrame(atualizar);
    };
    atualizar();
    window.addEventListener("scroll", aoRolar, { passive: true });
    return () => {
      window.removeEventListener("scroll", aoRolar);
      if (quadro) window.cancelAnimationFrame(quadro);
    };
  }, []);

  // Fecha o <dialog>; o estado é atualizado no evento "close" (onClose).
  const fecharImediato = useCallback(() => {
    window.clearTimeout(temporizador.current);
    const dialogo = dialogRef.current;
    if (dialogo) {
      dialogo.removeAttribute("data-fechando");
      if (dialogo.open) dialogo.close();
    }
    document.documentElement.style.removeProperty("overflow");
  }, []);

  const fecharAnimado = useCallback(() => {
    const dialogo = dialogRef.current;
    if (!dialogo?.open) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      fecharImediato();
      return;
    }
    dialogo.setAttribute("data-fechando", "");
    temporizador.current = window.setTimeout(fecharImediato, 200);
  }, [fecharImediato]);

  const abrir = () => {
    const dialogo = dialogRef.current;
    if (!dialogo || dialogo.open) return;
    dialogo.removeAttribute("data-fechando");
    dialogo.showModal();
    document.documentElement.style.overflow = "hidden";
    setMenuAberto(true);
  };

  // Fecha o menu ao trocar de página ou ao passar para o layout de desktop.
  useEffect(() => {
    fecharImediato();
  }, [pathname, fecharImediato]);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 64rem)");
    const aoMudar = () => desktop.matches && fecharImediato();
    desktop.addEventListener("change", aoMudar);
    return () => desktop.removeEventListener("change", aoMudar);
  }, [fecharImediato]);

  return (
    <header
      className={`${temaClaro ? "tema-claro" : "tema-escuro"} fixed inset-x-0 top-0 z-40 border-b text-ink transition-[background-color,border-color] duration-300 ${
        rolou
          ? `border-rule backdrop-blur-md backdrop-saturate-150 ${temaClaro ? "bg-offwhite/85" : "bg-grafite/80"}`
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="container-site flex h-16 items-center justify-between gap-6 lg:h-[4.5rem]">
        <Logo />

        <nav aria-label={rotulosInterface.navegacaoPrincipal} className="hidden lg:block">
          <ul className="flex items-center gap-7 xl:gap-8">
            {menuPrincipal.map((link) => {
              const atual = ehSecaoAtual(pathname, link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={atual ? "true" : undefined}
                    className="link-sublinhado text-[0.875rem] text-ink-muted transition-colors duration-200 hover:text-ink aria-[current]:text-ink"
                  >
                    {link.rotulo}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href={botaoCabecalho.href}
            className="hidden h-10 items-center rounded-full bg-btn px-5 text-[0.875rem] font-medium text-btn-ink transition-colors duration-300 hover:bg-btn-hover lg:inline-flex"
          >
            {botaoCabecalho.rotulo}
          </Link>
          <button
            type="button"
            onClick={abrir}
            aria-haspopup="dialog"
            aria-expanded={menuAberto}
            aria-controls="menu-lateral"
            className="inline-flex h-10 items-center gap-2 rounded-full border border-rule-strong px-4 text-ink transition-colors hover:border-brass lg:hidden"
          >
            <span className="rotulo-mono text-[0.6875rem]">{rotulosInterface.menu}</span>
            <IconeMenu className="size-5" />
          </button>
        </div>
      </div>

      {/* Menu lateral (celular e tablet): <dialog> nativo, com foco preso e Esc. */}
      <dialog
        id="menu-lateral"
        ref={dialogRef}
        aria-label={rotulosInterface.menu}
        className="menu-lateral"
        onCancel={(evento) => {
          evento.preventDefault();
          fecharAnimado();
        }}
        onClose={() => {
          document.documentElement.style.removeProperty("overflow");
          setMenuAberto(false);
        }}
        onClick={(evento) => {
          if (evento.target === evento.currentTarget) fecharAnimado();
        }}
      >
        <div className="menu-lateral__painel tema-escuro ml-auto flex h-full w-[calc(100%-3rem)] max-w-[24rem] flex-col border-l border-rule bg-surface text-ink">
          <div className="flex h-16 shrink-0 items-center justify-between border-b border-rule px-5">
            <span className="rotulo-mono text-ink-muted">{rotulosInterface.menu}</span>
            <button
              type="button"
              onClick={fecharAnimado}
              aria-label={rotulosInterface.fecharMenu}
              className="inline-flex size-10 items-center justify-center rounded-full border border-rule-strong transition-colors hover:border-brass"
            >
              <IconeFechar className="size-5" />
            </button>
          </div>

          <nav aria-label={rotulosInterface.menu} className="flex-1 overflow-y-auto px-5 py-6">
            <ul className="border-t border-rule">
              {menuPrincipal.map((link, indice) => (
                <li key={link.href} className="border-b border-rule">
                  <Link
                    href={link.href}
                    onClick={fecharImediato}
                    aria-current={ehSecaoAtual(pathname, link.href) ? "true" : undefined}
                    className="flex items-baseline gap-4 py-4 font-serif text-[1.75rem] leading-none transition-colors hover:text-brass aria-[current]:text-brass"
                  >
                    <span aria-hidden="true" className="rotulo-mono w-6 text-[0.6875rem] text-brass">
                      {String(indice + 1).padStart(2, "0")}
                    </span>
                    {link.rotulo}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href={botaoCabecalho.href}
              onClick={fecharImediato}
              className="group mt-8 inline-flex min-h-12 w-full items-center justify-between rounded-full bg-btn px-6 text-[0.9375rem] font-medium text-btn-ink transition-colors hover:bg-btn-hover"
            >
              {botaoCabecalho.rotulo}
              <SetaDireita className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </nav>

          <div className="shrink-0 border-t border-rule px-5 py-5">
            <p className="text-[0.8125rem] text-ink-muted">{site.razaoSocial}</p>
            <p className="rotulo-mono mt-1 text-[0.6875rem] text-ink-muted">
              OAB/{site.registroSociedade.uf} nº {site.registroSociedade.numero}
            </p>
          </div>
        </div>
      </dialog>
    </header>
  );
}
