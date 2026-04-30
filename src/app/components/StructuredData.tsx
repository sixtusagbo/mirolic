const SITE_URL = "https://mirolic.org";
const SITE_NAME = "MIROLIC ENTERPRISE";
const LOGO_URL = `${SITE_URL}/favicon.svg`;
const OG_IMAGE = `${SITE_URL}/opengraph-image`;

const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const WEBPAGE_ID = `${SITE_URL}/#webpage`;

const SERVICES = [
  {
    name: "Custom Web Application Development",
    description:
      "Production-grade web applications and SaaS platforms built with modern stacks (React, Next.js, Node.js, TypeScript) for performance, security and scale.",
    slug: "web-app-development",
  },
  {
    name: "Mobile App Development (iOS & Android)",
    description:
      "Native and cross-platform mobile apps for iOS and Android, including React Native and Flutter, from MVP to production launch.",
    slug: "mobile-app-development",
  },
  {
    name: "API Design & Integration",
    description:
      "REST and GraphQL API design, third-party integrations, webhooks, and backend services that connect your systems reliably.",
    slug: "api-design-integration",
  },
  {
    name: "Cloud Hosting, Deployment & DevOps",
    description:
      "Cloud infrastructure on AWS, GCP, Azure, and Vercel — CI/CD pipelines, container orchestration, monitoring, and zero-downtime deployments.",
    slug: "cloud-devops",
  },
  {
    name: "Database Management",
    description:
      "Schema design, performance tuning, migrations and ongoing management for PostgreSQL, MySQL, MongoDB and managed cloud databases.",
    slug: "database-management",
  },
  {
    name: "Intranet & Internal Tools",
    description:
      "Employee portals, document management systems, workflow automation and internal dashboards that streamline operations.",
    slug: "intranet-development",
  },
];

const FAQ = [
  {
    question: "What does MIROLIC ENTERPRISE do?",
    answer:
      "MIROLIC ENTERPRISE is a registered software development company that builds custom web and mobile applications, SaaS platforms, MVPs, APIs, cloud infrastructure, and intranet solutions for businesses that need reliable, scalable technology.",
  },
  {
    question: "What services do you offer?",
    answer:
      "Web application development, iOS and Android mobile apps, API design and integration, cloud hosting and deployment, DevOps and CI/CD, database management, employee portals, document management, and workflow automation.",
  },
  {
    question: "Do you build MVPs and SaaS platforms?",
    answer:
      "Yes. We help startups and established teams ship MVPs quickly without compromising on engineering quality, and we build full multi-tenant SaaS platforms designed to scale.",
  },
  {
    question: "Where is MIROLIC ENTERPRISE based?",
    answer:
      "MIROLIC ENTERPRISE is registered in Nigeria and works with clients globally, delivering remotely across time zones.",
  },
  {
    question: "How can I get a quote or start a project?",
    answer:
      "Email contact@mirolic.org with a short description of your project, timeline and any constraints. We will respond with next steps, scope and a proposal.",
  },
];

export default function StructuredData() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "ProfessionalService", "LocalBusiness"],
        "@id": ORG_ID,
        name: SITE_NAME,
        legalName: SITE_NAME,
        alternateName: "MIROLIC",
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: LOGO_URL,
          width: 512,
          height: 512,
        },
        image: OG_IMAGE,
        description:
          "Registered software development company offering custom web and mobile applications, cloud services, DevOps, and intranet solutions — from MVPs and SaaS platforms to enterprise systems and internal tools.",
        slogan: "Clean engineering. Practical business sense. Software that lasts.",
        foundingDate: "2025",
        taxID: "33121515-0001",
        identifier: "8441451",
        contactPoint: [
          {
            "@type": "ContactPoint",
            email: "contact@mirolic.org",
            contactType: "customer service",
            areaServed: ["NG", "Worldwide"],
            availableLanguage: ["English"],
          },
          {
            "@type": "ContactPoint",
            email: "contact@mirolic.org",
            contactType: "sales",
            areaServed: ["NG", "Worldwide"],
            availableLanguage: ["English"],
          },
        ],
        address: {
          "@type": "PostalAddress",
          addressCountry: "NG",
        },
        areaServed: [
          { "@type": "Country", name: "Nigeria" },
          { "@type": "Place", name: "Worldwide" },
        ],
        knowsAbout: [
          "Software Development",
          "Web Application Development",
          "Mobile Application Development",
          "iOS Development",
          "Android Development",
          "SaaS Platforms",
          "MVP Development",
          "API Design and Integration",
          "Cloud Computing",
          "Cloud Hosting",
          "DevOps",
          "CI/CD Pipelines",
          "Database Management",
          "PostgreSQL",
          "Intranet Systems",
          "Employee Portals",
          "Document Management",
          "Workflow Automation",
          "Performance Optimization",
        ],
        makesOffer: SERVICES.map((s) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: s.name,
            description: s.description,
          },
        })),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "MIROLIC ENTERPRISE Services",
          itemListElement: SERVICES.map((s, i) => ({
            "@type": "Offer",
            position: i + 1,
            itemOffered: {
              "@type": "Service",
              "@id": `${SITE_URL}/#service-${s.slug}`,
              name: s.name,
              description: s.description,
              provider: { "@id": ORG_ID },
              serviceType: s.name,
              areaServed: [
                { "@type": "Country", name: "Nigeria" },
                { "@type": "Place", name: "Worldwide" },
              ],
            },
          })),
        },
        sameAs: [],
      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: SITE_URL,
        name: SITE_NAME,
        description:
          "Custom software development, cloud services, and intranet solutions by MIROLIC ENTERPRISE.",
        inLanguage: "en",
        publisher: { "@id": ORG_ID },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${SITE_URL}/?q={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "WebPage",
        "@id": WEBPAGE_ID,
        url: SITE_URL,
        name: "MIROLIC ENTERPRISE — Software Development, Cloud & Intranet Solutions",
        isPartOf: { "@id": WEBSITE_ID },
        about: { "@id": ORG_ID },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: OG_IMAGE,
          width: 1200,
          height: 630,
        },
        inLanguage: "en",
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: SITE_URL,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Services",
              item: `${SITE_URL}/#services`,
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "About",
              item: `${SITE_URL}/#about`,
            },
            {
              "@type": "ListItem",
              position: 4,
              name: "FAQ",
              item: `${SITE_URL}/#faq`,
            },
            {
              "@type": "ListItem",
              position: 5,
              name: "Contact",
              item: `${SITE_URL}/#contact`,
            },
          ],
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/#faq`,
        mainEntity: FAQ.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.answer,
          },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}

export { FAQ, SERVICES };
