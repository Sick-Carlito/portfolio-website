import { notFound } from 'next/navigation';
import { Container, Section, Badge } from '@/components/ui';
import { getAllBlogPosts, getBlogPostBySlug } from '@/lib/mdx';
import { formatDate } from '@/lib/utils';
import { Calendar, Clock, ArrowLeft, Share2, BookmarkPlus, Twitter, Linkedin, Facebook } from 'lucide-react';
import Link from 'next/link';

export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  
  if (!post) {
    return { title: 'Post Not Found' };
  }

  return {
    title: `${post.title} | YourName Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50">
      
      {/* Hero Section with Gradient Background */}
      <Section variant="white" spacing="lg" className="bg-gradient-to-b from-slate-900 to-slate-800 text-white">
        <Container size="md">
          {/* Back Button */}
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          {/* Category Badge */}
          <div className="mb-6">
            <Badge variant="primary" size="lg" className="bg-blue-600 text-white">
              {post.category}
            </Badge>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed max-w-3xl">
            {post.excerpt}
          </p>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm sm:text-base text-slate-300">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>{formatDate(post.date)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>{post.readTime}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-slate-400">By</span>
              <span className="font-semibold">{post.author}</span>
            </div>
          </div>
        </Container>
      </Section>

      {/* Main Content */}
      <Section variant="white" spacing="lg">
        <Container size="md">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Sticky Sidebar - Social Share */}
            <aside className="hidden lg:block lg:col-span-2">
              <div className="sticky top-24 space-y-4">
                <p className="text-sm font-semibold text-slate-600 mb-4">Share this</p>
                <div className="flex lg:flex-col gap-3">
                  <button className="w-10 h-10 bg-slate-100 hover:bg-blue-600 hover:text-white rounded-lg flex items-center justify-center transition-all hover:scale-110">
                    <Twitter className="w-5 h-5" />
                  </button>
                  <button className="w-10 h-10 bg-slate-100 hover:bg-blue-700 hover:text-white rounded-lg flex items-center justify-center transition-all hover:scale-110">
                    <Linkedin className="w-5 h-5" />
                  </button>
                  <button className="w-10 h-10 bg-slate-100 hover:bg-blue-500 hover:text-white rounded-lg flex items-center justify-center transition-all hover:scale-110">
                    <Facebook className="w-5 h-5" />
                  </button>
                  <button className="w-10 h-10 bg-slate-100 hover:bg-slate-800 hover:text-white rounded-lg flex items-center justify-center transition-all hover:scale-110">
                    <BookmarkPlus className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </aside>

            {/* Article Content */}
            <article className="lg:col-span-10">
              {/* Beautiful Prose Styling */}
              <div 
                className="
                  prose prose-lg prose-slate max-w-none
                  
                  /* Headings */
                  prose-headings:scroll-mt-24
                  prose-headings:font-bold 
                  prose-headings:text-slate-900
                  prose-h1:text-4xl prose-h1:mb-6 prose-h1:mt-12
                  prose-h2:text-3xl prose-h2:mb-4 prose-h2:mt-12 prose-h2:pb-2 prose-h2:border-b prose-h2:border-slate-200
                  prose-h3:text-2xl prose-h3:mb-3 prose-h3:mt-8
                  prose-h4:text-xl prose-h4:mb-2 prose-h4:mt-6
                  
                  /* Paragraphs */
                  prose-p:text-slate-700 
                  prose-p:leading-relaxed 
                  prose-p:mb-6
                  prose-p:text-lg
                  
                  /* Links */
                  prose-a:text-blue-600 
                  prose-a:no-underline 
                  prose-a:font-medium
                  hover:prose-a:text-blue-700
                  hover:prose-a:underline
                  prose-a:transition-colors
                  
                  /* Strong/Bold */
                  prose-strong:text-slate-900 
                  prose-strong:font-semibold
                  
                  /* Code */
                  prose-code:text-blue-700
                  prose-code:bg-blue-50 
                  prose-code:px-1.5 
                  prose-code:py-0.5 
                  prose-code:rounded
                  prose-code:font-mono
                  prose-code:text-sm
                  prose-code:before:content-['']
                  prose-code:after:content-['']
                  
                  /* Code Blocks */
                  prose-pre:bg-slate-900 
                  prose-pre:text-slate-50
                  prose-pre:rounded-xl
                  prose-pre:shadow-lg
                  prose-pre:border
                  prose-pre:border-slate-700
                  
                  /* Lists */
                  prose-ul:my-6 
                  prose-ul:space-y-2
                  prose-li:my-2
                  prose-li:text-slate-700
                  prose-li:text-lg
                  prose-li:marker:text-blue-600
                  
                  /* Ordered Lists */
                  prose-ol:my-6
                  prose-ol:space-y-2
                  
                  /* Blockquotes */
                  prose-blockquote:border-l-4
                  prose-blockquote:border-blue-600
                  prose-blockquote:bg-blue-50
                  prose-blockquote:py-4
                  prose-blockquote:px-6
                  prose-blockquote:my-8
                  prose-blockquote:rounded-r-lg
                  prose-blockquote:italic
                  prose-blockquote:text-slate-700
                  
                  /* Images */
                  prose-img:rounded-xl 
                  prose-img:shadow-2xl
                  prose-img:my-8
                  prose-img:border
                  prose-img:border-slate-200
                  
                  /* Tables */
                  prose-table:border-collapse
                  prose-table:my-8
                  prose-th:bg-slate-100
                  prose-th:font-semibold
                  prose-th:text-left
                  prose-th:p-3
                  prose-th:border
                  prose-th:border-slate-300
                  prose-td:p-3
                  prose-td:border
                  prose-td:border-slate-200
                  
                  /* Horizontal Rules */
                  prose-hr:my-12
                  prose-hr:border-slate-300
                "
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Tags Section */}
              {post.tags && post.tags.length > 0 && (
                <div className="mt-16 pt-8 border-t-2 border-slate-200">
                  <h3 className="text-sm font-semibold text-slate-600 mb-4">Tagged with</h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <Badge 
                        key={index} 
                        variant="secondary" 
                        size="md"
                        className="hover:scale-105 transition-transform cursor-pointer"
                      >
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Mobile Share Buttons */}
              <div className="lg:hidden mt-12 pt-8 border-t-2 border-slate-200">
                <p className="text-sm font-semibold text-slate-600 mb-4">Share this article</p>
                <div className="flex gap-3">
                  <button className="flex-1 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center justify-center gap-2 transition-colors">
                    <Twitter className="w-5 h-5" />
                    <span className="text-sm font-medium">Twitter</span>
                  </button>
                  <button className="flex-1 px-4 py-3 bg-blue-700 hover:bg-blue-800 text-white rounded-lg flex items-center justify-center gap-2 transition-colors">
                    <Linkedin className="w-5 h-5" />
                    <span className="text-sm font-medium">LinkedIn</span>
                  </button>
                </div>
              </div>
            </article>
          </div>
        </Container>
      </Section>

      {/* Author Bio */}
      <Section variant="gray" spacing="md">
        <Container size="md">
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col sm:flex-row items-start gap-6">
              {/* Avatar */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-3xl flex-shrink-0 shadow-lg">
                Y
              </div>
              
              {/* Bio */}
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-1">
                      About {post.author}
                    </h3>
                    <p className="text-sm text-slate-500">Author</p>
                  </div>
                </div>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Web Developer and Content Writer specializing in SEO-driven digital solutions. 
                  Helping businesses grow their online presence through strategic content and modern web development.
                </p>
                <Link 
                  href="/about"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                >
                  Learn More About Me
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Newsletter CTA */}
      <Section variant="white" spacing="md">
        <Container size="md">
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 sm:p-12 rounded-2xl text-white text-center shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Enjoyed this article?
            </h2>
            <p className="text-lg text-blue-50 mb-6 max-w-2xl mx-auto">
              Get more insights like this delivered to your inbox. Join 1,000+ readers.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all hover:scale-105 whitespace-nowrap">
                Subscribe Free
              </button>
            </div>
            <p className="text-xs text-blue-100 mt-3">No spam. Unsubscribe anytime.</p>
          </div>
        </Container>
      </Section>

      {/* Related/Continue Reading */}
      <Section variant="gray" spacing="lg">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Continue Reading</h2>
            <p className="text-lg text-slate-600 mb-8">Explore more articles on {post.category}</p>
            <Link 
              href="/blog"
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all hover:scale-105 shadow-lg"
            >
              View All Posts
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </Container>
      </Section>

    </div>
  );
}