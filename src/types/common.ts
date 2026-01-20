export interface NavLink {
  name: string;
  href: string;
  external?: boolean;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  url: string;
  author: {
    name: string;
    email: string;
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
  monetization: {
    monthlyGoal: number;
    services: string[];
  };
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  projectType: string;
  message: string;
}