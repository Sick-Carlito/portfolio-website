'use client';

import { ReactNode } from 'react';
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
  duration = 500
}: ScaleInProps) => {
  return (
    <div
      className={cn('animate-scaleIn', className)}
      style={{
        animationDelay: `${delay}ms`,
        animationDuration: `${duration}ms`,
        animationFillMode: 'both',
      }}
    >
      {children}
    </div>
  );
};
