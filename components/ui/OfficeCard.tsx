import React from "react";
import Image from "next/image";
import { MapPin, Phone, Mail, User } from "lucide-react";
import type { OfficeLocation } from "@/data/locationsData";
import { Badge } from "@/components/ui/Badge";

interface OfficeCardProps {
  office: OfficeLocation;
  /** Rendered in the card's bottom slot — the CTA differs per page. */
  footer?: React.ReactNode;
  /** Image sizes hint; pass the real column width where the card is used. */
  imageSizes?: string;
  /**
   * Drops the description and postal address. The home page only needs to say
   * an office exists and who runs it; the contact page is where someone goes
   * looking for the street and the detail.
   */
  compact?: boolean;
}

/**
 * One office, complete and readable without interaction. Shared by the home
 * page locations grid and the contact page so the two cannot drift apart —
 * only the footer CTA changes between them.
 */
export function OfficeCard({
  office,
  footer,
  imageSizes = "(max-width: 1024px) 100vw, 50vw",
  compact = false,
}: OfficeCardProps) {
  return (
    <article className="group flex flex-col bg-white border border-[#e7e5dc] rounded-xs overflow-hidden shadow-sm transition-shadow duration-300 hover:shadow-md">
      {/* Location imagery + identity */}
      <div className="relative aspect-[4/3] sm:aspect-[16/9] lg:aspect-[3/2] overflow-hidden">
        <Image
          src={office.image}
          alt={`NICS ${office.name} office location and skyline`}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          sizes={imageSizes}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1524]/85 via-[#0b1524]/25 to-transparent" />

        <div className="absolute top-4 left-4">
          <Badge variant="white" size="sm">
            {office.country}
          </Badge>
        </div>

        <div className="absolute bottom-5 left-5 right-5 text-white">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8bc7ff]">
            {office.role}
          </p>
          <h3 className="mt-1 text-2xl sm:text-3xl font-bold tracking-tight">
            NICS {office.name}
          </h3>
        </div>
      </div>

      {/* Card body */}
      <div className="flex flex-1 flex-col gap-6 p-6 sm:p-8">
        {!compact && (
          <p className="text-sm sm:text-[15px] leading-relaxed text-stone-600">
            {office.description}
          </p>
        )}

        {/* Leadership + team size on one line, no boxed callout */}
        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 border-y border-[#e7e5dc] py-4">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[#0056b3]/10">
              <User className="h-4 w-4 text-[#0056b3]" />
            </span>
            <span>
              <span className="block text-sm font-bold text-[#0b1524]">
                {office.leadPartner}
              </span>
              <span className="block text-xs text-stone-500">
                {office.leadPartnerTitle}
              </span>
            </span>
          </div>
          <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">
            <span className="tabular-nums text-[#0b1524]">{office.partnersCount}</span>{" "}
            advisory partners
          </span>
        </div>

        <div className="space-y-2.5">
          <p className="text-[11px] font-bold uppercase tracking-wider text-stone-400">
            Specialist sector focus
          </p>
          <div className="flex flex-wrap gap-1.5">
            {office.specialties.map((spec) => (
              <span
                key={spec}
                className="rounded-xs border border-stone-200 bg-stone-50 px-2.5 py-1 text-xs text-stone-700"
              >
                {spec}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-2.5 text-[13px] leading-relaxed text-stone-600">
          {!compact && (
            <p className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#0056b3]" />
              <span>{office.address}</span>
            </p>
          )}
          <p className="flex items-center gap-2.5">
            <Phone className="h-4 w-4 flex-shrink-0 text-[#0056b3]" />
            <a
              href={`tel:${office.phone.replace(/[^0-9+]/g, "")}`}
              className="font-semibold text-[#0b1524] transition-colors hover:text-[#0056b3]"
            >
              {office.phone}
            </a>
          </p>
          <p className="flex items-center gap-2.5">
            <Mail className="h-4 w-4 flex-shrink-0 text-[#0056b3]" />
            <a
              href={`mailto:${office.email}`}
              className="transition-colors hover:text-[#0056b3]"
            >
              {office.email}
            </a>
          </p>
        </div>

        {footer && (
          <div className="mt-auto border-t border-[#e7e5dc] pt-6">{footer}</div>
        )}
      </div>
    </article>
  );
}
