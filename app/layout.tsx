import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Providers } from "./providers";

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
    default: "PRIMENODE TECHNOLOGIES LTD | UK IT Execution Partner",
    template: "%s | PRIMENODE TECHNOLOGIES LTD",
  },
  description:
    "PRIMENODE TECHNOLOGIES LTD is your trusted UK IT execution partner. UK-registered (Company No. 17315220), London. On-site support, staging, data center services, and pre-deployment validation across the United Kingdom.",
  keywords: [
    "UK IT support",
    "UK IT company",
    "PrimeNode Technologies Ltd",
    "MSP UK partner",
    "data center staging UK",
    "IT deployment UK",
    "pre-deployment validation",
    "London IT company",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://www.primenodetech.com",
    siteName: "PRIMENODE TECHNOLOGIES LTD",
    title: "PRIMENODE TECHNOLOGIES LTD | UK IT Execution Partner",
    description:
      "Your trusted UK IT execution partner. On-site support, staging, data center services, and pre-deployment validation — delivered nationwide.",
    images: [
      {
        url: "/logos/logo-primary.png",
        width: 1200,
        height: 630,
        alt: "PRIMENODE TECHNOLOGIES LTD",
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
        <Providers>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
