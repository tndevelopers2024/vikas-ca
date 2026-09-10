"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Phone, CheckCircle2, ShieldCheck, Sparkles, Lock } from "lucide-react";
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

export function ReadyToScaleCTA({
  id = "contact",
  badge = "Direct Offshore Delivery Model",
  title = "Ready to scale your delivery capacity?",
  subtitle = "Let\u2019s map out your requirements and build a dependable team shaped around your firm.",
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
      className={`relative isolate overflow-hidden bg-gradient-to-br from-[#061833] via-[#004a99] to-[#002f68] py-20 lg:py-28 text-white border-t border-blue-900/40 ${className}`}
    >
      {/* 1. Ambient Lighting & Glow Orbs */}
      <div
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[360px] rounded-full opacity-35 blur-3xl"
        style={{
          background: "radial-gradient(circle, #38bdf8 0%, rgba(0, 86, 179, 0.4) 50%, transparent 75%)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 -right-24 w-[420px] h-[420px] rounded-full bg-cyan-400/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 -left-24 w-[420px] h-[420px] rounded-full bg-blue-600/15 blur-3xl"
        aria-hidden="true"
      />

      {/* 2. Top luminous accent line */}
      <div
        className="pointer-events-none absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#38bdf8]/50 to-transparent"
        aria-hidden="true"
      />

      {/* 3. Subtle Constellation / Network Grid SVG Background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]"
        aria-hidden="true"
      />

      <Container size="default" className="relative z-10 text-center">
        {/* Eyebrow Pill Badge */}
        {badge && (
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#a5d8ff] backdrop-blur-md shadow-sm">
            <Sparkles className="size-3.5 text-[#38bdf8]" />
            <span>{badge}</span>
          </div>
        )}

        {/* High-Impact Heading */}
        <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-white leading-[1.12] max-w-3xl mx-auto">
          {title}
        </h2>

        {/* Subtitle */}
        {subtitle && (
          <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-blue-100/90 leading-relaxed font-normal">
            {subtitle}
          </p>
        )}

        {/* Trust Badges Strip */}
        {trustPoints && trustPoints.length > 0 && (
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 max-w-3xl mx-auto">
            {trustPoints.map((point, index) => (
              <div
                key={index}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3.5 py-1 text-xs font-medium text-blue-100 backdrop-blur-sm shadow-xs"
              >
                <CheckCircle2 className="size-3.5 text-[#38bdf8] shrink-0" />
                <span>{point}</span>
              </div>
            ))}
          </div>
        )}

        {/* Dual Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={finalPrimaryHref}
            onClick={handleStartConsultationClick}
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-lg bg-white px-8 py-4 text-sm sm:text-base font-bold text-[#003a78] shadow-lg shadow-black/20 transition-all duration-200 hover:bg-blue-50 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <span>{primaryCtaText}</span>
            <ArrowRight className="size-4.5 transition-transform duration-200 group-hover:translate-x-1.5" />
          </Link>

          <a
            href={secondaryCtaHref}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-lg border border-white/25 bg-white/10 px-7 py-4 text-sm sm:text-base font-semibold text-white backdrop-blur-md shadow-sm transition-all duration-200 hover:bg-white/20 hover:-translate-y-0.5 active:translate-y-0"
          >
            <Phone className="size-4 text-[#8bc7ff]" />
            <span>{secondaryCtaText}</span>
          </a>
        </div>

        {/* Security & Confidentiality Reassurance Note */}
        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-blue-200/70">
          <Lock className="size-3.5 text-[#38bdf8]/80 shrink-0" />
          <span>Strict confidentiality · Non-Disclosure Agreement (NDA) · 1 business day response</span>
        </div>
      </Container>
    </section>
  );
}
