import { getAllPosts } from '@/lib/blog';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://elital.com';
  const posts = getAllPosts();

  // Blog posts
  const blogUrls = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}/`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  // Static pages with priorities
  const staticPages = [
    { route: '', priority: 1.0 },
    { route: '/blog', priority: 0.9 },
    { route: '/pricing', priority: 0.8 },
    { route: '/how-it-works', priority: 0.8 },
    { route: '/about', priority: 0.7 },
    { route: '/contact', priority: 0.7 },
    { route: '/careers', priority: 0.7 },
    { route: '/success-stories', priority: 0.7 },
    { route: '/legal/privacy', priority: 0.3 },
    { route: '/legal/terms', priority: 0.3 },
    { route: '/legal/cookies', priority: 0.3 }
  ].map(({ route, priority }) => ({
    url: `${baseUrl}${route}/`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority,
  }));

  return [...staticPages, ...blogUrls];
}