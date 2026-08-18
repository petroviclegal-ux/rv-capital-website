# RV Capital – FZCO — Marketing Website

A production-ready, statically generated marketing website for **RV Capital – FZCO**, an independent M&A and corporate finance advisory firm based in Dubai Silicon Oasis, serving the UAE, GCC and international markets.

Built with **Next.js (App Router) + TypeScript + Tailwind CSS**, output as a fully static site (SSG) for maximum SEO and performance. No external CMS — editorial content lives in Markdown files in this repo.

---

## Quick start

You need **Node.js 18.17+** (or 20+) installed.

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server (http://localhost:3000)
npm run dev

# 3. Build the static site → outputs to ./out
npm run build
```

`npm run build` produces a static export in the **`out/`** folder. Upload that folder to any static host (S3 + CloudFront, Netlify, Nginx, GitHub Pages, IFZA hosting, etc.), or deploy the repo to **Vercel** (which builds it automatically).

> **Note:** fonts are fetched from Google Fonts at build time by `next/font`, so the first build needs internet access. After that the fonts are self-hosted in the output — no runtime dependency on Google.

---

## Project structure

```
content/insights/         Markdown articles (the editable content layer)
public/                   Static assets: favicon, app icon, OG image, manifest
src/
  app/                    Routes (App Router)
    page.tsx              Home (/)
    about/                About Us (/about)
    services/             Services (/services) with per-service anchors
    track-record/         Track Record (/track-record)
    sectors/              Sectors (/sectors)
    insights/             Insights hub (/insights) + [slug] article pages
    contact/              Contact (/contact)
    sitemap.ts            Auto-generated /sitemap.xml
    robots.ts             Auto-generated /robots.txt
    layout.tsx            Root layout, fonts, global SEO + JSON-LD
    globals.css           Tailwind + article prose styles
  components/             Header, Footer, Logo, forms, UI primitives, decor
  lib/                    Site config, services, sectors, transactions,
                          FAQs, SEO helpers, structured-data, content loader
```

## Editing content

- **Insights articles** — add or edit Markdown files in `content/insights/`. Each file has YAML frontmatter (`title`, `description`, `date`, `readingTime`, `keywords`). Drop in a new `.md` file and it automatically appears in the Insights index, sitemap and related-articles blocks. No code changes needed.
- **Services / Sectors / Track record / FAQs** — edit the typed data in `src/lib/services.ts`, `src/lib/sectors.ts`, `src/lib/transactions.ts`, `src/lib/faqs.ts`.
- **Company facts, contact details, disclaimer** — all centralised in `src/lib/site.ts`.

---

## ⚠️ Before you launch — required client actions

Search the codebase for `TODO(client)` to find each of these in context.

1. **Real contact details** — replace the placeholder email and phone in `src/lib/site.ts` (`contact.email`, `contact.phone`, `contact.phoneHref`).
2. **LinkedIn (and other) profile URLs** — update `social.linkedin` in `src/lib/site.ts`. This also feeds the `sameAs` field in the Organization structured data.
3. **Production domain** — set `SITE_URL` in `src/lib/site.ts` to the real domain (currently `https://www.rvcapital.ae`). This drives canonical URLs, the sitemap, robots and Open Graph tags.
4. **Legal review of the disclaimer** — the footer disclaimer (`legalDisclaimer` in `src/lib/site.ts`) and the "not a licensed bank / broker-dealer" language **must be reviewed and approved by RV Capital's legal counsel** before launch. It is drafted to keep all positioning within the entity's licensed activities (project management, commercial information, corporate/institutional management/consulting) and to avoid any implication of regulated banking, brokerage or asset-management activity — please confirm it meets counsel's requirements.
5. **Contact form delivery** — the form currently uses a **mailto fallback** (opens the visitor's email client pre-filled), which works on any static host with no backend. To capture submissions server-side, either deploy on Vercel without `output: 'export'` and add an API route, or wire the form to a form service (Formspree, Web3Forms, etc.). See `src/components/ContactForm.tsx`.
6. **Open Graph image (recommended)** — the social share image is `public/og/og-default.svg`. Most platforms render SVG, but for maximum compatibility (some social crawlers prefer raster), export a **1200×630 PNG/JPG** version and point `DEFAULT_OG` in `src/lib/seo.ts` at it.
7. **Google Business Profile & Search Console** — set up a Google Business Profile for the Dubai office and verify the site in Google Search Console, then submit the sitemap (`/sitemap.xml`).

---

## Accuracy & compliance guardrails (please preserve these)

This site was built to a strict factual brief. When editing, keep the following intact:

- **Heritage attribution.** RV Capital – FZCO was incorporated in Dubai in 2023 and has **no transaction history of its own**. Every named transaction (see `src/lib/transactions.ts` and `/track-record`) belongs to the **founding team's prior tenure at Hefestos Capital** and is attributed as such. Never present these as deals executed by RV Capital the company.
- **No regulated-activity claims.** Copy uses advisory/consulting language only. Avoid terms like "licensed investment bank", "asset manager" or "we manage client portfolios under license".
- **No individuals.** There are deliberately no team member names, headshots or bios anywhere — only an aggregate description of the founding team's background.
- **No fabricated clients.** No invented client names, logos or testimonials appear anywhere.

---

## SEO — what's implemented, and an honest note

**Implemented on every page:** unique `<title>` and meta description, a single `<h1>`, logical heading hierarchy, canonical URLs, Open Graph + Twitter cards, descriptive alt text on imagery, internal linking across Services ↔ Sectors ↔ Insights ↔ Track Record, lazy-loaded below-the-fold assets, `font-display: swap`, and no render-blocking scripts. Auto-generated `sitemap.xml` and `robots.txt`. JSON-LD structured data: **Organization**, **ProfessionalService/FinancialService** (site-wide), **BreadcrumbList** (inner pages), **FAQPage** (home), and **Article** (insights).

**Honest note on rankings:** strong on-page SEO is necessary but **not sufficient** to rank #1 for competitive terms like "M&A advisory UAE". Rankings also depend on domain age and authority, backlinks, a Google Business Profile, an active LinkedIn presence, and a steady cadence of quality content published over time. This website gives you an excellent technical and content foundation, but first-page rankings for competitive keywords are earned over months through off-site authority and ongoing publishing — not guaranteed by the site alone.

---

## Design

- **Palette:** deep ink/charcoal (`#0B0F14`/`#10151C`), off-white (`#F7F5F0`), single muted brass accent (`#B08D57`). Defined in `tailwind.config.ts`.
- **Type:** Playfair Display (serif headlines) + Inter (sans body/UI).
- **Logo:** inline SVG wordmark + an abstract ascending-chevron monogram merging the R/V motif (`src/components/Logo.tsx`, `MonogramMark.tsx`). Favicon/app icon generated from the monogram (`public/favicon.svg`, `public/icon.svg`).
- **Imagery:** no stock photography — abstract line art and a stylised Dubai skyline silhouette (`src/components/Decor.tsx`).

## Accessibility

Semantic HTML5, WCAG AA contrast, visible focus states, a skip link, `aria-current` navigation, keyboard-operable menu and FAQ, and reduced-motion support for the scroll animations.

---

© RV Capital – FZCO. Code scaffold generated for the client; content per the approved factual brief.
