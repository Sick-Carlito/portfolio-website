import { ReactNode } from 'react';
import { Container } from '@/components/ui';
import { cn } from '@/lib/utils';

interface Stat {
  value: string | number;
  label: string;
  icon?: ReactNode;
}

interface StatsSectionProps {
  stats: Stat[];
  title?: string;
  description?: string;
  variant?: 'light' | 'white';
  columns?: 2 | 3 | 4;
  className?: string;
}

export const StatsSection = ({
  stats,
  title,
  description,
  variant = 'light',
  columns = 3,
  className
}: StatsSectionProps) => {
  const gridCols = {
    2: 'sm:grid-cols-2',
    3: 'sm:grid-cols-2 lg:grid-cols-3',
    4: 'sm:grid-cols-2 lg:grid-cols-4'
  };

  return (
    <section 
      className={cn(
        'py-16 sm:py-20',
        variant === 'light' ? 'bg-slate-50' : 'bg-white',
        className
      )}
    >
      <Container>
        {(title || description) && (
          <div className="text-center mb-12 sm:mb-16">
            {title && (
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">{title}</h2>
            )}
            {description && (
              <p className="text-lg sm:text-xl text-slate-600">{description}</p>
            )}
          </div>
        )}

        <div className={cn(
          'grid grid-cols-1 gap-6 sm:gap-8',
          gridCols[columns],
          'max-w-5xl mx-auto'
        )}>
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 hover:scale-105 transition-transform"
            >
              {stat.icon && (
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
              )}
              <div className="text-4xl sm:text-5xl font-bold text-blue-600 mb-2">
                {stat.value}
              </div>
              <div className="text-slate-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};