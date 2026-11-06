/**
 * Demais textos de interface: rodapé, página 404, aviso de cookies e
 * rótulos auxiliares de acessibilidade.
 */

export const rodape = {
  contato: "Contato",
  socios: "Sócios",
  informacoes: "Informações",
  dadosDoEscritorio: "Dados do escritório",
  redes: "Redes",
  cnpj: "CNPJ",
  registro: "Registro",
  direitos: "Todos os direitos reservados.",
  aviso:
    "As informações deste site têm caráter exclusivamente informativo, nos termos do Provimento nº 205/2021 do Conselho Federal da OAB, e não constituem consulta jurídica.",
};

export const paginaNaoEncontrada = {
  rotulo: "Erro 404",
  titulo: "Página não encontrada",
  texto:
    "O endereço acessado não existe ou foi alterado. Utilize o menu ou volte à página inicial.",
  voltar: "Página inicial",
};

/** Exibido somente se NEXT_PUBLIC_GA_ID estiver configurado. */
export const avisoCookies = {
  titulo: "Cookies de medição de audiência",
  descricao:
    "Com sua autorização, este site utiliza cookies do Google Analytics para medir o número de visitas, sem finalidade publicitária. Você pode aceitar ou recusar, e alterar a escolha a qualquer momento.",
  politica: "Política de Privacidade",
  recusar: "Recusar",
  aceitar: "Aceitar",
  preferencias: "Preferências de cookies",
};

export const rotulosAuxiliares = {
  avisoInformativo: "Caráter informativo",
  etapa: "Etapa",
  tabela: "Tabela",
  secoesDoDocumento: "Seções do documento",
  retrato: (nome: string) => `Retrato profissional de ${nome}`,
  perfilLinkedin: (nome: string) => `Perfil de ${nome} no LinkedIn`,
  paginaInicial: (nome: string) => `${nome}, página inicial`,
};
