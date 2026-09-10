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
      className="bg-[#f8f7f4] border-y border-[#e4e2da] py-12 lg:py-16"
    >
      <Container size="default">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0056b3] mb-2">
              No migration required
            </p>
            <h2
              id="software-strip-heading"
              className="text-xl lg:text-2xl text-[#0b1524] leading-snug"
            >
              Our accountants work inside your software, not ours.
            </h2>
          </div>

          <ul className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-6">
            {platforms.map((p) => (
              <li key={p.name} className="border-l border-[#d9d6cc] pl-3">
                <span className="block text-[15px] font-semibold text-[#0b1524] leading-tight">
                  {p.name}
                </span>
                <span className="block text-[11px] uppercase tracking-wider text-stone-500 mt-1">
                  {p.note}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
