import type { Metadata } from 'next';
import Link from 'next/link';
import { buildMetadata } from '@/lib/seo';
import { Container, Section, Eyebrow, CTALink } from '@/components/ui';
import { Reveal } from '@/components/Reveal';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { PageHero, BreadcrumbBar } from '@/components/PageHero';
import { SectorIcon } from '@/components/icons';
import { sectors } from '@/lib/sectors';

export const metadata: Metadata = buildMetadata({
  title: 'Sectors — Industry Coverage',
  description:
    'RV Capital advises across banking, energy, consumer, pharmaceuticals, real estate, industrials, telecom and aviation in the UAE and GCC.',
  path: '/sectors/',
  keywords: [
    'M&A advisory UAE',
    'cross-border M&A GCC',
    'energy M&A Middle East',
    'banking M&A GCC',
  ],
});

export default function SectorsPage() {
  return (
    <>
      <PageHero
        image="/images/sectors.jpg"
        alt="Dubai high-rise district at dusk"
        eyebrow="Sectors"
        title="Industry knowledge that sharpens every transaction."
        lede="Effective advice depends on understanding the dynamics of a specific industry — its buyers, its regulation and its value drivers. Our experience spans the sectors that anchor the UAE and regional economy."
      />
      <BreadcrumbBar>
        <Breadcrumbs items={[{ name: 'Sectors', path: '/sectors/' }]} />
      </BreadcrumbBar>

      <Section className="pb-0">
        <Container>
          <Reveal className="max-w-prose">
            <p className="text-sm leading-relaxed text-ink/55">
              The coverage below reflects general regional and sector experience. Named
              transactions are set out on our{' '}
              <Link href="/track-record/" className="text-brass-dark underline decoration-brass/40 hover:decoration-brass">
                track record
              </Link>{' '}
              page and relate to the founding team’s prior experience at Hefestos Capital.
            </p>
          </Reveal>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-px overflow-hidden border border-ink/10 bg-ink/10 md:grid-cols-2">
            {sectors.map((sector, i) => (
              <Reveal key={sector.slug} delay={(i % 2) * 60} className="bg-bone">
                <article id={sector.slug} className="flex h-full scroll-mt-28 flex-col p-8 sm:p-10">
                  <div className="flex items-center justify-between">
                    <span className="text-brass">
                      <SectorIcon slug={sector.slug} className="h-9 w-9" />
                    </span>
                    <span className="font-serif text-sm text-brass/70">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h2 className="mt-6 font-serif text-2xl text-ink">{sector.title}</h2>
                  <p className="mt-4 leading-relaxed text-ink/70">{sector.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* CROSS-LINK + CTA */}
      <section className="bg-ink text-bone">
        <Container>
          <div className="grid gap-10 py-20 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <Eyebrow>Ready to talk</Eyebrow>
              <h2 className="mt-5 font-serif text-3xl leading-tight sm:text-4xl">
                Not sure how your sector maps to our experience?
              </h2>
              <p className="mt-5 leading-relaxed text-bone/70">
                Tell us about your business and objectives. We will be candid about where
                we can add value — and where we can’t.
              </p>
            </Reveal>
            <Reveal delay={80} className="lg:justify-self-end">
              <div className="flex flex-col gap-4 sm:flex-row">
                <CTALink href="/services/" tone="light" variant="outline">
                  View services
                </CTALink>
                <CTALink href="/contact/" tone="light" variant="solid">
                  Speak with us
                </CTALink>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
