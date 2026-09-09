import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import clsx from "clsx";

export interface Crumb {
  label: string;
  /** Omit on the final crumb — the page you are already on. */
  href?: string;
}

interface BreadcrumbsProps {
  items: Crumb[];
  className?: string;
  variant?: "default" | "light";
}

/**
 * Answers "where am I?" at the top of every inner page: the trail back to Home
 * plus the section the page belongs to. The last crumb is the current page and
 * is not a link.
 */
export function Breadcrumbs({ items, className, variant = "default" }: BreadcrumbsProps) {
  const isLight = variant === "light";
  return (
    <nav aria-label="Breadcrumb" className={clsx("text-xs sm:text-[13px]", className)}>
      <ol className={clsx("flex flex-wrap items-center gap-x-1.5 gap-y-1", isLight ? "text-white/70" : "text-stone-500")}>
        {items.map((crumb, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={`${crumb.label}-${index}`} className="flex items-center gap-x-1.5">
              {index > 0 && (
                <ChevronRight className={clsx("size-3.5 shrink-0", isLight ? "text-white/40" : "text-stone-400")} aria-hidden="true" />
              )}
              {crumb.href && !isLast ? (
                <Link
                  href={crumb.href}
                  className={clsx("font-medium transition-colors", isLight ? "text-white/80 hover:text-white" : "hover:text-[#0056b3]")}
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className={clsx("font-semibold", isLight ? "text-white" : "text-[#0b1524]")} aria-current="page">
                  {crumb.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
