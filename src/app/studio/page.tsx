import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/navigation/Navbar";
import { StudioSection } from "@/components/sections/StudioSection";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "YARVO.agency // Creative Technology Studio by Yogesh Amrute",
  description:
    "An independent creative technology studio combining strategy, design, engineering, and AI to build digital products.",
};

export default function StudioPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <Navbar />
      <div className="pt-12">
        <StudioSection />
      </div>
      <Footer />
    </main>
  );
}
