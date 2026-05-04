import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const out = path.join(__dirname, "../lib/i18n/dictionaries/en.ts");

const o = {
  "nav.home": "Home",
  "nav.about": "About",
  "nav.services": "Services",
  "nav.contact": "Contact",
  "nav.getQuote": "Get a Quote",
  "nav.svc.onsite": "On-site IT Support",
  "nav.svc.datacenter": "Data Center Services",
  "nav.svc.staging": "Staging Services",
  "nav.svc.validation": "Pre-Deployment Validation",
  "nav.svc.assurance": "Deployment Assurance",
  "nav.svc.coordination": "Local Coordination",
  "footer.tagline":
    "Your trusted China IT execution partner. EU-grade quality, China-speed delivery — from Shenzhen to nationwide.",
  "footer.company": "Company",
  "footer.services": "Services",
  "footer.contact": "Contact",
  "footer.copyright": "All rights reserved.",
  "footer.legal": "© {year} PrimeNode Technologies Shenzhen Co. All rights reserved.",
  "footer.wfoe": "Registered WFOE · Shenzhen, China",
  "footer.address": "Nanshan District, Shenzhen\nGuangdong, China",
  "lang.label": "Language",
  "hero.badge": "WFOE Registered · Shenzhen, China",
  "hero.line1Before": "Your Trusted ",
  "hero.line1Accent": "China IT",
  "hero.line2Accent": "Execution",
  "hero.line2After": " Partner",
  "hero.subtitle":
    "We enable global MSPs, system integrators, and IT companies to operate efficiently in China — with local execution built on international standards.",
  "hero.ctaPrimary": "Start Your Project",
  "hero.ctaSecondary": "Explore Services",
  "hero.coreOps": "Core Operations",
  "hero.op.0.title": "On-Site IT Support",
  "hero.op.0.desc": "Field engineers across China",
  "hero.op.1.title": "Staging & Validation",
  "hero.op.1.desc": "Pre-deployment QA & testing",
  "hero.op.2.title": "Data Center Services",
  "hero.op.2.desc": "Rack, stack & cabling",
  "hero.op.3.title": "Local Coordination",
  "hero.op.3.desc": "EU timezone aligned support",
  "hero.side.cov.label": "Coverage",
  "hero.side.cov.val": "4+",
  "hero.side.cov.sub": "Major Cities",
  "hero.side.qual.label": "Quality",
  "hero.side.qual.val": "100%",
  "hero.side.qual.sub": "Pre-validated",
  "badge.eu": "EU-Grade Standards",
  "badge.fast": "Fast Turnaround",
  "badge.nationwide": "China Nationwide",
  "stats.0.value": "4+",
  "stats.0.label": "Cities Covered",
  "stats.0.sub": "Shenzhen · Shanghai · Beijing · Guangzhou",
  "stats.1.value": "100%",
  "stats.1.label": "Pre-Validated",
  "stats.1.sub": "Every deployment QA-checked",
  "stats.2.value": "EU TZ",
  "stats.2.label": "Support Aligned",
  "stats.2.sub": "Real-time coordination",
  "stats.3.value": "WFOE",
  "stats.3.label": "Legally Registered",
  "stats.3.sub": "Fully compliant China entity",
  "svcGrid.eyebrow": "What We Do",
  "svcGrid.title": "End-to-End IT Execution in China",
  "svcGrid.subtitle":
    "From staging to deployment, we handle every step on the ground — so you can focus on delivering for your clients.",
  "svcGrid.learnMore": "Learn more",
  "svcGrid.viewAll": "View All Services",
  "why.eyebrow": "Why PrimeNode",
  "why.title": "The China Execution Partner Built for Global Standards",
  "why.subtitle":
    "We don't just have a presence in China — we operate with the discipline and standards your global clients expect.",
  "why.hl0": "WFOE legally registered in Shenzhen",
  "why.hl1": "Nationwide coverage across 4+ major cities",
  "why.hl2": "Founder-led quality assurance",
  "why.hl3": "Aligned with EU time zones",
  "why.hl4": "Transparent project reporting",
  "why.hl5": "Cost-efficient vs. overseas deployments",
  "why.r0.title": "EU Experience + China Presence",
  "why.r0.desc":
    "Unique bridge between European operational standards and on-the-ground Chinese execution. We understand both worlds deeply.",
  "why.r1.title": "High-Quality Staging & Validation",
  "why.r1.desc":
    "Every device goes through our rigorous pre-deployment QA — power testing, fiber OTDR, firmware validation — before it ever reaches site.",
  "why.r2.title": "Fast Response, EU Time-Zone Aligned",
  "why.r2.desc":
    "Real-time communication with European clients during EU business hours. No more waking up to overnight surprises.",
  "why.r3.title": "Scalable Execution Model",
  "why.r3.desc":
    "From single-engineer dispatch to nationwide multi-city deployments. We scale with your project — no bloated overheads.",
  "how.eyebrow": "The Process",
  "how.title": "Simple. Reliable. Repeatable.",
  "how.subtitle":
    "We've built a process that takes complexity off your plate and puts quality delivery on the table every time.",
  "how.s0.num": "01",
  "how.s0.title": "Submit Your Project Brief",
  "how.s0.desc":
    "Tell us about your project requirements, location, timeline, and scope. We'll respond with a detailed proposal within 24 hours.",
  "how.s1.num": "02",
  "how.s1.title": "We Plan & Stage",
  "how.s1.desc":
    "Our team receives your equipment, runs full pre-deployment validation, configures devices, and prepares everything for site installation.",
  "how.s2.num": "03",
  "how.s2.title": "We Execute On-Site",
  "how.s2.desc":
    "Our field engineers deploy on location, follow your SOPs, and deliver real-time status updates — keeping you fully in control.",
  "cta.conv.eyebrow": "Start a Conversation",
  "cta.home.title": "Ready to Execute Your China IT Project?",
  "cta.home.subtitle":
    "Partner with PrimeNode and get EU-grade quality with China-speed execution. Let's discuss your project today.",
  "cta.home.primary": "Get a Free Quote",
  "cta.home.secondary": "View Our Services",
  "svcDetail.eyebrow": "Service Detail",
  "svcDetail.overview": "Service Overview",
  "svcDetail.sidebar":
    "This service is designed to reduce delivery risk and keep global teams in control through structured on-ground execution.",
  "svcDetail.scopeEyebrow": "What Is Included",
  "svcDetail.scopeTitle": "Key Scope",
  "svcDetail.scopeSub":
    "A practical, execution-focused scope aligned with global infrastructure standards.",
  "svcDetail.discuss": "Discuss This Service",
  "svcDetail.ctaTitleSuffix": " in China?",
  "svcDetail.ctaTitlePrefix": "Need ",
  "svcDetail.ctaSub":
    "Share your scope and timeline. We will provide a practical delivery plan with clear next steps.",
  "svcDetail.quote": "Get a Quote",
  "svcDetail.viewAll": "View All Services",
  "page.services.eyebrow": "Our Services",
  "page.services.titleAccent": "Full-Spectrum",
  "page.services.titleRest": " IT Execution in China",
  "page.services.desc":
    "Six core services, one execution partner. From the staging floor to the data center floor — we handle every step.",
  "page.services.cta": "Discuss Your Project",
  "page.services.activeEyebrow": "Active Services",
  "page.services.activeTitle": "What We Deliver",
  "page.services.activeSub":
    "A clear, minimal overview of every service. Open each page for full scope, workflow, and deliverables.",
  "page.services.servicePrefix": "Service",
  "page.services.viewDetails": "View Details",
  "page.services.getQuote": "Get Quote",
  "page.services.helpP":
    "Need help choosing the right service combination? We map your scope to the fastest low-risk delivery plan.",
  "page.services.helpCta": "Talk to Our Team",
  "page.services.helpLink": "Learn how we work",
  "page.services.marketsEyebrow": "Who We Work With",
  "page.services.marketsTitle": "Built for Global IT Companies Operating in China",
  "page.services.marketsSub":
    "Our services are designed specifically for international companies who need trusted, high-quality local execution.",
  "page.services.m0.title": "European & US MSPs",
  "page.services.m0.desc": "Managed service providers expanding their China delivery footprint.",
  "page.services.m1.title": "Global System Integrators",
  "page.services.m1.desc": "SI firms managing multi-country deployments with China scope.",
  "page.services.m2.title": "Data Center Operators",
  "page.services.m2.desc": "International operators deploying or expanding in Chinese facilities.",
  "page.services.m3.title": "IT Deployment Companies",
  "page.services.m3.desc": "Specialist deployment firms needing reliable China sub-contractors.",
  "cta.services.title": "Need IT Execution in China?",
  "cta.services.subtitle":
    "Tell us about your project and we'll come back with a detailed plan, timeline, and pricing.",
  "cta.services.primary": "Get a Free Quote",
  "cta.services.secondary": "Learn About Us",
  "page.contact.eyebrow": "Contact Us",
  "page.contact.titleBefore": "Let's Discuss Your ",
  "page.contact.titleAccent": "Project",
  "page.contact.desc":
    "Tell us what you need. We'll respond with a clear plan, honest timeline, and competitive pricing — within 24 hours.",
  "page.contact.asideTitle": "Get In Touch",
  "page.contact.asideIntro":
    "We work with MSPs, system integrators, data center operators, and IT deployment companies worldwide. Reach out and let's explore how we can support your China operations.",
  "page.contact.labelOffice": "Office",
  "page.contact.labelEmail": "Email",
  "page.contact.labelPhone": "Phone",
  "page.contact.labelResponse": "Response Time",
  "page.contact.responseValue": "Within 24 business hours",
  "page.contact.connect": "Connect with us",
  "page.contact.linkedin": "LinkedIn",
  "page.contact.euTitle": "EU Time Zone Support",
  "page.contact.euBody":
    "We coordinate and communicate during European business hours (CET/CEST) so your team always has a responsive partner.",
  "page.about.eyebrow": "About PrimeNode",
  "page.about.titleBefore": "China's IT Execution Hub for ",
  "page.about.titleAccent": "Global Operations",
  "page.about.desc":
    "We are a WFOE registered in Shenzhen, operating as a trusted local execution partner for international IT companies who need reliable, high-quality delivery in China.",
  "page.about.cta": "Work With Us",
  "page.about.visionTitle": "Our Vision",
  "page.about.visionBody":
    "To be the most trusted China execution partner for global IT operations — a bridge between international standards and local delivery excellence.",
  "page.about.missionTitle": "Our Mission",
  "page.about.missionBody":
    "To deliver high-quality on-ground IT services in China — reducing deployment risk, improving delivery timelines, and enabling global clients to operate with confidence.",
  "page.about.whoEyebrow": "Who We Are",
  "page.about.whoTitle": "Built for the Gap Between Global and Local",
  "page.about.whoP1":
    "PrimeNode Technologies Shenzhen Co. was established to solve a persistent challenge: global IT companies need reliable execution in China, but struggle with local complexity, language barriers, and operational risk.",
  "page.about.whoP2":
    "We operate as a fully registered WFOE in Nanshan, Shenzhen — China's technology hub — giving our clients a legally compliant, professionally operated local partner they can trust.",
  "page.about.whoP3":
    "With a foundation built on European operational discipline and deep China market knowledge, we bring the best of both worlds to every project we execute.",
  "page.about.v0.title": "Reliability",
  "page.about.v0.desc": "We show up, we deliver, and we communicate throughout. No surprises.",
  "page.about.v1.title": "Quality",
  "page.about.v1.desc": "EU-grade standards applied to every staging, deployment, and support task.",
  "page.about.v2.title": "Transparency",
  "page.about.v2.desc": "Real-time updates, detailed reports, and honest timelines — always.",
  "page.about.v3.title": "Efficiency",
  "page.about.v3.desc": "Lean operations, fast turnaround, and cost-conscious execution.",
  "page.about.strategyEyebrow": "Growth Strategy",
  "page.about.strategyTitle": "Scaling with Purpose",
  "page.about.strategySub":
    "A structured four-phase approach to building China's most reliable IT execution network.",
  "page.about.phaseLabel": "Phase",
  "page.about.active": "Active",
  "page.about.ph1.title": "Founder-Led Execution",
  "page.about.ph1.desc":
    "High-touch, quality-first delivery led directly by our founder. Every project receives personal oversight.",
  "page.about.ph2.title": "Freelance Engineer Network",
  "page.about.ph2.desc":
    "Building a vetted network of certified field engineers across China's major cities.",
  "page.about.ph3.title": "Vendor & Supplier Partnerships",
  "page.about.ph3.desc":
    "Establishing strategic partnerships with hardware vendors, logistics providers, and data center operators.",
  "page.about.ph4.title": "Nationwide Scale",
  "page.about.ph4.desc":
    "Full nationwide operations covering all major Chinese cities and industrial zones.",
  "page.about.coverageEyebrow": "Coverage",
  "page.about.coverageTitle": "Operating Across China's Key Hubs",
  "page.about.coverageSub":
    "Headquartered in Shenzhen with active coverage expanding to Shanghai, Beijing, and Guangzhou — and growing.",
  "page.about.city.sz": "Shenzhen",
  "page.about.city.sh": "Shanghai",
  "page.about.city.bj": "Beijing",
  "page.about.city.gz": "Guangzhou",
  "page.about.cityRole.hq": "Headquarters",
  "page.about.cityRole.active": "Active Coverage",
  "page.about.coverageFoot":
    "Expansion based on project demand — additional cities available on request.",
  "cta.about.title": "Let's Build Something Together",
  "cta.about.subtitle":
    "Whether you're an MSP, system integrator, or data center operator — we have the China execution capability you need.",
  "cta.about.primary": "Contact Us",
  "cta.about.secondary": "Our Services",
  "form.title": "Project Enquiry",
  "form.subtitle":
    "Fill in the details below and we'll prepare a tailored proposal for your China project.",
  "form.name": "Full Name",
  "form.company": "Company",
  "form.email": "Email",
  "form.phone": "Phone",
  "form.phoneOpt": "(optional)",
  "form.service": "Service Needed",
  "form.servicePlaceholder": "Select a service...",
  "form.location": "Project Location",
  "form.details": "Project Details",
  "form.submit": "Send Enquiry",
  "form.sending": "Sending...",
  "form.footerNote": "We respond to all enquiries within 24 business hours.",
  "form.successTitle": "Message Sent!",
  "form.successBody":
    "Thank you for reaching out. We'll review your project details and get back to you within 24 business hours.",
  "form.sendAnother": "Send Another Message",
  "form.err.name": "Name is required",
  "form.err.company": "Company is required",
  "form.err.email": "Email is required",
  "form.err.emailPattern": "Enter a valid email address",
  "form.err.service": "Please select a service",
  "form.err.location": "Location is required",
  "form.err.message": "Please describe your project",
  "form.err.messageMin": "Please provide at least 20 characters",
  "form.err.generic":
    "Something went wrong. Please try again or email us directly at",
  "form.opt.other": "Multiple / Not Sure Yet",
};

const svc = {
  onsite: {
    title: "On-site IT Support",
    tagline: "Reliable field engineers, wherever you need them",
    short:
      "Rapid dispatch for installation, troubleshooting, and maintenance across key China locations.",
    long: "We dispatch qualified IT engineers to customer sites, data centers, and office locations across China. Our on-site support team handles installations, break-fix workflows, and planned maintenance aligned to your SOPs.",
    features: [
      "Field engineer dispatch across major China cities",
      "Hardware installation and device bring-up",
      "Troubleshooting and fault resolution",
      "Planned maintenance and support tasks",
      "Fast dispatch windows",
      "Detailed post-visit reporting",
    ],
  },
  datacenter: {
    title: "Data Center Services",
    tagline: "Precision execution in high-control environments",
    short:
      "Rack-and-stack, structured cabling, and installation support delivered to global standards.",
    long: "From rack and stack to fiber and copper cabling, our data center team delivers clean, compliant installation support across tier-1 facilities in China.",
    features: [
      "Rack and stack deployments",
      "Fiber optic and copper cabling",
      "Patch panel and cable management",
      "Hardware installation and patching",
      "Labeling and documentation",
      "Data center SOP compliance",
    ],
  },
  staging: {
    title: "Staging Services",
    tagline: "Hardware prepared before it reaches site",
    short:
      "Receiving, tagging, pre-configuration, and dispatch preparation from our staging workflow.",
    long: "Our staging workflow covers receiving, inventory control, asset tagging, pre-configuration, and packaging preparation so equipment arrives deployment-ready.",
    features: [
      "Equipment receiving and inventory tracking",
      "Asset tagging and labeling",
      "Device pre-configuration and imaging",
      "Firmware and OS provisioning",
      "Packaging and dispatch readiness",
      "Inventory and status reporting",
    ],
  },
  validation: {
    title: "Pre-Deployment Validation",
    tagline: "Catch defects before the field does",
    short: "Structured QA checks including power, network, thermal, and fiber validation.",
    long: "Before equipment leaves staging, we run a structured validation checklist to reduce field failures, rework, and deployment delays.",
    features: [
      "Power load and PSU validation",
      "Fiber verification and test checks",
      "Network configuration validation",
      "Firmware and version compliance checks",
      "Thermal and airflow verification",
      "Formal QA sign-off documentation",
    ],
  },
  assurance: {
    title: "Deployment Assurance",
    tagline: "Controlled releases, fewer surprises",
    short: "Readiness gating and go/no-go controls before site installation and handover.",
    long: "Deployment Assurance ensures every unit has passed readiness controls before site rollouts, helping protect uptime, SLAs, and delivery timelines.",
    features: [
      "Pre-release sign-off process",
      "Device-level readiness documentation",
      "Go/no-go controls",
      "Rollback and escalation flow support",
      "Change process alignment",
      "Post-deployment verification records",
    ],
  },
  coordination: {
    title: "Local Coordination",
    tagline: "Your on-ground execution bridge in China",
    short:
      "Vendor communication, scheduling, and milestone tracking with timezone-aligned updates.",
    long: "We bridge language, timezone, and logistics gaps by coordinating vendors, schedules, and project updates so your team keeps control remotely.",
    features: [
      "Vendor and supplier communication",
      "Scheduling and local logistics coordination",
      "EU business-hours update cadence",
      "Milestone and status reporting",
      "Import/customs coordination support",
      "On-site presence for critical phases",
    ],
  },
};

for (const [k, v] of Object.entries(svc)) {
  o[`svc.${k}.title`] = v.title;
  o[`svc.${k}.tagline`] = v.tagline;
  o[`svc.${k}.short`] = v.short;
  o[`svc.${k}.long`] = v.long;
  v.features.forEach((f, i) => {
    o[`svc.${k}.f${i}`] = f;
  });
}

function esc(s) {
  return s.replace(/\\/g, "\\\\").replace(/'/g, "\\'").replace(/\n/g, "\\n");
}

const keys = Object.keys(o).sort();
const body = keys.map((k) => `  '${esc(k)}': '${esc(o[k])}',`).join("\n");
const content = `export const en = {\n${body}\n} as const;\n\nexport type MessageKey = keyof typeof en;\n`;

fs.mkdirSync(path.dirname(out), { recursive: true });
fs.writeFileSync(out, content);
console.log("wrote", out, "lines", keys.length);
