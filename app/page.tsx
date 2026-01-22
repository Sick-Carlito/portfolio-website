import { Container } from '@/components/ui';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      
      {/* Hero Section - Properly Centered */}
      <section className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <Container className="py-20 sm:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Welcome to Your Portfolio
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-10 max-w-2xl mx-auto">
              Web Developer & Content Writer specializing in SEO-driven digital solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all hover:scale-105 hover:shadow-xl text-center"
              >
                Start a Project
              </a>
              <a 
                href="/portfolio"
                className="w-full sm:w-auto px-8 py-4 border-2 border-slate-600 hover:border-slate-500 rounded-lg font-semibold transition-all hover:scale-105 text-center"
              >
                View Portfolio
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Services Section - Properly Spaced */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              What I Do
            </h2>
            <p className="text-lg sm:text-xl text-slate-600">
              Strategic solutions for digital growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            
            {/* Service Card 1 */}
            <div className="group p-6 sm:p-8 border border-slate-200 rounded-xl hover:border-blue-400 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-50 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 sm:w-8 sm:h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                SEO Content Writing
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Engaging, keyword-optimized content that ranks and converts. Blog posts, articles, and web copy that drives traffic.
              </p>
            </div>

            {/* Service Card 2 */}
            <div className="group p-6 sm:p-8 border border-slate-200 rounded-xl hover:border-blue-400 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-50 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 sm:w-8 sm:h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                Web Development
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Custom websites built with modern technologies. Fast, responsive, and scalable solutions that look great on all devices.
              </p>
            </div>

            {/* Service Card 3 */}
            <div className="group p-6 sm:p-8 border border-slate-200 rounded-xl hover:border-blue-400 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 md:col-span-2 lg:col-span-1">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-50 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 sm:w-8 sm:h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                Content Strategy
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Data-driven strategies that grow your organic traffic and establish your brand authority in your industry.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Stats Section - Optional Professional Touch */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
            
            <div className="p-6">
              <div className="text-4xl sm:text-5xl font-bold text-blue-600 mb-2">200+</div>
              <div className="text-slate-600 font-medium">Articles Published</div>
            </div>

            <div className="p-6">
              <div className="text-4xl sm:text-5xl font-bold text-blue-600 mb-2">30+</div>
              <div className="text-slate-600 font-medium">Websites Built</div>
            </div>

            <div className="p-6">
              <div className="text-4xl sm:text-5xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-slate-600 font-medium">Client Satisfaction</div>
            </div>

          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg sm:text-xl mb-8 text-blue-50">
              Let's work together to create something amazing. Get in touch today and let's discuss your goals.
            </p>
            <a 
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all hover:scale-105 hover:shadow-xl"
            >
              Get Started Today
            </a>
          </div>
        </Container>
      </section>

    </div>
  );
}