import type { Metadata } from "next";
import {
  FileText,
  FileSpreadsheet,
  FileEdit,
  SearchCheck,
  FolderOpen,
  BookOpen,
  Building2,
  TrendingUp,
  Scale,
} from "lucide-react";
import { Header } from "@/components/navigation/Header";
import { PageBanner } from "@/components/sections/PageBanner";
import { ReadyToScaleCTA } from "@/components/sections/ReadyToScaleCTA";
import { Footer } from "@/components/sections/Footer";
import { FloatingActions } from "@/components/ui/FloatingActions";
import { CapabilityList } from "@/components/sections/service/CapabilityList";
import { IndustryColumns } from "@/components/sections/service/IndustryColumns";
import { DeliveryModelColumns } from "@/components/sections/service/DeliveryModelColumns";

export const metadata: Metadata = {
  title: "Legal Process Outsourcing (LPO) | NICS",
  description:
    "Explore Legal Process Outsourcing (LPO) services and delivery models at NICS. Contract Management, Contract Abstract & Summary, Contract Drafting, Due Diligence, General Legal Administration, and Legal Research.",
};

const heroImage = "/images/bright/page-legal.jpg";

const legalServices = [
  {
    id: "contract-management",
    name: "Contract Management & Administration",
    tag: "Lifecycle Governance",
    icon: FileText,
    description:
      "These encompass Creation and Management of Contract including, Contract Review, Contract Support and Assistance. Contract Administration tasks such as Contract Uploading and Downloading, Contract Workflow Management.",
    points: [
      "Contract repository uploading, tagging & indexing",
      "Contract lifecycle workflow and milestone tracking",
      "Key date, renewal, and termination notice alerts",
      "Version control and contract repository maintenance",
    ],
  },
  {
    id: "contract-abstract-summary",
    name: "Preparation of Contract Abstract & Summary",
    tag: "Structured Extraction",
    icon: FileSpreadsheet,
    description:
      "Contract Analysis, Preparation of Contract Abstract, drafting Real Estate Leases and Contracts, Employment Agreements, Intellectual Property Agreements/IP Agreements, MSA and SOWs, Mergers and Acquisition/M&A, Class Action, Deposition summaries, Purchase & Sale Agreement.",
    points: [
      "Key obligation matrices and covenant abstracting",
      "Commercial real estate lease abstracts & schedules",
      "M&A data room document review & executive summaries",
      "Deposition summaries, class action review & SOW abstracts",
    ],
  },
  {
    id: "contract-drafting",
    name: "Contract Drafting",
    tag: "Template & Clause Assembly",
    icon: FileEdit,
    description:
      "Drafting contracts for Employment, Master Service Agreements, Affidavits, Shareholder, Wills, Notices, Legal Briefs and Motions, Memorandum of Law.",
    points: [
      "Master Service Agreements (MSAs) & Statements of Work",
      "Employment, confidentiality & non-disclosure agreements",
      "Shareholder agreements, resolutions, notices & affidavits",
      "Drafting legal briefs, motions & memoranda of law",
    ],
  },
  {
    id: "due-diligence",
    name: "Due Diligence Support",
    tag: "Risk & Document Review",
    icon: SearchCheck,
    description:
      "Reasonable investigation of Facts, Circumstances and statements for further process.",
    points: [
      "Virtual data room (VDR) organisation & indexing",
      "Corporate records & statutory register verification",
      "Asset, liability, and material contract cross-checking",
      "Red-flag summary reports for onshore counsel review",
    ],
  },
  {
    id: "general-legal-admin",
    name: "General Legal Administration",
    tag: "Practice & Court Admin",
    icon: FolderOpen,
    description:
      "Administrative support in Transcribing and proofreading legal documents, Filing, organising, and processing legal documents, Scheduling court depositions hearings, scheduling client meetings, organising solicitor schedules such as travel arrangements or meetings, Processing invoices",
    points: [
      "Transcription and proofreading of legal correspondence",
      "Court filing preparation, document collation & indexing",
      "Solicitor calendar, deposition & court hearing scheduling",
      "Client matter billing and disbursement invoice processing",
    ],
  },
  {
    id: "legal-research",
    name: "Legal Research",
    tag: "Statutory & Precedent Analysis",
    icon: BookOpen,
    description:
      "Your team at NICS can handle the research in relation to, Case Law Research, Legal Articles, Legal Briefs, Drafting Legal documents as directed by your business.",
    points: [
      "Comprehensive case law and precedent research",
      "Statutory and regulatory interpretation reviews",
      "Legal articles, journal summaries & cite-checking",
      "Jurisdictional comparative research & memorandum drafting",
    ],
  },
];

const industrySolutions = [
  {
    title: "Law Firms & Solictors",
    icon: Scale,
    description:
      "Empower solicitors and partners to maximize billable advisory hours by delegating brief collation, transcription, due diligence indexing, and legal research.",
    benefits: [
      "Court bundle preparation and document indexing",
      "Paralegal research and citation verification",
      "Practice management and billing administration",
    ],
  },
  {
    title: "Corporate Legal Departments",
    icon: Building2,
    description:
      "Scale in-house corporate legal capacity with structured contract registers, vendor agreement abstracting, compliance tracking, and M&A data room reviews.",
    benefits: [
      "Master Service Agreement and NDA drafting support",
      "Contract repository maintenance and renewal tracking",
      "Merger & acquisition due diligence document abstracts",
    ],
  },
  {
    title: "Multi-Disciplinary Practices",
    icon: TrendingUp,
    description:
      "Bridge the gap between accounting, wealth, and commercial services with structured legal administration, corporate secretarial filing, and trust deed compliance.",
    benefits: [
      "Corporate structure documentation collation",
      "Entity registration and ASIC record cross-checks",
      "Client onboarding legal compliance verification",
    ],
  },
];

const outsourcingModels = [
  {
    number: "01",
    title: "Insourcing",
    tag: "Dedicated Paralegal",
    stat: "100% Dedicated",
    statDetail: "Embedded in practice systems",
    image: "/images/models/insourcing-v2.jpg",
    description:
      "Dedicated full-time legal support specialists and paralegals embedded directly in your practice systems, working under your direct instructions.",
    highlights: [
      "100% dedicated to your firm",
      "Operates in your timezone & software",
      "Direct daily file coordination",
    ],
  },
  {
    number: "02",
    title: "Insourcing with Manager Support",
    tag: "Managed Governance",
    stat: "Team Lead QA",
    statDetail: "Built-in review & SLA checks",
    image: "/images/models/manager-support-v2.jpg",
    description:
      "Dedicated paralegal staff backed by an experienced legal operations team lead who ensures strict quality control, formatting standards, and SLA compliance.",
    highlights: [
      "Dedicated paralegals + Team Lead oversight",
      "Built-in formatting & QA verification",
      "Reduced supervisory overhead for solicitors",
    ],
  },
  {
    number: "03",
    title: "Job-by-Job",
    tag: "On-Demand Project",
    stat: "Matter-by-Matter",
    statDetail: "Per-file flexible capacity",
    image: "/images/models/job-by-job-v2.jpg",
    description:
      "A flexible delivery model where specific projects—such as M&A due diligence batches, lease abstract runs, or court bundle collations—are billed per matter.",
    highlights: [
      "Pay only for completed files or projects",
      "Ideal for litigation overflow & transactions",
      "No ongoing headcount overhead",
    ],
  },
  {
    number: "04",
    title: "BOT Model",
    tag: "Build · Operate · Transfer",
    stat: "Enterprise Asset",
    statDetail: "ISO 27001 unit transfer",
    image: "/images/models/bot-model-v2.jpg",
    description:
      "We recruit, train, and build your dedicated offshore legal operations unit under strict ISO 27001 data governance, and transfer full management when scaled.",
    highlights: [
      "Custom legal talent recruitment & security setup",
      "Operational maturity under proven SLAs",
      "Seamless handover of full operational ownership",
    ],
  },
];

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-white text-[#0b1524]">
      <Header />

      <main>
        <PageBanner
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Legal Process Outsourcing" }]}
          badge="Legal Process Outsourcing"
          badgeHighlight="100% Confidentiality & NDA"
          title="Legal Process Outsourcing (LPO)"
          description="Empower your legal practice with specialized contract management, meticulous due diligence, and high-precision legal administration. At NICS, our trained paralegals and legal support specialists assist corporate counsel and law firms with document review, lease abstraction, litigation prep, and compliance collation—scaling capacity while safeguarding margins."
          primaryCta={{ label: "Make an Enquiry", href: "/contact" }}
          secondaryCta={{ label: "Explore LPO Services", href: "#services" }}
          metrics={[
            { value: "100%", label: "Confidentiality & NDA" },
            { value: "Strict SLAs", label: "Matter Turnaround" },
            { value: "ISO 27001", label: "Data Governance" },
          ]}
          image={heroImage}
          imagePosition="65% 30%"
          cardBadge="NICS Legal Operations"
          cardTitle="Contract Management & Due Diligence"
          cardSubtitle="Paralegal support for law firms and corporate counsel under strict ISO 27001 data governance."
          imageAlt="Indian corporate paralegal and legal counsel reviewing commercial contracts, MSAs, and due diligence dossiers"
        />

        <CapabilityList
          eyebrow="What We Provide"
          title="Legal Support Services"
          intro="Comprehensive back-office capabilities designed to accelerate document turnaround, reduce overheads, and streamline legal administration."
          image="/images/bright/page-legal.jpg"
          imageAlt="NICS legal support specialists preparing documentation and contract reviews on the Chennai delivery floor"
          items={legalServices}
          ctaLabel="Discuss your legal support workload"
        />

        <IndustryColumns
          eyebrow="Industry Focus"
          title="View Solutions by Industry"
          intro="Discover how our legal process outsourcing capabilities are tailored for law firms, corporate counsel, and commercial practices."
          items={industrySolutions}
        />

        <DeliveryModelColumns
          eyebrow="Delivery Flexibility"
          title="Outsourcing Models"
          intro="Choose the engagement structure that best fits your practice requirements and confidentiality standards."
          items={outsourcingModels}
        />

        <ReadyToScaleCTA />
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}
