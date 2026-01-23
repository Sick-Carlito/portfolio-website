'use client';

import { useState } from 'react';
import { Container, Section, Input, Textarea, Select, Button } from '@/components/ui';
import { FadeIn, ScaleIn } from '@/components/animations';
import { Mail, Linkedin, Github, Twitter, MapPin, Clock } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import { socialLinks } from '@/data/social';
import { CONTACT_FORM_TYPES } from '@/lib/constants';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: CONTACT_FORM_TYPES[0],
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission (you'll connect to real API later)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', projectType: CONTACT_FORM_TYPES[0], message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const iconMap: { [key: string]: any } = {
    linkedin: Linkedin,
    github: Github,
    mail: Mail,
    twitter: Twitter,
  };

  return (
    <div className="min-h-screen">
      
      {/* Hero Section */}
      <Section variant="white" spacing="xl">
        <Container>
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                Let's Work Together
              </h1>
              <p className="text-xl sm:text-2xl text-slate-600 leading-relaxed">
                Have a project in mind? Let's discuss how I can help you achieve your goals.
              </p>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Contact Form & Info */}
      <Section variant="gray" spacing="lg">
        <Container>
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ScaleIn delay={200}>
                <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-xl shadow-lg">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-6">Send a Message</h2>
                  
                  {submitStatus === 'success' && (
                    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                      <p className="font-semibold">Message sent successfully!</p>
                      <p className="text-sm mt-1">I'll get back to you within 24 hours.</p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <Input
                        label="Name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                      />
                      <Input
                        label="Email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                      />
                    </div>

                    <Select
                      label="Project Type"
                      name="projectType"
                      required
                      value={formData.projectType}
                      onChange={handleChange}
                      options={CONTACT_FORM_TYPES.map(type => ({
                        value: type,
                        label: type
                      }))}
                    />

                    <Textarea
                      label="Message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      rows={6}
                    />

                    <Button
                      type="submit"
                      fullWidth
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </div>
              </ScaleIn>
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-6">
              
              {/* Contact Details */}
              <ScaleIn delay={400}>
                <div className="bg-white p-6 rounded-xl border border-slate-200">
                  <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <a 
                      href={`mailto:${siteConfig.author.email}`}
                      className="flex items-center gap-3 text-slate-700 hover:text-blue-600 transition-colors"
                    >
                      <Mail className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span className="text-sm">{siteConfig.author.email}</span>
                    </a>
                    
                    <div className="flex items-center gap-3 text-slate-700">
                      <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span className="text-sm">Remote / Worldwide</span>
                    </div>
                    
                    <div className="flex items-center gap-3 text-slate-700">
                      <Clock className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span className="text-sm">Mon - Fri, 9AM - 6PM EST</span>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="mt-6 pt-6 border-t border-slate-200">
                    <h4 className="font-semibold mb-4 text-sm text-slate-600">Connect With Me</h4>
                    <div className="flex gap-3">
                      {socialLinks.map((social) => {
                        const Icon = iconMap[social.icon];
                        return (
                          <a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 bg-slate-100 hover:bg-blue-600 hover:text-white rounded-lg flex items-center justify-center transition-all hover:scale-110"
                            aria-label={social.name}
                          >
                            <Icon className="w-5 h-5" />
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </ScaleIn>

              {/* Quick Response */}
              <ScaleIn delay={600}>
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-6 rounded-xl text-white">
                  <h3 className="text-xl font-bold mb-3">Quick Response</h3>
                  <p className="text-blue-50 mb-3 text-sm">
                    I typically respond within 24 hours. For urgent inquiries, feel free to reach out via LinkedIn.
                  </p>
                  <p className="text-blue-100 text-sm font-semibold">
                    Currently accepting new projects for Q1 2026
                  </p>
                </div>
              </ScaleIn>

              {/* FAQ */}
              <ScaleIn delay={800}>
                <div className="bg-white p-6 rounded-xl border border-slate-200">
                  <h3 className="text-xl font-bold mb-4">Quick FAQ</h3>
                  <div className="space-y-4 text-sm">
                    <div>
                      <p className="font-semibold text-slate-900 mb-1">What's your availability?</p>
                      <p className="text-slate-600">I'm currently booking projects 2-3 weeks out.</p>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 mb-1">Do you work hourly or fixed price?</p>
                      <p className="text-slate-600">Both! We can discuss what works best for your project.</p>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 mb-1">What's your typical project timeline?</p>
                      <p className="text-slate-600">Most projects take 2-6 weeks depending on scope.</p>
                    </div>
                  </div>
                </div>
              </ScaleIn>

            </div>
          </div>
        </Container>
      </Section>

    </div>
  );
}