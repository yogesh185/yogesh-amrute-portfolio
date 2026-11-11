import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/navigation/Navbar";
import { ConceptLab } from "@/components/sections/ConceptLab";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Experiments & Concept Lab // Yogesh Amrute",
  description:
    "Speculative interaction prototypes, AI avatars, ambient intelligence, and decentralized identity concepts.",
};

export default function ExperimentsPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <Navbar />
      <div className="pt-12">
        <ConceptLab />
      </div>
      <Footer />
    </main>
  );
}
