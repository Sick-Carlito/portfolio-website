import { ReactNode, HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'info';
  size?: 'sm' | 'md' | 'lg';
}

export const Badge = ({ 
  children, 
  className,
  variant = 'primary',
  size = 'md',
  ...props 
}: BadgeProps) => {
  const variants = {
    primary: 'bg-blue-50 text-blue-700 hover:bg-blue-100',
    secondary: 'bg-slate-100 text-slate-700 hover:bg-slate-200',
    success: 'bg-green-50 text-green-700 hover:bg-green-100',
    warning: 'bg-yellow-50 text-yellow-700 hover:bg-yellow-100',
    info: 'bg-blue-50 text-blue-700 hover:bg-blue-100'
  };

  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-1.5 text-base'
  };

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full font-medium transition-colors duration-200',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};