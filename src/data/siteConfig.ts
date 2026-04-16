import { SiteConfig } from '@/types';

export const siteConfig: SiteConfig = {
  name: "Carl Bond",
  title: "Full-Stack Developer & SEO Content Writer | Carl Bond",
  description: "I build fast, modern web apps and write SEO content that ranks — a rare combination that helps businesses grow online without hiring two people.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://carlbond.dev",
  author: {
    name: "Carl Bond",
    email: "carledwards053@gmail.com",
    linkedin: "https://linkedin.com/in/carlb420/",
    github: "https://github.com/Sick-Carlito",
    twitter: "https://twitter.com/cbond_420",
  },
  monetization: {
    monthlyGoal: 500,
    services: ["SEO Content Writing", "Full-Stack Web Development", "Technical Writing"],
  },
};
