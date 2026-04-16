import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, TrendingUp, ExternalLink, Calendar, Tag } from 'lucide-react';
import { Container, Section, Badge } from '@/components/ui';
import { FadeIn, ScaleIn } from '@/components/animations';
import { CTASection } from '@/components/sections';
import { portfolioItems } from '@/data/portfolio';

export function generateStaticParams() {
  return portfolioItems.map(item => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = portfolioItems.find(i => i.slug === slug);
  if (!item) return { title: 'Not Found' };
  return {
    title: `${item.title} | Portfolio`,
    description: item.description,
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = portfolioItems.find(i => i.slug === slug);

  if (!item) notFound();

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Hero */}
      <Section variant="white" spacing="lg" className="bg-gradient-to-b from-slate-900 to-slate-800 text-white">
        <Container size="md">
          <FadeIn>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-6">
              <Badge variant="primary" size="lg" className="bg-blue-600 text-white">
                {item.category}
              </Badge>
              {item.featured && (
                <Badge variant="success" size="lg">Featured</Badge>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {item.title}
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed max-w-3xl">
              {item.description}
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-400">
              {item.client && (
                <div className="flex items-center gap-2">
                  <span className="text-slate-500">Client:</span>
                  <span className="text-slate-200 font-medium">{item.client}</span>
                </div>
              )}
              {item.year && (
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{item.year}</span>
                </div>
              )}
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Live
                </a>
              )}
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Metrics bar */}
      <div className="bg-blue-600 text-white py-5">
        <Container>
          <div className="flex items-center justify-center gap-3 text-center">
            <TrendingUp className="w-5 h-5 text-blue-200 flex-shrink-0" />
            <p className="font-semibold text-lg tracking-wide">{item.metrics}</p>
          </div>
        </Container>
      </div>

      {/* Case study body */}
      <Section variant="white" spacing="lg">
        <Container size="md">
          <div className="space-y-14">

            {/* The Challenge */}
            {item.challenge && (
              <ScaleIn delay={100}>
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center text-xl">
                      🎯
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold">The Challenge</h2>
                  </div>
                  <p className="text-lg text-slate-600 leading-relaxed">{item.challenge}</p>
                </div>
              </ScaleIn>
            )}

            {/* The Solution */}
            {item.solution && (
              <ScaleIn delay={200}>
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-xl">
                      💡
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold">The Solution</h2>
                  </div>
                  <p className="text-lg text-slate-600 leading-relaxed">{item.solution}</p>
                </div>
              </ScaleIn>
            )}

            {/* Results */}
            {item.results && item.results.length > 0 && (
              <ScaleIn delay={300}>
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center text-xl">
                      📈
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold">Results</h2>
                  </div>
                  <ul className="space-y-4">
                    {item.results.map((result, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-lg text-slate-700">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScaleIn>
            )}

            {/* Tags */}
            {item.tags && item.tags.length > 0 && (
              <FadeIn delay={400}>
                <div className="pt-6 border-t border-slate-200">
                  <div className="flex items-center gap-2 mb-4">
                    <Tag className="w-4 h-4 text-slate-400" />
                    <span className="text-sm font-semibold text-slate-500">Skills used</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" size="md">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </FadeIn>
            )}

          </div>
        </Container>
      </Section>

      {/* CTA */}
      <CTASection
        title="Want Results Like These?"
        description="Let's discuss your project and how I can help you hit your goals."
        primaryCTA={{ text: 'Start a Project', href: '/contact' }}
        secondaryCTA={{ text: 'View More Work', href: '/portfolio' }}
        variant="gradient"
      />

    </div>
  );
}
