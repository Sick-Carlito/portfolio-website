import { LabelHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
}

export const Label = ({ 
  children, 
  required, 
  className, 
  ...props 
}: LabelProps) => {
  return (
    <label
      className={cn(
        'block text-sm font-semibold text-slate-700 mb-2',
        className
      )}
      {...props}
    >
      {children}
      {required && <span className="text-red-500 ml-1">*</span>}
    </label>
  );
};