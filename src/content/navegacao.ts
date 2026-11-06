import type { Link } from "./types";

/** Âncoras das seções da página inicial (usadas nos links do menu). */
export const secoes = {
  escritorio: "escritorio",
  areas: "areas",
  socios: "socios",
  transparencia: "transparencia",
  conteudo: "conteudo",
  faq: "perguntas-frequentes",
  contato: "contato",
} as const;

/** Links do menu principal (cabeçalho e menu lateral no celular). */
export const menuPrincipal: Link[] = [
  { rotulo: "Escritório", href: `/#${secoes.escritorio}` },
  { rotulo: "Áreas de atuação", href: `/#${secoes.areas}` },
  { rotulo: "Sócios", href: `/#${secoes.socios}` },
  { rotulo: "Conteúdo", href: `/#${secoes.conteudo}` },
  { rotulo: "Contato", href: `/#${secoes.contato}` },
];

/** Botão discreto do cabeçalho. */
export const botaoCabecalho: Link = {
  rotulo: "Fale com o escritório",
  href: `/#${secoes.contato}`,
};

export const linksLegais: Link[] = [
  { rotulo: "Política de Privacidade", href: "/politica-de-privacidade" },
  { rotulo: "Termos de Uso", href: "/termos-de-uso" },
];

export const rotulosInterface = {
  pularParaConteudo: "Pular para o conteúdo",
  abrirMenu: "Abrir menu",
  fecharMenu: "Fechar menu",
  menu: "Menu",
  navegacaoPrincipal: "Navegação principal",
  inicio: "Início",
  trilha: "Você está em",
  abreEmNovaAba: "(abre em nova aba)",
  linkPendente: "a confirmar",
};
