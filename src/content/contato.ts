/**
 * Textos da seção de contato e do formulário.
 *
 * O endereço de envio do formulário é configurado pela variável de ambiente
 * NEXT_PUBLIC_FORM_ENDPOINT (ex.: endpoint do Formspree ou de uma API
 * própria que aceite POST com JSON). Ver README.
 */
export const contato = {
  rotulo: "Contato",
  titulo: "Canais de atendimento",
  introducao:
    "Para informações ou agendamento de atendimento, utilize um dos canais abaixo. O retorno é feito pelo meio indicado, em horário de expediente.",

  canais: {
    telefone: "Telefone fixo",
    whatsapp: "WhatsApp",
    email: "E-mail",
    endereco: "Endereço",
    horario: "Horário de atendimento",
  },

  mapa: {
    titulo: "Localização",
    aviso:
      "O mapa é fornecido pelo Google Maps e só é carregado com sua autorização. Ao carregá-lo, o Google poderá coletar dados de navegação.",
    carregar: "Carregar mapa",
    abrirExterno: "Abrir no Google Maps",
    pendente: "O mapa será exibido após a confirmação do endereço.",
    tituloIframe: "Mapa com a localização do escritório",
  },

  formulario: {
    titulo: "Envie uma mensagem",
    descricao:
      "Campos marcados com * são obrigatórios. Não envie documentos, dados de saúde ou informações confidenciais por este formulário.",
    campos: {
      nome: { rotulo: "Nome completo", autocomplete: "name" },
      email: { rotulo: "E-mail", autocomplete: "email" },
      telefone: {
        rotulo: "Telefone",
        ajuda: "Opcional, com DDD.",
        autocomplete: "tel",
      },
      mensagem: {
        rotulo: "Mensagem",
        ajuda: "Descreva brevemente o assunto.",
      },
    },
    consentimento: {
      antes: "Li a ",
      link: "Política de Privacidade",
      depois:
        " e concordo com o uso dos dados informados para resposta a este contato.",
    },
    obrigatorio: "obrigatório",
    enviar: "Enviar mensagem",
    enviando: "Enviando…",
    sucesso: "Mensagem recebida. Retornaremos pelo contato informado.",
    erroEnvio:
      "Não foi possível enviar a mensagem agora. Tente novamente em instantes ou utilize o telefone ou o e-mail do escritório.",
    naoConfigurado:
      "O envio pelo formulário ainda não está disponível. Utilize o telefone ou o e-mail do escritório.",
    resumoErros: "Revise os campos indicados.",
    erros: {
      nome: "Informe seu nome completo.",
      email: "Informe um e-mail válido.",
      telefone: "Informe um telefone válido, com DDD.",
      mensagem: "Escreva sua mensagem (mínimo de 10 caracteres).",
      mensagemLonga: "A mensagem deve ter no máximo 2.000 caracteres.",
      consentimento:
        "Para enviar, é necessário concordar com a Política de Privacidade.",
    },
    /** Assunto do e-mail gerado pelo serviço de formulários. */
    assunto: "Mensagem enviada pelo site",
  },
};
