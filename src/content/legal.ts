import type { SecaoDocumento } from "./types";
import { site } from "./site";

const { endereco } = site;
const enderecoCompleto = `${endereco.logradouro}, ${endereco.bairro}, ${endereco.cidade}/${endereco.uf}, CEP ${endereco.cep}`;

/**
 * Política de Privacidade (LGPD — Lei nº 13.709/2018).
 * [CONFIRMAR] Revisar integralmente com o encarregado antes da publicação,
 * em especial operadores contratados, prazos de retenção e encarregado.
 */
export const politicaDePrivacidade = {
  titulo: "Política de Privacidade",
  descricao:
    "Como o escritório trata os dados pessoais recebidos por meio deste site, em conformidade com a Lei Geral de Proteção de Dados Pessoais.",
  atualizadaEm: "2026-11-06", // [CONFIRMAR] data de aprovação desta versão
  introducao:
    "Esta política explica quais dados pessoais são tratados por meio deste site, para quais finalidades, com quais fundamentos legais e como o titular pode exercer seus direitos, nos termos da Lei nº 13.709/2018 (Lei Geral de Proteção de Dados Pessoais — LGPD).",
  secoes: [
    {
      titulo: "1. Controlador",
      conteudo: [
        `O controlador dos dados pessoais tratados por meio deste site é ${site.razaoSocial}, inscrita no CNPJ sob o nº ${site.cnpj}, com sede em ${enderecoCompleto}.`,
      ],
    },
    {
      titulo: "2. Encarregado pelo tratamento de dados",
      conteudo: [
        `O encarregado pelo tratamento de dados pessoais é ${site.encarregado.nome}, que pode ser contatado pelo e-mail ${site.encarregado.email}.`,
      ],
    },
    {
      titulo: "3. Dados tratados",
      conteudo: [
        [
          "Formulário de contato: nome, e-mail, telefone (opcional), o conteúdo da mensagem e o registro do consentimento.",
          "Contato por telefone, e-mail ou WhatsApp: os dados que o titular decidir compartilhar nesses canais.",
          "Dados técnicos de acesso: o provedor de hospedagem pode registrar automaticamente dados como endereço IP, data e hora de acesso e tipo de navegador, para segurança e funcionamento do site.",
        ],
        "O site não utiliza ferramentas de medição de audiência nem cookies de publicidade. Caso ferramentas de medição venham a ser utilizadas, elas somente serão ativadas mediante consentimento, que poderá ser recusado ou revogado a qualquer momento.",
      ],
    },
    {
      titulo: "4. Finalidades",
      conteudo: [
        [
          "Responder às mensagens e solicitações enviadas.",
          "Agendar atendimento, quando solicitado pelo titular.",
          "Cumprir obrigações legais e regulatórias.",
          "Manter a segurança e o funcionamento do site.",
        ],
      ],
    },
    {
      titulo: "5. Bases legais",
      conteudo: [
        "O tratamento fundamenta-se no consentimento do titular, registrado no envio do formulário (art. 7º, I, da LGPD); na execução de procedimentos preliminares relacionados a contrato, a pedido do titular (art. 7º, V); no cumprimento de obrigação legal ou regulatória (art. 7º, II); e no legítimo interesse, para a segurança do site (art. 7º, IX).",
        "Dados pessoais sensíveis, como informações de saúde, não devem ser enviados pelo formulário. Quando forem necessários para a análise de uma situação, serão tratados com fundamento no art. 11 da LGPD, com as cautelas adequadas.",
      ],
    },
    {
      titulo: "6. Compartilhamento",
      conteudo: [
        "Os dados pessoais não são vendidos nem cedidos para fins de publicidade. Podem ser tratados por prestadores de serviço que atuam como operadores, exclusivamente para as finalidades desta política: o serviço de recebimento de mensagens do formulário [nome do serviço, ex.: Formspree] e o provedor de hospedagem do site (Vercel Inc.). Alguns desses prestadores podem armazenar dados fora do Brasil, hipótese em que a transferência internacional observa o art. 33 da LGPD.", // [CONFIRMAR] operadores contratados
        "O mapa da seção de contato é fornecido pelo Google Maps e só é carregado após autorização do usuário. Ao carregá-lo, o Google pode coletar dados de navegação, conforme sua própria política de privacidade.",
        "Os dados também poderão ser compartilhados com autoridades públicas, quando houver obrigação legal ou ordem judicial.",
      ],
    },
    {
      titulo: "7. Retenção e eliminação",
      conteudo: [
        "As mensagens recebidas são mantidas pelo tempo necessário ao atendimento da solicitação. Não havendo contratação, os dados são eliminados em até [PRAZO], salvo obrigação legal ou necessidade de exercício regular de direitos.", // [CONFIRMAR] prazo de retenção
        "Havendo contratação, os dados passam a ser tratados conforme o contrato de prestação de serviços e as normas de guarda de documentos aplicáveis à advocacia.",
      ],
    },
    {
      titulo: "8. Direitos do titular",
      conteudo: [
        "Nos termos do art. 18 da LGPD, o titular pode solicitar, a qualquer momento:",
        [
          "confirmação da existência de tratamento e acesso aos dados;",
          "correção de dados incompletos, inexatos ou desatualizados;",
          "anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade com a lei;",
          "portabilidade dos dados a outro fornecedor de serviço, observada a regulamentação;",
          "eliminação dos dados tratados com base no consentimento;",
          "informação sobre as entidades com as quais os dados foram compartilhados;",
          "informação sobre a possibilidade de não fornecer consentimento e suas consequências;",
          "revogação do consentimento.",
        ],
      ],
    },
    {
      titulo: "9. Como exercer seus direitos",
      conteudo: [
        `As solicitações podem ser enviadas ao encarregado pelo e-mail ${site.encarregado.email}. Para proteger os dados, poderá ser solicitada a confirmação da identidade do requerente. O titular também pode apresentar reclamação à Autoridade Nacional de Proteção de Dados (ANPD).`,
      ],
    },
    {
      titulo: "10. Segurança",
      conteudo: [
        "São adotadas medidas técnicas e administrativas razoáveis para proteger os dados pessoais, como conexão criptografada (HTTPS) e acesso restrito às mensagens recebidas. Como nenhum meio de transmissão pela internet é isento de riscos, recomenda-se não enviar informações sensíveis ou confidenciais pelo formulário.",
      ],
    },
    {
      titulo: "11. Cookies e armazenamento local",
      conteudo: [
        "Este site não utiliza cookies de rastreamento ou de publicidade. Se ferramentas de medição de audiência forem ativadas, um aviso permitirá aceitar ou recusar seu uso, e a escolha poderá ser alterada a qualquer momento pelo link “Preferências de cookies”, no rodapé. A escolha do usuário é registrada apenas no próprio navegador.",
      ],
    },
    {
      titulo: "12. Atualizações",
      conteudo: [
        "Esta política pode ser atualizada para refletir alterações legais ou operacionais. A data da versão vigente está indicada no início do documento.",
      ],
    },
  ] satisfies SecaoDocumento[],
};

/**
 * Termos de Uso.
 * [CONFIRMAR] Revisar antes da publicação.
 */
export const termosDeUso = {
  titulo: "Termos de Uso",
  descricao:
    "Condições de uso do site. O conteúdo é informativo e não constitui consulta jurídica nem cria relação advogado-cliente.",
  atualizadaEm: "2026-11-06", // [CONFIRMAR] data de aprovação desta versão
  introducao: `Estes Termos de Uso regulam o acesso ao site de ${site.razaoSocial}. Ao utilizá-lo, o usuário declara estar ciente das condições abaixo.`,
  secoes: [
    {
      titulo: "1. Caráter informativo",
      conteudo: [
        "O conteúdo deste site tem caráter exclusivamente informativo, em conformidade com o Código de Ética e Disciplina da OAB e com o Provimento nº 205/2021 do Conselho Federal da OAB.",
        "As informações publicadas são gerais e não constituem consulta, parecer ou orientação jurídica para situações concretas.",
      ],
    },
    {
      titulo: "2. Ausência de relação advogado-cliente",
      conteudo: [
        "O acesso ao site, a leitura de seus conteúdos e o envio de mensagens pelos canais de contato não criam relação advogado-cliente. Essa relação somente se estabelece mediante contratação formal, após a análise da situação e a concordância de ambas as partes.",
        "O envio de informações não implica aceitação de patrocínio de causa.",
      ],
    },
    {
      titulo: "3. Atualidade das informações",
      conteudo: [
        "A legislação e a jurisprudência mudam com frequência. Os conteúdos indicam a data de publicação e podem não refletir alterações posteriores. Antes de tomar qualquer decisão, busque orientação profissional individualizada.",
      ],
    },
    {
      titulo: "4. Envio de informações",
      conteudo: [
        "Não envie, pelo formulário ou por mensagens não solicitadas, documentos, dados de saúde, senhas ou informações confidenciais. Quando necessários, esses dados são solicitados por canal adequado.",
      ],
    },
    {
      titulo: "5. Propriedade intelectual",
      conteudo: [
        "Textos, marca, identidade visual e demais elementos do site pertencem ao escritório ou são utilizados com autorização. É permitida a reprodução de trechos para fins não comerciais, com indicação da fonte.",
      ],
    },
    {
      titulo: "6. Links externos",
      conteudo: [
        "O site pode conter links para páginas de terceiros, como o Cadastro Nacional dos Advogados e portais oficiais de legislação. O escritório não responde pelo conteúdo ou pelas práticas de privacidade dessas páginas.",
      ],
    },
    {
      titulo: "7. Privacidade",
      conteudo: [
        "O tratamento de dados pessoais está descrito na Política de Privacidade, que integra estes Termos de Uso.",
      ],
    },
    {
      titulo: "8. Alterações",
      conteudo: [
        "Estes termos podem ser alterados a qualquer tempo, com a publicação da versão atualizada nesta página.",
      ],
    },
    {
      titulo: "9. Legislação aplicável",
      conteudo: ["Estes termos são regidos pela legislação brasileira."],
    },
    {
      titulo: "10. Contato",
      conteudo: [
        `Dúvidas sobre estes termos podem ser enviadas para ${site.email}.`,
      ],
    },
  ] satisfies SecaoDocumento[],
};

export const documentoLegal = {
  atualizadaEm: "Versão de",
};
