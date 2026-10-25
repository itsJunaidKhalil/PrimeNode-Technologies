import type { Metadata } from "next";
import AboutPageClient from "@/components/pages/AboutPageClient";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about PRIMENODE TECHNOLOGIES LTD — a UK-registered company (No. 17315220) providing trusted IT execution services across the United Kingdom for MSPs and system integrators.",
};

export default function AboutPage() {
  return <AboutPageClient />;
}
