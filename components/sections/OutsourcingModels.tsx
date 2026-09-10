import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Zap } from "lucide-react";
import { Container } from "@/components/ui/Container";

export interface OutsourcingModel {
  number: string;
  title: string;
  tag: string;
  description: string;
  highlights: string[];
  image?: string;
  stat?: string;
  statDetail?: string;
}

interface OutsourcingModelsProps {
  eyebrow?: string;
  title?: string;
  description: string;
  models: OutsourcingModel[];
  /** Optional label shown above each model's highlights. */
  highlightsLabel?: string;
}

/** Used when a page's model entry does not name its own photograph. */
const fallbackImages = [
  "/images/nics/build-team-meeting.jpg",
  "/images/nics/administrative-partners.jpg",
  "/images/nics/discover-workstation.jpg",
  "/images/nics/who-we-are-unity.jpg",
];

/**
 * The four outsourcing models as stops on one connected rail — each stop a
 * photo node — rather than four identical boxes. Horizontal on desktop,
 * vertical on smaller screens.
 */
export function OutsourcingModels({
  eyebrow = "Delivery Flexibility",
  title = "Outsourcing Models",
  description,
  models,
  highlightsLabel,
}: OutsourcingModelsProps) {
  return (
    <section className="relative overflow-hidden border-t border-stone-800 bg-[#0b1524] py-20 text-white lg:py-28">
      <div className="pointer-events-none absolute -top-40 left-1/2 size-[650px] -translate-x-1/2 rounded-full bg-[#0056b3]/20 blur-[130px]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]" />

      <Container size="default" className="relative">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-12">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#8bc7ff]/30 bg-[#8bc7ff]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[#8bc7ff]">
              <Zap className="size-3.5" />
              {eyebrow}
            </div>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">{title}</h2>
          </div>
          <p className="text-base leading-relaxed text-slate-300 sm:text-lg lg:col-span-5">{description}</p>
        </div>

        <ol className="relative mt-16 grid gap-14 lg:mt-20 lg:grid-cols-4 lg:gap-10">
          {/* Connecting rail — horizontal through the nodes on desktop, vertical on mobile */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-10 right-10 top-10 hidden h-px bg-gradient-to-r from-[#8bc7ff]/70 via-[#8bc7ff]/30 to-[#0056b3]/70 lg:block"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-6 left-10 top-6 w-px bg-gradient-to-b from-[#8bc7ff]/60 via-[#8bc7ff]/25 to-transparent lg:hidden"
          />

          {models.map((model, i) => (
            <li key={model.title} className="group relative pl-28 lg:pl-0">
              {/* Photo node */}
              <div className="absolute left-0 top-0 lg:relative">
                <div className="relative size-20 rounded-full bg-gradient-to-br from-[#8bc7ff] to-[#0056b3] p-[3px] shadow-[0_0_40px_rgba(0,86,179,0.45)] transition-transform duration-300 group-hover:scale-110">
                  <div className="relative size-full overflow-hidden rounded-full ring-4 ring-[#0b1524]">
                    <Image
                      src={model.image ?? fallbackImages[i % fallbackImages.length]}
                      alt={model.title}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>
                  <span className="absolute -bottom-1 -right-1 flex size-8 items-center justify-center rounded-full bg-[#8bc7ff] font-mono text-[11px] font-black text-[#0b1524] ring-4 ring-[#0b1524]">
                    {model.number}
                  </span>
                </div>
              </div>

              <div className="lg:mt-8">
                <span className="inline-block rounded-full border border-white/15 bg-white/5 px-2.5 py-0.5 text-[11px] font-semibold tracking-wide text-slate-300">
                  {model.tag}
                </span>
                <h3 className="mt-3 text-xl font-bold leading-snug text-white transition-colors group-hover:text-[#8bc7ff]">
                  {model.title}
                </h3>

                {model.stat && (
                  <p className="mt-2 text-sm font-semibold text-[#8bc7ff]">
                    {model.stat}
                    {model.statDetail && <span className="font-normal text-slate-400"> · {model.statDetail}</span>}
                  </p>
                )}

                <p className="mt-3 text-sm leading-relaxed text-slate-300">{model.description}</p>

                {highlightsLabel && (
                  <p className="mt-5 text-[10px] font-bold uppercase tracking-wider text-slate-400">{highlightsLabel}</p>
                )}
                <ul className={`${highlightsLabel ? "mt-2.5" : "mt-5"} space-y-2.5 border-l border-white/10 pl-4`}>
                  {model.highlights.map((hl) => (
                    <li key={hl} className="flex items-start gap-2 text-[13px] text-slate-300">
                      <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-[#8bc7ff]" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className="group/btn mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-[#8bc7ff] transition-colors hover:text-white"
                >
                  Discuss this model
                  <ArrowRight className="size-3.5 transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
