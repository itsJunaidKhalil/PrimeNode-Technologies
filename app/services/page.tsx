import type { Metadata } from "next";
import ServicesPageClient from "@/components/pages/ServicesPageClient";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore PrimeNode Technologies' full range of IT execution services in China: on-site support, staging, data center services, pre-deployment validation, and more.",
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
