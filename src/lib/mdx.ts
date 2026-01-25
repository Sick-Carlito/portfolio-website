import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import { BlogPost, BlogMetadata, PortfolioItem } from '@/types';
import { calculateReadingTime } from './utils';

const contentDirectory = path.join(process.cwd(), 'src/content');

/**
 * Configure marked for better HTML output
 */
marked.setOptions({
  gfm: true,
  breaks: true,
});

/**
 * Get all blog posts
 * @returns Array of blog posts sorted by date
 */
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const blogDir = path.join(contentDirectory, 'blog');
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(blogDir)) {
    fs.mkdirSync(blogDir, { recursive: true });
    return [];
  }

  const fileNames = fs.readdirSync(blogDir);
  
  const posts = fileNames
    .filter(fileName => fileName.endsWith('.mdx') || fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.(mdx|md)$/, '');
      const fullPath = path.join(blogDir, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title,
        excerpt: data.excerpt,
        content: marked(content), // Convert markdown to HTML
        date: data.date,
        category: data.category,
        author: data.author || 'Your Name',
        readTime: calculateReadingTime(content),
        tags: data.tags || [],
        featured: data.featured || false,
        image: data.image || '',
      } as BlogPost;
    });

  return posts.sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

/**
 * Get a single blog post by slug
 * @param slug - Post slug
 * @returns Blog post or null
 */
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const posts = await getAllBlogPosts();
  return posts.find(post => post.slug === slug) || null;
}

/**
 * Get featured blog posts
 * @param limit - Number of posts to return
 * @returns Array of featured blog posts
 */
export async function getFeaturedBlogPosts(limit: number = 3): Promise<BlogPost[]> {
  const posts = await getAllBlogPosts();
  return posts.filter(post => post.featured).slice(0, limit);
}

/**
 * Get blog posts by category
 * @param category - Category slug
 * @returns Array of blog posts in category
 */
export async function getBlogPostsByCategory(category: string): Promise<BlogPost[]> {
  const posts = await getAllBlogPosts();
  return posts.filter(post => post.category.toLowerCase() === category.toLowerCase());
}

/**
 * Get all portfolio items
 * @returns Array of portfolio items
 */
export async function getAllPortfolioItems(): Promise<PortfolioItem[]> {
  const portfolioDir = path.join(contentDirectory, 'portfolio');
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(portfolioDir)) {
    fs.mkdirSync(portfolioDir, { recursive: true });
    return [];
  }

  const fileNames = fs.readdirSync(portfolioDir);
  
  const items = fileNames
    .filter(fileName => fileName.endsWith('.mdx') || fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.(mdx|md)$/, '');
      const fullPath = path.join(portfolioDir, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        category: data.category,
        title: data.title,
        description: data.description,
        metrics: data.metrics,
        content: marked(content), // Convert markdown to HTML
        tags: data.tags || [],
        client: data.client || '',
        year: data.year || '',
        featured: data.featured || false,
        image: data.image || '',
        link: data.link || '',
      } as PortfolioItem;
    });

  return items;
}

/**
 * Get a single portfolio item by slug
 * @param slug - Portfolio item slug
 * @returns Portfolio item or null
 */
export async function getPortfolioItemBySlug(slug: string): Promise<PortfolioItem | null> {
  const items = await getAllPortfolioItems();
  return items.find(item => item.slug === slug) || null;
}