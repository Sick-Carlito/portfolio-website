import { ReactNode, HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  variant?: 'white' | 'gray' | 'dark';
  spacing?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Section = ({ 
  children, 
  className,
  variant = 'white',
  spacing = 'lg',
  ...props 
}: SectionProps) => {
  const variants = {
    white: 'bg-white',
    gray: 'bg-slate-50',
    dark: 'bg-slate-900 text-white'
  };

  const spacings = {
    sm: 'py-8 sm:py-12',
    md: 'py-12 sm:py-16 md:py-20',
    lg: 'py-16 sm:py-20 md:py-24',
    xl: 'py-20 sm:py-24 md:py-32'
  };

  return (
    <section
      className={cn(
        variants[variant],
        spacings[spacing],
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
};