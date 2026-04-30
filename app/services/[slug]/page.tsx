import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import CTABanner from "@/components/sections/CTABanner";
import { services } from "@/lib/services";

type PageProps = {
  params: Promise<{ slug: string }>;
};

function getServiceBySlug(slug: string) {
  return services.find((item) => item.slug === slug);
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: "Service Not Found" };
  }

  return {
    title: service.title,
    description: service.description,
  };
}

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const Icon = service.icon;

  return (
    <>
      <PageHero
        eyebrow="Service Detail"
        title={
          <>
            <span className="text-brand-blue">{service.title}</span>
          </>
        }
        description={service.tagline}
        action={
          <Button href="/contact" variant="primary" size="lg">
            Discuss This Service <ArrowRight size={18} />
          </Button>
        }
      />

      <SectionWrapper background="white">
        <div className="grid lg:grid-cols-[1.35fr_1fr] gap-10 items-start">
          <div>
            <SectionHeading title="Service Overview" align="left" />
            <p className="text-slate-600 leading-relaxed">{service.description}</p>
          </div>
          <div className="bg-brand-blue-light/45 border border-brand-blue/20 rounded-2xl p-6">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 border border-brand-blue/20">
              <Icon size={22} className="text-brand-blue" />
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              This service is designed to reduce delivery risk and keep global teams in control through structured on-ground execution.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper background="light">
        <SectionHeading
          eyebrow="What Is Included"
          title={`Key Scope for ${service.title}`}
          subtitle="A practical, execution-focused scope aligned with global infrastructure standards."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {service.features.map((feature) => (
            <div key={feature} className="bg-white rounded-xl border border-brand-blue/15 p-4 flex gap-3">
              <CheckCircle size={16} className="text-brand-blue mt-0.5 shrink-0" />
              <p className="text-sm text-slate-600">{feature}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <CTABanner
        title={`Need ${service.title} in China?`}
        subtitle="Share your scope and timeline. We will provide a practical delivery plan with clear next steps."
        primaryLabel="Get a Quote"
        primaryHref="/contact"
        secondaryLabel="View All Services"
        secondaryHref="/services"
      />
    </>
  );
}
