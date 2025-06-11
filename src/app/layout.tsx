import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mirolic Enterprise - Software Development & Web Design",
  description:
    "Professional software development, web design, and intranet development services. Based in Awka, Anambra State, Nigeria.",
  keywords:
    "software development, web design, intranet development, Nigeria, Awka, Anambra",
  authors: [{ name: "Mirolic Enterprise" }],
  openGraph: {
    title: "Mirolic Enterprise - Software Development & Web Design",
    description:
      "Professional software development, web design, and intranet development services.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
