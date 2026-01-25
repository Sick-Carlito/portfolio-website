import NextImage, { ImageProps as NextImageProps } from 'next/image';
import { cn } from '@/lib/utils';

interface OptimizedImageProps extends Omit<NextImageProps, 'src'> {
  src: string;
  alt: string;
  className?: string;
}

export const OptimizedImage = ({
  src,
  alt,
  className,
  ...props
}: OptimizedImageProps) => {
  return (
    <NextImage
      src={src}
      alt={alt}
      className={cn('rounded-lg', className)}
      loading="lazy"
      quality={85}
      {...props}
    />
  );
};