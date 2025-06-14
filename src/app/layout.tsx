import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StructuredData from "./components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "MIROLIC ENTERPRISE - Software Development & Cloud Services",
    template: "%s | MIROLIC ENTERPRISE",
  },
  description:
    "Professional software development, cloud services, and intranet development solutions. Custom web applications, mobile apps, and enterprise cloud infrastructure.",
  keywords: [
    "software development",
    "cloud services",
    "mobile app development",
    "intranet development",
    "web applications",
    "API development",
    "cloud hosting",
    "devops",
    "database management",
    "custom software",
    "enterprise solutions",
    "Nigeria software company",
  ],
  authors: [{ name: "MIROLIC ENTERPRISE" }],
  creator: "MIROLIC ENTERPRISE",
  publisher: "MIROLIC ENTERPRISE",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mirolic.sixtusagbo.dev",
    title: "MIROLIC ENTERPRISE - Software Development & Cloud Services",
    description:
      "Professional software development, cloud services, and intranet development solutions. Custom web applications, mobile apps, and enterprise cloud infrastructure.",
    siteName: "MIROLIC ENTERPRISE",
    images: [
      {
        url: "/favicon.svg",
        width: 32,
        height: 32,
        alt: "MIROLIC ENTERPRISE Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MIROLIC ENTERPRISE - Software Development & Cloud Services",
    description:
      "Professional software development, cloud services, and intranet development solutions.",
    images: ["/favicon.svg"],
  },

  alternates: {
    canonical: "https://mirolic.sixtusagbo.dev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
