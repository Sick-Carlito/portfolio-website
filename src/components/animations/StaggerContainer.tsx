'use client';

import { ReactNode, Children, cloneElement, isValidElement } from 'react';
import { getStaggerDelay } from '@/lib/animations';

interface StaggerContainerProps {
  children: ReactNode;
  staggerDelay?: number;
  baseDelay?: number;
}

export const StaggerContainer = ({ 
  children, 
  staggerDelay = 150,
  baseDelay = 0 
}: StaggerContainerProps) => {
  return (
    <>
      {Children.map(children, (child, index) => {
        if (isValidElement(child)) {
          return cloneElement(child as React.ReactElement<any>, {
            delay: getStaggerDelay(index, baseDelay, staggerDelay),
          });
        }
        return child;
      })}
    </>
  );
};