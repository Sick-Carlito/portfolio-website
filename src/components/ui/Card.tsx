import { ReactNode, HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg' | 'none';
}

export const Card = ({ 
  children, 
  className, 
  hover = true,
  padding = 'md',
  ...props 
}: CardProps) => {
  const paddingStyles = {
    none: '',
    sm: 'p-4 sm:p-6',
    md: 'p-6 sm:p-8',
    lg: 'p-8 sm:p-10 md:p-12'
  };

  return (
    <div
      className={cn(
        'bg-white border border-slate-200 rounded-xl',
        paddingStyles[padding],
        hover && 'hover:border-primary-400 hover:shadow-lg hover:-translate-y-1 transition-all duration-300',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};