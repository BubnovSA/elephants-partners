# Elephants Partners — Marketing Website

Marketing website for **Elephants Partners** — payment infrastructure for international businesses entering India.

**Live:** https://elephants.partners

## Stack

- [Astro 4](https://astro.build) — static site generator
- TypeScript
- CSS custom properties — no Tailwind, no UI framework
- Two locales: English (`/`) · Hindi (`/hi/*`)

## Getting started

```bash
npm install
npm run dev        # http://localhost:4321
```

## Commands

| Command | Description |
|---|---|
| `npm run dev` | Start dev server |
| `npm run build` | Type-check + build to `dist/` |
| `npm run preview` | Preview production build |
| `npm run check` | TypeScript check only |
| `npm run lint:forbidden` | Scan for forbidden words before deploy |

## Project structure

```
src/
  components/      # Header, Footer, section components
  layouts/         # BaseLayout (head, SEO, JSON-LD)
  pages/           # Routes — EN + /hi/* Hindi locale
  i18n/            # All copy: en.ts, hi.ts
  styles/          # tokens.css, global.css
  utils/           # url.ts helper
public/
  assets/          # Images (WebP only)
  favicon.svg
  robots.txt
  site.webmanifest
```

## Adding content

All copy lives in `src/i18n/en.ts` and `src/i18n/hi.ts`. Adding a new key to `en.ts` requires adding the same key to `hi.ts` — TypeScript will error otherwise.

## Images

All images in `public/assets/` must be **WebP**. Before adding a new image, compress it with sharp at the appropriate display size (quality 82–85). Raw photos from camera or AI generator should never be committed directly.

## Deployment

Build and upload `dist/` to the production server:

```bash
npm run build   # output → dist/
```
