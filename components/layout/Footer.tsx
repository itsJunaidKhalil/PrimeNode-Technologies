import Link from "next/link";
import Image from "next/image";
import { MapPin, Mail, Phone, Globe } from "lucide-react";

function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "On-site IT Support", href: "/services/on-site-it-support" },
    { label: "Data Center Services", href: "/services/data-center-services" },
    { label: "Staging Services", href: "/services/staging-services" },
    { label: "Pre-Deployment Validation", href: "/services/pre-deployment-validation" },
    { label: "Deployment Assurance", href: "/services/deployment-assurance" },
    { label: "Local Coordination", href: "/services/local-coordination" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-white text-brand-navy relative overflow-hidden border-t border-brand-blue/10">
      <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-brand-blue/10 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-brand-blue/10 blur-3xl" aria-hidden />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-1">
            <Link href="/">
              <Image
                src="/logos/logo-primary.png"
                alt="PrimeNode Technologies"
                width={340}
                height={102}
                className="h-16 w-auto mb-5"
              />
            </Link>
            <p className="text-slate-600 text-sm leading-relaxed mb-5">
              Your trusted China IT execution partner. EU-grade quality, China-speed delivery — from Shenzhen to nationwide.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/company/primenodetech/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-brand-blue-light hover:bg-brand-blue text-brand-blue hover:text-white flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={16} />
              </a>
              <a
                href="https://primenodetech.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-brand-blue-light hover:bg-brand-blue text-brand-blue hover:text-white flex items-center justify-center transition-colors"
                aria-label="Website"
              >
                <Globe size={16} />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-sm font-semibold tracking-widest uppercase text-slate-500 mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-600 hover:text-brand-blue text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-sm font-semibold tracking-widest uppercase text-slate-500 mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-600 hover:text-brand-blue text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold tracking-widest uppercase text-slate-500 mb-4">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-brand-blue mt-0.5 shrink-0" />
                <span className="text-slate-600 text-sm">
                  Nanshan District, Shenzhen<br />Guangdong, China
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-brand-blue shrink-0" />
                <a
                  href="mailto:info@primenodetech.com"
                  className="text-slate-600 hover:text-brand-blue text-sm transition-colors"
                >
                  info@primenodetech.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-brand-blue shrink-0" />
                <a
                  href="tel:+971509199087"
                  className="text-slate-600 hover:text-brand-blue text-sm transition-colors"
                >
                  +971 50 919 9087
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-brand-blue/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} PrimeNode Technologies Shenzhen Co. All rights reserved.
          </p>
          <p className="text-slate-400 text-sm">
            Registered WFOE · Shenzhen, China
          </p>
        </div>
      </div>
    </footer>
  );
}
