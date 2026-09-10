import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  MessagesSquare,
  Settings2,
  ClipboardList,
  RefreshCcw,
  Layers,
  Rocket,
  BadgeCheck,
  ShieldCheck,
} from "lucide-react";
import { Header } from "@/components/navigation/Header";
import { PageBanner } from "@/components/sections/PageBanner";
import { ExploreFurther } from "@/components/sections/ExploreFurther";
import { ReadyToScaleCTA } from "@/components/sections/ReadyToScaleCTA";
import { Footer } from "@/components/sections/Footer";
import { FloatingActions } from "@/components/ui/FloatingActions";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "How It Works | NICS",
  description:
    "How outsourcing with NICS works — communicate your requirements, set up the process and onboarding, manage the team with daily reporting, and run a continuous feedback mechanism.",
};

/** This page's own hero photograph, from the NICS image set. */
const heroImage = "/images/nics/how-it-works-presentation.jpg";

const steps = [
  {
    id: "communicate",
    number: "01",
    icon: MessagesSquare,
    navLabel: "Communicate your requirement",
    title: "Communicate your requirements",
    paragraphs: [
      "Before we get into the tasks, we ensure that we sit and talk with you to understand the objectives and goals of your business, along with your expectations. We mutually select the best outsourcing model for you — one that suits the skill set your business requires.",
      "We then take up the responsibility of sourcing the potential candidate, and we get your approval before anyone joins your team.",
    ],
    points: [
      "Discovery session on your objectives, goals, and expectations",
      "Outsourcing model selected mutually, not prescribed",
      "Skill set mapped to the work you actually need done",
      "Candidates sourced by us and approved by you",
    ],
  },
  {
    id: "onboarding",
    number: "02",
    icon: Settings2,
    navLabel: "Process setup & onboarding",
    title: "Setting up the process and the onboarding activities",
    paragraphs: [
      "This step involves all the things you’d do if you were recruiting an internal employee — creating the important onboarding activities such as establishing email accounts, remote server access, and application access.",
      "A brief induction is conducted, followed by a process overview, to get the entire team on the same page before live work begins.",
    ],
    points: [
      "Email accounts, remote server, and application access set up",
      "Systems configured exactly as for an internal hire",
      "Induction covering your business and ways of working",
      "Process overview aligning the whole team before go-live",
    ],
  },
  {
    id: "managing-team",
    number: "03",
    icon: ClipboardList,
    navLabel: "Managing team",
    title: "Managing the team",
    paragraphs: [
      "This step involves job planning, scheduling, execution, and reporting. Your NICS team members start working on their respective jobs within the project, and reports are shared every day.",
      "You have full control and visibility on the progress of the work at every stage.",
    ],
    points: [
      "Job planning and scheduling against your priorities",
      "Daily reports shared on work completed and in progress",
      "Full visibility of throughput and turnaround",
      "Control of the queue stays with your team",
    ],
  },
  {
    id: "feedback",
    number: "04",
    icon: RefreshCcw,
    navLabel: "Feedback mechanism",
    title: "Feedback mechanism",
    paragraphs: [
      "If you wish to make outsourcing work for your business, you certainly need to provide constructive feedback continuously. We set up a process that helps you provide feedback at regular intervals. This helps the team learn and adapt quickly, and improves the quality of the deliverables.",
      "Regular training aligned to your business needs also helps hit the target and bring the best from your outsourcing partner.",
    ],
    points: [
      "Structured feedback intervals built into the engagement",
      "Rapid learning and adaptation by the delivery team",
      "Deliverable quality improving over the life of the process",
      "Ongoing training tailored to your business needs",
    ],
  },
];

/** One photograph per step, in the same order as `steps`. */
const stepImages = [
  "/images/nics/home-boardroom.jpg",
  "/images/nics/accounting-analyst.jpg",
  "/images/nics/accounting-review.jpg",
  "/images/nics/blog-video-call.jpg",
];

const howItWorks = [
  {
    title: "How It Works",
    icon: Layers,
    blurb: "The four steps from first conversation to a team delivering under your direction.",
    href: "/how-it-works",
  },
  {
    title: "Know Your Models",
    icon: BadgeCheck,
    blurb: "Insourcing, Insourcing with Manager Support, Job-by-Job, and the BOT model compared.",
    href: null,
  },
  {
    title: "How to Get Started",
    icon: Rocket,
    blurb: "What to prepare, who to involve, and how quickly a first team can be live.",
    href: null,
  },
  {
    title: "Best Practices",
    icon: BadgeCheck,
    blurb: "What the firms who get the most from outsourcing do differently.",
    href: null,
  },
];

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-white text-[#0b1524]">
      <Header />

      <main>
        {/* HERO BANNER (matching dante-new.vercel.app full-bleed banner) */}
        <PageBanner
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "How It Works" }]}
          badge="How It Works"
          badgeHighlight="Structured 4-Step Journey"
          title="How It Works"
          description="A structured 4-step onboarding journey designed for effortless integration: Communicate requirements, Setup infrastructure, Manage daily execution, and continuously refine performance through Feedback loops."
          primaryCta={{ label: "Get Started", href: "/contact" }}
          secondaryCta={{ label: "See The Steps", href: "#steps" }}
          metrics={[
            { value: "Step 01", label: "Communicate Needs" },
            { value: "Step 02", label: "Setup & Security" },
            { value: "Step 03", label: "Daily Execution" },
            { value: "Step 04", label: "Continuous Feedback" },
          ]}
          image={heroImage}
          cardBadge="Seamless Onboarding"
          cardTitle="Structured 4-Step Integration"
          cardSubtitle="From initial communication to daily execution and ongoing feedback loops."
          imageAlt="Team lead presenting a plan at a whiteboard to colleagues"
        />

        {/* STEPS TIMELINE */}
        <section id="steps" className="scroll-mt-20 border-t border-stone-200 bg-[#fbfbfa] py-20 lg:py-28">
          <Container size="default">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0056b3]">The Process</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl text-[#0b1524]">
                From First Conversation to Daily Delivery
              </h2>
              <p className="mt-4 text-base leading-relaxed text-stone-600">
                Four steps, each with a clear owner. You define and approve; we recruit, set up, run, and report.
              </p>
            </div>

            {/* Zig-zag journey: a centre rail with icon nodes; narrative and checklist alternate sides */}
            <ol className="relative mt-16 lg:mt-24">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute bottom-0 left-7 top-0 w-px bg-gradient-to-b from-[#0056b3]/50 via-[#0056b3]/25 to-transparent lg:left-1/2"
              />

              {steps.map((step, index) => {
                const StepIcon = step.icon;
                const flip = index % 2 === 1;
                return (
                  <li
                    key={step.id}
                    id={step.id}
                    className="group relative grid scroll-mt-24 gap-8 pb-20 pl-20 last:pb-0 lg:grid-cols-2 lg:gap-28 lg:pl-0"
                  >
                    {/* Rail node */}
                    <div className="absolute left-0 top-0 z-10 flex size-14 items-center justify-center rounded-full bg-gradient-to-br from-[#8bc7ff] to-[#0056b3] text-white shadow-[0_10px_30px_rgba(0,86,179,0.35)] ring-8 ring-[#fbfbfa] transition-transform duration-300 group-hover:scale-110 lg:left-1/2 lg:-translate-x-1/2">
                      <StepIcon className="size-6" />
                    </div>

                    {/* Narrative */}
                    <div className={flip ? "lg:order-2" : "lg:text-right"}>
                      <div className={`flex items-center gap-4 ${flip ? "" : "lg:justify-end"}`}>
                        <span className="font-serif text-6xl font-bold leading-none text-[#0056b3]/15">{step.number}</span>
                        <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#0056b3]">
                          Step {step.number}
                        </span>
                      </div>

                      <h3 className="mt-5 text-2xl font-bold leading-snug text-[#0b1524] sm:text-3xl">
                        {step.title}
                      </h3>

                      <div className="mt-4 space-y-4">
                        {step.paragraphs.map((para, i) => (
                          <p key={i} className="text-base leading-relaxed text-stone-600">
                            {para}
                          </p>
                        ))}
                      </div>
                    </div>

                    {/* Photo + checklist */}
                    <div className={flip ? "lg:order-1" : ""}>
                      <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-stone-100 shadow-lg">
                        <Image
                          src={stepImages[index]}
                          alt={step.title}
                          fill
                          sizes="(min-width: 1024px) 40vw, 100vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1524]/40 via-transparent to-transparent" />
                      </div>

                      <p className="mt-6 text-xs font-bold uppercase tracking-wider text-stone-400">
                        What Happens In This Step
                      </p>
                      <ul className="mt-3 divide-y divide-stone-200 border-y border-stone-200">
                        {step.points.map((pt, i) => (
                          <li key={i} className="flex items-start gap-3 py-3 text-sm text-stone-700">
                            <CheckCircle2 className="size-4 shrink-0 text-[#0056b3] mt-0.5" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>

                      {index === steps.length - 1 && (
                        <Link
                          href="/contact"
                          className="group/btn mt-6 inline-flex items-center gap-2 rounded-full bg-[#0b1524] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#0056b3]"
                        >
                          Start at step one
                          <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-1" />
                        </Link>
                      )}
                    </div>
                  </li>
                );
              })}
            </ol>
          </Container>
        </section>

        {/* HOW IT WORKS CLUSTER */}
        <ExploreFurther
          eyebrowIcon={Layers}
          title={"How It Works"}
          description={"The process is one part. Here is the rest of what you need before deciding how to structure your team."}
          items={howItWorks}
          currentHref="/how-it-works"
          images={["/images/nics/how-it-works-presentation.jpg", "/images/nics/why-outsourcing-analysis.jpg", "/images/nics/blog-video-call.jpg", "/images/nics/accounting-review.jpg"]}
        />

        {/* CALL TO ACTION */}
        <ReadyToScaleCTA />
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}
