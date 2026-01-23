import { Container, Section } from '@/components/ui';
import { ServiceCard } from '@/components/cards';
import { CTASection } from '@/components/sections';
import { FadeIn, ScaleIn } from '@/components/animations';
import { services } from '@/data/services';

export const metadata = {
  title: 'Services | YourName',
  description: 'Professional web development and content writing services to grow your online presence.',
};

export default function ServicesPage() {
  const packages = [
    {
      name: 'Starter Package',
      price: '$500',
      period: 'one-time',
      description: 'Perfect for small businesses getting started',
      features: [
        'Single-page website',
        '3 blog articles',
        'Basic SEO setup',
        'Mobile responsive',
        '1 month support'
      ],
      popular: false
    },
    {
      name: 'Growth Package',
      price: '$1,500',
      period: 'one-time',
      description: 'For businesses ready to scale',
      features: [
        'Multi-page website',
        '10 blog articles',
        'Advanced SEO',
        'Performance optimization',
        'Analytics setup',
        '3 months support'
      ],
      popular: true
    },
    {
      name: 'Enterprise Package',
      price: '$3,500+',
      period: 'project-based',
      description: 'Custom solutions for established businesses',
      features: [
        'Custom web application',
        'Content strategy & calendar',
        'Technical SEO audit',
        'Conversion optimization',
        'Ongoing consultation',
        '6 months support'
      ],
      popular: false
    }
  ];

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

      {/* Pricing Packages */}
      <Section variant="white" spacing="lg">
        <Container>
          <div className="text-center mb-12 sm:mb-16">
            <FadeIn>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                Pricing Packages
              </h2>
              <p className="text-lg sm:text-xl text-slate-600">
                Flexible options to fit your needs and budget
              </p>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <ScaleIn key={index} delay={index * 150}>
                <div className={`
                  bg-white p-6 sm:p-8 rounded-xl border-2 transition-all
                  ${pkg.popular 
                    ? 'border-blue-600 shadow-xl scale-105' 
                    : 'border-slate-200 hover:border-blue-400 hover:shadow-lg'
                  }
                `}>
                  {pkg.popular && (
                    <div className="bg-blue-600 text-white text-sm font-bold px-4 py-2 rounded-full inline-block mb-4">
                      Most Popular
                    </div>
                  )}
                  
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-blue-600">{pkg.price}</span>
                    <span className="text-slate-600 ml-2">/ {pkg.period}</span>
                  </div>
                  <p className="text-slate-600 mb-6">{pkg.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    href="/contact"
                    className={`
                      block w-full text-center px-6 py-3 rounded-lg font-semibold transition-all
                      ${pkg.popular
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50'
                      }
                    `}
                  >
                    Get Started
                  </a>
                </div>
              </ScaleIn>
            ))}
          </div>

          <FadeIn delay={600}>
            <div className="text-center mt-12">
              <p className="text-slate-600 mb-4">Need a custom solution?</p>
              <a 
                href="/contact"
                className="inline-block px-8 py-4 border-2 border-slate-300 hover:border-blue-600 hover:text-blue-600 rounded-lg font-semibold transition-all hover:scale-105"
              >
                Contact for Custom Quote
              </a>
            </div>
          </FadeIn>
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