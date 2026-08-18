import * as React from 'react';
import Link from 'next/link';
import { Logo } from './Logo';
import { Container } from './ui';
import { site, legalDisclaimer, primaryNav } from '@/lib/site';
import { services } from '@/lib/services';

/**
 * Site footer: brand, navigation, licence details and the mandatory legal
 * disclaimer.
 *
 * ⚠️ LEGAL REVIEW REQUIRED before launch — see `legalDisclaimer` in lib/site.ts.
 */
export function Footer() {
  const year = 2025; // Static build; update on redeploy or make dynamic server-side.

  return (
    <footer className="bg-ink text-bone/80">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo variant="light" />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-bone/60">
              Independent M&amp;A and corporate finance advisory for companies and
              shareholders across the UAE, the GCC and internationally.
            </p>
          </div>

          <nav aria-label="Footer — company">
            <h2 className="text-xs font-sans uppercase tracking-[0.24em] text-brass">
              Firm
            </h2>
            <ul className="mt-5 space-y-3 text-sm">
              {primaryNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-bone/70 transition-colors hover:text-bone">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer — services">
            <h2 className="text-xs font-sans uppercase tracking-[0.24em] text-brass">
              Services
            </h2>
            <ul className="mt-5 space-y-3 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/#${s.slug}`}
                    className="text-bone/70 transition-colors hover:text-bone"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-xs font-sans uppercase tracking-[0.24em] text-brass">
              Contact
            </h2>
            <address className="mt-5 space-y-3 text-sm not-italic text-bone/70">
              <p>
                {site.address.line1}
                <br />
                {site.address.line2}
                <br />
                {site.address.city}, {site.address.country}
              </p>
              <p>
                <a href={`mailto:${site.contact.email}`} className="transition-colors hover:text-bone">
                  {site.contact.email}
                </a>
                <br />
                <a href={`tel:${site.contact.phoneHref}`} className="transition-colors hover:text-bone">
                  {site.contact.phone}
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-14 border-t border-bone/15 pt-8">
          <p className="text-xs leading-relaxed text-bone/45">{legalDisclaimer}</p>
          <p className="mt-4 text-xs leading-relaxed text-bone/45">
            License No. {site.company.licenseNumber} · {site.company.legalStatus} ·{' '}
            {site.company.authority}.
          </p>
          <div className="mt-6 flex flex-col justify-between gap-2 text-xs text-bone/40 sm:flex-row">
            <p>
              © {year} {site.legalName}. All rights reserved.
            </p>
            <p>Dubai, United Arab Emirates</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
