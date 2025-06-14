export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "MIROLIC ENTERPRISE",
    description:
      "Professional software development, cloud services, and intranet development solutions",
    url: "https://mirolic.sixtusagbo.dev",
    logo: "https://mirolic.sixtusagbo.dev/favicon.svg",
    contactPoint: {
      "@type": "ContactPoint",
      email: "hi+mirolic@sixtusagbo.dev",
      contactType: "customer service",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "NG",
    },
    sameAs: [],
    foundingDate: "2025",
    numberOfEmployees: "1",
    legalName: "MIROLIC ENTERPRISE",
    taxID: "33121515-0001",
    areaServed: {
      "@type": "Country",
      name: "Nigeria",
    },
    serviceType: [
      "Software Development",
      "Cloud Services",
      "Intranet Development",
      "Mobile App Development",
      "Web Application Development",
      "DevOps Services",
    ],
    knowsAbout: [
      "Software Development",
      "Cloud Computing",
      "Mobile Applications",
      "Intranet Systems",
      "API Development",
      "DevOps",
      "Database Management",
      "Performance Optimization",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
