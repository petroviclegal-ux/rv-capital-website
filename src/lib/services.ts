/**
 * Service definitions. Each service has a stable `slug` used as an anchor id on
 * the /services page and for internal linking from Sectors, Insights and Home.
 */
export type Service = {
  slug: string;
  title: string;
  // One-line description used in the home strip and service card sub-heading.
  summary: string;
  // Full copy (100–200 words) rendered on the /services page.
  body: string[];
  // Short label pairs highlighting scope of work.
  scope: string[];
};

export const services: Service[] = [
  {
    slug: 'ma-advisory',
    title: 'M&A Advisory',
    summary:
      'Buy-side and sell-side representation from strategy through to closing.',
    body: [
      'We advise companies, shareholders and investors on the full lifecycle of a merger or acquisition — on both the buy-side and the sell-side. Engagements begin with a clear read of your objectives and a disciplined assessment of value, then move through target or buyer identification, approach and positioning, valuation and structuring, negotiation, and execution to close.',
      'Our approach is senior-led and hands-on. The people who scope your transaction are the people who run it — preparing information materials, managing outreach to a curated set of counterparties, coordinating due diligence, and negotiating terms that protect your interests. We work across borders, bringing UAE and GCC counterparties together with international acquirers and capital, and we manage each process with the discretion that sensitive ownership decisions demand.',
    ],
    scope: [
      'Sell-side & buy-side representation',
      'Target / buyer identification',
      'Valuation & deal structuring',
      'Negotiation & closing',
    ],
  },
  {
    slug: 'business-sale-acquisition',
    title: 'Business Sale & Acquisition Advisory',
    summary:
      'For owners selling a company and investors acquiring one in the UAE and GCC.',
    body: [
      'For business owners in the UAE and wider GCC who are considering a sale, we provide end-to-end guidance: preparing the company for market, establishing a defensible valuation, identifying and qualifying the right acquirers, and running a competitive, confidential process that maximises value and certainty of completion. Selling a business is often a once-in-a-lifetime decision, and we manage it with the care that deserves.',
      'For investors and strategic acquirers, we help you find, evaluate and acquire the right business — sourcing opportunities, assessing commercial and financial fundamentals, structuring the offer, and negotiating terms. Whether you are an entrepreneur exiting a company you built or a group expanding through acquisition, we bring institutional rigour to a market where much of the deal flow is private and relationship-driven.',
    ],
    scope: [
      'Company sale preparation',
      'Acquirer / opportunity sourcing',
      'Confidential competitive process',
      'Offer structuring & negotiation',
    ],
  },
  {
    slug: 'corporate-restructuring',
    title: 'Corporate Restructuring',
    summary:
      'Operational and financial restructuring, reorganisation and stakeholder negotiation.',
    body: [
      'When a business faces financial stress, an over-leveraged balance sheet, or the need to reorganise, we advise on operational and financial restructuring plans that restore stability and preserve value. We work alongside management and shareholders to diagnose the underlying drivers, model realistic scenarios, and design a plan that stakeholders can support.',
      'Our restructuring work spans balance-sheet reorganisation, debt rescheduling and negotiation with lenders and creditors, carve-outs and divestitures of non-core assets, and the operational changes needed to return a business to a sustainable footing. Restructuring situations are sensitive and time-critical; we bring a calm, structured process and the credibility to negotiate constructively with all parties around the table.',
    ],
    scope: [
      'Financial & operational restructuring',
      'Reorganisation plans',
      'Creditor & stakeholder negotiation',
      'Carve-outs & divestitures',
    ],
  },
  {
    slug: 'corporate-finance-capital-raising',
    title: 'Corporate Finance & Capital Raising',
    summary:
      'Project, structured and growth financing across equity and debt.',
    body: [
      'We help companies raise the capital they need to grow, invest or refinance — across equity, debt and structured instruments. Engagements begin with the right capital structure for your objectives and risk profile, then move to preparing the business for investors or lenders, identifying the appropriate sources of capital, and running a process that secures competitive terms.',
      'Our corporate finance work includes support with project financing and structured financing, growth-equity and debt raising, and refinancing of existing facilities. We introduce our clients to a network of regional and international investors, family offices, banks and alternative lenders, and we manage the process — from information materials through to negotiation and completion — so that management can stay focused on running the business.',
    ],
    scope: [
      'Equity & debt raising',
      'Project & structured financing',
      'Refinancing support',
      'Investor & lender introductions',
    ],
  },
  {
    slug: 'investment-portfolio-advisory',
    title: 'Investment & Portfolio Advisory',
    summary:
      'Opportunity analysis and portfolio structuring guidance for investors.',
    body: [
      'We advise family offices, private investors and institutions on evaluating investment opportunities and structuring their exposure. Our role is analytical and independent: we assess the commercial merits, risks and value of a given opportunity, and provide the objective, rigorously researched perspective that sound capital-allocation decisions require.',
      'On the portfolio side, we provide guidance on how to structure and diversify holdings in line with an investor’s objectives, time horizon and risk tolerance — including how prospective acquisitions or investments fit within an existing portfolio. We do not hold client assets or exercise discretionary management; we provide advisory analysis and structuring guidance that our clients act on themselves.',
    ],
    scope: [
      'Investment opportunity analysis',
      'Portfolio structuring guidance',
      'Independent commercial assessment',
      'Risk & value evaluation',
    ],
  },
  {
    slug: 'market-research-due-diligence',
    title: 'Market Research & Due Diligence',
    summary:
      'Sector analysis, regulatory landscape and commercial due diligence.',
    body: [
      'Good decisions rest on good information. We provide sector and industry analysis, market sizing and competitive mapping, and reviews of the regulatory landscape relevant to a transaction or investment in the UAE and the region. This work stands on its own for clients weighing a strategic move, and it underpins the transactions we advise on.',
      'Our commercial due diligence tests the assumptions behind a deal — market demand, competitive position, customer concentration, growth drivers and key risks — so that buyers and investors understand exactly what they are acquiring. We deliver clear, evidence-based findings that inform valuation, negotiation and post-completion planning, helping our clients proceed with confidence or walk away with conviction.',
    ],
    scope: [
      'Sector & industry analysis',
      'Regulatory landscape review',
      'Commercial due diligence',
      'Market sizing & mapping',
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
