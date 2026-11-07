import type { Socio } from "./types";

/**
 * Sócios do escritório.
 *
 * Regras para preenchimento (Provimento CFOAB 205/2021 e CED, art. 44):
 * - informe somente títulos acadêmicos concluídos, verdadeiros e comprováveis;
 * - não mencione cargos, empregos ou funções anteriores (exceto magistério);
 * - não use adjetivos de autopromoção nem indique "especialidade" sem título
 *   certificado;
 * - foto (opcional): retrato profissional sóbrio, em /public/socios/.
 *   Sem foto, o site exibe um quadro neutro com as iniciais.
 */
export const socios: Socio[] = [
  {
    id: "melo",
    nome: "[Nome] Melo", // [CONFIRMAR] nome completo
    cargo: "[Sócio/Sócia]", // [CONFIRMAR]
    inscricoes: [{ uf: "[UF]", numero: "[X]" }], // [CONFIRMAR]
    formacao: [
      "Graduação em Direito — [Instituição]", // [CONFIRMAR]
      "[Pós-graduação, mestrado ou doutorado — somente se concluído e comprovável]", // [CONFIRMAR] ou remover
    ],
    linkedin: "[URL do LinkedIn]", // [CONFIRMAR]
  },
  {
    id: "rahman",
    nome: "[Nome] Rahman", // [CONFIRMAR] nome completo
    cargo: "[Sócio/Sócia]", // [CONFIRMAR]
    inscricoes: [{ uf: "[UF]", numero: "[X]" }], // [CONFIRMAR]
    formacao: [
      "Graduação em Direito — [Instituição]", // [CONFIRMAR]
      "[Pós-graduação, mestrado ou doutorado — somente se concluído e comprovável]", // [CONFIRMAR] ou remover
    ],
    linkedin: "[URL do LinkedIn]", // [CONFIRMAR]
  },
  {
    id: "bressan",
    nome: "[Nome] Bressan", // [CONFIRMAR] nome completo
    cargo: "[Sócio/Sócia]", // [CONFIRMAR]
    inscricoes: [{ uf: "[UF]", numero: "[X]" }], // [CONFIRMAR]
    formacao: [
      "Graduação em Direito — [Instituição]", // [CONFIRMAR]
      "[Pós-graduação, mestrado ou doutorado — somente se concluído e comprovável]", // [CONFIRMAR] ou remover
    ],
    linkedin: "[URL do LinkedIn]", // [CONFIRMAR]
  },
];

export function getSocio(id: string): Socio | undefined {
  return socios.find((socio) => socio.id === id);
}
