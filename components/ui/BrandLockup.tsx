import React from "react";
import clsx from "clsx";
import { Logo } from "@/components/ui/Logo";

interface BrandLockupProps {
  /** Applied to the logo image — size the lockup by height. */
  logoClassName?: string;
  /** Applied to the "International" line under the wordmark. */
  wordClassName?: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  white?: boolean;
}

/**
 * The NICS brand lockup: the wordmark with "International" set beneath it, so
 * the mark on the site matches the NICS International identity.
 *
 * Kept as one component so the header, footer, and preloader stay consistent.
 */
export function BrandLockup({
  logoClassName,
  wordClassName,
  className,
  priority = false,
  sizes,
  white = false,
}: BrandLockupProps) {
  return (
    <span className={clsx("inline-flex flex-col items-center", className)}>
      <Logo
        className={logoClassName}
        alt="NICS International"
        priority={priority}
        sizes={sizes}
        white={white}
      />
      <span
        className={clsx(
          "block w-full text-center font-semibold uppercase leading-none",
          white ? "text-white" : "text-[#0056b3]",
          wordClassName
        )}
      >
        International
      </span>
    </span>
  );
}
