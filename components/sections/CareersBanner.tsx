"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Layers,
  Sparkles,
  Award,
} from "lucide-react";
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
  { value: "10-14d", label: "Average Setup" },
];

export function CareersBanner() {
  return (
    <section id="careers-banner" className="relative w-full overflow-hidden bg-[#e8f1fb] py-16 sm:py-24 border-y border-stone-200">
      {/* Full-bleed Background Photograph */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/bright/careers-quality.jpg"
          alt="NICS team achieving quality and ISO/IEC 27001 standards excellence"
          fill
          priority={false}
          className="object-cover object-center scale-100"
          sizes="100vw"
        />
        {/* Calibrated Scrim matching dante-new */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(100deg, rgba(255, 255, 255, 0.96) 0%, rgba(255, 255, 255, 0.90) 45%, rgba(255, 255, 255, 0.45) 75%, rgba(255, 255, 255, 0.1) 100%)",
          }}
        />
      </div>

      <Container className="relative z-10">
        <div className="max-w-4xl space-y-6">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#0056b3]/20 bg-white/90 backdrop-blur-md px-3.5 py-1.5 shadow-2xs">
            <Sparkles className="size-4 text-[#0056b3]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#0056b3]">
              Capacity & Quality Assurance
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0b1524] leading-[1.15]">
            Local Precision,{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #0056b3 0%, #0099db 60%, #c89d5c 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              International Standards.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-stone-700 leading-relaxed max-w-2xl font-normal">
            Work smartly <em>ON</em> your business while we work <em>IN</em> your business. NICS shoulders up to 80% of routine accounting, compliance, and back-office tasks—combining an India-based delivery center with rigorous jurisdictional compliance and internationally recognized frameworks.
          </p>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            {highlights.map((h) => {
              const Icon = h.icon;
              return (
                <div
                  key={h.title}
                  className="group rounded-2xl bg-white/90 backdrop-blur-md p-4 border border-stone-200/90 shadow-2xs transition-all duration-300 hover:border-[#0056b3]/40 hover:shadow-md hover:-translate-y-0.5"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2.5 bg-[#0056b3]/10 text-[#0056b3] rounded-xl group-hover:bg-[#0056b3] group-hover:text-white transition-colors duration-200">
                      <Icon className="size-4" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">
                      {h.badge}
                    </span>
                  </div>
                  <div className="text-sm font-bold text-[#0b1524] mb-1.5">{h.title}</div>
                  <div className="text-xs text-stone-600 leading-relaxed font-normal">
                    {h.description}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Stats & Actions Strip */}
          <div className="pt-4 border-t border-stone-300/70 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <Link
                href="#stories"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#0056b3] px-6 py-3.5 text-sm font-bold text-white shadow-md shadow-[#0056b3]/20 transition-all hover:bg-[#004494] hover:shadow-lg hover:shadow-[#0056b3]/30"
              >
                <span>Explore Delivery Models</span>
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-stone-300 bg-white/90 backdrop-blur-md px-6 py-3.5 text-sm font-semibold text-[#0b1524] shadow-2xs transition-all hover:border-stone-400 hover:bg-white hover:text-[#0056b3]"
              >
                <span>Discuss What to Move Offshore</span>
              </Link>
            </div>

            {/* Quick Metrics in Glass Pill */}
            <div className="flex items-center gap-4 bg-white/80 backdrop-blur-md border border-stone-200/90 rounded-xl px-4 py-2 shadow-2xs">
              {bannerStats.map((stat, idx) => (
                <div key={idx} className="flex items-baseline gap-1.5 first:pl-0 pl-3 border-l first:border-l-0 border-stone-200">
                  <span className="text-sm font-extrabold text-[#0056b3]">{stat.value}</span>
                  <span className="text-[10px] text-stone-500 font-medium whitespace-nowrap">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
