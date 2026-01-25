import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { PageLayout } from '@/components/layout';
import { siteConfig } from '@/data/siteConfig';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  authors: [{ name: siteConfig.author.name }],
  keywords: ['web developer', 'content writer', 'SEO', 'Next.js', 'React'],
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <PageLayout>
          {children}
        </PageLayout>
      </body>
    </html>
  );
}