import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  FileSpreadsheet,
  FileText,
  Headset,
  Keyboard,
  Layers,
  Mic,
  Briefcase,
  Building2,
  TrendingUp,
  Users,
  ShieldCheck,
  Zap,
  ArrowUpRight,
  BadgeCheck,
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
  title: "Administrative Services We Provide | NICS",
  description:
    "Find out the administrative services we provide and the outsourcing models of NICS. Virtual Assistant, Data Entry, Back Office Admin, SOA Preparation, Transcription, and Mortgage Broking.",
};

const heroImage = "/images/nics/administrative-review.jpg";

const administrativeServices = [
  {
    id: "virtual-assistant",
    name: "Virtual Assistant",
    tag: "Productivity & ROI",
    icon: Headset,
    description:
      "Eliminate mundane, repetitive and fatigue-causing tasks from your working week. Grow your business, focus on your ROI while we clear the clutter and streamline disorganized and uncategorized tasks.",
    points: [
      "Inbox management and email triaging",
      "Calendar scheduling and diary coordination",
      "Task prioritization and routine administrative tracking",
      "Workflow decluttering to focus on high-value business growth",
    ],
  },
  {
    id: "data-entry-services",
    name: "Data Entry Services",
    tag: "High Precision & Tech",
    icon: Keyboard,
    description:
      "Accurate and high-quality data entry services for manual digitization of records by incorporating best-in-class technology.",
    points: [
      "Manual and automated record digitization",
      "Structured data cleansing and formatting",
      "Database maintenance and system updates",
      "Multi-point quality checks ensuring maximum accuracy",
    ],
  },
  {
    id: "back-office-administration",
    name: "Back Office Administration",
    tag: "Operational Backbone",
    icon: FileSpreadsheet,
    description:
      "Suite of back office administrative services like data management, billing and invoicing, transaction processing, management services and all kinds of back office administration services.",
    points: [
      "Billing, invoicing, and debtor reconciliation",
      "Transaction processing and ledger updates",
      "Document indexing and central repository management",
      "Recurring administrative reports and audit logs",
    ],
  },
  {
    id: "soa-preparation",
    name: "Statement of Advice Preparation",
    tag: "Financial Planning Support",
    icon: FileText,
    description:
      "Backend support services for paraplanners or independent financial advisors. It encompasses, Pre-SOA, Statement of Advice and Post SOA.",
    points: [
      "Pre-SOA client fact-finding and file collation",
      "Research compilation and draft SOA document preparation",
      "Product comparison data and compliance file setup",
      "Post-SOA administrative execution and platform paperwork",
    ],
  },
  {
    id: "virtual-assistant-support",
    name: "Virtual Assistant Support",
    tag: "Executive & Daily Admin",
    icon: Briefcase,
    description:
      "Manage your routine administrative tasks including booking flights and meetings, taking notes and documenting follow up actions and sending business correspondence.",
    points: [
      "Flight, hotel, and itinerary coordination",
      "Meeting setup, agenda preparation, and client coordination",
      "Detailed meeting minutes and follow-up action tracking",
      "Drafting and sending professional business correspondence",
    ],
  },
  {
    id: "transcription-services",
    name: "Transcription Services",
    tag: "Secure & Scheduled",
    icon: Mic,
    description:
      "Rely on a secure, streamlined workflow and a team of highly trained experts, who create a client-specific delivery plan, vet and review the data and follow through until satisfied delivery. Be it any project specifications, including specialized formatting and recurring delivery schedules (daily, weekly, monthly, or even yearly), you can be confident on the accuracy and timeliness of delivery.",
    points: [
      "Secure audio, video, and dictation transcription",
      "Client-specific delivery plans with specialized formatting",
      "Multi-tiered review process for accuracy and completeness",
      "Flexible turnaround schedules (daily, weekly, monthly, or yearly)",
    ],
  },
  {
    id: "mortgage-broking",
    name: "Mortgage Broking",
    tag: "Lending & Loan Processing",
    icon: Layers,
    description:
      "Loan Processing Service includes fact checks, and preparation of serviceability calculators, discharge forms and processing, compliance documents, lender’s application online or on lender’s software, etc.",
    points: [
      "Fact checks and borrower documentation verification",
      "Serviceability calculators and lender policy reviews",
      "Discharge forms preparation and tracking",
      "Data entry into aggregator CRM and lender portal submissions",
    ],
  },
];

const industrySolutions = [
  {
    title: "Accounting Industry",
    image: "/images/nics/administrative-review.jpg",
    icon: Building2,
    description:
      "Empower your accounting practice by offloading client document chasing, workpaper digitisation, CRM updates, and admin tasks so your team can focus on client advisory.",
    benefits: [
      "Client onboarding pack coordination",
      "Permanent audit file indexing and maintenance",
      "Practice management software data reconciliation",
    ],
  },
  {
    title: "Business Enterprises",
    image: "/images/nics/administrative-partners.jpg",
    icon: TrendingUp,
    description:
      "Optimize enterprise back-office workflows, transaction entries, vendor billing, and executive scheduling with seamless virtual assistant support.",
    benefits: [
      "End-to-end billing and invoicing cycles",
      "Executive calendar and travel logistics",
      "Cross-departmental database cleansing and indexing",
    ],
  },
  {
    title: "Financial Advisors",
    image: "/images/nics/how-it-works-collaboration.jpg",
    icon: Users,
    description:
      "Provide paraplanners and independent financial advisers with dedicated pre-SOA data gathering, compliant draft preparation, and post-advice implementation.",
    benefits: [
      "Comprehensive pre-SOA fact-find collation",
      "Draft Statement of Advice preparation",
      "Post-SOA portfolio platform paperwork processing",
    ],
  },
];

const outsourcingModels = [
  {
    number: "01",
    title: "Insourcing",
    tag: "Dedicated Extension",
    description:
      "Dedicated full-time resources working directly inside your systems and workflows, operating seamlessly as an integrated extension of your internal team.",
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
    description:
      "Dedicated team members backed by experienced operational managers and team leads who ensure quality control, SLA adherence, and ongoing performance coaching.",
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
    description:
      "A flexible, pay-as-you-go delivery model where work is submitted on a per-task or per-file basis, ideal for handling seasonal spikes and overflow work.",
    highlights: [
      "Pay only for work completed",
      "Ideal for overflow and peak seasons",
      "No long-term staffing commitments",
    ],
  },
  {
    number: "04",
    title: "BOT Model",
    tag: "Build · Operate · Transfer",
    description:
      "We recruit, train, and build your dedicated offshore administrative unit, manage daily operations under stringent SLAs, and transfer complete operational ownership when ready.",
    highlights: [
      "Custom team recruitment and setup",
      "Operational maturity and SLA governance",
      "Smooth transition of ownership to your firm",
    ],
  },
];

export default function AdministrativePage() {
  return (
    <div className="min-h-screen bg-white text-[#0b1524]">
      <Header />

      <main>
        {/* HERO BANNER (matching dante-new.vercel.app full-bleed banner) */}
        <PageBanner
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Administrative" }]}
          badge="Administrative Services"
          badgeHighlight="99.9% Data Accuracy"
          title="Administrative Services We Provide"
          description="Elevate organizational productivity with dedicated virtual assistants, end-to-end back office administration, and meticulous data validation. At NICS, our offshore administrative specialists manage scheduling, document preparation, database hygiene, and routine clerical workflows with speed and precision."
          primaryCta={{ label: "Make an Enquiry", href: "/contact" }}
          secondaryCta={{ label: "Explore Services", href: "#services" }}
          metrics={[
            { value: "99.9%", label: "Data Accuracy" },
            { value: "Dedicated", label: "Virtual Assistants" },
            { value: "ISO 27001", label: "Information Security" },
          ]}
          image={heroImage}
          cardBadge="NICS Administration"
          cardTitle="Dedicated Virtual Assistants & Data Hygiene"
          cardSubtitle="High-accuracy clerical, scheduling, and document preparation workflows."
          imageAlt="Administrative specialists reviewing work together at a laptop in a bright office"
        />

        {/* SERVICES SECTION */}
        <ServiceCatalogue
          title={"Administrative Services"}
          description={"From virtual assistance and precision data entry to specialized paraplanning and loan processing, our team handles routine administration so your onshore talent can focus on high-impact work."}
          items={administrativeServices}
        />

        {/* SOLUTIONS BY INDUSTRY */}
        <IndustrySolutions
          eyebrow={"Industry Focus"}
          title={"View Solutions by Industry"}
          description={"Discover how our administrative expertise is configured to address the specific challenges of your sector."}
          items={industrySolutions}
        />

        {/* OUTSOURCING MODELS */}
        <OutsourcingModels
          eyebrow={"Delivery Flexibility"}
          title={"Outsourcing Models"}
          description={"Choose the model that fits your operational needs, internal management preferences, and scaling roadmap."}
          models={outsourcingModels}
        />

        {/* CALL TO ACTION */}
        <ReadyToScaleCTA />
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}

