'use client';

import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { Navigation } from './Navigation';
import { Footer } from './Footer';

interface PageLayoutProps {
  children: ReactNode;
}

export const PageLayout = ({ children }: PageLayoutProps) => {
  const pathname = usePathname();

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation currentPath={pathname} />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};