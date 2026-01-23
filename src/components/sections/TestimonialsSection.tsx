import { Container } from '@/components/ui';
import { TestimonialCard } from '@/components/cards';
import { Testimonial } from '@/types';
import { cn } from '@/lib/utils';

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
  title?: string;
  description?: string;
  className?: string;
}

export const TestimonialsSection = ({
  testimonials,
  title = "What Clients Say",
  description = "Don't just take my word for it",
  className
}: TestimonialsSectionProps) => {
  return (
    <section className={cn('py-16 sm:py-20 md:py-24 bg-white', className)}>
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">{title}</h2>
          <p className="text-lg sm:text-xl text-slate-600">{description}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              name={testimonial.name}
              role={testimonial.role}
              company={testimonial.company}
              content={testimonial.content}
              rating={testimonial.rating}
              image={testimonial.image}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};