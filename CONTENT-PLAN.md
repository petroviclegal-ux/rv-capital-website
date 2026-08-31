# RV Capital — Search-Driven Content Plan

Goal: rank for what business owners (and their staff) actually type when they need
the services RV Capital sells. This plan is based on live Google/Bing autocomplete
research (Aug 2026), not on service-name keywords. Key finding: **owners search in
problem language, first person** ("i want to sell my business in dubai", "how much
is my business worth", "someone wants to buy my business"); jargon like "M&A
advisory" is typed mostly by professionals. Head terms are covered by the homepage
and service pages; articles win the long tail and feed authority to the money pages.

Works together with `SEO-ACTION-PLAN.md` (off-site: GBP, Search Console, citations,
backlinks). Articles alone will not rank the head terms — do both tracks.

## How to use this plan

Publish top-to-bottom, 1–2 articles per month (drop a Markdown file in
`content/insights/` — see README). Every article must:

- Use the **exact query phrasing** in the H1/title where natural, and in at least
  one H2 phrased as the question people type.
- End with a short **FAQ section** (3–5 questions in the exact words of related
  autocomplete queries) — this targets People-Also-Ask and voice search.
- Link to the relevant **service page** and 3+ related articles; add a link *from*
  at least two existing articles to the new one (edit them in the same commit).
- Keep description ≤155 chars, include the primary query near the front.

## Priority backlog (ordered by volume × intent × winnability)

### 1. `how-much-is-my-business-worth-uae` — the valuation magnet ✅ published Aug 2026
- **Target queries (confirmed autocomplete):** "how much is my business worth",
  "how much is my business worth calculator", "business valuation calculator",
  "how much is my company worth", "business valuation services uae"
- **Angle:** owner's plain-language guide with an honest "calculator" substitute —
  a table of typical EBITDA/revenue multiples by sector in the UAE with worked
  examples, and why calculators mislead. Highest-volume query cluster in the space;
  the existing `business-valuation-methods-uae` is method jargon — this one is the
  first-person version. Cross-link the two (they target different queries; do NOT
  merge).
- **FAQ seeds:** "How much is my business worth to sell?", "Is there a business
  valuation calculator for the UAE?", "What multiple do businesses sell for in Dubai?"

### 2. `someone-wants-to-buy-my-business` — the unsolicited-offer guide
- **Target queries (confirmed):** "someone wants to buy my business", "who wants
  to buy my business", "someone wants to buy into my business"
- **Angle:** you received an approach — what it means, why an uncontested offer is
  usually a low offer, how to respond without killing the deal, when to run a
  process. Extremely high commercial intent, almost zero UAE-specific competition.
  Natural funnel into sell-side advisory. Link hard to `signs-right-time-to-sell`,
  `how-to-sell-a-company-in-dubai-uae`, valuation articles.

### 3. `partner-buyout-uae`
- **Target queries (confirmed):** "partner buyout", "partner buyout agreement",
  "how to buy out my business partner", "partner buyout loan", "partner buyout
  calculator"
- **Angle:** valuing the stake, agreeing terms, funding the buyout (bank, seller
  financing, company cash), UAE transfer mechanics. Complements
  `selling-or-buying-shares-in-a-uae-company` (already ranking #7 for "selling
  shares in a UAE company" — link from it) and `management-buyout-mbo-uae`.

### 4. `debt-restructuring-uae` — restructuring in the language owners use
- **Target queries (confirmed):** "debt restructuring dubai", plus problem phrases:
  "can't pay business loan uae", "company in financial trouble what to do"
- **Angle:** options when cash is tight — bank negotiation, rescheduling,
  refinancing, raising equity, selling non-core assets, when formal restructuring
  helps. NOTE: generic "company restructuring" queries are employees searching
  about layoffs — do not target those. The existing `corporate-restructuring-uae`
  targets advisors' language; this one targets the owner under pressure. Cross-link.

### 5. `find-an-investor-for-your-business-uae`
- **Target queries (confirmed):** "find an investor for my business", "looking for
  an investor for my business", "how to raise capital for a small business"
- **Angle:** the realistic map — banks vs. private investors vs. family offices vs.
  strategic partners in the UAE; what investors expect (numbers, governance, stake);
  how an advisor runs a capital raise. Feeds `corporate-finance-capital-raising`
  service page. Link to `debt-vs-equity-financing-uae`.

### 6. `buying-a-business-in-dubai-guide` — catch the listing searchers
- **Target queries (confirmed):** "buy a business in dubai", "businesses for sale
  in dubai", "business for sale in dubai uae", "small business for sale in dubai"
- **Angle:** these searchers want listings; the winnable angle is the step after —
  how to evaluate what's listed, what listings hide, why the best businesses are
  never listed (buy-side search), licence/visa transfer basics. Funnel into
  buy-side advisory and `buying-a-business-uae-due-diligence-checklist`.

### 7. `sell-my-business-fast-uae` — the urgency searcher
- **Target queries (confirmed):** "sell my business fast", "sell my company
  quickly", "sell my company with debts"
- **Angle:** honest guide to speed vs. price trade-off; what "fast" realistically
  means in the UAE; selling a company with debt (very underserved query). Links to
  `prepare-company-for-sale-timeline` and `cost-to-sell-a-business-uae`.

## Strengthen what exists (same commits, low effort)

- Add exact-phrase FAQ sections to: `how-to-sell-a-company-in-dubai-uae` ("I want
  to sell my business in Dubai — where do I start?"), `business-valuation-methods-uae`,
  `ma-advisor-vs-business-broker` ("business broker dubai" searchers land here —
  add an H2 "Looking for a business broker in Dubai?").
- Homepage + service pages: add one owner-language sentence per section (e.g.
  Business Sale service: "If you have been thinking 'I want to sell my business',
  this is the conversation to have first.") — keeps brand tone, adds phrase match.
- FAQPage structured data: extend `src/lib/structured-data.ts` + the article
  template to emit JSON-LD for article FAQ sections (one-off dev task; boosts
  People-Also-Ask eligibility for every article at once).

## Off-site multipliers (from SEO-ACTION-PLAN.md — the ranking ceiling)

Without these, articles rank for long tail only; with them, the domain can climb
head terms: **Google Business Profile** (biggest lever for "…dubai" searches),
**Search Console** (submit sitemap; then steer this plan by real query data),
UAE directory citations, company LinkedIn reposting each article, digital PR in
Gulf business media.

## Measurement loop (monthly)

1. Search Console → queries with impressions, positions 5–20.
2. Article at position 5–15 → refresh it (expand FAQ, add internal links) before
   writing anything new.
3. Track leads: which article/page the contact enquiry mentions.

## Language note

A meaningful share of UAE searches is in Arabic (بيع شركة في دبي and similar).
The site is EN-only; an Arabic version is a separate strategic decision — revisit
once EN long tail is performing.
