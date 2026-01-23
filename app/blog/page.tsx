'use client';

import { useState } from 'react';
import { Container, Section, Badge } from '@/components/ui';
import { BlogPostCard } from '@/components/cards';
import { FadeIn } from '@/components/animations';
import { blogCategories } from '@/data/blogCategories';

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Sample blog posts (we'll connect to real MDX files in Phase 7)
  const blogPosts = [
    {
      slug: 'ultimate-seo-guide-2025',
      title: 'The Ultimate Guide to SEO Content Writing in 2025',
      excerpt: 'Learn the latest strategies for creating content that ranks on Google while engaging your audience and driving conversions.',
      date: 'Jan 10, 2026',
      readTime: '8 min read',
      category: 'SEO',
      featured: true
    },
    {
      slug: 'nextjs-content-websites',
      title: 'Why Next.js is Perfect for Content-Driven Websites',
      excerpt: 'Exploring the benefits of using Next.js for building fast, SEO-friendly websites with excellent developer experience.',
      date: 'Jan 5, 2026',
      readTime: '6 min read',
      category: 'Web Development'
    },
    {
      slug: 'blog-monetization-guide',
      title: 'How I Grew My Blog to $500/Month in 6 Months',
      excerpt: 'A transparent breakdown of the strategies, tools, and mindset that helped me monetize my blog successfully.',
      date: 'Dec 28, 2025',
      readTime: '10 min read',
      category: 'Blogging',
      featured: true
    },
    {
      slug: 'content-strategy-framework',
      title: 'Building a Content Strategy That Actually Works',
      excerpt: 'Step-by-step framework for creating a content strategy that drives traffic, engagement, and business results.',
      date: 'Dec 20, 2025',
      readTime: '7 min read',
      category: 'Content Writing'
    },
    {
      slug: 'tailwind-best-practices',
      title: 'Tailwind CSS Best Practices for 2026',
      excerpt: 'Advanced tips and tricks for writing maintainable, scalable Tailwind CSS code in production applications.',
      date: 'Dec 15, 2025',
      readTime: '5 min read',
      category: 'Web Development'
    },
    {
      slug: 'keyword-research-masterclass',
      title: 'Keyword Research Masterclass for Beginners',
      excerpt: 'Everything you need to know about finding and targeting the right keywords for your content.',
      date: 'Dec 10, 2025',
      readTime: '9 min read',
      category: 'SEO'
    }
  ];

  const filteredPosts = selectedCategory === 'all'
    ? blogPosts
    : blogPosts.filter(post => post.category.toLowerCase().replace(/\s+/g, '-') === selectedCategory);

  return (
    <div className="min-h-screen">
      
      {/* Hero Section */}
      <Section variant="white" spacing="xl">
        <Container>
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                Blog
              </h1>
              <p className="text-xl sm:text-2xl text-slate-600 leading-relaxed">
                Insights on SEO, content strategy, and web development
              </p>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Category Filter */}
      <Section variant="gray" spacing="sm">
        <Container>
          <FadeIn delay={100}>
            <div className="flex flex-wrap gap-3 justify-center">
              <Badge
                variant={selectedCategory === 'all' ? 'primary' : 'secondary'}
                size="lg"
                className="cursor-pointer hover:scale-105 transition-transform"
                onClick={() => setSelectedCategory('all')}
              >
                All Posts
              </Badge>
              {blogCategories.map((category) => (
                <Badge
                  key={category.id}
                  variant={selectedCategory === category.slug ? 'primary' : 'secondary'}
                  size="lg"
                  className="cursor-pointer hover:scale-105 transition-transform"
                  onClick={() => setSelectedCategory(category.slug)}
                >
                  {category.name}
                </Badge>
              ))}
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Blog Posts Grid */}
      <Section variant="white" spacing="lg">
        <Container>
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-slate-600">No posts found in this category yet.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredPosts.map((post, index) => (
                <FadeIn key={post.slug} delay={index * 100}>
                  <BlogPostCard
                    slug={post.slug}
                    title={post.title}
                    excerpt={post.excerpt}
                    date={post.date}
                    readTime={post.readTime}
                    category={post.category}
                    featured={post.featured}
                  />
                </FadeIn>
              ))}
            </div>
          )}
        </Container>
      </Section>

      {/* Newsletter CTA */}
      <Section variant="gray" spacing="lg">
        <Container>
          <FadeIn>
            <div className="max-w-2xl mx-auto text-center bg-white p-8 sm:p-12 rounded-2xl border border-slate-200">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Stay Updated
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Get the latest articles and insights delivered directly to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all hover:scale-105">
                  Subscribe
                </button>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>

    </div>
  );
}