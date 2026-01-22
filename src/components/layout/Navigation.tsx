'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { navigationLinks } from '@/data/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui';

interface NavigationProps {
  currentPath?: string;
}

export const Navigation = ({ currentPath = '/' }: NavigationProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when screen size changes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const isActive = (href: string) => {
    if (href === '/') {
      return currentPath === '/';
    }
    return currentPath.startsWith(href);
  };

  return (
    <nav 
      className={cn(
        'sticky top-0 z-50 bg-white border-b transition-all duration-300',
        scrolled ? 'shadow-lg border-slate-200' : 'border-slate-200'
      )}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          
          {/* Logo */}
          <Link 
            href="/"
            className="text-xl sm:text-2xl font-bold text-slate-900 hover:scale-105 transition-transform"
          >
            YourName<span className="text-blue-600">.</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navigationLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'font-medium transition-all hover:scale-105 text-sm lg:text-base',
                  isActive(item.href)
                    ? 'text-blue-600'
                    : 'text-slate-600 hover:text-slate-900'
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 hover:scale-110 transition-transform"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2 animate-slideDown">
            {navigationLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  'block py-3 px-4 rounded-lg transition-all text-base',
                  isActive(item.href)
                    ? 'bg-blue-50 text-blue-600 font-semibold'
                    : 'text-slate-600 hover:bg-slate-50'
                )}
              >
                {item.name}
              </Link>
            ))}
            
            {/* CTA Button in Mobile Menu */}
            <div className="pt-4">
              <Button 
                fullWidth 
                onClick={() => setMobileMenuOpen(false)}
              >
                <Link href="/contact">Start a Project</Link>
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm -z-10"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </nav>
  );
};