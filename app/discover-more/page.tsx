import type { Metadata } from "next";
import Link from "next/link";
import {
  Plus,
  Handshake,
  Lock,
  Gauge,
  Users,
  Boxes,
  Cpu,
  Globe2,
  Clock,
  LifeBuoy,
} from "lucide-react";
import { Header } from "@/components/navigation/Header";
import { PageBanner } from "@/components/sections/PageBanner";
import { ReadyToScaleCTA } from "@/components/sections/ReadyToScaleCTA";
import { Footer } from "@/components/sections/Footer";
import { FloatingActions } from "@/components/ui/FloatingActions";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowLink } from "@/components/ui/ArrowLink";

export const metadata: Metadata = {
  title: "Discover More | NICS FAQs",
  description:
    "Learn more about NICS and find answers to common questions on outsourcing, confidentiality and data security, quality, employees and training, NDAs, and SLAs.",
};

/** This page's own hero photograph — pages no longer share the category image. */
const heroImage = "/img/discover-more-banner.jpg";

const faqCategories = [
  {
    id: "outsourcing",
    name: "Outsourcing",
    icon: Handshake,
    blurb: "What outsourcing actually is, and who it suits.",
    faqs: [
      {
        q: "Outsourcing does not mean outsourcing your problem!",
        a: [
          "Are you confused about what outsourcing actually means? Are you aware of its services and the benefits — the advantages your company will have if you outsource and partner with an outsourcing company? Here are all the answers.",
          "Outsourcing is a straightforward and convenient partnership. It is powered by a business-fit approach and a robust mechanism for effective coordination and successful delivery. Given the evolution of the industry and the marketplace, having an offshore partner is an easy and convenient way to make the best use of the resources for your business.",
        ],
      },
      {
        q: "How big should my organisation be to outsource and work seamlessly?",
        a: [
          "Size hardly matters. Whether you are a small team or an MNC, it entirely depends on your requirement, budget, and needs.",
          "If your requirements are more than our potential can serve, we would either suggest a phased implementation or decline to submit a proposal to you.",
        ],
      },
    ],
  },
  {
    id: "confidentiality",
    name: "Confidentiality",
    icon: Lock,
    blurb: "Data security, privacy, and where control sits.",
    faqs: [
      {
        q: "Is my company data confidential if I outsource?",
        a: [
          "Data security and protection of your privacy is an integral part of any outsourcing relationship. At NICS we ensure that we maintain various disclosure and statutory agreements between us and our clients to secure the information and maintain confidentiality.",
          "Restricted entry personnel, biometric checks, and password controls are applied while handling any data.",
        ],
      },
      {
        q: "Will I lose control if I outsource?",
        a: [
          "Outsourcing re-establishes your control by allowing you to vet, review, and approve every activity at every level against your benchmarks.",
          "You have full control of all the data you share and can review all the tasks you assign to us.",
        ],
      },
    ],
  },
  {
    id: "quality",
    name: "Quality",
    icon: Gauge,
    blurb: "What it does to the efficiency of your own team.",
    faqs: [
      {
        q: "Will it make my team more efficient if I outsource?",
        a: [
          "Outsourcing does more for you than simply sharing your workload. You can move work offshore to focus on other areas of your business, test an approach, or build a different solution.",
          "A streamlined process for your in-house team alongside your offshore team enables them to take up more responsibility and handle business challenges effectively. This increases both efficiency and productivity.",
        ],
      },
    ],
  },
  {
    id: "employees",
    name: "Employees",
    icon: Users,
    blurb: "Roles, training, language, and your existing staff.",
    faqs: [
      {
        q: "What job roles do your employees hold? Who trains whom?",
        a: [
          "Depending on your expectations and work requirements, we assign qualified employees to handle the operations.",
          "In terms of training, you can choose to train the team yourself, have us train them to meet your needs, or we can jointly do the same.",
        ],
      },
      {
        q: "What about local culture and English language skills?",
        a: [
          "Our people are predominantly English speaking and conversant in the language — it is in fact the most used language for communication across our delivery centres.",
          "Meetings are scheduled over Teams, Zoom, Google Meet, or Skype to suit how your firm already works.",
        ],
      },
      {
        q: "If the job or task of a person is outsourced, what does that employee do?",
        a: [
          "You can either provide a different responsibility internally in your organisation, or you have the option of termination.",
          "It has been proven that employees who are reassigned enrich the productivity at work.",
        ],
      },
    ],
  },
  {
    id: "miscellaneous",
    name: "Miscellaneous",
    icon: Boxes,
    blurb: "Screening, fraud cover, NDAs, and SLAs.",
    faqs: [
      {
        q: "What about exposure to dishonesty and fraud?",
        a: [
          "Before getting any employee on board, all of them go through a strict screening and verification process. They are also asked to sign an agreement with contract clauses particularly addressing dishonesty, disclosure of information, and fraudulence.",
          "Our workplace is monitored 24/7, and NICS is equipped with appropriate insurance cover to indemnify losses.",
        ],
      },
      {
        q: "Do you sign non-disclosure agreements and SLAs?",
        a: [
          "Yes. Given the nature of the processes we handle, appropriate non-disclosure and confidentiality agreements are signed to ensure process efficiency and transparency.",
        ],
      },
    ],
  },
];

const discoverMore = [
  {
    title: "Discover More",
    icon: LifeBuoy,
    blurb: "Answers to the questions firms ask us before they start.",
    href: "/discover-more",
  },
  {
    title: "Information Technology",
    icon: Cpu,
    blurb: "The infrastructure, systems, and security controls behind the delivery centre.",
    href: "/information-technology",
  },
  {
    title: "India, Geographical Advantage",
    icon: Globe2,
    blurb: "Why the talent pool, cost base, and work culture make India the delivery location.",
    href: null,
  },
  {
    title: "Time Zones",
    icon: Clock,
    blurb: "How the overnight gap turns into completed work on your desk each morning.",
    href: null,
  },
];

export default function DiscoverMorePage() {
  return (
    <div className="min-h-screen bg-white text-[#0b1524]">
      <Header />

      <main>
        {/* HERO BANNER (matching dante-new.vercel.app full-bleed banner) */}
        <PageBanner
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Discover More" }]}
          badge="Knowledge Base"
          badgeHighlight="Client Knowledge Hub"
          title="Discover More"
          description="Explore answers to key operational questions before you scale offshore. Discover how NICS protects your practice through comprehensive FAQs, ISO-aligned IT security infrastructure, stringent data privacy compliance, and disciplined service level agreements (SLAs)."
          primaryCta={{ label: "Contact Advisory", href: "/contact" }}
          secondaryCta={{ label: "Browse FAQs", href: "#faqs" }}
          metrics={[
            { value: "100%", label: "Cloud Hosted Compliance" },
            { value: "Zero", label: "Local Data Footprint" },
            { value: "ISO 27001", label: "Certified Delivery Centre" },
          ]}
          image={heroImage}
          imagePosition="82% 45%"
          cardBadge="Client Knowledge Hub"
          cardTitle="Operational Guidance & SLAs"
          cardSubtitle="Everything you need to know about IT security, data privacy, and governance."
          imageAlt="Indian practice delivery director and operations team reviewing ISO 27001 governance frameworks and SLA metrics"
        />

        {/* FAQ SECTION */}
        <section id="faqs" className="scroll-mt-20 border-t border-stone-200 bg-[#fbfbfa] py-12 lg:py-16">
          <Container size="default">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
              {/*
                Held left column: the framing, an index into the five groups, and
                the way out if the answer is not here. Ten questions in one
                undifferentiated stack gave a reader no way to navigate.
              */}
              <div className="lg:col-span-4">
                <div className="lg:sticky lg:top-28">
                  <SectionHeading
                    eyebrow="Your Questions"
                    title="Answers Before You Commit"
                    description="Grouped by what firms usually want to settle first."
                    align="left"
                    className="mb-8"
                  />

                  <nav aria-label="Question groups">
                    <ol className="divide-y divide-[#e4e2da] border-y border-[#e4e2da]">
                      {faqCategories.map((cat, index) => (
                        <li key={cat.id}>
                          <a
                            href={`#${cat.id}`}
                            className="group flex items-baseline gap-3 py-3 transition-colors hover:text-[#0056b3]"
                          >
                            <span className="w-5 shrink-0 text-xs font-bold tabular-nums text-[#0056b3]">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                            <span className="flex-1 text-sm font-semibold text-[#0b1524] transition-colors group-hover:text-[#0056b3]">
                              {cat.name}
                            </span>
                            <span className="text-xs tabular-nums text-stone-400">
                              {cat.faqs.length}
                            </span>
                          </a>
                        </li>
                      ))}
                    </ol>
                  </nav>

                  <div className="mt-8">
                    <p className="text-sm leading-relaxed text-stone-600">
                      Not covered here? Put it to our team directly — we will tell
                      you plainly whether we are the right fit.
                    </p>
                    <ArrowLink href="/contact" variant="navy" size="md" className="mt-4">
                      Ask our team
                    </ArrowLink>
                  </div>
                </div>
              </div>

              {/* The answers themselves */}
              <div className="lg:col-span-8">
                <div className="space-y-12">
                  {faqCategories.map((cat, index) => (
                    <div key={cat.id} id={cat.id} className="scroll-mt-28">
                      <div className="flex items-baseline gap-3 border-t-2 border-[#0b1524] pt-5">
                        <span className="text-xs font-bold tabular-nums text-[#0056b3]">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <div>
                          <h3 className="text-lg font-bold tracking-tight text-[#0b1524]">
                            {cat.name}
                          </h3>
                          <p className="mt-0.5 text-[13px] text-stone-500">{cat.blurb}</p>
                        </div>
                      </div>

                      <div className="mt-3">
                        {cat.faqs.map((faq, i) => (
                          <details key={i} className="group border-b border-[#e4e2da]">
                            <summary className="flex cursor-pointer list-none items-start gap-4 py-4 [&::-webkit-details-marker]:hidden">
                              <span className="flex-1 text-[15px] font-semibold leading-snug text-[#0b1524] transition-colors group-open:text-[#0056b3]">
                                {faq.q}
                              </span>
                              <Plus
                                className="mt-0.5 size-4 shrink-0 text-[#0056b3] transition-transform duration-300 group-open:rotate-45"
                                aria-hidden="true"
                              />
                            </summary>

                            <div className="space-y-3 pb-5 pl-0 sm:pl-6">
                              {faq.a.map((para, pi) => (
                                <p key={pi} className="text-sm leading-relaxed text-stone-600">
                                  {para}
                                </p>
                              ))}
                            </div>
                          </details>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* DISCOVER MORE CLUSTER */}
        <section className="border-t border-stone-200 bg-[#0b1524] py-20 text-white lg:py-28">
          <Container size="default">
            <SectionHeading
              eyebrow="Explore Further"
              title="Discover More"
              description="The detail behind the answers — our technology, our location, and how the working day lines up with yours."
              align="split"
              dark
            />

            <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-12">
              {discoverMore.map((item) => {
                const ItemIcon = item.icon;
                const isCurrent = item.href === "/discover-more";
                const cardBody = (
                  <div>
                    <div className="flex items-center justify-between">
                      <ItemIcon className="size-5 text-[#8bc7ff]" aria-hidden="true" />
                      {isCurrent && (
                        <span className="rounded bg-[#8bc7ff]/20 px-2 py-0.5 text-[11px] font-semibold text-[#8bc7ff]">
                          On this page
                        </span>
                      )}
                      {!item.href && (
                        <span className="rounded bg-white/10 px-2 py-0.5 text-[11px] font-semibold text-slate-400">
                          Coming soon
                        </span>
                      )}
                    </div>
                    <h3 className="mt-4 text-lg font-bold text-white">{item.title}</h3>
                    <p className="mt-3 text-xs leading-relaxed text-slate-300">{item.blurb}</p>
                  </div>
                );

                return item.href && !isCurrent ? (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="group flex flex-col border-t border-white/20 pt-5 transition-colors duration-300 hover:border-[#8bc7ff]"
                  >
                    {cardBody}
                  </Link>
                ) : (
                  <div
                    key={item.title}
                    className={`flex flex-col border-t pt-5 ${
                      isCurrent ? "border-[#8bc7ff]" : "border-white/20"
                    }`}
                  >
                    {cardBody}
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        {/* CALL TO ACTION */}
        <ReadyToScaleCTA />
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}
