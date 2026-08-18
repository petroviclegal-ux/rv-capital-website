import * as React from 'react';

type Stat = { value: string; label: string };

/**
 * Heritage statistics strip. Always render the mandatory attribution note near
 * this component (see `heritageAttribution` in lib/site.ts) so the figures are
 * never read as RV Capital's own history.
 */
export function StatBar({ stats, tone = 'ink' }: { stats: readonly Stat[]; tone?: 'ink' | 'light' }) {
  const valueColor = tone === 'light' ? 'text-bone' : 'text-ink';
  const labelColor = tone === 'light' ? 'text-bone/60' : 'text-ink/55';
  const border = tone === 'light' ? 'divide-bone/15 border-bone/15' : 'divide-ink/10 border-ink/10';

  return (
    <dl
      className={`grid gap-px overflow-hidden border sm:grid-cols-3 ${border} sm:divide-x ${border}`}
    >
      {stats.map((stat) => (
        <div key={stat.label} className="px-6 py-8 sm:px-8">
          <dt className="sr-only">{stat.label}</dt>
          <dd>
            <span className={`block font-serif text-4xl leading-none sm:text-5xl ${valueColor}`}>
              {stat.value}
            </span>
            <span className={`mt-4 block text-sm leading-snug ${labelColor}`}>{stat.label}</span>
          </dd>
        </div>
      ))}
    </dl>
  );
}
