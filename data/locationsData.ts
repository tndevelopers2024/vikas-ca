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
    address: "NICS International Prince Centre 4th Floor Left wing 709, Pathari Road, Anna Salai, Chennai, Tamil Nadu 600006",
    phone: "+91 9632 466 477",
    email: "vikas@abcdca.com",
    description: "NICS operates its core delivery capability in Chennai, with disciplined processes, structured workflows, and information security aligned with ISO/IEC 27001 principles.",
    leadPartner: "CA Vikas Jangid",
    leadPartnerTitle: "Office Leader",
    partnersCount: 12,
    specialties: ["Global Delivery Centre", "Accounting & Finance Ops", "SMSF & Audit Support", "Information Security"],
    image: "/images/nics/operational-support-desk.jpg"
  },
  {
    id: "sydney-client-relations",
    name: "Sydney",
    state: "Client Relations",
    country: "International",
    address: "Bridgeport Business Park, Pymble NSW 2073",
    phone: "+61 2 9000 1234",
    email: "hello@nics.com",
    description: "Our client relations office manages client relationships, practice onboarding, and strategic alignment for accounting firms and growing enterprises across our international markets.",
    leadPartner: "Boobalan Madhavan",
    leadPartnerTitle: "Founder & MD",
    partnersCount: 5,
    specialties: ["Client Practice Liaison", "Engagement Models", "Reporting Standards Alignment", "Client Governance"],
    image: "/images/nics/privacy-support.jpg"
  },
];

/**
 * NOTE: the change request removes Marlton and asks for the Australia-focused
 * positioning to be dropped, so the Sydney record now reads as an international
 * client relations office rather than an Australian one. The office's address
 * and phone number are left untouched: "Sydney – let me check with the Rajiv"
 * makes those a pending client decision.
 */
