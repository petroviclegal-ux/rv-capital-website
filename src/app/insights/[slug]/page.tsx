import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { buildMetadata } from '@/lib/seo';
import { Container, Section, CTALink } from '@/components/ui';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { PageHero, BreadcrumbBar } from '@/components/PageHero';
import { JsonLd } from '@/components/JsonLd';
import { articleSchema } from '@/lib/structured-data';
import {
  getAllArticleSlugs,
  getArticle,
  getRelatedArticles,
} from '@/lib/insights';

type Params = { slug: string };

// Pre-render every article at build (required for static export).
// Reads the /content/insights folder at build time — drop in a new .md file and
// it is picked up automatically on the next build (restart `npm run dev` to see
// new articles during local development).
export function generateStaticParams(): Params[] {
  return getAllArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const slugs = getAllArticleSlugs();
  if (!slugs.includes(params.slug)) return {};
  const article = await getArticle(params.slug);
  return buildMetadata({
    title: article.title.length > 56 ? `${article.title.slice(0, 53)}…` : article.title,
    description: article.description,
    path: `/insights/${article.slug}/`,
    type: 'article',
    publishedTime: article.date,
    keywords: article.keywords,
  });
}

function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
}

export default async function ArticlePage({ params }: { params: Params }) {
  if (!getAllArticleSlugs().includes(params.slug)) notFound();

  const article = await getArticle(params.slug);
  const related = getRelatedArticles(article.slug, 3);

  return (
    <>
      <JsonLd
        data={articleSchema({
          title: article.title,
          description: article.description,
          path: `/insights/${article.slug}/`,
          datePublished: article.date,
        })}
      />

      <PageHero
        image={article.image ?? '/images/services.jpg'}
        alt={article.title}
        eyebrow={`${formatDate(article.date)} · ${article.readingTime}`}
        title={article.title}
        lede={article.description}
      />
      <BreadcrumbBar>
        <Breadcrumbs
          items={[
            { name: 'Insights', path: '/insights/' },
            { name: article.title, path: `/insights/${article.slug}/` },
          ]}
        />
      </BreadcrumbBar>

      <Section className="pt-12">
        <Container>
          <div
            className="prose-rv max-w-prose"
            // Content is authored in-repo (trusted Markdown), rendered at build time.
            dangerouslySetInnerHTML={{ __html: article.html }}
          />

          {/* Advisory note keeps article guidance in scope. */}
          <div className="mt-14 max-w-prose border-l-2 border-brass pl-5">
            <p className="text-sm leading-relaxed text-ink/60">
              This article is general information, not legal, tax or financial advice, and
              does not create an advisory relationship. For guidance tailored to your
              circumstances,{' '}
              <Link href="/contact/" className="text-brass-dark underline decoration-brass/40 hover:decoration-brass">
                speak with our team
              </Link>
              .
            </p>
          </div>
        </Container>
      </Section>

      {/* RELATED */}
      {related.length > 0 && (
        <section className="bg-bone-200">
          <Container>
            <div className="py-20">
              <h2 className="font-serif text-2xl text-ink sm:text-3xl">Related insights</h2>
              <div className="mt-10 grid gap-x-8 gap-y-10 md:grid-cols-3">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/insights/${r.slug}/`}
                    className="group flex flex-col border-t border-ink/15 pt-6"
                  >
                    <p className="text-xs uppercase tracking-[0.14em] text-ink/45">
                      {r.readingTime}
                    </p>
                    <h3 className="mt-3 font-serif text-lg leading-snug text-ink group-hover:text-brass-dark">
                      {r.title}
                    </h3>
                  </Link>
                ))}
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* CTA */}
      <section className="bg-ink text-bone">
        <Container>
          <div className="flex flex-col items-center gap-6 py-20 text-center">
            <h2 className="max-w-2xl font-serif text-3xl leading-tight sm:text-4xl">
              Considering a transaction in the UAE?
            </h2>
            <p className="max-w-xl leading-relaxed text-bone/70">
              Start a confidential conversation with RV Capital’s advisory team.
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
