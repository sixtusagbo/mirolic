"use client";

import { useEffect, useState } from "react";
import FloatingElements, {
  Web3HeroBackground,
  SectionBackground,
} from "./components/FloatingElements";
import { ServiceCard, FeatureCard, Web3Button } from "./components/ModernCard";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div
      className={`min-h-screen bg-black relative transition-opacity duration-1000 ${
        isLoaded ? "opacity-100" : "opacity-0"
      }`}>
      <FloatingElements />
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-gold-400">
              Mirolic Enterprise
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a
                href="#services"
                className="text-gray-300 hover:text-gold-400 transition-colors font-medium">
                Services
              </a>
              <a
                href="#about"
                className="text-gray-300 hover:text-gold-400 transition-colors font-medium">
                About
              </a>
              <a
                href="#contact"
                className="text-gray-300 hover:text-gold-400 transition-colors font-medium">
                Contact
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-300 hover:text-gold-400 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gold-500/20">
              <div className="flex flex-col space-y-4 pt-4">
                <a
                  href="#services"
                  className="text-gray-300 hover:text-gold-400 transition-colors font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}>
                  Services
                </a>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-gold-400 transition-colors font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}>
                  About
                </a>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-gold-400 transition-colors font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}>
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <Web3HeroBackground />
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1
              className={`text-6xl md:text-7xl font-bold text-white mb-6 transition-all duration-1000 ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}>
              Next-Gen Software
              <span className="bg-gradient-gold bg-clip-text text-transparent block">
                Solutions
              </span>
            </h1>
            <p
              className={`text-xl text-gray-300 mb-8 leading-relaxed transition-all duration-1000 delay-300 ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}>
              Delivering cutting-edge software development, cloud services, and
              intranet solutions to help your business thrive in the Web3 era.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Web3Button href="#contact" variant="primary" size="lg">
                Get Started
              </Web3Button>
              <Web3Button href="#services" variant="glass" size="lg">
                Our Services
              </Web3Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-20">
        <SectionBackground variant="dark" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-xl text-gray-300">
              Comprehensive technology solutions for your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              icon={
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              }
              title="Software Development"
              description="Custom software solutions tailored to your business requirements, built with modern technologies and best practices."
              features={[
                "Web Applications & Platforms",
                "Mobile Apps (iOS & Android)",
                "Desktop Applications",
                "API Development & Integration",
              ]}
            />

            <ServiceCard
              icon={
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                  />
                </svg>
              }
              title="Cloud Services"
              description="Scalable cloud infrastructure and deployment solutions to ensure your applications are fast, secure, and always available."
              features={[
                "Cloud Hosting & Deployment",
                "Database Management",
                "DevOps & CI/CD Pipelines",
                "Performance Optimization",
              ]}
            />

            <ServiceCard
              icon={
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              }
              title="Intranet Development"
              description="Secure internal networks and collaboration platforms to streamline your organization's communication and workflows."
              features={[
                "Internal Communication Systems",
                "Document Management Systems",
                "Employee Portals & Dashboards",
                "Workflow Automation Tools",
              ]}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20">
        <SectionBackground variant="darker" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8">
              About Mirolic Enterprise
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Mirolic Enterprise is a registered business specializing in
              software development, cloud services, and intranet development. We
              are committed to delivering innovative technology solutions that
              drive business growth and digital transformation.
            </p>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <FeatureCard
                title="Our Mission"
                description="To empower businesses with cutting-edge technology solutions that enhance productivity, streamline operations, and create meaningful digital experiences."
              />
              <FeatureCard
                title="Our Approach"
                description="We combine technical expertise with deep understanding of business needs to deliver solutions that are not just functional, but transformative."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20">
        <SectionBackground variant="dark" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Get In Touch
              </h2>
              <p className="text-xl text-gray-300">
                Ready to start your next project? Let's discuss how we can help.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold text-white mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 text-gold-400 mt-1">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-white">Email</p>
                      <p className="text-gray-300">
                        <a
                          href="mailto:hi+mirolic@sixtusagbo.dev"
                          className="hover:text-gold-400 transition-colors">
                          hi+mirolic@sixtusagbo.dev
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 text-gold-400 mt-1">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-white">
                        Business Registration
                      </p>
                      <p className="text-gray-300">
                        Registration No: 8441451
                        <br />
                        TIN: 33121515-0001
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-xl font-semibold text-white mb-6">
                  Start Your Project
                </h3>
                <p className="text-gray-300 mb-6">
                  Have a project in mind? We'd love to hear about it and discuss
                  how we can bring your vision to life.
                </p>
                <Web3Button
                  href="mailto:hi+mirolic@sixtusagbo.dev"
                  variant="primary">
                  Send us an Email
                </Web3Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-black py-12">
        <SectionBackground variant="darker" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center">
            <div className="text-2xl font-bold mb-4 text-gold-400">
              Mirolic Enterprise
            </div>
            <p className="text-gray-400 mb-6">
              Professional Software Development, Cloud Services & Intranet
              Solutions
            </p>
            <div className="border-t border-gold-500/20 pt-6">
              <p className="text-gray-400 text-sm">
                © 2025 Mirolic Enterprise. All rights reserved. | Registration
                No: 8441451
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
