'use client';

import { ReactNode, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface ScaleInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  duration?: number;
}

export const ScaleIn = ({ 
  children, 
  delay = 0,
  className,
  duration = 700
}: ScaleInProps) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);
  
  return (
    <div 
      className={cn(
        'transition-all',
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95',
        className
      )}
      style={{ transitionDuration: `${duration}ms` }}
    >
      {children}
    </div>
  );
};