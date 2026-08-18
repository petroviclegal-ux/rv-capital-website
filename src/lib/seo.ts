import type { Metadata } from 'next';
import { site, SITE_URL } from './site';

type PageSeoInput = {
  title: string; // ≤60 chars including brand (we append the brand suffix)
  description: string; // ≤155 chars, ideally with a call to action
  path: string; // canonical path, e.g. '/about/'
  // Optional OG image path (defaults to the site OG image).
  ogImage?: string;
  // For article pages.
  type?: 'website' | 'article';
  publishedTime?: string;
  keywords?: string[];
};

const DEFAULT_OG = '/og/og-default.svg';

/**
 * Build a complete, unique Metadata object for a page: title, description,
 * canonical URL, Open Graph and Twitter cards. Keep raw titles short — the
 * brand suffix is added here, and the combined string is what search engines
 * display.
 */
export function buildMetadata(input: PageSeoInput): Metadata {
  const url = new URL(input.path, SITE_URL).toString();
  const ogImage = new URL(input.ogImage ?? DEFAULT_OG, SITE_URL).toString();
  const fullTitle = `${input.title} | ${site.name}`;
  const images = [
    { url: ogImage, width: 1200, height: 630, alt: `${site.name} — ${site.tagline}` },
  ];

  // Build the OpenGraph object per-variant so the discriminated union
  // (website vs. article) resolves cleanly.
  const openGraph: Metadata['openGraph'] =
    input.type === 'article'
      ? {
          type: 'article',
          publishedTime: input.publishedTime,
          title: fullTitle,
          description: input.description,
          url,
          siteName: site.legalName,
          locale: 'en_AE',
          images,
        }
      : {
          type: 'website',
          title: fullTitle,
          description: input.description,
          url,
          siteName: site.legalName,
          locale: 'en_AE',
          images,
        };

  return {
    title: input.title,
    description: input.description,
    keywords: input.keywords,
    alternates: { canonical: url },
    openGraph,
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: input.description,
      images: [ogImage],
    },
  };
}

/** Absolute URL helper for structured data. */
export function absoluteUrl(path: string): string {
  return new URL(path, SITE_URL).toString();
}
