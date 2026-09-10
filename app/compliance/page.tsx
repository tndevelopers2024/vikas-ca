import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  FileCheck2,
  PiggyBank,
  Scale,
  Building2,
  TrendingUp,
  ShieldCheck,
  Zap,
  ArrowUpRight,
  BadgeCheck,
  Sparkles,
} from "lucide-react";
import { Header } from "@/components/navigation/Header";
import { PageBanner } from "@/components/sections/PageBanner";
import { OutsourcingModels } from "@/components/sections/OutsourcingModels";
import { IndustrySolutions } from "@/components/sections/IndustrySolutions";
import { ServiceCatalogue } from "@/components/sections/ServiceCatalogue";
import { ReadyToScaleCTA } from "@/components/sections/ReadyToScaleCTA";
import { Footer } from "@/components/sections/Footer";
import { FloatingActions } from "@/components/ui/FloatingActions";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Compliance Services We Provide | NICS",
  description:
    "Statutory filings and compliance support from NICS — SMSF compliance, financial statement preparation, GST and VAT returns, individual and company tax returns, and audit back office support.",
};

const heroImage = "/images/nics/compliance-calculation.jpg";

const complianceServices = [
  {
    id: "smsf-compliance",
    name: "SMSF Compliance",
    tag: "Bundled Accounts & Audit",
    icon: PiggyBank,
    image: "/images/nics/compliance-review.jpg",
    imageAlt: "SMSF compliance and audit specialists reviewing fund financials and tax documentation",
    description:
      "Comprehensive back-office support for SMSF compliance (year-end financial statements and tax returns) and administration. Our industry-leading SMSF bundled service (accounts and audit) offers a one-stop solution for all your SMSF needs and is a great value addition for your business.",
    points: [
      "Year-end SMSF financial statements and member statements",
      "SMSF annual return preparation and supporting schedules",
      "Fund administration, data feeds, and bank reconciliations",
      "Bundled accounts and audit delivery as a single workflow",
    ],
  },
  {
    id: "compliance-processes",
    name: "Compliance Processes",
    tag: "Statutory Filings",
    icon: FileCheck2,
    image: "/images/nics/accounting-tax.jpg",
    imageAlt: "Accountants preparing statutory filings, financial disclosures, and GST VAT returns",
    description:
      "Statutory filings and compliances encompassing financial statements preparation, GST and VAT returns, individual tax returns, and company tax returns.",
    points: [
      "Financial statement preparation to applicable standards",
      "GST and VAT return preparation and reconciliation",
      "Individual tax return preparation and workpapers",
      "Company tax returns with supporting compliance schedules",
    ],
  },
  {
    id: "audit-back-office-support",
    name: "Audit Back Office Support",
    tag: "Assurance & Risk",
    icon: ClipboardCheck,
    image: "/images/nics/accounting-desk.jpg",
    imageAlt: "Assurance team examining audit workpapers, lead schedules, and risk checklists",
    description:
      "Have an expert team of industry experts, accountants and finance professionals undertake your audit support requirements. Be it audit, tax or advisory work, execute any-and-all audit related work from sophisticated accountants who harness newer technologies and industry best practices to ensure a comprehensive support service.",
    points: [
      "Examining financial records and categorizing key focus areas",
      "Lead schedules, reconciliations, and evidence organisation",
      "Internal control documentation and testing sampling support",
      "Closely controlled processes that lift effectiveness and profitability",
    ],
  },
];

const industrySolutions = [
  {
    title: "Accounting Industry",
    anchor: "accounting-industry",
    badge: "Practices & CPA Firms",
    stat: "Peak Season Scaling",
    statDetail: "Zero review bottleneck",
    image: "/images/nics/accounting-review.jpg",
    icon: Building2,
    description:
      "Give your practice consistent compliance capacity through peak season — workpapers, financial statements, and returns prepared to your templates and review standards.",
    benefits: [
      "Standardised workpapers and lead schedules",
      "Financial statements and tax return drafts ready for review",
      "Consistent turnaround across compliance season peaks",
    ],
  },
  {
    title: "Business Enterprises",
    anchor: "business-enterprises",
    badge: "Corporate & Multi-Entity",
    stat: "Group Consolidation",
    statDetail: "Audit-ready reconciliation trails",
    image: "/images/nics/blog-sales-review.jpg",
    icon: TrendingUp,
    description:
      "Keep statutory obligations on schedule with dedicated support for indirect tax returns, year-end reporting packs, and audit readiness across entities.",
    benefits: [
      "GST and VAT return cycles with reconciliation trails",
      "Year-end reporting packs and group consolidation support",
      "Audit-ready documentation maintained through the year",
    ],
  },
  {
    title: "SMSF Specialists",
    anchor: "smsf-audit",
    badge: "Administrators & Trustees",
    stat: "Bundled Delivery",
    statDetail: "Accounts & independent audit unified",
    image: "/images/nics/accounting-analyst.jpg",
    icon: Scale,
    description:
      "A one-stop bundled service for SMSF administrators and specialist firms, covering fund accounting through to audit documentation under one delivery workflow.",
    benefits: [
      "End-to-end SMSF accounts and annual return preparation",
      "Bundled accounts and audit as a single engagement",
      "Fund file administration and permanent document upkeep",
    ],
  },
];

const outsourcingModels = [
  {
    number: "01",
    title: "Insourcing",
    tag: "Dedicated Extension",
    stat: "100% Dedicated",
    statDetail: "Direct seat in your practice",
    image: "/images/nics/build-team-meeting.jpg",
    description:
      "Dedicated full-time compliance resources working directly inside your systems and workflows, operating seamlessly as an integrated extension of your internal team.",
    highlights: [
      "100% dedicated to your firm",
      "Works in your software & timezone",
      "Direct daily task communication",
    ],
  },
  {
    number: "02",
    title: "Insourcing with Manager Support",
    tag: "Managed Governance",
    stat: "Manager QA Oversight",
    statDetail: "Dual-layer review & SOPs",
    image: "/images/nics/administrative-partners.jpg",
    description:
      "Dedicated preparers backed by experienced compliance managers and team leads who ensure quality control, SLA adherence, and ongoing technical coaching.",
    highlights: [
      "Dedicated resources + Team Lead oversight",
      "Built-in quality assurance & SOP governance",
      "Minimal management overhead for your team",
    ],
  },
  {
    number: "03",
    title: "Job-by-Job",
    tag: "On-Demand & Scalable",
    stat: "On-Demand Surge",
    statDetail: "Pay-as-you-go capacity",
    image: "/images/nics/discover-workstation.jpg",
    description:
      "A flexible, pay-as-you-go delivery model where compliance work is submitted per job or per file, ideal for handling lodgement deadlines and overflow work.",
    highlights: [
      "Pay only for work completed",
      "Ideal for lodgement peaks and overflow",
      "No long-term staffing commitments",
    ],
  },
  {
    number: "04",
    title: "BOT Model",
    tag: "Build · Operate · Transfer",
    stat: "Enterprise Asset",
    statDetail: "Seamless unit transition",
    image: "/images/nics/who-we-are-unity.jpg",
    description:
      "We recruit, train, and build your dedicated offshore compliance unit, manage daily operations under stringent SLAs, and transfer complete operational ownership when ready.",
    highlights: [
      "Custom team recruitment and setup",
      "Operational maturity and SLA governance",
      "Smooth transition of ownership to your firm",
    ],
  },
];

export default function CompliancePage() {
  return (
    <div className="min-h-screen bg-white text-[#0b1524]">
      <Header />

      <main>
        {/* HERO BANNER (matching dante-new.vercel.app full-bleed banner) */}
        <PageBanner
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Compliance" }]}
          badge="Compliance & SMSF"
          badgeHighlight="Zero Data Breaches"
          title="Compliance Services We Provide"
          description="Navigating strict statutory deadlines, complex tax rules, and fund obligations shouldn't bottleneck your practice. NICS delivers dedicated compliance and SMSF back-office specialists to prepare review-ready workpapers, statutory filings, and audit-ready files—ensuring error-free lodgements while protecting your firm's bottom line."
          primaryCta={{ label: "Make an Enquiry", href: "/contact" }}
          secondaryCta={{ label: "Explore Compliance", href: "#services" }}
          metrics={[
            { value: "5,000+", label: "SMSF Lodgements" },
            { value: "Turnkey", label: "Bundled Audit" },
            { value: "Zero", label: "Data Breaches" },
          ]}
          image={heroImage}
          cardBadge="NICS Compliance"
          cardTitle="Statutory Filings, SMSF & Audit Support"
          cardSubtitle="Disciplined documentation behind every lodgement — your team retains full review and sign-off."
          imageAlt="Accountant checking figures on a calculator beside a stack of compliance documents"
        />

        {/* SERVICES SECTION */}
        <ServiceCatalogue
          title={"Compliance Services"}
          description={"From SMSF compliance and statutory filings to full audit back office support, our accountants prepare the workpapers, statements, and returns your team reviews and signs off."}
          items={complianceServices}
        />

        {/* SOLUTIONS BY INDUSTRY */}
        <IndustrySolutions
          eyebrow={"Industry-Configured Delivery"}
          title={"View Solutions by Industry"}
          description={"Discover how our compliance expertise is configured to address the specific obligations, peak calendars, and regulatory mandates of your sector."}
          items={industrySolutions}
          supportTag="Standardised SOPs"
        />

        {/* OUTSOURCING MODELS */}
        <OutsourcingModels
          eyebrow={"Delivery Flexibility & Frameworks"}
          title={"Outsourcing Models"}
          description={"Choose the operating framework configured for your firm's compliance volume, partner review workflows, and long-term scaling horizon."}
          models={outsourcingModels}
          highlightsLabel="Operating Highlights"
        />

        {/* CALL TO ACTION */}
        <ReadyToScaleCTA />
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}
