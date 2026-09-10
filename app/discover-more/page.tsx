import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
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
  ShieldCheck,
  BadgeCheck,
} from "lucide-react";
import { Header } from "@/components/navigation/Header";
import { PageBanner } from "@/components/sections/PageBanner";
import { ExploreFurther } from "@/components/sections/ExploreFurther";
import { ReadyToScaleCTA } from "@/components/sections/ReadyToScaleCTA";
import { Footer } from "@/components/sections/Footer";
import { FloatingActions } from "@/components/ui/FloatingActions";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Discover More | NICS FAQs",
  description:
    "Learn more about NICS and find answers to common questions on outsourcing, confidentiality and data security, quality, employees and training, NDAs, and SLAs.",
};

/** This page's own hero photograph — pages no longer share the category image. */
const heroImage = "/images/nics/discover-analytics.jpg";

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
    href: null,
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

const totalFaqs = faqCategories.reduce((sum, cat) => sum + cat.faqs.length, 0);

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
          cardBadge="Client Knowledge Hub"
          cardTitle="Operational Guidance & SLAs"
          cardSubtitle="Everything you need to know about IT security, data privacy, and governance."
          imageAlt="Analyst reviewing financial charts on a laptop beside a calculator"
        />

        {/* FAQ SECTION */}
        <section id="faqs" className="scroll-mt-20 border-t border-stone-200 bg-[#fbfbfa] py-20 lg:py-28">
          <Container size="default">
            <div className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-12">
              <div className="lg:col-span-7">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0056b3]">Your Questions</p>
                <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-[#0b1524]">
                  Answers Before You Commit
                </h2>
              </div>
              <p className="text-base leading-relaxed text-stone-600 lg:col-span-5">
                Grouped by what firms usually want to settle first. If something here is not covered, ask us — we would rather answer it up front.
              </p>
            </div>

            <div className="mt-14 grid gap-12 lg:mt-16 lg:grid-cols-12 lg:gap-16">
              {/* Sticky help-centre rail: photo summary + topic index */}
              <aside className="lg:col-span-4">
                <div className="space-y-8 lg:sticky lg:top-32">
                  <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-stone-100 shadow-xl lg:aspect-[4/3]">
                    <Image
                      src="/images/nics/discover-workstation.jpg"
                      alt="Professional typing on a laptop late in the evening"
                      fill
                      sizes="(min-width: 1024px) 30vw, 100vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b1524]/90 via-[#0b1524]/30 to-transparent" />
                    <p className="absolute bottom-5 left-6 flex items-baseline gap-2 text-white">
                      <span className="font-serif text-5xl font-bold">{totalFaqs}</span>
                      <span className="text-sm font-semibold uppercase tracking-wider text-slate-200">
                        questions · {faqCategories.length} topics
                      </span>
                    </p>
                  </div>

                  <nav aria-label="FAQ topics">
                    <ol className="border-l-2 border-stone-200">
                      {faqCategories.map((cat) => {
                        const CatIcon = cat.icon;
                        return (
                          <li key={cat.id}>
                            <a
                              href={`#${cat.id}`}
                              className="group -ml-0.5 flex items-center gap-3 border-l-2 border-transparent py-2.5 pl-5 transition-colors hover:border-[#0056b3]"
                            >
                              <CatIcon className="size-4 text-stone-400 transition-colors group-hover:text-[#0056b3]" />
                              <span className="text-sm font-semibold text-stone-700 transition-colors group-hover:text-[#0056b3]">
                                {cat.name}
                              </span>
                              <span className="ml-auto text-xs tabular-nums text-stone-400">{cat.faqs.length}</span>
                            </a>
                          </li>
                        );
                      })}
                    </ol>
                  </nav>
                </div>
              </aside>

              {/* Topics and questions */}
              <div className="space-y-16 lg:col-span-8">
                {faqCategories.map((cat, ci) => {
                  const CatIcon = cat.icon;
                  return (
                    <div key={cat.id} id={cat.id} className="scroll-mt-32">
                      <div className="flex flex-wrap items-center gap-4">
                        <span className="font-serif text-5xl font-bold leading-none tabular-nums text-[#0056b3]/15">
                          {String(ci + 1).padStart(2, "0")}
                        </span>
                        <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#0056b3]/10 text-[#0056b3]">
                          <CatIcon className="size-5" />
                        </span>
                        <div className="min-w-0">
                          <h3 className="text-2xl font-bold text-[#0b1524]">{cat.name}</h3>
                          <p className="mt-0.5 text-sm text-stone-500">{cat.blurb}</p>
                        </div>
                        <span className="ml-auto rounded-full bg-white px-3 py-1 text-xs font-semibold text-stone-500 ring-1 ring-stone-200">
                          {cat.faqs.length} {cat.faqs.length === 1 ? "question" : "questions"}
                        </span>
                      </div>

                      <div className="mt-6 border-t border-stone-200">
                        {cat.faqs.map((faq, i) => (
                          <details key={i} className="group border-b border-stone-200">
                            <summary className="flex cursor-pointer list-none items-start gap-5 py-6 [&::-webkit-details-marker]:hidden">
                              <span className="flex-1 font-serif text-lg font-semibold leading-snug text-[#0b1524] transition-colors group-hover:text-[#0056b3] group-open:text-[#0056b3] sm:text-xl">
                                {faq.q}
                              </span>
                              <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full border border-stone-300 text-[#0056b3] transition-all duration-300 group-open:rotate-45 group-open:border-[#0056b3] group-open:bg-[#0056b3] group-open:text-white">
                                <Plus className="size-4" />
                              </span>
                            </summary>

                            <div className="mb-7 ml-1 max-w-3xl space-y-4 border-l-2 border-[#0056b3] pl-5">
                              {faq.a.map((para, pi) => (
                                <p key={pi} className="text-base leading-relaxed text-stone-600">
                                  {para}
                                </p>
                              ))}
                            </div>
                          </details>
                        ))}
                      </div>
                    </div>
                  );
                })}

                {/* Still have a question — dark photo banner */}
                <div className="relative overflow-hidden rounded-2xl bg-[#0b1524] p-8 text-white shadow-xl sm:p-10">
                  <Image
                    src="/images/nics/discover-focus.jpg"
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 55vw, 100vw"
                    className="object-cover opacity-30"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0b1524] via-[#0b1524]/85 to-[#0056b3]/60" />
                  <div className="relative gap-8 sm:flex sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-white">Still have a question?</h3>
                      <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-300">
                        If your question is not answered above, put it to our team directly. We will tell you plainly whether we are the right fit for what you need.
                      </p>
                    </div>
                    <Link
                      href="/contact"
                      className="group/btn mt-6 inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#0b1524] transition-colors hover:bg-[#8bc7ff] sm:mt-0"
                    >
                      Ask Our Team
                      <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* DISCOVER MORE CLUSTER */}
        <ExploreFurther
          eyebrowIcon={LifeBuoy}
          title={"Discover More"}
          description={"The detail behind the answers — our technology, our location, and how the working day lines up with yours."}
          items={discoverMore}
          currentHref="/discover-more"
          images={["/images/nics/blog-library.jpg", "/images/nics/accounting-analyst.jpg", "/images/nics/home-boardroom.jpg", "/images/nics/contact-connect.jpg"]}
        />

        {/* CALL TO ACTION */}
        <ReadyToScaleCTA />
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}
