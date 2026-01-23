import Link from 'next/link';
import { Clock, Calendar } from 'lucide-react';
import { Badge } from '@/components/ui';
import { cn } from '@/lib/utils';

interface BlogPostCardProps {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image?: string;
  featured?: boolean;
  className?: string;
}

export const BlogPostCard = ({
  slug,
  title,
  excerpt,
  date,
  readTime,
  category,
  image,
  featured = false,
  className
}: BlogPostCardProps) => {
  return (
    <article 
      className={cn(
        'bg-white rounded-xl overflow-hidden border border-slate-100',
        'hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group',
        className
      )}
    >
      {/* Image */}
      <Link href={`/blog/${slug}`}>
        <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
          {image ? (
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-white/20 text-6xl font-bold">{category[0]}</div>
            </div>
          )}
          {featured && (
            <Badge 
              variant="primary" 
              className="absolute top-4 right-4 bg-white text-blue-600"
            >
              Featured
            </Badge>
          )}
        </div>
      </Link>

      {/* Content */}
      <div className="p-6">
        {/* Meta Info */}
        <div className="flex items-center gap-4 text-sm text-slate-600 mb-3">
          <Badge variant="primary" className="hover:scale-105 transition-transform">
            {category}
          </Badge>
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" /> {readTime}
          </span>
        </div>

        {/* Title */}
        <Link href={`/blog/${slug}`}>
          <h3 className="text-xl font-bold mb-3 hover:text-blue-600 transition-colors line-clamp-2">
            {title}
          </h3>
        </Link>

        {/* Excerpt */}
        <p className="text-slate-600 mb-4 line-clamp-3">
          {excerpt}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between text-sm pt-4 border-t border-slate-100">
          <span className="text-slate-500 flex items-center gap-1">
            <Calendar className="w-4 h-4" /> {date}
          </span>
          <Link 
            href={`/blog/${slug}`}
            className="text-blue-600 font-semibold hover:text-blue-700 hover:translate-x-1 transition-all inline-flex items-center gap-1"
          >
            Read More 
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
};