"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, BrainCircuit, Layers3, Target, ArrowRight } from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { TextReveal } from "@/components/ui/TextReveal";

const CAPABILITIES = [
  {
    title: "Engineering",
    subtitle: "Full-stack apps, APIs and architecture.",
    desc: "Production Next.js, React 19, TypeScript, scalable backends, database schema design and reliable cloud architectures.",
    icon: Code2,
    tags: ["Full-Stack", "Architecture", "APIs"],
  },
  {
    title: "AI & Intelligence",
    subtitle: "LLM apps, RAG and automation.",
    desc: "Building practical agentic workflows, conversational retrieval systems, hybrid vector search and intelligent data extraction.",
    icon: BrainCircuit,
    tags: ["LLM Apps", "RAG", "Automation"],
  },
  {
    title: "Digital Experiences",
    subtitle: "Interfaces, motion and commerce.",
    desc: "Designing tactile, high-performance web applications with fluid physics, kinetic typography, and accessible design systems.",
    icon: Layers3,
    tags: ["Interfaces", "Motion", "Commerce"],
  },
  {
    title: "Product Thinking",
    subtitle: "Strategy, prototyping and execution.",
    desc: "Synthesizing market opportunity, rapid prototyping, iterative user feedback and scalable technical roadmaps.",
    icon: Target,
    tags: ["Strategy", "Prototyping", "Execution"],
  },
];

export const CapabilitiesSection: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden border-t border-[var(--line)]">
      <div className="section-shell max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="eyebrow-tag mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--blue2)]" />
              <span>WHAT I DO</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[var(--text)]">
              <TextReveal>From idea to real product.</TextReveal>
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-[var(--muted)] leading-relaxed font-normal">
            Moving seamlessly between low-level system design and high-touch creative execution to build resilient digital products.
          </p>
        </div>

        {/* 4-Column Architectural Grid matching Reference Image */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CAPABILITIES.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="h-full"
              >
                <SpotlightCard className="p-6 sm:p-7 h-full flex flex-col justify-between group">
                  <div>
                    {/* Icon & Category */}
                    <div className="w-12 h-12 rounded-2xl bg-[var(--surface2)] border border-[var(--line)] flex items-center justify-center text-[var(--blue2)] mb-6 group-hover:scale-110 group-hover:bg-[var(--blue)] group-hover:text-white transition-all duration-300">
                      <Icon size={20} />
                    </div>

                    <h3 className="text-xl font-bold text-[var(--text)] mb-2 tracking-tight">
                      {cap.title}
                    </h3>

                    <p className="text-xs sm:text-sm font-medium text-[var(--blue2)] mb-3 leading-snug">
                      {cap.subtitle}
                    </p>

                    <p className="text-xs text-[var(--muted)] leading-relaxed mb-6 font-normal">
                      {cap.desc}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="pt-4 border-t border-[var(--line)] flex flex-wrap gap-1.5">
                    {cap.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-[var(--surface2)] text-[var(--muted)] border border-[var(--line)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
