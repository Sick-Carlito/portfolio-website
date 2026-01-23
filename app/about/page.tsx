import { Container, Section } from '@/components/ui';
import { TestimonialsSection } from '@/components/sections';
import { FadeIn, ScaleIn } from '@/components/animations';
import { testimonials } from '@/data/testimonials';
import { Code, FileText, TrendingUp } from 'lucide-react';

export const metadata = {
  title: 'About Me | YourName',
  description: 'Learn more about my journey as a web developer and content writer.',
};

export default function AboutPage() {
  const skills = {
    development: [
      'React & Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Node.js',
      'HTML/CSS/JavaScript',
      'Responsive Design',
      'Performance Optimization',
      'Git & Version Control'
    ],
    contentSEO: [
      'SEO Copywriting',
      'Keyword Research',
      'Content Strategy',
      'Technical SEO',
      'On-Page Optimization',
      'Analytics & Reporting',
      'Competitor Analysis',
      'Link Building'
    ]
  };

  return (
    <div className="min-h-screen">
      
      {/* Hero Section */}
      <Section variant="white" spacing="xl">
        <Container size="md">
          <FadeIn>
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                About Me
              </h1>
              <p className="text-xl sm:text-2xl text-slate-600 leading-relaxed">
                Passionate about building exceptional digital experiences and creating content that drives results
              </p>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Story Section */}
      <Section variant="gray" spacing="lg">
        <Container size="md">
          <FadeIn delay={200}>
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">My Story</h2>
              
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                I'm a web developer and content writer who believes that great digital experiences are built at the intersection of technical excellence and compelling storytelling.
              </p>
              
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                With over 200 published articles and 30+ websites under my belt, I've helped businesses across various industries grow their online presence through strategic content and modern web solutions. My unique combination of development skills and SEO expertise allows me to create content that not only ranks but also delivers real business results.
              </p>
              
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                When I'm not coding or writing, you'll find me tending to my garden—a hobby that's taught me patience, attention to detail, and the value of nurturing growth over time. These same principles guide my approach to building digital products and content strategies.
              </p>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Skills Section */}
      <Section variant="white" spacing="lg">
        <Container>
          <div className="text-center mb-12 sm:mb-16">
            <FadeIn delay={100}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                Skills & Expertise
              </h2>
              <p className="text-lg sm:text-xl text-slate-600">
                A unique blend of technical and creative skills
              </p>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            
            {/* Development Skills */}
            <ScaleIn delay={200}>
              <div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 hover:shadow-lg transition-all">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
                  <Code className="w-7 h-7 sm:w-8 sm:h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold mb-6 text-blue-600">Development</h3>
                <ul className="space-y-3">
                  {skills.development.map((skill, index) => (
                    <li 
                      key={index}
                      className="flex items-center gap-3 text-slate-700 hover:translate-x-2 transition-transform duration-200"
                    >
                      <svg className="w-5 h-5 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScaleIn>

            {/* Content & SEO Skills */}
            <ScaleIn delay={350}>
              <div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 hover:shadow-lg transition-all">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-green-50 rounded-lg flex items-center justify-center mb-6">
                  <TrendingUp className="w-7 h-7 sm:w-8 sm:h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold mb-6 text-green-600">Content & SEO</h3>
                <ul className="space-y-3">
                  {skills.contentSEO.map((skill, index) => (
                    <li 
                      key={index}
                      className="flex items-center gap-3 text-slate-700 hover:translate-x-2 transition-transform duration-200"
                    >
                      <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScaleIn>
          </div>
        </Container>
      </Section>

      {/* Values Section */}
      <Section variant="gray" spacing="lg">
        <Container>
          <div className="text-center mb-12 sm:mb-16">
            <FadeIn>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                My Approach
              </h2>
              <p className="text-lg sm:text-xl text-slate-600">
                The principles that guide my work
              </p>
            </FadeIn>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'Quality First',
                description: 'Every line of code and every word written is crafted with attention to detail and purpose.',
                icon: '🎯'
              },
              {
                title: 'Results Driven',
                description: 'Success is measured by real outcomes - traffic growth, conversions, and business impact.',
                icon: '📈'
              },
              {
                title: 'Continuous Learning',
                description: 'The digital landscape evolves constantly. I stay updated with the latest trends and best practices.',
                icon: '📚'
              },
              {
                title: 'Clear Communication',
                description: 'Complex technical concepts explained simply. Regular updates and transparent collaboration.',
                icon: '💬'
              },
              {
                title: 'User-Centered',
                description: 'Every decision is made with the end user in mind, ensuring great experiences across all devices.',
                icon: '👥'
              },
              {
                title: 'Long-term Partnership',
                description: 'Building lasting relationships, not just completing projects. Your success is my success.',
                icon: '🤝'
              }
            ].map((value, index) => (
              <ScaleIn key={index} delay={index * 100}>
                <div className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow-lg hover:-translate-y-1 transition-all">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{value.description}</p>
                </div>
              </ScaleIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* Testimonials */}
      <TestimonialsSection
        testimonials={testimonials}
        title="What Clients Say"
        description="Don't just take my word for it"
      />

      {/* CTA Section */}
      <Section variant="white" spacing="lg">
        <Container>
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 sm:p-12 rounded-2xl">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Let's Work Together
              </h2>
              <p className="text-lg sm:text-xl text-blue-50 mb-8">
                Ready to start your next project? Get in touch and let's create something amazing.
              </p>
              <a 
                href="/contact"
                className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all hover:scale-105 hover:shadow-xl"
              >
                Get Started
              </a>
            </div>
          </FadeIn>
        </Container>
      </Section>

    </div>
  );
}