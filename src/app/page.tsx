"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import FloatingElements, {
  HeroBackground,
  SectionBackground,
} from "./components/FloatingElements";
import ModernCard, {
  ServiceCard,
  FeatureCard,
  ModernButton,
} from "./components/ModernCard";
import { FAQ } from "./components/StructuredData";

// Products Mirolic has built and shipped. Add/remove entries or links here.
const products = [
  {
    name: "Food Pilot",
    tagline: "AI eating companion",
    description:
      "An iOS app that gives people personalized, AI-generated meal recommendations and keeps them on track — without the usual calorie-counting and logging burden.",
    tech: ["Flutter", "Firebase", "AI"],
    badge: "Live on the App Store",
    links: [
      {
        label: "View on App Store",
        href: "https://apps.apple.com/us/app/food-pilot/id6756402994",
      },
      { label: "foodpilot.app", href: "https://www.foodpilot.app/" },
    ],
  },
  {
    name: "Arvalox",
    tagline: "AI-powered A/R management",
    description:
      "A B2B SaaS platform that automates accounts-receivable management with AI-driven insights and analytics, helping businesses get paid faster.",
    tech: ["Next.js", "FastAPI", "PostgreSQL"],
    badge: null as string | null,
    links: [] as { label: string; href: string }[],
  },
  {
    name: "Grosonix",
    tagline: "AI social-growth platform",
    description:
      "A social media growth platform with AI content intelligence that helps creators and brands grow their audience with data-driven recommendations.",
    tech: ["Next.js", "TypeScript", "Supabase"],
    badge: null as string | null,
    links: [] as { label: string; href: string }[],
  },
];

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
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:px-3 focus:py-2 focus:bg-gold-400 focus:text-black focus:rounded">
        Skip to main content
      </a>

      <header
        role="banner"
        className="fixed top-0 left-0 right-0 z-50 glass-nav">
        <nav
          aria-label="Primary"
          className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              aria-label="MIROLIC ENTERPRISE home"
              className="text-2xl font-bold text-gold-400">
              MIROLIC ENTERPRISE
            </Link>

            <div className="hidden md:flex space-x-8">
              <a
                href="#services"
                className="text-gray-300 hover:text-gold-400 transition-colors font-medium">
                Services
              </a>
              <a
                href="#products"
                className="text-gray-300 hover:text-gold-400 transition-colors font-medium">
                Products
              </a>
              <a
                href="#about"
                className="text-gray-300 hover:text-gold-400 transition-colors font-medium">
                About
              </a>
              <a
                href="#faq"
                className="text-gray-300 hover:text-gold-400 transition-colors font-medium">
                FAQ
              </a>
              <a
                href="#contact"
                className="text-gray-300 hover:text-gold-400 transition-colors font-medium">
                Contact
              </a>
            </div>

            <button
              className="md:hidden text-gray-300 hover:text-gold-400 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle mobile menu">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false">
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

          {isMobileMenuOpen && (
            <div
              id="mobile-menu"
              className="md:hidden mt-4 pb-4 border-t border-gold-500/20">
              <div className="flex flex-col space-y-4 pt-4">
                <a
                  href="#services"
                  className="text-gray-300 hover:text-gold-400 transition-colors font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}>
                  Services
                </a>
                <a
                  href="#products"
                  className="text-gray-300 hover:text-gold-400 transition-colors font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}>
                  Products
                </a>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-gold-400 transition-colors font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}>
                  About
                </a>
                <a
                  href="#faq"
                  className="text-gray-300 hover:text-gold-400 transition-colors font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}>
                  FAQ
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
        </nav>
      </header>

      <main id="main" role="main">
        <section
          aria-labelledby="hero-heading"
          className="relative min-h-screen flex items-center justify-center pt-20">
          <HeroBackground />
          <div className="container mx-auto px-6 text-center relative z-10">
            <div className="max-w-4xl mx-auto">
              <p className="text-sm md:text-base uppercase tracking-[0.3em] text-gold-400 mb-4 font-semibold">
                Registered Software Development Company
              </p>
              <h1
                id="hero-heading"
                className={`text-5xl md:text-7xl font-bold text-white mb-6 transition-all duration-1000 ${
                  isLoaded
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}>
                Custom Software,
                <span className="bg-gradient-gold bg-clip-text text-transparent block">
                  Built to Last.
                </span>
              </h1>
              <p
                className={`text-xl text-gray-300 mb-8 leading-relaxed transition-all duration-1000 delay-300 ${
                  isLoaded
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}>
                MIROLIC ENTERPRISE builds custom web and mobile applications,
                cloud services and intranet solutions — from MVPs and SaaS
                platforms to enterprise systems and internal tools — for
                businesses that need reliable, scalable technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <ModernButton href="#contact" variant="primary" size="lg">
                  Start Your Project
                </ModernButton>
                <ModernButton href="#services" variant="glass" size="lg">
                  View Services
                </ModernButton>
              </div>
            </div>
          </div>
        </section>

        <section
          id="services"
          aria-labelledby="services-heading"
          className="relative py-20">
          <SectionBackground variant="dark" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2
                id="services-heading"
                className="text-4xl font-bold text-white mb-4">
                Software Development & Cloud Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Web apps, mobile apps, APIs, cloud infrastructure, DevOps and
                intranet platforms — engineered to scale with your business.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <ServiceCard
                icon={
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    focusable="false">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                }
                title="Web & Mobile App Development"
                description="Custom web applications, SaaS platforms, MVPs and native iOS / Android apps built with modern stacks and engineering best practices."
                features={[
                  "Web Applications & SaaS Platforms",
                  "iOS & Android Mobile Apps",
                  "MVP & Product Development",
                  "API Design & Integration",
                ]}
              />

              <ServiceCard
                icon={
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    focusable="false">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                    />
                  </svg>
                }
                title="Cloud, DevOps & Databases"
                description="Production-grade cloud infrastructure, deployment pipelines and database management — fast, secure and always available."
                features={[
                  "Cloud Hosting & Deployment",
                  "DevOps & CI/CD Pipelines",
                  "Database Design & Management",
                  "Performance & Cost Optimization",
                ]}
              />

              <ServiceCard
                icon={
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    focusable="false">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                }
                title="Intranet & Internal Tools"
                description="Secure employee portals, document management systems and workflow automation that streamline operations across your organization."
                features={[
                  "Employee Portals & Dashboards",
                  "Document Management Systems",
                  "Workflow Automation",
                  "Internal Communication Platforms",
                ]}
              />
            </div>
          </div>
        </section>

        <section
          id="products"
          aria-labelledby="products-heading"
          className="relative py-20">
          <SectionBackground variant="darker" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2
                id="products-heading"
                className="text-4xl font-bold text-white mb-4">
                Products We&apos;ve Built
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We don&apos;t only build for clients — we ship our own
                AI-native products. Here&apos;s what we&apos;ve launched and
                what we&apos;re building.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {products.map((product) => (
                <ModernCard
                  key={product.name}
                  className="p-8 flex flex-col"
                  variant="glass"
                  hover={false}>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="text-2xl font-bold text-gold-400">
                      {product.name}
                    </h3>
                    {product.badge && (
                      <span className="shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full bg-gold-400/15 text-gold-400 border border-gold-400/30">
                        {product.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-4">
                    {product.tagline}
                  </p>
                  <p className="text-gray-300 leading-relaxed mb-6 flex-grow">
                    {product.description}
                  </p>
                  <ul className="flex flex-wrap gap-2 mb-6">
                    {product.tech.map((t) => (
                      <li
                        key={t}
                        className="text-xs text-gray-400 px-2.5 py-1 rounded-md bg-white/5 border border-gold-500/10">
                        {t}
                      </li>
                    ))}
                  </ul>
                  {product.links.length > 0 && (
                    <div className="flex flex-wrap gap-3 mt-auto">
                      {product.links.map((link) => (
                        <ModernButton
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          variant="glass"
                          size="sm">
                          {link.label}
                        </ModernButton>
                      ))}
                    </div>
                  )}
                </ModernCard>
              ))}
            </div>
          </div>
        </section>

        <section
          id="about"
          aria-labelledby="about-heading"
          className="relative py-20">
          <SectionBackground variant="darker" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2
                id="about-heading"
                className="text-4xl font-bold text-white mb-8">
                About MIROLIC ENTERPRISE
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                MIROLIC ENTERPRISE is a registered software development company
                offering custom web and mobile applications, cloud services and
                intranet solutions. We build for businesses that need reliable,
                scalable technology — from MVPs and SaaS platforms to enterprise
                systems and internal tools. Alongside client work, we build and
                ship our own AI-native products, including Food Pilot, our AI
                eating companion live on the App Store.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Our services span web app development, iOS and Android apps,
                API design and integration, cloud hosting and deployment,
                DevOps, database management, employee portals, document
                management and workflow automation. We combine clean
                engineering with practical business sense to deliver software
                that works, scales and lasts.
              </p>
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <FeatureCard
                  title="Our Mission"
                  description="Empower businesses with software that is reliable, scalable and built on solid engineering — so technology becomes a real competitive advantage, not a liability."
                />
                <FeatureCard
                  title="Our Approach"
                  description="Clean engineering paired with practical business sense. We ship fast where it counts, invest in quality where it matters, and avoid complexity for its own sake."
                />
              </div>
            </div>
          </div>
        </section>

        <section
          id="faq"
          aria-labelledby="faq-heading"
          className="relative py-20">
          <SectionBackground variant="dark" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2
                  id="faq-heading"
                  className="text-4xl font-bold text-white mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-xl text-gray-300">
                  Common questions about our software development, cloud and
                  intranet services.
                </p>
              </div>

              <div className="space-y-4">
                {FAQ.map((item) => (
                  <details
                    key={item.question}
                    className="glass-card p-6 rounded-2xl group">
                    <summary className="cursor-pointer list-none flex items-center justify-between gap-4 text-lg font-semibold text-white group-open:text-gold-400 transition-colors">
                      <span>{item.question}</span>
                      <span
                        aria-hidden="true"
                        className="text-gold-400 transition-transform group-open:rotate-45 text-2xl leading-none">
                        +
                      </span>
                    </summary>
                    <p className="mt-4 text-gray-300 leading-relaxed">
                      {item.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact"
          aria-labelledby="contact-heading"
          className="relative py-20">
          <SectionBackground variant="dark" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2
                  id="contact-heading"
                  className="text-4xl font-bold text-white mb-4">
                  Get In Touch
                </h2>
                <p className="text-xl text-gray-300">
                  Ready to start your next project? Let&apos;s discuss how we can
                  help.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                <address className="glass-card p-8 rounded-2xl not-italic">
                  <h3 className="text-2xl font-semibold text-white mb-6">
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-6 h-6 text-gold-400 mt-1">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          focusable="false">
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
                            href="mailto:contact@mirolic.com"
                            className="hover:text-gold-400 transition-colors">
                            contact@mirolic.com
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-6 h-6 text-gold-400 mt-1">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          focusable="false">
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
                        <p className="text-gray-300">Registration No: 8441451</p>
                      </div>
                    </div>
                  </div>
                </address>

                <div className="glass-card p-8 rounded-2xl">
                  <h3 className="text-xl font-semibold text-white mb-6">
                    Start Your Project
                  </h3>
                  <p className="text-gray-300 mb-6">
                    Have a project in mind? We&apos;d love to hear about it and
                    discuss how we can bring your vision to life.
                  </p>
                  <ModernButton
                    href="mailto:contact@mirolic.com"
                    variant="primary">
                    Send us an Email
                  </ModernButton>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer role="contentinfo" className="relative bg-black py-12">
        <SectionBackground variant="darker" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center">
            <div className="text-2xl font-bold mb-4 text-gold-400">
              MIROLIC ENTERPRISE
            </div>
            <p className="text-gray-400 mb-6">
              Custom Software, Web & Mobile Apps, Cloud Services and Intranet
              Solutions
            </p>
            <div className="border-t border-gold-500/20 pt-6">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} MIROLIC ENTERPRISE. All rights
                reserved. | Registration No: 8441451
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
