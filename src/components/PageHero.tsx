import * as React from 'react';
import { Container, Eyebrow } from './ui';

type PageHeroProps = {
  image: string;
  alt: string;
  eyebrow: string;
  title: string;
  lede?: string;
  /** Load eagerly for above-the-fold heroes (default true). */
  priority?: boolean;
};

/**
 * Full-bleed photographic page hero, in the restrained institutional style: a
 * darkened architectural photograph with the page title set over it. The gradient
 * overlay keeps text at WCAG-AA contrast regardless of the underlying image.
 *
 * Images are self-hosted in /public/images (sourced from Unsplash, which grants a
 * royalty-free commercial licence). Swap any file in that folder to change the
 * imagery — no code change needed.
 */
export function PageHero({ image, alt, eyebrow, title, lede, priority = true }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-bone">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image}
        alt={alt}
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-45"
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/85 to-ink/55" />
      <Container className="relative">
        <div className="max-w-prose py-24 sm:py-28 lg:py-32">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-5 font-serif text-4xl leading-[1.08] text-bone sm:text-5xl">
            {title}
          </h1>
          {lede ? (
            <p className="mt-6 text-lg leading-relaxed text-bone/75">{lede}</p>
          ) : null}
        </div>
      </Container>
    </section>
  );
}

/** A thin breadcrumb bar to sit directly beneath a PageHero. */
export function BreadcrumbBar({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-b border-ink/10 bg-bone-200/60">
      <Container className="py-4">{children}</Container>
    </div>
  );
}
