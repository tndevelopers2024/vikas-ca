import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Lock,
  Server,
  KeyRound,
  FileCheck,
  CheckCircle2,
  ArrowRight,
  BadgeCheck,
  Layers,
  Cpu,
  MonitorCheck,
  UserCheck,
  HardDrive,
  EyeOff
} from "lucide-react";
import { Header } from "@/components/navigation/Header";
import { PageBanner } from "@/components/sections/PageBanner";
import { ReadyToScaleCTA } from "@/components/sections/ReadyToScaleCTA";
import { Footer } from "@/components/sections/Footer";
import { FloatingActions } from "@/components/ui/FloatingActions";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "IT Security, Data Confidentiality & Customer Privacy | NICS",
  description:
    "With NICS outsourcing, your premise on IT security, privacy, information management and data integrity is upheld and sustained across every engagement model.",
};

const heroImage = "/images/bright/page-information-technology.jpg";

export default function InformationTechnologyPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-stone-50 selection:bg-[#0056b3] selection:text-white">
        {/* Hero Page Banner */}
        <PageBanner
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Information Technology" },
          ]}
          badge="Information Technology"
          badgeHighlight="Enterprise Security & Privacy"
          title="IT Security, Data Confidentiality & Customer Privacy"
          description="With NICS outsourcing, your premise on IT security, privacy, information management and data integrity is upheld and sustained across every engagement model."
          primaryCta={{ label: "Make an Enquiry", href: "/contact" }}
          secondaryCta={{ label: "Explore Security Framework", href: "#security-framework" }}
          metrics={[
            { value: "ISO/IEC", label: "27001 Certified Practice", unit: "Standard" },
            { value: "100%", label: "Australian Privacy Principles", unit: "APP" },
            { value: "Zero", label: "Local Data Footprint (Citrix/RDP)", unit: "Footprint" },
            { value: "256-bit", label: "Enterprise AES Encryption", unit: "SSL" },
          ]}
          image={heroImage}
          imageAlt="Indian cybersecurity and cloud systems engineers monitoring enterprise server security and ISO 27001 protocols in Network Operations Center"
        />

        {/* Section 1: Overview & Value Narrative */}
        <section id="security-framework" className="py-16 sm:py-20 bg-white border-b border-stone-200">
          <Container size="default">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#0056b3]/20 bg-[#0056b3]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#0056b3]">
                  <ShieldCheck className="size-3.5 text-[#0056b3]" />
                  <span>Robust IT Infrastructure</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0b1524]">
                  Information Technology &amp; Security
                </h2>
                <div className="w-12 h-1 bg-[#00a99d] rounded-full" />
                <p className="text-base sm:text-lg text-stone-600 leading-relaxed text-justify">
                  A robust Information Technology enabled service is built on a strong technology platform with expert understanding of security principles. Through Business Process outsourcing, your premise on IT security, privacy, information management and data integrity is upheld and sustained. Staying updated on IT best practices, security and regulatory protocols makes the liaising process seamless and creates a conducive outsourcing relationship.
                </p>
                <p className="text-base sm:text-lg text-stone-600 leading-relaxed text-justify">
                  In an evolving digitized environment, establishing a purposeful security culture protects your organization from data breaches. Having a resolute modus operandi surrounding security shields you from possible threats. It is the mindful culture of security that makes your outsourcing process astute and reliable.
                </p>
              </div>

              <div className="lg:col-span-5 bg-stone-50 rounded-sm p-8 border border-stone-200 shadow-sm space-y-6">
                <h3 className="text-lg font-bold text-[#0b1524] flex items-center gap-2.5">
                  <Lock className="size-5 text-[#0056b3]" />
                  <span>Core Security Commitments</span>
                </h3>
                <ul className="space-y-4">
                  {[
                    "Zero local data storage on offshore workstations",
                    "Dual-factor authentication (2FA) across all client systems",
                    "Biometric entry-restricted dedicated client delivery floors",
                    "Continuous vulnerability management and automated patch cycles",
                    "Strict alignment with Australian Privacy Principles (APPs)",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-stone-700">
                      <CheckCircle2 className="size-4.5 text-[#00a99d] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </section>

        {/* Section 2: 360-Degree Security Model */}
        <section className="py-16 sm:py-20 bg-stone-50 border-b border-stone-200">
          <Container size="default">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-stone-700 shadow-xs mb-3">
                <Layers className="size-3.5 text-[#0056b3]" />
                <span>End-to-End Governance</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0b1524]">
                360° Security Model
              </h2>
              <div className="w-12 h-1 bg-[#00a99d] rounded-full mx-auto mt-4 mb-4" />
              <p className="text-stone-600 text-base sm:text-lg">
                All your data and your clients&apos; data is protected through an integrated 4-pillar defense framework designed for financial and accounting practices.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: UserCheck,
                  title: "Physical Security",
                  points: [
                    "Biometric fingerprint access controls",
                    "24/7 CCTV surveillance with 90-day archive",
                    "Strict clean-desk and paperless floor policy",
                    "Mobile phones and personal storage prohibited",
                  ],
                },
                {
                  icon: Server,
                  title: "Network Infrastructure",
                  points: [
                    "Enterprise next-gen firewall inspection",
                    "IP-restricted encrypted VPN gateway",
                    "Redundant tier-1 ISP leased lines",
                    "DDoS mitigation and intrusion prevention",
                  ],
                },
                {
                  icon: MonitorCheck,
                  title: "Endpoint Controls",
                  points: [
                    "Zero local drive storage (diskless terminals)",
                    "USB ports physically & logically disabled",
                    "Clipboard and screenshot restrictions",
                    "Centrally managed endpoint antivirus & EDR",
                  ],
                },
                {
                  icon: FileCheck,
                  title: "Governance & People",
                  points: [
                    "Comprehensive police background checks",
                    "Mandatory non-disclosure agreements (NDAs)",
                    "Quarterly cybersecurity awareness drills",
                    "ISO 27001 independent audits & reviews",
                  ],
                },
              ].map((card, idx) => {
                const Icon = card.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-sm p-6 border border-stone-200 shadow-sm hover:shadow-md hover:border-stone-300 transition-all duration-200 flex flex-col"
                  >
                    <div className="w-12 h-12 rounded-sm bg-[#0056b3]/10 flex items-center justify-center text-[#0056b3] mb-5">
                      <Icon className="size-6" />
                    </div>
                    <h3 className="text-lg font-bold text-[#0b1524] mb-4">{card.title}</h3>
                    <ul className="space-y-2.5 mt-auto">
                      {card.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2 text-xs sm:text-[13px] text-stone-600 leading-snug">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#00a99d] shrink-0 mt-1.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        {/* Section 3: How IT Works (Connecting Models) */}
        <section className="py-16 sm:py-20 bg-white border-b border-stone-200">
          <Container size="default">
            <div className="max-w-3xl mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0b1524]">
                How IT Works: Flexible Connection Architecture
              </h2>
              <div className="w-12 h-1 bg-[#00a99d] rounded-full mt-4 mb-4" />
              <p className="text-stone-600 text-base sm:text-lg">
                You decide how you want us to partner with you. Our delivery pods seamlessly adapt to your preferred technology stack without requiring data transfer:
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  step: "01",
                  title: "Direct Remote Desktop (Citrix / RDP)",
                  desc: "Your dedicated team logs directly into your onshore server or virtual desktop environment. All work takes place on your infrastructure with zero local data extraction.",
                },
                {
                  step: "02",
                  title: "Native Cloud Accounting Ecosystems",
                  desc: "Work executed directly within certified cloud applications such as Xero, MYOB, Reckon, Class, and BGL 360 using role-based multi-factor authenticated user credentials.",
                },
                {
                  step: "03",
                  title: "Secured Dedicated VPN Gateway",
                  desc: "Site-to-site encrypted VPN tunnels configured with static IP whitelisting ensuring only authorized personnel on designated subnets can access your files.",
                },
              ].map((item, i) => (
                <div key={i} className="rounded-sm border border-stone-200 bg-stone-50/50 p-6 sm:p-8 space-y-4">
                  <div className="text-xs font-extrabold tracking-widest text-[#00a99d] uppercase">
                    Model {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-[#0b1524]">{item.title}</h3>
                  <p className="text-sm text-stone-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* CALL TO ACTION */}
        <ReadyToScaleCTA />
      </main>

      <Footer />
      <FloatingActions />
    </>
  );
}
