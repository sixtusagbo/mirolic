import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StructuredData from "./components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://mirolic.org";
const SITE_NAME = "MIROLIC ENTERPRISE";
const TITLE =
  "MIROLIC ENTERPRISE — Custom Software, Web & Mobile App Development, Cloud & Intranet Solutions";
const DESCRIPTION =
  "MIROLIC ENTERPRISE is a registered software development company building custom web and mobile apps, SaaS platforms, MVPs, APIs, cloud hosting, DevOps, and intranet solutions for businesses that need reliable, scalable technology.";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
    { media: "(prefers-color-scheme: light)", color: "#000000" },
  ],
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  category: "technology",
  classification: "Software Development Company",
  keywords: [
    "software development company",
    "custom software development",
    "web application development",
    "mobile app development",
    "iOS app development",
    "Android app development",
    "React Native development",
    "Next.js development",
    "SaaS development",
    "MVP development",
    "enterprise software",
    "API design and integration",
    "REST API development",
    "cloud services",
    "cloud hosting",
    "cloud deployment",
    "DevOps services",
    "CI/CD pipelines",
    "database management",
    "intranet development",
    "employee portals",
    "document management systems",
    "workflow automation",
    "internal tools",
    "Nigeria software company",
    "African software development",
    "MIROLIC",
    "MIROLIC ENTERPRISE",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: true,
    address: false,
    telephone: true,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.svg", sizes: "any" },
    ],
    shortcut: "/favicon.svg",
    apple: [{ url: "/favicon.svg", sizes: "180x180", type: "image/svg+xml" }],
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    title: TITLE,
    description: DESCRIPTION,
    siteName: SITE_NAME,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — Software Development, Cloud Services & Intranet Solutions`,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/opengraph-image"],
    creator: "@mirolic",
    site: "@mirolic",
  },
  alternates: {
    canonical: SITE_URL,
    types: {
      "application/rss+xml": [],
    },
  },
  other: {
    "geo.region": "NG",
    "geo.placename": "Nigeria",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <StructuredData />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
