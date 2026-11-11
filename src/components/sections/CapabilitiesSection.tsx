"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, BrainCircuit, Layers3, Target, ArrowRight } from "lucide-react";
import { CAPABILITIES } from "@/data/portfolioData";

const ICONS = [Code2, BrainCircuit, Layers3, Target];

export const CapabilitiesSection: React.FC = () => {
  return (
    <section className="py-28 border-t border-[var(--line)] relative bg-[color-mix(in_srgb,var(--bg2)_35%,var(--bg))]">
      <div className="section-shell">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="eyebrow-tag mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--blue2)]" />
              <span>DISCIPLINES & CRAFT</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-[var(--text)]">
              More than{" "}
              <em className="font-serif italic font-normal text-[var(--blue2)]">
                code.
              </em>
            </h2>
          </div>
          <p className="max-w-md text-sm text-[var(--muted)] leading-relaxed">
            Moving seamlessly between low-level system design and high-touch creative execution. It&apos;s not about picking tools—it&apos;s about mastering the holistic craft of shipping digital products that make a measurable difference.
          </p>
        </div>

        {/* 4 Capabilities Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CAPABILITIES.map((cap, idx) => {
            const Icon = ICONS[idx % ICONS.length];
            return (
              <motion.div
                key={cap.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group p-8 rounded-[24px] border border-[var(--line)] bg-[var(--surface)] hover:border-[var(--blue2)] transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-[var(--glow)]"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-xs text-[var(--blue2)] font-bold">
                      {cap.number} // {cap.title.toUpperCase()}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[var(--surface2)] border border-[var(--line)] flex items-center justify-center text-[var(--blue2)] group-hover:scale-110 group-hover:bg-[var(--blue)] group-hover:text-white transition-all">
                      <Icon size={18} />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-[var(--text)] mb-3">
                    {cap.subtitle}
                  </h3>

                  <p className="text-xs text-[var(--muted)] leading-relaxed mb-8">
                    {cap.desc}
                  </p>
                </div>

                <div>
                  <div className="pt-4 border-t border-[var(--line)] flex flex-wrap gap-1.5">
                    {cap.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-[var(--surface2)] text-[var(--muted)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
