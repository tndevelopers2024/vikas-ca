"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Clock, Mail } from "lucide-react";
import { BrandLockup } from "@/components/ui/BrandLockup";
import {
  quickLinks,
  officeAddresses,
  contactDetails,
  socialLinks,
} from "@/data/footerData";

export function Footer() {
  const pathname = usePathname();

  const handleLinkClick =
    (href: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (href === pathname) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };

  return (
    <footer className="relative text-white overflow-hidden bg-gradient-to-b from-[#081528] via-[#060f1d] to-[#040912] border-t border-slate-800/80">
      {/* Subtle top ambient glow from NICS brand blue */}
      <div
        className="absolute inset-x-0 top-0 h-48 pointer-events-none opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(0, 86, 179, 0.25) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div className="relative z-10 max-w-[1340px] mx-auto px-5 sm:px-8 lg:px-10 pt-16 pb-6">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-0">
          {/* ── Column 1: Brand Info & Certification ─────────────── */}
          <div className="lg:pr-8 flex flex-col justify-start">
            <Link
              href="/"
              onClick={handleLinkClick("/")}
              className="inline-block group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0099db] rounded"
              aria-label="NICS International — Home"
            >
              <BrandLockup
                white
                className="items-start"
                logoClassName="h-11 sm:h-12 w-auto select-none transition-opacity group-hover:opacity-90"
                wordClassName="text-[10px] sm:text-[11px] font-bold tracking-[0.32em] text-white/95 mt-1"
                sizes="240px"
              />
            </Link>

            <p className="mt-6 text-[13.5px] leading-[1.65] text-white/70">
              NICS International specialises in operational, administrative, compliance
              and accounting business processes for SMEs, accounting firms,
              financial planners and mortgage brokers.
            </p>

            <div className="mt-6 pt-1">
              <Link
                href="/information-technology"
                title="ISO/IEC 27001 Information Security Management Certified"
                className="inline-block hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0099db] rounded"
              >
                <Image
                  src="/images/iso-27001-certified.png"
                  alt="ISO/IEC 27001 Information Security Management CERTIFIED"
                  width={240}
                  height={122}
                  className="h-auto w-[180px] sm:w-[195px] select-none opacity-95"
                />
              </Link>
            </div>
          </div>

          {/* ── Column 2: QUICK LINKS ────────────────────────────── */}
          <div className="lg:border-l lg:border-r lg:border-white/10 lg:px-8">
            <h4 className="font-sans text-[17px] font-bold uppercase tracking-[0.06em] text-white mb-6">
              QUICK LINKS
            </h4>
            <ul className="space-y-3.5">
              {quickLinks.map((link) => (
                <li key={link.title} className="relative pl-3.5">
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-[7.5px] size-[5px] rounded-full bg-[#0099db]"
                  />
                  <Link
                    href={link.href}
                    onClick={handleLinkClick(link.href)}
                    className="text-[13.5px] text-white/70 hover:text-white hover:underline transition-colors block leading-snug"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Column 3: ADDRESS ────────────────────────────────── */}
          <div className="lg:px-8">
            <h4 className="font-sans text-[17px] font-bold uppercase tracking-[0.06em] text-white mb-6">
              ADDRESS
            </h4>
            <div className="space-y-5 text-[13.5px] leading-[1.65] text-white/70">
              {officeAddresses.map((addr) => {
                const inner = (
                  <>
                    <p className="font-sans font-bold text-white group-hover:underline group-hover:text-white">
                      {addr.country}
                    </p>
                    {addr.lines.map((line, idx) => (
                      <p
                        key={idx}
                        className="mt-0.5 text-white/70 group-hover:text-white/90 transition-colors"
                      >
                        {line}
                      </p>
                    ))}
                  </>
                );

                return addr.href ? (
                  <a
                    key={addr.country}
                    href={addr.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`View ${addr.country} office on Google Maps`}
                    className="block group transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0099db] rounded"
                  >
                    {inner}
                  </a>
                ) : (
                  <div key={addr.country}>{inner}</div>
                );
              })}
            </div>
          </div>

          {/* ── Column 4: CONTACT & STAY CONNECTED ────────────────── */}
          <div className="lg:border-l lg:border-r lg:border-white/10 lg:px-8 flex flex-col justify-between">
            <div>
              <h4 className="font-sans text-[17px] font-bold uppercase tracking-[0.06em] text-white mb-6">
                CONTACT
              </h4>
              <div className="space-y-2.5 text-[13.5px] text-white/70">
                {contactDetails.map((item, idx) => {
                  const isSecondBlock = idx === 3;
                  return (
                    <div
                      key={idx}
                      className={`flex items-center gap-2.5 ${
                        isSecondBlock ? "pt-2" : ""
                      }`}
                    >
                      {item.type === "phone" && (
                        <Phone className="size-3.5 shrink-0 text-white/80" />
                      )}
                      {item.type === "clock" && (
                        <Clock className="size-3.5 shrink-0 text-white/80" />
                      )}
                      {item.type === "email" && (
                        <Mail className="size-3.5 shrink-0 text-white/80" />
                      )}

                      {item.href ? (
                        <a
                          href={item.href}
                          className="hover:text-white hover:underline transition-colors break-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0099db] rounded"
                        >
                          {item.label}
                        </a>
                      ) : (
                        <span>{item.label}</span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* STAY CONNECTED */}
            <div className="mt-8 pt-1">
              <h4 className="font-sans text-[17px] font-bold uppercase tracking-[0.06em] text-white mb-4">
                STAY CONNECTED
              </h4>
              <div className="flex items-center gap-2.5">
                {socialLinks.map((s) => (
                  <a
                    key={s.platform}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit NICS on ${s.platform}`}
                    className="size-10 rounded-full bg-white/10 hover:bg-[#0056b3] text-white flex items-center justify-center transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0099db]"
                  >
                    {s.platform === "LinkedIn" && (
                      <svg
                        className="size-4 fill-current"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.4 9.74v-8.37H5.06v8.37h2.8z" />
                      </svg>
                    )}
                    {s.platform === "Twitter" && (
                      <svg
                        className="size-4 fill-current"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                      </svg>
                    )}
                    {s.platform === "Facebook" && (
                      <svg
                        className="size-4 fill-current"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom Copyright Bar ──────────────────────────────── */}
        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
          <p className="text-[13px] text-white/50">
            &copy; {new Date().getFullYear()} NICS International. All rights reserved
          </p>
          <div className="flex flex-wrap items-center gap-6 text-[12.5px] text-white/60">
            <Link
              href="/privacy-policy"
              onClick={handleLinkClick("/privacy-policy")}
              className="hover:text-white hover:underline transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/information-technology"
              onClick={handleLinkClick("/information-technology")}
              className="hover:text-white hover:underline transition-colors"
            >
              Information Security
            </Link>
            <Link
              href="/contact"
              onClick={handleLinkClick("/contact")}
              className="hover:text-white hover:underline transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

