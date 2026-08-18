# RV Capital — SEO Action Plan (beyond the website)

The website ships with strong **on-page SEO** already built in (unique titles/meta,
one H1 per page, canonical URLs, sitemap.xml, robots.txt, Open Graph, JSON-LD
structured data, fast static pages, internal linking, and now **12 in-depth
articles**). That is the necessary foundation — but on-page SEO alone does **not**
rank a new domain for competitive terms like *"M&A advisory Dubai"*. Rankings for
those come from the off-site and ongoing work below.

Work top-to-bottom: items are ordered roughly by impact for a new UAE advisory firm.

---

## 1. Launch-day technical checklist (once the site is live)

- [ ] Confirm the production domain and set `SITE_URL` in `src/lib/site.ts` (currently `https://www.rvcap.ae`; decide **www vs non-www** and redirect one to the other).
- [ ] Point the domain at the host and enable **HTTPS** (Vercel/most hosts do this automatically).
- [ ] Create a **Google Search Console** property, verify the domain, and submit `https://<domain>/sitemap.xml`.
- [ ] Create a **Bing Webmaster Tools** property and submit the sitemap (Bing also powers other engines).
- [ ] Request indexing of the homepage and key pages in Search Console.
- [ ] Replace the OG image with a **1200×630 PNG/JPG** for maximum social-preview compatibility (see README).

## 2. Google Business Profile — highest local impact

For searches that include *"Dubai"*, *"UAE"*, or *"near me"*, the **Google Business
Profile (GBP)** is often the single biggest ranking factor — and it powers the map
pack and the knowledge panel.

- [ ] Create/claim the GBP at [business.google.com](https://business.google.com).
- [ ] Use the exact legal name, the Dubai Silicon Oasis address, the real phone (`+971 58 576 6207`) and the website URL — keep these **identical** to the site (NAP consistency: Name, Address, Phone).
- [ ] Category: *Business management consultant* / *Financial consultant* / *Corporate office* (pick the closest permitted).
- [ ] Complete the description, hours, and add a few professional photos (the office, the Dubai skyline brand imagery).
- [ ] Verify the listing (postcard/phone/email as Google offers).

## 3. Consistent business listings (citations)

Search engines trust a business that appears consistently across reputable
directories. Create/claim listings with **identical NAP**:

- [ ] UAE / Dubai business directories (e.g. Dubai Chamber directory, Yellow Pages UAE, Connect.ae, local free-zone directories).
- [ ] Global professional directories relevant to advisory/finance.
- [ ] Keep name, address and phone byte-for-byte identical everywhere.

## 4. LinkedIn & professional presence

The brief deliberately keeps individuals off the website, but an **active company
presence** off-site builds authority and referral traffic:

- [ ] Company LinkedIn page (link it back to the site; post the Insights articles).
- [ ] Share each new article on LinkedIn; encourage the team to repost.
- [ ] Consider a Crunchbase / industry-association profile.

## 5. Ongoing content — the compounding engine

You now have 12 articles. The goal is a **steady cadence**, not a one-off burst.
Fresh, useful content targeting real questions builds topical authority over months.

- [ ] Publish **1–2 new articles per month**. Adding an article is just dropping a Markdown file in `content/insights/` (see README) — no code changes.
- [ ] Each article should target a specific keyword/question and link internally to relevant Services, Sectors and other articles.
- [ ] Refresh older articles periodically (dates, facts) to keep them current.

**Keyword/topic backlog (high commercial intent):**
- "Best M&A advisor in Dubai — how to choose" 
- "Selling a family business in the GCC"
- "Management buyout (MBO) in the UAE: how it works"
- "How to value a startup vs. an established business"
- "Cross-border M&A into the UAE: a guide for foreign acquirers"
- "Debt vs. equity financing for UAE companies"
- "Confidentiality in a business sale: how NDAs protect you"
- "Signs it's the right time to sell your business"
- Sector deep-dives: healthcare M&A, real estate platform deals, energy-transition financing in the GCC.

## 6. Backlinks & authority (the hardest, highest-value)

Links from reputable, relevant sites are the strongest off-site signal. Earn them,
don't buy them (paid link schemes risk penalties).

- [ ] **Digital PR:** commentary/quotes in UAE business media (Gulf News, Khaleej Times, Arabian Business, Zawya) on M&A and regional deal trends.
- [ ] **Guest articles / thought leadership** on finance and business portals, linking back to relevant Insights pages.
- [ ] **Partnerships:** law firms, accountancies, family-office networks and chambers — mutual referrals and links.
- [ ] **Original data / reports:** a short annual "UAE / GCC M&A outlook" is highly linkable and reinforces authority.

## 7. Measure and iterate

- [ ] In **Search Console**, track impressions, clicks, average position and which queries you appear for. Double down on the pages/queries gaining traction.
- [ ] Add privacy-friendly analytics (e.g. Plausible, Fathom, or GA4) to see traffic and which articles convert to contact enquiries.
- [ ] Review quarterly: which articles rank, which keywords are close to page 1 (positions 5–15) and deserve a stronger/updated article.

---

## Honest expectation-setting

Ranking #1 for competitive head terms (*"M&A advisory UAE"*) is earned over
**months**, through the combination above — especially the Google Business Profile,
backlinks/PR, and a steady content cadence — plus the natural ageing of the domain.
The website gives you an excellent technical and content foundation; the items above
are what convert that foundation into rankings and enquiries over time. Be wary of
any agency promising guaranteed first-page rankings quickly — that is not how it works.
