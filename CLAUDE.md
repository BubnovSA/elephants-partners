# Elephants Partners — Landing India

Marketing landing page for **Elephants Partners** — payment infrastructure company for international businesses entering India (UPI processing, settlement, multi-bank infrastructure).

**Production URL:** https://elephants.partners  
**Stack:** Astro 4 · TypeScript · Static SSG · CSS custom properties (no Tailwind)

---

## Commands

```bash
npm run dev          # dev server (localhost:4321)
npm run build        # astro check + build → dist/
npm run preview      # preview dist/
npm run check        # TypeScript check only
npm run lint:forbidden  # scan for forbidden words (must pass before deploy)
```

## Project structure

```
src/
  components/
    Header.astro          # nav + lang switcher + dark/light toggle
    Footer.astro
    sections/             # one file per homepage section
      Hero.astro          # proof bar with team avatars
      Services.astro
      MarketStats.astro
      WhyIndia.astro
      HowItWorks.astro
      FromGround.astro    # team photo + milestones
      UseCases.astro
      Testimonials.astro  # carousel with review avatars
      CtaBlock.astro
  layouts/
    BaseLayout.astro      # <head>, hreflang, OG, JSON-LD, theme script
  pages/
    index.astro           # EN homepage
    about.astro
    contact.astro
    careers/index.astro
    privacy.astro
    terms.astro
    hi/                   # Hindi locale — mirrors EN pages
    og/default.svg.ts     # OG image generator (SVG)
    sitemap.xml.ts        # manual sitemap with hreflang pairs
  i18n/
    en.ts                 # all EN copy + type source (Translations type)
    hi.ts                 # all HI copy
    index.ts              # currentLang(), switchLangUrl() helpers
  styles/
    tokens.css            # CSS custom properties (light + dark theme)
    global.css            # reset, layout, buttons, .card
  utils/
    url.ts                # BASE_URL helper for asset paths
public/
  assets/                 # all images in WebP (optimized)
  favicon.svg
  robots.txt
  site.webmanifest
  sitemap.xml             # generated at build
```

## i18n

Two locales: **English** (`/`) and **Hindi** (`/hi/*`).

- All copy lives in `src/i18n/en.ts` and `src/i18n/hi.ts`
- `Translations` type is derived from `en.ts` — adding a key there requires adding it to `hi.ts`
- Language is detected from URL pathname: `/hi/...` → Hindi
- `hreflang` links are in `<head>` of every page (via `BaseLayout`) and in `sitemap.xml`
- `og:locale` is set dynamically: `hi_IN` for Hindi pages, `en_US` for English

## Images

All images live in `public/assets/` as **WebP** — never PNG/JPEG for new images.

| File pattern | Usage | Display size |
|---|---|---|
| `proof_1/2/3.webp` | Hero proof bar team avatars | 32×32 px |
| `review_1/3–9/11/12.webp` | Testimonials carousel | 120 px mobile / 320×400 px desktop |
| `talk.webp` | FromGround section photo | ~600 px |
| `think_together.webp` | HowItWorks illustration | ~800 px |
| `success.webp` | CtaBlock illustration | ~500 px |
| `main_logo.jpeg` | Header + Footer logo | ~40 px |

**When adding images:** run through `sharp` at the right display size, convert to WebP, quality 82–85. Never commit raw photos from camera/AI generator directly.

## Themes

Dark/light toggle stored in `localStorage` under key `ep-theme`. Anti-FOUC inline script in `BaseLayout` sets `[data-theme]` on `<html>` before render.

- Light tokens: `src/styles/tokens.css` (`:root`)
- Dark tokens: `src/styles/tokens.css` (`[data-theme="dark"]`)
- When writing component CSS always add `[data-theme="dark"]` overrides for any hardcoded colors.
- `.card` class uses hardcoded light gradient — already has dark override in `global.css`.

## SEO

- `BaseLayout` handles: canonical, hreflang (en/hi/x-default), robots meta, OG, Twitter Card, JSON-LD (Organization + WebSite)
- `privacy.astro` and `terms.astro` are **indexed** (`noindex={false}`) — do not change
- `robots.txt` must NOT block `/_astro/` — Googlebot needs CSS/JS to render
- `sitemap.xml.ts` generates hreflang pairs manually — update when adding pages
- No fake `lastmod` in sitemap — it was removed intentionally

## Compliance — CRITICAL

Run `npm run lint:forbidden` before every deploy. The script scans all source files for words associated with gambling, crypto, and suspicious payment terminology. **Any match = blocked deploy.**

These words must never appear in copy, alt text, JSON-LD, or metadata:
gambling, igaming, casino, betting, crypto exchange, USDT, p2p payments, money transfer, account rental, and Russian equivalents.

## Deployment

`npm run build` → upload `dist/` to the production server. Target host: `elephants.partners`, `base: '/'`.

## Key decisions

- **No UI framework** — plain Astro components, CSS custom properties only
- **No Tailwind** — all styles scoped in `<style>` blocks or `global.css`
- **Static output** — no server-side rendering, no API routes except OG SVG and sitemap
- **Google Fonts** (Plus Jakarta Sans) loaded from CDN — consider self-hosting for production perf
- **OG image is SVG** — Twitter/LinkedIn may not render it; a PNG at `public/og/default.png` is the proper fix
