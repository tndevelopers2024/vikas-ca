import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, type LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";

export interface CatalogueService {
  id: string;
  name: string;
  tag: string;
  icon: LucideIcon;
  description: string;
  points: string[];
  image?: string;
  imageAlt?: string;
}

interface ServiceCatalogueProps {
  eyebrow?: string;
  title: string;
  description: string;
  items: CatalogueService[];
}

/**
 * A page's services as a catalogue: a sticky numbered index on the left that
 * jumps to each service, and the services themselves as editorial entries on
 * the right — replacing the uniform card grid.
 */
export function ServiceCatalogue({ eyebrow = "What We Provide", title, description, items }: ServiceCatalogueProps) {
  return (
    <section id="services" className="scroll-mt-20 border-t border-stone-200 bg-[#fbfbfa] py-20 lg:py-28">
      <Container size="default">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-12">
          <div className="lg:col-span-7">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0056b3]">{eyebrow}</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0b1524] sm:text-4xl lg:text-5xl">{title}</h2>
          </div>
          <p className="text-base leading-relaxed text-stone-600 lg:col-span-5">{description}</p>
        </div>

        <div className="mt-14 grid gap-12 lg:mt-16 lg:grid-cols-12 lg:gap-16">
          {/* Sticky service index */}
          <aside className="lg:col-span-4">
            <nav aria-label={`${title} index`} className="lg:sticky lg:top-32">
              <p className="text-xs font-bold uppercase tracking-wider text-stone-400">
                {items.length} services
              </p>
              <ol className="mt-4 border-l-2 border-stone-200">
                {items.map((item, i) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="group -ml-0.5 flex items-baseline gap-3 border-l-2 border-transparent py-2.5 pl-5 transition-colors hover:border-[#0056b3]"
                    >
                      <span className="text-xs font-bold tabular-nums text-stone-400 transition-colors group-hover:text-[#0056b3]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm font-semibold text-stone-700 transition-colors group-hover:text-[#0056b3]">
                        {item.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          {/* Service entries */}
          <div className="lg:col-span-8">
            {items.map((item, i) => {
              const ItemIcon = item.icon;
              return (
                <article
                  key={item.id}
                  id={item.id}
                  className="group scroll-mt-32 border-t border-stone-200 py-12 first:border-t-0 first:pt-0 last:pb-0"
                >
                  <div className={item.image ? "grid gap-8 md:grid-cols-12 md:gap-10" : ""}>
                    {item.image && (
                      <div className="md:col-span-5">
                        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-stone-100 shadow-lg">
                          <Image
                            src={item.image}
                            alt={item.imageAlt ?? item.name}
                            fill
                            sizes="(min-width: 1024px) 26vw, (min-width: 768px) 40vw, 100vw"
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        </div>
                      </div>
                    )}

                    <div className={item.image ? "md:col-span-7" : ""}>
                      <div className="flex flex-wrap items-center gap-4">
                        <span className="font-serif text-4xl font-bold tabular-nums leading-none text-[#0056b3]/20 sm:text-5xl">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="flex size-11 items-center justify-center rounded-full bg-[#0056b3]/10 text-[#0056b3] transition-colors duration-300 group-hover:bg-[#0056b3] group-hover:text-white">
                          <ItemIcon className="size-5" />
                        </span>
                        <span className="rounded-full border border-stone-200 bg-white px-3 py-1 text-xs font-semibold text-stone-600">
                          {item.tag}
                        </span>
                      </div>

                      <h3 className="mt-5 text-2xl font-bold tracking-tight text-[#0b1524] transition-colors group-hover:text-[#0056b3] sm:text-3xl">
                        {item.name}
                      </h3>
                      <p className="mt-4 max-w-3xl text-base leading-relaxed text-stone-600">{item.description}</p>

                      <p className="mt-7 text-xs font-bold uppercase tracking-wider text-stone-400">Key Capabilities</p>
                      <ul className={`mt-3 grid gap-x-8 gap-y-3 ${item.image ? "" : "sm:grid-cols-2"}`}>
                        {item.points.map((pt) => (
                          <li key={pt} className="flex items-start gap-2.5 text-sm text-stone-600">
                            <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[#0056b3]" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>

                      <Link
                        href="/contact"
                        className="mt-7 inline-flex items-center gap-1.5 text-sm font-bold text-[#0056b3] transition-colors hover:text-[#004494]"
                      >
                        Enquire about {item.name}
                        <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
