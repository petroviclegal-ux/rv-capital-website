import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';

/**
 * Simple file-based content layer for the Insights hub.
 *
 * Articles live as Markdown files in /content/insights with YAML frontmatter.
 * To publish a new article, drop a new .md file in that folder — no code
 * changes and no external CMS required. All parsing happens at build time so
 * the output is fully static and crawlable.
 */

const INSIGHTS_DIR = path.join(process.cwd(), 'content', 'insights');

export type ArticleFrontmatter = {
  title: string;
  description: string; // used for meta description (≤155 chars) and card copy
  date: string; // ISO date, e.g. 2025-01-15
  readingTime: string; // e.g. '8 min read'
  image?: string; // feature image path in /public, e.g. /images/insight-sell.jpg
  keywords?: string[];
  // Related service/sector slugs for internal linking.
  relatedServices?: string[];
};

export type ArticleMeta = ArticleFrontmatter & { slug: string };
export type ArticleFaq = { question: string; answer: string };
export type Article = ArticleMeta & { html: string; faqs: ArticleFaq[] };

/**
 * Extract Q&A pairs from a trailing "## Frequently asked questions" section
 * (each question a `### ` heading, the answer the prose below it) so article
 * pages can emit FAQPage JSON-LD without any extra authoring work.
 */
function extractFaqs(markdown: string): ArticleFaq[] {
  const sections = markdown.split(/\n## /);
  const faqSection = sections.find((s) =>
    s.toLowerCase().startsWith('frequently asked questions'),
  );
  if (!faqSection) return [];
  const firstBreak = faqSection.indexOf('\n');
  if (firstBreak === -1) return [];

  const faqs: ArticleFaq[] = [];
  const blocks = faqSection.slice(firstBreak + 1).split(/\n### /).slice(1);
  for (const block of blocks) {
    const newline = block.indexOf('\n');
    if (newline === -1) continue;
    const question = block.slice(0, newline).trim();
    const answer = block
      .slice(newline + 1)
      .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1') // links -> plain text
      .replace(/\*\*([^*]+)\*\*/g, '$1')
      .replace(/\*([^*]+)\*/g, '$1')
      .replace(/\s+/g, ' ')
      .trim();
    if (question && answer) faqs.push({ question, answer });
  }
  return faqs;
}

function readSlugs(): string[] {
  if (!fs.existsSync(INSIGHTS_DIR)) return [];
  return fs
    .readdirSync(INSIGHTS_DIR)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/, ''));
}

export function getAllArticleSlugs(): string[] {
  return readSlugs();
}

/** All article metadata, newest first — for the Insights index and listings. */
export function getAllArticles(): ArticleMeta[] {
  return readSlugs()
    .map((slug) => {
      const raw = fs.readFileSync(path.join(INSIGHTS_DIR, `${slug}.md`), 'utf8');
      const { data } = matter(raw);
      return { slug, ...(data as ArticleFrontmatter) };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

/** Full article (metadata + rendered HTML) for a single slug. */
export async function getArticle(slug: string): Promise<Article> {
  const raw = fs.readFileSync(path.join(INSIGHTS_DIR, `${slug}.md`), 'utf8');
  const { data, content } = matter(raw);

  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeStringify)
    .process(content);

  return {
    slug,
    ...(data as ArticleFrontmatter),
    html: String(file),
    faqs: extractFaqs(content),
  };
}

/** Articles related to a service, for the service landing pages. */
export function getArticlesForService(serviceSlug: string, count = 4): ArticleMeta[] {
  return getAllArticles()
    .filter((a) => a.relatedServices?.includes(serviceSlug))
    .slice(0, count);
}

/** Return up to `count` other articles for a "related reading" block. */
export function getRelatedArticles(currentSlug: string, count = 3): ArticleMeta[] {
  return getAllArticles()
    .filter((a) => a.slug !== currentSlug)
    .slice(0, count);
}
