

## Plano: Ilustração de braço lançando avião de papel — Seção "Impulsionamos seu crescimento com integridade"

### O que será feito
Adicionar uma ilustração line-art (traço branco fino sobre fundo marrom) de um braço/mão lançando um avião de papel no lado **esquerdo** da `SuppliersSection`, e reposicionar todo o conteúdo textual para a metade **direita**, mantendo o mesmo estilo visual da ilustração do polegar (`thumbs-up-line.png`) já presente em `CorporateSection`.

### Etapas

**1. Gerar a ilustração line-art**
- Criar um asset PNG (`paper-plane-line.png`) com a ilustração: braço ligeiramente flexionado vindo de baixo, mão aberta no gesto pós-lançamento, e um avião de papel origami saindo da mão inclinado para cima/direita, sugerindo movimento.
- Estilo: traço único contínuo, preto sobre fundo transparente (será invertido para branco via CSS `brightness-0 invert`, idêntico ao tratamento de `thumbs-up-line.png`).
- Peso de traço fino e proporção semelhante ao asset existente para garantir coerência visual.
- Salvar em `src/assets/paper-plane-line.png`.

**2. Atualizar `SuppliersSection.tsx`**
- Trocar o container interno de `max-w-4xl mx-auto` (centralizado) para um grid de 2 colunas em desktop:
  - Coluna esquerda: a nova ilustração, alinhada verticalmente ao centro, ocupando ~50% da largura (`w-[clamp(280px,40vw,520px)]`), com filtro `brightness-0 invert` para virar branco.
  - Coluna direita: todo o bloco de texto atual (headline, subtítulo, grid 2x2 de pilares, botão CTA).
- Mobile (`< md`): empilhar — ilustração ocultada ou reduzida no topo (seguindo o padrão de `CorporateSection` que usa `hidden md:block`), texto abaixo ocupando largura total.
- Animação de entrada da ilustração: `initial={{ opacity: 0, x: -100 }}` → `whileInView={{ opacity: 1, x: 0 }}`, espelhando a animação do thumbs-up (que entra da direita).

### Layout resultante (desktop)

```text
┌─────────────────────────┬─────────────────────────┐
│                         │ IMPULSIONAMOS SEU       │
│      ✋  →  ✈           │ CRESCIMENTO COM         │
│   (line art branco)     │ INTEGRIDADE.            │
│                         │                         │
│                         │ [subtítulo]             │
│                         │ ┌─────┐ ┌─────┐         │
│                         │ │ ico │ │ ico │         │
│                         │ └─────┘ └─────┘         │
│                         │ [Conheça nossos servi…] │
└─────────────────────────┴─────────────────────────┘
```

### Detalhes técnicos
- **Asset**: gerado via script (Python/PIL ou similar) ou usando IA de geração de imagem com prompt específico para line art single-stroke. Manter resolução ~1024×1024, fundo transparente.
- **Filtro CSS**: `brightness-0 invert` (mesmo tratamento já validado no `CorporateSection`).
- **Imports**: `import paperPlaneImg from "@/assets/paper-plane-line.png";`
- Nenhuma alteração em `index.css`, tokens ou outras seções.

### Arquivos afetados
- `src/assets/paper-plane-line.png` (novo)
- `src/components/SuppliersSection.tsx` (reorganização do layout + import da ilustração)

