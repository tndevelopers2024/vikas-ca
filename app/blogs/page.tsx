import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Clock,
  Newspaper,
  Tag,
  User,
  Sparkles,
} from "lucide-react";
import { Header } from "@/components/navigation/Header";
import { PageBanner } from "@/components/sections/PageBanner";
import { Footer } from "@/components/sections/Footer";
import { FloatingActions } from "@/components/ui/FloatingActions";
import { PremiumCursor } from "@/components/ui/PremiumCursor";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import {
  featuredInsight,
  secondaryInsights,
  latestNewsItems,
  type InsightArticle,
} from "@/data/insightsData";

export const metadata: Metadata = {
  title: "Blogs & PR | NICS",
  description:
    "Insights, technical briefings, and updates from the NICS team on offshore accounting, SMSF and audit support, information security, practice operations, and scaling an offshore function.",
};

const allArticles: InsightArticle[] = [featuredInsight, ...secondaryInsights];

const categories = Array.from(
  allArticles.reduce((map, article) => {
    map.set(article.category, (map.get(article.category) ?? 0) + 1);
    return map;
  }, new Map<string, number>())
).sort((a, b) => a[0].localeCompare(b[0]));

type PageProps = {
  searchParams: Promise<{ category?: string }>;
};

export default async function BlogsPage({ searchParams }: PageProps) {
  const { category } = await searchParams;
  const activeCategory =
    category && categories.some(([name]) => name === category) ? category : null;

  const visibleArticles = activeCategory
    ? allArticles.filter((article) => article.category === activeCategory)
    : allArticles;

  const [lead, ...rest] = visibleArticles;

  return (
    <div className="min-h-screen bg-white text-[#0b1524]">
      <Header />

      <main>
        {/* HERO BANNER (matching dante-new.vercel.app full-bleed banner) */}
        <PageBanner
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Insights" }]}
          badge="Blogs & PR"
          badgeHighlight="Delivery Intelligence"
          title="Insights From the Delivery Floor"
          description="Technical briefings, practice notes, ATO compliance updates, and operational analysis from our senior delivery directors — real-world insights on managing capacity, compliance standards, and offshore scaling."
          primaryCta={{ label: "Browse Insights", href: "#articles" }}
          secondaryCta={{ label: "Contact Advisory", href: "/contact" }}
          metrics={[
            { value: `${allArticles.length}`, label: "Published Articles" },
            { value: `${categories.length}`, label: "Practice Categories" },
            { value: `${latestNewsItems.length}`, label: "Industry Updates" },
          ]}
          image="/images/bright/page-blogs.jpg"
          cardBadge="Industry Intelligence"
          cardTitle="Briefings From the Delivery Floor"
          cardSubtitle="Technical practice notes, ATO updates, and operational analysis."
          imageAlt="Industry research, financial briefings, and practice intelligence publishing"
        />

        {/* ARTICLES */}
        <section id="articles" className="scroll-mt-20 border-t border-stone-200 bg-[#fbfbfa] py-16 lg:py-24">
          <Container size="default">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              {/* Sidebar */}
              <aside className="lg:col-span-3 lg:order-last">
                <div className="lg:sticky lg:top-24 space-y-6">
                  <div className="rounded-2xl border border-stone-200 bg-white p-6">
                    <div className="flex items-center gap-2">
                      <Tag className="size-4 text-[#0056b3]" />
                      <p className="text-xs font-bold uppercase tracking-wider text-stone-400">Categories</p>
                    </div>

                    <nav className="mt-4 space-y-1.5">
                      <Link
                        href="/blogs"
                        className={`flex items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors ${
                          activeCategory === null
                            ? "bg-[#0056b3]/10 font-semibold text-[#0056b3]"
                            : "text-stone-600 hover:bg-stone-50 hover:text-[#0056b3]"
                        }`}
                      >
                        <span>All articles</span>
                        <span className="text-xs tabular-nums text-stone-400">{allArticles.length}</span>
                      </Link>

                      {categories.map(([name, count]) => (
                        <Link
                          key={name}
                          href={`/blogs?category=${encodeURIComponent(name)}`}
                          className={`flex items-center justify-between gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${
                            activeCategory === name
                              ? "bg-[#0056b3]/10 font-semibold text-[#0056b3]"
                              : "text-stone-600 hover:bg-stone-50 hover:text-[#0056b3]"
                          }`}
                        >
                          <span>{name}</span>
                          <span className="text-xs tabular-nums text-stone-400">{count}</span>
                        </Link>
                      ))}
                    </nav>
                  </div>

                  <div className="rounded-2xl border border-[#0056b3]/20 bg-white p-6">
                    <h2 className="text-base font-bold text-[#0b1524]">Talk to our team</h2>
                    <p className="mt-2 text-xs leading-relaxed text-stone-600">
                      Have a question these notes do not answer? Put it to the people who do the work.
                    </p>
                    <Link
                      href="/contact"
                      className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-[#0056b3] transition-colors hover:text-[#004494]"
                    >
                      Make an enquiry
                      <ArrowRight className="size-3.5" />
                    </Link>
                  </div>
                </div>
              </aside>

              {/* Article list */}
              <div className="lg:col-span-9">
                <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-stone-200 pb-5">
                  <h2 className="text-2xl font-bold tracking-tight text-[#0b1524]">
                    {activeCategory ?? "All articles"}
                  </h2>
                  <p className="text-sm text-stone-500">
                    {visibleArticles.length}{" "}
                    {visibleArticles.length === 1 ? "article" : "articles"}
                    {activeCategory && (
                      <>
                        {" · "}
                        <Link href="/blogs" className="font-semibold text-[#0056b3] hover:underline">
                          Clear filter
                        </Link>
                      </>
                    )}
                  </p>
                </div>

                {/* Lead article */}
                {lead && (
                  <Link
                    href={`/blogs/${lead.id}`}
                    className="group mt-8 block overflow-hidden rounded-2xl border border-stone-200 bg-white transition-all hover:border-[#0056b3]/30 hover:shadow-xl"
                  >
                    <div className="grid md:grid-cols-2">
                      <div className="relative aspect-[16/10] md:aspect-auto md:min-h-[280px]">
                        <Image
                          src={lead.image}
                          alt={lead.title}
                          fill
                          priority
                          sizes="(max-width: 768px) 100vw, 45vw"
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1524]/60 to-transparent md:bg-gradient-to-r" />
                        <div className="absolute left-5 top-5">
                          <span className="rounded-md bg-[#0056b3] px-2.5 py-1 text-xs font-bold uppercase tracking-[0.14em] text-white">
                            {lead.featured ? "Featured" : lead.category}
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-col justify-between p-8">
                        <div>
                          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#0056b3]">
                            {lead.edition ?? lead.category}
                          </p>
                          <h3 className="mt-3 text-2xl font-bold leading-snug text-[#0b1524] transition-colors group-hover:text-[#0056b3]">
                            {lead.title}
                          </h3>
                          <p className="mt-4 text-sm leading-relaxed text-stone-600">
                            {lead.excerpt}
                          </p>
                        </div>

                        <div className="mt-6 border-t border-stone-100 pt-5">
                          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-stone-500">
                            <span className="inline-flex items-center gap-1.5">
                              <User className="size-3.5 text-[#0056b3]" />
                              {lead.author.name}
                            </span>
                            <span className="inline-flex items-center gap-1.5">
                              <CalendarDays className="size-3.5 text-[#0056b3]" />
                              {lead.date}
                            </span>
                            <span className="inline-flex items-center gap-1.5">
                              <Clock className="size-3.5 text-[#0056b3]" />
                              {lead.readTime}
                            </span>
                          </div>

                          <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-[#0056b3]">
                            Read more
                            <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                )}

                {/* Remaining articles */}
                {rest.length > 0 && (
                  <div className="mt-8 grid gap-6 sm:grid-cols-2">
                    {rest.map((article) => (
                      <Link
                        key={article.id}
                        href={`/blogs/${article.id}`}
                        className="group flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white transition-all hover:-translate-y-1 hover:border-[#0056b3]/30 hover:shadow-xl"
                      >
                        <div className="relative aspect-[16/9]">
                          <Image
                            src={article.image}
                            alt={article.title}
                            fill
                            sizes="(max-width: 640px) 100vw, 40vw"
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1524]/50 to-transparent" />
                          <span className="absolute left-4 top-4 rounded-md bg-white/95 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-[#0056b3]">
                            {article.category}
                          </span>
                        </div>

                        <div className="flex flex-1 flex-col justify-between p-6">
                          <div>
                            <h3 className="text-lg font-bold leading-snug text-[#0b1524] transition-colors group-hover:text-[#0056b3]">
                              {article.title}
                            </h3>
                            <p className="mt-3 text-sm leading-relaxed text-stone-600">
                              {article.excerpt}
                            </p>
                          </div>

                          <div className="mt-5 border-t border-stone-100 pt-4">
                            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-stone-500">
                              <span className="inline-flex items-center gap-1.5">
                                <CalendarDays className="size-3.5 text-[#0056b3]" />
                                {article.date}
                              </span>
                              <span className="inline-flex items-center gap-1.5">
                                <Clock className="size-3.5 text-[#0056b3]" />
                                {article.readTime}
                              </span>
                            </div>

                            <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-[#0056b3]">
                              Read more
                              <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </Container>
        </section>

        {/* PR / LATEST UPDATES */}
        <section className="border-t border-stone-200 bg-[#0b1524] py-20 text-white lg:py-24">
          <Container size="default">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#8bc7ff]">
                <Newspaper className="size-3.5" />
                Press &amp; Updates
              </div>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
                Latest From NICS
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-300">
                Shorter notes on standards, delivery practice, and what we are changing across client workflows.
              </p>
            </div>

            <div className="mt-12 divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
              {latestNewsItems.map((item) => (
                <div key={item.id} className="flex flex-col gap-3 p-6 sm:flex-row sm:items-center sm:gap-6">
                  <span className="shrink-0 rounded bg-white/10 px-2.5 py-1 text-[11px] font-semibold text-[#8bc7ff] sm:w-52">
                    {item.category}
                  </span>
                  <p className="flex-1 text-sm font-medium leading-snug text-white">{item.title}</p>
                  <span className="shrink-0 text-xs text-slate-400">
                    {item.date} · {item.readTime}
                  </span>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* CALL TO ACTION */}
        <section className="relative isolate overflow-hidden border-t border-stone-200 bg-gradient-to-br from-[#eef5ff] via-[#f6f9fd] to-[#fbfbfa] py-16 lg:py-20">
          {/* soft accent so the panel is not a flat wash */}
          <div
            className="pointer-events-none absolute -right-24 -top-24 size-96 rounded-full opacity-40 blur-3xl"
            style={{ background: "radial-gradient(circle, #bcd9ff 0%, transparent 70%)" }}
          />

          <Container size="default" className="relative">
            <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#0056b3]/20 bg-white px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#0056b3]">
                  <Newspaper className="size-3.5" />
                  From Reading to Doing
                </div>

                <h2 className="mt-5 max-w-xl text-3xl font-extrabold leading-[1.15] tracking-tight text-[#0b1524] sm:text-4xl">
                  Found something that maps to your practice?
                </h2>

                <p className="mt-4 max-w-lg text-base leading-relaxed text-stone-600">
                  These notes come from the team that runs the work. If one of them describes a problem you are carrying, the next step is a short conversation about what to move offshore first.
                </p>
              </div>

              <div className="lg:col-span-5">
                <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-stretch">
                  <Link
                    href="/contact"
                    className="group inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#0056b3] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-[#0056b3]/25 transition-all hover:bg-[#004494] hover:shadow-xl hover:shadow-[#0056b3]/30"
                  >
                    Make an Enquiry
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <Link
                    href="/how-it-works"
                    className="group inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-stone-300 bg-white px-7 py-4 text-sm font-bold text-[#0b1524] shadow-sm transition-all hover:border-[#0056b3]/40 hover:text-[#0056b3] hover:shadow-md"
                  >
                    See How It Works
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
      <FloatingActions />
      <PremiumCursor />
    </div>
  );
}
