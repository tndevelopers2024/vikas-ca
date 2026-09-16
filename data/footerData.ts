export interface QuickLink {
  title: string;
  href: string;
}

export interface OfficeAddress {
  country: string;
  href?: string;
  lines: string[];
}

export interface ContactItem {
  type: "phone" | "clock" | "email";
  label: string;
  href?: string;
}

export interface SocialLink {
  platform: string;
  href: string;
}

export const quickLinks: QuickLink[] = [
  { title: "Privacy Policy", href: "/privacy-policy" },
  { title: "About", href: "/who-we-are" },
  { title: "Accounting", href: "/accounting" },
  { title: "Compliance", href: "/compliance" },
  { title: "Legal Process Outsourcing (LPO)", href: "/legal" },
  { title: "Operational", href: "/operational" },
  { title: "Administrative", href: "/administrative" },
  { title: "Contact", href: "/contact" },
];

export const officeAddresses: OfficeAddress[] = [
  {
    country: "Registered Office: India",
    href: "https://maps.google.com/?q=Prince+Centre+709+Anna+Salai+Chennai+Tamil+Nadu+600006",
    lines: [
      "Prince Centre, 4th Floor Left Wing,",
      "709 Pathari Road, Anna Salai,",
      "Chennai, Tamil Nadu – 600006",
    ],
  },
];

export const contactDetails: ContactItem[] = [
  {
    type: "phone",
    label: "+91 9632 466 477",
    href: "tel:+919632466477",
  },
  {
    type: "clock",
    label: "8:00 AM to 6:00 PM IST",
  },
  {
    type: "email",
    label: "operations@nics.com",
    href: "mailto:operations@nics.com",
  },
  {
    type: "email",
    label: "vikas@abcdca.com",
    href: "mailto:vikas@abcdca.com",
  },
];

export const socialLinks: SocialLink[] = [
  {
    platform: "LinkedIn",
    href: "https://www.linkedin.com/company/nics/",
  },
  {
    platform: "Twitter",
    href: "https://twitter.com/NICSGlobal",
  },
  {
    platform: "Facebook",
    href: "https://www.facebook.com/NICSInternational/",
  },
];

// Compatibility exports
export interface FooterColumn {
  heading: string;
  links: {
    title: string;
    href: string;
    badge?: string;
  }[];
}

export const footerColumns: FooterColumn[] = [
  {
    heading: "Quick Links",
    links: quickLinks,
  },
];

export const legalLinks = [
  { title: "Privacy Policy", href: "/privacy-policy" },
];
