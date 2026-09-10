import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  SlidersHorizontal,
  Lightbulb,
  HeartHandshake,
  LifeBuoy,
  TrendingUp,
  Wallet,
  Award,
  ShieldCheck,
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
  title: "Why Outsourcing | NICS",
  description:
    "Outsourcing answers your concerns on efficiency, timeliness and productivity. Retain full control of your offshore team while NICS handles recruitment, training, IT, compliance, and support services.",
};

/** This page's own hero photograph — pages no longer share the category image. */
const heroImage = "/images/bright/why-outsourcing-banner.jpg";

const pillars = [
  {
    id: "control",
    eyebrow: "01 — Control",
    icon: SlidersHorizontal,
    navLabel: "You retain full control",
    title: "You decide, you retain full control",
    paragraphs: [
      "One of the most common perceptions about outsourcing is losing control of your business process. Through our flexible and completely customizable service models, you retain total control of your offshore team, as if they were in-house. You have every say in who is hired, how they are trained, the quality of their work, and even the organizational culture and climate. You don’t have to worry about office space, recruitment, HR, labour laws, IT, security, or payroll.",
      "You simply communicate your requirements, monitor the team, and provide continuous feedback on their performance. You can create your own work practices and timelines, visit your team anytime you wish, and have a dedicated professional liaise with the team for thorough control and clarity on operations.",
    ],
    points: [
      "You decide who is hired and how they are trained",
      "Your work practices, quality standards, and timelines apply",
      "A dedicated liaison keeps operations transparent",
      "All performance indicators are open, secure, and visible",
    ],
  },
  {
    id: "best-practices",
    eyebrow: "02 — Technology",
    icon: Lightbulb,
    navLabel: "Industry best practices",
    title: "Keeping you abreast with state-of-the-art technology and industry best practices",
    paragraphs: [
      "Best practices help you reassess and utilize your resources more efficiently. Our talented experts will guide you on the best practices leading to enhanced efficiency and quality.",
      "Stay updated with cutting-edge technology and lead in the market with the most effective practices — without carrying the cost of continually retooling an in-house function yourself.",
    ],
    points: [
      "Guidance from experts on proven process best practices",
      "Current technology applied to your existing workflows",
      "Resource utilisation reassessed for efficiency gains",
      "Quality lifted alongside throughput, not traded against it",
    ],
  },
  {
    id: "professionals",
    eyebrow: "03 — People",
    icon: HeartHandshake,
    navLabel: "Committed professionals",
    title: "Committed and hard-working professionals",
    paragraphs: [
      "India, as a country, gives great importance to academic excellence, intellectual advancement, loyalty, honesty, and hard work. The age-old Indian culture inculcates the values of accountability, responsibility, and commitment.",
      "Professionals here value their jobs highly and tend to stay with good employers for longer, because they attach a strong emotional bond to their work and challenge themselves each day to perform better — which shows up directly in your retention, continuity, and delivery quality.",
    ],
    points: [
      "Deep pool of academically strong finance professionals",
      "Culture of accountability, responsibility, and commitment",
      "Longer tenure with good employers means lower churn",
      "Continuity of knowledge across your process over time",
    ],
  },
  {
    id: "support-services",
    eyebrow: "04 — Operations",
    icon: LifeBuoy,
    navLabel: "We handle support services",
    title: "Your support function is our main function",
    paragraphs: [
      "We operate your offshore team. You have an extended team — your offshore team. While you concentrate on building your business and managing its core aspects, we take care of the rest: recruitment, staffing, orientation, training, labour laws, compliance, regulations, administration, service delivery, IT, and support services. You provide the direction.",
      "People usually think they lose control over everything when a task is outsourced. It isn’t quite true. Outsourcing is simpler, easier, and more effective than you think — and it is transparent. All you need to do is communicate your requirements, monitor them, and provide timely feedback. You neither have to worry about office space nor recruiting the right candidate, and you don’t have to carry hefty payrolls.",
    ],
    points: [
      "Recruitment, staffing, orientation, and training handled",
      "Labour laws, compliance, and regulations managed for you",
      "IT, security, infrastructure, and administration included",
      "No office space, payroll, or HR overhead on your books",
    ],
  },
];

const whyOutsourcing = [
  {
    title: "Enhance Productivity",
    icon: TrendingUp,
    blurb: "Retain full control and be the decision-maker while efficiency, timeliness, and output all improve.",
    href: "/why-outsourcing",
  },
  {
    title: "Empowering Business",
    icon: BadgeCheck,
    blurb: "Free your senior team from support functions so they can focus on growth and client relationships.",
    href: null,
  },
  {
    title: "Cost Advantages",
    icon: Wallet,
    blurb: "Deliver more value at a smaller bill without carrying recruitment, payroll, and infrastructure costs.",
    href: null,
  },
  {
    title: "NICS Advantage",
    icon: Award,
    blurb: "If you are still looking at outsourcing from a BPO’s perspective, think again.",
    href: null,
  },
];

export default function WhyOutsourcingPage() {
  return (
    <div className="min-h-screen bg-white text-[#0b1524]">
      <Header />

      <main>
        {/* HERO BANNER (matching dante-new.vercel.app full-bleed banner) */}
        <PageBanner
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Why Outsourcing" }]}
          badge="Why Outsourcing"
          badgeHighlight="Full Strategic Control"
          title="Why Choose Outsourcing"
          description="Retain full strategic and operational control of your workflows while seamlessly scaling capacity and driving down overheads. We recruit, train, and manage dedicated professionals who work as an extension of your firm."
          primaryCta={{ label: "Discuss Your Needs", href: "/contact" }}
          secondaryCta={{ label: "Explore Advantages", href: "#control" }}
          metrics={[
            { value: "80%", label: "Routine Work Delegated" },
            { value: "100%", label: "Client IP Protection" },
            { value: "Zero", label: "Infrastructure CapEx" },
          ]}
          image={heroImage}
          cardBadge="Your Extended Team"
          cardTitle="Retain 100% Onshore Control"
          cardSubtitle="Delegate routine processing while keeping client relationships, strategy, and judgment in-house."
          imageAlt="Executive leadership and offshore delivery partner establishing strategic collaboration in modern executive office"
        />

        {/* INTRO NARRATIVE */}
        <section className="border-t border-stone-200 bg-[#fbfbfa] py-20 lg:py-24">
          <Container size="default">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-center">
              <div className="lg:col-span-7">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0056b3]">The Case for Outsourcing</p>
                <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl text-[#0b1524]">
                  Pause and Think Again: Strategic Delegation Outperforms In-House Strain
                </h2>
                <div className="mt-6 space-y-5 text-base leading-relaxed text-stone-600">
                  <p>
                    When your business is growing, one of the biggest challenges you face is to ensure consistent quality and productivity. It is tempting to keep all business processes under one roof, thinking you have better control over them and can therefore guarantee quality and overall efficiency. Having an in-house team or partnering with a local agency may appear like the ideal solution.{" "}
                    <span className="font-semibold text-[#0b1524]">Pause and think again.</span>
                  </p>
                  <p>
                    Only a full-fledged and dedicated operations set-up can do justice if you want to retain or exceed the quality of your deliverables. Outsourcing may just be the answer to your concerns on efficiency, timeliness, and productivity — with the added benefits of an expert team, industry knowledge, market understanding, and a streamlined process.
                  </p>
                  <p>
                    With small and medium sized companies flooding the market, the need for a sound and reliable outsourcing partner has become the need of the hour. Statistics also show that a major percentage of SMEs are already outsourcing their services alongside building their brand and expanding their business.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative overflow-hidden rounded-2xl border border-stone-200 bg-white p-2.5 shadow-xl transition-all hover:shadow-2xl">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
                    <Image
                      src="/images/bright/why-outsourcing-collaboration.jpg"
                      alt="Dedicated finance and accounting team collaborating at modern workstations"
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 40vw, 90vw"
                    />
                  </div>
                  <div className="p-4 sm:p-5">
                    <div className="flex items-center gap-2">
                      <span className="flex size-2 rounded-full bg-emerald-500" />
                      <p className="text-xs font-bold uppercase tracking-wider text-[#0056b3]">
                        Dedicated Extension Of Your Firm
                      </p>
                    </div>
                    <p className="mt-2 text-sm font-semibold text-[#0b1524]">
                      Retain 100% operational direction while our certified professionals manage daily execution.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* PILLAR SECTIONS */}
        <section id="pillars" className="scroll-mt-20 border-t border-stone-200 bg-white py-20 lg:py-28">
          <Container size="default">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0056b3]">What Changes For You</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl text-[#0b1524]">
                Four Reasons Productivity Goes Up
              </h2>
              <p className="mt-4 text-base leading-relaxed text-stone-600">
                Control stays with you, best practice comes with the team, the people stay for the long run, and every support function moves off your plate.
              </p>
            </div>

            <div className="mt-16 space-y-8">
              {pillars.map((pillar, index) => {
                const PillarIcon = pillar.icon;
                return (
                  <div
                    key={pillar.id}
                    id={pillar.id}
                    className="scroll-mt-24 grid gap-8 rounded-sm border border-stone-200 bg-[#fbfbfa] p-8 transition-all hover:border-[#0056b3]/30 hover:bg-white hover:shadow-lg lg:grid-cols-12 lg:gap-12 lg:p-10"
                  >
                    <div className="lg:col-span-7">
                      <div className="flex items-center gap-4">
                        <div className="flex size-12 shrink-0 items-center justify-center rounded-sm bg-[#0056b3]/10 text-[#0056b3]">
                          <PillarIcon className="size-6" />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-[0.18em] text-stone-400">
                          {pillar.eyebrow}
                        </span>
                      </div>

                      <h3 className="mt-5 text-2xl font-bold leading-snug text-[#0b1524]">
                        {pillar.title}
                      </h3>

                      <div className="mt-4 space-y-4">
                        {pillar.paragraphs.map((para, i) => (
                          <p key={i} className="text-sm leading-relaxed text-stone-600">
                            {para}
                          </p>
                        ))}
                      </div>
                    </div>

                    <div className="lg:col-span-5">
                      <div className="rounded-sm border border-stone-200 bg-white p-6">
                        <p className="text-xs font-bold uppercase tracking-wider text-stone-400">
                          What This Means In Practice
                        </p>
                        <ul className="mt-4 space-y-3">
                          {pillar.points.map((pt, i) => (
                            <li key={i} className="flex items-start gap-2.5 text-sm text-stone-600">
                              <CheckCircle2 className="size-4 shrink-0 text-[#0056b3] mt-0.5" />
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>

                        {index === pillars.length - 1 && (
                          <Link
                            href="/contact"
                            className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-[#0056b3] transition-colors hover:text-[#004494]"
                          >
                            Talk through your process
                            <ArrowRight className="size-3.5" />
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        {/* WHY OUTSOURCING CLUSTER */}
        <section className="border-t border-stone-200 bg-[#0b1524] py-20 text-white lg:py-28">
          <Container size="default">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#8bc7ff]">
                <TrendingUp className="size-3.5" />
                Explore Further
              </div>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
                Why Outsourcing
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-300">
                Productivity is one part of the picture. Here is the rest of the case for building your team offshore.
              </p>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {whyOutsourcing.map((item) => {
                const ItemIcon = item.icon;
                const isCurrent = item.href === "/why-outsourcing";
                const cardBody = (
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex size-11 items-center justify-center rounded-sm bg-white/10 text-[#8bc7ff]">
                        <ItemIcon className="size-5" />
                      </div>
                      {isCurrent && (
                        <span className="rounded bg-[#8bc7ff]/20 px-2 py-0.5 text-[11px] font-semibold text-[#8bc7ff]">
                          On this page
                        </span>
                      )}
                      {!item.href && (
                        <span className="rounded bg-white/10 px-2 py-0.5 text-[11px] font-semibold text-slate-400">
                          Coming soon
                        </span>
                      )}
                    </div>
                    <h3 className="mt-4 text-lg font-bold text-white">{item.title}</h3>
                    <p className="mt-3 text-xs leading-relaxed text-slate-300">{item.blurb}</p>
                  </div>
                );

                return item.href && !isCurrent ? (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="flex flex-col justify-between rounded-sm border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-[#8bc7ff]/40 hover:bg-white/10"
                  >
                    {cardBody}
                  </Link>
                ) : (
                  <div
                    key={item.title}
                    className={`flex flex-col justify-between rounded-sm border p-6 ${
                      isCurrent
                        ? "border-[#8bc7ff]/40 bg-white/10"
                        : "border-white/10 bg-white/5"
                    }`}
                  >
                    {cardBody}
                  </div>
                );
              })}
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
