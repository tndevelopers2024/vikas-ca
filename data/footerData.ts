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
    country: "Australia",
    href: "https://maps.google.com/?q=13/33+Ryde+Road+Pymble+NSW+2073",
    lines: ["13/33, Ryde Road,", "Pymble, NSW – 2073"],
  },
  {
    country: "Registered Office: India",
    lines: [
      "Navin’s Presidium, 103, B Block 8th Floor,",
      "Nelson Manickam Road, Aminjikarai,",
      "Chennai – 600029",
    ],
  },
  {
    country: "USA",
    lines: [
      "Five GreenTree Center,",
      "525 Route 73 North STE 104,",
      "Marlton, New Jersey 08053",
    ],
  },
];

export const contactDetails: ContactItem[] = [
  {
    type: "phone",
    label: "1300103145",
    href: "tel:1300103145",
  },
  {
    type: "clock",
    label: "8:00 AM to 5:00 PM AEST",
  },
  {
    type: "email",
    label: "boobalan@accsource.net",
    href: "mailto:boobalan@accsource.net",
  },
  {
    type: "phone",
    label: "+91 44 42859506",
    href: "tel:+914442859506",
  },
  {
    type: "clock",
    label: "8:00 AM to 6:00 PM IST",
  },
  {
    type: "email",
    label: "goravgupta@accsource.net",
    href: "mailto:goravgupta@accsource.net",
  },
];

export const socialLinks: SocialLink[] = [
  {
    platform: "LinkedIn",
    href: "https://www.linkedin.com/company/accsource/?viewAsMember=true",
  },
  {
    platform: "Twitter",
    href: "https://twitter.com/AccSourceGlobal",
  },
  {
    platform: "Facebook",
    href: "https://www.facebook.com/AccSource/",
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
