import Link from 'next/link';
import { HeroSection, CTASection, StatsSection, TestimonialsSection } from '@/components/sections';
import { PortfolioCard } from '@/components/cards';
import { Container, Section } from '@/components/ui';
import { FadeIn, ScaleIn } from '@/components/animations';
import { CheckCircle } from 'lucide-react';
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
        techStack={['React', 'Next.js', 'TypeScript', 'Node.js', 'Ruby on Rails', 'PostgreSQL', 'Tailwind CSS', 'SEO & Content']}
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              What I Do
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
              Two skills that most freelancers offer separately — I bring them together.
            </p>
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
                    <p className="text-slate-600 leading-relaxed text-sm">{service.description}</p>
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
                See all services →
              </Link>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Why Carl */}
      <Section variant="dark" spacing="lg">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                Why Clients Choose Me
              </h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                Most freelancers make you choose between a developer and a writer. You shouldn't have to.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {[
                {
                  title: 'One person. One brief. No handoff.',
                  body: 'When the same person builds your site and writes your content, nothing gets lost in translation. No misaligned briefs, no "that\'s not my job" — just work that ships.',
                },
                {
                  title: 'Technical writing that actually ranks.',
                  body: 'I write IT, SaaS, and eCommerce content as someone who understands the subject. Not a generalist padding word counts — real expertise that earns trust from readers and search engines.',
                },
                {
                  title: '5+ years of remote client delivery.',
                  body: 'US and European clients have relied on my work for years. I know how to communicate across time zones, hit deadlines without chasing, and deliver without hand-holding.',
                },
                {
                  title: 'Code that\'s built to be found.',
                  body: 'Every site I build is fast, accessible, and structured for search from day one — Core Web Vitals, semantic HTML, structured data. SEO isn\'t a plugin you add later; it\'s baked in.',
                },
              ].map((item, i) => (
                <ScaleIn key={i} delay={i * 100}>
                  <div className="flex gap-4 p-6 rounded-xl bg-slate-800/60 border border-slate-700 hover:border-blue-500/50 transition-colors">
                    <CheckCircle className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                </ScaleIn>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-white transition-all hover:scale-105"
              >
                Let's Work Together →
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* Featured Work */}
      <Section variant="gray" spacing="lg">
        <Container>
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Work</h2>
            <p className="text-lg text-slate-600">Results I've delivered for real clients.</p>
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
