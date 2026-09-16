"use client";

import React, { useState } from "react";
import {
  Send,
  CheckCircle2,
  Phone,
  Mail,
  ShieldCheck,
  Calendar,
  ArrowRight,
  ChevronDown,
  Building2,
  Laptop,
  FileCheck,
  Lock,
  MessageSquare,
  Globe,
  Check,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageBanner } from "@/components/sections/PageBanner";
import { Button } from "@/components/ui/Button";
import { locationsData } from "@/data/locationsData";
import { OfficeCard } from "@/components/ui/OfficeCard";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { ReadyToScaleCTA } from "@/components/sections/ReadyToScaleCTA";

const faqs = [
  {
    question: "How quickly can we onboard a dedicated offshore team member?",
    answer:
      "For standard roles in accounting, SMSF, bookkeeping, and virtual administration, our typical placement and onboarding timeline is 10 to 14 business days. For specialized paraplanners or custom enterprise functions, we conduct tailored talent mapping within 2 to 3 weeks.",
  },
  {
    question: "How is client data security and privacy compliance maintained?",
    answer:
      "All NICS delivery hubs operate under strict ISO/IEC 27001-aligned security protocols, compliance with the privacy principles applicable in your jurisdiction, clean-desk policies, dual-factor authentication, endpoint management, and zero local data storage. Your data remains in your secure cloud environment.",
  },
  {
    question: "Can we interview and select our own dedicated team members?",
    answer:
      "Yes, absolutely. Under our Insourcing and Dedicated models, we shortlist pre-vetted candidates and you conduct the final video interviews to select the exact professional who matches your culture, workflow, and expectations.",
  },
  {
    question: "Which accounting, financial, and mortgage software do your teams use?",
    answer:
      "Our specialists are experienced across the leading practice software ecosystem, including Xero, MYOB, APS, Reckon, Class Super, BGL 360, Simple Fund, Xplan, Midwinter, ApplyOnline, Mercury, Salesforce, and all major practice management platforms.",
  },
  {
    question: "What happens if our workload fluctuates seasonally (e.g. tax season)?",
    answer:
      "We offer flexible scaling. You can combine a dedicated core team (Insourcing) with on-demand Job-by-Job support or overflow teams during peak seasons like EOFY, tax compliance spikes, or annual audit runs.",
  },
  {
    question: "Who retains final compliance and review responsibility?",
    answer:
      "All professional review, judgement, signing, and regulatory lodgements remain with your appropriately registered practitioner, licensee, or onshore directors. NICS provides the accurate preparation, workpapers, and disciplined execution behind you.",
  },
];

export function ContactView() {
  // Form States
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [practiceType, setPracticeType] = useState("accounting-firm");
  const [selectedService, setSelectedService] = useState("accounting-finance");
  const [engagementModel, setEngagementModel] = useState("insourcing");
  const [teamSize, setTeamSize] = useState("1-specialist");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // FAQ Accordion State
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !fullName) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <div className="bg-white text-[#0b1524]">
      {/* 1. HERO BANNER (matching dante-new.vercel.app full-bleed banner) */}
      <PageBanner
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        badge="Get in Touch with NICS"
        badgeHighlight="24-Hour Response SLA"
        title="Let’s build your offshore delivery team."
        description="Talk to our practice advisory team about structuring dedicated capacity, compliance workflows, or back-office support. We operate under a guaranteed 24-hour response SLA so you can evaluate talent, confirm scope, and retain 100% onshore control from day one."
        primaryCta={{ label: "Request Consultation", href: "#consultation-form" }}
        secondaryCta={{ label: "Call +91 9632 466 477", href: "tel:+919632466477" }}
        metrics={[
          { value: "24h", label: "Guaranteed Response SLA" },
          { value: "10–14d", label: "Fast Team Onboarding" },
          { value: "ISO 27001", label: "Aligned Security Standard" },
          { value: "100%", label: "Onshore Control Retained" },
        ]}
        image="/images/bright/page-contact.jpg"
        cardBadge="Global Advisory"
        cardTitle="Corporate Consultation Suite"
        cardSubtitle="Connect directly with our leadership to evaluate scope, SLAs, and dedicated talent."
        imageAlt="Indian corporate client consultation suite and practice advisory reception at Chennai delivery headquarters"
      />

      {/* 2. DIRECT COMMUNICATION CHANNELS */}
      <section className="border-b border-stone-200 bg-[#fbfbfa] py-12">
        <Container size="default">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="border-t border-[#0b1524]/20 pt-5">
              <div className="text-[#0056b3]">
                <Phone className="size-5" />
              </div>
              <h3 className="mt-4 text-base font-bold text-[#0b1524]">Direct Phone Support</h3>
              <p className="mt-1 text-xs text-stone-500">Mon–Fri · Business hours</p>
              <div className="mt-4 space-y-1">
                <a
                  href="tel:+919632466477"
                  className="block text-sm font-semibold text-[#0056b3] hover:underline"
                >
                  +91 9632 466 477
                </a>
                <p className="text-xs text-stone-600">8:00 AM – 6:00 PM IST</p>
              </div>
            </div>

            <div className="border-t border-[#0b1524]/20 pt-5">
              <div className="text-[#0056b3]">
                <Mail className="size-5" />
              </div>
              <h3 className="mt-4 text-base font-bold text-[#0b1524]">Email Inquiries</h3>
              <p className="mt-1 text-xs text-stone-500">Fast response within 1 business day</p>
              <div className="mt-4 space-y-1">
                <a
                  href="mailto:vikas@abcdca.com"
                  className="block text-sm font-semibold text-[#0056b3] hover:underline"
                >
                  vikas@abcdca.com
                </a>
                <a
                  href="mailto:operations@nics.com"
                  className="block text-xs text-stone-600 hover:text-[#0056b3]"
                >
                  operations@nics.com
                </a>
              </div>
            </div>

            <div className="border-t border-[#0b1524]/20 pt-5">
              <div className="text-[#0056b3]">
                <Building2 className="size-5" />
              </div>
              <h3 className="mt-4 text-base font-bold text-[#0b1524]">Registered Office (HQ)</h3>
              <p className="mt-1 text-xs text-stone-500">Chennai, Tamil Nadu, India</p>
              <div className="mt-4 text-xs text-stone-700 leading-relaxed">
                Prince Centre, 4th Floor Left Wing, 709 Pathari Road, Anna Salai, Chennai 600006
              </div>
            </div>

            <div className="border-t border-[#0b1524]/20 pt-5">
              <div className="text-[#0056b3]">
                <Calendar className="size-5" />
              </div>
              <h3 className="mt-4 text-base font-bold text-[#0b1524]">Discovery Video Call</h3>
              <p className="mt-1 text-xs text-stone-500">30-min Scoping Session</p>
              <div className="mt-4">
                <a
                  href="#consultation-form"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0056b3] hover:underline"
                >
                  Request a consultation <ArrowRight className="size-3.5" />
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. MAIN INTERACTIVE FORM & ADVISORY SECTION */}
      <section id="consultation-form" className="py-12 lg:py-16">
        <Container size="default">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Form Card */}
            <div className="lg:col-span-7 rounded-sm border border-stone-200 bg-white p-8 sm:p-10 shadow-sm">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-5">
                  <div className="size-16 bg-green-100 text-green-700 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="size-8" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0b1524]">
                    Consultation Request Received!
                  </h3>
                  <p className="text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-[#0b1524]">{fullName}</strong>. Your inquiry has been routed to our senior practice advisory team. We will review your requirements and reach out within 1 business day.
                  </p>
                  <div className="p-4 bg-stone-50 rounded-sm border border-stone-200 text-left max-w-md mx-auto text-xs text-stone-600 space-y-1.5">
                    <div className="font-bold text-[#0b1524] uppercase tracking-wider text-[11px] mb-2">
                      What happens next?
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="size-3.5 text-[#0056b3]" />
                      <span>Initial practice discovery & scope review</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="size-3.5 text-[#0056b3]" />
                      <span>Custom proposal with vetted talent profiles</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="size-3.5 text-[#0056b3]" />
                      <span>Standard NDA and security protocol agreement</span>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFullName("");
                      setEmail("");
                      setPhone("");
                      setCompanyName("");
                      setMessage("");
                    }}
                    className="inline-block pt-4 text-xs font-bold uppercase tracking-wider text-[#0056b3] underline hover:text-[#004494] cursor-pointer"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0056b3] mb-2">
                      <MessageSquare className="size-3.5" />
                      Consultation Request
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b1524]">
                      Discuss What You Can Move Offshore
                    </h2>
                    <p className="text-xs sm:text-sm text-stone-500 mt-1.5 leading-relaxed">
                      Fill out the form below and our practice directors will formulate a delivery recommendation tailored to your workflow and tech stack.
                    </p>
                  </div>

                  {/* Section 1: Contact Details */}
                  <div className="space-y-4 border-t border-stone-100 pt-4">
                    <div className="text-xs font-bold uppercase tracking-wider text-stone-400">
                      1. Your Practice Details
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-stone-700 mb-1">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="e.g. David Mitchell"
                          className="w-full rounded-sm border border-stone-300 bg-stone-50/70 px-4 py-2.5 text-sm transition-colors focus:border-[#0056b3] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0056b3]/20"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-stone-700 mb-1">
                          Work Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="name@yourfirm.com"
                          className="w-full rounded-sm border border-stone-300 bg-stone-50/70 px-4 py-2.5 text-sm transition-colors focus:border-[#0056b3] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0056b3]/20"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-stone-700 mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="Include your country code"
                          className="w-full rounded-sm border border-stone-300 bg-stone-50/70 px-4 py-2.5 text-sm transition-colors focus:border-[#0056b3] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0056b3]/20"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-stone-700 mb-1">
                          Company / Firm Name
                        </label>
                        <input
                          type="text"
                          value={companyName}
                          onChange={(e) => setCompanyName(e.target.value)}
                          placeholder="Mitchell & Co Chartered Accountants"
                          className="w-full rounded-sm border border-stone-300 bg-stone-50/70 px-4 py-2.5 text-sm transition-colors focus:border-[#0056b3] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0056b3]/20"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1">
                        Industry / Sector
                      </label>
                      <select
                        value={practiceType}
                        onChange={(e) => setPracticeType(e.target.value)}
                        className="w-full rounded-sm border border-stone-300 bg-stone-50/70 px-4 py-2.5 text-sm transition-colors focus:border-[#0056b3] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0056b3]/20"
                      >
                        <option value="accounting-firm">Accounting & Tax Practice</option>
                        <option value="financial-planning">Financial Planning & Wealth Advisory</option>
                        <option value="mortgage-broking">Mortgage Broking & Lending</option>
                        <option value="smsf-audit">SMSF Administration & Audit Specialist</option>
                        <option value="corporate-enterprise">Commercial Enterprise / Corporate</option>
                        <option value="legal-operations">Legal Operations & Professional Services</option>
                      </select>
                    </div>
                  </div>

                  {/* Section 2: Scoping & Delivery Needs */}
                  <div className="space-y-4 border-t border-stone-100 pt-4">
                    <div className="text-xs font-bold uppercase tracking-wider text-stone-400">
                      2. Scope & Delivery Preferences
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-stone-700 mb-1">
                          Primary Service Needed
                        </label>
                        <select
                          value={selectedService}
                          onChange={(e) => setSelectedService(e.target.value)}
                          className="w-full rounded-sm border border-stone-300 bg-stone-50/70 px-4 py-2.5 text-sm transition-colors focus:border-[#0056b3] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0056b3]/20"
                        >
                          <option value="accounting-finance">Accounting, Bookkeeping & AP/AR</option>
                          <option value="practice-support">Practice Support & Tax Workpapers</option>
                          <option value="smsf-audit">SMSF Back-Office & Audit Support</option>
                          <option value="financial-planning">Statement of Advice (SOA) Preparation</option>
                          <option value="mortgage-processing">Mortgage Loan Processing</option>
                          <option value="virtual-assistant">Virtual Assistant & Back-Office Admin</option>
                          <option value="data-entry">Data Entry & Manual Digitisation</option>
                          <option value="transcription">Transcription & Document Preparation</option>
                          <option value="bot-model">Build-Operate-Transfer (BOT) Delivery Hub</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-stone-700 mb-1">
                          Engagement Model
                        </label>
                        <select
                          value={engagementModel}
                          onChange={(e) => setEngagementModel(e.target.value)}
                          className="w-full rounded-sm border border-stone-300 bg-stone-50/70 px-4 py-2.5 text-sm transition-colors focus:border-[#0056b3] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0056b3]/20"
                        >
                          <option value="insourcing">Insourcing (Dedicated Full-Time Staff)</option>
                          <option value="insourcing-manager">Insourcing with Manager Support & QA</option>
                          <option value="job-by-job">Job-by-Job / Seasonal Capacity</option>
                          <option value="bot-model">Build-Operate-Transfer (BOT)</option>
                          <option value="advisory">Advisory / Need Guidance</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1">
                        Estimated Resource Capacity
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                        {[
                          { id: "1-specialist", label: "1 Specialist" },
                          { id: "2-4-specialists", label: "2–4 Team" },
                          { id: "5-10-team", label: "5–10 Team" },
                          { id: "10-plus", label: "10+ Hub" },
                        ].map((item) => (
                          <button
                            type="button"
                            key={item.id}
                            onClick={() => setTeamSize(item.id)}
                            className={`rounded-lg border px-3 py-2 text-center font-medium transition-colors ${
                              teamSize === item.id
                                ? "border-[#0056b3] bg-[#0056b3] text-white"
                                : "border-stone-300 bg-stone-50 text-stone-700 hover:bg-stone-100"
                            }`}
                          >
                            {item.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Section 3: Workload & Specific Requirements */}
                  <div className="space-y-4 border-t border-stone-100 pt-4">
                    <div className="text-xs font-bold uppercase tracking-wider text-stone-400">
                      3. Current Workload & Systems
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1">
                        Describe your requirements, current software, or target start date
                      </label>
                      <textarea
                        rows={3}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="e.g. Looking to onboard 2 full-time senior bookkeepers proficient in Xero and workflow manager by next month..."
                        className="w-full rounded-sm border border-stone-300 bg-stone-50/70 px-4 py-2.5 text-sm transition-colors focus:border-[#0056b3] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0056b3]/20"
                      />
                    </div>
                  </div>

                  {/* Submit Button & Security Note */}
                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary-blue"
                      size="lg"
                      className="w-full justify-center text-sm font-bold shadow-lg shadow-[#0056b3]/20"
                      iconRight={<Send className="size-4" />}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting Inquiry..." : "Request Practice Consultation"}
                    </Button>
                  </div>

                  <div className="flex items-center justify-center gap-2 text-[11px] text-stone-500">
                    <Lock className="size-3.5 text-stone-400" />
                    <span>Strict confidentiality · Non-Disclosure Agreement (NDA) respected</span>
                  </div>
                </form>
              )}
            </div>

            {/* Right Column: Trust & Operational Assurance */}
            <div className="lg:col-span-5 space-y-8">
              {/* How onboarding works */}
              <div className="border-t-2 border-[#0b1524] pt-6">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0056b3]">
                  <Laptop className="size-4" />
                  Seamless 4-Step Transition
                </div>
                <h3 className="mt-2 text-xl font-bold text-[#0b1524]">
                  How we get your team running
                </h3>

                <div className="mt-6 space-y-5">
                  <div className="flex items-start gap-3.5">
                    <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#0056b3] text-xs font-bold text-white">
                      1
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[#0b1524]">Discovery & Scope Review</div>
                      <p className="text-xs text-stone-600 mt-0.5">
                        We map your workflows, software requirements, and required qualifications.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#0056b3] text-xs font-bold text-white">
                      2
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[#0b1524]">Candidate Interview & Selection</div>
                      <p className="text-xs text-stone-600 mt-0.5">
                        You interview shortlisted, pre-vetted specialists and choose your best fit.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#0056b3] text-xs font-bold text-white">
                      3
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[#0b1524]">SOP Setup & Security Induction</div>
                      <p className="text-xs text-stone-600 mt-0.5">
                        Structured training, VPN credentials, and security clearance completed.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#0056b3] text-xs font-bold text-white">
                      4
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[#0b1524]">Monitored Go-Live & Daily Governance</div>
                      <p className="text-xs text-stone-600 mt-0.5">
                        Work commences with daily huddles, milestone tracking, and QA oversight.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Security card */}
              <div className="border-t-2 border-[#0b1524] pt-6">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-green-700">
                  <ShieldCheck className="size-4" />
                  Data Privacy & Compliance
                </div>
                <h4 className="mt-2 text-lg font-bold text-[#0b1524]">
                  Privacy & ISO 27001 Discipline
                </h4>
                <p className="mt-2 text-xs text-stone-600 leading-relaxed">
                  Our delivery operations operate in clean-room environments with strict physical security, no external storage devices, and zero local hard drive caching.
                </p>
                <div className="mt-4 grid grid-cols-2 gap-2 text-xs font-semibold text-stone-700">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="size-3.5 text-[#0056b3]" />
                    <span>APPs Compliant</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="size-3.5 text-[#0056b3]" />
                    <span>2FA & Encrypted VPN</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="size-3.5 text-[#0056b3]" />
                    <span>Clean Desk Policy</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="size-3.5 text-[#0056b3]" />
                    <span>Onshore Sign-off</span>
                  </div>
                </div>
              </div>

              {/* Direct Practice Director Spotlight */}
              <div className="rounded-sm border border-[#0056b3]/20 bg-[#f4f7fb] p-6">
                <div className="flex items-center gap-3">
                  <div className="flex size-12 items-center justify-center rounded-sm bg-[#0056b3] text-white font-bold text-lg">
                    BM
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#0b1524]">Boobalan Madhavan</div>
                    <div className="text-xs text-stone-500">Founder &amp; Managing Director</div>
                  </div>
                </div>
                <p className="mt-3 text-xs text-stone-600 leading-relaxed">
                  &ldquo;We work with firms to relieve delivery bottlenecks while ensuring full professional ownership stays firmly in your hands.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. CORE DELIVERY OFFICE */}
      <section className="border-t border-stone-200 bg-[#f8fafc] py-12 lg:py-16">
        <Container size="default">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-stone-700">
              <Globe className="size-3.5 text-[#0056b3]" />
              Core Delivery Centre
            </div>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl text-[#0b1524]">
              Our Delivery Office
            </h2>
            <p className="mt-3 text-base text-stone-600">
              A dedicated delivery hub in Chennai operating with disciplined processes and ISO/IEC 27001 security.
            </p>
          </div>

          <div className="mt-12 max-w-2xl mx-auto">
            {locationsData.map((loc) => (
              <OfficeCard
                key={loc.id}
                office={loc}
                footer={
                  <ArrowLink href="#consultation-form" variant="navy" size="md">
                    Brief the {loc.name} team
                  </ArrowLink>
                }
              />
            ))}
          </div>
        </Container>
      </section>

      {/* 5. FREQUENTLY ASKED QUESTIONS */}
      <section className="border-t border-stone-200 bg-white py-12 lg:py-16">
        <Container size="narrow">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-stone-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-stone-700">
              <FileCheck className="size-3.5 text-[#0056b3]" />
              Clear Answers
            </div>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl text-[#0b1524]">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-base text-stone-600">
              Everything you need to know about partnering with NICS for offshore delivery.
            </p>
          </div>

          <div className="mt-12 space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="border-b border-[#e4e2da] transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between py-5 text-left font-bold text-[#0b1524] cursor-pointer"
                  >
                    <span className="text-base sm:text-lg pr-4">{faq.question}</span>
                    <ChevronDown
                      className={`size-5 shrink-0 text-[#0056b3] transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="pb-5 text-sm leading-relaxed text-stone-600">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 6. ENHANCED UNIFIED CTA BANNER */}
      <ReadyToScaleCTA />
    </div>
  );
}
