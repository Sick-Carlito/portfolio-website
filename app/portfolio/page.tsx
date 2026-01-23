import { Container, Section } from '@/components/ui';
import { PortfolioCard } from '@/components/cards';
import { CTASection } from '@/components/sections';
import { FadeIn } from '@/components/animations';
import { portfolioItems } from '@/data/portfolio';

export const metadata = {
  title: 'Portfolio | YourName',
  description: 'View my latest web development and content writing projects.',
};

export default function PortfolioPage() {
  const featuredItems = portfolioItems.filter(item => item.featured);
  const otherItems = portfolioItems.filter(item => !item.featured);

  return (
    <div className="min-h-screen">
      
      {/* Hero Section */}
      <Section variant="white" spacing="xl">
        <Container>
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                Portfolio
              </h1>
              <p className="text-xl sm:text-2xl text-slate-600 leading-relaxed">
                Selected work showcasing my expertise in content writing and web development
              </p>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Featured Projects */}
      {featuredItems.length > 0 && (
        <Section variant="gray" spacing="lg">
          <Container>
            <div className="mb-12">
              <FadeIn>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
                <p className="text-lg text-slate-600">Highlighted case studies and success stories</p>
              </FadeIn>
            </div>

            <div className="space-y-8 lg:space-y-12">
              {featuredItems.map((item, index) => (
                <FadeIn key={item.slug} delay={index * 200}>
                  <PortfolioCard
                    slug={item.slug}
                    category={item.category}
                    title={item.title}
                    description={item.description}
                    metrics={item.metrics}
                    tags={item.tags}
                    featured={item.featured}
                  />
                </FadeIn>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* All Projects */}
      <Section variant="white" spacing="lg">
        <Container>
          <div className="mb-12">
            <FadeIn>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">All Projects</h2>
              <p className="text-lg text-slate-600">Explore more of my work</p>
            </FadeIn>
          </div>

          <div className="space-y-8 lg:space-y-12">
            {otherItems.map((item, index) => (
              <FadeIn key={item.slug} delay={index * 150}>
                <PortfolioCard
                  slug={item.slug}
                  category={item.category}
                  title={item.title}
                  description={item.description}
                  metrics={item.metrics}
                  tags={item.tags}
                />
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <CTASection
        title="Like What You See?"
        description="Let's work together to create something amazing for your business."
        primaryCTA={{
          text: 'Start Your Project',
          href: '/contact'
        }}
        secondaryCTA={{
          text: 'View Services',
          href: '/services'
        }}
        variant="gradient"
      />

    </div>
  );
}