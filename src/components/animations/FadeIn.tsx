'use client';

import { ReactNode, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
  duration?: number;
}

export const FadeIn = ({ 
  children, 
  delay = 0,
  direction = 'up',
  className,
  duration = 1000
}: FadeInProps) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const directionClasses = {
    up: 'translate-y-8',
    down: '-translate-y-8',
    left: 'translate-x-8',
    right: '-translate-x-8',
    none: ''
  };
  
  return (
    <div 
      className={cn(
        'transition-all',
        isVisible ? 'opacity-100 translate-y-0 translate-x-0' : `opacity-0 ${directionClasses[direction]}`,
        className
      )}
      style={{ transitionDuration: `${duration}ms` }}
    >
      {children}
    </div>
  );
};