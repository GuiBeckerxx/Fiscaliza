# Conformidade ética e LGPD

Relatório de conformidade do site de **Melo, Rahman & Bressan Sociedade de Advogados** com o **Provimento CFOAB nº 205/2021** (marketing jurídico), os **arts. 39 a 47 do Código de Ética e Disciplina da OAB (CED)** e a **Lei nº 13.709/2018 (LGPD)**. Para cada seção, indica o texto usado e o fundamento da conformidade.

> **Responsabilidade.** As informações publicadas devem ser objetivas, verdadeiras e comprováveis, e respondem por elas os sócios administradores (Prov. 205/2021, art. 1º, §§ 1º e 2º). Este documento registra os critérios adotados na redação e no código; não substitui a revisão final pelos sócios. Itens marcados com `[CONFIRMAR]` dependem de dados reais (lista no `README.md`).

---

## 1. Critérios gerais aplicados

| Regra | Fundamento | Como o site atende |
| --- | --- | --- |
| Caráter meramente informativo, discrição e sobriedade; vedada a captação de clientela e a mercantilização | CED, art. 39; Prov. 205/2021, art. 3º, *caput* e § 1º | Textos descritivos e factuais; nenhuma chamada que incite ao litígio ou à contratação; chamadas restritas a "Fale com o escritório", "Entre em contato", "Saiba mais", "Ler artigo" e à navegação "Conheça as áreas de atuação" (prevista no briefing). |
| Proibida referência a honorários, formas de pagamento, gratuidade ou descontos | Prov. 205/2021, art. 3º, I | Nenhuma menção. O `lint:copy` bloqueia *honorário, grátis, gratuito, gratuidade, desconto, sem custo, parcelamos, aceitamos*. Nos temas bancários, o texto usa "consignação em folha" em vez de "desconto em folha". |
| Proibidas informações que induzam a erro | Prov. 205/2021, art. 3º, II | Nenhum dado foi inventado: o que não foi fornecido aparece como placeholder entre colchetes e é omitido dos dados estruturados. |
| Proibido anunciar especialidade sem título certificado ou notória especialização | Prov. 205/2021, art. 3º, III; Estatuto, art. 3º-A, parágrafo único | Uso de "áreas de atuação" e "atuação em". "Tributário & Bancário" é descritor das áreas de atuação, não de especialização. O `lint:copy` bloqueia *especialista* e *especializado(a)*. |
| Proibidas expressões persuasivas, de autoengrandecimento ou de comparação | Prov. 205/2021, art. 3º, IV | Sem superlativos ou comparações; o `lint:copy` bloqueia *melhor, líder, nº 1, excelência, renomado, o mais experiente, referência* (como autoelogio) etc. |
| Proibidos promessa de resultado, casos concretos e menção a decisões ou resultados obtidos | Prov. 205/2021, arts. 4º, § 2º, 5º, § 3º, e 6º | Nenhum caso, decisão, número de processos ou valor recuperado. Páginas de área e artigos explicam a legislação em termos gerais e terminam com aviso de que a análise depende do caso. O `lint:copy` bloqueia *garantido, garantia de, recupere, ganhamos, vitória, causa ganha, 100% de…, taxa de êxito, dinheiro esquecido, descubra quanto, você tem direito*. |
| Proibidos rankings, prêmios e honrarias pagas | Prov. 205/2021, art. 5º, § 1º | Nenhum selo, prêmio ou ranking; termos bloqueados no `lint:copy`. |
| Permitidos logomarca, identidade visual e fotos dos advogados; vedados logomarca e símbolos oficiais da OAB | Prov. 205/2021, art. 5º, § 2º | Monograma "MRB" próprio, desenhado em SVG. Nenhum símbolo da OAB; o Cadastro Nacional dos Advogados aparece apenas como link em texto. O `lint:copy` recusa imagens cujo nome sugira símbolo da OAB. |
| Vedada a ostentação | Prov. 205/2021, art. 6º, parágrafo único | Sem fotos de banco de imagens, carros, viagens, relógios ou bens de consumo; sem menção às dimensões ou à estrutura do escritório. |
| Vedada a divulgação conjunta com outras atividades | CED, art. 40, IV; Prov. 205/2021, art. 8º | Nenhuma menção a contabilidade, financeiras ou outros serviços. As páginas de contratos e de planejamento registram que a orientação jurídica não se confunde com recomendação de produtos financeiros ou de investimentos. |
| Identificação: nome da sociedade e números de inscrição na OAB | CED, art. 44, *caput* | Razão social completa, registro da sociedade e inscrições dos sócios no rodapé, na seção Transparência, nos cards dos sócios e na autoria dos artigos. |
| Títulos acadêmicos apenas verdadeiros e comprováveis; vedada menção a cargos ou empregos anteriores, salvo magistério | CED, art. 44, §§ 1º e 2º; Prov. 205/2021, art. 4º, § 1º | Campos de formação com instrução expressa em `src/content/socios.ts`; nenhuma menção a "ex-gerente", "ex-servidor" ou similares. |
| Conteúdo jurídico sem induzir ao litígio e sem consultas habituais a casos | CED, arts. 41 e 42, I | Artigos e FAQ tratam de regras gerais e procedimentos; não respondem a casos específicos e não terminam com chamada para contratação. |
| Vedadas listas de clientes e depoimentos | CED, art. 42, IV | Nenhuma lista de clientes, depoimento ou avaliação; JSON-LD sem `aggregateRating` e sem `review` (bloqueados no `lint:copy`). |
| Publicidade pela internet sujeita às mesmas diretrizes | CED, art. 46 | O site é de acesso por iniciativa do visitante (publicidade passiva) e não usa pop-ups, contagem regressiva nem elementos piscando. |
| Proteção de dados pessoais | LGPD, arts. 6º, 7º, 11, 18, 33 e 41 | Formulário com consentimento expresso e link para a política; coleta mínima (telefone opcional); orientação para não enviar dados de saúde; mapa carregado só após autorização; sem analytics por padrão; banner de cookies com recusa caso a medição seja ativada. |

---

## 2. Seção por seção

### 2.1 Cabeçalho (todas as páginas)

- **Textos:** monograma "MRB" + "Melo, Rahman & Bressan" / "Tributário & Bancário"; menu "Escritório · Áreas de atuação · Sócios · Conteúdo · Contato"; botão "Fale com o escritório".
- **Por que está conforme:** identifica a sociedade pelo nome (CED, art. 44) e usa logotipo próprio, sem símbolos da OAB (Prov., art. 5º, § 2º). O descritor indica áreas de atuação, sem alegar especialização (Prov., art. 3º, III). O único botão usa chamada permitida, sem apelo à contratação.

### 2.2 Hero (abertura)

Composição em três colunas sobre fundo claro: título e ações à esquerda, painel em arco ao centro e áreas de atuação à direita.

- **Título:** "Direito tributário e bancário para profissionais do sistema financeiro." ("sistema financeiro" em latão).
- **Subtítulo:** "Orientação jurídica técnica e individualizada para bancários e ex-bancários em questões tributárias, previdenciárias e contratuais."
- **Ações:** "Fale com o escritório" e "Conheça as áreas de atuação".
- **Painel central:** monograma "MRB", "Melo, Rahman & Bressan" e "Sociedade de Advogados". Opcionalmente, foto real do escritório ou dos sócios (`hero.imagem`).
- **Coluna de áreas:** "Áreas de atuação", ícones neutros (documento, escudo, recibo, calendário, caneta, bússola), títulos das seis áreas com links e o resumo da área selecionada.
- **Faixa informativa:** "Desde [ANO]" · "Registro OAB/[UF] nº [X]" · "Atendimento presencial em [CIDADE] e online". `[CONFIRMAR]`
- **Números:** "Áreas de atuação 06" e "Sócios 03" — contagens geradas do próprio conteúdo.
- **Por que está conforme:** descreve áreas, público e forma de atendimento sem adjetivos de autopromoção, comparações ou promessas (Prov., art. 3º, § 1º e IV). A faixa contém apenas dados objetivos e verificáveis (art. 1º, § 1º). Os números são contagens descritivas, não resultados, casos ou índices de êxito (Prov., arts. 3º e 6º). O painel usa a identidade própria do escritório; fotos dos advogados e do escritório são permitidas (Prov., art. 5º, § 2º).
- **Elementos da referência visual que não foram adotados:** estátua da Justiça com balança e espada (símbolo vedado no briefing e foto de banco de imagens); ícone de martelo (vedado no briefing); logotipos de clientes (CED, art. 42, IV); "10K+ casos atendidos" e "98% de satisfação" (resultados e percentuais — Prov., arts. 3º, IV, e 6º); chamada "Consult Now" e expressões como "unparalleled expertise" (persuasivas e de autoengrandecimento — Prov., art. 3º, III e IV).

### 2.3 01 / O escritório

- **Título:** "Atuação técnica em questões tributárias e bancárias de quem integra ou integrou o sistema financeiro."
- **Texto:** "Melo, Rahman & Bressan Sociedade de Advogados foi constituída em [ANO], em [CIDADE]/[UF], pelos sócios [Nome] Melo, [Nome] Rahman e [Nome] Bressan." / "A atuação concentra-se em temas tributários e bancários que costumam envolver bancários e ex-bancários: a tributação de verbas trabalhistas e de benefícios de previdência complementar, a jornada de trabalho na categoria e os contratos de crédito." / "O atendimento é presencial, na sede do escritório, ou online, por videoconferência. Cada situação é examinada a partir dos documentos apresentados, e as conclusões são comunicadas em linguagem clara." `[CONFIRMAR]`
- **Dados:** Fundação · Sede · Registro · Atendimento ("Presencial e online").
- **Como trabalhamos:** 01 Escuta — "Conversa inicial para compreender a situação relatada, o histórico profissional e as dúvidas apresentadas." · 02 Análise documental — "Exame dos documentos pertinentes, como contracheques, informes de rendimentos, extratos de previdência e contratos, para delimitar as questões jurídicas envolvidas." · 03 Orientação jurídica — "Exposição do enquadramento legal, das alternativas existentes e de seus riscos, para que cada decisão seja tomada de forma informada." · 04 Acompanhamento — "Quando houver contratação, acompanhamento das medidas adotadas, com comunicação periódica sobre cada etapa."
- **Por que está conforme:** texto curto e factual sobre fundação, sócios e método de trabalho (CED, art. 44, § 1º; Prov., art. 3º, § 1º). "Técnica" qualifica a natureza do trabalho, sem comparação com terceiros. Não há menção a dimensões ou estrutura física (Prov., art. 6º) nem a resultados. As etapas descrevem o atendimento sem prometer desfecho.

### 2.4 02 / Áreas de atuação

- **Título:** "Temas tributários, previdenciários e contratuais da vida profissional bancária." — **Introdução:** "Cada área reúne informações gerais sobre o tema, as situações em que ele costuma surgir e os documentos usualmente analisados."
- **Cards (título — descrição) + "Saiba mais":** `[CONFIRMAR lista]`
  1. Imposto de renda sobre previdência complementar — "Tributação de contribuições, resgates e benefícios de previdência complementar."
  2. Isenção de imposto de renda por doença grave — "Isenção sobre proventos de aposentadoria, reforma e pensão nas hipóteses legais."
  3. Tributação de PLR e verbas rescisórias — "Imposto de renda sobre PLR, verbas rescisórias e programas de desligamento."
  4. Jornada bancária e cargo de confiança — "Jornada de seis horas do bancário e critérios legais para o cargo de confiança."
  5. Contratos bancários e consignados — "Contratos de crédito, consignados e tarifas, à luz do Código de Defesa do Consumidor."
  6. Planejamento tributário na aposentadoria — "Efeitos tributários de resgates e da forma de recebimento de benefícios na aposentadoria."
- **Páginas internas (`/areas/[slug]`):** introdução; "O que é"; "Quem pode ser afetado"; "Documentos que costumam ser analisados"; "Pontos de atenção"; "Referências normativas" (leis, decreto e súmulas públicas); aviso "Conteúdo de caráter informativo. Não constitui consulta jurídica nem cria relação advogado-cliente. A análise de cada situação depende do exame individual de documentos e circunstâncias."; linha discreta "Para informações sobre atendimento, utilize os canais de contato do escritório. Entre em contato."
- **Por que está conforme:**
  - "Áreas de atuação", nunca "especialidade" (Prov., art. 3º, III).
  - Conteúdo educativo sobre a legislação; nenhuma promessa, valor, prazo de ganho, percentual de êxito, caso concreto ou decisão obtida (Prov., arts. 4º, § 2º, e 6º).
  - Súmulas e entendimentos de tribunais são citados como informação geral sobre o direito vigente, nunca como resultado obtido pelo escritório.
  - Prazos legais são mencionados de forma neutra ("cuja contagem depende de cada situação"), sem senso de urgência nem estímulo ao litígio (CED, art. 41).
  - Temas sensíveis recebem cuidado adicional: a página de isenção por doença grave orienta a não enviar dados de saúde pelo formulário (LGPD, art. 11).

### 2.5 03 / Sócios

- **Título:** "Advogados responsáveis". **Introdução:** "As inscrições podem ser conferidas no Cadastro Nacional dos Advogados, mantido pelo Conselho Federal da OAB." (link em texto para https://cna.oab.org.br)
- **Card:** retrato (quadro neutro com iniciais enquanto não houver foto) · cargo · nome · "Inscrição: OAB/[UF] nº [X]" · "Formação" · link "LinkedIn". `[CONFIRMAR]`
- **Por que está conforme:** nome e inscrição de cada advogado (CED, art. 44); somente títulos acadêmicos verdadeiros e comprováveis, sem cargos anteriores (CED, art. 44, §§ 1º e 2º; Prov., art. 4º, § 1º); fotos dos advogados são permitidas (Prov., art. 5º, § 2º) — e, na falta delas, nenhum banco de imagens é usado.

### 2.6 04 / Transparência

- **Título:** "Dados de identificação do escritório". **Introdução:** "Informações públicas da sociedade, disponíveis para conferência por qualquer interessado."
- **Dados:** Razão social (Melo, Rahman & Bressan Sociedade de Advogados) · CNPJ · Registro da sociedade (OAB/[UF] nº [X]) · Endereço · Telefone fixo · Sócios e inscrições · Conferência das inscrições: "Cadastro Nacional dos Advogados (CNA)" (somente link em texto, sem logotipo).
- **Aviso:** "O escritório não entra em contato oferecendo valores a receber nem solicita pagamentos por mensagem. Em caso de dúvida sobre a autenticidade de um contato, ligue para nosso telefone fixo." + telefone fixo.
- **Por que está conforme:** informações objetivas e verificáveis (Prov., art. 1º, § 1º; CED, art. 44). As expressões "valores a receber" e "pagamentos" aparecem exclusivamente para alertar contra golpes de falsos contatos — não oferecem serviço nem tratam de honorários. Sem logotipo ou símbolo da OAB (Prov., art. 5º, § 2º).

### 2.7 05 / Conteúdo (artigos)

- **Título:** "Artigos informativos". **Introdução:** "Textos de caráter educativo sobre temas tributários e bancários. Não constituem consulta jurídica nem substituem a análise individual."
- **Lista:** data · tema · título · resumo · "Por [nome] · OAB/[UF] nº [X] / N min de leitura" · "Ler artigo".
- **Artigos de exemplo** (`src/content/artigos/*.mdx`):
  1. "Jornada do bancário: a regra das seis horas e o cargo de confiança" — o que dizem a CLT (arts. 224 e 62, II) e as Súmulas 55, 102, 109, 113 e 287 do TST.
  2. "Previdência complementar: como funcionam as tabelas progressiva e regressiva" — Lei nº 11.053/2004, Lei nº 14.803/2024 e tabela de alíquotas legais (dado normativo, não percentual de êxito).
  3. "Isenção de imposto de renda por doença grave: o que diz a legislação" — Lei nº 7.713/1988 (art. 6º, XIV e XXI), Lei nº 9.250/1995 (art. 30) e Decreto nº 9.580/2018.
- **Aviso ao final de cada artigo:** "Este texto tem caráter exclusivamente informativo e reflete a legislação e a jurisprudência na data de publicação. Não constitui consulta jurídica nem substitui a análise individual de cada situação."
- **Por que está conforme:** marketing de conteúdo informativo, com identificação do autor e do número de inscrição (Prov., art. 4º, *caput* e § 1º). Os textos não induzem ao litígio (CED, art. 41), não respondem a casos concretos (CED, art. 42, I; Prov., art. 6º) e não terminam com chamada para contratação nem com bloco de contato.

### 2.8 06 / Perguntas frequentes

- **Título:** "Dúvidas gerais". **Introdução:** "Respostas de caráter geral. Situações específicas dependem de análise individual." · "Para outras dúvidas, entre em contato."
- **Perguntas:**
  1. "O conteúdo deste site substitui uma consulta jurídica?" — "Não. As informações publicadas têm caráter exclusivamente informativo e geral…"
  2. "O escritório atende apenas bancários e ex-bancários?" — descreve o foco de atuação, sem exclusividade.
  3. "Quais documentos costumam ser solicitados?" — tipos de documento por assunto; "Não é necessário enviar documentos pelo formulário do site."
  4. "O atendimento pode ser feito a distância?" — presencial em [CIDADE] e por videoconferência. `[CONFIRMAR]`
  5. "Como confirmar se um contato é realmente do escritório?" — reforça o aviso contra golpes e indica o CNA.
  6. "Como são tratados os dados pessoais enviados ao escritório?" — remete à LGPD e à Política de Privacidade.
- **Por que está conforme:** perguntas institucionais e procedimentais; nenhuma resposta configura consulta sobre caso específico (CED, art. 42, I) nem sugere resultado (Prov., art. 6º).

### 2.9 07 / Contato

- **Título:** "Canais de atendimento". **Introdução:** "Para informações ou agendamento de atendimento, utilize um dos canais abaixo. O retorno é feito pelo meio indicado, em horário de expediente."
- **Canais:** telefone fixo · WhatsApp (link simples `wa.me`, sem mensagem pré-preenchida) · e-mail do domínio · endereço · horário · mapa ("Carregar mapa", com aviso: "O mapa é fornecido pelo Google Maps e só é carregado com sua autorização. Ao carregá-lo, o Google poderá coletar dados de navegação.").
- **Formulário:** "Envie uma mensagem" · "Campos marcados com * são obrigatórios. Não envie documentos, dados de saúde ou informações confidenciais por este formulário." · Nome completo* · E-mail* · Telefone (opcional) · Mensagem* ("Descreva brevemente o assunto.") · consentimento* "Li a Política de Privacidade e concordo com o uso dos dados informados para resposta a este contato." · botão "Enviar mensagem".
- **Mensagens:** sucesso "Mensagem recebida. Retornaremos pelo contato informado."; erro "Não foi possível enviar a mensagem agora. Tente novamente em instantes ou utilize o telefone ou o e-mail do escritório."
- **Por que está conforme:** dados de contato em caráter informativo (Prov., art. 4º, § 3º; CED, art. 46). Mensagem de sucesso neutra, sem promessa de prazo ou de resultado. LGPD: consentimento expresso e destacado com link para a política (art. 7º, I), minimização (telefone opcional; orientação para não enviar dados sensíveis — arts. 6º, III, e 11) e mapa de terceiro carregado somente após ação do usuário.

### 2.10 Rodapé (todas as páginas)

- **Textos:** monograma + "Tributário & Bancário"; razão social completa "Melo, Rahman & Bressan Sociedade de Advogados"; "Registro OAB/[UF] nº [X]"; CNPJ; endereço, telefone, e-mail e horário; nomes e inscrições dos sócios; links "Política de Privacidade", "Termos de Uso" e "Dados do escritório"; redes sociais em texto; "© [ano] Melo, Rahman & Bressan Sociedade de Advogados. Todos os direitos reservados."; "As informações deste site têm caráter exclusivamente informativo, nos termos do Provimento nº 205/2021 do Conselho Federal da OAB, e não constituem consulta jurídica."
- **Por que está conforme:** identificação completa da sociedade e dos advogados (CED, art. 44) e declaração do caráter informativo (CED, art. 39; Prov., art. 3º). Redes sociais como links em texto, sem ícones de terceiros.

### 2.11 Política de Privacidade (`/politica-de-privacidade`)

Seções: 1. Controlador (razão social, CNPJ, endereço) · 2. Encarregado (nome e e-mail) · 3. Dados tratados · 4. Finalidades · 5. Bases legais (art. 7º, I, II, V e IX; dados sensíveis pelo art. 11) · 6. Compartilhamento (operadores de formulário e hospedagem; Google Maps somente após autorização; transferência internacional pelo art. 33) · 7. Retenção e eliminação (`[PRAZO]`) · 8. Direitos do titular (art. 18) · 9. Como exercer os direitos (encarregado e ANPD) · 10. Segurança · 11. Cookies e armazenamento local · 12. Atualizações. `[CONFIRMAR]`

**Por que está conforme:** atende ao dever de transparência da LGPD (arts. 6º, VI, 9º e 41), com controlador, encarregado, finalidade, base legal, retenção e direitos do titular.

### 2.12 Termos de Uso (`/termos-de-uso`)

Seções: caráter informativo (CED e Prov. 205/2021) · ausência de relação advogado-cliente ("O acesso ao site, a leitura de seus conteúdos e o envio de mensagens pelos canais de contato não criam relação advogado-cliente…") · atualidade das informações · envio de informações · propriedade intelectual · links externos · privacidade · alterações · legislação aplicável · contato. `[CONFIRMAR]`

**Por que está conforme:** deixa claro que o conteúdo é informativo e não constitui consulta jurídica nem cria relação advogado-cliente, sem qualquer referência a preço ou condições comerciais.

### 2.13 Página 404

"Página não encontrada" · "O endereço acessado não existe ou foi alterado. Utilize o menu ou volte à página inicial." · "Página inicial". Texto neutro; página não indexada (`noindex`).

---

## 3. Metadados, compartilhamento e dados estruturados

- **Título padrão:** "Melo, Rahman & Bressan Sociedade de Advogados · Tributário & Bancário".
- **Descrição:** "Sociedade de advogados com atuação em direito tributário e bancário. Orientação jurídica técnica e individualizada para bancários e ex-bancários em questões tributárias, previdenciárias e contratuais."
- **Imagem de compartilhamento (`/og.png`):** monograma, nome, "Sociedade de Advogados", título do hero e "Tributário & Bancário" sobre grafite com grade fina — sem fotos, selos ou promessas.
- **JSON-LD:** `LegalService` (nome, razão social, descrição, URL, logotipo, e-mail, telefone, endereço, CNPJ, fundação, horário, áreas em `knowsAbout`, sócios) e `Person` para cada sócio (nome, cargo, inscrição na OAB, LinkedIn); `Article` nos artigos; `BreadcrumbList` nas páginas internas.
- **Por que está conforme:** apenas dados factuais. Campos ainda entre colchetes são **omitidos automaticamente** (`src/lib/pendente.ts`), para não publicar dados fictícios. Não há `aggregateRating`, `review` nem qualquer avaliação.

## 4. Identidade visual e interação

- Paleta grafite, off-white, cinza e acento único em latão (usado em linhas, detalhes e hover); grade fina de 1 px apenas como textura do hero e dos cabeçalhos internos.
- Sem logomarca, brasão ou símbolos da OAB; sem martelo, balança ou aperto de mão; sem fotos de banco de imagens; sem imagens de carros, viagens, relógios ou ostentação; sem selos, prêmios ou rankings.
- Sem pop-ups, contagem regressiva ou elementos piscando. Microinterações de até 400 ms (fade/slide, sublinhado animado, cabeçalho com blur), desativadas com `prefers-reduced-motion`. O único indicador giratório aparece enquanto o formulário é enviado e também respeita `prefers-reduced-motion`.
- O aviso de cookies só existe se a medição de audiência for ativada; mesmo assim, é uma barra discreta (não modal), com "Recusar" e "Aceitar" de igual destaque.

## 5. Verificação automática (`npm run lint:copy`)

O script `scripts/lint-copy.mjs` roda antes de todo `npm run build` e interrompe a publicação se encontrar, em qualquer arquivo de texto de `src/`, os termos da lista obrigatória do projeto — *honorário, grátis, gratuito, desconto, garantido, garantia de, recupere, melhor, líder, nº 1, especialista, ganhamos, vitória, depoimento* — e termos complementares (*especializado, gratuidade, sem custo, excelência, renomado, o mais experiente, liderança, prêmio, ranking, garantimos, recuperar, vencemos, causa ganha, 100% de…, taxa de êxito, dinheiro esquecido, descubra quanto, você tem direito, calculadora, simulador, imperdível, aproveite, parcelamos, aceitamos, aggregateRating, review*). A busca ignora maiúsculas e acentos e cobre comentários, atributos `alt`, metadata e artigos MDX. Imagens cujo nome sugira símbolo da OAB também bloqueiam o build.

A verificação automática reduz riscos, mas não substitui a leitura atenta de cada novo texto: expressões persuasivas podem ser construídas sem nenhum termo da lista.

## 6. Cuidados contínuos

1. Manter a lista de áreas igual à atuação real do escritório.
2. Incluir títulos acadêmicos somente com comprovação disponível.
3. Revisar artigos e referências normativas quando a legislação ou a jurisprudência mudar (cada artigo informa a data de publicação).
4. Não publicar casos, decisões, resultados, depoimentos ou listas de clientes.
5. Antes de ativar analytics, atualizar a Política de Privacidade e manter o banner de consentimento.
6. Rodar `npm run build` (com `lint:copy`) e `npm run pendencias:strict` antes de cada publicação.
