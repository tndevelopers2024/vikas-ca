export interface OfficeLocation {
  id: string;
  name: string;
  state: string;
  country: string;
  address: string;
  phone: string;
  email: string;
  description: string;
  leadPartner: string;
  leadPartnerTitle: string;
  partnersCount: number;
  specialties: string[];
  image: string;
}

export const locationsData: OfficeLocation[] = [
  {
    id: "india-chennai",
    name: "Chennai (HQ)",
    state: "Tamil Nadu",
    country: "India",
    address: "Prince Centre 4th Floor Left wing 709, Pathari Road, Anna Salai, Chennai, Tamil Nadu 600006",
    phone: "+91 9632 466 477",
    email: "vikas@abcdca.com",
    description: "NICS operates its core delivery capability in Chennai, with disciplined processes, structured workflows, and information security aligned with ISO/IEC 27001 principles.",
    leadPartner: "CA Vikas Jangid",
    leadPartnerTitle: "Office Leader",
    partnersCount: 12,
    specialties: ["Global Delivery Centre", "Accounting & Finance Ops", "SMSF & Audit Support", "Information Security"],
    image: "/images/global-office.avif"
  },
  {
    id: "australia-pymble",
    name: "Sydney",
    state: "NSW",
    country: "Australia",
    address: "Bridgeport Business Park, Pymble NSW 2073",
    phone: "+61 2 9000 1234",
    email: "hello@nics.com",
    description: "Our Australian office manages client relationships, practice onboarding, and strategic alignment for Australian accounting firms and growing enterprises.",
    leadPartner: "Boobalan Madhavan",
    leadPartnerTitle: "Founder & MD",
    partnersCount: 5,
    specialties: ["Australian Practice Liaison", "Engagement Models", "AASB Process Alignment", "Client Governance"],
    image: "/images/global-office.avif"
  },
];

/**
 * NOTE: the Sydney record is left exactly as it was. The change request removes
 * Marlton and asks for Australia-focused positioning to be dropped, but also
 * says "Sydney – let me check with the Rajiv", so the office details are a
 * pending client decision rather than something to rewrite here.
 */
