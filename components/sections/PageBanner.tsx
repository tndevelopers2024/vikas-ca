"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export interface PageBannerMetric {
  value: string;
  label: string;
  unit?: string;
}

export interface PageBannerProps {
  breadcrumbs: { label: string; href?: string }[];
  badge: string;
  badgeHighlight?: string;
  title: string;
  description: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  metrics?: PageBannerMetric[];
  image: string;
  imageAlt: string;
  cardBadge?: string;
  cardTitle?: string;
  cardSubtitle?: string;
}

export function PageBanner({
  breadcrumbs,
  badge,
  badgeHighlight,
  title,
  description,
  primaryCta,
  secondaryCta,
  metrics,
  image,
  imageAlt,
}: PageBannerProps) {
  return (
    <section className="relative isolate overflow-hidden min-h-[400px] sm:min-h-[440px] lg:min-h-[480px] flex items-center pt-28 sm:pt-32 lg:pt-36 pb-12 sm:pb-14 lg:pb-16 border-b border-stone-200 bg-[#f4f8fc]">
      {/* 1. Full-bleed Background Photograph */}
      <div className="hero__still absolute inset-0 z-0 overflow-hidden">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[80%_center] lg:object-[82%_center] filter saturate-[1.05] contrast-[1.02]"
        />
      </div>

      {/* 2. Calibrated Directional White Scrim matching homepage Hero — guarantees crisp contrast for dark text */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none hidden sm:block"
        style={{
          background:
            "linear-gradient(90deg, rgba(255, 255, 255, 0.98) 0%, rgba(255, 255, 255, 0.94) 38%, rgba(255, 255, 255, 0.65) 58%, rgba(255, 255, 255, 0.2) 80%, rgba(255, 255, 255, 0.05) 100%)",
        }}
        aria-hidden="true"
      />
      {/* Mobile Scrim Layer */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none sm:hidden"
        style={{
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0.98) 0%, rgba(255, 255, 255, 0.94) 60%, rgba(255, 255, 255, 0.8) 100%)",
        }}
        aria-hidden="true"
      />

      {/* 3. Hero Content Container */}
      <Container size="default" className="relative z-10 w-full">
        {/* Breadcrumb Navigation */}
        <Breadcrumbs items={breadcrumbs} variant="default" className="mb-4" />

        {/* Eyebrow Pill Badge */}
        {badge && (
          <div className="mb-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-stone-300/80 bg-white px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#0056b3] shadow-xs">
              <BadgeCheck className="size-3.5 text-[#0056b3]" />
              <span>{badge}</span>
              {badgeHighlight && (
                <>
                  <span className="text-stone-300">·</span>
                  <span className="text-stone-600 font-semibold">{badgeHighlight}</span>
                </>
              )}
            </div>
          </div>
        )}

        {/* High-Impact Page Title H1 */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold tracking-[-0.03em] text-[#0b1524] leading-[1.12] max-w-4xl">
          {title}
        </h1>

        {/* Value Proposition Description */}
        {description && (
          <p className="mt-4 text-base sm:text-lg text-stone-700 leading-relaxed max-w-3xl font-normal">
            {description}
          </p>
        )}

        {/* Dual Action CTAs */}
        {(primaryCta || secondaryCta) && (
          <div className="pt-6 flex flex-wrap gap-3.5 items-center">
            {primaryCta && (
              <Link
                href={primaryCta.href}
                className="group inline-flex items-center justify-center gap-2.5 rounded-lg bg-[#0056b3] hover:bg-[#004494] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors"
              >
                <span>{primaryCta.label}</span>
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            )}
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center justify-center rounded-lg border border-stone-300 bg-white/90 hover:bg-white px-6 py-3 text-sm font-semibold text-[#0b1524] shadow-xs transition-colors"
              >
                <span>{secondaryCta.label}</span>
              </Link>
            )}
          </div>
        )}

        {/* Trust Metrics Strip */}
        {metrics && metrics.length > 0 && (
          <div className="mt-8 pt-6 border-t border-stone-300/60 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-3xl">
            {metrics.map((m, idx) => (
              <div key={idx} className="group">
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#0b1524]">
                    {m.value}
                  </span>
                  {m.unit && (
                    <span className="text-xs font-bold text-[#0056b3] uppercase tracking-wide">
                      {m.unit}
                    </span>
                  )}
                </div>
                <p className="mt-1 text-xs text-stone-600 font-medium leading-tight">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
