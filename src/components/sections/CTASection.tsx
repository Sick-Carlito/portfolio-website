import { ReactNode } from 'react';
import { Container } from '@/components/ui';
import { cn } from '@/lib/utils';

interface CTASectionProps {
  title: string | ReactNode;
  description?: string | ReactNode;
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  variant?: 'gradient' | 'solid' | 'light';
  className?: string;
}

export const CTASection = ({
  title,
  description,
  primaryCTA,
  secondaryCTA,
  variant = 'gradient',
  className
}: CTASectionProps) => {
  const variants = {
    gradient: 'bg-gradient-to-r from-blue-600 to-blue-700 text-white',
    solid: 'bg-blue-600 text-white',
    light: 'bg-blue-50 text-slate-900'
  };

  const buttonVariants = {
    gradient: 'bg-white text-blue-600 hover:bg-blue-50',
    solid: 'bg-white text-blue-600 hover:bg-blue-50',
    light: 'bg-blue-600 text-white hover:bg-blue-700'
  };

  return (
    <section className={cn('py-16 sm:py-20 md:py-24', variants[variant], className)}>
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            {title}
          </h2>
          
          {description && (
            <p className={cn(
              'text-lg sm:text-xl mb-8',
              variant === 'light' ? 'text-slate-600' : 'text-blue-50'
            )}>
              {description}
            </p>
          )}

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={primaryCTA.href}
              className={cn(
                'inline-block px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold',
                'transition-all hover:scale-105 hover:shadow-xl',
                buttonVariants[variant]
              )}
            >
              {primaryCTA.text}
            </a>
            
            {secondaryCTA && (
              <a 
                href={secondaryCTA.href}
                className={cn(
                  'inline-block px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold',
                  'border-2 transition-all hover:scale-105',
                  variant === 'light' 
                    ? 'border-blue-600 text-blue-600 hover:bg-blue-50'
                    : 'border-white/30 hover:bg-white/10'
                )}
              >
                {secondaryCTA.text}
              </a>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};