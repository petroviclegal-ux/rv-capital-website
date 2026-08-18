import * as React from 'react';
import Link from 'next/link';
import { MonogramMark } from './MonogramMark';

type LogoProps = {
  /** 'dark' = for light backgrounds (ink text); 'light' = reversed for dark backgrounds. */
  variant?: 'dark' | 'light';
  className?: string;
  /** When false, renders the mark + wordmark without a surrounding link. */
  asLink?: boolean;
};

/**
 * RV Capital lockup: the geometric monogram beside the "RV CAPITAL" wordmark set
 * in the serif headline face. The word "CAPITAL" is spaced in small-caps style
 * to read as an institutional wordmark.
 */
export function Logo({ variant = 'dark', className = '', asLink = true }: LogoProps) {
  const isLight = variant === 'light';
  const textColor = isLight ? 'text-bone' : 'text-ink';

  const inner = (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <MonogramMark color="#B08D57" className="h-10 w-10 shrink-0" title="RV Capital" />
      <span className={`flex flex-col leading-none ${textColor}`}>
        <span className="font-serif text-xl tracking-[0.02em]">RV Capital</span>
        <span className="mt-1 text-[0.6rem] font-sans uppercase tracking-[0.34em] text-brass">
          M&amp;A · Corporate Finance
        </span>
      </span>
    </span>
  );

  if (!asLink) return inner;

  return (
    <Link href="/" aria-label="RV Capital — home" className="inline-flex">
      {inner}
    </Link>
  );
}
