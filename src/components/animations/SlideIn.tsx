'use client';

import { ReactNode, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface SlideInProps {
  children: ReactNode;
  delay?: number;
  direction?: 'left' | 'right' | 'up' | 'down';
  className?: string;
  duration?: number;
}

export const SlideIn = ({ 
  children, 
  delay = 0,
  direction = 'left',
  className,
  duration = 600
}: SlideInProps) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const directionClasses = {
    left: { hidden: '-translate-x-12', visible: 'translate-x-0' },
    right: { hidden: 'translate-x-12', visible: 'translate-x-0' },
    up: { hidden: 'translate-y-12', visible: 'translate-y-0' },
    down: { hidden: '-translate-y-12', visible: 'translate-y-0' }
  };
  
  return (
    <div 
      className={cn(
        'transition-all',
        isVisible 
          ? `opacity-100 ${directionClasses[direction].visible}` 
          : `opacity-0 ${directionClasses[direction].hidden}`,
        className
      )}
      style={{ transitionDuration: `${duration}ms` }}
    >
      {children}
    </div>
  );
};