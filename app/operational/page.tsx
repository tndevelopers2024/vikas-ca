import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  PhoneCall,
  Users,
  MessageSquareText,
  ShieldAlert,
  UserCheck,
  Database,
  LifeBuoy,
  Receipt,
  Fingerprint,
  Building2,
  TrendingUp,
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
  title: "Operational Services We Provide | NICS",
  description:
    "Explore the operational services we provide and our flexible outsourcing models at NICS. Inbound Call Centre, CRM Management, 24/7 Live Chat, Complaints Resolution, Client Onboarding, Data Validation, Technical Support, Claim Services, and KYC Verification.",
};

const heroImage = "/images/nics/operational-support-desk.jpg";

const operationalServices = [
  {
    id: "inbound-call-centre",
    name: "Inbound Call Centre",
    tag: "First Touchpoint Excellence",
    icon: PhoneCall,
    description:
      "An inbound call center is your businesses’ first and most important touchpoint. Our team of expert and skilled service executives are trained to offer the highest quality of customer care, sales and revenue management services.",
    points: [
      "Professional first-contact query handling & triage",
      "Trained customer care and support representatives",
      "Sales enquiry intake & lead qualification",
      "Strict call quality monitoring & SLA adherence",
    ],
  },
  {
    id: "crm-management",
    name: "CRM Management",
    tag: "Customer-Centric Growth",
    icon: Users,
    description:
      "Leverage cutting-edge techniques that put your customers at the center of everything and help you accelerate your CRM initiatives to increase sales and enhance productivity.",
    points: [
      "Pipeline data hygiene and record updating",
      "Customer contact enrichment & segmentation",
      "Activity tracking, task logging & automated alerts",
      "Cross-platform CRM synchronization and reporting",
    ],
  },
  {
    id: "live-chat-support",
    name: "Live Chat Support Services",
    tag: "24/7 Real-Time Support",
    icon: MessageSquareText,
    description:
      "Profit from specialized support staff who have strong work ethics, proven customer service abilities and superb communication skills. Provide your clients uninterrupted customer service through prompt and professional chat & email support made available 24/7. Live chat is a resourceful and smart way to address customer concerns quickly, resolve any queries or grievances.",
    points: [
      "24/7 web and app live chat responsiveness",
      "Rapid first-response and resolution SLAs",
      "Multi-channel email & ticket management",
      "Customer satisfaction (CSAT) measurement & logs",
    ],
  },
  {
    id: "complaints-resolution",
    name: "Complaints Resolution",
    tag: "Empathetic Advocacy",
    icon: ShieldAlert,
    description:
      "Employ specialists who think from the customer’s perspective and resolve their complaints within the ambit of your business principles. This leads to better complaints resolution and happy customers.",
    points: [
      "Empathetic dispute evaluation and case logging",
      "Root-cause investigation aligned with your guidelines",
      "Structured escalation pathways for sensitive issues",
      "Actionable feedback loops to prevent recurring complaints",
    ],
  },
  {
    id: "client-onboarding",
    name: "Client Onboarding",
    tag: "Frictionless Setup",
    icon: UserCheck,
    description:
      "Customer onboarding is a holistic approach different from the nominal and current customer service structure. Recognizing this variance, your new customers will be equipped with all the information they need to start a mutually beneficial relationship with you.",
    points: [
      "Structured welcome packs and engagement letters",
      "Account provisioning, profile verification & setup",
      "Documentation follow-up and checklist tracking",
      "Smooth handoff to internal relationship managers",
    ],
  },
  {
    id: "data-validation",
    name: "Data Validation",
    tag: "Dataset Hygiene",
    icon: Database,
    description:
      "Data verification/ validation services to enhance your existing dataset, including database verification, review, data cleansing and normalizing your database while ensuring that it is accurate and updated.",
    points: [
      "Cross-database validation and deduplication",
      "Standardized data normalization and cleansing",
      "Systematic health checks and missing field audits",
      "Continuous compliance and accuracy reports",
    ],
  },
  {
    id: "technical-support",
    name: "Technical Support for Products & Services",
    tag: "Tier 1 & 2 Troubleshooting",
    icon: LifeBuoy,
    description:
      "Technical Support services becomes your customer touchpoint for all questions and queries related to troubleshooting and product navigation. Dedicated and knowledgeable team will answer your customers’ questions, solve their problems and give them a world-class customer experience that reflects your brand philosophy and its core values.",
    points: [
      "Product navigation guidance and user walkthroughs",
      "Tier 1 & Tier 2 technical issue diagnosis",
      "Knowledge base & FAQ documentation maintenance",
      "Ticket lifecycle management & escalation pathways",
    ],
  },
  {
    id: "claim-services",
    name: "Claim Services",
    tag: "Settlement & Verification",
    icon: Receipt,
    description:
      "Comprehensive claim services and all related finance and accounting services. Receiving requests from customers for claims processing deals to settling outstanding amounts.",
    points: [
      "Customer claim intake and document indexing",
      "Eligibility criteria verification & policy checks",
      "Finance coordination for settlement processing",
      "Transparent audit logs and claims reporting",
    ],
  },
  {
    id: "kyc-verification",
    name: "KYC Verification",
    tag: "Regulatory & AML",
    icon: Fingerprint,
    description:
      "KYC services (one-time and on recurring basis) that includes a broad set of capabilities to meet your specific needs – tax profile validation, regulatory protocols and self-declarations, client outreach, KYC health checks, etc.",
    points: [
      "Customer identification and AML screening protocols",
      "Tax profile validation and self-declaration review",
      "Direct client outreach for missing verification data",
      "Periodic recurring KYC health checks and refresh audits",
    ],
  },
];

const industrySolutions = [
  {
    title: "Accounting Industry",
    image: "/images/nics/operational-support-desk.jpg",
    icon: Building2,
    description:
      "Equip your accounting firm with dedicated client onboarding, identity verification, data validation, and practice communication support to maintain seamless client relations.",
    benefits: [
      "Client onboarding pack tracking and review",
      "KYC and AML compliance verification for new clients",
      "Practice management CRM updating and database cleansing",
    ],
  },
  {
    title: "Business Enterprises",
    image: "/images/nics/privacy-support.jpg",
    icon: TrendingUp,
    description:
      "Empower growing commercial enterprises with 24/7 live chat support, technical troubleshooting, dispute resolution, and claims processing under strict SLAs.",
    benefits: [
      "Round-the-clock omnichannel customer service",
      "Helpdesk ticket resolution and product support",
      "Claims settlement administration and ledger reporting",
    ],
  },
  {
    title: "Financial Advisors",
    image: "/images/nics/accounting-analyst.jpg",
    icon: Users,
    description:
      "Support paraplanning and advisory practices with robust client onboarding protocols, annual KYC health checks, CRM pipeline administration, and client outreach.",
    benefits: [
      "Pre-advice client data collection and fact checks",
      "Ongoing annual KYC validation and AML reviews",
      "Platform documentation and customer inquiry support",
    ],
  },
];

const outsourcingModels = [
  {
    number: "01",
    title: "Insourcing",
    tag: "Dedicated Extension",
    description:
      "Dedicated full-time operational specialists embedded directly into your customer support and back-office tools, operating seamlessly as part of your team.",
    highlights: [
      "100% dedicated to your brand and tone",
      "Operates in your timezone & software",
      "Direct daily supervision and task allocation",
    ],
  },
  {
    number: "02",
    title: "Insourcing with Manager Support",
    tag: "Managed Governance",
    description:
      "Dedicated agents backed by experienced operational managers and team leads who ensure quality control, call calibration, and SLA governance.",
    highlights: [
      "Dedicated specialists + Team Lead oversight",
      "Built-in quality assurance & SOP governance",
      "Minimal operational management overhead",
    ],
  },
  {
    number: "03",
    title: "Job-by-Job",
    tag: "On-Demand & Scalable",
    description:
      "A flexible, batch-based delivery model where tasks such as dataset cleansing, KYC refresh runs, or seasonal campaign surges are billed per project.",
    highlights: [
      "Pay only for processed files or campaigns",
      "Ideal for overflow, audits, and seasonal spikes",
      "No long-term staffing overheads",
    ],
  },
  {
    number: "04",
    title: "BOT Model",
    tag: "Build · Operate · Transfer",
    description:
      "We build your dedicated offshore customer operations center, operate and mature the processes under strict performance metrics, and transfer full ownership when ready.",
    highlights: [
      "Custom recruitment, facility & IT infrastructure",
      "Operational maturity with proven SLAs",
      "Smooth transition of full operational ownership",
    ],
  },
];

export default function OperationalPage() {
  return (
    <div className="min-h-screen bg-white text-[#0b1524]">
      <Header />

      <main>
        {/* HERO BANNER (matching dante-new.vercel.app full-bleed banner) */}
        <PageBanner
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Operational" }]}
          badge="Operational Services"
          badgeHighlight="24/7 Availability"
          title="Operational Services We Provide"
          description="Scale your customer care, 24/7 inbound contact center, precision KYC verification, and proactive CRM support with high-performing offshore operational teams. At NICS, our trained specialists resolve customer queries, streamline account onboarding, and safeguard workflow accuracy from day one."
          primaryCta={{ label: "Make an Enquiry", href: "/contact" }}
          secondaryCta={{ label: "Explore Operations", href: "#services" }}
          metrics={[
            { value: "24/7", label: "Availability" },
            { value: "SLA Backed", label: "Performance Standards" },
            { value: "Multi-Channel", label: "Voice, Chat & Email" },
          ]}
          image={heroImage}
          cardBadge="NICS Operations"
          cardTitle="24/7 Contact Centre & KYC Support"
          cardSubtitle="Scalable customer care and back-office operations with guaranteed SLA performance."
          imageAlt="Indian customer operations specialists and delivery floor analysts managing CRM workflows and transaction processing"
        />

        {/* SERVICES SECTION */}
        <ServiceCatalogue
          title={"Operational Services"}
          description={"Comprehensive operational capabilities designed to elevate customer satisfaction, ensure regulatory compliance, and maintain flawless data hygiene."}
          items={operationalServices}
        />

        {/* SOLUTIONS BY INDUSTRY */}
        <IndustrySolutions
          eyebrow={"Industry Focus"}
          title={"View Solutions by Industry"}
          description={"Discover how our operational expertise is configured to address the unique requirements of your industry."}
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
