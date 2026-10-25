import type { Metadata } from "next";
import ContactPageClient from "@/components/pages/ContactPageClient";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with PRIMENODE TECHNOLOGIES LTD. Correspondence: 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ. Tell us about your UK IT project and we'll respond within 24 hours.",
};

export default function ContactPage() {
  return <ContactPageClient />;
}
