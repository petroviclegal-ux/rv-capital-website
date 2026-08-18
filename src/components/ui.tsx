import * as React from 'react';
import Link from 'next/link';

/** Constrained content container with responsive horizontal padding. */
export function Container({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-content px-6 sm:px-8 lg:px-12 ${className}`}>
      {children}
    </div>
  );
}

/** Vertical rhythm wrapper for a page section. */
export function Section({
  children,
  className = '',
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-20 sm:py-24 lg:py-28 ${className}`}>
      {children}
    </section>
  );
}

/** Small brass eyebrow / kicker above a heading. */
export function Eyebrow({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`text-xs font-sans uppercase tracking-[0.28em] text-brass ${className}`}
    >
      {children}
    </p>
  );
}

/** A hairline divider consistent with the restrained design language. */
export function Divider({ className = '' }: { className?: string }) {
  return <hr className={`border-0 border-t border-ink/10 ${className}`} />;
}

type CTAProps = {
  href: string;
  children: React.ReactNode;
  variant?: 'solid' | 'outline' | 'ghost';
  tone?: 'ink' | 'light';
  className?: string;
};

/** Primary call-to-action link, styled as a restrained institutional button. */
export function CTALink({
  href,
  children,
  variant = 'solid',
  tone = 'ink',
  className = '',
}: CTAProps) {
  const base =
    'inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-sans uppercase tracking-[0.14em] transition-colors duration-300 ease-luxe focus:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2';

  const styles: Record<string, string> = {
    solid:
      tone === 'light'
        ? 'bg-bone text-ink hover:bg-white'
        : 'bg-ink text-bone hover:bg-ink-700',
    outline:
      tone === 'light'
        ? 'border border-bone/40 text-bone hover:border-brass hover:text-brass'
        : 'border border-ink/25 text-ink hover:border-brass hover:text-brass',
    ghost:
      tone === 'light'
        ? 'text-bone hover:text-brass'
        : 'text-ink hover:text-brass',
  };

  const offset = tone === 'light' ? 'focus-visible:ring-offset-ink' : 'focus-visible:ring-offset-bone';

  const isInternal = href.startsWith('/');
  const classes = `${base} ${styles[variant]} ${offset} ${className}`;

  if (isInternal) {
    return (
      <Link href={href} className={classes}>
        {children}
        <Arrow />
      </Link>
    );
  }
  return (
    <a href={href} className={classes}>
      {children}
      <Arrow />
    </a>
  );
}

function Arrow() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className="translate-y-px"
    >
      <path
        d="M2 8h11M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="square"
      />
    </svg>
  );
}

/** Standard page header block: eyebrow + H1 + optional lede. */
export function PageHeading({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
}) {
  return (
    <div className="max-w-prose">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1 className="mt-5 font-serif text-4xl leading-[1.1] text-ink sm:text-5xl">
        {title}
      </h1>
      {lede ? (
        <p className="mt-6 text-lg leading-relaxed text-ink/70">{lede}</p>
      ) : null}
    </div>
  );
}
