import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, type LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";

export interface ExploreItem {
  title: string;
  icon: LucideIcon;
  blurb: string;
  href: string | null;
}

interface ExploreFurtherProps {
  eyebrowIcon: LucideIcon;
  title: string;
  description: string;
  items: ExploreItem[];
  /** The page this section sits on — its panel is marked "On this page". */
  currentHref: string;
  /** One photograph per item, in the same order as `items`. */
  images?: string[];
}

const fallbackImages = [
  "/images/nics/home-boardroom.jpg",
  "/images/nics/blog-video-call.jpg",
  "/images/nics/accounting-analyst.jpg",
  "/images/nics/how-it-works-presentation.jpg",
];

/**
 * The "Explore Further" cluster as a row of tall photo panels. On desktop the
 * hovered panel widens to reveal more of its photograph; on mobile they stack.
 */
export function ExploreFurther({
  eyebrowIcon: EyebrowIcon,
  title,
  description,
  items,
  currentHref,
  images = fallbackImages,
}: ExploreFurtherProps) {
  return (
    <section className="relative overflow-hidden border-t border-stone-200 bg-[#0b1524] py-20 text-white lg:py-28">
      <div className="pointer-events-none absolute -left-40 bottom-0 size-[520px] rounded-full bg-[#0056b3]/20 blur-[130px]" />

      <Container size="default" className="relative">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-12">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#8bc7ff]">
              <EyebrowIcon className="size-3.5" />
              Explore Further
            </div>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">{title}</h2>
          </div>
          <p className="text-base leading-relaxed text-slate-300 sm:text-lg lg:col-span-5">{description}</p>
        </div>

        <ul className="mt-14 flex flex-col gap-4 lg:h-[480px] lg:flex-row">
          {items.map((item, i) => {
            const ItemIcon = item.icon;
            const isCurrent = item.href === currentHref;
            const isLink = Boolean(item.href) && !isCurrent;

            const panel = (
              <>
                <Image
                  src={images[i % images.length]}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover/panel:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1524] via-[#0b1524]/75 to-[#0b1524]/25 transition-colors duration-500 group-hover/panel:via-[#0b1524]/60" />
                {isCurrent && <div className="absolute inset-0 rounded-2xl ring-2 ring-inset ring-[#8bc7ff]/70" />}

                {/* Top row: index and status */}
                <div className="absolute left-6 right-6 top-6 flex items-center justify-between">
                  <span className="font-serif text-4xl font-bold leading-none text-white/35">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {isCurrent && (
                    <span className="rounded-full bg-[#8bc7ff] px-3 py-1 text-[11px] font-bold text-[#0b1524]">
                      On this page
                    </span>
                  )}
                  {!item.href && (
                    <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold text-slate-200 backdrop-blur-md">
                      Coming soon
                    </span>
                  )}
                  {isLink && (
                    <span className="flex size-10 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-md transition-colors duration-300 group-hover/panel:border-[#8bc7ff] group-hover/panel:bg-[#8bc7ff] group-hover/panel:text-[#0b1524]">
                      <ArrowUpRight className="size-4" />
                    </span>
                  )}
                </div>

                {/* Bottom: icon, title, blurb */}
                <div className="relative mt-auto p-6 lg:p-7">
                  <span className="flex size-11 items-center justify-center rounded-full bg-[#8bc7ff]/15 text-[#8bc7ff] ring-1 ring-[#8bc7ff]/30">
                    <ItemIcon className="size-5" />
                  </span>
                  <h3 className="mt-4 text-2xl font-bold text-white">{item.title}</h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-slate-300">{item.blurb}</p>
                </div>
              </>
            );

            const panelClass =
              "group/panel relative flex h-full min-h-[260px] overflow-hidden rounded-2xl bg-[#15243a]";

            return (
              <li
                key={item.title}
                className={`lg:min-w-0 lg:transition-[flex-grow] lg:duration-500 lg:ease-out lg:hover:flex-[2.2] ${
                  isCurrent ? "lg:flex-[1.5]" : "lg:flex-1"
                }`}
              >
                {isLink ? (
                  <Link href={item.href!} className={panelClass}>
                    {panel}
                  </Link>
                ) : (
                  <div className={panelClass}>{panel}</div>
                )}
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
