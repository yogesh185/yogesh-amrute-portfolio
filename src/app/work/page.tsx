import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/navigation/Navbar";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Selected Work // Yogesh Amrute — Full-Stack & AI Systems",
  description:
    "Explore production platforms, client websites, and venture architectures engineered by Yogesh Amrute.",
};

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <Navbar />
      <div className="pt-12">
        <SelectedWork />
      </div>
      <Footer />
    </main>
  );
}
