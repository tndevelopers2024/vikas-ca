"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function AnyQueriesButton() {
  const pathname = usePathname();
  const isContactPage = pathname === "/contact";

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isContactPage) {
      e.preventDefault();
      const formSection =
        document.getElementById("consultation-form") ||
        document.getElementById("contact-form");
      if (formSection) {
        formSection.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  return (
    <aside
      aria-label="Contact quick link"
      className="fixed right-0 top-1/2 -translate-y-1/2 z-40 print:hidden"
    >
      <Link
        href="/contact"
        onClick={handleClick}
        aria-label="Any Queries? Go to contact page"
        title="Any Queries? Contact Us"
        className="group flex items-center justify-center rounded-l-2xl rounded-r-none bg-[#0f2d58] text-white px-2.5 py-5 sm:px-3 sm:py-6 shadow-[-4px_4px_16px_rgba(15,45,88,0.22)] transition-all duration-300 hover:bg-[#0056b3] hover:-translate-x-1 hover:shadow-[-6px_6px_22px_rgba(0,86,179,0.35)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0056b3]"
      >
        <span
          className="block select-none font-sans text-sm sm:text-[15px] font-bold text-white tracking-wide whitespace-nowrap"
          style={{
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
          }}
        >
          Any Queries?
        </span>
      </Link>
    </aside>
  );
}
