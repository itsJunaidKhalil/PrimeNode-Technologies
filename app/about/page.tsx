import type { Metadata } from "next";
import AboutPageClient from "@/components/pages/AboutPageClient";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about PrimeNode Technologies — a China-based WFOE providing trusted IT execution services for global MSPs and system integrators.",
};

export default function AboutPage() {
  return <AboutPageClient />;
}
