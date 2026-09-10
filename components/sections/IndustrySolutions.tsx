import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, type LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";

export interface IndustrySolution {
  title: string;
  anchor?: string;
  icon: LucideIcon;
  description: string;
  benefits: string[];
  image?: string;
  badge?: string;
  stat?: string;
  statDetail?: string;
}

interface IndustrySolutionsProps {
  eyebrow?: string;
  title?: string;
  description: string;
  items: IndustrySolution[];
  /** Optional pill shown beside the "Key Support Areas" label. */
  supportTag?: string;
}

/** Used when a page's industry entry does not name its own photograph. */
const fallbackImages = [
  "/images/nics/accounting-review.jpg",
  "/images/nics/blog-sales-review.jpg",
  "/images/nics/accounting-desk.jpg",
];

/**
 * Industry solutions as alternating editorial rows — a photograph on one side,
 * the narrative and support areas on the other — instead of a grid of boxes.
 */
export function IndustrySolutions({
  eyebrow = "Industry Focus",
  title = "View Solutions by Industry",
  description,
  items,
  supportTag,
}: IndustrySolutionsProps) {
  return (
    <section className="relative overflow-hidden border-t border-stone-200 bg-white py-20 lg:py-28">
      {/* Soft brand wash behind the rows */}
      <div className="pointer-events-none absolute -right-40 top-1/3 size-[520px] rounded-full bg-[#0056b3]/5 blur-[120px]" />

      <Container size="default" className="relative">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-12">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#0056b3]/20 bg-[#0056b3]/5 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[#0056b3]">
              <Sparkles className="size-3.5" />
              {eyebrow}
            </div>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#0b1524] sm:text-4xl lg:text-5xl">
              {title}
            </h2>
          </div>
          <p className="text-base leading-relaxed text-stone-600 sm:text-lg lg:col-span-5">{description}</p>
        </div>

        <div className="mt-14 space-y-20 lg:mt-20 lg:space-y-28">
          {items.map((ind, i) => {
            const IndIcon = ind.icon;
            const reversed = i % 2 === 1;
            const image = ind.image ?? fallbackImages[i % fallbackImages.length];
            return (
              <article
                key={ind.title}
                id={ind.anchor}
                className="group scroll-mt-32 grid items-center gap-10 lg:grid-cols-12 lg:gap-16"
              >
                {/* Photograph with offset frame */}
                <div className={`relative lg:col-span-6 ${reversed ? "lg:order-2" : ""}`}>
                  <div
                    aria-hidden="true"
                    className={`absolute inset-0 hidden translate-y-6 rounded-2xl border-2 border-[#0056b3]/15 lg:block ${
                      reversed ? "translate-x-6" : "-translate-x-6"
                    }`}
                  />
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-stone-100 shadow-xl">
                    <Image
                      src={image}
                      alt={ind.title}
                      fill
                      sizes="(min-width: 1024px) 45vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b1524]/70 via-transparent to-transparent" />

                    {ind.badge && (
                      <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold text-[#0b1524] shadow-xs backdrop-blur-md">
                        <span className="size-1.5 rounded-full bg-[#0056b3]" />
                        {ind.badge}
                      </span>
                    )}

                    {ind.stat && (
                      <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2 rounded-lg border border-white/20 bg-[#0b1524]/80 px-3.5 py-2 text-xs text-white backdrop-blur-md">
                        <span className="flex items-center gap-1.5 font-bold text-[#8bc7ff]">
                          <span className="size-1.5 animate-pulse rounded-full bg-[#8bc7ff]" />
                          {ind.stat}
                        </span>
                        {ind.statDetail && <span className="text-[11px] font-medium text-slate-300">{ind.statDetail}</span>}
                      </div>
                    )}
                  </div>
                </div>

                {/* Narrative */}
                <div className="lg:col-span-6">
                  <div className="flex items-center gap-4">
                    <span className="font-serif text-5xl font-bold tabular-nums leading-none text-[#0056b3]/20">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="h-px flex-1 bg-gradient-to-r from-stone-300 to-transparent" />
                    <span className="flex size-11 items-center justify-center rounded-full bg-[#0056b3]/10 text-[#0056b3] transition-colors duration-300 group-hover:bg-[#0056b3] group-hover:text-white">
                      <IndIcon className="size-5" />
                    </span>
                  </div>

                  <h3 className="mt-6 text-2xl font-bold tracking-tight text-[#0b1524] sm:text-3xl">{ind.title}</h3>
                  <p className="mt-4 text-base leading-relaxed text-stone-600">{ind.description}</p>

                  <div className="mt-8">
                    <div className="flex flex-wrap items-center gap-3">
                      <p className="text-xs font-bold uppercase tracking-wider text-stone-500">Key Support Areas</p>
                      {supportTag && (
                        <span className="rounded bg-[#0056b3]/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#0056b3]">
                          {supportTag}
                        </span>
                      )}
                    </div>
                    <ul className="mt-4 divide-y divide-stone-200 border-y border-stone-200">
                      {ind.benefits.map((b, j) => (
                        <li key={b} className="flex items-baseline gap-4 py-3.5 text-sm text-stone-700">
                          <span className="text-xs font-bold tabular-nums text-[#0056b3]">
                            {String(j + 1).padStart(2, "0")}
                          </span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href="/contact"
                    className="group/btn mt-8 inline-flex items-center gap-2 rounded-full bg-[#0b1524] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#0056b3]"
                  >
                    Explore industry workflows
                    <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
