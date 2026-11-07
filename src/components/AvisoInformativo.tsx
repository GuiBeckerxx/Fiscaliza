import { IconeAviso } from "./icones";
import { rotulosAuxiliares } from "@/content/interface";

/** Bloco discreto com o aviso de caráter informativo. */
export function AvisoInformativo({ children, titulo = rotulosAuxiliares.avisoInformativo }: { children: React.ReactNode; titulo?: string }) {
  return (
    <div role="note" className="rounded-md border border-rule border-l-2 border-l-brass bg-surface-raised p-6">
      <p className="rotulo-mono flex items-center gap-2 text-[0.6875rem] text-brass-ink">
        <IconeAviso className="size-4" />
        {titulo}
      </p>
      <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-muted">{children}</p>
    </div>
  );
}
