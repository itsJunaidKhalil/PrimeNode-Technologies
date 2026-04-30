import type { Metadata } from "next";
import { Target, Eye, MapPin, ArrowRight, CheckCircle } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABanner from "@/components/sections/CTABanner";
import Button from "@/components/ui/Button";
import PageHero from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about PrimeNode Technologies — a China-based WFOE providing trusted IT execution services for global MSPs and system integrators.",
};

const phases = [
  {
    phase: "Phase 1",
    title: "Founder-Led Execution",
    description:
      "High-touch, quality-first delivery led directly by our founder. Every project receives personal oversight.",
    active: true,
  },
  {
    phase: "Phase 2",
    title: "Freelance Engineer Network",
    description:
      "Building a vetted network of certified field engineers across China's major cities.",
    active: true,
  },
  {
    phase: "Phase 3",
    title: "Vendor & Supplier Partnerships",
    description:
      "Establishing strategic partnerships with hardware vendors, logistics providers, and data center operators.",
    active: false,
  },
  {
    phase: "Phase 4",
    title: "Nationwide Scale",
    description:
      "Full nationwide operations covering all major Chinese cities and industrial zones.",
    active: false,
  },
];

const values = [
  {
    title: "Reliability",
    description: "We show up, we deliver, and we communicate throughout. No surprises.",
  },
  {
    title: "Quality",
    description: "EU-grade standards applied to every staging, deployment, and support task.",
  },
  {
    title: "Transparency",
    description: "Real-time updates, detailed reports, and honest timelines — always.",
  },
  {
    title: "Efficiency",
    description: "Lean operations, fast turnaround, and cost-conscious execution.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About PrimeNode"
        title={
          <>
            China&apos;s IT Execution Hub for{" "}
            <span className="text-brand-blue">Global Operations</span>
          </>
        }
        description="We are a WFOE registered in Shenzhen, operating as a trusted local execution partner for international IT companies who need reliable, high-quality delivery in China."
        action={
          <Button href="/contact" variant="primary" size="lg">
            Work With Us <ArrowRight size={18} />
          </Button>
        }
      />

      {/* Vision & Mission */}
      <SectionWrapper background="white">
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white/85 backdrop-blur rounded-2xl p-8 border border-brand-blue/20 shadow-sm">
            <div className="w-12 h-12 bg-brand-blue rounded-xl flex items-center justify-center mb-5">
              <Eye size={22} className="text-white" />
            </div>
            <h2 className="text-brand-navy text-2xl font-bold mb-3">Our Vision</h2>
            <p className="text-slate-600 leading-relaxed">
              To be the most trusted China execution partner for global IT operations — a bridge between international standards and local delivery excellence.
            </p>
          </div>

          <div className="bg-brand-navy rounded-2xl p-8 shadow-[0_18px_38px_rgba(11,82,236,0.35)]">
            <div className="w-12 h-12 bg-brand-blue rounded-xl flex items-center justify-center mb-5">
              <Target size={22} className="text-white" />
            </div>
            <h2 className="text-white text-2xl font-bold mb-3">Our Mission</h2>
            <p className="text-slate-300 leading-relaxed">
              To deliver high-quality on-ground IT services in China — reducing deployment risk, improving delivery timelines, and enabling global clients to operate with confidence.
            </p>
          </div>
        </div>

        {/* Company Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading
              eyebrow="Who We Are"
              title="Built for the Gap Between Global and Local"
              align="left"
            />
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                PrimeNode Technologies Shenzhen Co. was established to solve a persistent challenge: global IT companies need reliable execution in China, but struggle with local complexity, language barriers, and operational risk.
              </p>
              <p>
                We operate as a fully registered WFOE in Nanshan, Shenzhen — China&apos;s technology hub — giving our clients a legally compliant, professionally operated local partner they can trust.
              </p>
              <p>
                With a foundation built on European operational discipline and deep China market knowledge, we bring the best of both worlds to every project we execute.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white/85 backdrop-blur rounded-xl p-5 border border-brand-blue/15 shadow-sm"
              >
                <CheckCircle size={20} className="text-brand-blue mb-3" />
                <h3 className="text-brand-navy font-semibold mb-2">{value.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Operational Strategy */}
      <SectionWrapper background="light">
        <SectionHeading
          eyebrow="Growth Strategy"
          title="Scaling with Purpose"
          subtitle="A structured four-phase approach to building China's most reliable IT execution network."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {phases.map((phase, index) => (
            <div
              key={phase.phase}
              className={`relative rounded-xl p-6 border-2 ${
                phase.active
                  ? "bg-white border-brand-blue shadow-[0_16px_34px_rgba(11,82,236,0.2)]"
                  : "bg-white border-slate-200 opacity-80"
              }`}
            >
              {phase.active && (
                <span className="absolute top-4 right-4 bg-brand-blue text-white text-xs font-semibold px-2.5 py-0.5 rounded-full">
                  Active
                </span>
              )}
              <div className="w-10 h-10 bg-brand-blue-light rounded-lg flex items-center justify-center mb-4">
                <span className="text-brand-blue text-sm font-bold">{index + 1}</span>
              </div>
              <p className="text-brand-blue text-xs font-semibold tracking-wide uppercase mb-1">
                {phase.phase}
              </p>
              <h3 className="text-brand-navy font-semibold mb-2">{phase.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{phase.description}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Geographic Coverage */}
      <SectionWrapper background="white">
        <SectionHeading
          eyebrow="Coverage"
          title="Operating Across China's Key Hubs"
          subtitle="Headquartered in Shenzhen with active coverage expanding to Shanghai, Beijing, and Guangzhou — and growing."
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { city: "Shenzhen", role: "Headquarters", primary: true },
            { city: "Shanghai", role: "Active Coverage", primary: false },
            { city: "Beijing", role: "Active Coverage", primary: false },
            { city: "Guangzhou", role: "Active Coverage", primary: false },
          ].map((loc) => (
            <div
              key={loc.city}
              className={`text-center rounded-xl p-6 border-2 ${
                loc.primary
                  ? "bg-brand-navy border-brand-navy text-white"
                  : "bg-white border-slate-200"
              }`}
            >
              <MapPin
                size={24}
                className={`mx-auto mb-3 ${loc.primary ? "text-brand-blue" : "text-brand-blue"}`}
              />
              <h3 className={`font-bold text-lg ${loc.primary ? "text-white" : "text-brand-navy"}`}>
                {loc.city}
              </h3>
              <p className={`text-sm mt-1 ${loc.primary ? "text-slate-300" : "text-slate-500"}`}>
                {loc.role}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-slate-400 text-sm mt-8">
          Expansion based on project demand — additional cities available on request.
        </p>
      </SectionWrapper>

      <CTABanner
        title="Let's Build Something Together"
        subtitle="Whether you're an MSP, system integrator, or data center operator — we have the China execution capability you need."
        primaryLabel="Contact Us"
        primaryHref="/contact"
        secondaryLabel="Our Services"
        secondaryHref="/services"
      />
    </>
  );
}
