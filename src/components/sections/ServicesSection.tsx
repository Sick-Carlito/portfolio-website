import { Container } from '@/components/ui';
import { ServiceCard } from '@/components/cards';
import { Service } from '@/types';
import { cn } from '@/lib/utils';

interface ServicesSectionProps {
  services: Service[];
  title?: string;
  description?: string;
  className?: string;
}

export const ServicesSection = ({
  services,
  title = "What I Do",
  description = "Strategic solutions for digital growth",
  className
}: ServicesSectionProps) => {
  return (
    <section className={cn('py-16 sm:py-20 md:py-24 bg-white', className)}>
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            {title}
          </h2>
          <p className="text-lg sm:text-xl text-slate-600">
            {description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};