/**
 * Central site configuration and verified company facts.
 *
 * IMPORTANT (accuracy): RV Capital – FZCO was incorporated in Dubai in 2023 and
 * has no transaction history of its own. All pre-2023 transaction experience
 * belongs to the founding team's prior tenure at Hefestos Capital and must
 * always be attributed as such. See `transactions.ts` and the copy on
 * /track-record for the exact attribution language.
 */

// TODO(client): confirm the exact production domain (www vs non-www) before launch.
// Apex domain is the Netlify primary (www 301-redirects to it), so canonicals,
// sitemap and structured data must all use the apex or Google refuses to index.
export const SITE_URL = 'https://rvcap.ae';

export const site = {
  name: 'RV Capital',
  legalName: 'RV Capital – FZCO',
  url: SITE_URL,
  // A concise, reusable tagline used across metadata and the header.
  tagline: 'Independent M&A and Corporate Finance Advisory',
  description:
    'RV Capital is an independent M&A and corporate finance advisory firm in Dubai, advising companies, shareholders, family offices and institutions across the UAE, the GCC and internationally.',

  // Verified company facts (do not invent additional facts).
  company: {
    legalName: 'RV Capital – FZCO',
    licenseNumber: '33865',
    legalStatus: 'Freezone Company',
    authority: 'Dubai Integrated Economic Zones Authority (IFZA) / DIEZ',
    licenseIssued: '16 August 2023',
    activities: [
      'Project Management Services',
      'Commercial Information Services',
      'Corporate and Institutional Management Services',
    ],
  },

  address: {
    line1: 'DSO-IFZA, IFZA Properties',
    line2: 'Dubai Silicon Oasis',
    city: 'Dubai',
    country: 'United Arab Emirates',
    // Structured for JSON-LD PostalAddress.
    addressLocality: 'Dubai',
    addressRegion: 'Dubai',
    addressCountry: 'AE',
    full: 'DSO-IFZA, IFZA Properties, Dubai Silicon Oasis, Dubai, United Arab Emirates',
  },

  contact: {
    email: 'info@rvcap.ae',
    phone: '+971 58 576 6207',
    phoneHref: '+971585766207',
  },

  // Google Maps embed centred on Dubai Silicon Oasis (no API key required).
  mapEmbedUrl:
    'https://www.google.com/maps?q=Dubai%20Silicon%20Oasis%2C%20Dubai%2C%20UAE&output=embed',
  mapLinkUrl: 'https://maps.google.com/?q=Dubai+Silicon+Oasis,+Dubai,+UAE',
} as const;

/**
 * Legal disclaimer shown in the footer.
 *
 * ⚠️ LEGAL REVIEW REQUIRED: This disclaimer must be reviewed and approved by
 * RV Capital's legal counsel before the site goes live. It is drafted to keep
 * all positioning within the scope of the entity's licensed activities
 * (project management, commercial information, corporate/institutional
 * management/consulting) and to avoid any implication of regulated banking,
 * brokerage or asset-management activity.
 */
export const legalDisclaimer =
  'RV Capital – FZCO (License No. 33865) is registered in the Dubai Silicon Oasis free zone under the Dubai Integrated Economic Zones Authority (IFZA) and provides corporate and financial advisory services. RV Capital is not a licensed bank or securities broker-dealer.';

export const heritageAttribution =
  'Transactions listed were executed by RV Capital’s founding team prior to establishing RV Capital, while at Hefestos Capital d.o.o., Belgrade.';

export type NavItem = { label: string; href: string };

export const primaryNav: NavItem[] = [
  { label: 'About', href: '/about/' },
  { label: 'Services', href: '/services/' },
  { label: 'Track Record', href: '/track-record/' },
  { label: 'Sectors', href: '/sectors/' },
  { label: 'Insights', href: '/insights/' },
  { label: 'Contact', href: '/contact/' },
];
