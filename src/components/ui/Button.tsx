import { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  fullWidth?: boolean;
}

export const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className,
  fullWidth = false,
  disabled,
  ...props 
}: ButtonProps) => {
  const baseStyles = 'font-semibold rounded-lg transition-all duration-300 inline-flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed active:scale-95';
  
  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white hover:shadow-lg hover:scale-105',
    secondary: 'bg-slate-200 hover:bg-slate-300 text-slate-900 hover:shadow-md hover:scale-105',
    outline: 'border-2 border-slate-300 hover:border-blue-600 hover:text-blue-600 bg-transparent hover:scale-105',
    ghost: 'hover:bg-slate-100 text-slate-700 hover:text-slate-900'
  };
  
  const sizes = {
    sm: 'px-3 py-2 text-sm sm:px-4',
    md: 'px-4 py-2.5 text-base sm:px-6 sm:py-3',
    lg: 'px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg'
  };

  return (
    <button
      className={cn(
        baseStyles, 
        variants[variant], 
        sizes[size],
        fullWidth && 'w-full',
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};