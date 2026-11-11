import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/navigation/Navbar";
import { BeyondTechSection } from "@/components/sections/BeyondTechSection";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Beyond Tech // Yogesh Amrute — Music, Judo, Football, Chess",
  description:
    "Explore Yogesh Amrute's authentic life beyond the screen: acoustic guitar, competitive Judo tournament discipline, football goalkeeping, and strategic chess.",
};

export default function BeyondTechPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)] transition-colors duration-500">
      <Navbar />
      <div className="pt-6 sm:pt-10">
        <BeyondTechSection />
      </div>
      <Footer />
    </main>
  );
}
