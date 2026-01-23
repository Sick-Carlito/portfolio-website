import { ReactNode } from 'react';
import { Container } from '@/components/ui';
import { cn } from '@/lib/utils';

interface HeroSectionProps {
  title: string | ReactNode;
  subtitle: string | ReactNode;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  className?: string;
}

export const HeroSection = ({
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
  className
}: HeroSectionProps) => {
  return (
    <section 
      className={cn(
        'relative min-h-[calc(100vh-5rem)] flex items-center justify-center',
        'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white',
        className
      )}
    >
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <Container className="py-20 sm:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            {title}
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-10 max-w-2xl mx-auto">
            {subtitle}
          </p>

          {/* CTAs */}
          {(primaryCTA || secondaryCTA) && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {primaryCTA && (
                <a 
                  href={primaryCTA.href}
                  className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all hover:scale-105 hover:shadow-xl text-center"
                >
                  {primaryCTA.text}
                </a>
              )}
              {secondaryCTA && (
                <a 
                  href={secondaryCTA.href}
                  className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 border-2 border-slate-600 hover:border-slate-500 rounded-lg font-semibold transition-all hover:scale-105 text-center"
                >
                  {secondaryCTA.text}
                </a>
              )}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};