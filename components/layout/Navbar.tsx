"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { clsx } from "clsx";
import { ChevronDown, Menu, X } from "lucide-react";

const serviceLinks = [
  { label: "On-site IT Support", href: "/services/on-site-it-support" },
  { label: "Data Center Services", href: "/services/data-center-services" },
  { label: "Staging Services", href: "/services/staging-services" },
  { label: "Pre-Deployment Validation", href: "/services/pre-deployment-validation" },
  { label: "Deployment Assurance", href: "/services/deployment-assurance" },
  { label: "Local Coordination", href: "/services/local-coordination" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        "brand-glass border-b",
        isScrolled ? "border-brand-blue/15 shadow-[0_8px_22px_rgba(15,23,42,0.09)]" : "border-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between min-h-[4.75rem] py-2">
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/logos/logo-primary.png"
              alt="PrimeNode Technologies"
              width={340}
              height={102}
              className="h-14 sm:h-16 md:h-[4.25rem] w-auto object-contain object-left"
              priority
            />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="font-medium text-slate-700 hover:text-brand-blue transition-colors duration-200 text-sm tracking-wide relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-brand-blue after:transition-all hover:after:w-full"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="font-medium text-slate-700 hover:text-brand-blue transition-colors duration-200 text-sm tracking-wide relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-brand-blue after:transition-all hover:after:w-full"
            >
              About
            </Link>
            <div className="relative group">
              <Link
                href="/services"
                className="font-medium text-slate-700 hover:text-brand-blue transition-colors duration-200 text-sm tracking-wide inline-flex items-center gap-1"
              >
                Services <ChevronDown size={14} className="mt-0.5" />
              </Link>
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="w-72 bg-white border border-brand-blue/15 rounded-xl shadow-lg p-2">
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-3 py-2.5 text-sm text-slate-700 rounded-lg hover:bg-brand-blue-light hover:text-brand-blue transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link
              href="/contact"
              className="font-medium text-slate-700 hover:text-brand-blue transition-colors duration-200 text-sm tracking-wide relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-brand-blue after:transition-all hover:after:w-full"
            >
              Contact
            </Link>
            <Link
              href="/contact"
              className="bg-brand-blue text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors duration-200 shadow-[0_4px_12px_rgba(11,82,236,0.35)] hover:bg-brand-blue-hover"
            >
              Get a Quote
            </Link>
          </div>

          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-brand-blue-light transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {isMobileOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-brand-blue/10 py-4 px-2 shadow-lg rounded-b-2xl">
            <Link
              href="/"
              onClick={() => setIsMobileOpen(false)}
              className="block px-4 py-3 text-slate-700 font-medium rounded-lg hover:bg-brand-blue-light hover:text-brand-blue transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setIsMobileOpen(false)}
              className="block px-4 py-3 text-slate-700 font-medium rounded-lg hover:bg-brand-blue-light hover:text-brand-blue transition-colors"
            >
              About
            </Link>
            <button
              onClick={() => setIsMobileServicesOpen((prev) => !prev)}
              className="w-full flex items-center justify-between px-4 py-3 text-slate-700 font-medium rounded-lg hover:bg-brand-blue-light hover:text-brand-blue transition-colors"
            >
              Services <ChevronDown size={16} className={clsx("transition-transform", isMobileServicesOpen && "rotate-180")} />
            </button>
            {isMobileServicesOpen && (
              <div className="px-2 pb-2">
                {serviceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileOpen(false)}
                    className="block px-4 py-2.5 text-sm text-slate-600 rounded-lg hover:bg-brand-blue-light hover:text-brand-blue transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
            <Link
              href="/contact"
              onClick={() => setIsMobileOpen(false)}
              className="block px-4 py-3 text-slate-700 font-medium rounded-lg hover:bg-brand-blue-light hover:text-brand-blue transition-colors"
            >
              Contact
            </Link>
            <div className="mt-3 px-4">
              <Link
                href="/contact"
                onClick={() => setIsMobileOpen(false)}
                className="block text-center bg-brand-blue text-white px-5 py-3 rounded-lg font-semibold hover:bg-brand-blue-hover transition-colors"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
