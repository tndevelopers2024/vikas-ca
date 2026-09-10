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
    image: "/images/nics/accounting-calculation.jpg",
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
        <section id="services" className="scroll-mt-20 border-t border-stone-200 bg-[#fbfbfa] py-20 lg:py-28">
          <Container size="default">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0056b3]">What We Provide</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl text-[#0b1524]">
                Compliance Services
              </h2>
              <p className="mt-4 text-base leading-relaxed text-stone-600">
                From SMSF compliance and statutory filings to full audit back office support, our accountants prepare the workpapers, statements, and returns your team reviews and signs off.
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {complianceServices.map((item, index) => {
                const IconComponent = item.icon;
                const isFeatured = index === 0;
                return (
                  <div
                    key={item.id}
                    className={`group relative flex flex-col justify-between rounded-sm border bg-white overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                      isFeatured
                        ? "border-[#0056b3]/40 shadow-md ring-1 ring-[#0056b3]/20 md:col-span-2 lg:col-span-1"
                        : "border-stone-200 hover:border-[#0056b3]/30"
                    }`}
                  >
                    <div>
                      {/* Service Card Image */}
                      <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-100">
                        <Image
                          src={item.image}
                          alt={item.imageAlt}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                        <div className="absolute top-3.5 right-3.5">
                          <span className="rounded-full bg-white/95 backdrop-blur-xs px-3 py-1 text-xs font-semibold text-stone-700 shadow-xs border border-white/40">
                            {item.tag}
                          </span>
                        </div>
                      </div>

                      <div className="p-6 sm:p-7">
                        <div className="flex items-center gap-3">
                          <div className="flex size-11 items-center justify-center rounded-sm bg-[#0056b3]/10 text-[#0056b3] transition-colors group-hover:bg-[#0056b3] group-hover:text-white shrink-0">
                            <IconComponent className="size-5" />
                          </div>
                          <h3 className="text-xl font-bold text-[#0b1524] group-hover:text-[#0056b3] transition-colors">
                            {item.name}
                          </h3>
                        </div>

                        <p className="mt-4 text-sm leading-relaxed text-stone-600">
                          {item.description}
                        </p>

                        <div className="mt-6 border-t border-stone-100 pt-5">
                          <p className="text-xs font-bold uppercase tracking-wider text-stone-400">Key Capabilities</p>
                          <ul className="mt-3 space-y-2.5">
                            {item.points.map((pt, i) => (
                              <li key={i} className="flex items-start gap-2.5 text-xs text-stone-600">
                                <CheckCircle2 className="size-4 shrink-0 text-[#0056b3] mt-0.5" />
                                <span>{pt}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="px-6 pb-6 sm:px-7 sm:pb-7">
                      <div className="border-t border-stone-100 pt-4">
                        <Link
                          href="/contact"
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0056b3] transition-colors hover:text-[#004494]"
                        >
                          Enquire about {item.name}
                          <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        {/* SOLUTIONS BY INDUSTRY */}
        <section className="relative border-t border-stone-200 bg-gradient-to-b from-[#fbfbfa] via-white to-[#fbfbfa] py-20 lg:py-28 overflow-hidden">
          {/* Subtle background grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

          <Container size="default" className="relative">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#0056b3]/20 bg-[#0056b3]/5 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[#0056b3]">
                <Sparkles className="size-3.5 text-[#0056b3]" />
                Industry-Configured Delivery
              </div>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-[#0b1524]">
                View Solutions by Industry
              </h2>
              <p className="mt-4 text-base leading-relaxed text-stone-600 sm:text-lg">
                Discover how our compliance expertise is configured to address the specific obligations, peak calendars, and regulatory mandates of your sector.
              </p>
            </div>

            <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {industrySolutions.map((ind) => {
                const IndIcon = ind.icon;
                return (
                  <div
                    key={ind.title}
                    id={ind.anchor}
                    className="group scroll-mt-32 relative flex flex-col rounded-2xl border border-stone-200/90 bg-white shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-[#0056b3]/40 hover:shadow-xl overflow-hidden"
                  >
                    {/* Visual Card Image Header */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-100">
                      <Image
                        src={ind.image}
                        alt={ind.title}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      {/* Rich gradient shadow overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0b1524]/85 via-[#0b1524]/20 to-transparent" />

                      {/* Top floating badge */}
                      <div className="absolute top-3.5 left-3.5">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 backdrop-blur-md px-3 py-1 text-[11px] font-bold text-[#0b1524] shadow-xs">
                          <span className="size-1.5 rounded-full bg-[#0056b3]" />
                          {ind.badge}
                        </span>
                      </div>

                      {/* Top right icon button */}
                      <div className="absolute top-3.5 right-3.5 flex size-9 items-center justify-center rounded-full bg-white/95 text-[#0056b3] shadow-xs backdrop-blur-md transition-colors duration-300 group-hover:bg-[#0056b3] group-hover:text-white">
                        <IndIcon className="size-4" />
                      </div>

                      {/* Bottom image stat pill */}
                      <div className="absolute bottom-3 left-3 right-3">
                        <div className="flex items-center justify-between rounded-lg border border-white/20 bg-[#0b1524]/80 px-3 py-1.5 text-xs text-white backdrop-blur-md shadow-sm">
                          <span className="flex items-center gap-1.5 font-bold text-[#8bc7ff]">
                            <span className="size-1.5 rounded-full bg-[#8bc7ff] animate-pulse" />
                            {ind.stat}
                          </span>
                          <span className="text-[11px] text-slate-300 font-medium">{ind.statDetail}</span>
                        </div>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                      <div>
                        <h3 className="text-xl font-bold tracking-tight text-[#0b1524] transition-colors group-hover:text-[#0056b3]">
                          {ind.title}
                        </h3>
                        <p className="mt-2.5 text-sm leading-relaxed text-stone-600">
                          {ind.description}
                        </p>

                        <div className="mt-6 border-t border-stone-100 pt-5">
                          <div className="flex items-center justify-between">
                            <p className="text-xs font-bold uppercase tracking-wider text-stone-400">
                              Key Support Areas
                            </p>
                            <span className="rounded bg-[#0056b3]/10 px-2 py-0.5 text-[10px] font-bold tracking-wider uppercase text-[#0056b3]">
                              Standardised SOPs
                            </span>
                          </div>
                          <ul className="mt-3.5 space-y-2.5">
                            {ind.benefits.map((b, i) => (
                              <li key={i} className="flex items-start gap-2.5 text-xs font-medium text-stone-700 leading-relaxed">
                                <CheckCircle2 className="size-4 shrink-0 text-[#0056b3] mt-0.5" />
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Card Footer / Action */}
                      <div className="mt-8 border-t border-stone-100 pt-5">
                        <Link
                          href="/contact"
                          className="group/btn flex w-full items-center justify-between rounded-lg border border-stone-200 bg-stone-50/70 px-4 py-2.5 text-xs font-bold text-[#0b1524] transition-all hover:border-[#0056b3] hover:bg-[#0056b3] hover:text-white"
                        >
                          <span>Explore industry workflows</span>
                          <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        {/* OUTSOURCING MODELS */}
        <section className="relative border-t border-stone-800 bg-[#070e19] py-20 text-white lg:py-28 overflow-hidden">
          {/* Subtle top ambient glow */}
          <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 size-[650px] rounded-full bg-[#0056b3]/20 blur-[130px]" />
          {/* Subtle micro grid */}
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]" />

          <Container size="default" className="relative">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#8bc7ff]/30 bg-[#8bc7ff]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#8bc7ff] backdrop-blur-md shadow-xs">
                <Zap className="size-3.5 text-[#8bc7ff]" />
                Delivery Flexibility & Frameworks
              </div>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-white">
                Outsourcing Models
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg max-w-2xl mx-auto">
                Choose the operating framework configured for your firm&apos;s compliance volume, partner review workflows, and long-term scaling horizon.
              </p>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {outsourcingModels.map((model) => (
                <div
                  key={model.title}
                  className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-[#0f1b2c]/85 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-[#8bc7ff]/50 hover:bg-[#122237] hover:shadow-[0_20px_45px_rgba(0,86,179,0.25)] overflow-hidden"
                >
                  {/* Card Image Header */}
                  <div className="relative aspect-[16/11] w-full overflow-hidden bg-slate-900">
                    <Image
                      src={model.image}
                      alt={model.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f1b2c] via-[#0f1b2c]/40 to-transparent" />

                    {/* Model Number Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="rounded-md bg-[#070e19]/90 backdrop-blur-md px-2.5 py-1 font-mono text-[11px] font-black text-[#8bc7ff] border border-white/10 shadow-xs">
                        {model.number}
                      </span>
                    </div>

                    {/* Category Tag */}
                    <div className="absolute top-3 right-3">
                      <span className="rounded-full bg-white/15 backdrop-blur-md px-2.5 py-0.5 text-[10px] font-bold text-white border border-white/15 tracking-wide">
                        {model.tag}
                      </span>
                    </div>

                    {/* Floating Stat Pill on Image Base */}
                    <div className="absolute bottom-2.5 left-3 right-3">
                      <div className="flex items-center justify-between rounded-lg border border-white/15 bg-[#070e19]/85 px-2.5 py-1.5 text-[11px] text-white backdrop-blur-md shadow-sm">
                        <span className="font-bold text-[#8bc7ff] flex items-center gap-1.5 truncate">
                          <span className="size-1.5 rounded-full bg-[#8bc7ff] animate-pulse shrink-0" />
                          {model.stat}
                        </span>
                        <span className="text-[10px] text-slate-300 truncate ml-1 font-medium">{model.statDetail}</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
                    <div>
                      <h3 className="text-lg font-bold text-white transition-colors group-hover:text-[#8bc7ff] leading-snug">
                        {model.title}
                      </h3>
                      <p className="mt-2.5 text-xs leading-relaxed text-slate-300">
                        {model.description}
                      </p>

                      <div className="mt-5 border-t border-white/10 pt-4">
                        <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                          Operating Highlights
                        </p>
                        <ul className="space-y-2">
                          {model.highlights.map((hl, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs text-slate-300 font-medium">
                              <CheckCircle2 className="size-3.5 shrink-0 text-[#8bc7ff] mt-0.5" />
                              <span className="leading-snug">{hl}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Footer Link / Button */}
                    <div className="mt-6 border-t border-white/10 pt-4">
                      <Link
                        href="/contact"
                        className="group/btn flex w-full items-center justify-between rounded-lg border border-white/15 bg-white/5 px-3.5 py-2 text-xs font-bold text-white transition-all hover:border-[#8bc7ff] hover:bg-[#8bc7ff] hover:text-[#070e19]"
                      >
                        <span>Discuss this model</span>
                        <ArrowRight className="size-3.5 transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* CALL TO ACTION */}
        <ReadyToScaleCTA />
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}
