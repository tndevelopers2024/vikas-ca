"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
} from "lucide-react";
import { Container } from "@/components/ui/Container";

const slides = [
  {
    id: "capacity-growth",
    badge: "Offshore Delivery Partner",
    badgeHighlight: "ISO/IEC 27001 Aligned",
    headline: "Scale your business without building every function in-house",
    description:
      "Shoulder up to 80% of routine accounting, tax compliance, and back-office administration so your onshore leadership can focus on high-value client advisory and business growth.",
    primaryCta: {
      label: "Explore our services",
      href: "#services",
    },
    secondaryCta: {
      label: "Discuss what to delegate",
      href: "#contact",
    },
    image: "/images/bright/hero-indian-professionals.jpg",
    imageAlt:
      "Indian corporate advisory and finance professionals reviewing documents in a modern sunlit office",
  },
  {
    id: "systems-talent",
    badge: "Certified Accounting Talent",
    badgeHighlight: "Direct Cloud Integration",
    headline: "Certified accounting talent working inside your systems",
    description:
      "From daily bookkeeping and end-to-end P2P/O2C cycles to SMSF audit preparations and monthly management reporting—experienced professionals working directly in your preferred cloud software.",
    primaryCta: {
      label: "View accounting services",
      href: "/accounting",
    },
    secondaryCta: {
      label: "Compliance & SMSF",
      href: "/compliance",
    },
    image: "/images/bright/hero-indian-accountant.jpg",
    imageAlt:
      "Indian professional accountant analyzing financial reports and cloud software at modern workstation",
  },
  {
    id: "dedicated-teams",
    badge: "Dedicated Teams & BOT",
    badgeHighlight: "Retain 100% Control",
    headline: "Your own dedicated team with zero management burden",
    description:
      "Choose dedicated insourcing, team leads with managed QA governance, or Build-Operate-Transfer. Scale from one dedicated analyst to a full multi-tier department with complete transparency.",
    primaryCta: {
      label: "Build your team",
      href: "/build-your-team",
    },
    secondaryCta: {
      label: "Why choose outsourcing",
      href: "/why-outsourcing",
    },
    image: "/images/bright/hero-indian-dedicated-team.jpg",
    imageAlt:
      "Indian dedicated offshore delivery team lead and analysts collaborating at modern workstations",
  },
  {
    id: "client-ownership",
    badge: "Shared Governance Architecture",
    badgeHighlight: "Australia & Global Standards",
    headline: "Outsource the repetitive work. Keep the core business.",
    description:
      "You retain client relationships, commercial decisions, professional judgement, and final approvals. NICS manages resource allocation, day-to-day processing, staff coordination, and quality review.",
    primaryCta: {
      label: "Explore delivery models",
      href: "#stories",
    },
    secondaryCta: {
      label: "Schedule consultation",
      href: "#contact",
    },
    image: "/images/bright/hero-governance-partnership.jpg",
    imageAlt:
      "Indian corporate executives and managing partner reviewing strategic documentation in bright boardroom",
  },
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const totalSlides = slides.length;
  const slideDuration = 7500;

  // Mobile swipe support
  const touchStartXRef = useRef<number | null>(null);
  const touchEndXRef = useRef<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  // Timer resets on manual navigation or pause/hover
  useEffect(() => {
    if (!isPlaying || isHovered) return;
    const timer = setInterval(nextSlide, slideDuration);
    return () => clearInterval(timer);
  }, [isPlaying, isHovered, nextSlide, slideDuration, currentSlide]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndXRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartXRef.current || !touchEndXRef.current) return;
    const distance = touchStartXRef.current - touchEndXRef.current;
    const minSwipeDistance = 50;
    if (distance > minSwipeDistance) {
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      prevSlide();
    }
    touchStartXRef.current = null;
    touchEndXRef.current = null;
  };

  return (
    /* ══════════════════════════════════════════════════════════════════════
        1. FULL-BLEED HERO BANNER CAROUSEL (100vh full-screen)
       ══════════════════════════════════════════════════════════════════════ */
    <section
      id="home"
      data-banner
      className="hero hero--full hero--banner relative isolate w-full h-screen min-h-screen min-h-[100vh] overflow-hidden bg-[#e8f1fb] text-[#0b1524] flex items-center"
      style={{ minHeight: "100vh" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-roledescription="carousel"
      aria-label="NICS Offshore Delivery Banner"
    >
        {/* ── Slide Stage: Simultaneous DOM Stack (zero blank flash on transition) ── */}
        <div className="hero__stage absolute inset-0 z-0">
          {slides.map((s, idx) => {
            const isActive = currentSlide === idx;

            return (
              <article
                key={s.id}
                role="group"
                aria-roledescription="slide"
                aria-label={`Slide ${idx + 1} of ${totalSlides}: ${s.badge}`}
                aria-hidden={!isActive}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  isActive
                    ? "opacity-100 z-10 pointer-events-auto"
                    : "opacity-0 z-0 pointer-events-none"
                }`}
              >
                {/* Full-Bleed Photograph (.hero__still) with Ken Burns Drift */}
                <div className="hero__still absolute inset-0 overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.imageAlt}
                    fill
                    priority={idx === 0}
                    sizes="100vw"
                    className={`object-cover object-[75%_center] lg:object-center filter saturate-[1.06] contrast-[1.02] ${
                      isActive ? "animate-banner-drift" : "scale-100"
                    }`}
                  />
                </div>

                {/* Calibrated Directional Scrim — protects text legibility on left, leaves images 100% vivid & crystal clear */}
                <div
                  className="hero__scrim absolute inset-0 z-[2] pointer-events-none hidden sm:block"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.88) 28%, rgba(255, 255, 255, 0.35) 46%, rgba(255, 255, 255, 0) 60%)",
                  }}
                  aria-hidden="true"
                />
                {/* Mobile Scrim Layer — protects header while revealing crisp imagery below */}
                <div
                  className="hero__scrim-mobile absolute inset-0 z-[2] pointer-events-none sm:hidden"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(255, 255, 255, 0.94) 0%, rgba(255, 255, 255, 0.82) 42%, rgba(255, 255, 255, 0.20) 70%, rgba(255, 255, 255, 0) 85%)",
                  }}
                  aria-hidden="true"
                />

                {/* Content Overlay (.hero__overlay) with clean spacing */}
                <div className="hero__overlay absolute inset-0 z-[3] flex items-center py-12 sm:py-16 lg:py-20">
                  <Container size="default" className="w-full">
                    <div className="max-w-xl sm:max-w-2xl lg:max-w-3xl space-y-4 sm:space-y-5">
                      {/* Eyebrow Pill */}
                      <div className={isActive ? "animate-banner-rise-1" : ""}>
                        <div className="inline-flex items-center gap-2 rounded-full border border-stone-300/80 bg-white px-3.5 sm:px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#0056b3] shadow-xs">
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0056b3] opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0056b3]" />
                          </span>
                          <span>{s.badge}</span>
                          <span className="text-stone-300">·</span>
                          <span className="text-stone-600 font-semibold">{s.badgeHighlight}</span>
                        </div>
                      </div>

                      {/* Display Headline */}
                      <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold leading-[1.10] tracking-[-0.03em] text-[#0b1524] text-balance max-w-2xl ${isActive ? "animate-banner-rise-2" : ""}`}>
                        {s.headline}
                      </h1>

                      {/* Descriptive Subtitle */}
                      <p className={`text-base sm:text-lg text-stone-700 leading-relaxed font-normal max-w-xl ${isActive ? "animate-banner-rise-3" : ""}`}>
                        {s.description}
                      </p>

                      {/* Action CTAs */}
                      <div className={`pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 ${isActive ? "animate-banner-rise-4" : ""}`}>
                        <Link
                          href={s.primaryCta.href}
                          className="group inline-flex items-center justify-center gap-2.5 rounded-sm bg-[#0056b3] px-7 py-3.5 sm:py-4 text-sm font-bold text-white shadow-lg shadow-[#0056b3]/25 transition-all duration-200 hover:bg-[#004494] hover:shadow-sm hover:shadow-[#0056b3]/30 hover:-translate-y-0.5 active:translate-y-0"
                        >
                          <span>{s.primaryCta.label}</span>
                          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                        <Link
                          href={s.secondaryCta.href}
                          className="inline-flex items-center justify-center gap-2 rounded-sm border border-stone-300/90 bg-white px-6 py-3.5 sm:py-4 text-sm font-semibold text-[#0b1524] shadow-2xs transition-all duration-200 hover:border-stone-400 hover:bg-white hover:text-[#0056b3]"
                        >
                          <span>{s.secondaryCta.label}</span>
                        </Link>
                      </div>
                    </div>
                  </Container>
                </div>
              </article>
            );
          })}
        </div>

        {/* ── Standing Foot Controls (.hero__foot) exactly matching Dante ── */}
        <div className="hero__foot absolute bottom-5 sm:bottom-7 left-0 right-0 z-20 pointer-events-none">
          <Container size="default">
            <div className="flex items-center gap-3 pointer-events-auto">
              {/* Prev Button */}
              <button
                onClick={prevSlide}
                type="button"
                aria-label="Previous banner"
                className="size-10 rounded-full border border-stone-300/80 bg-white text-[#0b1524] hover:bg-white hover:border-[#0056b3] hover:text-[#0056b3] hover:-translate-y-0.5 shadow-2xs transition-all flex items-center justify-center cursor-pointer"
              >
                <ChevronLeft className="size-4" />
              </button>

              {/* Dots with Animated Progress Bar */}
              <div className="flex items-center gap-2 px-1" role="tablist" aria-label="Choose a banner">
                {slides.map((s, idx) => {
                  const isActive = currentSlide === idx;
                  return (
                    <button
                      key={s.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      aria-label={`Go to banner ${idx + 1}: ${s.badge}`}
                      onClick={() => goToSlide(idx)}
                      className={`relative h-2.5 rounded-full transition-all duration-300 cursor-pointer overflow-hidden ${
                        isActive ? "w-12 bg-stone-300/80" : "w-2.5 bg-stone-400/50 hover:bg-stone-600"
                      }`}
                    >
                      {isActive && (
                        <div
                          key={`bar-${currentSlide}`}
                          style={{
                            animationDuration: `${slideDuration}ms`,
                            animationPlayState: isPlaying && !isHovered ? "running" : "paused",
                          }}
                          className="h-full bg-[#0056b3] rounded-full animate-banner-fill"
                        />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Next Button */}
              <button
                onClick={nextSlide}
                type="button"
                aria-label="Next banner"
                className="size-10 rounded-full border border-stone-300/80 bg-white text-[#0b1524] hover:bg-white hover:border-[#0056b3] hover:text-[#0056b3] hover:-translate-y-0.5 shadow-2xs transition-all flex items-center justify-center cursor-pointer"
              >
                <ChevronRight className="size-4" />
              </button>

              {/* Play/Pause Toggle Button */}
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                type="button"
                aria-label={isPlaying ? "Pause the banner" : "Play the banner"}
                className="size-10 rounded-full border border-stone-300/80 bg-white text-[#0b1524] hover:bg-white hover:text-[#0056b3] hover:-translate-y-0.5 shadow-2xs transition-all flex items-center justify-center cursor-pointer ml-1"
              >
                {isPlaying ? (
                  <Pause className="size-3.5 text-stone-700" />
                ) : (
                  <Play className="size-3.5 text-stone-700 fill-current ml-0.5" />
                )}
              </button>

              {/* Counter */}
              <span className="text-xs tabular-nums text-stone-500 font-semibold ml-2">
                0{currentSlide + 1} / 0{totalSlides}
              </span>
            </div>
          </Container>
        </div>
    </section>
  );
}
