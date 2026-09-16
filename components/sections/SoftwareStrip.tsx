import React from "react";
import { Container } from "@/components/ui/Container";

/**
 * The fastest way a practice partner decides whether this page is for them is
 * whether they recognise the software their firm runs on. That signal was
 * buried in body copy on inner pages; it belongs directly under the hero.
 *
 * These are set as wordmarks rather than the vendors' own logos on purpose —
 * the marks are trademarks, and using them as brand assets implies an
 * endorsement none of these vendors has given. If the client obtains permission
 * (or uses a vendor's partner-programme kit), drop the SVGs into
 * `public/images/software/` and swap the <span> for an <Image>.
 */
const platforms = [
  { name: "Xero", note: "Ledger & Practice Manager" },
  { name: "MYOB", note: "AE / AO" },
  { name: "QuickBooks", note: "Online" },
  { name: "BGL Simple Fund 360", note: "SMSF" },
  { name: "Class Super", note: "SMSF" },
  { name: "Reckon", note: "Ledger" },
  { name: "HandiSoft", note: "Compliance" },
  { name: "CaseWare", note: "Audit" },
];

export function SoftwareStrip() {
  return (
    <section
      aria-labelledby="software-strip-heading"
      className="bg-[#f8f7f4] border-y border-[#e4e2da] py-8 lg:py-10"
    >
      <Container size="default">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-center">
          <div className="lg:col-span-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0056b3] mb-1.5">
              No migration required
            </p>
            <h2
              id="software-strip-heading"
              className="text-xl lg:text-2xl text-[#0b1524] leading-snug"
            >
              Our accountants work inside your software, not ours.
            </h2>
          </div>

          <div
            className="lg:col-span-8 relative overflow-hidden"
            style={{
              maskImage:
                "linear-gradient(90deg, transparent 0, #000 40px, #000 calc(100% - 40px), transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(90deg, transparent 0, #000 40px, #000 calc(100% - 40px), transparent 100%)",
            }}
          >
            <ul className="animate-marquee flex w-max items-center gap-3">
              {[...platforms, ...platforms].map((p, idx) => (
                <li key={`${p.name}-${idx}`} className="shrink-0">
                  <div className="group flex items-center gap-2 rounded-full border border-[#e4e2da] bg-white pl-4 pr-3.5 py-2 shadow-[0_1px_2px_rgba(11,21,36,0.04)] transition-all duration-200 hover:border-[#0056b3]/40 hover:shadow-[0_4px_12px_rgba(11,21,36,0.08)] hover:-translate-y-0.5">
                    <span className="text-[13px] font-bold text-[#0b1524] whitespace-nowrap">
                      {p.name}
                    </span>
                    <span className="h-3 w-px shrink-0 bg-[#d9d6cc] group-hover:bg-[#0056b3]/30" />
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-stone-500 whitespace-nowrap">
                      {p.note}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
