import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export interface ServiceCapability {
  id: string;
  name: string;
  tag: string;
  icon: LucideIcon;
  description: string;
  points: string[];
  /** Optional per-row thumbnail; pages that have art for each capability. */
  image?: string;
  imageAlt?: string;
}

interface CapabilityListProps {
  id?: string;
  eyebrow: string;
  title: string;
  intro: string;
  /** Section-level photograph for the held column. Omit when rows carry their own. */
  image?: string;
  imageAlt?: string;
  items: ServiceCapability[];
  ctaLabel?: string;
}

/**
 * The service pages used to render this as a 3-across grid of bordered cards,
 * each card holding a boxed icon chip and two internal dividers — boxes inside
 * boxes, seven times over. It is a specification, so it reads as one: a held
 * left column with the argument and a photograph, and the capabilities as
 * hairline-separated rows on the right. Same idiom as the delivery-floor
 * section on the home page.
 */
export function CapabilityList({
  id = "services",
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
  items,
  ctaLabel = "Discuss your requirements",
}: CapabilityListProps) {
  return (
    <section
      id={id}
      className="scroll-mt-20 border-t border-stone-200 bg-[#fbfbfa] py-12 lg:py-16"
    >
      <Container size="default">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Held left column: the argument, a photograph, one action */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <SectionHeading
                eyebrow={eyebrow}
                title={title}
                description={intro}
                align="left"
                className="!mb-6 lg:!mb-6"
              />

              {image && (
                <div className="relative aspect-[5/4] w-full overflow-hidden border border-[#e4e2da]">
                  <Image
                    src={image}
                    alt={imageAlt ?? ""}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
              )}

              <Link
                href="/contact"
                className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#0056b3] transition-colors hover:text-[#003d80]"
              >
                {ctaLabel}
                <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right column: the specification itself */}
          <div className="lg:col-span-7">
            <ol className="divide-y divide-[#e4e2da] border-y border-[#e4e2da]">
              {items.map((item, index) => {
                const Icon = item.icon;
                return (
                  <li key={item.id} id={item.id} className="scroll-mt-28 py-7 first:pt-0 lg:py-8">
                    <div className="flex items-baseline gap-4 sm:gap-6">
                      <span className="w-6 shrink-0 text-sm font-bold tabular-nums text-[#0056b3]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                          <Icon className="size-4 shrink-0 text-[#0056b3]" aria-hidden="true" />
                          <h3 className="text-lg font-bold tracking-tight text-[#0b1524] sm:text-xl">
                            {item.name}
                          </h3>
                          <span className="text-[11px] font-semibold uppercase tracking-wider text-stone-500">
                            {item.tag}
                          </span>
                        </div>

                        <div className="mt-3 flex flex-col gap-4 sm:flex-row-reverse sm:items-start">
                          {item.image && (
                            <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden border border-[#e4e2da] sm:aspect-[4/3] sm:w-40">
                              <Image
                                src={item.image}
                                alt={item.imageAlt ?? ""}
                                fill
                                className="object-cover"
                                sizes="160px"
                              />
                            </div>
                          )}
                          <p className="text-sm leading-relaxed text-stone-600">
                            {item.description}
                          </p>
                        </div>

                        <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5">
                          {item.points.map((pt) => (
                            <li
                              key={pt}
                              className="relative pl-3.5 text-[13px] leading-relaxed text-stone-500 before:absolute before:left-0 before:top-[0.6em] before:h-1 before:w-1 before:rounded-full before:bg-[#0056b3]/50"
                            >
                              {pt}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  );
}
