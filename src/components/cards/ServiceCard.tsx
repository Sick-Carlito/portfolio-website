import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features?: string[];
  className?: string;
}

export const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description, 
  features,
  className 
}: ServiceCardProps) => {
  return (
    <div 
      className={cn(
        'group p-6 sm:p-8 border border-slate-200 rounded-xl',
        'hover:border-blue-400 hover:shadow-lg hover:-translate-y-1',
        'transition-all duration-300',
        className
      )}
    >
      {/* Icon */}
      <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-50 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-blue-600" />
      </div>

      {/* Title */}
      <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
        {title}
      </h3>

      {/* Description */}
      <p className="text-slate-600 leading-relaxed mb-6">
        {description}
      </p>

      {/* Features List (Optional) */}
      {features && features.length > 0 && (
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-sm text-slate-700">
              <svg className="w-4 h-4 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};