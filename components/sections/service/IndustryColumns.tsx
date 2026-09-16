import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export interface ServiceIndustry {
  title: string;
  anchor?: string;
  icon: LucideIcon;
  description: string;
  benefits: string[];
  /** Optional column photograph and headline figure. */
  image?: string;
  imageAlt?: string;
  badge?: string;
  stat?: string;
  statDetail?: string;
}

interface IndustryColumnsProps {
  eyebrow: string;
  title: string;
  intro: string;
  items: ServiceIndustry[];
}

/**
 * Columns on the page ground, each opened by a rule — no card, no fill, no
 * boxed icon. The rule carries the division that the border used to, which is
 * all it was ever doing.
 */
export function IndustryColumns({ eyebrow, title, intro, items }: IndustryColumnsProps) {
  return (
    <section className="border-t border-stone-200 bg-white py-12 lg:py-16">
      <Container size="default">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={intro}
          align="split"
        />

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 lg:gap-14">
          {items.map((ind) => {
            const Icon = ind.icon;
            return (
              <div
                key={ind.title}
                id={ind.anchor}
                className="scroll-mt-32 flex flex-col border-t-2 border-[#0b1524] pt-6"
              >
                {ind.image && (
                  <div className="relative mb-5 aspect-[16/10] w-full overflow-hidden border border-[#e4e2da]">
                    <Image
                      src={ind.image}
                      alt={ind.imageAlt || ind.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                )}

                <div className="flex items-center gap-3">
                  <Icon className="size-5 text-[#0056b3]" aria-hidden="true" />
                  {ind.badge && (
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-stone-500">
                      {ind.badge}
                    </span>
                  )}
                </div>

                <h3 className="mt-4 text-xl font-bold tracking-tight text-[#0b1524]">
                  {ind.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-stone-600">
                  {ind.description}
                </p>

                {ind.stat && (
                  <p className="mt-4 border-l-2 border-[#0056b3] pl-3 text-[13px] leading-snug">
                    <span className="font-bold text-[#0b1524]">{ind.stat}</span>
                    {ind.statDetail && (
                      <span className="block text-stone-500">{ind.statDetail}</span>
                    )}
                  </p>
                )}

                <ul className="mt-5 space-y-2.5 border-t border-[#e4e2da] pt-5">
                  {ind.benefits.map((b) => (
                    <li key={b} className="flex gap-2.5 text-[13px] leading-relaxed text-stone-600">
                      <span className="mt-2 h-px w-3 shrink-0 bg-[#0056b3]" aria-hidden="true" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className="group mt-auto inline-flex items-center gap-1.5 pt-6 text-xs font-bold uppercase tracking-wider text-[#0b1524] transition-colors hover:text-[#0056b3]"
                >
                  Explore industry workflows
                  <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
