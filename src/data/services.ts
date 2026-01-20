import { FileText, Code, TrendingUp } from 'lucide-react';
import { Service } from '@/types';

export const services: Service[] = [
  {
    id: 'seo-content-writing',
    icon: FileText,
    title: "SEO Content Writing",
    description: "Engaging, keyword-optimized content that ranks and converts. Blog posts, articles, and web copy that drives traffic and generates leads.",
    features: [
      "Keyword Research & Strategy",
      "On-Page SEO Optimization",
      "Engaging & Conversion-Focused Copy",
      "Regular Content Delivery",
    ],
    pricing: {
      starting: 200,
      package: "per month",
    },
  },
  {
    id: 'web-development',
    icon: Code,
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies. Fast, responsive, and scalable solutions that look great on all devices.",
    features: [
      "React & Next.js Development",
      "Responsive Mobile-First Design",
      "Performance Optimized",
      "SEO-Friendly Architecture",
    ],
    pricing: {
      starting: 2000,
      package: "per project",
    },
  },
  {
    id: 'content-strategy',
    icon: TrendingUp,
    title: "Content Strategy",
    description: "Data-driven content strategies that grow your organic traffic and establish your brand authority in your industry.",
    features: [
      "Strategic Content Planning",
      "Competitor Analysis",
      "Traffic Growth Tactics",
      "ROI Tracking & Reporting",
    ],
    pricing: {
      starting: 300,
      package: "per month",
    },
  },
];