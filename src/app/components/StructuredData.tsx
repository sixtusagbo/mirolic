export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Mirolic Enterprise",
    "description": "Professional software development, web design, and intranet development services",
    "url": "https://mirolic.sixtusagbo.dev",
    "logo": "https://mirolic.sixtusagbo.dev/favicon.svg",
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "hi+mirolic@sixtusagbo.dev",
      "contactType": "customer service"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "NG"
    },
    "sameAs": [],
    "foundingDate": "2025",
    "numberOfEmployees": "1",
    "legalName": "Mirolic Enterprise",
    "taxID": "33121515-0001",
    "areaServed": {
      "@type": "Country",
      "name": "Nigeria"
    },
    "serviceType": [
      "Software Development",
      "Web Design",
      "Intranet Development",
      "Mobile App Development",
      "Web Application Development"
    ],
    "knowsAbout": [
      "Software Development",
      "Web Design",
      "Mobile Applications",
      "Intranet Systems",
      "API Development",
      "E-commerce Platforms"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
