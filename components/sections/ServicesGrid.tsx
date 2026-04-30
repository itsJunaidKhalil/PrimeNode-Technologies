"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Wrench,
  Server,
  PackageCheck,
  ShieldCheck,
  CheckSquare,
  Users,
  ArrowRight,
} from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";

const services = [
  {
    icon: Wrench,
    title: "On-site IT Support",
    description:
      "Field engineer dispatch across China for installations, troubleshooting, and ongoing maintenance — reliable boots on the ground for your projects.",
    href: "/services/on-site-it-support",
    color: "text-brand-blue",
    bg: "bg-brand-blue-light",
  },
  {
    icon: Server,
    title: "Data Center Services",
    description:
      "Full rack & stack deployments, fiber and copper cabling, hardware installation, and patching — executed to precision in any data center across China.",
    href: "/services/data-center-services",
    color: "text-brand-blue",
    bg: "bg-brand-blue-light",
  },
  {
    icon: PackageCheck,
    title: "Staging Services",
    description:
      "End-to-end equipment handling: receiving, inventory, asset tagging, device pre-configuration, and dispatch preparation — all before it leaves the staging floor.",
    href: "/services/staging-services",
    color: "text-brand-blue",
    bg: "bg-brand-blue-light",
  },
  {
    icon: ShieldCheck,
    title: "Pre-Deployment Validation",
    description:
      "Power load testing, fiber OTDR, network configuration, firmware checks, thermal validation — a full QA checklist so every deployment succeeds first time.",
    href: "/services/pre-deployment-validation",
    color: "text-brand-blue",
    bg: "bg-brand-blue-light",
  },
  {
    icon: CheckSquare,
    title: "Deployment Assurance",
    description:
      "We guarantee every piece of equipment is validated and site-ready before installation — eliminating failures, reducing rework, and protecting your SLAs.",
    href: "/services/deployment-assurance",
    color: "text-brand-blue",
    bg: "bg-brand-blue-light",
  },
  {
    icon: Users,
    title: "Local Coordination",
    description:
      "Vendor communication, scheduling, logistics, and real-time project support — aligned to EU time zones so you stay in control from anywhere in the world.",
    href: "/services/local-coordination",
    color: "text-brand-blue",
    bg: "bg-brand-blue-light",
  },
];

export default function ServicesGrid() {
  return (
    <SectionWrapper background="light" id="services">
      <SectionHeading
        eyebrow="What We Do"
        title="End-to-End IT Execution in China"
        subtitle="From staging to deployment, we handle every step on the ground — so you can focus on delivering for your clients."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.title}
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <Link
                href={service.href}
                className="group block bg-white/90 backdrop-blur rounded-2xl border border-brand-blue/15 p-6 md:p-8 hover:shadow-[0_20px_48px_rgba(11,82,236,0.2)] hover:border-brand-blue/35 hover:-translate-y-1 transition-all duration-300 h-full"
              >
                <div className={`w-12 h-12 ${service.bg} rounded-xl flex items-center justify-center mb-5`}>
                  <Icon size={22} className={service.color} />
                </div>
                <h3 className="text-lg font-semibold text-brand-navy mb-3 group-hover:text-brand-blue transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <span className={`inline-flex items-center gap-1.5 text-sm font-semibold ${service.color} group-hover:gap-2.5 transition-all`}>
                  Learn more <ArrowRight size={14} />
                </span>
              </Link>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 bg-brand-blue text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-[0_12px_30px_rgba(11,82,236,0.35)] hover:bg-brand-blue-hover hover:-translate-y-0.5"
        >
          View All Services <ArrowRight size={18} />
        </Link>
      </div>
    </SectionWrapper>
  );
}
