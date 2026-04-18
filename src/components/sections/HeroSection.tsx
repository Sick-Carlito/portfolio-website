import { ReactNode } from 'react';
import { Container } from '@/components/ui';
import { cn } from '@/lib/utils';

interface HeroSectionProps {
  badge?: string;
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
  techStack?: string[];
  className?: string;
}

export const HeroSection = ({
  badge,
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
  techStack,
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
          {/* Availability Badge */}
          {badge && (
            <div className="flex justify-center mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-sm font-medium">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                {badge}
              </span>
            </div>
          )}

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
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
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

          {/* Tech Stack */}
          {techStack && techStack.length > 0 && (
            <div className="border-t border-slate-700/60 pt-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">
                Built with
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {techStack.map((tech, i) => {
                  const colors = [
                    'bg-blue-500/20 text-blue-300 border-blue-500/40 hover:bg-blue-500/30',
                    'bg-violet-500/20 text-violet-300 border-violet-500/40 hover:bg-violet-500/30',
                    'bg-cyan-500/20 text-cyan-300 border-cyan-500/40 hover:bg-cyan-500/30',
                    'bg-emerald-500/20 text-emerald-300 border-emerald-500/40 hover:bg-emerald-500/30',
                    'bg-rose-500/20 text-rose-300 border-rose-500/40 hover:bg-rose-500/30',
                    'bg-amber-500/20 text-amber-300 border-amber-500/40 hover:bg-amber-500/30',
                    'bg-pink-500/20 text-pink-300 border-pink-500/40 hover:bg-pink-500/30',
                    'bg-teal-500/20 text-teal-300 border-teal-500/40 hover:bg-teal-500/30',
                  ];
                  return (
                    <span
                      key={tech}
                      className={`px-3 py-1.5 rounded-md text-xs font-semibold border transition-colors ${colors[i % colors.length]}`}
                    >
                      {tech}
                    </span>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};