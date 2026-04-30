import type { Metadata } from "next";
import { ArrowRight, CheckCircle } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABanner from "@/components/sections/CTABanner";
import Button from "@/components/ui/Button";
import PageHero from "@/components/layout/PageHero";
import Link from "next/link";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore PrimeNode Technologies' full range of IT execution services in China: on-site support, staging, data center services, pre-deployment validation, and more.",
};

const targetMarkets = [
  {
    title: "European & US MSPs",
    description: "Managed service providers expanding their China delivery footprint.",
  },
  {
    title: "Global System Integrators",
    description: "SI firms managing multi-country deployments with China scope.",
  },
  {
    title: "Data Center Operators",
    description: "International operators deploying or expanding in Chinese facilities.",
  },
  {
    title: "IT Deployment Companies",
    description: "Specialist deployment firms needing reliable China sub-contractors.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title={
          <>
            <span className="text-brand-blue">Full-Spectrum</span> IT Execution in China
          </>
        }
        description="Six core services, one execution partner. From the staging floor to the data center floor — we handle every step."
        action={
          <Button href="/contact" variant="primary" size="lg">
            Discuss Your Project <ArrowRight size={18} />
          </Button>
        }
      />

      {/* Minimal Service Cards */}
      <SectionWrapper background="white">
        <SectionHeading
          eyebrow="Active Services"
          title="What We Deliver"
          subtitle="A clear, minimal overview of every service. Open each page for full scope, workflow, and deliverables."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <article
                key={service.slug}
                className="bg-white rounded-2xl border border-brand-blue/15 p-6 hover:border-brand-blue/40 hover:shadow-[0_14px_32px_rgba(11,82,236,0.14)] transition-all"
              >
                <div className="w-12 h-12 bg-brand-blue-light rounded-xl flex items-center justify-center mb-4">
                  <Icon size={22} className="text-brand-blue" />
                </div>
                <p className="text-xs uppercase tracking-[0.15em] text-slate-400 mb-2">
                  Service {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="text-xl font-bold text-brand-navy mb-2">{service.title}</h2>
                <p className="text-sm text-brand-blue font-semibold mb-3">{service.tagline}</p>
                <p className="text-sm text-slate-500 leading-relaxed mb-5">{service.shortDescription}</p>
                <div className="space-y-2 mb-6">
                  {service.features.slice(0, 3).map((feature) => (
                    <p key={feature} className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircle size={14} className="text-brand-blue mt-0.5 shrink-0" />
                      {feature}
                    </p>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button href={`/services/${service.slug}`} variant="outline" size="sm" className="w-full">
                    View Details
                  </Button>
                  <Button href="/contact" variant="primary" size="sm" className="w-full">
                    Get Quote
                  </Button>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-12 p-6 md:p-8 rounded-2xl border border-brand-blue/15 bg-brand-blue-light/40">
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Need help choosing the right service combination? We map your scope to the fastest low-risk delivery plan.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button href="/contact" variant="primary" size="md">
              Talk to Our Team <ArrowRight size={16} />
            </Button>
            <Link href="/about" className="inline-flex items-center text-sm font-semibold text-brand-blue hover:text-brand-blue-hover">
              Learn how we work
            </Link>
          </div>
        </div>
      </SectionWrapper>

      {/* Target Markets */}
      <SectionWrapper background="light">
        <SectionHeading
          eyebrow="Who We Work With"
          title="Built for Global IT Companies Operating in China"
          subtitle="Our services are designed specifically for international companies who need trusted, high-quality local execution."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {targetMarkets.map((market) => (
            <div
              key={market.title}
              className="bg-white rounded-xl p-6 border border-slate-200 hover:border-brand-blue/30 hover:shadow-md transition-all"
            >
              <div className="w-10 h-10 bg-brand-blue-light rounded-lg flex items-center justify-center mb-4">
                <CheckCircle size={18} className="text-brand-blue" />
              </div>
              <h3 className="text-brand-navy font-semibold mb-2">{market.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{market.description}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <CTABanner
        title="Need IT Execution in China?"
        subtitle="Tell us about your project and we'll come back with a detailed plan, timeline, and pricing."
        primaryLabel="Get a Free Quote"
        primaryHref="/contact"
        secondaryLabel="Learn About Us"
        secondaryHref="/about"
      />
    </>
  );
}
