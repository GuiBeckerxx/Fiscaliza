/**
 * Dados institucionais do escritório.
 * Tudo o que estiver entre colchetes é placeholder: substitua pelo dado
 * real e remova o comentário de confirmação correspondente.
 */

export const site = {
  /** Nome curto usado na marca (logo, título das páginas). */
  nome: "Melo, Rahman & Bressan",
  /** Razão social completa, conforme registro na OAB. */
  razaoSocial: "Melo, Rahman & Bressan Sociedade de Advogados",
  /** Descritor visual da marca: indica áreas de atuação, não especialização. */
  descritor: "Tributário & Bancário",
  /** Descrição usada em buscadores e no compartilhamento (metadata/Open Graph). */
  descricao:
    "Sociedade de advogados com atuação em direito tributário e bancário. Orientação jurídica técnica e individualizada para bancários e ex-bancários em questões tributárias, previdenciárias e contratuais.",

  /**
   * Endereço público do site, usado em metadata, sitemap e JSON-LD.
   * Pode ser sobrescrito pela variável de ambiente NEXT_PUBLIC_SITE_URL.
   */
  url: "https://www.melorahmanbressan.adv.br", // [CONFIRMAR] domínio definitivo

  anoFundacao: "[ANO]", // [CONFIRMAR] ano de constituição da sociedade

  /** Registro da sociedade na Seccional da OAB. */
  registroSociedade: {
    uf: "[UF]", // [CONFIRMAR]
    numero: "[X]", // [CONFIRMAR]
  },

  cnpj: "[00.000.000/0000-00]", // [CONFIRMAR]

  endereco: {
    logradouro: "[Logradouro, número e complemento]", // [CONFIRMAR]
    bairro: "[Bairro]", // [CONFIRMAR]
    cidade: "[CIDADE]", // [CONFIRMAR]
    uf: "[UF]", // [CONFIRMAR]
    cep: "[00000-000]", // [CONFIRMAR]
  },

  /** Telefone fixo: exibição e formato internacional para o link tel:. */
  telefoneFixo: {
    exibicao: "[(00) 0000-0000]", // [CONFIRMAR]
    internacional: "[+550000000000]", // [CONFIRMAR] ex.: +551130000000
  },

  /** WhatsApp: apenas link simples, sem mensagem pré-preenchida. */
  whatsapp: {
    exibicao: "[(00) 00000-0000]", // [CONFIRMAR]
    numero: "[5500000000000]", // [CONFIRMAR] somente dígitos, com DDI e DDD
  },

  email: "contato@melorahmanbressan.adv.br", // [CONFIRMAR] e-mail do domínio

  horario: {
    texto: "Segunda a sexta-feira, das 9h às 18h", // [CONFIRMAR]
    /** Usado nos dados estruturados (schema.org). */
    dias: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    abertura: "09:00", // [CONFIRMAR]
    fechamento: "18:00", // [CONFIRMAR]
  },

  /** Redes sociais institucionais (links em texto, sem ícones de terceiros). */
  redes: [
    { rotulo: "LinkedIn", href: "[URL do LinkedIn do escritório]" }, // [CONFIRMAR]
    { rotulo: "Instagram", href: "[URL do Instagram do escritório]" }, // [CONFIRMAR]
  ],

  /** Cadastro Nacional dos Advogados — conferência pública das inscrições. */
  cna: "https://cna.oab.org.br",

  /** Encarregado pelo tratamento de dados pessoais (LGPD, art. 41). */
  encarregado: {
    nome: "[Nome do encarregado]", // [CONFIRMAR]
    email: "privacidade@melorahmanbressan.adv.br", // [CONFIRMAR]
  },
} as const;

export type Site = typeof site;
