import React from "react";
import clsx from "clsx";

/**
 * One measure for the whole site: 1280px with 24px gutters, matching the header
 * (Nav.module.css .container) and the footer, so every left edge on the page —
 * logo, headings, cards, footer columns — lands on the same line. Sections that
 * want a full-bleed background put it on the <section>, not here.
 */
interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "narrow" | "wide" | "full";
}

export function Container({
  children,
  className,
  size = "default",
  ...props
}: ContainerProps) {
  return (
    <div
      className={clsx(
        "mx-auto w-full",
        {
          "max-w-[1280px] px-5 sm:px-6": size === "default",
          "max-w-[1040px] px-5 sm:px-6": size === "narrow",
          "max-w-[1440px] px-5 sm:px-6 lg:px-10": size === "wide",
          "max-w-full px-5 sm:px-6 lg:px-10": size === "full",
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
