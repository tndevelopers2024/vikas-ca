import React from "react";
import Image from "next/image";
import { announcementsData } from "@/data/announcementsData";
import { Container } from "@/components/ui/Container";
import { ArrowLink } from "@/components/ui/ArrowLink";

/**
 * This was a three-item carousel sitting one short strip below the hero's own
 * three-slide carousel — the same counter, arrows and progress bar twice within
 * a screen. All three announcements now show at once, so the page states each
 * point once and the hero is the only thing on the page that paginates.
 *
 * Static by design: no state, no timers, no framer-motion, so it renders on the
 * server with nothing to hydrate.
 */
export function AnnouncementBar() {
  return (
    <section
      id="announcements"
      aria-labelledby="announcements-heading"
      className="relative border-y border-stone-200 bg-[#f8fafc] text-[#0b1524]"
    >
      <Container size="default" className="py-10 lg:py-12">
        <div className="flex items-baseline justify-between gap-6 border-b border-[#0b1524]/15 pb-4">
          <h2
            id="announcements-heading"
            className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0056b3]"
          >
            <span className="inline-block h-0.5 w-6 bg-[#0056b3]" aria-hidden="true" />
            Featured
          </h2>
          <span className="text-[11px] font-medium uppercase tracking-wider text-stone-500">
            Current practice
          </span>
        </div>

        <ul className="grid grid-cols-1 gap-x-10 gap-y-8 pt-8 md:grid-cols-3 lg:gap-x-14">
          {announcementsData.map((item) => (
            <li key={item.id} className="flex gap-4">
              <div className="relative hidden h-16 w-16 shrink-0 overflow-hidden border border-stone-200 sm:block">
                <Image
                  src={item.image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </div>

              <div className="min-w-0">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-stone-500">
                  {item.category}
                </p>

                <h3 className="mt-1.5 text-base font-bold leading-snug text-[#0b1524]">
                  {item.title}
                </h3>

                <p className="mt-2 text-[13px] leading-relaxed text-stone-600">
                  {item.summary}
                </p>

                <ArrowLink href={item.href} variant="blue" size="sm" className="mt-3">
                  {item.linkText}
                </ArrowLink>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
