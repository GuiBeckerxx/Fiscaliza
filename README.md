# Melo, Rahman & Bressan Sociedade de Advogados — site institucional

Site **informativo** do escritório (descritor visual "Tributário & Bancário"), voltado a bancários e ex-bancários. Construído para cumprir o **Provimento CFOAB nº 205/2021**, os **arts. 39 a 47 do Código de Ética e Disciplina da OAB** e a **LGPD**. A justificativa de cada texto está em [`COMPLIANCE.md`](./COMPLIANCE.md).

- **Stack:** Next.js 16 (App Router) + TypeScript + Tailwind CSS 4, exportação estática (`output: "export"`), pronta para a Vercel.
- **Fontes (next/font):** Instrument Serif (títulos), Inter (texto), Geist Mono (rótulos e números).
- **Sem dependências pesadas:** animações em CSS + IntersectionObserver (respeitam `prefers-reduced-motion`); ícones e monograma em SVG próprio.
- **Todo o conteúdo editável fica em `src/content/`.** Dados ainda não confirmados aparecem entre colchetes (`[ANO]`, `[CIDADE]`…) e estão marcados com o comentário `// [CONFIRMAR]`.

---

## Comandos

Requer Node.js 20.9 ou superior.

| Comando | O que faz |
| --- | --- |
| `npm install` | Instala as dependências. |
| `npm run dev` | Ambiente de desenvolvimento em http://localhost:3000. |
| `npm run build` | Roda o **`lint:copy`** e, se aprovado, gera o site estático em `out/`. |
| `npm run preview` | Serve a pasta `out/` localmente (após o build), com URLs limpas e página 404. |
| `npm run lint:copy` | Procura termos vedados em `src/` e **falha** se encontrar (ver abaixo). |
| `npm run pendencias` | Lista os itens `[CONFIRMAR]` e os placeholders ainda visíveis nas páginas geradas. |
| `npm run pendencias:strict` | Igual ao anterior, mas falha se houver pendências — use antes da publicação definitiva. |
| `npm run lint` | ESLint (regras do Next.js). |
| `npm run typecheck` | Verificação de tipos do TypeScript. |

### `lint:copy` — termos vedados

`scripts/lint-copy.mjs` varre todos os arquivos de texto de `src/` (textos, comentários, `alt`, metadata, artigos MDX), sem diferenciar maiúsculas nem acentos, e interrompe o build se encontrar, entre outros: *honorário, grátis, gratuito, desconto, garantido, garantia de, recupere, melhor, líder, nº 1, especialista, ganhamos, vitória, depoimento* — além de complementos como *especializado, excelência, ranking, prêmio, 100% de…, taxa de êxito, calculadora/simulador, dinheiro esquecido, descubra quanto, você tem direito, aggregateRating/review*. Também bloqueia imagens cujo nome sugira símbolo da OAB.

> Nome próprio legítimo que contenha um termo da lista (ex.: a cidade de **Vitória/ES**) já está liberado em `PERMITIDOS`, no início do script. Inclua novas exceções apenas para nomes próprios, com justificativa.

---

## Onde editar

| O quê | Arquivo |
| --- | --- |
| Razão social, descritor, domínio, ano de fundação, registro OAB da sociedade, CNPJ, endereço, telefone fixo, WhatsApp, e-mail, horário, redes sociais, encarregado (LGPD) | `src/content/site.ts` |
| Hero, "O escritório", "Como trabalhamos" e títulos das seções da página inicial | `src/content/home.ts` |
| Sócios (nome, cargo, inscrições na OAB, formação, LinkedIn, foto) | `src/content/socios.ts` |
| Áreas de atuação (cards e páginas `/areas/[slug]`) | `src/content/areas.ts` |
| Índice dos artigos (título, resumo, data, autor, tema) | `src/content/artigos.ts` |
| Texto de cada artigo (MDX) | `src/content/artigos/<slug>.mdx` |
| Perguntas frequentes | `src/content/faq.ts` |
| Seção de contato e textos do formulário | `src/content/contato.ts` |
| Política de Privacidade e Termos de Uso | `src/content/legal.ts` |
| Menu e rótulos de interface | `src/content/navegacao.ts` |
| Rodapé, página 404, aviso de cookies e rótulos de acessibilidade | `src/content/interface.ts` |

Para destacar um trecho em itálico nos títulos, use sublinhados: `"... para profissionais do _sistema financeiro_."` (na abertura, o destaque aparece em latão).

### Abertura (hero)

- O painel em arco central exibe o monograma do escritório. Para usar uma **foto real do escritório ou dos sócios**, coloque-a em `public/` (WebP, retrato, ~900 × 1200 px) e preencha `imagem: { src: "/arquivo.webp", alt: "descrição" }` em `hero`, em `src/content/home.ts`. Não use banco de imagens, balança, martelo nem símbolos da OAB.
- A coluna da direita lista as áreas de `src/content/areas.ts`. Os ícones selecionam qual resumo aparece; o ícone de cada área é definido no campo `icone`.
- Os números ("Áreas de atuação" e "Sócios") são contados automaticamente a partir do conteúdo. Não substitua por resultados, casos ou percentuais.

### Sócios

- Informe **somente títulos acadêmicos concluídos, verdadeiros e comprováveis** (Prov. 205/2021, art. 4º, § 1º). Não mencione cargos, empregos ou funções anteriores, salvo magistério (CED, art. 44, § 2º).
- **Foto (opcional):** coloque um retrato profissional sóbrio em `public/socios/` (WebP, até ~1200 px de largura, proporção 4:5) e informe `foto: "/socios/arquivo.webp"`. Sem foto, o site exibe um quadro neutro com as iniciais. A imagem é exibida com `next/image`.
- Quem for autor de artigo deve ter o `id` usado no campo `autor` de `src/content/artigos.ts`.

### Áreas de atuação

Cada item de `src/content/areas.ts` gera um card na página inicial e uma página em `/areas/<slug>` (o que é, quem pode ser afetado, documentos que costumam ser analisados, pontos de atenção e referências normativas). Use "atuação em", nunca "especialista/especializado" sem título comprovado, e não cite valores, prazos de ganho, percentuais de êxito, casos concretos ou decisões obtidas. Mantenha o `resumo` com cerca de 80 caracteres para caber em duas linhas no card.

### Publicar um artigo

1. Crie `src/content/artigos/<slug>.mdx` com o texto em Markdown (títulos com `##`, listas, tabelas e links funcionam).
2. Acrescente o item correspondente em `src/content/artigos.ts` (`slug`, `titulo`, `resumo`, `data` no formato `AAAA-MM-DD`, `autor`, `tema` e, opcionalmente, `area`).
3. Rode `npm run build`: o tempo de leitura é calculado automaticamente e o `lint:copy` verifica o texto.

Tom obrigatório: educativo e neutro, sem incitar ao litígio (CED, art. 41), sem casos concretos e sem chamada para contratação. Os artigos não exibem bloco de contato ao final — apenas o aviso de caráter informativo.

---

## Formulário de contato

Como o site é estático, o envio vai para um endpoint externo definido em `NEXT_PUBLIC_FORM_ENDPOINT` (ver `.env.example`).

- **Formspree:** crie um formulário em formspree.io, copie a URL (`https://formspree.io/f/xxxxxxxx`) e cadastre-a na variável. O campo-armadilha `_gotcha` e o assunto `_subject` já são enviados.
- **API própria:** qualquer serviço que aceite `POST` com `Content-Type: application/json` e responda com status 2xx. Corpo enviado:

  ```json
  {
    "nome": "...",
    "email": "...",
    "telefone": "...",
    "mensagem": "...",
    "consentimento_lgpd": "sim",
    "consentimento_data": "2026-11-06T12:00:00.000Z",
    "_subject": "Mensagem enviada pelo site"
  }
  ```

O formulário valida nome, e-mail, telefone (opcional, com DDD), mensagem (10 a 2.000 caracteres) e o consentimento LGPD; mostra estados de envio, sucesso ("Mensagem recebida. Retornaremos pelo contato informado.") e erro. Sem endpoint configurado, exibe aviso neutro orientando o uso do telefone ou do e-mail. Atualize a Política de Privacidade com o nome do serviço escolhido.

## Mapa

O mapa do Google Maps (iframe) só é carregado **depois que o visitante clica em "Carregar mapa"**, para não enviar dados ao Google sem autorização (LGPD) e manter o carregamento leve. Enquanto o endereço estiver pendente, o espaço mostra um aviso neutro.

## Analytics e cookies

Por padrão **não há analytics nem cookies de rastreamento**. Para ativar o Google Analytics 4, defina `NEXT_PUBLIC_GA_ID`: o site passa a exibir um aviso discreto (barra inferior, não modal) com **Recusar** e **Aceitar** de mesmo destaque; o script só é carregado após o aceite, e o link "Preferências de cookies" aparece no rodapé para rever a escolha.

---

## Publicação na Vercel

1. Importe o repositório na Vercel (framework detectado: **Next.js**). Comando de build: `npm run build` (padrão).
2. Cadastre as variáveis de ambiente desejadas (`NEXT_PUBLIC_FORM_ENDPOINT`, opcionalmente `NEXT_PUBLIC_SITE_URL` e `NEXT_PUBLIC_GA_ID`).
3. Configure o domínio definitivo (sugestão `.adv.br`) e atualize `url` em `src/content/site.ts`.

Também funciona em qualquer hospedagem estática: publique o conteúdo da pasta `out/`.

## SEO

- Metadata e Open Graph por página (`src/lib/metadados.ts`), imagem de compartilhamento gerada no build (`/og.png`), favicon e ícone Apple a partir do monograma.
- `sitemap.xml` e `robots.txt` gerados automaticamente.
- JSON-LD com `LegalService` e `Person` (sócios), `Article` nos artigos e `BreadcrumbList` nas páginas internas — **apenas dados factuais**: campos ainda entre colchetes são omitidos automaticamente; não há `aggregateRating` nem `review`.

## Acessibilidade e desempenho

- WCAG AA: contraste verificado, foco visível, navegação por teclado, link "Pular para o conteúdo", menu lateral em `<dialog>` nativo (foco preso, `Esc`, clique fora), acordeão com `aria-expanded`/`aria-controls`, formulário com rótulos, `aria-invalid` e mensagens anunciadas.
- Verificações feitas nesta entrega: axe-core sem violações (WCAG 2.2 AA + boas práticas) em todas as páginas, em 1280 e 360 px; Lighthouse (mobile) com Performance 99–100, Acessibilidade 100, Boas práticas 100 e SEO 100.
- Ajustes de cor para contraste (mesma paleta): texto secundário no fundo claro em `#5F646D` e detalhes em latão com função de texto/foco no fundo claro em `#7D6034`. O cinza `#8A8F98` e o latão `#B4935A` permanecem em linhas, detalhes e no fundo escuro. Tokens em `src/app/globals.css`.

## Estrutura

```
src/
  app/            páginas (início, /areas/[slug], /artigos, /artigos/[slug], política, termos, 404),
                  sitemap, robots, ícones e imagem de compartilhamento
  components/     cabeçalho, rodapé, seções da página inicial, formulário, acordeão, mapa etc.
  content/        TODO o conteúdo editável (textos, dados, artigos MDX)
  lib/            utilitários (formatação, metadados, JSON-LD, leitura de artigos)
scripts/          lint-copy.mjs, pendencias.mjs, serve-out.mjs
```

---

## Antes de publicar

1. Preencher todos os itens `[CONFIRMAR]` (lista abaixo) e rodar `npm run build && npm run pendencias:strict`.
2. Revisar com os sócios todos os textos — em especial a lista de áreas, a descrição do escritório e os artigos (Prov. 205/2021, art. 1º, §§ 1º e 2º: as informações devem ser objetivas, verdadeiras e comprováveis).
3. Revisar a Política de Privacidade com o encarregado (operadores contratados e prazo de retenção).

## Pendências [CONFIRMAR]

**Dados do escritório** (`src/content/site.ts`)
- [ ] Domínio definitivo (`url`) — sugerido `https://www.melorahmanbressan.adv.br`
- [ ] Ano de constituição da sociedade (`[ANO]`)
- [ ] Registro da sociedade na OAB: UF e número (`OAB/[UF] nº [X]`)
- [ ] CNPJ
- [ ] Endereço completo: logradouro, número, complemento, bairro, cidade, UF e CEP
- [ ] Telefone fixo (exibição e formato internacional para o link)
- [ ] WhatsApp (exibição e número com DDI e DDD)
- [ ] E-mail do domínio — sugerido `contato@melorahmanbressan.adv.br`
- [ ] Dias e horário de atendimento — sugerido "Segunda a sexta-feira, das 9h às 18h"
- [ ] URLs do LinkedIn e do Instagram do escritório (ou remover)
- [ ] Encarregado de dados (nome) e e-mail — sugerido `privacidade@melorahmanbressan.adv.br`

**Sócios** (`src/content/socios.ts`), para cada um dos três
- [ ] Nome completo
- [ ] Cargo (Sócio/Sócia)
- [ ] Inscrição na OAB (UF e número; incluir suplementares, se houver)
- [ ] Graduação (instituição) e títulos acadêmicos somente se concluídos e comprováveis
- [ ] URL do LinkedIn
- [ ] Foto profissional (opcional)

**Conteúdo**
- [ ] Lista de áreas de atuação: manter apenas as efetivamente exercidas (`src/content/areas.ts`)
- [ ] Descrição do escritório e "Como trabalhamos" conforme a prática real (`src/content/home.ts`)
- [ ] Faixa do hero: "Desde [ANO]", "Registro OAB/[UF] nº [X]", "Atendimento presencial em [CIDADE] e online"
- [ ] Atendimento por videoconferência e recebimento eletrônico de documentos (FAQ, `src/content/faq.ts`)
- [ ] Datas de publicação e revisão dos três artigos de exemplo (`src/content/artigos.ts`)

**Privacidade e termos** (`src/content/legal.ts`)
- [ ] Revisão integral da Política de Privacidade e dos Termos de Uso
- [ ] Serviço de recebimento do formulário (ex.: Formspree) e confirmação do provedor de hospedagem (Vercel Inc.)
- [ ] Prazo de retenção das mensagens sem contratação (`[PRAZO]`)
- [ ] Datas de aprovação das versões

**Configuração**
- [ ] `NEXT_PUBLIC_FORM_ENDPOINT` na Vercel
- [ ] (Opcional) `NEXT_PUBLIC_GA_ID`, se o escritório decidir usar medição de audiência
