import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';
import { getAllArticles } from '@/lib/insights';
import { services } from '@/lib/services';

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

  const serviceEntries: MetadataRoute.Sitemap = services.map((s) => ({
    url: new URL(`/services/${s.slug}/`, SITE_URL).toString(),
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.85,
  }));

  const articleEntries: MetadataRoute.Sitemap = getAllArticles().map((a) => ({
    url: new URL(`/insights/${a.slug}/`, SITE_URL).toString(),
    lastModified: new Date(a.date).toISOString(),
    changeFrequency: 'yearly',
    priority: 0.6,
  }));

  return [...staticEntries, ...serviceEntries, ...articleEntries];
}
