import { site } from './site';
import { absoluteUrl } from './seo';
import type { Faq } from './faqs';

/**
 * Central builders for JSON-LD structured data. Keeping these in one place makes
 * it easy to keep names, address and licence details consistent with the
 * verified company facts.
 *
 * Note: descriptions use advisory/consulting language only and avoid any
 * regulated banking / brokerage / asset-management terms.
 */

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${site.url}/#organization`,
    name: site.legalName,
    alternateName: site.name,
    url: site.url,
    logo: absoluteUrl('/icon.svg'),
    image: absoluteUrl('/og/og-default.svg'),
    description: site.description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${site.address.line1}, ${site.address.line2}`,
      addressLocality: site.address.addressLocality,
      addressRegion: site.address.addressRegion,
      addressCountry: site.address.addressCountry,
    },
    email: site.contact.email,
    telephone: site.contact.phone,
  };
}

export function professionalServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['ProfessionalService', 'FinancialService'],
    '@id': `${site.url}/#service`,
    name: site.legalName,
    url: site.url,
    image: absoluteUrl('/og/og-default.svg'),
    description:
      'Independent M&A, corporate finance and advisory services for companies, shareholders and investors in the UAE, the GCC and internationally.',
    areaServed: [
      { '@type': 'Country', name: 'United Arab Emirates' },
      { '@type': 'Place', name: 'Gulf Cooperation Council (GCC)' },
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${site.address.line1}, ${site.address.line2}`,
      addressLocality: site.address.addressLocality,
      addressRegion: site.address.addressRegion,
      addressCountry: site.address.addressCountry,
    },
    priceRange: 'Advisory engagement (retainer + success fee)',
    telephone: site.contact.phone,
    email: site.contact.email,
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqSchema(faqs: Faq[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };
}

export function articleSchema(input: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: input.title,
    description: input.description,
    datePublished: input.datePublished,
    dateModified: input.datePublished,
    author: { '@type': 'Organization', name: site.legalName, url: site.url },
    publisher: {
      '@type': 'Organization',
      name: site.legalName,
      logo: { '@type': 'ImageObject', url: absoluteUrl('/icon.svg') },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': absoluteUrl(input.path) },
  };
}
