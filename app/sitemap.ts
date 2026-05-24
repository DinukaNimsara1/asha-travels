import { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const routes = [
    '',
    '/about',
    '/destinations',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const destinationRoutes = siteConfig.destinations.map((dest) => ({
    url: `${baseUrl}/destinations/${dest.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...routes, ...destinationRoutes];
}
