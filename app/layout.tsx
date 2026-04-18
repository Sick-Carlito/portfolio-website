import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { siteConfig } from '@/data/siteConfig';
import { GoogleAnalytics } from '@next/third-parties/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'web developer',
    'content writer',
    'SEO specialist',
    'Next.js developer',
    'React developer',
    'freelance web developer',
    'SEO content writing',
    'digital marketing',
    'web development services',
    'content strategy',
  ],
  authors: [{ name: siteConfig.author.name, url: siteConfig.url }],
  creator: siteConfig.author.name,
  publisher: siteConfig.author.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/og-image.png`,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og-image.png`],
    creator: '@cbond_420',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  verification: {
    google: 'your-google-verification-code', // Add after Google Search Console setup
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Carl Bond',
  url: siteConfig.url,
  image: `${siteConfig.url}/carl-bond.jpg`,
  jobTitle: 'Full-Stack Developer & SEO Content Writer',
  description: siteConfig.description,
  email: 'carledwards053@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Nairobi',
    addressCountry: 'KE',
  },
  sameAs: [
    siteConfig.author.linkedin,
    siteConfig.author.github,
    siteConfig.author.twitter,
    'https://www.upwork.com/freelancers/carlbond',
  ],
  knowsAbout: [
    'Next.js', 'React', 'TypeScript', 'Node.js', 'Ruby on Rails',
    'SEO Content Writing', 'Technical Writing', 'PostgreSQL', 'Tailwind CSS',
  ],
  offers: {
    '@type': 'Offer',
    itemOffered: [
      { '@type': 'Service', name: 'Full-Stack Web Development' },
      { '@type': 'Service', name: 'SEO Content Writing' },
      { '@type': 'Service', name: 'Technical Writing' },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="canonical" href={siteConfig.url} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <GoogleAnalytics gaId="G-6P3BPJ8D91" />
      </body>
    </html>
  );
}