import { Container, Section } from '@/components/ui';
import { ServiceCard } from '@/components/cards';
import { CTASection } from '@/components/sections';
import { FadeIn, ScaleIn } from '@/components/animations';
import { services } from '@/data/services';

export const metadata = {
  title: 'Services | Carl Bond',
  description: 'Full-stack development and SEO content writing services by Carl Bond — available for freelance projects.',
};

export default function ServicesPage() {
  const process = [
    {
      step: '01',
      title: 'Discovery',
      description: 'We discuss your goals, target audience, and project requirements to create a clear roadmap.'
    },
    {
      step: '02',
      title: 'Strategy',
      description: 'I develop a comprehensive plan including content strategy, technical approach, and timeline.'
    },
    {
      step: '03',
      title: 'Execution',
      description: 'Building your website and creating content with regular updates and collaboration.'
    },
    {
      step: '04',
      title: 'Launch & Optimize',
      description: 'Thorough testing, launch, and ongoing optimization based on performance data.'
    }
  ];

  return (
    <div className="min-h-screen">
      
      {/* Hero Section */}
      <Section variant="white" spacing="xl">
        <Container>
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                Services
              </h1>
              <p className="text-xl sm:text-2xl text-slate-600 leading-relaxed">
                Comprehensive digital solutions tailored to help your business grow online
              </p>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Services Grid */}
      <Section variant="gray" spacing="lg">
        <Container>
          <div className="text-center mb-12 sm:mb-16">
            <FadeIn>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                What I Offer
              </h2>
              <p className="text-lg sm:text-xl text-slate-600">
                Expert services to elevate your digital presence
              </p>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <ScaleIn key={service.id} delay={index * 150}>
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  features={service.features}
                />
              </ScaleIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* Process Section */}
      <Section variant="gray" spacing="lg">
        <Container>
          <div className="text-center mb-12 sm:mb-16">
            <FadeIn>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                How I Work
              </h2>
              <p className="text-lg sm:text-xl text-slate-600">
                A proven process for successful projects
              </p>
            </FadeIn>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {process.map((item, index) => (
              <ScaleIn key={index} delay={index * 150}>
                <div className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow-lg hover:-translate-y-1 transition-all relative">
                  <div className="text-6xl font-bold text-blue-100 mb-4">{item.step}</div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.description}</p>
                  
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <svg className="w-8 h-8 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}
                </div>
              </ScaleIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Get Started?"
        description="Let's discuss your project and how I can help you achieve your goals."
        primaryCTA={{
          text: 'Contact Me Today',
          href: '/contact'
        }}
        secondaryCTA={{
          text: 'View Portfolio',
          href: '/portfolio'
        }}
        variant="gradient"
      />

    </div>
  );
}