export interface NavLink {
  label: string;
  href: string;
  description?: string;
  badge?: string;
}

export interface NavColumn {
  title: string;
  links: NavLink[];
}

export interface NavItem {
  label: string;
  href: string;
  /** Short line shown at the head of the desktop dropdown. */
  description?: string;
  /** Sub-navigation. When present the item renders as a dropdown / accordion. */
  links?: NavLink[];
}

/**
 * Single source of truth for the primary navigation.
 *
 * The footer directory (see `footerData.ts`) is built from this same list so the
 * header menu and the menu at the bottom of every page stay in step. Order is
 * deliberate: Services comes before Delivery Models.
 *
 * NOTE: the change request asks that the "yellow" items in the content document
 * — Legal & Professional Services, Business Operations, KYC & Client
 * Administration, Virtual & Administrative Support — are not surfaced "at this
 * point of time". Those map to /legal, /operational and /administrative, which
 * are therefore absent from this list. The pages themselves are built and still
 * routable; restoring them to the menu means adding their entries back below.
 *
 * The remaining Services labels follow the headings in the content document. The
 * two that have no page of their own — SMSF & Audit, and Financial Services —
 * deep-link into the sections that already cover them.
 */
export const primaryNavItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/#services",
    description: "Offshore support across core business functions.",
    links: [
      {
        label: "Accounting & Finance Operations",
        href: "/accounting",
        description: "Bookkeeping, AP/AR, inventory & management reporting",
      },
      {
        label: "Compliance & Practice Support",
        href: "/compliance",
        description: "Statutory filings, tax returns & audit back office",
      },
      {
        label: "SMSF & Audit Back-Office",
        href: "/compliance#smsf-audit",
        description: "Fund accounting through to audit documentation",
      },
      {
        label: "Financial Planning & Mortgage Support",
        href: "/accounting#financial-services",
        description: "Paraplanning, loan processing & adviser support",
      },
    ],
  },
  {
    label: "Delivery Models",
    href: "/#stories",
    description: "A delivery model built around your business.",
  },
  {
    label: "Why NICS",
    href: "/why-outsourcing",
    description: "How we work and what stays with you.",
    links: [
      {
        label: "Why Outsourcing",
        href: "/why-outsourcing",
        description: "Efficiency, timeliness and productivity",
      },
      {
        label: "How It Works",
        href: "/how-it-works",
        description: "Requirements, onboarding, reporting & feedback",
      },
      {
        label: "Who We Are",
        href: "/who-we-are",
        description: "Our history, vision, mission and culture",
      },
      {
        label: "Build Your Team",
        href: "/build-your-team",
        description: "Tell us the role and experience level you need",
      },
      {
        label: "Information Technology",
        href: "/information-technology",
        description: "IT security, data confidentiality & customer privacy",
      },
      {
        label: "Discover More (FAQs)",
        href: "/discover-more",
        description: "Confidentiality, data security, quality and SLAs",
      },
    ],
  },
  { label: "Insights", href: "/blogs" },
];

/**
 * Resolves the primary nav item that owns a given pathname, so the header can
 * show where the visitor currently is.
 */
export function findActiveNavItem(pathname: string): NavItem | undefined {
  if (pathname === "/") {
    return primaryNavItems[0];
  }

  return primaryNavItems.find(
    (item) =>
      item.href === pathname ||
      item.links?.some((link) => link.href === pathname)
  );
}
