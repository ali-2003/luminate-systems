export const SITE_URL = "https://www.luminatesystems.com";
export const SITE_NAME = "Luminate Systems";
export const SITE_EMAIL = "contact@luminatesystems.com";
export const SITE_PHONE = "+1 (331) 243-6122";
export const SITE_DESCRIPTION =
  "Custom software development for Chicago and beyond: clinic operations, nonprofit systems, tax workflows, e-commerce platforms, and business automation.";

export type Service = {
  slug: string;
  number: string;
  eyebrow: string;
  title: string;
  short: string;
  intro: string;
  includes: string[];
  details: string;
};

export const services: Service[] = [
  {
    slug: "custom-software-development",
    number: "01",
    eyebrow: "SOFTWARE ENGINEERING",
    title: "Custom software development",
    short: "Custom business software, internal tools, and web applications built around how your team really works.",
    intro: "Your processes are specific. Your software should be too. We design and engineer secure, maintainable applications that replace disconnected tools and awkward workarounds.",
    includes: ["Product discovery and technical architecture", "Internal operations platforms and portals", "Role-based workflows and permissions", "Modern React and Next.js applications", "Scalable APIs and databases", "Maintenance and product evolution"],
    details: "We begin with the real work: who's using the system, where decisions are made, and what success should look like. Then we build only what earns its place."
  },
  {
    slug: "nonprofit-software",
    number: "02",
    eyebrow: "MISSION-DRIVEN TECHNOLOGY",
    title: "Nonprofit & human-services software",
    short: "Nonprofit case management software for participant services, referrals, fund allocation, and staff workflows.",
    intro: "The people doing essential community work deserve technology that supports them. We build practical systems for tracking services, coordinating teams, and connecting operations.",
    includes: ["Case and participant management", "Referrals and service tracking", "Staff permissions and workflow controls", "Fund and resource allocation workflows", "Program reporting and operational dashboards", "Secure, accessible staff experiences"],
    details: "Our work on LuminCase informs how we approach nonprofit technology: clarity for frontline teams, accountability for leadership, and attention to the details that matter."
  },
  {
    slug: "web-development",
    number: "03",
    eyebrow: "DIGITAL EXPERIENCES",
    title: "Web development & digital experience",
    short: "Next.js websites and web applications engineered for performance, accessibility, and search visibility.",
    intro: "A website should earn attention and turn that attention into action. We pair visual ambition with strong content structure, accessibility, and technical search foundations.",
    includes: ["Brand-led website design and development", "Next.js and TypeScript architecture", "Interactive 3D and motion experiences", "Technical SEO and structured data", "E-commerce and Shopify integrations", "Core Web Vitals and accessibility"],
    details: "We treat motion as a tool for storytelling, not a tax on usability. Every major interaction should have a purpose and every page should work without the animation."
  },
  {
    slug: "workflow-automation",
    number: "04",
    eyebrow: "CONNECTED OPERATIONS",
    title: "Workflow automation & integrations",
    short: "Workflow automation and software integrations that reduce manual entry, reporting gaps, and disconnected systems.",
    intro: "When information is scattered between people, spreadsheets, and software, work slows down. We connect systems and design workflows that reduce re-entry and clarify ownership.",
    includes: ["System and process mapping", "API and third-party integrations", "Time tracking and payroll handoffs", "Internal dashboards and reporting", "Data synchronization and migrations", "Approval and notification workflows"],
    details: "The right integration should feel almost invisible: information flows to the right place, exceptions become visible, and teams spend less time checking the same work twice."
  }
];

export type Project = {
  slug: string;
  number: string;
  sector: string;
  title: string;
  short: string;
  seoTitle: string;
  seoDescription: string;
  headline: string;
  overview: string;
  features: string[];
  visual: "case" | "pay" | "clinic" | "tax" | "commerce" | "devices";
  tags: string[];
};

export const projects: Project[] = [
  {
    slug: "lumincase",
    number: "01",
    sector: "NONPROFIT OPERATIONS",
    title: "LuminCase",
    short: "Case management, referrals and fund allocation in a connected workspace.",
    seoTitle: "LuminCase — Nonprofit Case Management Software Project",
    seoDescription: "Explore LuminCase, a purpose-built nonprofit platform for case management, referrals, fund allocation, and staff workflows.",
    headline: "Less admin. More room for impact.",
    overview: "LuminCase brings case management, staff workflows, referrals, service documentation, and fund-allocation processes into one purpose-built platform for nonprofit teams.",
    features: ["Participant and case management", "Case notes and service records", "Referrals and follow-ups", "Staff workflows and permissions", "Fund allocation based on participant needs", "Operational oversight and reporting"],
    visual: "case",
    tags: ["PLATFORM DESIGN", "CASE MANAGEMENT", "OPERATIONS"]
  },
  {
    slug: "decare",
    number: "02",
    sector: "HEALTHCARE OPERATIONS",
    title: "Decare",
    short: "A clinic operations experience connecting patient intake, check-in and front-desk workflows.",
    seoTitle: "Decare — Clinic Operations & Patient Intake Software",
    seoDescription: "See Decare, a custom clinic operations platform designed for patient intake, digital check-in, and front-desk workflows.",
    headline: "A smoother day starts at check-in.",
    overview: "Decare is a clinic operations platform designed around the daily flow of patients and staff. It brings patient intake, check-in, and front-desk coordination into a more organized digital experience, with practical interfaces for the people using it.",
    features: ["Patient intake workflows", "Digital check-in experience", "Clinic front-desk operations", "Staff-facing workflow coordination", "Patient journey and status visibility", "Clear, accessible operational interfaces"],
    visual: "clinic",
    tags: ["HEALTHCARE", "PATIENT INTAKE", "CLINIC OPERATIONS"]
  },
  {
    slug: "taxos",
    number: "03",
    sector: "ACCOUNTING & TAX WORKFLOWS",
    title: "TaxOS",
    short: "Smarter tax-document intake, review and preparation workflows for firms and businesses.",
    seoTitle: "TaxOS — Tax Document Intake & Review Platform",
    seoDescription: "Discover TaxOS, a tax preparation workflow platform for accounting firms and businesses: document intake, review, reconciliation, and handoff.",
    headline: "Tax work, without the document chaos.",
    overview: "TaxOS is designed to help accounting firms and businesses organize the documents and review work that go into tax preparation and filing. Its focus is on structured intake, extracting information from forms, flagging discrepancies, and preparing reviewed data for existing tax software. Direct tax-return e-filing is not represented as a current feature.",
    features: ["Tax-document intake and organization", "K-1 and supporting form processing workflows", "Review and exception queues", "Reconciliation and tie-out support", "Staff review before downstream use", "Prepared handoff to existing tax systems"],
    visual: "tax",
    tags: ["TAX OPERATIONS", "ACCOUNTING FIRMS", "DOCUMENT WORKFLOWS"]
  },
  {
    slug: "paybridge",
    number: "04",
    sector: "WORKFORCE SYSTEMS",
    title: "PayBridge",
    short: "Time tracking, hours review and payroll-provider workflows in one place.",
    seoTitle: "PayBridge — Workforce Time Tracking & Payroll Workflows",
    seoDescription: "See PayBridge, a workforce system for clock-in, timesheet review, and integrations with existing payroll platforms.",
    headline: "From clock-in to clarity.",
    overview: "PayBridge is a workforce and payroll-workflow system centered on time entry, time tracking, and connections to payroll providers such as Paylocity, Gusto, and QuickBooks. Payroll handoff is distinct from directly processing payroll or holding funds.",
    features: ["Clock-in and clock-out workflows", "Manual timesheet entry", "Workforce hours review", "Payroll-provider integration planning", "Operational visibility", "Employer-oriented controls"],
    visual: "pay",
    tags: ["WORKFORCE", "INTEGRATIONS", "PRODUCT DESIGN"]
  },
  {
    slug: "mrkt-id-co",
    number: "05",
    sector: "E-COMMERCE",
    title: "MRKT ID CO",
    short: "A digital commerce platform built to make product discovery and purchasing feel effortless.",
    seoTitle: "MRKT ID CO — Custom E-Commerce Storefront Project",
    seoDescription: "Explore Luminate Systems’ e-commerce work for MRKT ID CO: storefront design, product discovery, and responsive shopping journeys.",
    headline: "Commerce with a clear point of view.",
    overview: "For MRKT ID CO, our work centers on an e-commerce platform: the storefront experience, product browsing, and purchase journey. The goal is to make shopping intuitive, visually distinctive and practical across screen sizes.",
    features: ["E-commerce storefront experience", "Product discovery and collections", "Product detail layouts", "Mobile-first shopping journey", "Checkout-oriented user experience", "Responsive interaction design"],
    visual: "commerce",
    tags: ["E-COMMERCE", "STOREFRONT", "CUSTOMER EXPERIENCE"]
  },
  {
    slug: "xphones-fr",
    number: "06",
    sector: "CONSUMER ELECTRONICS E-COMMERCE",
    title: "XPhones.fr",
    short: "A shopping experience for phones, devices and accessories.",
    seoTitle: "XPhones.fr — Mobile Phone & Devices E-Commerce",
    seoDescription: "Explore the XPhones.fr e-commerce project for smartphones, electronics, product discovery, and mobile-ready shopping.",
    headline: "Better browsing for better devices.",
    overview: "XPhones.fr is an e-commerce platform for phones, devices, and accessories. The experience focuses on organized product information and a straightforward shopping journey, making it easier for customers to explore the range from desktop or mobile.",
    features: ["Smartphone and device catalog", "Product details and specifications presentation", "Category and collection browsing", "Mobile-ready storefront", "Purchase-oriented navigation", "Clear product discovery"],
    visual: "devices",
    tags: ["E-COMMERCE", "ELECTRONICS", "PRODUCT DISCOVERY"]
  }
];

export function absoluteUrl(path: string = "/") {
  return new URL(path, SITE_URL).toString();
}
