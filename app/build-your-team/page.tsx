import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Calculator,
  BookOpen,
  ShieldCheck,
  PieChart,
  Home,
  Scale,
  Briefcase,
  PiggyBank,
  FileCheck2,
  Search,
  UserRoundCheck,
  Rocket,
  Globe2,
  BadgeCheck,
} from "lucide-react";
import { Header } from "@/components/navigation/Header";
import { PageBanner } from "@/components/sections/PageBanner";
import { ReadyToScaleCTA } from "@/components/sections/ReadyToScaleCTA";
import { Footer } from "@/components/sections/Footer";
import { FloatingActions } from "@/components/ui/FloatingActions";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Build Your Team | NICS",
  description:
    "Build your offshore team with NICS. Tell us the role, experience level, and location you need — accountancy, bookkeeping, SMSF, tax and compliance, paraplanning, mortgage broking, paralegal, and practice administration.",
};

/** This page's own hero photograph — pages no longer share the category image. */
const heroImage = "/images/nics/build-team-celebration.jpg";

const roles = [
  {
    id: "accountancy",
    name: "Accountancy",
    icon: Calculator,
    description:
      "Qualified accountants for year-end files, workpapers, financial statements, and the reconciliations behind them.",
  },
  {
    id: "bookkeeping",
    name: "Bookkeeping",
    icon: BookOpen,
    description:
      "Day-to-day transaction processing, bank and ledger reconciliations, and clean books maintained in your software.",
  },
  {
    id: "business-compliance",
    name: "Business Compliance / BCS",
    icon: ShieldCheck,
    description:
      "Statutory filing support, compliance schedules, and the recurring obligations that cannot slip.",
  },
  {
    id: "financial-planning",
    name: "Financial Planning / Paraplanners",
    icon: PieChart,
    description:
      "Paraplanners for pre-SOA fact-finds, research collation, draft advice documents, and post-advice implementation.",
  },
  {
    id: "mortgage-broking",
    name: "Mortgage Broking",
    icon: Home,
    description:
      "Loan processing support — fact checks, serviceability calculators, discharge forms, and lender lodgements.",
  },
  {
    id: "paralegals",
    name: "Paralegals",
    icon: Scale,
    description:
      "Contract administration, abstracts and summaries, due diligence support, and legal research.",
  },
  {
    id: "practice-administration",
    name: "Practice Administration",
    icon: Briefcase,
    description:
      "Admin and virtual assistant roles covering client onboarding, document chasing, CRM upkeep, and scheduling.",
  },
  {
    id: "smsf",
    name: "SMSF",
    icon: PiggyBank,
    description:
      "SMSF specialists for fund accounting, annual returns, member statements, and audit-ready documentation.",
  },
  {
    id: "tax-compliance",
    name: "Tax / Compliance",
    icon: FileCheck2,
    description:
      "Individual and company returns, GST and VAT preparation, and the supporting compliance workpapers.",
  },
];

const experienceLevels = [
  { label: "Beginner", detail: "Trained to your process, supervised closely from day one" },
  { label: "1+ years", detail: "Comfortable with routine files under standard review" },
  { label: "2+ years", detail: "Handles recurring work independently" },
  { label: "3+ years", detail: "Manages complexity and exceptions without escalation" },
  { label: "5+ years", detail: "Senior preparation and review-ready output" },
  { label: "10+ years", detail: "Team lead calibre with oversight capability" },
];

const locations = ["Asia Pacific", "United Kingdom & Europe", "United States", "Middle East"];

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Tell us the role",
    description:
      "Give us the role, the experience level, and the software your process runs on. If you are unsure how to scope it, we will work it out with you in one conversation.",
  },
  {
    number: "02",
    icon: UserRoundCheck,
    title: "Review and approve candidates",
    description:
      "We source and screen, then put candidates in front of you. Nobody joins your team without your approval — you interview exactly as you would for an internal hire.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Onboard and go live",
    description:
      "We handle system access, induction, and process overview. Your team starts work with daily reporting, and you keep full visibility from the first file.",
  },
];

export default function BuildYourTeamPage() {
  return (
    <div className="min-h-screen bg-white text-[#0b1524]">
      <Header />

      <main>
        {/* HERO BANNER (matching dante-new.vercel.app full-bleed banner) */}
        <PageBanner
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Build Your Team" }]}
          badge="Talent Solutions"
          badgeHighlight="Pre-Vetted Specialists"
          title="Build Your Dedicated Team"
          description="Hire pre-vetted accountants, paraplanners, and back-office specialists equipped to integrate directly into your operations. We source and screen top-tier domain experts — you interview and approve your ideal team."
          primaryCta={{ label: "Build Your Team", href: "/contact" }}
          secondaryCta={{ label: "View Available Roles", href: "#roles" }}
          metrics={[
            { value: `${roles.length}`, label: "Role Categories" },
            { value: `${experienceLevels.length}`, label: "Experience Bands" },
            { value: "10–14d", label: "Average Setup Time" },
          ]}
          image={heroImage}
          cardBadge="Dedicated Specialists"
          cardTitle="Pre-Vetted Talent Selection"
          cardSubtitle="Interview and select accountants and specialists matched to your software stack."
          imageAlt="Team celebrating together around a boardroom table"
        />

        {/* ROLES */}
        <section id="roles" className="scroll-mt-20 border-t border-stone-200 bg-[#fbfbfa] py-20 lg:py-28">
          <Container size="default">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              {/* Sticky intro with photo */}
              <div className="lg:col-span-4">
                <div className="lg:sticky lg:top-32">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0056b3]">Select a Job Role</p>
                  <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-[#0b1524]">
                    Roles You Can Build With Us
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-stone-600">
                    Every role below can be staffed as a dedicated resource, a managed function, or a job-by-job arrangement. Pick the role — we will shape the model around it.
                  </p>
                  <div className="relative mt-8 aspect-[16/10] overflow-hidden rounded-2xl shadow-xl lg:aspect-[4/5]">
                    <Image
                      src="/images/nics/how-it-works-presentation.jpg"
                      alt="Team lead presenting a plan to colleagues"
                      fill
                      sizes="(min-width: 1024px) 30vw, 100vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b1524]/85 via-[#0b1524]/10 to-transparent" />
                    <p className="absolute bottom-5 left-6 flex items-baseline gap-2 text-white">
                      <span className="font-serif text-5xl font-bold">{roles.length}</span>
                      <span className="text-sm font-semibold uppercase tracking-wider text-slate-200">roles</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Role directory */}
              <ol className="grid border-t border-stone-200 sm:grid-cols-2 lg:col-span-8">
                {roles.map((role, i) => {
                  const RoleIcon = role.icon;
                  return (
                    <li
                      key={role.id}
                      className="group flex flex-col border-b border-stone-200 py-8 sm:odd:pr-8 sm:even:border-l sm:even:pl-8"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-bold tabular-nums text-stone-400">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="flex size-10 items-center justify-center rounded-full bg-[#0056b3]/10 text-[#0056b3] transition-colors duration-300 group-hover:bg-[#0056b3] group-hover:text-white">
                          <RoleIcon className="size-5" />
                        </span>
                      </div>
                      <h3 className="mt-4 text-xl font-bold text-[#0b1524] transition-colors group-hover:text-[#0056b3]">
                        {role.name}
                      </h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-stone-600">{role.description}</p>
                      <Link
                        href="/contact"
                        className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold text-[#0056b3] transition-colors hover:text-[#004494]"
                      >
                        Request a {role.name} profile
                        <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>
                    </li>
                  );
                })}
              </ol>
            </div>
          </Container>
        </section>

        {/* EXPERIENCE & LOCATION */}
        <section className="border-t border-stone-200 bg-white py-20 lg:py-28">
          <Container size="default">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-7">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0056b3]">Select Experience Level</p>
                <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl text-[#0b1524]">
                  Match the Seniority to the Work
                </h2>
                <p className="mt-4 text-base leading-relaxed text-stone-600">
                  Not every task needs a senior. Tell us the band that fits the work and the review capacity you have onshore, and we will scope the team accordingly.
                </p>

                {/* Seniority scale — each band's bar grows with experience */}
                <ol className="mt-10 space-y-5">
                  {experienceLevels.map((level, i) => (
                    <li
                      key={level.label}
                      className="group grid grid-cols-[5.5rem_1fr] items-start gap-5 sm:grid-cols-[7rem_1fr]"
                    >
                      <span className="pt-0.5 text-right font-serif text-lg font-bold leading-none text-[#0056b3]">
                        {level.label}
                      </span>
                      <div>
                        <div className="h-2.5 overflow-hidden rounded-full bg-stone-100">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-[#8bc7ff] to-[#0056b3] transition-[filter] duration-300 group-hover:brightness-110"
                            style={{ width: `${((i + 1) / experienceLevels.length) * 100}%` }}
                          />
                        </div>
                        <p className="mt-2 text-sm leading-relaxed text-stone-600">{level.detail}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="lg:col-span-5">
                <div className="relative overflow-hidden rounded-2xl bg-[#0b1524] p-8 text-white shadow-xl sm:p-10">
                  <Image
                    src="/images/nics/blog-video-call.jpg"
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover opacity-25"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0b1524] via-[#0b1524]/90 to-[#0056b3]/70" />

                  <div className="relative">
                    <div className="flex size-12 items-center justify-center rounded-full bg-white/10 text-[#8bc7ff]">
                      <Globe2 className="size-6" />
                    </div>
                    <h3 className="mt-5 text-2xl font-bold text-white">Select Location</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-300">
                      We build teams for firms operating in these markets, aligned to your working hours and regulatory context.
                    </p>

                    <ul className="mt-8 divide-y divide-white/10 border-y border-white/10">
                      {locations.map((loc) => (
                        <li key={loc} className="flex items-center justify-between gap-4 py-4 text-base font-semibold text-white">
                          <span>{loc}</span>
                          <CheckCircle2 className="size-4 shrink-0 text-[#8bc7ff]" />
                        </li>
                      ))}
                    </ul>

                    <p className="mt-6 text-xs leading-relaxed text-slate-400">
                      Delivery runs from our Chennai centre, with client relations handled from Sydney.
                    </p>
                    <Link
                      href="/contact"
                      className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-[#8bc7ff] transition-colors hover:text-white"
                    >
                      Discuss timezone coverage
                      <ArrowRight className="size-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* HOW IT WORKS */}
        <section className="border-t border-stone-200 bg-[#0b1524] py-20 text-white lg:py-28">
          <Container size="default">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#8bc7ff]">
                <UserRoundCheck className="size-3.5" />
                Choose What You Need
              </div>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
                Three Steps to a Live Team
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-300">
                No database trawling, no guesswork. One conversation, candidates you approve, and a team working to your process.
              </p>
            </div>

            {/* Connected three-step flow */}
            <ol className="relative mt-16 grid gap-14 md:grid-cols-3 md:gap-10">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-[16.66%] right-[16.66%] top-8 hidden border-t-2 border-dashed border-[#8bc7ff]/30 md:block"
              />
              {steps.map((step) => {
                const StepIcon = step.icon;
                return (
                  <li key={step.number} className="group relative text-center">
                    <div className="relative mx-auto flex size-16 items-center justify-center rounded-full bg-gradient-to-br from-[#8bc7ff] to-[#0056b3] text-white shadow-[0_0_40px_rgba(0,86,179,0.45)] ring-8 ring-[#0b1524] transition-transform duration-300 group-hover:scale-110">
                      <StepIcon className="size-6" />
                    </div>
                    <span className="mt-6 block font-mono text-xs font-bold tracking-[0.2em] text-[#8bc7ff]">
                      STEP {step.number}
                    </span>
                    <h3 className="mt-2 text-xl font-bold text-white">{step.title}</h3>
                    <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-slate-300">{step.description}</p>
                  </li>
                );
              })}
            </ol>

            <div className="mt-12 text-center">
              <Link
                href="/how-it-works"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-[#8bc7ff] transition-colors hover:text-white"
              >
                See the full engagement process
                <ArrowRight className="size-4" />
              </Link>
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
