import { NavLink } from '@/types';

export const navigationLinks: NavLink[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export const footerLinks = {
  quickLinks: navigationLinks,
  services: [
    'SEO Content Writing',
    'Web Development',
    'Content Strategy',
    'Technical SEO',
  ],
};