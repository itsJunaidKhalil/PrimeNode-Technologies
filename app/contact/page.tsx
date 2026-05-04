import type { Metadata } from "next";
import ContactPageClient from "@/components/pages/ContactPageClient";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with PrimeNode Technologies. Tell us about your China IT project and we'll respond with a detailed proposal within 24 hours.",
};

export default function ContactPage() {
  return <ContactPageClient />;
}
