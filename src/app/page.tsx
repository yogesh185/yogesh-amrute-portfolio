"use client";

import React from "react";
import { Navbar } from "@/components/navigation/Navbar";
import { Hero } from "@/components/hero/Hero";
import { IntroSection } from "@/components/sections/IntroSection";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { CapabilitiesSection } from "@/components/sections/CapabilitiesSection";
import { ConceptLab } from "@/components/sections/ConceptLab";
import { StudioSection } from "@/components/sections/StudioSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { BeyondTechSection } from "@/components/sections/BeyondTechSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)] transition-colors duration-500 overflow-x-hidden selection:bg-[var(--blue)] selection:text-white">
      {/* 00 Floating Navigation Capsule */}
      <Navbar />

      {/* 01 Chapter 01: Hero — The Signature Scene */}
      <Hero />

      {/* 02 Chapter 02: Philosophy — Curiosity creates. Technology brings it to life. */}
      <IntroSection />

      {/* 03 Chapter 03: Selected Work — Things I've built. */}
      <SelectedWork />

      {/* 04 Chapter 04: Capabilities — From idea to real product. */}
      <CapabilitiesSection />

      {/* 05 Chapter 05: Concept Lab — The future is a playground. */}
      <ConceptLab />

      {/* 06 Chapter 06: YARVO Studio — Building something of my own. */}
      <StudioSection />

      {/* 07 Chapter 07: About Me — A builder, a creator and a curious mind. */}
      <AboutSection />

      {/* 08 Chapter 08: Life Beyond Technology — A life beyond the screen. */}
      <BeyondTechSection />

      {/* 09 Chapter 09: Closing Scene — Let's build something meaningful. */}
      <ContactSection />

      {/* 10 Minimal Editorial Footer */}
      <Footer />
    </main>
  );
}
