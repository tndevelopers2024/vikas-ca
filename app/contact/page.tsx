import type { Metadata } from "next";
import { Header } from "@/components/navigation/Header";
import { ContactView } from "@/components/sections/ContactView";
import { Footer } from "@/components/sections/Footer";
import { FloatingActions } from "@/components/ui/FloatingActions";

export const metadata: Metadata = {
  title: "Contact NICS | Talk to Our Practice Advisory Team",
  description:
    "Get in touch with NICS. Request a practice consultation for offshore accounting, SMSF, paraplanning, and back-office delivery support from our Chennai head office.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-[#0f172a]">
      <Header />
      <main>
        <ContactView />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}

