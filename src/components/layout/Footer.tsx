import Link from 'next/link';
import { Linkedin, Github, Mail, Twitter } from 'lucide-react';
import { navigationLinks, footerLinks } from '@/data/navigation';
import { socialLinks } from '@/data/social';
import { siteConfig } from '@/data/siteConfig';
import { Container } from '@/components/ui';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Map icon names to components
  const iconMap: { [key: string]: any } = {
    linkedin: Linkedin,
    github: Github,
    mail: Mail,
    twitter: Twitter,
  };

  return (
    <footer className="bg-slate-900 text-white py-12 sm:py-16">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8">
          
          {/* Brand & Description */}
          <div className="sm:col-span-2 lg:col-span-2">
            <Link 
              href="/"
              className="text-2xl font-bold mb-4 inline-block hover:scale-105 transition-transform"
            >
              {siteConfig.name}<span className="text-blue-400">.</span>
            </Link>
            <p className="text-slate-400 mb-6 max-w-md">
              {siteConfig.description}
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = iconMap[social.icon];
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center cursor-pointer transition-all hover:scale-110 hover:-translate-y-1"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
            <div className="space-y-2">
              {navigationLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-slate-400 hover:text-white transition-all hover:translate-x-1"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Services</h4>
            <div className="space-y-2 text-slate-400">
              {footerLinks.services.map((service, index) => (
                <p 
                  key={index}
                  className="hover:text-white transition-colors hover:translate-x-1 duration-200"
                >
                  {service}
                </p>
              ))}
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              &copy; {currentYear} {siteConfig.name}. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-slate-400">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};