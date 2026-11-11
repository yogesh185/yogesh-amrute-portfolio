"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";

interface ExperimentConcept {
  id: string;
  name: string;
  badge: string;
  subtitle: string;
  desc: string;
  image: string;
}

const EXPERIMENTS: ExperimentConcept[] = [
  {
    id: "avara",
    name: "AVARA",
    badge: "Concept",
    subtitle: "Avatar communication",
    desc: "A real-time AI companion for a more focused life.",
    image: "/images/concepts/avara/avara-mockup.png",
  },
  {
    id: "orbit",
    name: "ORBIT",
    badge: "Concept",
    subtitle: "Personal intelligence",
    desc: "A contextual memory system that proactively decomposes tasks and manages daily workflows.",
    image: "/images/concepts/orbit/orbit-mockup.png",
  },
  {
    id: "nexus",
    name: "NEXUS",
    badge: "Concept",
    subtitle: "Connected lifestyle",
    desc: "Unified biometric digital identity and tokenized loyalty ecosystem across everyday web services.",
    image: "/images/concepts/nexus/nexus-mockup.png",
  },
];

export const ConceptLab: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const current = EXPERIMENTS[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % EXPERIMENTS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + EXPERIMENTS.length) % EXPERIMENTS.length);
  };

  return (
    <section id="experiments" className="py-20 relative overflow-hidden">
      <div className="section-shell max-w-xl mx-auto flex flex-col items-center text-center">
        {/* Title & Subtitle matching Screen 6 */}
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text)] mb-2">
            Experiments
          </h2>
          <p className="text-xs sm:text-sm text-[var(--muted)] max-w-md mx-auto">
            High-potential ideas I&apos;m actively exploring and prototyping.
          </p>
        </div>

        {/* Experiment Card matching Screen 6 */}
        <div className="w-full max-w-[340px] sm:max-w-[380px] rounded-[32px] overflow-hidden border border-[var(--line)] bg-[var(--surface)] p-5 shadow-2xl relative">
          {/* Avatar Visual with glow */}
          <div className="relative w-full aspect-[4/5] rounded-[24px] overflow-hidden bg-black/40 mb-6 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4 }}
                className="relative w-full h-full"
              >
                <Image
                  src={current.image}
                  alt={current.name}
                  fill
                  className="object-cover object-center"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Badge: Concept */}
          <div className="inline-block px-3 py-1 rounded-full bg-[var(--blue)] text-white text-[10px] font-bold font-mono tracking-wider mb-2">
            {current.badge}
          </div>

          {/* Name & Desc */}
          <h3 className="text-2xl font-bold tracking-tight text-[var(--text)] mb-2">
            {current.name}
          </h3>

          <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed mb-6 px-2">
            {current.desc}
          </p>

          {/* Pagination Carousel Dots matching Screen 6: • • • */}
          <div className="flex items-center justify-center gap-2 mb-2">
            {EXPERIMENTS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentIndex === idx
                    ? "w-6 bg-[var(--blue)]"
                    : "bg-[var(--line)] hover:bg-[var(--muted)]"
                }`}
                aria-label={`Go to concept ${idx + 1}`}
              />
            ))}
          </div>

          {/* Next / Prev Controls */}
          <div className="flex items-center justify-between pt-4 border-t border-[var(--line)] mt-4">
            <button
              onClick={handlePrev}
              className="text-xs text-[var(--muted)] hover:text-[var(--text)] flex items-center gap-1 font-mono transition-colors"
            >
              <ArrowLeft size={13} />
              <span>Prev</span>
            </button>
            <span className="font-mono text-[10px] text-[var(--muted)]">
              0{currentIndex + 1} / 0{EXPERIMENTS.length}
            </span>
            <button
              onClick={handleNext}
              className="text-xs text-[var(--blue2)] hover:text-white flex items-center gap-1 font-mono transition-colors font-bold"
            >
              <span>Next</span>
              <ArrowRight size={13} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
