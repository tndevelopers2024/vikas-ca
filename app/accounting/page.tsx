import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  BookOpen,
  Boxes,
  ReceiptText,
  HandCoins,
  BarChart3,
  PieChart,
  Home,
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
  title: "Accounting Services We Provide | NICS",
  description:
    "Find out the accounting services we provide at NICS — Bookkeeping, Inventory Management, Accounts Payable (P2P), Accounts Receivable (O2C), Management Reporting, Financial Planning support, and Mortgage Brokering.",
};

const heroImage = "/images/nics/accounting-reporting.jpg";

const accountingServices = [
  {
    id: "bookkeeping",
    name: "Bookkeeping",
    tag: "Reliable & Current",
    icon: BookOpen,
    description:
      "Using industry-leading software and best practices, receive reliable recording of transactions that keeps you one step ahead.",
    points: [
      "Daily and periodic transaction recording",
      "Bank, credit card, and clearing account reconciliations",
      "Chart of accounts setup and ongoing maintenance",
      "Cloud ledger management in your preferred software",
    ],
  },
  {
    id: "inventory-management",
    name: "Inventory Management",
    tag: "Stores & Stock Flow",
    icon: Boxes,
    description:
      "From traditional stores to online portals, maintaining stores ledger, supervising the flow of goods from manufacturers to warehouses and from these facilities to point of sale.",
    points: [
      "Stores ledger maintenance and stock movement tracking",
      "Goods flow oversight from manufacturer to point of sale",
      "Online portal and marketplace inventory reconciliation",
      "Stock valuation, variance analysis, and write-off support",
    ],
  },
  {
    id: "accounts-payable",
    name: "Accounts Payable – Procure to Pay",
    tag: "P2P Cycle",
    icon: ReceiptText,
    description:
      "The P2P service covers the complete cycle from vendor master maintenance through procurement and vendor invoice processing to the resulting payment processing to external vendors and the period closing activities.",
    points: [
      "Vendor master data creation and maintenance",
      "Purchase order matching and invoice processing",
      "Payment run preparation and remittance handling",
      "Vendor statement reconciliation and period close activities",
    ],
  },
  {
    id: "accounts-receivable",
    name: "Accounts Receivable – Order to Cash",
    tag: "O2C Cycle",
    icon: HandCoins,
    description:
      "Streamline the defining aspect of your business – the OTC process – so that you can serve customers faster and more effectively, minimize errors and delays.",
    points: [
      "Customer master setup and sales order processing",
      "Invoice generation, delivery, and dispute tracking",
      "Receipt allocation and cash application",
      "Debtor ageing analysis and collections follow-up",
    ],
  },
  {
    id: "management-reporting",
    name: "Management Reporting",
    tag: "Business Intelligence",
    icon: BarChart3,
    description:
      "Management reporting is vital to take decisions that will affect your business in many ways. Advantage from the expertise of accurate business intelligence that will enable you to make better-informed decisions.",
    points: [
      "Monthly management accounts and reporting packs",
      "Budget versus actual and variance commentary",
      "Cash flow forecasting and KPI dashboards",
      "Custom board and stakeholder reporting formats",
    ],
  },
  {
    id: "financial-planning",
    name: "Financial Planning",
    tag: "Paraplanning & VA Support",
    icon: PieChart,
    description:
      "As an outsourcing solution provider NICS can equip financial planning firms with top-tier operational and administrative capabilities through paraplanners and virtual assistants. Gear your firm up with higher capacity through comprehensive outsourcing solutions, backed by a robust IT and ISO 27001 security framework.",
    points: [
      "Dedicated paraplanning and advice document support",
      "Virtual assistant capacity for client administration",
      "Higher firm capacity without permanent headcount",
      "ISO 27001 aligned security framework for client data",
    ],
  },
  {
    id: "mortgage-brokering",
    name: "Mortgage Brokering",
    tag: "Loan Processing",
    icon: Home,
    description:
      "Loan Processing Service includes fact checks, and preparation of serviceability calculators, discharge forms and processing, compliance documents, lender’s application online or on lender’s software, etc.",
    points: [
      "Fact checks and borrower documentation verification",
      "Serviceability calculator preparation",
      "Discharge forms and compliance document processing",
      "Lender application lodgement online or in lender software",
    ],
  },
];

const industrySolutions = [
  {
    title: "Accounting Industry",
    image: "/images/nics/accounting-review.jpg",
    anchor: "accounting-industry",
    icon: Building2,
    description:
      "Keep up with statutory obligations and tight deadlines without stretching margins — dedicated preparers handle the ledger work behind your client service.",
    benefits: [
      "Bookkeeping and reconciliation capacity through peak periods",
      "Standardised workpapers ready for partner review",
      "Practice management and cloud ledger data upkeep",
    ],
  },
  {
    title: "Business Enterprises",
    image: "/images/nics/blog-sales-review.jpg",
    anchor: "business-enterprises",
    icon: TrendingUp,
    description:
      "Run complete P2P and O2C cycles, inventory ledgers, and monthly reporting packs with a trained offshore finance team embedded in your systems.",
    benefits: [
      "End-to-end payables and receivables processing",
      "Inventory and stores ledger control",
      "Monthly management reporting and cash flow forecasting",
    ],
  },
  {
    title: "Financial Planning & Mortgage Brokers",
    image: "/images/nics/accounting-desk.jpg",
    anchor: "financial-services",
    icon: Users,
    description:
      "Add paraplanning, virtual assistant, and loan processing capacity so advisers and brokers spend their time with clients rather than paperwork.",
    benefits: [
      "Paraplanning and advice document preparation",
      "Loan fact checks and serviceability calculators",
      "Lender application lodgement and compliance documents",
    ],
  },
];

const outsourcingModels = [
  {
    number: "01",
    title: "Insourcing",
    tag: "Dedicated Extension",
    description:
      "Dedicated full-time accountants working directly inside your systems and workflows, operating seamlessly as an integrated extension of your internal team.",
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
      "Dedicated preparers backed by experienced finance managers and team leads who ensure quality control, SLA adherence, and ongoing technical coaching.",
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
      "We recruit, train, and build your dedicated offshore finance unit, manage daily operations under stringent SLAs, and transfer complete operational ownership when ready.",
    highlights: [
      "Custom team recruitment and setup",
      "Operational maturity and SLA governance",
      "Smooth transition of ownership to your firm",
    ],
  },
];

export default function AccountingPage() {
  return (
    <div className="min-h-screen bg-white text-[#0b1524]">
      <Header />

      <main>
        {/* HERO BANNER (matching dante-new.vercel.app full-bleed banner) */}
        <PageBanner
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Accounting" }]}
          badge="Accounting Services"
          badgeHighlight="ISO/IEC 27001 Aligned"
          title="Accounting Services We Provide"
          description="Keeping pace with statutory obligations, rapid regulatory updates, and tight reporting deadlines shouldn't compress your margins. NICS delivers dedicated, certified offshore accounting specialists who integrate seamlessly into your software and workflows—handling daily bookkeeping, inventory management, end-to-end P2P and O2C cycles, and management reporting with audit-ready accuracy."
          primaryCta={{ label: "Make an Enquiry", href: "/contact" }}
          secondaryCta={{ label: "Explore Services", href: "#services" }}
          metrics={[
            { value: "7+", label: "Core Services" },
            { value: "4", label: "Delivery Models" },
            { value: "ISO 27001", label: "Aligned Security" },
          ]}
          image={heroImage}
          cardBadge="NICS Accounting"
          cardTitle="Ledgers, Cycles & Reporting Handled End to End"
          cardSubtitle="Deadline-driven accounting capacity that protects your margins and elevates your client experience."
          imageAlt="Accountant reviewing management reports and financial dashboards at a multi-screen workstation"
        />

        {/* SERVICES SECTION */}
        <ServiceCatalogue
          title={"Accounting Services"}
          description={"From day-to-day bookkeeping and full payables and receivables cycles to management reporting, paraplanning, and loan processing — our accountants keep your obligations on schedule."}
          items={accountingServices}
        />

        {/* SOLUTIONS BY INDUSTRY */}
        <IndustrySolutions
          eyebrow={"Industry Focus"}
          title={"View Solutions by Industry"}
          description={"Discover how our accounting expertise is configured to address the specific pressures of your sector."}
          items={industrySolutions}
        />

        {/* OUTSOURCING MODELS */}
        <OutsourcingModels
          eyebrow={"Delivery Flexibility"}
          title={"Outsourcing Models"}
          description={"Choose the model that fits your reporting calendar, internal review preferences, and scaling roadmap."}
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
