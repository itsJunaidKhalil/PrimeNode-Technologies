import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import StatsBar from "@/components/sections/StatsBar";
import ServicesGrid from "@/components/sections/ServicesGrid";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import HowItWorks from "@/components/sections/HowItWorks";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "PrimeNode Technologies | China IT Execution Partner",
  description:
    "PrimeNode Technologies is your trusted China IT execution partner. On-site support, staging, data center services, and pre-deployment validation across China.",
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
