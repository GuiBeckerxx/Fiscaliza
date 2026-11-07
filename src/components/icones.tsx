/** Ícones de linha (1,5 px), desenhados para o projeto. Decorativos. */
import type { IconeArea } from "@/content/types";

type IconeProps = { className?: string };

function Svg({ className, children }: IconeProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      {children}
    </svg>
  );
}

export function SetaDireita({ className }: IconeProps) {
  return (
    <Svg className={className}>
      <path d="M4 12h15M13 6l6 6-6 6" />
    </Svg>
  );
}

export function SetaDiagonal({ className }: IconeProps) {
  return (
    <Svg className={className}>
      <path d="M7 17 17 7M8 7h9v9" />
    </Svg>
  );
}

export function Mais({ className }: IconeProps) {
  return (
    <Svg className={className}>
      <path d="M12 5v14M5 12h14" />
    </Svg>
  );
}

export function IconeMenu({ className }: IconeProps) {
  return (
    <Svg className={className}>
      <path d="M4 8h16M4 16h16" />
    </Svg>
  );
}

export function IconeFechar({ className }: IconeProps) {
  return (
    <Svg className={className}>
      <path d="m6 6 12 12M18 6 6 18" />
    </Svg>
  );
}

export function IconeAviso({ className }: IconeProps) {
  return (
    <Svg className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 8v5M12 16.5v.01" />
    </Svg>
  );
}

export function IconeMapa({ className }: IconeProps) {
  return (
    <Svg className={className}>
      <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11Z" />
      <circle cx="12" cy="10" r="2.25" />
    </Svg>
  );
}

/* Ícones das áreas de atuação: neutros, sem balança, martelo ou símbolos da OAB. */
const desenhosArea: Record<IconeArea, React.ReactNode> = {
  documento: <path d="M7 3h7l4 4v14H7V3ZM14 3v4h4M10 12h5M10 16h5" />,
  escudo: <path d="M12 3 19 6v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3ZM9.25 12l2 2 3.5-3.75" />,
  recibo: <path d="M6 3h12v18l-2-1.5-2 1.5-2-1.5-2 1.5-2-1.5L6 21V3ZM9 8h6M9 12h6M9 16h3" />,
  calendario: <path d="M4 6h16v15H4V6ZM4 10h16M8 3v4M16 3v4M8 14h2M12 14h2M8 17.5h2" />,
  contrato: <path d="m15.5 4.5 4 4L9 19H5v-4L15.5 4.5ZM13 7l4 4M5 21h14" />,
  bussola: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" />
    </>
  ),
};

export function IconeDaArea({ nome, className }: IconeProps & { nome: IconeArea }) {
  return <Svg className={className}>{desenhosArea[nome]}</Svg>;
}
