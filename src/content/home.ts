import { site } from "./site";
import { secoes } from "./navegacao";
import { socios } from "./socios";

const { registroSociedade: registro, endereco } = site;

/** "A, B e C" */
function porExtenso(itens: string[]): string {
  if (itens.length <= 1) return itens.join("");
  return `${itens.slice(0, -1).join(", ")} e ${itens[itens.length - 1]}`;
}

/**
 * Textos da página inicial.
 * Use _sublinhados_ para destacar um trecho em itálico nos títulos.
 */

export const hero = {
  rotulo: site.descritor,
  titulo:
    "Direito tributário e bancário para _profissionais do sistema financeiro_.",
  subtitulo:
    "Orientação jurídica técnica e individualizada para bancários e ex-bancários em questões tributárias, previdenciárias e contratuais.",
  acoes: {
    primaria: { rotulo: "Fale com o escritório", href: `/#${secoes.contato}` },
    secundaria: {
      rotulo: "Conheça as áreas de atuação",
      href: `/#${secoes.areas}`,
    },
  },
  /** Faixa informativa: somente dados verdadeiros. [CONFIRMAR] */
  faixa: [
    `Desde ${site.anoFundacao}`,
    `Registro OAB/${registro.uf} nº ${registro.numero}`,
    `Atendimento presencial em ${endereco.cidade} e online`,
  ],
};

export const escritorio = {
  rotulo: "O escritório",
  titulo:
    "Atuação técnica em questões tributárias e bancárias de quem integra ou integrou o _sistema financeiro_.",
  // [CONFIRMAR] Revisar se a descrição corresponde à prática do escritório.
  paragrafos: [
    `${site.razaoSocial} foi constituída em ${site.anoFundacao}, em ${endereco.cidade}/${endereco.uf}, pelos sócios ${porExtenso(socios.map((s) => s.nome))}.`,
    "A atuação concentra-se em temas tributários e bancários que costumam envolver bancários e ex-bancários: a tributação de verbas trabalhistas e de benefícios de previdência complementar, a jornada de trabalho na categoria e os contratos de crédito.",
    "O atendimento é presencial, na sede do escritório, ou online, por videoconferência. Cada situação é examinada a partir dos documentos apresentados, e as conclusões são comunicadas em linguagem clara.",
  ],
  fatos: [
    { rotulo: "Fundação", valor: site.anoFundacao },
    { rotulo: "Sede", valor: `${endereco.cidade}/${endereco.uf}` },
    { rotulo: "Registro", valor: `OAB/${registro.uf} nº ${registro.numero}` },
    { rotulo: "Atendimento", valor: "Presencial e online" },
  ],
  comoTrabalhamos: {
    titulo: "Como trabalhamos",
    etapas: [
      {
        titulo: "Escuta",
        texto:
          "Conversa inicial para compreender a situação relatada, o histórico profissional e as dúvidas apresentadas.",
      },
      {
        titulo: "Análise documental",
        texto:
          "Exame dos documentos pertinentes, como contracheques, informes de rendimentos, extratos de previdência e contratos, para delimitar as questões jurídicas envolvidas.",
      },
      {
        titulo: "Orientação jurídica",
        texto:
          "Exposição do enquadramento legal, das alternativas existentes e de seus riscos, para que cada decisão seja tomada de forma informada.",
      },
      {
        titulo: "Acompanhamento",
        texto:
          "Quando houver contratação, acompanhamento das medidas adotadas, com comunicação periódica sobre cada etapa.",
      },
    ],
  },
};

export const areasSecao = {
  rotulo: "Áreas de atuação",
  titulo: "Temas tributários, previdenciários e contratuais da _vida profissional bancária_.",
  introducao:
    "Cada área reúne informações gerais sobre o tema, as situações em que ele costuma surgir e os documentos usualmente analisados.",
  saibaMais: "Saiba mais",
};

export const sociosSecao = {
  rotulo: "Sócios",
  titulo: "Advogados responsáveis",
  introducao: {
    antes: "As inscrições podem ser conferidas no ",
    link: "Cadastro Nacional dos Advogados",
    depois: ", mantido pelo Conselho Federal da OAB.",
  },
  inscricao: "Inscrição",
  formacao: "Formação",
  perfilLinkedin: "LinkedIn",
};

export const transparenciaSecao = {
  rotulo: "Transparência",
  titulo: "Dados de identificação do escritório",
  introducao:
    "Informações públicas da sociedade, disponíveis para conferência por qualquer interessado.",
  campos: {
    razaoSocial: "Razão social",
    cnpj: "CNPJ",
    registro: "Registro da sociedade",
    endereco: "Endereço",
    telefone: "Telefone fixo",
    socios: "Sócios",
    conferencia: "Conferência das inscrições",
  },
  conferenciaTexto: "Cadastro Nacional dos Advogados (CNA)",
  aviso: {
    titulo: "Aviso",
    texto:
      "O escritório não entra em contato oferecendo valores a receber nem solicita pagamentos por mensagem. Em caso de dúvida sobre a autenticidade de um contato, ligue para nosso telefone fixo.",
  },
};

export const conteudoSecao = {
  rotulo: "Conteúdo",
  titulo: "Artigos informativos",
  introducao:
    "Textos de caráter educativo sobre temas tributários e bancários. Não constituem consulta jurídica nem substituem a análise individual.",
  lerArtigo: "Ler artigo",
  todos: "Todos os artigos",
  minutosDeLeitura: "min de leitura",
  por: "Por",
};

export const faqSecao = {
  rotulo: "Perguntas frequentes",
  titulo: "Dúvidas gerais",
  introducao:
    "Respostas de caráter geral. Situações específicas dependem de análise individual.",
  outrasDuvidas: "Para outras dúvidas,",
  entreEmContato: "Entre em contato",
};
