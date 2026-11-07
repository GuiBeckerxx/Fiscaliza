/**
 * Conteúdo da apresentação de propostas de abertura.
 * Fica só na branch de apresentação (claude/propostas-abertura), fora do site.
 */

export type IdProposta = "a" | "b" | "c";

export const propostas: {
  id: IdProposta;
  letra: string;
  nome: string;
  tema: "claro" | "escuro";
  resumo: string;
  destaques: string[];
}[] = [
  {
    id: "a",
    letra: "A",
    nome: "Extrato",
    tema: "claro",
    resumo:
      "A linguagem dos documentos bancários — extratos, informes e contracheques — organiza as áreas de atuação como linhas de um documento, com a base legal de cada tema. Familiar ao público bancário, sóbria e precisa.",
    destaques: [
      "Áreas apresentadas como um extrato, com a base legal de cada tema",
      "Folhas sobrepostas com sombra suave, sem fotografias",
      "Linhas surgem em sequência ao carregar a página",
    ],
  },
  {
    id: "b",
    letra: "B",
    nome: "Capa editorial",
    tema: "escuro",
    resumo:
      "Tipografia monumental sobre grafite, como a capa de uma publicação: o descritor “Tributário & Bancário” ocupa a tela, e o “&” em latão funciona como assinatura visual do escritório.",
    destaques: [
      "A tipografia é a imagem principal, sem fotografias",
      "Faixa informativa no topo, como o expediente de uma revista",
      "Linhas de texto reveladas em até 400 ms",
    ],
  },
  {
    id: "c",
    letra: "C",
    nome: "Trajetória",
    tema: "claro",
    resumo:
      "Os temas de atuação organizados pelas etapas da vida profissional do bancário — carreira, remuneração, transição e aposentadoria. Interativa e educativa: cada etapa mostra as áreas relacionadas.",
    destaques: [
      "Linha do tempo interativa, acessível por teclado (vertical no celular)",
      "Conteúdo pensado para bancários e ex-bancários",
      "Painel escuro com grade fina sobre fundo claro",
    ],
  },
];

export const apresentacao = {
  rotulo: "Apresentação",
  titulo: "Propostas de abertura",
  introducao:
    "Três direções visuais para a abertura do site, dentro da identidade do escritório e das regras de publicidade da OAB. Cada proposta mostra a página inicial completa.",
  verProposta: "Ver proposta",
  versaoAtual: "Comparar com a versão atual",
  barra: { rotulo: "Propostas de abertura", todas: "Todas", todasRotulo: "Todas as propostas" },
};

/** Proposta A — linhas do "extrato" (rótulo curto e base legal de cada área). */
export const extrato = {
  titulo: "Áreas de atuação",
  colunas: { numero: "Nº", area: "Área", base: "Base legal" },
  linhas: [
    { slug: "imposto-de-renda-previdencia-complementar", rotulo: "IR sobre previdência complementar", base: "Lei 9.250/95" },
    { slug: "isencao-imposto-de-renda-doenca-grave", rotulo: "Isenção de IR por doença grave", base: "Lei 7.713/88" },
    { slug: "tributacao-plr-verbas-rescisorias", rotulo: "PLR e verbas rescisórias", base: "Lei 10.101/00" },
    { slug: "jornada-bancaria-cargo-de-confianca", rotulo: "Jornada e cargo de confiança", base: "CLT, art. 224" },
    { slug: "contratos-bancarios-consignados", rotulo: "Contratos e consignados", base: "CDC" },
    { slug: "planejamento-tributario-aposentadoria", rotulo: "Planejamento na aposentadoria", base: "Lei 11.053/04" },
  ],
  rodape: "Documento informativo · não constitui consulta jurídica",
};

/** Proposta C — etapas da trajetória profissional e áreas relacionadas. */
export const trajetoria = {
  rotulo: "Temas por etapa da trajetória profissional",
  dica: "Selecione uma etapa",
  etapas: [
    {
      titulo: "Carreira",
      texto:
        "Durante o contrato de trabalho: jornada de seis horas, enquadramento em cargo de confiança e contratos de crédito com a instituição empregadora.",
      areas: ["jornada-bancaria-cargo-de-confianca", "contratos-bancarios-consignados"],
    },
    {
      titulo: "Remuneração",
      texto:
        "Participação nos lucros ou resultados, gratificações e demais verbas pagas ao longo do vínculo, cada uma com tratamento próprio no imposto de renda.",
      areas: ["tributacao-plr-verbas-rescisorias"],
    },
    {
      titulo: "Transição",
      texto:
        "Desligamento, programas de demissão voluntária, resgate ou portabilidade de reservas e escolha do regime de tributação da previdência complementar.",
      areas: [
        "tributacao-plr-verbas-rescisorias",
        "imposto-de-renda-previdencia-complementar",
        "planejamento-tributario-aposentadoria",
      ],
    },
    {
      titulo: "Aposentadoria",
      texto:
        "Tributação dos benefícios de previdência complementar e hipóteses legais de isenção de imposto de renda sobre proventos.",
      areas: [
        "imposto-de-renda-previdencia-complementar",
        "isencao-imposto-de-renda-doenca-grave",
        "planejamento-tributario-aposentadoria",
      ],
    },
  ],
};
