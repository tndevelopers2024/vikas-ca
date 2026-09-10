import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { locationsData } from "@/data/locationsData";

/**
 * A practice partner reading this page wants to know who actually does the
 * work and where they sit. Everything here is drawn from facts the site already
 * asserts elsewhere — the Chennai delivery centre, the named leads, the ISO/IEC
 * 27001 alignment, the four engagement models.
 *
 * Deliberately no headcount, client count or years-in-business: NICS has not
 * supplied those figures, and an invented number on a page selling audit and
 * compliance work is the worst possible place to be caught out. When the client
 * provides them, add them as further <dl> entries below.
 */
const chennai = locationsData.find((l) => l.id === "india-chennai");

const proofPoints = [
  {
    term: "Delivery centre",
    detail: "Chennai, Tamil Nadu — a single managed floor, not a distributed contractor network.",
  },
  {
    term: "Information security",
    detail: "Access control, user permissions and secure handling aligned with ISO/IEC 27001 principles.",
  },
  {
    term: "Engagement models",
    detail: "Dedicated resource, managed function, project support, or build–operate–transfer.",
  },
  {
    term: "Professional responsibility",
    detail: "Registration, review and lodgement stay with your registered practitioner. Always.",
  },
];

export function DeliveryProof() {
  return (
    <section
      id="delivery-centre"
      aria-labelledby="delivery-proof-heading"
      className="bg-white py-20 lg:py-28 border-b border-[#e4e2da]"
    >
      <Container size="default">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] overflow-hidden border border-[#e4e2da]">
              <Image
                src="/images/bright/delivery-floor.jpg"
                alt="Accountants at work on the NICS delivery floor in Chennai"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {chennai && (
              <p className="mt-4 text-[12px] leading-relaxed text-stone-500">
                {chennai.address}
              </p>
            )}
          </div>

          <div className="lg:col-span-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0056b3] mb-3">
              Who does the work
            </p>
            <h2
              id="delivery-proof-heading"
              className="text-3xl lg:text-4xl text-[#0b1524] leading-tight mb-5"
            >
              A managed delivery floor, run by accountants.
            </h2>
            <p className="text-[15px] leading-relaxed text-stone-600 mb-10">
              Your work is done by named people on one supervised floor in
              Chennai, working your files in your software, to your templates.
              You keep the client relationship and the sign-off.
            </p>

            <dl className="divide-y divide-[#e4e2da] border-t border-[#e4e2da]">
              {proofPoints.map((p) => (
                <div key={p.term} className="grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-6 py-4">
                  <dt className="text-[12px] font-semibold uppercase tracking-wider text-[#0b1524]">
                    {p.term}
                  </dt>
                  <dd className="sm:col-span-2 text-[14px] leading-relaxed text-stone-600">
                    {p.detail}
                  </dd>
                </div>
              ))}
            </dl>

            <Link
              href="/how-it-works"
              className="inline-block mt-8 text-[13px] font-semibold text-[#0056b3] border-b border-[#0056b3]/40 hover:border-[#0056b3] pb-0.5 transition-colors"
            >
              How an engagement runs
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
