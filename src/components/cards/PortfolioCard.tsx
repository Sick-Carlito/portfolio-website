import Link from 'next/link';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { Badge } from '@/components/ui';
import { cn } from '@/lib/utils';

interface PortfolioCardProps {
  slug: string;
  category: string;
  title: string;
  description: string;
  metrics: string;
  image?: string;
  tags?: string[];
  featured?: boolean;
  className?: string;
}

export const PortfolioCard = ({
  slug,
  category,
  title,
  description,
  metrics,
  image,
  tags = [],
  featured = false,
  className
}: PortfolioCardProps) => {
  return (
    <div 
      className={cn(
        'bg-white rounded-2xl overflow-hidden shadow-lg',
        'hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 group',
        className
      )}
    >
      <div className="grid md:grid-cols-5 gap-0">
        {/* Image Section */}
        <Link 
          href={`/portfolio/${slug}`}
          className="md:col-span-2 h-64 md:h-auto bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden"
        >
          {image ? (
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-white/30 text-8xl font-bold">{category[0]}</div>
            </div>
          )}
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
        </Link>

        {/* Content Section */}
        <div className="md:col-span-3 p-6 sm:p-8 md:p-10 flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="primary" className="hover:scale-105 transition-transform">
              {category}
            </Badge>
            {featured && (
              <Badge variant="success">Featured</Badge>
            )}
          </div>

          <Link href={`/portfolio/${slug}`}>
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 group-hover:text-blue-600 transition-colors">
              {title}
            </h3>
          </Link>

          <p className="text-slate-600 mb-6 text-base sm:text-lg leading-relaxed">
            {description}
          </p>

          {/* Metrics */}
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-6">
            <TrendingUp className="w-5 h-5 text-green-600 flex-shrink-0" />
            <span className="text-green-600">{metrics}</span>
          </div>

          {/* Tags */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {tags.map((tag, index) => (
                <Badge key={index} variant="secondary" size="sm">
                  {tag}
                </Badge>
              ))}
            </div>
          )}

          {/* CTA Button */}
          <Link 
            href={`/portfolio/${slug}`}
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-slate-300 hover:border-blue-600 hover:text-blue-600 rounded-lg font-semibold transition-all hover:scale-105 self-start"
          >
            View Case Study
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};