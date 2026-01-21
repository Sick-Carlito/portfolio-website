import { ReactNode, HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  noPadding?: boolean;
}

export const Container = ({ 
  children, 
  className, 
  size = 'lg',
  noPadding = false,
  ...props 
}: ContainerProps) => {
  const sizes = {
    sm: 'max-w-2xl',
    md: 'max-w-4xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    full: 'max-w-full'
  };

  return (
    <div 
      className={cn(
        'mx-auto w-full',
        sizes[size],
        !noPadding && 'px-4 sm:px-6 lg:px-8',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};