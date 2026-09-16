"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Phone, Check, Lock } from "lucide-react";
import { Container } from "@/components/ui/Container";

export interface ReadyToScaleCTAProps {
  id?: string;
  badge?: string;
  title?: string;
  subtitle?: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  trustPoints?: string[];
  className?: string;
}

/**
 * A floating panel rather than a full-bleed band: the card is held inside the
 * site measure, lifted off the ground with a shadow, and overlaps the top of
 * the footer so it reads as one object sitting on the page. Every page ends
 * with this immediately before <Footer />, so the overlap is safe everywhere —
 * the footer carries the extra top padding that makes room for it.
 *
 * The props are unchanged from the banded version, so all seventeen call sites
 * keep working untouched.
 */
export function ReadyToScaleCTA({
  id = "contact",
  badge = "Direct Offshore Delivery Model",
  title = "Ready to scale your delivery capacity?",
  subtitle = "Let’s map out your requirements and build a dependable team shaped around your firm.",
  primaryCtaText = "Start Consultation",
  primaryCtaHref = "/contact#consultation-form",
  secondaryCtaText = "Call +91 9632 466 477",
  secondaryCtaHref = "tel:+919632466477",
  trustPoints = [
    "Rapid 2–4 Week Onboarding",
    "ISO 27001 Security Discipline",
    "100% Onshore Sign-off & Control",
    "Flexible Engagement Models",
  ],
  className = "",
}: ReadyToScaleCTAProps) {
  const pathname = usePathname();
  const isContactPage = pathname === "/contact";

  const handleStartConsultationClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isContactPage) {
      e.preventDefault();
      const target = document.getElementById("consultation-form");
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.pushState(null, "", "#consultation-form");
      }
    }
  };

  const finalPrimaryHref = isContactPage ? "#consultation-form" : primaryCtaHref;

  return (
    <section
      id={id}
      aria-label="Ready to scale delivery capacity"
      className={`relative isolate bg-[#f7f6f2] pt-12 lg:pt-16 ${className}`}
    >
      {/*
        The lower half of this band is painted in the footer's own top colour,
        so the panel straddles the seam and floats across it. Overlapping the
        footer with a negative margin instead would paint under it on the home
        page, where the .reveal wrapper's transform makes a stacking context.
      */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-[#081528]"
        aria-hidden="true"
      />

      <Container size="default" className="relative z-10">
        <div className="relative isolate overflow-hidden rounded-sm bg-gradient-to-br from-[#06172f] via-[#00478f] to-[#002f68] px-6 py-10 shadow-[0_30px_60px_-24px_rgba(4,16,36,0.65)] sm:px-10 lg:px-14 lg:py-14">
          {/* One soft light source, top-left, and a faint dot field */}
          <div
            className="pointer-events-none absolute -left-24 -top-32 h-[420px] w-[560px] rounded-full opacity-30 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, #38bdf8 0%, rgba(0, 86, 179, 0.35) 55%, transparent 75%)",
            }}
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.06] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]"
            aria-hidden="true"
          />

          <div className="relative z-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
            {/* The argument */}
            <div className="lg:col-span-7">
              {badge && (
                <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8bc7ff]">
                  <span className="inline-block h-0.5 w-6 bg-[#8bc7ff]" aria-hidden="true" />
                  {badge}
                </div>
              )}

              <h2 className="mt-4 text-3xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
                {title}
              </h2>

              {subtitle && (
                <p className="mt-4 max-w-xl text-base leading-relaxed text-blue-100/90">
                  {subtitle}
                </p>
              )}

              {trustPoints && trustPoints.length > 0 && (
                <ul className="mt-7 grid grid-cols-1 gap-x-8 gap-y-2.5 border-t border-white/15 pt-6 sm:grid-cols-2">
                  {trustPoints.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-2.5 text-[13px] font-medium text-blue-100"
                    >
                      <Check className="size-3.5 shrink-0 text-[#38bdf8]" aria-hidden="true" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* The action */}
            <div className="lg:col-span-5 lg:pl-6">
              <div className="flex flex-col gap-3">
                <Link
                  href={finalPrimaryHref}
                  onClick={handleStartConsultationClick}
                  className="group inline-flex w-full items-center justify-between gap-3 rounded-sm bg-white px-6 py-4 text-sm font-bold text-[#003a78] transition-colors duration-200 hover:bg-blue-50 sm:text-base"
                >
                  <span>{primaryCtaText}</span>
                  <ArrowRight className="size-4.5 shrink-0 transition-transform duration-200 group-hover:translate-x-1.5" />
                </Link>

                <a
                  href={secondaryCtaHref}
                  className="inline-flex w-full items-center justify-between gap-3 rounded-sm border border-white/30 px-6 py-4 text-sm font-semibold text-white transition-colors duration-200 hover:border-white hover:bg-white/10 sm:text-base"
                >
                  <span className="inline-flex items-center gap-2.5">
                    <Phone className="size-4 shrink-0 text-[#8bc7ff]" aria-hidden="true" />
                    {secondaryCtaText}
                  </span>
                </a>
              </div>

              <p className="mt-5 flex items-start gap-2 text-[11px] leading-relaxed text-blue-200/70">
                <Lock className="mt-0.5 size-3.5 shrink-0 text-[#38bdf8]/80" aria-hidden="true" />
                <span>
                  Strict confidentiality · Non-Disclosure Agreement (NDA) · 1 business day response
                </span>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
