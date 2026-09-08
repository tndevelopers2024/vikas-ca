import React from "react";
import clsx from "clsx";

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
          "max-w-[1600px] px-5 sm:px-8 md:px-10 lg:px-12 xl:px-14": size === "default",
          "max-w-[1180px] px-5 sm:px-8 md:px-10": size === "narrow",
          "max-w-[1800px] px-5 sm:px-8 md:px-10 lg:px-12 xl:px-14": size === "wide",
          "max-w-full px-5 sm:px-8 md:px-10 lg:px-12": size === "full",
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
