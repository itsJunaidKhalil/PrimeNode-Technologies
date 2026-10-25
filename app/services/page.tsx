import type { Metadata } from "next";
import ServicesPageClient from "@/components/pages/ServicesPageClient";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore PRIMENODE TECHNOLOGIES LTD's full range of IT execution services in the UK: on-site support, staging, data center services, pre-deployment validation, and more.",
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
