export interface OfficeLocation {
  id: string;
  name: string;
  state: string;
  country: string;
  /** Short label for what the office does, shown on the locations cards. */
  role: string;
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
    role: "Global delivery centre",
    address: "NICS International Prince Centre 4th Floor Left wing 709, Pathari Road, Anna Salai, Chennai, Tamil Nadu 600006",
    phone: "+91 9632 466 477",
    email: "vikas@abcdca.com",
    description: "NICS operates its core delivery capability in Chennai, with disciplined processes, structured workflows, and information security aligned with ISO/IEC 27001 principles.",
    leadPartner: "CA Vikas Jangid",
    leadPartnerTitle: "Office Leader",
    partnersCount: 12,
    specialties: ["Global Delivery Centre", "Accounting & Finance Ops", "SMSF & Audit Support", "Information Security"],
    image: "/images/bright/location-chennai.jpg"
  },
];
