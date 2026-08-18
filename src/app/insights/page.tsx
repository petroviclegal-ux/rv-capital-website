import type { Metadata } from 'next';
import Link from 'next/link';
import { buildMetadata } from '@/lib/seo';
import { Container, Section, CTALink } from '@/components/ui';
import { Reveal } from '@/components/Reveal';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { PageHero, BreadcrumbBar } from '@/components/PageHero';
import { getAllArticles } from '@/lib/insights';

export const metadata: Metadata = buildMetadata({
  title: 'Insights — M&A & Corporate Finance, UAE',
  description:
    'Practical guides on selling and buying companies in the UAE, business valuation, due diligence and the M&A process. Read our insights.',
  path: '/insights/',
  keywords: [
    'sell my business UAE',
    'business valuation Dubai',
    'buy a business in Dubai',
    'M&A process UAE',
  ],
});

function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
}

export default function InsightsPage() {
  const articles = getAllArticles();
  const [featured, ...rest] = articles;

  return (
    <>
      <PageHero
        image={featured?.image ?? '/images/services.jpg'}
        alt="Modern financial district architecture"
        eyebrow="Insights"
        title="Clear thinking on M&A and corporate finance in the UAE."
        lede="Practical, in-depth articles for company owners, investors and family offices navigating a sale, an acquisition, a restructuring or a capital raise in the UAE and the GCC."
      />
      <BreadcrumbBar>
        <Breadcrumbs items={[{ name: 'Insights', path: '/insights/' }]} />
      </BreadcrumbBar>

      <Section>
        <Container>
          {featured && (
            <Reveal>
              <Link
                href={`/insights/${featured.slug}/`}
                className="group grid items-center gap-8 border-t border-ink/15 pt-10 lg:grid-cols-2 lg:gap-12"
              >
                {featured.image && (
                  <div className="order-1 aspect-[16/10] overflow-hidden lg:order-2">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={featured.image}
                      alt={featured.title}
                      className="h-full w-full object-cover transition-transform duration-700 ease-luxe group-hover:scale-105"
                      loading="eager"
                    />
                  </div>
                )}
                <div className="order-2 lg:order-1">
                  <p className="text-xs uppercase tracking-[0.16em] text-brass">Latest</p>
                  <h2 className="mt-5 font-serif text-3xl leading-tight text-ink group-hover:text-brass-dark sm:text-4xl">
                    {featured.title}
                  </h2>
                  <p className="mt-5 max-w-2xl leading-relaxed text-ink/70">
                    {featured.description}
                  </p>
                  <p className="mt-6 text-xs uppercase tracking-[0.14em] text-ink/45">
                    {formatDate(featured.date)} · {featured.readingTime}
                  </p>
                </div>
              </Link>
            </Reveal>
          )}

          <div className="mt-16 grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((article, i) => (
              <Reveal key={article.slug} delay={(i % 3) * 70}>
                <Link href={`/insights/${article.slug}/`} className="group flex h-full flex-col">
                  {article.image && (
                    <div className="aspect-[3/2] overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={article.image}
                        alt={article.title}
                        className="h-full w-full object-cover transition-transform duration-700 ease-luxe group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <p className="mt-6 text-xs uppercase tracking-[0.14em] text-ink/45">
                    {formatDate(article.date)} · {article.readingTime}
                  </p>
                  <h3 className="mt-3 font-serif text-xl leading-snug text-ink group-hover:text-brass-dark">
                    {article.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/65">{article.description}</p>
                  <span className="mt-5 text-xs font-sans uppercase tracking-[0.14em] text-brass-dark">
                    Read article →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <section className="bg-bone-200">
        <Container>
          <div className="flex flex-col items-start gap-6 py-16 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-xl">
              <h2 className="font-serif text-2xl text-ink sm:text-3xl">
                Have a specific question about your situation?
              </h2>
              <p className="mt-3 leading-relaxed text-ink/70">
                General guides can only go so far. For advice tailored to your business,
                talk to us directly and in confidence.
              </p>
            </div>
            <CTALink href="/contact/" variant="solid">
              Speak with us
            </CTALink>
          </div>
        </Container>
      </section>
    </>
  );
}
