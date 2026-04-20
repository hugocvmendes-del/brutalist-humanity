

## Refinar animação da seção "A HUMANA SURGIU…"

Ajustar o `FounderSection` para imitar o comportamento de rose-island.co (trecho "the papers soon picked up on the story…"): a caixa de citação deve **emergir sobre o fundo da seção anterior**, expandir até **ocupar metade da janela** e parar de crescer, com texto mais largo (menos linhas), e o bloco de bio (foto + texto) deve **subir junto com o scroll** entrando por baixo.

### Comportamento alvo

**Parte 1 — Citação (sticky, 250vh de altura)**

- A `<section>` da Parte 1 fica com **fundo transparente** — a faixa que aparece atrás é a `humana-gradient` da página (mesmo fundo da seção anterior `ScrollWordReveal`). Nada de bloco bege cobrindo a tela.
- Container sticky `top:0; height:100vh` com a caixa da citação.
- Estado inicial (progress 0):
  - `max-width: 22vw`, `font-size: 1.1rem`
  - Posicionada no canto inferior-esquerdo (`align-items:flex-end; justify-content:flex-start; padding: 0 0 8vh 6vw`)
  - Texto sempre `text-align:left`, cor `#6B2D00`
- Estado final (progress 1):
  - `max-width: 50vw` (metade da janela — ponto de parada)
  - `font-size: clamp(2.2rem, 4vw, 3.4rem)` (menor que antes para caber em poucas linhas largas)
  - Posição vertical no centro (`align-items:center`), padding-bottom 0
- Crescimento congela em `progress >= 0.7` (caixa atinge tamanho final cedo e fica estável nos últimos 30% do scroll, dando tempo da Parte 2 começar a subir por baixo enquanto a citação ainda está sticky).
- Label `— HUGO VAZ MENDES · FUNDADOR` permanece abaixo da citação, alinhado à esquerda, cor `#C8853A`.

**Parte 2 — Bio (foto + texto) sobe junto com o scroll**

- Bloco com fundo `#F0E6D8` (cor de pele) que **entra deslizando de baixo para cima**, sobrepondo a caixa de citação no final.
- Implementação: a Parte 2 fica com `position: relative; margin-top: -100vh; z-index: 2` dentro do container de 250vh, e usa `transform: translateY(...)` controlado pelo mesmo scroll progress, indo de `translateY(100vh)` (fora da tela embaixo) até `translateY(0)` quando progress chega a 1.
- Resultado visual: a citação fica fixa no centro, e a "página" da bio sobe por cima dela como uma cortina, terminando a transição.
- Layout interno da bio (2 colunas: foto 3:4 placeholder à esquerda, texto à direita) permanece como já está.

### Detalhes técnicos

Arquivo único editado: `src/components/FounderSection.tsx`.

```text
[ScrollWordReveal — gradient]
        │
        ▼
┌──────────────────────────────┐  ← Parte 1: section transparente, 250vh
│  (gradient page background)   │
│                               │
│   ┌────────────┐              │  sticky top:0
│   │ A HUMANA…  │  → expande   │
│   └────────────┘   até 50vw   │
│                               │
│  ┌─────────────────────────┐  │  ← Parte 2 sobe com translateY
│  │  [FOTO]   bio text…     │  │     margin-top: -100vh
│  └─────────────────────────┘  │     z-index: 2
└──────────────────────────────┘
```

Cálculo de progress (mantém o atual baseado em `getBoundingClientRect` do container scrollável `#main-scroll`):

```ts
const scrollRange = el.offsetHeight - viewportH;
const traveled   = -rect.top;
const progress   = clamp(traveled / scrollRange, 0, 1);

// Citação — para de crescer em progress 0.7
const p = Math.min(progress / 0.7, 1);
const fontSizeRem = 1.1 + p * 2.3;     // 1.1 → 3.4rem
const maxWidthVw  = 22  + p * 28;      // 22vw → 50vw
const padBottomVh = 8   - p * 8;
const align       = p > 0.5 ? "center" : "flex-end";

// Bio — sobe nos últimos 40% do scroll
const bioP = Math.max(0, (progress - 0.6) / 0.4); // 0 → 1
const bioTranslateY = (1 - bioP) * 100;           // 100vh → 0
```

Estrutura JSX:

- `<section style={{ height:"250vh", position:"relative", backgroundColor:"transparent" }}>`
  - `<div sticky>` com a citação (sem fundo)
  - `<div bio>` com `position:relative; marginTop:"-100vh"; zIndex:2; transform:translateY(...)` e `backgroundColor:"#F0E6D8"`

Sem novas dependências, sem alterações em outros arquivos.

