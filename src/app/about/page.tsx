import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { Container, Section, Eyebrow, CTALink, Divider } from '@/components/ui';
import { Reveal } from '@/components/Reveal';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { PageHero, BreadcrumbBar } from '@/components/PageHero';
import { StatBar } from '@/components/StatBar';
import { AscendingRule } from '@/components/Decor';
import { heritageStats } from '@/lib/transactions';
import { heritageAttribution, site } from '@/lib/site';

export const metadata: Metadata = buildMetadata({
  title: 'About RV Capital — Advisory Firm in Dubai',
  description:
    'RV Capital is an independent, senior-led M&A and corporate finance advisory firm headquartered in Dubai. Learn about our approach and heritage.',
  path: '/about/',
  keywords: [
    'M&A consultants Dubai',
    'corporate finance advisory UAE',
    'investment banking boutique Dubai',
    'financial advisory services UAE',
  ],
});

const approach = [
  [
    'Due diligence',
    'We interrogate the facts behind every transaction — commercial, financial and operational — so decisions rest on evidence, not assumptions.',
  ],
  [
    'Valuation',
    'We build defensible, method-driven valuations that hold up under scrutiny at the negotiating table.',
  ],
  [
    'Negotiation',
    'We negotiate firmly and constructively on our clients’ behalf, protecting value and managing risk through to agreement.',
  ],
  [
    'Execution',
    'We run a controlled, confidential process from mandate to completion, keeping momentum without cutting corners.',
  ],
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        image="/images/about.jpg"
        alt="Modern glass office towers rising against the sky"
        eyebrow="About RV Capital"
        title="An independent advisory firm, headquartered in Dubai."
        lede="We advise companies, shareholders, family offices and institutions on the transactions that shape their future — mergers and acquisitions, business sales and purchases, restructuring, and capital raising — across the UAE, the GCC and international markets."
      />
      <BreadcrumbBar>
        <Breadcrumbs items={[{ name: 'About', path: '/about/' }]} />
      </BreadcrumbBar>

      {/* WHO WE ARE */}
      <Section>
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr]">
            <Reveal>
              <Eyebrow>Who we are</Eyebrow>
              <h2 className="mt-5 font-serif text-3xl leading-tight text-ink sm:text-4xl">
                Focused, independent, and aligned with our clients.
              </h2>
            </Reveal>
            <Reveal delay={100} className="space-y-5 text-ink/75">
              <p className="text-lg leading-relaxed">
                RV Capital is a boutique M&amp;A and corporate finance advisory firm. Being
                independent means our advice is our own: we are free of the conflicts that
                come with lending, trading or product distribution, and we answer only to
                the clients we serve.
              </p>
              <p className="leading-relaxed">
                We deliberately keep our practice focused and our client roster selective.
                That focus lets senior professionals stay personally involved in every
                mandate — from the first confidential conversation through to completion —
                rather than delegating the substance of the work.
              </p>
              <p className="leading-relaxed">
                Headquartered in Dubai Silicon Oasis, we serve businesses and investors
                across the UAE and the GCC, and we regularly work on cross-border
                transactions that connect the region with international counterparties and
                capital.
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* APPROACH */}
      <section className="bg-ink-800 text-bone">
        <Container>
          <div className="py-24">
            <Reveal className="max-w-3xl">
              <Eyebrow>Our approach</Eyebrow>
              <h2 className="mt-5 font-serif text-3xl leading-tight sm:text-4xl">
                Long-term relationships over transaction volume.
              </h2>
              <p className="mt-6 leading-relaxed text-bone/70">
                We would rather do fewer transactions exceptionally well than chase deal
                count. Our process is senior-led, discreet and rigorous, and it follows
                the same disciplined arc on every engagement.
              </p>
            </Reveal>

            <div className="mt-14 grid gap-px overflow-hidden border border-bone/15 bg-bone/15 sm:grid-cols-2">
              {approach.map(([title, body], i) => (
                <Reveal key={title} delay={i * 60} className="bg-ink-800">
                  <div className="flex h-full flex-col p-8">
                    <AscendingRule className="h-4 w-16 text-brass" />
                    <h3 className="mt-5 font-serif text-xl">{title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-bone/65">{body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* BACKGROUND / HERITAGE */}
      <Section>
        <Container>
          <div className="max-w-prose">
            <Reveal>
              <Eyebrow>Our background</Eyebrow>
              <h2 className="mt-5 font-serif text-3xl leading-tight text-ink sm:text-4xl">
                Founded by a team with a landmark transaction history.
              </h2>
            </Reveal>
            <Reveal delay={80} className="mt-6 space-y-5 text-ink/75">
              <p className="text-lg leading-relaxed">
                RV Capital was founded by a team of investment banking professionals who
                previously built and led Hefestos Capital, the leading M&amp;A and corporate
                finance advisory firm in Southeast Europe, before establishing RV Capital
                in Dubai to serve the UAE and international markets.
              </p>
              <p className="leading-relaxed">
                During their tenure at Hefestos Capital, the founding team advised on
                cumulative transactions exceeding USD 11 billion between 2002 and 2020 —
                including some of the region’s largest and most complex mergers,
                acquisitions, privatizations and restructurings. That experience, in
                sectors from banking and energy to consumer, pharmaceuticals and telecoms,
                now informs the advice we bring to clients in the UAE and the wider Gulf.
              </p>
            </Reveal>
          </div>

          <Reveal delay={140} className="mt-12">
            <StatBar stats={heritageStats} />
            <p className="mt-5 text-xs leading-relaxed text-ink/50">{heritageAttribution}</p>
            <div className="mt-8">
              <CTALink href="/track-record/" variant="ghost">
                See representative transactions
              </CTALink>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* LICENCE / FACTS */}
      <section className="bg-bone-200">
        <Container>
          <div className="py-20">
            <Reveal>
              <Eyebrow>The entity</Eyebrow>
              <h2 className="mt-5 font-serif text-2xl leading-tight text-ink sm:text-3xl">
                {site.company.legalName}
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <dl className="mt-8 grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  ['Legal status', site.company.legalStatus],
                  ['Trade licence no.', site.company.licenseNumber],
                  ['Issuing authority', site.company.authority],
                  ['Registered address', site.address.full],
                ].map(([term, value]) => (
                  <div key={term as string}>
                    <dt className="text-xs uppercase tracking-[0.16em] text-brass">{term}</dt>
                    <dd className="mt-2 text-sm leading-relaxed text-ink/75">{value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
            <Divider className="mt-12" />
            <p className="mt-6 max-w-3xl text-xs leading-relaxed text-ink/50">
              RV Capital provides corporate and financial advisory services. It is not a
              licensed bank or securities broker-dealer, and does not hold client assets or
              provide discretionary asset management.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
