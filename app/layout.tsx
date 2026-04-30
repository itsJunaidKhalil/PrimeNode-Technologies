import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "PrimeNode Technologies | China IT Execution Partner",
    template: "%s | PrimeNode Technologies",
  },
  description:
    "PrimeNode Technologies is your trusted China IT execution partner. On-site support, staging, data center services, and pre-deployment validation across China — delivered to global standards.",
  keywords: [
    "China IT support",
    "WFOE IT services",
    "Shenzhen IT execution",
    "MSP China partner",
    "data center staging China",
    "IT deployment China",
    "pre-deployment validation",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.primenodetech.com",
    siteName: "PrimeNode Technologies",
    title: "PrimeNode Technologies | China IT Execution Partner",
    description:
      "Your trusted China IT execution partner. On-site support, staging, data center services, and pre-deployment validation — delivered to EU-grade standards.",
    images: [
      {
        url: "/logos/logo-primary.png",
        width: 1200,
        height: 630,
        alt: "PrimeNode Technologies",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${sora.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col text-slate-900 antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
