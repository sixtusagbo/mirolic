"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 transition-opacity duration-1000 ${
        isLoaded ? "opacity-100" : "opacity-0"
      }`}>
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-slate-800 dark:text-white">
            Mirolic Enterprise
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a
              href="#services"
              className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Services
            </a>
            <a
              href="#about"
              className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              About
            </a>
            <a
              href="#contact"
              className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
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
          <div className="md:hidden mt-4 pb-4 border-t border-slate-200 dark:border-slate-700">
            <div className="flex flex-col space-y-4 pt-4">
              <a
                href="#services"
                className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}>
                Services
              </a>
              <a
                href="#about"
                className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}>
                About
              </a>
              <a
                href="#contact"
                className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}>
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1
            className={`text-5xl md:text-6xl font-bold text-slate-800 dark:text-white mb-6 transition-all duration-1000 ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}>
            Professional Software
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Solutions
            </span>
          </h1>
          <p
            className={`text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed transition-all duration-1000 delay-300 ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}>
            Delivering cutting-edge software development, web design, and
            intranet solutions to help your business thrive in the digital age.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg hover:shadow-xl">
              Get Started
            </a>
            <a
              href="#services"
              className="border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 px-8 py-3 rounded-lg font-semibold transition-colors">
              Our Services
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-4">
              Our Services
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Comprehensive technology solutions for your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Software Development */}
            <div className="bg-slate-50 dark:bg-slate-700 p-8 rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg
                  className="w-6 h-6 text-blue-600 dark:text-blue-400"
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
              </div>
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">
                Software Development
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Custom software solutions tailored to your business
                requirements, built with modern technologies and best practices.
              </p>
              <ul className="text-sm text-slate-500 dark:text-slate-400 space-y-2">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span>
                  Web Applications & Platforms
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span>
                  Mobile Apps (iOS & Android)
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span>
                  Desktop Applications
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span>
                  API Development & Integration
                </li>
              </ul>
            </div>

            {/* Cloud Services */}
            <div className="bg-slate-50 dark:bg-slate-700 p-8 rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg
                  className="w-6 h-6 text-green-600 dark:text-green-400"
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
              </div>
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">
                Cloud Services
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Scalable cloud infrastructure and deployment solutions to ensure
                your applications are fast, secure, and always available.
              </p>
              <ul className="text-sm text-slate-500 dark:text-slate-400 space-y-2">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></span>
                  Cloud Hosting & Deployment
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></span>
                  Database Management
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></span>
                  DevOps & CI/CD Pipelines
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></span>
                  Performance Optimization
                </li>
              </ul>
            </div>

            {/* Intranet Development */}
            <div className="bg-slate-50 dark:bg-slate-700 p-8 rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg
                  className="w-6 h-6 text-purple-600 dark:text-purple-400"
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
              </div>
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">
                Intranet Development
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Secure internal networks and collaboration platforms to
                streamline your organization's communication and workflows.
              </p>
              <ul className="text-sm text-slate-500 dark:text-slate-400 space-y-2">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3"></span>
                  Internal Communication Systems
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3"></span>
                  Document Management Systems
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3"></span>
                  Employee Portals & Dashboards
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3"></span>
                  Workflow Automation Tools
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-8">
              About Mirolic Enterprise
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              Mirolic Enterprise is a registered business specializing in
              software development, web design, and intranet development. We are
              committed to delivering innovative technology solutions that drive
              business growth and digital transformation.
            </p>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">
                  Our Mission
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  To empower businesses with cutting-edge technology solutions
                  that enhance productivity, streamline operations, and create
                  meaningful digital experiences.
                </p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">
                  Our Approach
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  We combine technical expertise with deep understanding of
                  business needs to deliver solutions that are not just
                  functional, but transformative.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-4">
                Get In Touch
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300">
                Ready to start your next project? Let's discuss how we can help.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1">
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
                      <p className="font-semibold text-slate-800 dark:text-white">
                        Email
                      </p>
                      <p className="text-slate-600 dark:text-slate-300">
                        <a
                          href="mailto:hi+mirolic@sixtusagbo.dev"
                          className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                          hi+mirolic@sixtusagbo.dev
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1">
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
                      <p className="font-semibold text-slate-800 dark:text-white">
                        Business Registration
                      </p>
                      <p className="text-slate-600 dark:text-slate-300">
                        Registration No: 8441451
                        <br />
                        TIN: 33121515-0001
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 dark:bg-slate-700 p-8 rounded-xl">
                <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-6">
                  Start Your Project
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-6">
                  Have a project in mind? We'd love to hear about it and discuss
                  how we can bring your vision to life.
                </p>
                <a
                  href="mailto:hi+mirolic@sixtusagbo.dev"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                  Send us an Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 dark:bg-slate-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="text-2xl font-bold mb-4">Mirolic Enterprise</div>
            <p className="text-slate-400 mb-6">
              Professional Software Development, Cloud Services & Intranet
              Solutions
            </p>
            <div className="border-t border-slate-700 pt-6">
              <p className="text-slate-400 text-sm">
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
