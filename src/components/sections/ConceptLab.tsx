"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { TextReveal } from "@/components/ui/TextReveal";

const CONCEPTS = [
  {
    id: "avara",
    name: "AVARA",
    badge: "Concept",
    subtitle: "Avatar communication platform with AI personalities.",
    desc: "Exploration of real-time synthetic presence, dynamic voice synthesis, and emotive conversational interfaces.",
    image: "/images/concepts/avara/avara-mockup.png",
  },
  {
    id: "orbit",
    name: "ORBIT",
    badge: "Concept",
    subtitle: "A personal AI companion for tasks, memory and daily life.",
    desc: "A contextual memory system that proactively decomposes complex objectives and schedules workflows.",
    image: "/images/concepts/orbit/orbit-mockup.png",
  },
  {
    id: "nexus",
    name: "NEXUS",
    badge: "Concept",
    subtitle: "A connected lifestyle platform for services, identity and rewards.",
    desc: "Unified biometric digital identity and tokenized loyalty ecosystem across everyday web services.",
    image: "/images/concepts/nexus/nexus-mockup.png",
  },
];

export const ConceptLab: React.FC = () => {
  return (
    <section id="experiments" className="py-24 sm:py-32 relative overflow-hidden border-t border-[var(--line)]">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(0,242,254,0.12)_0%,transparent_70%)] blur-3xl pointer-events-none" />

      <div className="section-shell max-w-6xl mx-auto">
        
        {/* Header matching Reference Image */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="eyebrow-tag mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--cyan)]" />
              <span>CONCEPT LAB</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[var(--text)]">
              <TextReveal>The future is a playground.</TextReveal>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed mb-2 font-normal">
              Independent product concepts exploring what&apos;s next in AI, identity and connected experiences.
            </p>
            <div className="flex items-center gap-2 text-[10px] font-mono text-[var(--blue2)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--blue2)] animate-pulse" />
              <span>Speculative Prototypes · Non-Commercial Studies</span>
            </div>
          </div>
        </div>

        {/* 3 Concepts Cards Grid matching Reference Image */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {CONCEPTS.map((concept, idx) => (
            <motion.div
              key={concept.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="h-full"
            >
              <SpotlightCard className="p-6 h-full flex flex-col justify-between group">
                <div>
                  {/* Phone Mockup Frame */}
                  <div className="relative w-full aspect-[4/5] rounded-[24px] overflow-hidden bg-black/60 border border-[var(--line)] mb-6 flex items-center justify-center shadow-xl">
                    <Image
                      src={concept.image}
                      alt={`${concept.name} mobile concept preview`}
                      fill
                      className="object-contain p-2 group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Badge & Title */}
                  <div className="flex items-center justify-between mb-2">
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-[var(--blue)]/20 border border-[var(--blue)]/40 text-[var(--blue2)] text-[10px] font-mono font-bold tracking-wider">
                      {concept.badge}
                    </span>
                    <span className="w-6 h-6 rounded-full bg-[var(--surface2)] border border-[var(--line)] flex items-center justify-center text-[var(--muted)] group-hover:text-[var(--text)] group-hover:bg-[var(--blue)] transition-colors">
                      <ArrowUpRight size={12} />
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold tracking-tight text-[var(--text)] mb-2">
                    {concept.name}
                  </h3>

                  <p className="text-xs sm:text-sm font-medium text-[var(--muted)] mb-3 leading-snug">
                    {concept.subtitle}
                  </p>

                  <p className="text-xs text-[var(--muted)] leading-relaxed font-normal">
                    {concept.desc}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-[var(--line)]">
                  <Link
                    href="/experiments"
                    className="text-xs font-mono text-[var(--blue2)] hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <span>Explore Prototype</span>
                    <ArrowUpRight size={11} />
                  </Link>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
