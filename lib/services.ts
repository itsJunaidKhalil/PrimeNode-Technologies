import {
  Wrench,
  Server,
  PackageCheck,
  ShieldCheck,
  CheckSquare,
  Users,
} from "lucide-react";

export const services = [
  {
    slug: "on-site-it-support",
    icon: Wrench,
    title: "On-site IT Support",
    tagline: "Reliable field engineers, wherever you need them",
    shortDescription:
      "Rapid dispatch for installation, troubleshooting, and maintenance across key China locations.",
    description:
      "We dispatch qualified IT engineers to customer sites, data centers, and office locations across China. Our on-site support team handles installations, break-fix workflows, and planned maintenance aligned to your SOPs.",
    features: [
      "Field engineer dispatch across major China cities",
      "Hardware installation and device bring-up",
      "Troubleshooting and fault resolution",
      "Planned maintenance and support tasks",
      "Fast dispatch windows",
      "Detailed post-visit reporting",
    ],
  },
  {
    slug: "data-center-services",
    icon: Server,
    title: "Data Center Services",
    tagline: "Precision execution in high-control environments",
    shortDescription:
      "Rack-and-stack, structured cabling, and installation support delivered to global standards.",
    description:
      "From rack and stack to fiber and copper cabling, our data center team delivers clean, compliant installation support across tier-1 facilities in China.",
    features: [
      "Rack and stack deployments",
      "Fiber optic and copper cabling",
      "Patch panel and cable management",
      "Hardware installation and patching",
      "Labeling and documentation",
      "Data center SOP compliance",
    ],
  },
  {
    slug: "staging-services",
    icon: PackageCheck,
    title: "Staging Services",
    tagline: "Hardware prepared before it reaches site",
    shortDescription:
      "Receiving, tagging, pre-configuration, and dispatch preparation from our staging workflow.",
    description:
      "Our staging workflow covers receiving, inventory control, asset tagging, pre-configuration, and packaging preparation so equipment arrives deployment-ready.",
    features: [
      "Equipment receiving and inventory tracking",
      "Asset tagging and labeling",
      "Device pre-configuration and imaging",
      "Firmware and OS provisioning",
      "Packaging and dispatch readiness",
      "Inventory and status reporting",
    ],
  },
  {
    slug: "pre-deployment-validation",
    icon: ShieldCheck,
    title: "Pre-Deployment Validation",
    tagline: "Catch defects before the field does",
    shortDescription:
      "Structured QA checks including power, network, thermal, and fiber validation.",
    description:
      "Before equipment leaves staging, we run a structured validation checklist to reduce field failures, rework, and deployment delays.",
    features: [
      "Power load and PSU validation",
      "Fiber verification and test checks",
      "Network configuration validation",
      "Firmware and version compliance checks",
      "Thermal and airflow verification",
      "Formal QA sign-off documentation",
    ],
  },
  {
    slug: "deployment-assurance",
    icon: CheckSquare,
    title: "Deployment Assurance",
    tagline: "Controlled releases, fewer surprises",
    shortDescription:
      "Readiness gating and go/no-go controls before site installation and handover.",
    description:
      "Deployment Assurance ensures every unit has passed readiness controls before site rollouts, helping protect uptime, SLAs, and delivery timelines.",
    features: [
      "Pre-release sign-off process",
      "Device-level readiness documentation",
      "Go/no-go controls",
      "Rollback and escalation flow support",
      "Change process alignment",
      "Post-deployment verification records",
    ],
  },
  {
    slug: "local-coordination",
    icon: Users,
    title: "Local Coordination",
    tagline: "Your on-ground execution bridge in China",
    shortDescription:
      "Vendor communication, scheduling, and milestone tracking with timezone-aligned updates.",
    description:
      "We bridge language, timezone, and logistics gaps by coordinating vendors, schedules, and project updates so your team keeps control remotely.",
    features: [
      "Vendor and supplier communication",
      "Scheduling and local logistics coordination",
      "EU business-hours update cadence",
      "Milestone and status reporting",
      "Import/customs coordination support",
      "On-site presence for critical phases",
    ],
  },
] as const;

export type Service = (typeof services)[number];
