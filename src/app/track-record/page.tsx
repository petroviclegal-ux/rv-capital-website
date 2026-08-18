import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { Container, Section, Eyebrow, CTALink } from '@/components/ui';
import { Reveal } from '@/components/Reveal';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { PageHero, BreadcrumbBar } from '@/components/PageHero';
import { StatBar } from '@/components/StatBar';
import { heritageStats, transactions } from '@/lib/transactions';
import { heritageAttribution } from '@/lib/site';

export const metadata: Metadata = buildMetadata({
  title: 'Track Record — Heritage Transactions',
  description:
    'Representative transactions led by RV Capital’s founding team during their tenure at Hefestos Capital — USD 11bn+ across landmark SEE deals.',
  path: '/track-record/',
  keywords: [
    'M&A advisor UAE track record',
    'privatization advisory Middle East',
    'sell-side advisor Dubai',
    'buy-side advisor Dubai',
  ],
});

export default function TrackRecordPage() {
  return (
    <>
      <PageHero
        image="/images/track-record.jpg"
        alt="Illuminated Dubai skyline at night"
        eyebrow="Track record"
        title="Decades of landmark transaction experience."
      />
      <BreadcrumbBar>
        <Breadcrumbs items={[{ name: 'Track Record', path: '/track-record/' }]} />
      </BreadcrumbBar>

      <Section className="pb-0">
        <Container>
          {/* MANDATORY attribution line — opens the page. */}
          <Reveal className="max-w-prose border-l-2 border-brass pl-5">
            <p className="text-lg leading-relaxed text-ink/75">
              RV Capital – FZCO was established in Dubai in 2023. The transactions on this
              page were not executed by RV Capital as a company; they were led by
              RV Capital’s founding team during their prior tenure at Hefestos Capital, the
              leading M&amp;A and corporate finance advisory firm in Southeast Europe.
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* STATS */}
      <Section>
        <Container>
          <Reveal>
            <Eyebrow>Heritage</Eyebrow>
            <h2 className="mt-5 font-serif text-2xl leading-tight text-ink sm:text-3xl">
              The founding team’s record at Hefestos Capital, 2002–2020
            </h2>
          </Reveal>
          <Reveal delay={100} className="mt-10">
            <StatBar stats={heritageStats} />
            <p className="mt-5 text-xs leading-relaxed text-ink/50">{heritageAttribution}</p>
          </Reveal>
        </Container>
      </Section>

      {/* TRANSACTIONS */}
      <section className="bg-ink-800 text-bone">
        <Container>
          <div className="py-24">
            <Reveal className="max-w-3xl">
              <Eyebrow>Representative Transaction Experience</Eyebrow>
              <h2 className="mt-5 font-serif text-2xl leading-tight sm:text-3xl">
                Selected transactions led by RV Capital’s founding team
              </h2>
              <p className="mt-4 text-sm uppercase tracking-[0.14em] text-brass">
                Prior experience of RV Capital’s founding team at Hefestos Capital
              </p>
            </Reveal>

            {/* Desktop / tablet table */}
            <Reveal delay={100} className="mt-12 hidden md:block">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[720px] border-collapse text-left">
                  <caption className="sr-only">
                    Representative transactions led by RV Capital’s founding team during
                    their tenure at Hefestos Capital.
                  </caption>
                  <thead>
                    <tr className="border-b border-bone/20">
                      {['Transaction', 'Value', 'Year', 'Sector', 'Role'].map((h) => (
                        <th
                          key={h}
                          scope="col"
                          className="py-4 pr-6 text-xs font-sans uppercase tracking-[0.16em] text-bone/55"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {transactions.map((t) => (
                      <tr key={t.deal} className="border-b border-bone/10 align-top">
                        <th scope="row" className="py-5 pr-6 font-serif text-base font-normal text-bone">
                          {t.deal}
                          {t.note && (
                            <span className="mt-1 block text-xs italic text-brass">{t.note}</span>
                          )}
                        </th>
                        <td className="py-5 pr-6 text-sm text-bone/80">{t.value}</td>
                        <td className="py-5 pr-6 text-sm text-bone/80">{t.year}</td>
                        <td className="py-5 pr-6 text-sm text-bone/80">{t.sector}</td>
                        <td className="py-5 pr-6 text-sm text-bone/80">{t.role}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>

            {/* Mobile stacked cards */}
            <div className="mt-10 space-y-4 md:hidden">
              {transactions.map((t) => (
                <div key={t.deal} className="border border-bone/15 p-5">
                  <h3 className="font-serif text-base text-bone">{t.deal}</h3>
                  {t.note && <p className="mt-1 text-xs italic text-brass">{t.note}</p>}
                  <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <dt className="text-xs uppercase tracking-wider text-bone/45">Value</dt>
                      <dd className="text-bone/85">{t.value}</dd>
                    </div>
                    <div>
                      <dt className="text-xs uppercase tracking-wider text-bone/45">Year</dt>
                      <dd className="text-bone/85">{t.year}</dd>
                    </div>
                    <div>
                      <dt className="text-xs uppercase tracking-wider text-bone/45">Sector</dt>
                      <dd className="text-bone/85">{t.sector}</dd>
                    </div>
                    <div>
                      <dt className="text-xs uppercase tracking-wider text-bone/45">Role</dt>
                      <dd className="text-bone/85">{t.role}</dd>
                    </div>
                  </dl>
                </div>
              ))}
            </div>

            {/* Footnote — mandatory attribution near the table. */}
            <p className="mt-10 max-w-3xl text-xs leading-relaxed text-bone/50">
              {heritageAttribution} Transaction values are approximate and denominated in
              US dollars. Roles describe the advisory capacity in which members of the
              founding team acted at the time.
            </p>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <Section>
        <Container>
          <div className="flex flex-col items-start gap-6 border-l-2 border-brass pl-6 sm:pl-8">
            <Reveal>
              <h2 className="max-w-2xl font-serif text-2xl leading-tight text-ink sm:text-3xl">
                Bring that experience to your next transaction.
              </h2>
              <p className="mt-4 max-w-xl leading-relaxed text-ink/70">
                We apply the same discipline and judgement to mandates for clients across
                the UAE and the GCC today.
              </p>
            </Reveal>
            <CTALink href="/contact/" variant="solid">
              Speak with us
            </CTALink>
          </div>
        </Container>
      </Section>
    </>
  );
}
