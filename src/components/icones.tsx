/** Ícones de linha (1,5 px), desenhados para o projeto. Decorativos. */

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
