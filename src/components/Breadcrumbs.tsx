import * as React from 'react';
import Link from 'next/link';
import { JsonLd } from './JsonLd';
import { breadcrumbSchema } from '@/lib/structured-data';

export type Crumb = { name: string; path: string };

/**
 * Visible breadcrumb trail + matching BreadcrumbList JSON-LD. Home is prepended
 * automatically; pass the inner-page trail.
 */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const full: Crumb[] = [{ name: 'Home', path: '/' }, ...items];

  return (
    <>
      <nav aria-label="Breadcrumb" className="text-xs font-sans tracking-wide text-ink/50">
        <ol className="flex flex-wrap items-center gap-2">
          {full.map((crumb, i) => {
            const last = i === full.length - 1;
            return (
              <li key={crumb.path} className="flex items-center gap-2">
                {last ? (
                  <span aria-current="page" className="text-ink/70">
                    {crumb.name}
                  </span>
                ) : (
                  <Link href={crumb.path} className="transition-colors hover:text-brass">
                    {crumb.name}
                  </Link>
                )}
                {!last && <span aria-hidden="true">/</span>}
              </li>
            );
          })}
        </ol>
      </nav>
      <JsonLd data={breadcrumbSchema(full)} />
    </>
  );
}
