import * as React from 'react';
import { faqs as defaultFaqs, type Faq } from '@/lib/faqs';
import { Eyebrow } from './ui';

/**
 * Accessible FAQ section using native <details>/<summary> so it works without
 * JavaScript and remains fully crawlable. FAQPage JSON-LD is emitted separately
 * by the page that renders this (see the Home page) to keep schema in the head.
 */
export function FAQ({ items = defaultFaqs }: { items?: Faq[] }) {
  return (
    <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
      <div>
        <Eyebrow>Common questions</Eyebrow>
        <h2 className="mt-5 font-serif text-3xl leading-tight text-ink sm:text-4xl">
          What owners and investors ask us
        </h2>
        <p className="mt-5 text-ink/70">
          Straight answers to the questions we hear most often from company owners,
          investors and family offices considering a transaction in the UAE.
        </p>
      </div>

      <div className="divide-y divide-ink/10 border-t border-ink/10">
        {items.map((faq) => (
          <details key={faq.question} className="group py-5">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
              <h3 className="font-serif text-lg text-ink">{faq.question}</h3>
              <span
                aria-hidden="true"
                className="mt-1 shrink-0 text-brass transition-transform duration-300 group-open:rotate-45"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M9 3v12M3 9h12" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </span>
            </summary>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink/70">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </div>
  );
}
