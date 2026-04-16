import Link from 'next/link';
import { HeroSection, CTASection, StatsSection, TestimonialsSection } from '@/components/sections';
import { PortfolioCard } from '@/components/cards';
import { Container, Section } from '@/components/ui';
import { FadeIn, ScaleIn } from '@/components/animations';
import { services } from '@/data/services';
import { portfolioItems } from '@/data/portfolio';
import { testimonials } from '@/data/testimonials';

export default function HomePage() {
  const stats = [
    { value: '5+', label: 'Years Experience' },
    { value: '200+', label: 'Articles Published' },
    { value: '1,300+', label: 'Training Hours' },
  ];

  const featuredWork = portfolioItems.filter(item => item.featured);

  return (
    <div className="min-h-screen">

      {/* Hero */}
      <HeroSection
        badge="Available for new projects"
        title={
          <>
            I Build Websites That{' '}
            <span className="text-blue-400">Rank & Convert</span>
          </>
        }
        subtitle="Most developers can't write. Most writers can't build. I do both — combining Next.js development with SEO-driven content to help clients grow online."
        primaryCTA={{ text: 'Hire Me', href: '/contact' }}
        secondaryCTA={{ text: 'View My Work', href: '/portfolio' }}
      />

      {/* Stats */}
      <StatsSection
        stats={stats}
        variant="light"
        columns={3}
      />

      {/* Services — quick overview */}
      <Section variant="white" spacing="lg">
        <Container>
          <div className="text-center mb-12 sm:mb-16">
            <FadeIn>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                What I Do
              </h2>
              <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
                Two skills that most freelancers offer separately — I bring them together.
              </p>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <ScaleIn key={service.id} delay={index * 150}>
                  <div className="bg-slate-50 p-6 sm:p-8 rounded-xl border border-slate-200 hover:shadow-lg hover:-translate-y-1 transition-all">
                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-slate-600 leading-relaxed text-sm mb-5">{service.description}</p>
                    {service.pricing && (
                      <p className="text-sm font-semibold text-blue-600">
                        From ${service.pricing.starting.toLocaleString()} {service.pricing.package}
                      </p>
                    )}
                  </div>
                </ScaleIn>
              );
            })}
          </div>

          <FadeIn delay={400}>
            <div className="text-center mt-10">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline"
              >
                See full pricing & packages →
              </Link>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Featured Work */}
      <Section variant="gray" spacing="lg">
        <Container>
          <div className="mb-12">
            <FadeIn>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Work</h2>
              <p className="text-lg text-slate-600">Results I've delivered for real clients.</p>
            </FadeIn>
          </div>

          <div className="space-y-8 lg:space-y-10">
            {featuredWork.map((item, index) => (
              <FadeIn key={item.slug} delay={index * 150}>
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

          <FadeIn delay={300}>
            <div className="text-center mt-12">
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-slate-300 hover:border-blue-600 hover:text-blue-600 rounded-lg font-semibold transition-all hover:scale-105"
              >
                View All Work →
              </Link>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Testimonials */}
      <TestimonialsSection
        testimonials={testimonials}
        title="What Clients Say"
        description="Results speak louder than promises"
      />

      {/* CTA */}
      <CTASection
        title="Ready to Grow Your Online Presence?"
        description="Whether you need a fast, well-built website or content that actually ranks — let's talk about your project."
        primaryCTA={{ text: 'Start a Project', href: '/contact' }}
        secondaryCTA={{ text: 'View Services', href: '/services' }}
        variant="gradient"
      />

    </div>
  );
}
