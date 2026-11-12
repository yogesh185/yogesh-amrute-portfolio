"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Compass, Code2, BrainCircuit } from "lucide-react";
import { TextReveal } from "@/components/ui/TextReveal";
import { GlassRibbon } from "@/components/ui/GlassRibbon";

export const IntroSection: React.FC = () => {
  return (
    <section id="philosophy" className="py-24 sm:py-32 relative overflow-hidden border-t border-[var(--line)]">
      {/* Subtle Ambient Connector Ribbon */}
      <GlassRibbon variant="connector" className="absolute top-0 inset-x-0 -translate-y-1/2 opacity-40" />

      <div className="section-shell max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* Left Column: Monumental Philosophy Headline */}
          <div className="lg:col-span-7">
            <div className="eyebrow-tag mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--blue2)]" />
              <span>PHILOSOPHY & CRAFT</span>
            </div>

            <h2 className="font-sans text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[var(--text)] leading-[1.08] mb-4">
              <TextReveal delay={0.1}>Curiosity creates.</TextReveal>
              <TextReveal delay={0.2}>
                <span className="font-serif italic font-normal text-[var(--blue2)]">
                  Technology brings it to life.
                </span>
              </TextReveal>
            </h2>
          </div>

          {/* Right Column: Statement & Direct Pathway */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <p className="text-base sm:text-lg text-[var(--muted)] font-normal leading-relaxed">
              At the intersection of engineering, creativity and entrepreneurship, I build products, experiment with new ideas and turn concepts into real experiences.
            </p>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--text)] hover:text-[var(--blue2)] transition-colors group"
              >
                <span>Read my philosophy</span>
                <span className="w-7 h-7 rounded-full bg-[var(--surface)] border border-[var(--line)] group-hover:border-[var(--blue2)] group-hover:bg-[var(--blue)] group-hover:text-white flex items-center justify-center transition-all">
                  <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
