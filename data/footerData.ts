import { primaryNavItems } from "./navItemsData";

export interface FooterColumn {
  heading: string;
  links: {
    title: string;
    href: string;
    badge?: string;
  }[];
}

/** Pulls the sub-links of a primary nav item so the footer mirrors the header. */
function navLinks(label: string) {
  const item = primaryNavItems.find((entry) => entry.label === label);
  return (item?.links ?? []).map((link) => ({
    title: link.label,
    href: link.href,
  }));
}

/**
 * Footer directory. The first three columns are generated from — or ordered to
 * match — `primaryNavItems`, so the menu at the bottom of the page and the menu
 * in the header describe the same site. Section links are written root-relative
 * ("/#services", not "#services") so they resolve from every page, not just the
 * homepage.
 */
export const footerColumns: FooterColumn[] = [
  {
    heading: "Services",
    links: navLinks("Services"),
  },
  {
    heading: "Delivery Models",
    links: [
      { title: "Dedicated Resource", href: "/#stories" },
      { title: "Managed Function", href: "/#stories" },
      { title: "Project Support", href: "/#stories" },
      { title: "Build–Operate–Transfer (BOT)", href: "/#stories" },
      { title: "What You Keep vs What We Manage", href: "/#stories" },
    ],
  },
  {
    heading: "Why NICS",
    links: [
      ...navLinks("Why NICS"),
      { title: "Blogs & PR", href: "/blogs" },
      { title: "Flexible Capacity", href: "/#culture" },
      { title: "Professional Capability", href: "/#culture" },
      { title: "ISO/IEC 27001 Information Security", href: "/#insights" },
      { title: "Standards & Requirements", href: "/#careers-banner" },
      { title: "From One Person to Function", href: "/#careers-banner" },
    ],
  },
  {
    heading: "Locations & Contact",
    links: [
      { title: "Chennai (HQ Delivery Centre)", href: "/#locations" },
      { title: "Sydney (Client Relations)", href: "/#locations" },
      { title: "Discuss What to Move Offshore", href: "/contact" },
    ],
  },
];

export const legalLinks = [
  { title: "Privacy Policy", href: "/privacy-policy" },
  { title: "Information Security", href: "/#insights" },
  { title: "Standards & Compliance", href: "/#careers-banner" },
];
