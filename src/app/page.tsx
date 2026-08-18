import type { Metadata } from 'next';
import Link from 'next/link';
import { buildMetadata } from '@/lib/seo';
import { Container, Section, Eyebrow, CTALink } from '@/components/ui';
import { Reveal } from '@/components/Reveal';
import { StatBar } from '@/components/StatBar';
import { FAQ } from '@/components/FAQ';
import { JsonLd } from '@/components/JsonLd';
import { LineArtField, SkylineSilhouette, AscendingRule, ArchesMotif } from '@/components/Decor';
import { MonogramMark } from '@/components/MonogramMark';
import { SectorIcon, ServiceIcon } from '@/components/icons';
import { services } from '@/lib/services';
import { sectors } from '@/lib/sectors';
import { heritageStats } from '@/lib/transactions';
import { faqs } from '@/lib/faqs';
import { getAllArticles } from '@/lib/insights';
import { heritageAttribution } from '@/lib/site';
import { faqSchema } from '@/lib/structured-data';

export const metadata: Metadata = buildMetadata({
  title: 'M&A Advisory Dubai & UAE',
  description:
    'Independent M&A and corporate finance advisory in Dubai. We help companies and shareholders buy, sell, restructure and raise capital. Speak with us.',
  path: '/',
  keywords: [
    'M&A advisory Dubai',
    'M&A advisory UAE',
    'mergers and acquisitions advisor UAE',
    'corporate finance advisory UAE',
    'investment banking boutique Dubai',
    'sell my business Dubai',
  ],
});

export default function HomePage() {
  const latest = getAllArticles().slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-ink text-bone">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero-dubai.jpg"
          alt="The Dubai skyline at dusk"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/75 via-ink/55 to-ink/90" />
        <LineArtField className="pointer-events-none absolute inset-0 h-full w-full opacity-25" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0">
          <SkylineSilhouette className="h-36 w-full text-ink-600/70 sm:h-44" />
        </div>

        <Container className="relative">
          <div className="flex min-h-[88vh] flex-col justify-center py-28 text-center">
            <Reveal className="mx-auto max-w-4xl">
              {/* Brand lockup */}
              <div className="mx-auto flex flex-col items-center">
                <MonogramMark
                  color="#B08D57"
                  className="h-16 w-16 sm:h-20 sm:w-20"
                  title="RV Capital"
                />
                <span className="mt-6 font-serif text-5xl leading-none tracking-[0.01em] text-bone sm:text-6xl lg:text-7xl">
                  RV Capital
                </span>
                <span className="mt-4 text-[0.7rem] font-sans uppercase tracking-[0.4em] text-brass sm:text-xs">
                  M&amp;A · Corporate Finance
                </span>
              </div>

              <Eyebrow className="mx-auto mt-12">Dubai · UAE · GCC · International</Eyebrow>
              <h1 className="mt-6 font-serif text-3xl leading-[1.12] text-bone sm:text-4xl lg:text-5xl">
                Independent M&amp;A and corporate finance advisory for companies and
                shareholders across the UAE and the region.
              </h1>
              <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-bone/70">
                We advise on buying and selling companies, corporate restructuring and
                raising capital — with discretion, cross-border reach and a senior,
                hands-on team engaged on every mandate.
              </p>
              <div className="mt-11 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <CTALink href="/contact/" tone="light" variant="solid">
                  Speak with us
                </CTALink>
                <CTALink href="/services/" tone="light" variant="outline">
                  Explore our services
                </CTALink>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* SERVICES STRIP */}
      <Section>
        <Container>
          <Reveal className="max-w-3xl">
            <Eyebrow>What we do</Eyebrow>
            <h2 className="mt-5 font-serif text-3xl leading-tight text-ink sm:text-4xl">
              A focused advisory practice, built around the decisions that define a company.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-px overflow-hidden border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={i * 60} className="bg-bone">
                <Link
                  href={`/services/#${service.slug}`}
                  className="group flex h-full flex-col p-8 transition-colors hover:bg-bone-200"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-brass transition-colors group-hover:text-brass-dark">
                      <ServiceIcon slug={service.slug} className="h-8 w-8" />
                    </span>
                    <span className="font-serif text-sm text-brass/70">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="mt-6 font-serif text-xl text-ink group-hover:text-brass-dark">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/65">{service.summary}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* APPROACH */}
      <section className="bg-ink-800 text-bone">
        <Container>
          <div className="grid gap-14 py-24 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <Eyebrow>Our approach</Eyebrow>
              <h2 className="mt-5 font-serif text-3xl leading-tight sm:text-4xl">
                Senior-led, discreet, and rigorous — from first conversation to close.
              </h2>
              <p className="mt-6 leading-relaxed text-bone/70">
                We are deliberately selective about the mandates we take on, so that the
                experienced professionals who win your trust are the ones who run your
                transaction. Every engagement is grounded in disciplined process:
                thorough due diligence, defensible valuation, careful negotiation and
                controlled execution.
              </p>
              <p className="mt-4 leading-relaxed text-bone/70">
                We measure success by outcomes and long-term relationships, not
                transaction volume.
              </p>
              <div className="mt-8">
                <CTALink href="/about/" tone="light" variant="ghost">
                  More about the firm
                </CTALink>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <ul className="divide-y divide-bone/15 border-y border-bone/15">
                {[
                  ['Discretion', 'Sensitive ownership decisions handled with strict confidentiality.'],
                  ['Cross-border reach', 'Connecting UAE and GCC businesses with international capital and counterparties.'],
                  ['Institutional rigour', 'A structured, evidence-based process behind every recommendation.'],
                  ['Alignment', 'Compensation weighted to successful outcomes for our clients.'],
                ].map(([title, body]) => (
                  <li key={title} className="flex gap-6 py-6">
                    <span className="mt-1 text-brass">
                      <AscendingRule className="h-4 w-16" />
                    </span>
                    <div>
                      <h3 className="font-serif text-lg">{title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-bone/65">{body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* HERITAGE STAT BAR */}
      <Section>
        <Container>
          <Reveal className="max-w-3xl">
            <Eyebrow>Heritage</Eyebrow>
            <h2 className="mt-5 font-serif text-3xl leading-tight text-ink sm:text-4xl">
              A new firm, built on decades of landmark transaction experience.
            </h2>
            <p className="mt-6 leading-relaxed text-ink/70">
              Prior to founding RV Capital, our leadership built and led Hefestos Capital,
              the leading M&amp;A and corporate finance advisory firm in Southeast Europe.
            </p>
          </Reveal>

          <Reveal delay={120} className="mt-12">
            <StatBar stats={heritageStats} />
            <p className="mt-5 text-xs leading-relaxed text-ink/50">
              {heritageAttribution}
            </p>
            <div className="mt-8">
              <CTALink href="/track-record/" variant="ghost">
                View representative transactions
              </CTALink>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* SECTORS */}
      <section className="bg-bone-200">
        <Container>
          <div className="py-24">
            <Reveal className="max-w-3xl">
              <Eyebrow>Sectors</Eyebrow>
              <h2 className="mt-5 font-serif text-3xl leading-tight text-ink sm:text-4xl">
                Deep familiarity across the sectors that drive the regional economy.
              </h2>
            </Reveal>
            <Reveal delay={80} className="mt-12">
              <ul className="flex flex-wrap gap-3">
                {sectors.map((sector) => (
                  <li key={sector.slug}>
                    <Link
                      href={`/sectors/#${sector.slug}`}
                      className="group inline-flex items-center gap-3 border border-ink/15 px-5 py-3 text-sm text-ink/80 transition-colors hover:border-brass hover:text-brass-dark"
                    >
                      <span className="text-brass">
                        <SectorIcon slug={sector.slug} className="h-5 w-5" />
                      </span>
                      {sector.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* INSIGHTS */}
      {latest.length > 0 && (
        <Section>
          <Container>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <Reveal className="max-w-2xl">
                <Eyebrow>Insights</Eyebrow>
                <h2 className="mt-5 font-serif text-3xl leading-tight text-ink sm:text-4xl">
                  Perspectives on M&amp;A and corporate finance in the UAE.
                </h2>
              </Reveal>
              <Reveal>
                <CTALink href="/insights/" variant="ghost">
                  All insights
                </CTALink>
              </Reveal>
            </div>

            <div className="mt-14 grid gap-8 md:grid-cols-3">
              {latest.map((article, i) => (
                <Reveal key={article.slug} delay={i * 70}>
                  <Link href={`/insights/${article.slug}/`} className="group flex h-full flex-col">
                    <div className="border-t border-ink/15 pt-6">
                      <p className="text-xs uppercase tracking-[0.14em] text-ink/45">
                        {article.readingTime}
                      </p>
                      <h3 className="mt-4 font-serif text-xl leading-snug text-ink group-hover:text-brass-dark">
                        {article.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-ink/65">
                        {article.description}
                      </p>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* FAQ */}
      <section className="bg-bone-200">
        <Container>
          <div className="py-24">
            <Reveal>
              <FAQ items={faqs} />
            </Reveal>
          </div>
        </Container>
      </section>
      {/* FAQPage structured data for the questions above. */}
      <JsonLd data={faqSchema(faqs)} />

      {/* CLOSING CTA */}
      <section className="bg-ink text-bone">
        <Container>
          <div className="flex flex-col items-center gap-8 py-24 text-center">
            <ArchesMotif className="h-14 w-auto opacity-70" count={5} />
            <Reveal className="max-w-2xl">
              <h2 className="font-serif text-3xl leading-tight sm:text-4xl">
                Considering a sale, an acquisition, or a capital raise?
              </h2>
              <p className="mt-5 leading-relaxed text-bone/70">
                Start a confidential conversation with our team. We are based in Dubai
                Silicon Oasis and work with clients across the UAE and internationally.
              </p>
            </Reveal>
            <Reveal delay={80}>
              <CTALink href="/contact/" tone="light" variant="solid">
                Contact RV Capital
              </CTALink>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
