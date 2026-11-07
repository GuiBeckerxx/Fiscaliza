import type { Area } from "./types";

/**
 * Áreas de atuação. [CONFIRMAR] Lista sugerida: manter apenas as áreas em
 * que o escritório efetivamente atua.
 *
 * Regras de redação: tom educativo; usar "atuação em"; não prometer
 * resultado; não citar valores, percentuais de êxito, casos concretos ou
 * decisões obtidas pelo escritório. Referências normativas devem ser
 * revisadas periodicamente.
 */
export const areas: Area[] = [
  {
    slug: "imposto-de-renda-previdencia-complementar",
    titulo: "Imposto de renda sobre previdência complementar",
    resumo:
      "Tributação de contribuições, resgates e benefícios de previdência complementar.",
    descricaoSeo:
      "Informações gerais sobre a tributação de contribuições, benefícios e resgates de planos de previdência complementar, abertos ou fechados.",
    introducao:
      "Contribuições, benefícios e resgates de planos de previdência complementar seguem regras próprias de imposto de renda, que variam conforme o tipo de plano, o regime de tributação escolhido e o período em que as contribuições foram feitas.",
    oQueE: [
      "A previdência complementar é organizada por entidades fechadas, os chamados fundos de pensão, instituídos por empregadores ou associações para seus participantes, e por entidades abertas, que oferecem planos ao público em geral. Muitos bancários participam de planos fechados patrocinados pela instituição em que trabalham ou trabalharam.",
      "Em regra, as contribuições a planos fechados e a planos do tipo PGBL podem ser deduzidas da base de cálculo do imposto de renda, dentro dos limites legais, e os benefícios e resgates são tributados quando recebidos. Nos planos do tipo VGBL, a tributação incide apenas sobre os rendimentos.",
      "Há situações que exigem exame do histórico contributivo, como as contribuições feitas entre 1989 e 1995, período em que vigorava regra diferente de dedução, e os resgates ou portabilidades realizados por ocasião do desligamento do empregador.",
    ],
    quemPodeSerAfetado: [
      "Participantes ativos de planos de previdência complementar, abertos ou fechados.",
      "Aposentados e pensionistas que recebem benefício de entidade de previdência complementar.",
      "Ex-empregados que resgataram ou transferiram suas reservas ao se desligarem do empregador.",
      "Participantes que contribuíram para fundos de pensão entre 1989 e 1995.",
      "Quem precisa escolher entre as tabelas progressiva e regressiva de tributação.",
    ],
    documentos: [
      "Regulamento do plano de benefícios e eventuais alterações.",
      "Extratos com o histórico de contribuições do participante.",
      "Informes de rendimentos fornecidos pela entidade de previdência.",
      "Declarações de imposto de renda dos últimos exercícios.",
      "Comprovantes de resgate, portabilidade ou concessão de benefício.",
      "Termo de opção pelo regime de tributação, quando houver.",
    ],
    pontosDeAtencao: [
      "A opção pela tabela regressiva é irretratável, e a legislação define até quando ela pode ser feita.",
      "A dedução das contribuições é limitada a 12% dos rendimentos tributáveis e pressupõe contribuição ao regime geral ou a regime próprio de previdência.",
      "A legislação estabelece prazos para pedidos e questionamentos tributários, cuja contagem depende de cada situação.",
    ],
    referencias: [
      "Lei Complementar nº 109/2001 — regime de previdência complementar.",
      "Lei nº 7.713/1988 — imposto de renda das pessoas físicas.",
      "Lei nº 9.250/1995, art. 33 — tributação de benefícios e resgates.",
      "Lei nº 9.532/1997, art. 11 — limite de dedução das contribuições.",
      "Lei nº 11.053/2004 — regime de tributação regressivo.",
      "Lei nº 14.803/2024 — momento da opção pelo regime de tributação.",
      "Medida Provisória nº 2.159-70/2001, art. 7º — contribuições de 1989 a 1995.",
    ],
  },
  {
    slug: "isencao-imposto-de-renda-doenca-grave",
    titulo: "Isenção de imposto de renda por doença grave",
    resumo:
      "Isenção sobre proventos de aposentadoria, reforma e pensão nas hipóteses legais.",
    descricaoSeo:
      "Informações gerais sobre a isenção de imposto de renda sobre proventos de aposentadoria, reforma e pensão de pessoas com doenças previstas em lei.",
    introducao:
      "A legislação do imposto de renda prevê isenção sobre proventos de aposentadoria, reforma e pensão recebidos por pessoas diagnosticadas com determinadas doenças, inclusive quando o diagnóstico é posterior à aposentadoria.",
    oQueE: [
      "A Lei nº 7.713/1988 relaciona as doenças que permitem a isenção, entre elas neoplasia maligna, cardiopatia grave, doença de Parkinson, esclerose múltipla, nefropatia grave, hepatopatia grave, cegueira, alienação mental e paralisia irreversível e incapacitante. Segundo o Superior Tribunal de Justiça, a lista é taxativa.",
      "A isenção alcança os proventos de aposentadoria, reforma e pensão, inclusive a complementação paga por entidade de previdência complementar. Pelo entendimento firmado pelos tribunais superiores, ela não se estende à remuneração de quem continua em atividade nem a outros rendimentos, como aluguéis e aplicações financeiras.",
      "Para o reconhecimento pela fonte pagadora ou pela Receita Federal, a lei exige laudo pericial emitido por serviço médico oficial da União, dos Estados, do Distrito Federal ou dos Municípios. A data de início da doença indicada no laudo é relevante para definir a partir de quando a isenção se aplica.",
    ],
    quemPodeSerAfetado: [
      "Aposentados e reformados diagnosticados com alguma das doenças previstas em lei.",
      "Pensionistas nas mesmas condições.",
      "Quem recebe complementação de aposentadoria de entidade de previdência complementar.",
      "Pessoas cujo diagnóstico ocorreu depois da aposentadoria.",
    ],
    documentos: [
      "Laudo pericial emitido por serviço médico oficial, com a data de início da doença.",
      "Relatórios médicos e exames que registrem o diagnóstico.",
      "Carta de concessão da aposentadoria, reforma ou pensão.",
      "Informes de rendimentos do INSS e da entidade de previdência complementar.",
      "Declarações de imposto de renda dos últimos exercícios.",
    ],
    pontosDeAtencao: [
      "Informações de saúde são dados pessoais sensíveis. Não as envie pelo formulário do site; quando necessárias, são solicitadas por canal adequado.",
      "Para doenças passíveis de controle, o serviço médico oficial fixa prazo de validade do laudo.",
      "A legislação estabelece prazos para pedidos e questionamentos tributários, cuja contagem depende de cada situação.",
    ],
    referencias: [
      "Lei nº 7.713/1988, art. 6º, XIV e XXI — hipóteses de isenção.",
      "Lei nº 9.250/1995, art. 30 — laudo pericial de serviço médico oficial.",
      "Decreto nº 9.580/2018 — Regulamento do Imposto sobre a Renda.",
    ],
  },
  {
    slug: "tributacao-plr-verbas-rescisorias",
    titulo: "Tributação de PLR e verbas rescisórias",
    resumo:
      "Imposto de renda sobre PLR, verbas rescisórias e programas de desligamento.",
    descricaoSeo:
      "Informações gerais sobre a incidência de imposto de renda sobre PLR, verbas rescisórias e valores pagos em programas de desligamento.",
    introducao:
      "A participação nos lucros ou resultados (PLR) e as verbas pagas na rescisão do contrato de trabalho têm tratamentos distintos no imposto de renda. Algumas parcelas são tributáveis; outras são isentas ou não tributáveis, conforme sua natureza.",
    oQueE: [
      "A PLR é tributada exclusivamente na fonte, separadamente dos demais rendimentos, por tabela progressiva própria. Na categoria bancária, as regras de pagamento costumam ser definidas em convenção ou acordo coletivo de trabalho.",
      "Na rescisão, parcelas de natureza salarial, como saldo de salário e 13º salário, são tributáveis. O aviso prévio indenizado e a indenização paga por despedida, nos limites previstos em lei, bem como os valores do FGTS, são isentos. Férias vencidas ou proporcionais pagas na rescisão, com o respectivo adicional de um terço, também não são tributadas, conforme entendimento consolidado.",
      "Os valores recebidos por adesão a programas de desligamento voluntário (PDV) não são tributados, segundo entendimento consolidado, mas a análise depende da natureza efetiva de cada pagamento: gratificações pagas por liberalidade do empregador na rescisão, por exemplo, são tributáveis.",
    ],
    quemPodeSerAfetado: [
      "Bancários que recebem PLR prevista em convenção ou acordo coletivo.",
      "Empregados desligados que receberam verbas rescisórias.",
      "Participantes de programas de desligamento voluntário ou incentivado.",
      "Quem verificou retenção de imposto sobre parcelas de natureza indenizatória.",
    ],
    documentos: [
      "Termo de rescisão do contrato de trabalho (TRCT).",
      "Contracheques e demonstrativos de pagamento da PLR.",
      "Informe de rendimentos fornecido pelo empregador.",
      "Regulamento do programa de desligamento, quando houver.",
      "Convenção ou acordo coletivo aplicável ao período.",
      "Declarações de imposto de renda dos exercícios envolvidos.",
    ],
    pontosDeAtencao: [
      "A classificação de cada parcela depende de sua natureza, e não apenas do nome atribuído no termo de rescisão.",
      "Valores recebidos acumuladamente em ação trabalhista seguem regras próprias de tributação.",
      "A legislação estabelece prazos para pedidos e questionamentos tributários, cuja contagem depende de cada situação.",
    ],
    referencias: [
      "Lei nº 7.713/1988, art. 6º, V — indenização, aviso prévio e FGTS.",
      "Lei nº 7.713/1988, art. 12-A — rendimentos recebidos acumuladamente.",
      "Lei nº 10.101/2000, art. 3º, § 5º — tributação da PLR.",
      "Súmulas 125, 215 e 386 do Superior Tribunal de Justiça.",
    ],
  },
  {
    slug: "jornada-bancaria-cargo-de-confianca",
    titulo: "Jornada bancária e cargo de confiança",
    resumo:
      "Jornada de seis horas do bancário e critérios legais para o cargo de confiança.",
    descricaoSeo:
      "Informações gerais sobre a jornada de seis horas dos empregados de bancos e os critérios para o enquadramento em cargo de confiança.",
    introducao:
      "A CLT estabelece jornada especial para os empregados de bancos e prevê exceções para quem exerce cargo de confiança. O enquadramento depende das atribuições efetivamente exercidas, e não apenas do nome do cargo.",
    oQueE: [
      "Pelo art. 224 da CLT, a duração normal do trabalho dos empregados em bancos é de seis horas contínuas nos dias úteis, com exceção dos sábados, totalizando trinta horas semanais.",
      "O § 2º do mesmo artigo afasta essa regra para quem exerce funções de direção, gerência, fiscalização, chefia e equivalentes, ou outros cargos de confiança, desde que receba gratificação não inferior a um terço do salário do cargo efetivo. Nesses casos, a jornada é de oito horas. Para o gerente-geral de agência, a jurisprudência do Tribunal Superior do Trabalho presume o exercício de encargo de gestão, com aplicação do art. 62, II, da CLT.",
      "Segundo a jurisprudência trabalhista, a configuração do cargo de confiança depende da prova das reais atribuições do empregado. A nomenclatura do cargo e o pagamento da gratificação, isoladamente, não são suficientes para o enquadramento.",
    ],
    quemPodeSerAfetado: [
      "Bancários que exercem ou exerceram funções comissionadas com jornada de oito horas.",
      "Gerentes de agência e ocupantes de cargos de gestão.",
      "Empregados com dúvidas sobre a correção dos registros de jornada.",
      "Ex-bancários, em relação ao período do contrato de trabalho.",
    ],
    documentos: [
      "Contrato de trabalho e termos aditivos.",
      "Descrição de cargos e normas internas sobre alçadas e atribuições.",
      "Contracheques que demonstrem a gratificação de função.",
      "Registros de ponto ou de acesso a sistemas.",
      "Convenções e acordos coletivos do período.",
      "Termo de rescisão, no caso de contrato encerrado.",
    ],
    pontosDeAtencao: [
      "Convenções coletivas da categoria podem conter regras específicas sobre gratificação de função e jornada, que devem ser examinadas em conjunto com a lei.",
      "A Constituição Federal fixa prazos para a cobrança de créditos decorrentes da relação de trabalho (art. 7º, XXIX), cuja contagem deve ser verificada em cada caso.",
      "Cada situação depende da prova das atividades efetivamente desempenhadas.",
    ],
    referencias: [
      "Consolidação das Leis do Trabalho, arts. 224 e 62, II.",
      "Súmulas 102, 109 e 287 do Tribunal Superior do Trabalho.",
      "Constituição Federal, art. 7º, XXIX.",
    ],
  },
  {
    slug: "contratos-bancarios-consignados",
    titulo: "Contratos bancários e consignados",
    resumo:
      "Contratos de crédito, consignados e tarifas, à luz do Código de Defesa do Consumidor.",
    descricaoSeo:
      "Informações gerais sobre contratos de crédito, empréstimos consignados e tarifas bancárias, à luz do Código de Defesa do Consumidor.",
    introducao:
      "Contratos de empréstimo, financiamento, cartão de crédito e crédito consignado envolvem encargos, tarifas e condições que precisam ser compreendidos antes e durante a contratação. A relação entre o cliente e a instituição financeira está sujeita ao Código de Defesa do Consumidor.",
    oQueE: [
      "O Superior Tribunal de Justiça consolidou o entendimento de que o Código de Defesa do Consumidor se aplica às instituições financeiras (Súmula 297). Isso inclui deveres de informação clara sobre taxas, custo efetivo total e condições contratuais.",
      "No crédito consignado, as parcelas são pagas por consignação em folha de pagamento ou no benefício previdenciário, dentro de limites de margem consignável definidos em lei e em regulamentos. Para bancários, é comum a contratação de crédito com a própria instituição empregadora, o que pode gerar dúvidas sobre o saldo devedor em caso de desligamento.",
      "Desde 2021, o Código de Defesa do Consumidor também prevê regras de prevenção e tratamento do superendividamento, com procedimento próprio de repactuação de dívidas.",
    ],
    quemPodeSerAfetado: [
      "Tomadores de crédito consignado: empregados, aposentados e pensionistas.",
      "Bancários e ex-bancários com contratos de crédito junto à instituição empregadora.",
      "Pessoas que identificaram consignações, tarifas ou cobranças que não reconhecem.",
      "Pessoas em situação de superendividamento.",
    ],
    documentos: [
      "Contratos, cédulas de crédito bancário e termos de renegociação.",
      "Extratos e demonstrativos da evolução da dívida.",
      "Contracheques ou extratos de benefício com as consignações.",
      "Relatório de empréstimos e financiamentos emitido pelo Registrato, sistema do Banco Central do Brasil.",
      "Comunicações trocadas com a instituição financeira.",
    ],
    pontosDeAtencao: [
      "A análise considera o contrato efetivamente assinado e as normas vigentes à época da contratação.",
      "A orientação jurídica não se confunde com recomendação de produtos financeiros ou de investimentos.",
      "A legislação estabelece prazos para questionamentos contratuais, cuja contagem depende de cada situação.",
    ],
    referencias: [
      "Código de Defesa do Consumidor (Lei nº 8.078/1990).",
      "Lei nº 14.181/2021 — prevenção e tratamento do superendividamento.",
      "Lei nº 10.820/2003 — consignação em folha de pagamento.",
      "Súmula 297 do Superior Tribunal de Justiça.",
    ],
  },
  {
    slug: "planejamento-tributario-aposentadoria",
    titulo: "Planejamento tributário na aposentadoria",
    resumo:
      "Efeitos tributários de resgates e da forma de recebimento de benefícios na aposentadoria.",
    descricaoSeo:
      "Informações gerais sobre os efeitos tributários de decisões tomadas na transição para a aposentadoria, como resgates e forma de recebimento de benefícios.",
    introducao:
      "A transição para a aposentadoria envolve escolhas com efeitos tributários duradouros: o regime de tributação da previdência complementar, a forma de recebimento dos benefícios, o momento de eventuais resgates e a organização das declarações de imposto de renda.",
    oQueE: [
      "Planejamento tributário é a organização lícita de decisões patrimoniais e financeiras a partir das regras tributárias aplicáveis. Na aposentadoria, isso significa examinar, antes de cada decisão, como a legislação trata os rendimentos que serão recebidos.",
      "Entre os pontos usualmente analisados estão a escolha entre as tabelas progressiva e regressiva da previdência complementar, que desde 2024 pode ser feita até a obtenção do benefício ou o primeiro resgate; a forma de recebimento do benefício, quando o regulamento oferece alternativas; e a parcela adicional de isenção aplicável a proventos de aposentadoria e pensão a partir dos 65 anos.",
      "A orientação tem natureza jurídico-tributária e não se confunde com recomendação de investimentos.",
    ],
    quemPodeSerAfetado: [
      "Bancários próximos da aposentadoria.",
      "Participantes de previdência complementar que precisam definir a forma de recebimento do benefício.",
      "Aposentados com mais de uma fonte de renda.",
      "Pessoas a partir de 65 anos que recebem proventos de aposentadoria ou pensão.",
    ],
    documentos: [
      "Regulamento do plano e extratos de previdência complementar.",
      "Simulações de benefício fornecidas pela entidade de previdência.",
      "Carta de concessão ou simulação de aposentadoria do INSS.",
      "Informes de rendimentos e declarações de imposto de renda.",
      "Informações sobre dependentes e despesas dedutíveis.",
    ],
    pontosDeAtencao: [
      "Algumas escolhas são irretratáveis, como a opção pela tabela regressiva.",
      "Alterações na legislação podem modificar o tratamento tributário ao longo do tempo, o que justifica revisões periódicas.",
      "Cada decisão deve considerar a situação individual, inclusive a existência de outras rendas e de dependentes.",
    ],
    referencias: [
      "Lei nº 7.713/1988, art. 6º, XV — parcela isenta a partir dos 65 anos.",
      "Lei nº 9.250/1995 — imposto de renda das pessoas físicas.",
      "Lei nº 11.053/2004 — regime de tributação regressivo.",
      "Lei nº 14.803/2024 — momento da opção pelo regime de tributação.",
    ],
  },
];

export const areaPagina = {
  rotuloArea: "Área de atuação",
  secoes: {
    oQueE: "O que é",
    quemPodeSerAfetado: "Quem pode ser afetado",
    documentos: "Documentos que costumam ser analisados",
    pontosDeAtencao: "Pontos de atenção",
    referencias: "Referências normativas",
  },
  nestaPagina: "Nesta página",
  aviso:
    "Conteúdo de caráter informativo. Não constitui consulta jurídica nem cria relação advogado-cliente. A análise de cada situação depende do exame individual de documentos e circunstâncias.",
  contato: {
    texto:
      "Para informações sobre atendimento, utilize os canais de contato do escritório.",
    acao: "Entre em contato",
  },
  outrasAreas: "Outras áreas de atuação",
  artigosRelacionados: "Artigo relacionado",
};

export function getArea(slug: string): Area | undefined {
  return areas.find((area) => area.slug === slug);
}
