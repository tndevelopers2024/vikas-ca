import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export interface ServiceModel {
  number: string;
  title: string;
  tag: string;
  description: string;
  highlights: string[];
  /** Optional column photograph and headline figure. */
  image?: string;
  stat?: string;
  statDetail?: string;
}

interface DeliveryModelColumnsProps {
  eyebrow: string;
  title: string;
  intro: string;
  items: ServiceModel[];
}

/**
 * The dark ground stays — it is the one strong contrast beat on these pages —
 * but the four translucent cards become four columns separated by hairlines.
 * The numeral does the work the card border was doing.
 */
export function DeliveryModelColumns({
  eyebrow,
  title,
  intro,
  items,
}: DeliveryModelColumnsProps) {
  return (
    <section className="border-t border-stone-200 bg-[#0b1524] py-12 text-white lg:py-16">
      <Container size="default">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={intro}
          align="split"
          dark
        />

        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-y-0 lg:divide-x lg:divide-white/15">
          {items.map((model, index) => (
            <div
              key={model.title}
              className={`flex flex-col ${index === 0 ? "lg:pr-8" : "lg:px-8"} ${
                index === items.length - 1 ? "lg:pr-0" : ""
              }`}
            >
              {model.image && (
                <div className="relative mb-5 aspect-[16/10] w-full overflow-hidden border border-white/15">
                  <Image
                    src={model.image}
                    alt={`${model.title} - ${model.tag}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 25vw"
                  />
                </div>
              )}

              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-black tabular-nums text-[#8bc7ff]">
                  {model.number}
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                  {model.tag}
                </span>
              </div>

              <h3 className="mt-4 text-lg font-bold text-white">{model.title}</h3>

              <p className="mt-3 text-[13px] leading-relaxed text-slate-300">
                {model.description}
              </p>

              {model.stat && (
                <p className="mt-4 border-l-2 border-[#8bc7ff] pl-3 text-[12px] leading-snug">
                  <span className="font-bold text-white">{model.stat}</span>
                  {model.statDetail && (
                    <span className="block text-slate-400">{model.statDetail}</span>
                  )}
                </p>
              )}

              <ul className="mt-5 space-y-2.5 border-t border-white/15 pt-5">
                {model.highlights.map((hl) => (
                  <li key={hl} className="flex gap-2.5 text-[12px] leading-relaxed text-slate-300">
                    <span className="mt-2 h-px w-3 shrink-0 bg-[#8bc7ff]" aria-hidden="true" />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="group mt-auto inline-flex items-center gap-1.5 pt-6 text-xs font-bold uppercase tracking-wider text-[#8bc7ff] transition-colors hover:text-white"
              >
                Discuss this model
                <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
