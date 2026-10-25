import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import StatsBar from "@/components/sections/StatsBar";
import ServicesGrid from "@/components/sections/ServicesGrid";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import HowItWorks from "@/components/sections/HowItWorks";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "PRIMENODE TECHNOLOGIES LTD | UK IT Execution Partner",
  description:
    "PRIMENODE TECHNOLOGIES LTD is your trusted UK IT execution partner. UK-registered (Company No. 17315220). On-site support, staging, data center services, and pre-deployment validation across the United Kingdom.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <ServicesGrid />
      <WhyChooseUs />
      <HowItWorks />
      <CTABanner />
    </>
  );
}
