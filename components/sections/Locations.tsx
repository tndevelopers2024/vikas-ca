import React from "react";
import { locationsData } from "@/data/locationsData";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { OfficeCard } from "@/components/ui/OfficeCard";

/**
 * Two offices do not justify a tab explorer: the list column sat mostly empty
 * and hid one office behind an interaction. Each office is now a complete card,
 * readable at a glance and side by side. The grid stays correct if a third
 * office is added later.
 */
export function Locations() {
  return (
    <section id="locations" className="bg-[#f7f6f2] py-12 lg:py-16 border-b border-[#e6e4dc]">
      <Container size="default">
        <SectionHeading
          eyebrow="Core Delivery Centre"
          title="NICS Delivery Centre"
          description="Our India-based core delivery capability operating with disciplined processes and ISO/IEC 27001 security."
          align="split"
          action={
            <ArrowLink href="#contact" variant="blue" size="sm">
              Arrange an introduction
            </ArrowLink>
          }
        />

        <div className="mt-8 max-w-3xl mx-auto">
          {locationsData.map((loc) => (
            <OfficeCard
              key={loc.id}
              office={loc}
              compact
              footer={
                <ArrowLink href="#contact" variant="navy" size="md">
                  Contact the {loc.name} team
                </ArrowLink>
              }
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
