import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { buildMetadata, absoluteUrl } from '@/lib/seo';
import { Container, Section, Eyebrow, CTALink } from '@/components/ui';
import { Reveal } from '@/components/Reveal';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { PageHero, BreadcrumbBar } from '@/components/PageHero';
import { JsonLd } from '@/components/JsonLd';
import { ServiceIcon } from '@/components/icons';
import { services, getService } from '@/lib/services';
import { getArticlesForService } from '@/lib/insights';
import { site } from '@/lib/site';

type Params = { slug: string };

/**
 * Dedicated landing page per service. Each page targets the queries people
 * actually type for that service ("M&A advisory Dubai", "debt restructuring
 * UAE"), while /services/ remains the overview with in-page anchors.
 */
const serviceSeo: Record<string, { title: string; description: string; keywords: string[] }> = {
  'ma-advisory': {
    title: 'M&A Advisory in Dubai & the UAE',
    description:
      'Senior-led M&A advisory in Dubai: sell-side and buy-side representation, valuation, negotiation and execution across the UAE and GCC. Speak with us.',
    keywords: [
      'M&A advisory Dubai',
      'M&A advisor Dubai',
      'mergers and acquisitions consultants UAE',
      'sell-side advisor UAE',
      'buy-side advisory Dubai',
    ],
  },
  'business-sale-acquisition': {
    title: 'Sell or Buy a Business in the UAE',
    description:
      'Advisory for selling or buying a business in Dubai and the UAE: preparation, valuation, finding buyers, negotiation and closing. Confidential process.',
    keywords: [
      'sell my business Dubai',
      'sell a company UAE',
      'business broker Dubai',
      'buy a business in Dubai',
      'find a buyer for my business',
    ],
  },
  'corporate-restructuring': {
    title: 'Corporate & Debt Restructuring in the UAE',
    description:
      'Restructuring advisory in the UAE: debt rescheduling, lender negotiation, reorganisation and turnaround plans that preserve value. Talk to us early.',
    keywords: [
      'corporate restructuring Dubai',
      'debt restructuring UAE',
      'company restructuring UAE',
      'turnaround advisory Dubai',
    ],
  },
  'corporate-finance-capital-raising': {
    title: 'Capital Raising & Corporate Finance, UAE',
    description:
      'Raise capital for your business in the UAE: growth equity, debt financing and investor search, advised end to end by a senior team in Dubai.',
    keywords: [
      'raise capital UAE',
      'find an investor for my business',
      'corporate finance advisory Dubai',
      'growth capital UAE',
      'business financing Dubai',
    ],
  },
  'investment-portfolio-advisory': {
    title: 'Investment & Portfolio Advisory in the UAE',
    description:
      'Independent investment and portfolio advisory for family offices, investors and companies in the UAE and GCC. Senior attention, no product conflicts.',
    keywords: [
      'investment advisory Dubai',
      'family office advisory UAE',
      'portfolio advisory UAE',
    ],
  },
  'market-research-due-diligence': {
    title: 'Due Diligence & Market Research, UAE',
    description:
      'Commercial and financial due diligence and market research in the UAE: verify the facts behind a deal before you commit. Independent and rigorous.',
    keywords: [
      'due diligence services Dubai',
      'commercial due diligence UAE',
      'financial due diligence Dubai',
      'market research UAE',
    ],
  },
};

export function generateStaticParams(): Params[] {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const service = getService(params.slug);
  const seo = serviceSeo[params.slug];
  if (!service || !seo) return {};
  return buildMetadata({
    title: seo.title,
    description: seo.description,
    path: `/services/${service.slug}/`,
    keywords: seo.keywords,
  });
}

function serviceSchema(slug: string) {
  const service = getService(slug);
  const seo = serviceSeo[slug];
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${site.url}/services/${slug}/#service`,
    name: service?.title ?? '',
    serviceType: service?.title ?? '',
    description: seo?.description ?? '',
    url: absoluteUrl(`/services/${slug}/`),
    provider: {
      '@type': 'Organization',
      '@id': `${site.url}/#organization`,
      name: site.legalName,
      url: site.url,
    },
    areaServed: [
      { '@type': 'Country', name: 'United Arab Emirates' },
      { '@type': 'Place', name: 'Gulf Cooperation Council (GCC)' },
    ],
  };
}

export default function ServicePage({ params }: { params: Params }) {
  const service = getService(params.slug);
  const seo = serviceSeo[params.slug];
  if (!service || !seo) notFound();

  const articles = getArticlesForService(service.slug, 4);

  return (
    <>
      <JsonLd data={serviceSchema(service.slug)} />

      <PageHero
        image="/images/services.jpg"
        alt="Sweeping curves of contemporary architecture"
        eyebrow="Services"
        title={seo.title}
        lede={service.summary}
      />
      <BreadcrumbBar>
        <Breadcrumbs
          items={[
            { name: 'Services', path: '/services/' },
            { name: service.title, path: `/services/${service.slug}/` },
          ]}
        />
      </BreadcrumbBar>

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <Reveal>
              <span className="flex h-14 w-14 items-center justify-center border border-ink/15 text-brass">
                <ServiceIcon slug={service.slug} className="h-7 w-7" />
              </span>
              <h2 className="mt-6 font-serif text-2xl leading-tight text-ink sm:text-3xl">
                What this covers
              </h2>
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
                <CTALink href="/contact/" variant="solid">
                  Discuss {service.title.toLowerCase()}
                </CTALink>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {articles.length > 0 && (
        <section className="bg-bone-200">
          <Container>
            <div className="py-20">
              <Eyebrow>Related reading</Eyebrow>
              <h2 className="mt-4 font-serif text-2xl text-ink sm:text-3xl">
                Guides on this topic
              </h2>
              <div className="mt-10 grid gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
                {articles.map((a) => (
                  <Link
                    key={a.slug}
                    href={`/insights/${a.slug}/`}
                    className="group flex flex-col border-t border-ink/15 pt-6"
                  >
                    <p className="text-xs uppercase tracking-[0.14em] text-ink/45">
                      {a.readingTime}
                    </p>
                    <h3 className="mt-3 font-serif text-lg leading-snug text-ink group-hover:text-brass-dark">
                      {a.title}
                    </h3>
                  </Link>
                ))}
              </div>
            </div>
          </Container>
        </section>
      )}

      <Section>
        <Container>
          <div className="max-w-prose">
            <h2 className="font-serif text-2xl text-ink sm:text-3xl">All services</h2>
            <ul className="mt-8 space-y-3">
              {services
                .filter((s) => s.slug !== service.slug)
                .map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/services/${s.slug}/`}
                      className="text-brass-dark underline decoration-brass/40 hover:decoration-brass"
                    >
                      {s.title}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </Container>
      </Section>
    </>
  );
}
