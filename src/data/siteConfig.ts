import { SiteConfig } from '@/types';

export const siteConfig: SiteConfig = {
  name: "YourName",
  title: "Web Developer & SEO Content Writer | YourName",
  description: "I build fast, modern websites and write SEO content that ranks — a rare combination that helps businesses grow their online presence without hiring two people.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://yourwebsite.com",
  author: {
    name: "Your Full Name",
    email: "hello@yourname.com",
    linkedin: "https://linkedin.com/in/yourprofile",
    github: "https://github.com/yourusername",
    twitter: "https://twitter.com/yourhandle",
  },
  monetization: {
    monthlyGoal: 500,
    services: ["Content Writing", "Web Development", "SEO Consultation"],
  },
};