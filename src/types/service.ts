import { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  pricing?: {
    starting: number;
    package: string;
  };
}

export interface ServicePackage {
  name: string;
  price: number;
  period: string;
  features: string[];
  popular?: boolean;
}