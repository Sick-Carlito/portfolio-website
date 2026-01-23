import { HeroSection, CTASection, StatsSection, ServicesSection } from '@/components/sections';
import { services } from '@/data/services';

export default function HomePage() {
  const stats = [
    { value: '200+', label: 'Articles Published' },
    { value: '30+', label: 'Websites Built' },
    { value: '100%', label: 'Client Satisfaction' },
  ];

  return (
    <div className="min-h-screen">
      
      {/* Hero Section */}
      <HeroSection
        title={
          <>
            Welcome to Your <span className="text-blue-400">Portfolio</span>
          </>
        }
        subtitle="Web Developer & Content Writer specializing in SEO-driven digital solutions"
        primaryCTA={{
          text: 'Start a Project',
          href: '/contact'
        }}
        secondaryCTA={{
          text: 'View Portfolio',
          href: '/portfolio'
        }}
      />

      {/* Services Section */}
      <ServicesSection
        services={services}
        title="What I Do"
        description="Strategic solutions for digital growth"
      />

      {/* Stats Section */}
      <StatsSection
        stats={stats}
        variant="light"
        columns={3}
      />

      {/* CTA Section */}
      <CTASection
        title="Ready to Start Your Project?"
        description="Let's work together to create something amazing. Get in touch today and let's discuss your goals."
        primaryCTA={{
          text: 'Get Started Today',
          href: '/contact'
        }}
        variant="gradient"
      />

    </div>
  );
}