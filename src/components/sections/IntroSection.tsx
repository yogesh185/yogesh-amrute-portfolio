"use client";

import React from "react";
import { motion } from "framer-motion";
import { Compass, Lightbulb, Code2, Rocket } from "lucide-react";

export const IntroSection: React.FC = () => {
  return (
    <section className="py-24 border-y border-[var(--line)] relative overflow-hidden bg-[color-mix(in_srgb,var(--bg2)_60%,var(--bg))]">
      <div className="section-shell grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
        {/* Left Column: Context Tag & Philosophy Statement */}
        <div className="lg:col-span-8">
          <div className="eyebrow-tag mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--blue2)]" />
            <span>02 / CONTEXT & PHILOSOPHY</span>
          </div>

          <h2 className="font-sans text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[var(--text)] leading-[1.08] mb-6">
            Curiosity creates. <br />
            <span className="font-serif italic font-normal text-[var(--blue2)]">
              Technology brings it to life.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[var(--muted)] font-normal leading-relaxed max-w-2xl">
            I don&apos;t believe in siloing design, engineering, and product thinking. The most compelling digital experiences are born when high-order technical architecture is met with editorial finesse, tactile motion, and a relentless focus on human utility.
          </p>
        </div>

        {/* Right Column: Three Interconnected Pillars */}
        <div className="lg:col-span-4 flex flex-col gap-6 text-sm text-[var(--muted)] border-l-0 lg:border-l border-[var(--line)] lg:pl-8">
          <div className="flex items-start gap-4">
            <div className="w-9 h-9 rounded-xl bg-[var(--surface)] border border-[var(--line)] flex items-center justify-center shrink-0 text-[var(--blue2)]">
              <Code2 size={18} />
            </div>
            <div>
              <h4 className="font-semibold text-[var(--text)] mb-1">
                Engineering Craft
              </h4>
              <p className="text-xs leading-relaxed">
                Clean, typed architectures built for real-world resilience, performance, and scale.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-9 h-9 rounded-xl bg-[var(--surface)] border border-[var(--line)] flex items-center justify-center shrink-0 text-[var(--lime)]">
              <Lightbulb size={18} />
            </div>
            <div>
              <h4 className="font-semibold text-[var(--text)] mb-1">
                Emerging Intelligence
              </h4>
              <p className="text-xs leading-relaxed">
                Applying modern LLMs, RAG retrieval, and vector architectures to unlock practical capabilities.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-9 h-9 rounded-xl bg-[var(--surface)] border border-[var(--line)] flex items-center justify-center shrink-0 text-[var(--blue)]">
              <Rocket size={18} />
            </div>
            <div>
              <h4 className="font-semibold text-[var(--text)] mb-1">
                Venture Thinking
              </h4>
              <p className="text-xs leading-relaxed">
                Founding YARVO.agency and treating every build as a sustainable, living product.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
