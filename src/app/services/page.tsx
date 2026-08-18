import type { Metadata } from 'next';
import Link from 'next/link';
import { buildMetadata } from '@/lib/seo';
import { Container, Section, Eyebrow, CTALink } from '@/components/ui';
import { Reveal } from '@/components/Reveal';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { PageHero, BreadcrumbBar } from '@/components/PageHero';
import { ServiceIcon } from '@/components/icons';
import { services } from '@/lib/services';

export const metadata: Metadata = buildMetadata({
  title: 'Services — M&A & Corporate Finance, UAE',
  description:
    'M&A advisory, business sale and acquisition, restructuring, capital raising, investment advisory and due diligence for clients in the UAE and GCC.',
  path: '/services/',
  keywords: [
    'M&A advisory UAE',
    'company sale advisory UAE',
    'business acquisition advisory Dubai',
    'restructuring advisory UAE',
    'corporate finance advisory UAE',
    'financial due diligence UAE',
  ],
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        image="/images/services.jpg"
        alt="Sweeping curves of contemporary architecture"
        eyebrow="Services"
        title="Advisory across the full lifecycle of a company."
        lede="From buying and selling businesses to restructuring balance sheets and raising capital, we bring institutional rigour and senior attention to every mandate. Explore how we can help."
      />
      <BreadcrumbBar>
        <Breadcrumbs items={[{ name: 'Services', path: '/services/' }]} />
      </BreadcrumbBar>

      <Section className="pb-0">
        <Container>
          {/* In-page navigation */}
          <Reveal>
            <nav aria-label="Services on this page">
              <ul className="flex flex-wrap gap-2">
                {services.map((s) => (
                  <li key={s.slug}>
                    <a
                      href={`#${s.slug}`}
                      className="inline-flex border border-ink/15 px-4 py-2 text-xs font-sans uppercase tracking-[0.12em] text-ink/70 transition-colors hover:border-brass hover:text-brass-dark"
                    >
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </Reveal>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="divide-y divide-ink/10">
            {services.map((service, i) => (
              <article key={service.slug} id={service.slug} className="scroll-mt-28 py-14 first:pt-4">
                <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
                  <Reveal>
                    <div className="flex items-center gap-4">
                      <span className="flex h-14 w-14 items-center justify-center border border-ink/15 text-brass">
                        <ServiceIcon slug={service.slug} className="h-7 w-7" />
                      </span>
                      <span className="font-serif text-sm text-brass">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <h2 className="mt-6 font-serif text-2xl leading-tight text-ink sm:text-3xl">
                      {service.title}
                    </h2>
                    <p className="mt-4 text-ink/60">{service.summary}</p>

                    <ul className="mt-8 space-y-2">
                      {service.scope.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm text-ink/75">
                          <span aria-hidden="true" className="mt-2 h-px w-4 shrink-0 bg-brass" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </Reveal>

                  <Reveal delay={100} className="space-y-5">
                    {service.body.map((para, idx) => (
                      <p key={idx} className="leading-relaxed text-ink/80 sm:text-[1.0625rem]">
                        {para}
                      </p>
                    ))}
                    <div className="pt-2">
                      <CTALink href="/contact/" variant="ghost">
                        Discuss {service.title.toLowerCase()}
                      </CTALink>
                    </div>
                  </Reveal>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      {/* CROSS-LINKS */}
      <section className="bg-bone-200">
        <Container>
          <div className="grid gap-8 py-20 md:grid-cols-2">
            <Reveal className="border border-ink/10 bg-bone p-8">
              <Eyebrow>Sectors</Eyebrow>
              <h2 className="mt-4 font-serif text-2xl text-ink">Experience across your industry</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink/70">
                Our advisory work spans banking, energy, consumer, pharmaceuticals, real
                estate, industrials, telecom and aviation. See where our experience is
                deepest.
              </p>
              <div className="mt-6">
                <Link href="/sectors/" className="text-sm font-sans uppercase tracking-[0.14em] text-brass-dark hover:text-brass">
                  Explore sectors →
                </Link>
              </div>
            </Reveal>

            <Reveal delay={80} className="border border-ink/10 bg-bone p-8">
              <Eyebrow>Insights</Eyebrow>
              <h2 className="mt-4 font-serif text-2xl text-ink">Guides for owners &amp; investors</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink/70">
                Practical, in-depth articles on selling a company in the UAE, valuation
                methods, due diligence and the M&amp;A process.
              </p>
              <div className="mt-6">
                <Link href="/insights/" className="text-sm font-sans uppercase tracking-[0.14em] text-brass-dark hover:text-brass">
                  Read insights →
                </Link>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-ink text-bone">
        <Container>
          <div className="flex flex-col items-center gap-6 py-20 text-center">
            <h2 className="max-w-2xl font-serif text-3xl leading-tight sm:text-4xl">
              Tell us what you’re trying to achieve.
            </h2>
            <p className="max-w-xl leading-relaxed text-bone/70">
              Every engagement starts with a confidential conversation about your
              objectives. There is no obligation.
            </p>
            <CTALink href="/contact/" tone="light" variant="solid">
              Speak with us
            </CTALink>
          </div>
        </Container>
      </section>
    </>
  );
}
