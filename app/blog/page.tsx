import { Container, Section, Badge } from '@/components/ui';
import { BlogPostCard } from '@/components/cards';
import { FadeIn } from '@/components/animations';
import { getAllBlogPosts } from '@/lib/mdx';

export const metadata = {
  title: 'Blog | YourName',
  description: 'Insights on SEO, content strategy, and web development.',
};

export default async function BlogPage() {
  const blogPosts = await getAllBlogPosts();
  const categories = ['All', 'SEO', 'Web Development', 'Content Writing', 'Blogging'];

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

      {/* Blog Posts Grid */}
      <Section variant="gray" spacing="lg">
        <Container>
          {blogPosts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-slate-600 mb-4">No posts yet.</p>
              <p className="text-slate-500">Check back soon for the latest articles!</p>
            </div>
          ) : (
            <>
              {/* Featured Posts */}
              {blogPosts.some(post => post.featured) && (
                <div className="mb-16">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-8">Featured Posts</h2>
                  <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                    {blogPosts
                      .filter(post => post.featured)
                      .map((post, index) => (
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
                </div>
              )}

              {/* All Posts */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-8">All Posts</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                  {blogPosts.map((post, index) => (
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
              </div>
            </>
          )}
        </Container>
      </Section>

      {/* Newsletter CTA */}
      <Section variant="white" spacing="lg">
        <Container>
          <FadeIn>
            <div className="max-w-2xl mx-auto text-center bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 sm:p-12 rounded-2xl">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Stay Updated
              </h2>
              <p className="text-lg text-blue-50 mb-6">
                Get the latest articles delivered directly to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all">
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