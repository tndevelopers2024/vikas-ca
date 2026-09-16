import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Layers, Award } from "lucide-react";
import { Container } from "@/components/ui/Container";

const highlights = [
  {
    icon: Award,
    badge: "Statutory Precision",
    title: "Local Standards & Taxation",
    description:
      "Strict alignment with your jurisdiction's accounting standards, taxation rules, indirect tax, superannuation, and established practice workpapers.",
  },
  {
    icon: ShieldCheck,
    badge: "Enterprise Security",
    title: "ISO/IEC 27001 Framework",
    description:
      "End-to-end data segregation, role-based access control, clean-desk policy, and rigorous internal risk management frameworks.",
  },
  {
    icon: Layers,
    badge: "Seamless Growth",
    title: "From 1 Person to a Full Function",
    description:
      "Start small with one dedicated accountant or analyst, prove the delivery model, and scale into a complete autonomous department with zero friction.",
  },
];

const bannerStats = [
  { value: "99.4%", label: "SLA Adherence" },
  { value: "Zero", label: "Data Breaches" },
  { value: "10–14d", label: "Average Setup" },
];

/**
 * Copy over a photograph, so everything readable has to stay inside the scrim.
 * The previous version ran a max-w-4xl block with three white cards across it,
 * which pushed the third card and the whole stat strip out past where the wash
 * fades — they sat on bright glass and a face. The column is now held to the
 * protected side, the wash reaches further before falling away, and the cards
 * are ruled rows instead of boxes floating on the image.
 */
export function CareersBanner() {
  return (
    <section
      id="careers-banner"
      aria-labelledby="careers-banner-heading"
      className="relative w-full overflow-hidden border-y border-stone-200 bg-[#e8f1fb] py-16 sm:py-24"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/people-at-a-table-with-a-laptop.avif"
          alt="Team collaborating around a table with a laptop during a compliance and delivery session"
          fill
          priority={false}
          className="object-cover object-right"
          sizes="100vw"
        />
        {/* Holds near-opaque across the column, then falls away over the image */}
        <div
          className="pointer-events-none absolute inset-0 hidden sm:block"
          style={{
            background:
              "linear-gradient(100deg, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.95) 46%, rgba(255,255,255,0.78) 62%, rgba(255,255,255,0.25) 80%, rgba(255,255,255,0) 100%)",
          }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 sm:hidden"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.96) 0%, rgba(255,255,255,0.9) 55%, rgba(255,255,255,0.6) 80%, rgba(255,255,255,0.35) 100%)",
          }}
          aria-hidden="true"
        />
      </div>

      <Container size="default" className="relative z-10">
        <div className="max-w-xl lg:max-w-2xl xl:max-w-3xl">
          <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0056b3]">
            <span className="inline-block h-0.5 w-6 bg-[#0056b3]" aria-hidden="true" />
            Capacity & Quality Assurance
          </p>

          <h2
            id="careers-banner-heading"
            className="mt-4 text-3xl font-extrabold leading-[1.12] tracking-tight text-[#0b1524] sm:text-4xl lg:text-5xl"
          >
            Local precision,{" "}
            <span className="text-[#0056b3]">international standards.</span>
          </h2>

          <p className="mt-5 text-base leading-relaxed text-stone-700 sm:text-lg">
            Work smartly <em>on</em> your business while we work <em>in</em> it. NICS
            shoulders up to 80% of routine accounting, compliance and back-office
            work — an India-based delivery centre held to your jurisdiction&apos;s
            rules and internationally recognised frameworks.
          </p>

          {/* Ruled rows rather than cards floating on the photograph */}
          <dl className="mt-8 divide-y divide-[#0b1524]/12 border-y border-[#0b1524]/20">
            {highlights.map((h) => {
              const Icon = h.icon;
              return (
                <div
                  key={h.title}
                  className="grid grid-cols-1 gap-x-6 gap-y-1 py-4 sm:grid-cols-12"
                >
                  <dt className="sm:col-span-5">
                    <span className="flex items-center gap-2.5">
                      <Icon className="size-4 shrink-0 text-[#0056b3]" aria-hidden="true" />
                      <span className="text-sm font-bold text-[#0b1524]">{h.title}</span>
                    </span>
                    <span className="mt-1 block pl-[26px] text-[11px] font-semibold uppercase tracking-wider text-stone-500">
                      {h.badge}
                    </span>
                  </dt>
                  <dd className="text-[13px] leading-relaxed text-stone-600 sm:col-span-7">
                    {h.description}
                  </dd>
                </div>
              );
            })}
          </dl>

          <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
            <Link
              href="#stories"
              className="group inline-flex items-center justify-center gap-2 rounded-sm bg-[#0056b3] px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#004494]"
            >
              <span>Explore delivery models</span>
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-stone-300 bg-white/90 px-6 py-3.5 text-sm font-semibold text-[#0b1524] transition-colors hover:border-[#0b1524] hover:bg-white"
            >
              <span>Discuss what to move offshore</span>
            </Link>
          </div>

          {/* Figures stay inside the wash, and carry enough weight to read on it */}
          <dl className="mt-7 flex flex-wrap items-baseline gap-x-8 gap-y-2 border-t border-[#0b1524]/20 pt-4">
            {bannerStats.map((stat) => (
              <div key={stat.label} className="flex items-baseline gap-2">
                <dt className="sr-only">{stat.label}</dt>
                <dd className="flex items-baseline gap-2">
                  <span className="text-base font-extrabold tabular-nums text-[#0056b3]">
                    {stat.value}
                  </span>
                  <span className="text-xs font-medium text-[#0b1524]">{stat.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
