# PRONE — Site institucional

Site institucional da **PRONE Associação Mutualista** (proteção veicular).
Next.js 16 (App Router) · Tailwind v4 · framer-motion · lenis.

## Rodar

```bash
npm run dev     # desenvolvimento (http://localhost:3000)
npm run build   # build de produção
npm start       # servir build
```

## ⚠️ Antes de publicar — preencher dados reais

Tudo centralizado em **`data/site.ts`**. Troque os PLACEHOLDER:

- `whatsapp` / `whatsappLabel` — número do WhatsApp (formato `55DDDNUMERO`)
- `phone` — telefone / 0800
- `email`, `address`, `cnpj`, `instagram`, `url`
- Números da faixa de destaque (`stats`), depoimentos e coberturas — ajustar aos dados oficiais.
- Links das lojas (App Store / Google Play) em `components/AppSection.tsx` (hoje `#`).

## Identidade / marca

- Cores no tema Tailwind (`app/globals.css`): laranja `#E94E1B`, vermelho `#BE1622`, cinza `#575756`.
- Logos em `public/brand/` (extraídas dos PDFs oficiais, em SVG vetorial):
  - `logo-full.svg` (wordmark cinza, fundo claro)
  - `logo-white.svg` (wordmark branco, fundo escuro)
  - `symbol.svg` (só o escudo)
  - `og.png` (imagem de compartilhamento)
- Favicon/ícones: `app/icon.png`, `app/apple-icon.png`.

## Estrutura

- `app/` — layout, página, metadata/SEO (JSON-LD Organization + FAQ).
- `components/` — seções (Hero, Stats, Diferenciais, Coberturas, Segmentos, ComoFunciona, AppSection, Depoimentos, Faq, CtaFinal, Footer) e UI (`components/ui`).
- `data/site.ts` — todo o conteúdo do site.
