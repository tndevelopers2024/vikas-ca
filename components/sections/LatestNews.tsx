"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Newspaper, BellRing } from "lucide-react";
import { latestNewsItems } from "@/data/insightsData";
import { Container } from "@/components/ui/Container";
import { ArrowLink } from "@/components/ui/ArrowLink";

export function LatestNews() {
  return (
    <section id="news" className="bg-[#f7f6f2] py-12 lg:py-16 border-b border-[#e6e4dc]">
      <Container size="default">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Heading & Newsletter Subscribe Callout */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <div className="text-xs sm:text-sm font-semibold tracking-[0.14em] uppercase text-[#0056b3] mb-2 flex items-center gap-1.5">
                <Newspaper className="w-4 h-4" />
                Timely Updates
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0b1524]">
                Latest News & Alerts
              </h2>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed">
              Regular briefings on security practice, compliance and delivery.
            </p>

            <div className="space-y-3 border-t-2 border-[#0b1524] pt-5">
              <div className="flex items-center gap-2 text-xs font-bold text-[#0b1524] uppercase tracking-wider">
                <BellRing className="w-4 h-4 text-[#0056b3]" />
                Practice & Security Briefings
              </div>
              <p className="text-xs text-stone-600">
                Receive structured updates on standards, security controls, and operational workflows.
              </p>
              <ArrowLink href="#contact" variant="blue" size="sm">
                Get in touch with NICS
              </ArrowLink>
            </div>
          </div>

          {/* Right Column: Compact Editorial List with Dividers */}
          <div className="lg:col-span-8 divide-y divide-[#e4e2da] border-y border-[#e4e2da]">
            {latestNewsItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="group flex flex-col sm:flex-row sm:items-center justify-between gap-3 py-5 transition-colors sm:py-6"
              >
                <div className="space-y-1 sm:max-w-xl">
                  <div className="flex items-center gap-3 text-xs text-stone-400">
                    <span className="font-semibold text-[#0056b3] uppercase tracking-wider">
                      {item.category}
                    </span>
                    <span>•</span>
                    <span>{item.date}</span>
                    <span>•</span>
                    <span>{item.readTime} read</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#0b1524] group-hover:text-[#0056b3] transition-colors leading-snug">
                    {item.title}
                  </h3>
                </div>

                <div className="flex items-center gap-2 text-xs font-semibold text-stone-400 group-hover:text-[#0056b3] group-hover:translate-x-1 transition-all flex-shrink-0 self-end sm:self-center">
                  <span>Read alert</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
