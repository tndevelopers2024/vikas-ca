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
    href: "https://maps.google.com/?q=Bridgeport+Business+Park+Pymble+NSW+2073",
    lines: ["Bridgeport Business Park,", "Pymble, NSW – 2073"],
  },
  {
    country: "Registered Office: India",
    href: "https://maps.google.com/?q=Prince+Centre+709+Anna+Salai+Chennai+Tamil+Nadu+600006",
    lines: [
      "Prince Centre, 4th Floor Left Wing,",
      "709 Pathari Road, Anna Salai,",
      "Chennai, Tamil Nadu – 600006",
    ],
  },
  {
    country: "USA",
    href: "https://maps.google.com/?q=Five+GreenTree+Center+525+Route+73+North+Marlton+NJ+08053",
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
    label: "+61 2 9000 1234",
    href: "tel:+61290001234",
  },
  {
    type: "clock",
    label: "8:00 AM to 5:00 PM AEST",
  },
  {
    type: "email",
    label: "hello@nics.com",
    href: "mailto:hello@nics.com",
  },
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
