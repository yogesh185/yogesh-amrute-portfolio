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
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)] transition-colors duration-500">
      {/* 01 Navigation */}
      <Navbar />

      {/* 01 Cinematic Hero Section (Uncontainerized portrait & cobalt ribbon) */}
      <Hero />

      {/* Quiet Ambient Availability Strip */}
      <div className="border-y border-[var(--line)] py-3.5 bg-[var(--surface)]/20 backdrop-blur-md">
        <div className="section-shell flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[var(--muted)]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[var(--lime)] animate-ping" />
            <span className="text-[var(--text)] font-semibold">STATUS:</span>
            <span>OPEN TO SELECTED COLLABORATIONS</span>
          </div>
          <div className="hidden sm:flex items-center gap-6">
            <span>BHOPAL, INDIA</span>
            <span>·</span>
            <span>UTC+5:30 IST</span>
            <span>·</span>
            <span>FOUNDER @ YARVO.AGENCY</span>
          </div>
        </div>
      </div>

      {/* 02 Editorial Intro: "Curiosity creates. Technology brings it to life." */}
      <IntroSection />

      {/* 03 Selected Work: Real Projects (Intrust India, Aadi Seeds, YARVO, Doc AI) */}
      <SelectedWork />

      {/* 04 Capabilities & Disciplines (Engineering, AI, Digital Experiences, Product) */}
      <CapabilitiesSection />

      {/* 05 Concept Lab: Speculative AI Prototypes (AVARA, ORBIT, NEXUS) */}
      <ConceptLab />

      {/* 06 Studio Venture: YARVO.agency with 3D Crystal */}
      <StudioSection />

      {/* 07 About Yogesh: Profile Portrait, Philosophy & Stats */}
      <AboutSection />

      {/* 08 Life Beyond the Screen: 4 Authentic Disciplines (Music, Judo, Football, Chess) */}
      <BeyondTechSection />

      {/* 09 Contact: "Let's Build Together" with Mountain Dusk Artwork */}
      <ContactSection />

      {/* 10 Minimal Editorial Footer */}
      <Footer />
    </main>
  );
}
