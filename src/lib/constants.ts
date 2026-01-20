export const SITE_CONSTANTS = {
  POSTS_PER_PAGE: 9,
  PORTFOLIO_PER_PAGE: 6,
  FEATURED_POSTS_COUNT: 3,
  RECENT_POSTS_COUNT: 6,
  WORDS_PER_MINUTE: 200,
  ANIMATION_DELAY_INCREMENT: 150,
} as const;

export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  SERVICES: '/services',
  PORTFOLIO: '/portfolio',
  BLOG: '/blog',
  CONTACT: '/contact',
} as const;

export const CONTACT_FORM_TYPES = [
  'Content Writing',
  'Web Development',
  'SEO Consultation',
  'Content Strategy',
  'Other',
] as const;

export const SOCIAL_PLATFORMS = {
  LINKEDIN: 'linkedin',
  GITHUB: 'github',
  TWITTER: 'twitter',
  EMAIL: 'email',
} as const;