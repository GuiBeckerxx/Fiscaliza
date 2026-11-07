import type { Pergunta } from "./types";
import { site } from "./site";

/**
 * Perguntas frequentes: respostas gerais e informativas. Não responder
 * casos específicos nem sugerir resultado.
 */
export const perguntas: Pergunta[] = [
  {
    pergunta: "O conteúdo deste site substitui uma consulta jurídica?",
    resposta: [
      "Não. As informações publicadas têm caráter exclusivamente informativo e geral. A análise de qualquer situação depende do exame individual de documentos e circunstâncias, realizado no âmbito de um atendimento profissional.",
    ],
  },
  {
    pergunta: "O escritório atende apenas bancários e ex-bancários?",
    resposta: [
      "A atuação do escritório é voltada a questões tributárias e bancárias que costumam envolver profissionais do sistema financeiro, como bancários e ex-bancários. Pessoas de outras categorias com demandas nessas áreas também podem entrar em contato.",
    ],
  },
  {
    pergunta: "Quais documentos costumam ser solicitados?",
    resposta: [
      "Depende do assunto. Em questões tributárias, é comum a análise de declarações de imposto de renda e informes de rendimentos. Em questões previdenciárias, regulamentos e extratos do plano. Em questões contratuais, contratos e extratos. Em questões de jornada, contracheques e registros de ponto.",
      "A relação de documentos é informada após o primeiro contato. Não é necessário enviar documentos pelo formulário do site.",
    ],
  },
  {
    pergunta: "O atendimento pode ser feito a distância?",
    resposta: [
      `Sim. Além do atendimento presencial em ${site.endereco.cidade}, o escritório realiza reuniões por videoconferência e recebe documentos por meio eletrônico, observados os cuidados de sigilo e de proteção de dados.`, // [CONFIRMAR]
    ],
  },
  {
    pergunta: "Como confirmar se um contato é realmente do escritório?",
    resposta: [
      "O escritório não entra em contato oferecendo valores a receber nem solicita pagamentos por mensagem. Em caso de dúvida, ligue para o telefone fixo informado neste site.",
      "As inscrições dos advogados podem ser conferidas no Cadastro Nacional dos Advogados (CNA), mantido pelo Conselho Federal da OAB.",
    ],
  },
  {
    pergunta: "Como são tratados os dados pessoais enviados ao escritório?",
    resposta: [
      "Os dados informados nos canais de contato são utilizados para responder à solicitação e tratados conforme a Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018). As condições de tratamento estão descritas na Política de Privacidade.",
    ],
  },
];
