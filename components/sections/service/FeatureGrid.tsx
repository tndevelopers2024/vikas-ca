import React from "react";
import type { LucideIcon } from "lucide-react";
import clsx from "clsx";

export interface FeatureItem {
  /** Optional leading numeral; falls back to the item's position. */
  number?: string;
  icon?: LucideIcon;
  title: string;
  tag?: string;
  description: string;
  points?: string[];
}

interface FeatureGridProps {
  items: FeatureItem[];
  columns?: 2 | 3 | 4;
  tone?: "light" | "dark";
  /** Show the running numeral instead of the icon. */
  numbered?: boolean;
  className?: string;
}

const columnStyles: Record<2 | 3 | 4, string> = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
};

/**
 * The house replacement for a grid of bordered cards. A rule opens each column
 * and the page ground shows through, so a list of nine items reads as one
 * block of information rather than nine containers competing for the same
 * attention. Used wherever a page previously reached for card chrome.
 */
export function FeatureGrid({
  items,
  columns = 3,
  tone = "light",
  numbered = false,
  className,
}: FeatureGridProps) {
  const dark = tone === "dark";

  return (
    <div
      className={clsx(
        "grid grid-cols-1 gap-x-8 gap-y-10 lg:gap-x-12",
        columnStyles[columns],
        className
      )}
    >
      {items.map((item, index) => {
        const Icon = item.icon;
        return (
          <div
            key={item.title}
            className={clsx(
              "flex flex-col border-t pt-5",
              dark ? "border-white/20" : "border-[#0b1524]/20"
            )}
          >
            <div className="flex items-center gap-3">
              {numbered ? (
                <span
                  className={clsx(
                    "text-2xl font-black tabular-nums",
                    dark ? "text-[#8bc7ff]" : "text-[#0056b3]"
                  )}
                >
                  {item.number ?? String(index + 1).padStart(2, "0")}
                </span>
              ) : (
                Icon && (
                  <Icon
                    className={clsx("size-5", dark ? "text-[#8bc7ff]" : "text-[#0056b3]")}
                    aria-hidden="true"
                  />
                )
              )}
              {item.tag && (
                <span
                  className={clsx(
                    "text-[11px] font-semibold uppercase tracking-wider",
                    dark ? "text-slate-400" : "text-stone-500"
                  )}
                >
                  {item.tag}
                </span>
              )}
            </div>

            <h3
              className={clsx(
                "mt-3 text-lg font-bold tracking-tight",
                dark ? "text-white" : "text-[#0b1524]"
              )}
            >
              {item.title}
            </h3>

            <p
              className={clsx(
                "mt-2.5 text-sm leading-relaxed",
                dark ? "text-slate-300" : "text-stone-600"
              )}
            >
              {item.description}
            </p>

            {item.points && item.points.length > 0 && (
              <ul
                className={clsx(
                  "mt-4 space-y-2 border-t pt-4",
                  dark ? "border-white/15" : "border-[#e4e2da]"
                )}
              >
                {item.points.map((pt) => (
                  <li
                    key={pt}
                    className={clsx(
                      "flex gap-2.5 text-[13px] leading-relaxed",
                      dark ? "text-slate-300" : "text-stone-600"
                    )}
                  >
                    <span
                      className={clsx(
                        "mt-2 h-px w-3 shrink-0",
                        dark ? "bg-[#8bc7ff]" : "bg-[#0056b3]"
                      )}
                      aria-hidden="true"
                    />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );
}
