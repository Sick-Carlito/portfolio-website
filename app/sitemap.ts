import { MetadataRoute } from 'next';
import { getAllBlogPosts } from '@/lib/mdx';
import { portfolioItems } from '@/data/portfolio';
import { siteConfig } from '@/data/siteConfig';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogPosts = await getAllBlogPosts();
  
  // Static pages
  const staticPages = [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${siteConfig.url}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/portfolio`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ];

  // Blog post pages
  const blogPages = blogPosts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Portfolio pages
  const portfolioPages = portfolioItems.map((item) => ({
    url: `${siteConfig.url}/portfolio/${item.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...staticPages, ...blogPages, ...portfolioPages];
}