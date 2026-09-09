"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-[#f8fafc] text-[#0b1524]">
      <div className="absolute inset-0 hero-mesh pointer-events-none opacity-70" />

      {/*
        The delivery floor carries the whole proposition — capacity you can see.
        The gradients only need to protect the headline where the copy overlaps,
        so they fade out well before the right edge and leave the photograph
        readable rather than washing it to near-white.
      */}
      <div className="absolute inset-y-0 right-0 hidden w-[58%] lg:block">
        <Image
          src="/images/photos/delivery-floor.avif"
          alt="NICS delivery floor: analysts working at workstations across an open-plan centre"
          fill
          priority
          sizes="58vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#f8fafc] via-[#f8fafc]/55 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#f8fafc]/70 via-transparent to-transparent" />
      </div>

      <div className="relative mx-auto flex min-h-[700px] w-full max-w-[1600px] items-center px-5 pb-20 pt-36 sm:px-8 md:px-10 lg:min-h-[760px] lg:px-12 xl:px-14">
        <motion.div
          className="max-w-3xl lg:max-w-4xl"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.18em] text-[#0056b3] sm:text-sm">
            Offshore delivery, made flexible
          </p>
          <h1 className="text-[2.75rem] font-extrabold leading-[1.02] tracking-[-0.03em] sm:text-6xl lg:text-7xl xl:text-[5.25rem]">
            Scale your business without building every function in-house.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-stone-600 sm:text-xl">
            Add experienced accounting, finance, and operational capacity when you need it—without the cost and complexity of expanding in-house.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#services"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#0056b3] px-6 py-3.5 text-sm font-bold text-white shadow-md shadow-[#0056b3]/20 transition-colors hover:bg-[#004494] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0056b3]"
            >
              Explore our services
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-xl border border-stone-300 bg-white px-6 py-3.5 text-sm font-semibold text-[#0b1524] transition-colors hover:border-stone-400 hover:bg-stone-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0056b3]"
            >
              <MapPin className="size-4 text-stone-500 group-hover:text-[#0056b3]" />
              Discuss your needs
            </a>
          </div>

          {/* The desktop hero photograph sits behind the copy; below lg there is
              no room for that, so the same image runs full width under the CTAs
              rather than leaving small screens with no photography at all. */}
          <div className="relative mt-12 aspect-[16/10] w-full overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5 lg:hidden">
            <Image
              src="/images/photos/delivery-floor.avif"
              alt="NICS delivery floor: analysts working at workstations across an open-plan centre"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
