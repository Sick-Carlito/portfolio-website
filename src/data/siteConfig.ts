import { SiteConfig } from '@/types';

export const siteConfig: SiteConfig = {
  name: "YourName",
  title: "Web Developer & Content Writer | YourName",
  description: "Web Developer and Content Writer specializing in SEO-driven digital solutions. Building modern websites and creating content that ranks.",
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