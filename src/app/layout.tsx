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
    default: "Mirolic Enterprise - Software Development & Web Design",
    template: "%s | Mirolic Enterprise",
  },
  description:
    "Professional software development, web design, and intranet development services. Custom web applications, mobile apps, and enterprise solutions.",
  keywords: [
    "software development",
    "web design",
    "mobile app development",
    "intranet development",
    "web applications",
    "API development",
    "e-commerce platforms",
    "cloud services",
    "UI/UX design",
    "custom software",
    "enterprise solutions",
    "Nigeria software company",
  ],
  authors: [{ name: "Mirolic Enterprise" }],
  creator: "Mirolic Enterprise",
  publisher: "Mirolic Enterprise",
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
    title: "Mirolic Enterprise - Software Development & Web Design",
    description:
      "Professional software development, web design, and intranet development services. Custom web applications, mobile apps, and enterprise solutions.",
    siteName: "Mirolic Enterprise",
    images: [
      {
        url: "/favicon.svg",
        width: 32,
        height: 32,
        alt: "Mirolic Enterprise Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mirolic Enterprise - Software Development & Web Design",
    description:
      "Professional software development, web design, and intranet development services.",
    images: ["/favicon.svg"],
  },
  verification: {
    google: "your-google-verification-code", // Replace with actual verification code
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
