import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Compass,
  Target,
  HeartHandshake,
  History,
  Users,
  UserRoundCheck,
  Gift,
  Cake,
  Award,
  BadgeCheck,
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
  title: "Who We Are | NICS",
  description:
    "Our history, vision, mission, and culture. NICS is a business process outsourcing partner for accounting, compliance, operational, and administrative processes serving SMEs and accounting practices.",
};

/** This page's own hero photograph — pages no longer share the category image. */
const heroImage = "/images/nics/who-we-are-team.jpg";

const historyParagraphs = [
  "Traditional BPO was built for large corporations. For small and medium businesses and independent accounting practitioners, the models on offer were too rigid, too large, and too far removed from how a practice actually works — so most firms simply carried the load themselves.",
  "NICS was founded to invent a different category: an outsourcing partnership that is holistic and genuinely fits SMEs and accounting practices. Not a call-centre model bolted onto professional work, but a delivery team that operates inside your systems, to your standards, under your direction.",
  "Today NICS is a business process outsourcing partner for accounting, compliance, operational, and administrative processes, with a delivery centre in Chennai and client relationships across international markets. The business is built on rich business acumen and human capital, with a broader vision to offer value-based, technically brilliant and functionally sound service.",
];

const visionPoints = [
  {
    icon: Award,
    text: "To become the #1 business process outsourcing specialist across the globe, recognised for being customer-centric, people-powered, and value-based.",
  },
  {
    icon: BadgeCheck,
    text: "To be synonymous with problem solving and global talent, while ethically offering top quality services through continuous learning, adaptability, and innovation.",
  },
  {
    icon: Users,
    text: "To grow into a 1000+ member team excelling in the processes of accounting, compliance, operations, and administration across all industries — because human capital is the powerline to our success.",
  },
  {
    icon: Compass,
    text: "Business expansion into the US and Canada, followed by EU markets starting with the UK and Ireland.",
  },
];

const missionPoints = [
  {
    icon: Target,
    text: "To be a global leader and a top-rank outsourcing partner for end-to-end accounting, operational, compliance, and administrative business support services for SMEs in all industries.",
  },
  {
    icon: CheckCircle2,
    text: "To be recognised for business dexterity, process excellence, and delivery capabilities.",
  },
];

const culturePoints = [
  "An open-door management style and collaborative working model, intrinsic to team unity, trust, and transparency",
  "An inclusive place to discuss ideas, brainstorm problems, and challenge processes that do not work",
  "A human-first approach to assigning work and providing personal development opportunities",
  "Room for people to thrive unfettered, rather than be managed to a script",
];

const cultureRituals = [
  {
    icon: UserRoundCheck,
    title: "Employee of the Month",
    text: "Employees who go the extra mile in their role, or show merit in character and behaviour, are recognised in front of the whole team.",
  },
  {
    icon: Cake,
    title: "Monthly Celebrations",
    text: "Birthdays are celebrated at the end of each month, so nobody's day passes unmarked.",
  },
  {
    icon: Gift,
    title: "Team Bonding",
    text: "Regular team activities that make room for shared laughter alongside the work.",
  },
];

const whoWeAre = [
  {
    title: "Who We Are",
    icon: Compass,
    blurb: "Our history, vision, mission, and the culture we run the business by.",
    href: "/who-we-are",
  },
  {
    title: "Our Team",
    icon: Users,
    blurb: "The people leading delivery, and the specialists behind each service line.",
    href: null,
  },
  {
    title: "Customer Value Proposition",
    icon: HeartHandshake,
    blurb: "What a client gets from the partnership, stated plainly.",
    href: null,
  },
  {
    title: "Employee Value Proposition",
    icon: Award,
    blurb: "Why people join us, and why they stay for the long run.",
    href: null,
  },
];

export default function WhoWeArePage() {
  return (
    <div className="min-h-screen bg-white text-[#0b1524]">
      <Header />

      <main>
        {/* HERO BANNER (matching dante-new.vercel.app full-bleed banner) */}
        <PageBanner
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Who We Are" }]}
          badge="About NICS"
          badgeHighlight="People Powered"
          title="Who We Are"
          description="A dedicated business process outsourcing partner built specifically for SMEs and accounting practices. Rooted in deep business acumen and exceptional human capital, we deliver technically brilliant, value-based support that scales your firm."
          primaryCta={{ label: "Contact Us", href: "/contact" }}
          secondaryCta={{ label: "Read Our Story", href: "#history" }}
          metrics={[
            { value: "15+ Yrs", label: "Combined Leadership" },
            { value: "100%", label: "Client Retention SLA" },
            { value: "ISO 27001", label: "Enterprise Governance" },
          ]}
          image={heroImage}
          cardBadge="People Powered"
          cardTitle="Strategic Human Capital & SME Focus"
          cardSubtitle="Exceptional business acumen and delivery excellence scaling alongside your leadership."
          imageAlt="Team joining hands over a shared worktable with laptops"
        />

        {/* HISTORY */}
        <section id="history" className="scroll-mt-20 border-t border-stone-200 bg-[#fbfbfa] py-20 lg:py-28">
          <Container size="default">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5">
                <div className="flex size-12 items-center justify-center rounded-sm bg-[#0056b3]/10 text-[#0056b3]">
                  <History className="size-6" />
                </div>
                <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-[#0056b3]">Our Story</p>
                <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl text-[#0b1524]">
                  History
                </h2>
                <p className="mt-5 text-base leading-relaxed text-stone-600">
                  We started from a gap in the market: outsourcing that worked for large corporations, and almost nobody else.
                </p>

                <div className="mt-8 rounded-sm border border-[#0056b3]/20 bg-white p-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-stone-400">Where We Deliver From</p>
                  <ul className="mt-4 space-y-3">
                    {[
                      "Chennai — HQ delivery centre",
                      "Sydney — client relations",
                    ].map((loc, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-stone-600">
                        <CheckCircle2 className="size-4 shrink-0 text-[#0056b3] mt-0.5" />
                        <span>{loc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="space-y-6 rounded-sm border border-stone-200 bg-white p-8 lg:p-10">
                  {historyParagraphs.map((para, i) => (
                    <p key={i} className="text-base leading-relaxed text-stone-600">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* VISION & MISSION */}
        <section id="vision" className="scroll-mt-20 border-t border-stone-200 bg-white py-20 lg:py-28">
          <Container size="default">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0056b3]">Where We Are Going</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl text-[#0b1524]">
                Vision &amp; Mission
              </h2>
              <p className="mt-4 text-base leading-relaxed text-stone-600">
                What we are building towards, and what we hold ourselves to while we build it.
              </p>
            </div>

            <div className="mt-14 grid gap-8 lg:grid-cols-2">
              {/* Vision */}
              <div className="rounded-sm border border-stone-200 bg-[#fbfbfa] p-8 lg:p-10">
                <div className="flex items-center gap-4">
                  <div className="flex size-12 items-center justify-center rounded-sm bg-[#0056b3]/10 text-[#0056b3]">
                    <Compass className="size-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0b1524]">Vision</h3>
                </div>

                <ul className="mt-7 space-y-5">
                  {visionPoints.map((point, i) => {
                    const PointIcon = point.icon;
                    return (
                      <li key={i} className="flex items-start gap-4">
                        <div className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-white text-[#0056b3] ring-1 ring-stone-200">
                          <PointIcon className="size-4" />
                        </div>
                        <p className="text-sm leading-relaxed text-stone-600">{point.text}</p>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Mission */}
              <div id="mission" className="scroll-mt-24 rounded-sm border border-[#0056b3]/20 bg-[#0b1524] p-8 text-white lg:p-10">
                <div className="flex items-center gap-4">
                  <div className="flex size-12 items-center justify-center rounded-sm bg-white/10 text-[#8bc7ff]">
                    <Target className="size-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Mission</h3>
                </div>

                <ul className="mt-7 space-y-5">
                  {missionPoints.map((point, i) => {
                    const PointIcon = point.icon;
                    return (
                      <li key={i} className="flex items-start gap-4">
                        <div className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-white/10 text-[#8bc7ff]">
                          <PointIcon className="size-4" />
                        </div>
                        <p className="text-sm leading-relaxed text-slate-300">{point.text}</p>
                      </li>
                    );
                  })}
                </ul>

                <div className="mt-8 border-t border-white/10 pt-6">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8bc7ff] transition-colors hover:text-white"
                  >
                    Talk to our team
                    <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* CULTURE */}
        <section id="culture" className="scroll-mt-20 border-t border-stone-200 bg-[#fbfbfa] py-20 lg:py-28">
          <Container size="default">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5">
                <div className="flex size-12 items-center justify-center rounded-sm bg-[#0056b3]/10 text-[#0056b3]">
                  <HeartHandshake className="size-6" />
                </div>
                <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-[#0056b3]">How We Work</p>
                <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl text-[#0b1524]">
                  Culture
                </h2>
                <p className="mt-5 text-base leading-relaxed text-stone-600">
                  We are passionate about people and their individual successes. That is not a slogan — it decides how work gets assigned, how problems get raised, and how people grow here.
                </p>

                <ul className="mt-8 space-y-3">
                  {culturePoints.map((point, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-stone-600">
                      <CheckCircle2 className="size-4 shrink-0 text-[#0056b3] mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-7">
                {/* Photo with the rituals as a floating timeline over its lower edge */}
                <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-stone-100 shadow-xl">
                  <Image
                    src="/images/nics/blog-video-call.jpg"
                    alt="Team smiling together on a video call with colleagues"
                    fill
                    sizes="(min-width: 1024px) 55vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1524]/50 via-transparent to-transparent" />
                </div>

                <ol className="relative mx-3 -mt-14 divide-y divide-stone-200 rounded-2xl bg-white shadow-xl ring-1 ring-stone-200 sm:mx-8">
                  {cultureRituals.map((ritual) => {
                    const RitualIcon = ritual.icon;
                    return (
                      <li key={ritual.title} className="group flex items-start gap-5 p-5 sm:p-6">
                        <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#0056b3]/10 text-[#0056b3] transition-colors duration-300 group-hover:bg-[#0056b3] group-hover:text-white">
                          <RitualIcon className="size-5" />
                        </span>
                        <div>
                          <h3 className="text-lg font-bold text-[#0b1524]">{ritual.title}</h3>
                          <p className="mt-1 text-sm leading-relaxed text-stone-600">{ritual.text}</p>
                        </div>
                      </li>
                    );
                  })}
                </ol>

                <blockquote className="relative mt-12 border-l-4 border-[#0056b3] pl-6 sm:pl-8">
                  <span aria-hidden="true" className="absolute -top-8 left-3 font-serif text-8xl leading-none text-[#0056b3]/15">
                    &ldquo;
                  </span>
                  <p className="relative font-serif text-xl leading-relaxed text-[#0b1524] sm:text-2xl">
                    People who are trusted, developed, and recognised stay longer — and continuity of knowledge across your process is one of the things you are actually buying when you build a team with us.
                  </p>
                  <Link
                    href="/contact"
                    className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold text-[#0056b3] transition-colors hover:text-[#004494]"
                  >
                    Meet the team behind your process
                    <ArrowRight className="size-3.5" />
                  </Link>
                </blockquote>
              </div>
            </div>
          </Container>
        </section>

        {/* WHO WE ARE CLUSTER */}
        <ExploreFurther
          eyebrowIcon={Users}
          title={"Who We Are"}
          description={"The people, and what the partnership is worth — from both sides of it."}
          items={whoWeAre}
          currentHref="/who-we-are"
          images={["/images/nics/home-boardroom.jpg", "/images/nics/blog-video-call.jpg", "/images/nics/blog-sales-review.jpg", "/images/nics/how-it-works-presentation.jpg"]}
        />

        {/* CALL TO ACTION */}
        <ReadyToScaleCTA />
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}
