import { FileText, Code, TrendingUp } from 'lucide-react';
import { Service } from '@/types';

export const services: Service[] = [
  {
    id: 'full-stack-development',
    icon: Code,
    title: "Full-Stack Web Development",
    description: "Custom web apps and sites built with React, Next.js, Node.js, and Ruby on Rails. Fast, scalable, and SEO-ready from the first commit.",
    features: [
      "React, Next.js & TypeScript",
      "Node.js & Ruby on Rails backends",
      "PostgreSQL, MySQL & Firebase",
      "RESTful API design & integration",
      "Performance & Core Web Vitals",
      "Deployment & DevOps support",
    ],
  },
  {
    id: 'seo-content-writing',
    icon: FileText,
    title: "SEO Content Writing",
    description: "Long-form articles, blog posts, and web copy written by someone who actually knows the subject matter. Built to rank, written to convert.",
    features: [
      "Keyword research & topic clusters",
      "On-page SEO & structured data",
      "Technical & IT content",
      "Niche authority building",
      "Conversion-focused copywriting",
      "Regular delivery & reporting",
    ],
  },
  {
    id: 'content-strategy',
    icon: TrendingUp,
    title: "Content Strategy & SEO Consulting",
    description: "A full content roadmap built around your business goals — keyword strategy, competitor gaps, topic clusters, and a publishing plan that compounds over time.",
    features: [
      "Full keyword & competitor audit",
      "Topic cluster architecture",
      "Content calendar & briefs",
      "Technical SEO review",
      "Analytics setup & tracking",
      "Monthly performance reporting",
    ],
  },
];
