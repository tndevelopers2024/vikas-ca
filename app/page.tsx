"use client";

import React, { useEffect } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Header } from "@/components/navigation/Header";
import { Hero } from "@/components/sections/Hero";
import { SoftwareStrip } from "@/components/sections/SoftwareStrip";
import { AnnouncementBar } from "@/components/sections/AnnouncementBar";
import { DeliveryProof } from "@/components/sections/DeliveryProof";
import { CultureStatement } from "@/components/sections/CultureStatement";
import { Services } from "@/components/sections/Services";
import { ClientStories } from "@/components/sections/ClientStories";
import { CareersBanner } from "@/components/sections/CareersBanner";
import { Locations } from "@/components/sections/Locations";
import { Insights } from "@/components/sections/Insights";
import { LatestNews } from "@/components/sections/LatestNews";
import { ReadyToScaleCTA } from "@/components/sections/ReadyToScaleCTA";
import { Footer } from "@/components/sections/Footer";
import { FloatingActions } from "@/components/ui/FloatingActions";

export default function HomePage() {
  /**
   * Sections render immediately now that the preloader is gone, but a link like
   * "/#stories" can still land before layout settles, so keep retrying until the
   * target exists. Also honour any later hash change.
   */
  useEffect(() => {
    let frame = 0;

    const scrollToHash = () => {
      const id = window.location.hash.slice(1);
      if (!id) return;

      let attempts = 0;
      const attempt = () => {
        const target = document.getElementById(id);
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        } else if (attempts++ < 40) {
          frame = requestAnimationFrame(attempt);
        }
      };
      frame = requestAnimationFrame(attempt);
    };

    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("hashchange", scrollToHash);
    };
  }, []);

  return (
    <>
      {/* ── Main site content ───────────────────────── */}
      <div className="flex flex-col min-h-screen bg-white text-[#0f172a]">
        <Header />

        {/* Main scrollable content */}
        <ScrollReveal>
          <main>
            {/* 1. Hero */}
            <Hero />

            {/* 2. What software we work in — the fastest category signal */}
            <SoftwareStrip />

            {/* 3. Announcements */}
            <div className="reveal">
              <AnnouncementBar />
            </div>

            {/* 4. Who does the work, and where */}
            <div className="reveal">
              <DeliveryProof />
            </div>

            {/* 5. Culture statement */}
            <div className="reveal">
              <CultureStatement />
            </div>

            {/* 6. Services */}
            <div className="reveal">
              <Services />
            </div>

            {/* 7. Client stories */}
            <div className="reveal">
              <ClientStories />
            </div>

            {/* 8. Careers */}
            <div className="reveal">
              <CareersBanner />
            </div>

            {/* 9. Locations */}
            <div className="reveal">
              <Locations />
            </div>

            {/* 10. Insights */}
            <div className="reveal">
              <Insights />
            </div>

            {/* 11. Latest news */}
            <div className="reveal">
              <LatestNews />
            </div>

            {/* 12. Contact */}
            <div className="reveal">
              <ReadyToScaleCTA />
            </div>
          </main>

          {/* Footer */}
          <Footer />

          <FloatingActions />
        </ScrollReveal>
      </div>
    </>
  );
}
