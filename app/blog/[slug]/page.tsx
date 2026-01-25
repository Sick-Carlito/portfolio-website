import { notFound } from 'next/navigation';
import { Container, Section, Badge } from '@/components/ui';
import { getAllBlogPosts, getBlogPostBySlug } from '@/lib/mdx';
import { formatDate } from '@/lib/utils';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; // ← Await params here
  const post = await getBlogPostBySlug(slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | YourName Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; // ← Await params here
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Back Button */}
      <Section variant="white" spacing="sm">
        <Container size="md">
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </Container>
      </Section>

      {/* Article Header */}
      <Section variant="white" spacing="lg">
        <Container size="md">
          <article>
            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <Badge variant="primary">{post.category}</Badge>
              <div className="flex items-center gap-4 text-sm text-slate-600">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {formatDate(post.date)}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              {post.excerpt}
            </p>

            {/* Divider */}
            <hr className="border-slate-200 mb-8" />

            {/* Content */}
            <div 
              className="prose prose-lg max-w-none
                prose-headings:font-bold prose-headings:text-slate-900
                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4
                prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3
                prose-p:text-slate-700 prose-p:leading-relaxed prose-p:mb-6
                prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
                prose-strong:text-slate-900 prose-strong:font-semibold
                prose-code:text-blue-600 prose-code:bg-blue-50 prose-code:px-1 prose-code:py-0.5 prose-code:rounded
                prose-pre:bg-slate-900 prose-pre:text-slate-50
                prose-ul:my-6 prose-li:my-2
                prose-img:rounded-xl prose-img:shadow-lg"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-12 pt-8 border-t border-slate-200">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" size="sm">
                      #{tag}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </article>
        </Container>
      </Section>

      {/* Author Bio */}
      <Section variant="gray" spacing="md">
        <Container size="md">
          <div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-2xl flex-shrink-0">
                Y
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">About the Author</h3>
                <p className="text-slate-600 mb-4">
                  Web Developer and Content Writer specializing in SEO-driven digital solutions. 
                  Helping businesses grow their online presence through strategic content and modern web development.
                </p>
                <Link 
                  href="/about"
                  className="text-blue-600 hover:text-blue-700 font-semibold"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Related Posts */}
      <Section variant="white" spacing="lg">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Continue Reading</h2>
            <Link 
              href="/blog"
              className="text-blue-600 hover:text-blue-700 font-semibold"
            >
              View All Posts →
            </Link>
          </div>
        </Container>
      </Section>
    </div>
  );
}