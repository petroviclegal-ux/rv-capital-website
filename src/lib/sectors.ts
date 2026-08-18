/**
 * Sector coverage. Copy references general regional experience only — it does
 * NOT introduce any new specific deals. The only named transactions on the site
 * are the heritage transactions in `transactions.ts`, attributed to the
 * founding team's tenure at Hefestos Capital.
 */
export type Sector = {
  slug: string;
  title: string;
  body: string;
};

export const sectors: Sector[] = [
  {
    slug: 'banking-financial-services',
    title: 'Banking & Financial Services',
    body: 'We advise banks, financial institutions and their shareholders on acquisitions, disposals and consolidation. Our founding team’s experience in bank M&A across emerging European markets translates directly to a GCC banking landscape that continues to consolidate, where scale, capital and cross-border reach increasingly determine competitive position.',
  },
  {
    slug: 'energy-oil-gas',
    title: 'Energy & Oil / Gas',
    body: 'Energy remains central to the region’s economy. We advise on transactions and financing across upstream, midstream and downstream oil and gas, as well as the fast-growing energy-transition and utilities space — bringing experience in large, structurally complex deals where sovereign, strategic and financial interests intersect.',
  },
  {
    slug: 'consumer-retail',
    title: 'Consumer & Retail',
    body: 'From food and beverage to branded consumer goods and retail, we advise founders, family businesses and investors on sales, acquisitions and expansion capital. The UAE’s deep consumer market and role as a regional distribution hub make it fertile ground for consolidation and cross-border investment.',
  },
  {
    slug: 'pharmaceuticals-healthcare',
    title: 'Pharmaceuticals & Healthcare',
    body: 'Healthcare and pharmaceuticals are among the region’s highest-conviction growth sectors. We advise on M&A, partnerships and capital raising across pharmaceutical manufacturing, distribution, hospitals, clinics and healthcare services, drawing on our team’s history advising landmark pharmaceutical transactions.',
  },
  {
    slug: 'real-estate',
    title: 'Real Estate',
    body: 'Real estate is a defining pillar of the UAE economy. We advise developers, asset owners and investors on corporate-level transactions, joint ventures, platform acquisitions and structured financing — focusing on the ownership, capital and strategic dimensions of real estate rather than brokerage of individual assets.',
  },
  {
    slug: 'industrials-manufacturing',
    title: 'Industrials & Manufacturing',
    body: 'We advise industrial and manufacturing businesses on acquisitions, divestitures, restructuring and growth financing. Our experience spans automotive, building materials and diversified manufacturing, including complex reorganisations of large industrial groups.',
  },
  {
    slug: 'telecom',
    title: 'Telecom',
    body: 'Telecommunications combines heavy capital intensity with rapid change. We advise operators, infrastructure owners and investors on consolidation, network and tower transactions, and financing — informed by our founding team’s role in one of South-East Europe’s largest telecom transactions.',
  },
  {
    slug: 'aviation-logistics',
    title: 'Aviation & Logistics',
    body: 'As a global aviation and trade hub, the UAE sits at the centre of the aviation and logistics economy. We advise on transactions and financing across airlines, airport and aviation services, freight, and logistics platforms, where the region’s connectivity creates continual opportunity for consolidation and investment.',
  },
];
