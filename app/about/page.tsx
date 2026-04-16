import { Container, Section } from '@/components/ui';
import { TestimonialsSection } from '@/components/sections';
import { FadeIn, ScaleIn } from '@/components/animations';
import { testimonials } from '@/data/testimonials';
import { Code, TrendingUp } from 'lucide-react';

export const metadata = {
  title: 'About Carl Bond | Full-Stack Developer & SEO Content Writer',
  description: 'Carl Bond is a Full-Stack Developer and SEO Content Writer based in Kenya, working with clients across the USA and Europe for 5+ years.',
};

export default function AboutPage() {
  const skills = {
    development: [
      'React & Next.js',
      'TypeScript & JavaScript',
      'Node.js & Ruby on Rails',
      'Python & Flask',
      'PostgreSQL, MySQL & Firebase',
      'RESTful API Design & Integration',
      'Tailwind CSS & Bootstrap',
      'Git, GitHub & Agile/Scrum',
      'TDD / RSpec',
      'Deployment & DevOps (Heroku)',
    ],
    contentSEO: [
      'SEO Copywriting & Strategy',
      'Technical Writing (IT & Dev)',
      'Keyword Research & Clusters',
      'On-Page SEO & Structured Data',
      'Content Calendar Planning',
      'Analytics & Performance Reporting',
      'Microsoft 365 & Cloud Documentation',
      'Competitor & Gap Analysis',
    ]
  };

  return (
    <div className="min-h-screen">

      {/* Hero */}
      <Section variant="white" spacing="xl">
        <Container size="md">
          <FadeIn>
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                About Carl Bond
              </h1>
              <p className="text-xl sm:text-2xl text-slate-600 leading-relaxed">
                Full-Stack Developer & SEO Content Writer — Kenya-based, working globally
              </p>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Story */}
      <Section variant="gray" spacing="lg">
        <Container size="md">
          <FadeIn delay={200}>
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">My Story</h2>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                I'm Carl Bond — a Full-Stack Developer and SEO Content Writer based in Nairobi, Kenya, working with clients across the USA and Europe. For 5+ years I've been helping businesses build things online: fast, well-architected web applications on one hand, and content that actually ranks and converts on the other.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                My development background spans the full stack — React, Next.js, TypeScript on the frontend; Node.js, Ruby on Rails, and Python on the backend; PostgreSQL, MySQL, and Firebase for data. I've built internal management systems at Ngamia Africa, delivered ReactJS interfaces for Pullova Technologies, and completed 1,300+ hours of intensive full-stack training at Microverse — where I pair-programmed remotely with developers across four continents.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                On the content side, I've spent years writing for US and European clients on Upwork — technical documentation, IT knowledge bases, SEO blog content, and copy for SaaS products. I write about what I actually know: software development, IT infrastructure, cloud tools, and increasingly, web strategy. That technical grounding means my content passes the "written by someone who gets it" test that most SEO writers fail.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                I also launched a hydroponics blog entirely on my own — from the Next.js build to the content strategy and every article on it. It's the best demonstration of what I offer: one person who can ship the product and fill it with content that ranks.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed">
                If you need a developer who communicates like a writer, or a writer who thinks like a developer — that's exactly what I am.
              </p>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Skills */}
      <Section variant="white" spacing="lg">
        <Container>
          <div className="text-center mb-12 sm:mb-16">
            <FadeIn delay={100}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                Skills & Expertise
              </h2>
              <p className="text-lg sm:text-xl text-slate-600">
                Full-stack technical depth meets content strategy
              </p>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">

            {/* Dev Skills */}
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

            {/* Content Skills */}
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

      {/* Experience Timeline */}
      <Section variant="gray" spacing="lg">
        <Container size="md">
          <div className="text-center mb-12 sm:mb-16">
            <FadeIn>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Experience</h2>
              <p className="text-lg sm:text-xl text-slate-600">Where I've worked and what I've done</p>
            </FadeIn>
          </div>

          <div className="space-y-6 max-w-3xl mx-auto">
            {[
              {
                role: 'Frontend Web Developer',
                company: 'Ngamia Africa',
                period: '2024',
                bullets: [
                  'Built responsive web interfaces for internal management systems',
                  'Integrated RESTful APIs and debugged across the full stack',
                  'Assisted with DevOps tasks and deployment automation',
                  'Owned Git workflow including code reviews and repository management',
                ]
              },
              {
                role: 'Frontend Web Developer',
                company: 'Pullova Technologies',
                period: '2023',
                bullets: [
                  'Developed interfaces using ReactJS, HTML5, CSS3, and Bootstrap 4',
                  'Collaborated via GitHub and deployed applications on Heroku',
                  'Implemented UI/UX best practices across all deliverables',
                ]
              },
              {
                role: 'Full-Stack Development Training',
                company: 'Microverse (Remote)',
                period: '1,300+ hours',
                bullets: [
                  'Completed intensive full-stack curriculum: Ruby, Rails, JavaScript, React, Redux',
                  '40 hours/week remote pair programming with international developers',
                  'Mentored junior developers on code quality and problem-solving',
                ]
              },
              {
                role: 'Freelance Developer & Technical Content Writer',
                company: 'Upwork & Independent Clients',
                period: '5+ years',
                bullets: [
                  'Delivered technical content for clients across the USA and Europe',
                  'IT documentation, Microsoft 365, cloud tools, PowerShell & Active Directory',
                  'Full-stack development projects for small businesses and startups',
                ]
              },
            ].map((exp, index) => (
              <ScaleIn key={index} delay={index * 100}>
                <div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 hover:shadow-lg transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{exp.role}</h3>
                      <p className="text-blue-600 font-semibold">{exp.company}</p>
                    </div>
                    <span className="text-sm text-slate-500 mt-1 sm:mt-0 bg-slate-100 px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {exp.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-600">
                        <span className="text-blue-400 mt-1.5 text-xs">●</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScaleIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* Approach */}
      <Section variant="white" spacing="lg">
        <Container>
          <div className="text-center mb-12 sm:mb-16">
            <FadeIn>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">My Approach</h2>
              <p className="text-lg sm:text-xl text-slate-600">How I work with clients</p>
            </FadeIn>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'Technical Honesty',
                description: 'I tell you what\'s actually achievable, not what you want to hear. No overpromising, no hidden surprises at launch.',
                icon: '🎯'
              },
              {
                title: 'Results Over Vanity',
                description: 'Page views and rankings are only good if they convert. I build and write with business outcomes in mind.',
                icon: '📈'
              },
              {
                title: 'Async-Friendly',
                description: 'Based in Nairobi, I work effectively with US and European clients. Clear written updates, no micromanagement needed.',
                icon: '🌍'
              },
              {
                title: 'Ship, Then Iterate',
                description: 'I bias toward getting real things live quickly, then improving based on actual data rather than speculation.',
                icon: '🚀'
              },
              {
                title: 'I Actually Know the Subject',
                description: 'Every technical article I write is backed by hands-on development experience. The code and the content come from the same person.',
                icon: '🧠'
              },
              {
                title: 'Long-Term Partnership',
                description: 'Most of my best clients are repeat clients. I invest in understanding your business so each project gets smarter.',
                icon: '🤝'
              }
            ].map((value, index) => (
              <ScaleIn key={index} delay={index * 100}>
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 hover:shadow-lg hover:-translate-y-1 transition-all">
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

      {/* CTA */}
      <Section variant="white" spacing="lg">
        <Container>
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 sm:p-12 rounded-2xl">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Let's Work Together
              </h2>
              <p className="text-lg sm:text-xl text-blue-50 mb-8">
                Whether you need a full-stack build or content that ranks — let's talk.
              </p>
              <a
                href="/contact"
                className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all hover:scale-105 hover:shadow-xl"
              >
                Get in Touch
              </a>
            </div>
          </FadeIn>
        </Container>
      </Section>

    </div>
  );
}
