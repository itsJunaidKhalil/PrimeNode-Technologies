import type { Metadata } from "next";
import { MapPin, Mail, Phone, Clock } from "lucide-react";
import ContactForm from "@/components/sections/ContactForm";
import PageHero from "@/components/layout/PageHero";

function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with PrimeNode Technologies. Tell us about your China IT project and we'll respond with a detailed proposal within 24 hours.",
};

const contactInfo = [
  {
    icon: MapPin,
    label: "Office",
    value: "Nanshan District, Shenzhen\nGuangdong Province, China",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@primenodetech.com",
    href: "mailto:info@primenodetech.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+971 50 919 9087",
    href: "tel:+971509199087",
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Within 24 business hours",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title={
          <>
            Let&apos;s Discuss Your <span className="text-brand-blue">Project</span>
          </>
        }
        description="Tell us what you need. We&apos;ll respond with a clear plan, honest timeline, and competitive pricing — within 24 hours."
      />

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2 bg-white/70 backdrop-blur rounded-2xl border border-brand-blue/15 p-6">
              <h2 className="text-2xl font-bold text-brand-navy mb-2">Get In Touch</h2>
              <p className="text-slate-500 leading-relaxed mb-8">
                We work with MSPs, system integrators, data center operators, and IT deployment companies worldwide. Reach out and let&apos;s explore how we can support your China operations.
              </p>

              <div className="space-y-5 mb-8">
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-brand-blue-light rounded-lg flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-brand-blue" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-0.5">
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          className="text-brand-navy font-medium hover:text-brand-blue transition-colors whitespace-pre-line"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-brand-navy font-medium whitespace-pre-line">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-brand-blue/10 pt-6">
                <p className="text-slate-400 text-sm mb-3">Connect with us</p>
                <a
                  href="https://www.linkedin.com/company/primenodetech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-[#0077B5] text-white px-4 py-2.5 rounded-xl text-sm font-semibold hover:bg-[#006097] transition-colors shadow-[0_4px_12px_rgba(0,119,181,0.35)]"
                >
                  <LinkedinIcon size={16} />
                  LinkedIn
                </a>
              </div>

              <div className="mt-6 bg-brand-blue-light/80 border border-brand-blue/20 rounded-xl p-4">
                <p className="text-brand-navy text-sm font-semibold mb-1">EU Time Zone Support</p>
                <p className="text-slate-600 text-sm">
                  We coordinate and communicate during European business hours (CET/CEST) so your team always has a responsive partner.
                </p>
              </div>
            </div>

            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
