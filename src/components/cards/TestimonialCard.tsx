import { cn } from '@/lib/utils';

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image?: string;
  className?: string;
}

export const TestimonialCard = ({
  name,
  role,
  company,
  content,
  rating,
  image,
  className
}: TestimonialCardProps) => {
  return (
    <div 
      className={cn(
        'bg-white p-6 sm:p-8 rounded-xl border border-slate-200',
        'hover:shadow-lg hover:-translate-y-1 transition-all duration-300',
        className
      )}
    >
      {/* Rating Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            className={cn(
              'w-5 h-5',
              index < rating ? 'text-yellow-400 fill-current' : 'text-slate-300'
            )}
            viewBox="0 0 24 24"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>

      {/* Content */}
      <p className="text-slate-700 mb-6 leading-relaxed italic">
        "{content}"
      </p>

      {/* Author Info */}
      <div className="flex items-center gap-4">
        {/* Avatar */}
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
          {image ? (
            <img src={image} alt={name} className="w-full h-full rounded-full object-cover" />
          ) : (
            name.split(' ').map(n => n[0]).join('').toUpperCase()
          )}
        </div>

        {/* Details */}
        <div>
          <div className="font-bold text-slate-900">{name}</div>
          <div className="text-sm text-slate-600">{role} at {company}</div>
        </div>
      </div>
    </div>
  );
};