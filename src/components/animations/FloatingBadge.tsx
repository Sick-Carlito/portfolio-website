'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface FloatingBadgeProps {
  children: ReactNode;
  className?: string;
}

export const FloatingBadge = ({ children, className }: FloatingBadgeProps) => {
  return (
    <div className={cn('animate-float', className)}>
      {children}
    </div>
  );
};