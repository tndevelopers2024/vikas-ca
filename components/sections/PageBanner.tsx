"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
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
    <section className="relative isolate overflow-hidden min-h-[400px] sm:min-h-[440px] lg:min-h-[480px] flex items-center pt-32 sm:pt-40 lg:pt-44 pb-16 sm:pb-20 border-b border-stone-200/20">
      {/* 1. Full-bleed Background Photograph */}
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center scale-[1.01]"
      />

      {/* 2. AccSource-Signature Deep Navy & Corporate Scrim Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#001738]/95 via-[#002e5b]/88 to-[#001738]/85" />
      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute inset-0 hero-mesh opacity-20 pointer-events-none" aria-hidden="true" />

      {/* 3. Hero Content Container */}
      <Container size="default" className="relative z-10 w-full">
        {/* Breadcrumb Navigation on Dark Photographic Background */}
        <Breadcrumbs items={breadcrumbs} variant="light" className="mb-5" />

        {/* Eyebrow Pill Badge */}
        {badge && (
          <div className="mb-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-3.5 py-1 text-xs font-semibold text-white shadow-xs">
              <Sparkles className="size-3.5 text-[#00e5c9]" />
              <span>{badge}</span>
              {badgeHighlight && (
                <>
                  <span className="text-white/40">·</span>
                  <span className="text-slate-200">{badgeHighlight}</span>
                </>
              )}
            </div>
          </div>
        )}

        {/* High-Impact Page Title H1 */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-white leading-[1.12] max-w-4xl">
          {title}
        </h1>

        {/* Signature AccSource Teal Accent Underline Bar */}
        <div className="w-16 h-1.5 bg-[#00a99d] rounded-full mt-4 mb-5 shadow-sm" />

        {/* Value Proposition Description */}
        {description && (
          <p className="text-base sm:text-lg lg:text-xl text-slate-100/90 leading-relaxed max-w-3xl font-normal">
            {description}
          </p>
        )}

        {/* Dual Action CTAs */}
        {(primaryCta || secondaryCta) && (
          <div className="pt-6 flex flex-wrap gap-4 items-center">
            {primaryCta && (
              <Link
                href={primaryCta.href}
                className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#00a99d] hover:bg-[#008f85] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#00a99d]/30 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>{primaryCta.label}</span>
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            )}
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 backdrop-blur-md px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:border-white/60 hover:bg-white/20"
              >
                <span>{secondaryCta.label}</span>
              </Link>
            )}
          </div>
        )}

        {/* Trust Metrics Strip */}
        {metrics && metrics.length > 0 && (
          <div className="mt-8 pt-6 border-t border-white/15 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-3xl">
            {metrics.map((m, idx) => (
              <div key={idx} className="group">
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                    {m.value}
                  </span>
                  {m.unit && (
                    <span className="text-xs font-bold text-[#8bc7ff] uppercase tracking-wide">
                      {m.unit}
                    </span>
                  )}
                </div>
                <p className="mt-1 text-xs text-slate-200/85 font-medium leading-tight">
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
