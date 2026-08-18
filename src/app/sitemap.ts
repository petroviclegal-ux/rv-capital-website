import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';
import { getAllArticleSlugs } from '@/lib/insights';

// Generated automatically at build → /sitemap.xml (works with static export).
export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const staticPaths = [
    { path: '/', priority: 1.0, changeFrequency: 'monthly' as const },
    { path: '/about/', priority: 0.8, changeFrequency: 'yearly' as const },
    { path: '/services/', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/track-record/', priority: 0.8, changeFrequency: 'yearly' as const },
    { path: '/sectors/', priority: 0.7, changeFrequency: 'yearly' as const },
    { path: '/insights/', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/contact/', priority: 0.6, changeFrequency: 'yearly' as const },
  ];

  const staticEntries: MetadataRoute.Sitemap = staticPaths.map((p) => ({
    url: new URL(p.path, SITE_URL).toString(),
    lastModified: now,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));

  const articleEntries: MetadataRoute.Sitemap = getAllArticleSlugs().map((slug) => ({
    url: new URL(`/insights/${slug}/`, SITE_URL).toString(),
    lastModified: now,
    changeFrequency: 'yearly',
    priority: 0.6,
  }));

  return [...staticEntries, ...articleEntries];
}
