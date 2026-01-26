'use client';

import { ReactNode, useState } from 'react';
import { cn } from '@/lib/utils';
import { CheckCircle, XCircle, Info, AlertTriangle, Lightbulb, BookOpen } from 'lucide-react';

// ============================================
// Callout Box - For tips, warnings, info
// ============================================
interface CalloutProps {
  type?: 'info' | 'warning' | 'success' | 'error' | 'tip';
  title?: string;
  children: ReactNode;
}

export const Callout = ({ type = 'info', title, children }: CalloutProps) => {
  const styles = {
    info: {
      bg: 'bg-blue-50 border-blue-200',
      icon: <Info className="w-5 h-5 text-blue-600" />,
      title: 'text-blue-900',
      text: 'text-blue-800'
    },
    warning: {
      bg: 'bg-yellow-50 border-yellow-200',
      icon: <AlertTriangle className="w-5 h-5 text-yellow-600" />,
      title: 'text-yellow-900',
      text: 'text-yellow-800'
    },
    success: {
      bg: 'bg-green-50 border-green-200',
      icon: <CheckCircle className="w-5 h-5 text-green-600" />,
      title: 'text-green-900',
      text: 'text-green-800'
    },
    error: {
      bg: 'bg-red-50 border-red-200',
      icon: <XCircle className="w-5 h-5 text-red-600" />,
      title: 'text-red-900',
      text: 'text-red-800'
    },
    tip: {
      bg: 'bg-purple-50 border-purple-200',
      icon: <Lightbulb className="w-5 h-5 text-purple-600" />,
      title: 'text-purple-900',
      text: 'text-purple-800'
    }
  };

  const style = styles[type];

  return (
    <div className={cn('my-6 p-4 sm:p-6 rounded-xl border-2', style.bg)}>
      <div className="flex gap-3">
        <div className="flex-shrink-0 mt-0.5">{style.icon}</div>
        <div className="flex-1">
          {title && <h4 className={cn('font-bold mb-2', style.title)}>{title}</h4>}
          <div className={cn(style.text)}>{children}</div>
        </div>
      </div>
    </div>
  );
};


// ============================================
// Table of Contents - Auto-generate from headings
// ============================================
interface TOCProps {
  headings: { id: string; text: string; level: number }[];
}

export const TableOfContents = ({ headings }: TOCProps) => {
  return (
    <div className="my-8 p-6 bg-slate-50 rounded-xl border border-slate-200">
      <div className="flex items-center gap-2 mb-4">
        <BookOpen className="w-5 h-5 text-blue-600" />
        <h3 className="font-bold text-slate-900">Table of Contents</h3>
      </div>
      <ul className="space-y-2">
        {headings.map((heading, index) => (
          <li key={index} style={{ paddingLeft: `${(heading.level - 2) * 16}px` }}>
            <a 
              href={`#${heading.id}`}
              className="text-slate-600 hover:text-blue-600 transition-colors hover:translate-x-1 inline-block"
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};


// ============================================
// Expandable Section - Click to reveal more
// ============================================
interface ExpandableProps {
  title: string;
  children: ReactNode;
}

export const Expandable = ({ title, children }: ExpandableProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="my-6 border border-slate-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 bg-slate-50 hover:bg-slate-100 flex items-center justify-between transition-colors"
      >
        <span className="font-semibold text-slate-900">{title}</span>
        <svg 
          className={cn('w-5 h-5 text-slate-600 transition-transform', isOpen && 'rotate-180')}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-white">
          {children}
        </div>
      )}
    </div>
  );
};


// ============================================
// Quick Stats - Show numbers in a nice way
// ============================================
interface StatsProps {
  stats: { label: string; value: string }[];
}

export const Stats = ({ stats }: StatsProps) => {
  return (
    <div className="my-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <div key={index} className="p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl text-center border border-blue-100">
          <div className="text-3xl font-bold text-blue-600 mb-1">{stat.value}</div>
          <div className="text-sm text-slate-600">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};


// ============================================
// Comparison Table - Before/After, Pros/Cons
// ============================================
interface ComparisonProps {
  left: { title: string; items: string[] };
  right: { title: string; items: string[] };
}

export const Comparison = ({ left, right }: ComparisonProps) => {
  return (
    <div className="my-8 grid sm:grid-cols-2 gap-4">
      <div className="p-6 bg-red-50 rounded-xl border-2 border-red-200">
        <h4 className="font-bold text-red-900 mb-4 flex items-center gap-2">
          <XCircle className="w-5 h-5" />
          {left.title}
        </h4>
        <ul className="space-y-2">
          {left.items.map((item, index) => (
            <li key={index} className="text-red-800 flex items-start gap-2">
              <span className="text-red-500 mt-1">✗</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-6 bg-green-50 rounded-xl border-2 border-green-200">
        <h4 className="font-bold text-green-900 mb-4 flex items-center gap-2">
          <CheckCircle className="w-5 h-5" />
          {right.title}
        </h4>
        <ul className="space-y-2">
          {right.items.map((item, index) => (
            <li key={index} className="text-green-800 flex items-start gap-2">
              <span className="text-green-500 mt-1">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};


// ============================================
// Progress Bar - Show completion or scores
// ============================================
interface ProgressBarProps {
  label: string;
  value: number;
  max?: number;
  color?: 'blue' | 'green' | 'purple' | 'red';
}

export const ProgressBar = ({ label, value, max = 100, color = 'blue' }: ProgressBarProps) => {
  const percentage = (value / max) * 100;
  
  const colors = {
    blue: 'bg-blue-600',
    green: 'bg-green-600',
    purple: 'bg-purple-600',
    red: 'bg-red-600'
  };

  return (
    <div className="my-4">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-slate-700">{label}</span>
        <span className="text-sm font-semibold text-slate-900">{value}/{max}</span>
      </div>
      <div className="w-full bg-slate-200 rounded-full h-3">
        <div 
          className={cn('h-3 rounded-full transition-all duration-500', colors[color])}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};


// ============================================
// Quote - Beautiful pull quotes
// ============================================
interface QuoteProps {
  children: ReactNode;
  author?: string;
}

export const Quote = ({ children, author }: QuoteProps) => {
  return (
    <div className="my-8 px-8 py-6 bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-600 rounded-r-xl">
      <p className="text-xl sm:text-2xl font-medium text-slate-800 italic mb-3">
        "{children}"
      </p>
      {author && (
        <p className="text-sm text-slate-600 font-semibold">— {author}</p>
      )}
    </div>
  );
};


// ============================================
// Export all components
// ============================================
export const BlogComponents = {
  Callout,
  TableOfContents,
  Expandable,
  Stats,
  Comparison,
  ProgressBar,
  Quote
};