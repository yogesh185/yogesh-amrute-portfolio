"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check, ArrowUpRight } from "lucide-react";
import { TextReveal } from "@/components/ui/TextReveal";

interface LifeActivity {
  id: string;
  category: string;
  title: string;
  image: string;
  desc: string;
  detail: string;
  authenticNote?: string;
}

const ACTIVITIES: LifeActivity[] = [
  {
    id: "music",
    category: "Music",
    title: "Acoustic Guitar",
    image: "/images/personal/music/music-guitar.png",
    desc: "Fingerstyle & acoustic rhythm guitar exploration.",
    detail: "Practicing fingerpicking patterns and acoustic melodies. Music offers an essential creative counterbalance to writing code and structuring databases.",
  },
  {
    id: "martial-arts",
    category: "Martial Arts",
    title: "Tournament Judo",
    image: "/images/personal/martial-arts/martial-arts-original.png",
    desc: "Competitive Judo practice & tournament discipline.",
    detail: "Judo instills mental discipline, balance, reading opponents' momentum, and composure under pressure—qualities that directly translate to engineering leadership.",
    authenticNote: "Authentic Tournament Photograph",
  },
  {
    id: "sports",
    category: "Sports",
    title: "Football & Goalkeeping",
    image: "/images/personal/sports/football-goalkeeper.png",
    desc: "Goalkeeping reflexes & high-focus defense.",
    detail: "Playing as goalkeeper requires acute peripheral awareness, tactical anticipation, and rapid decision-making with zero margin for error.",
  },
  {
    id: "chess",
    category: "Chess",
    title: "Tactical Chess",
    image: "/images/personal/chess/chess.png",
    desc: "Positional play & long-range calculation.",
    detail: "Chess is pure analytical problem-solving. Evaluating branching possibilities and maintaining spatial tension mirrors software architecture design.",
  },
  {
    id: "travel",
    category: "Exploration",
    title: "Mountain Dusk",
    image: "/images/personal/travel/travel-mountain.png",
    desc: "Wilderness trekking & atmospheric perspective.",
    detail: "Trekking through mountain trails resets mental fatigue, restores clarity, and inspires expansive creative thinking.",
  },
];

export const BeyondTechSection: React.FC = () => {
  const [selectedActivity, setSelectedActivity] = useState<LifeActivity | null>(null);

  return (
    <section id="beyond" className="py-24 sm:py-32 relative overflow-hidden border-t border-[var(--line)]">
      <div className="section-shell max-w-6xl mx-auto">
        
        {/* Section Header matching Reference Image */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="eyebrow-tag mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--lime)]" />
              <span>BEYOND TECHNOLOGY</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[var(--text)]">
              <TextReveal>A life beyond the screen.</TextReveal>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed mb-3 font-normal">
              Music, martial arts, sports, chess, travel and the experiences that keep me curious and grounded.
            </p>
            <Link
              href="/beyond-tech"
              className="text-xs font-mono text-[var(--blue2)] hover:text-white transition-colors flex items-center gap-1.5"
            >
              <span>Explore All Stories</span>
              <ArrowUpRight size={11} />
            </Link>
          </div>
        </div>

        {/* 5-Column Horizontal Photo Gallery matching Reference Image */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4 mb-6">
          {ACTIVITIES.map((act) => (
            <button
              key={act.id}
              type="button"
              onClick={() => setSelectedActivity(act)}
              aria-haspopup="dialog"
              aria-label={`View story: ${act.title}`}
              className="group cursor-pointer relative aspect-[4/5] rounded-2xl overflow-hidden bg-black/50 border border-[var(--line)] hover:border-[var(--blue2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue2)] transition-all duration-300 shadow-lg p-0 text-left"
            >
              <Image
                src={act.image}
                alt={act.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-3.5">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--blue2)] font-semibold">
                  {act.category}
                </span>
                <span className="font-bold text-xs sm:text-sm text-white">
                  {act.title}
                </span>
              </div>
            </button>
          ))}
        </div>

      </div>

      {/* Accessible Detail Modal Dialog */}
      <AnimatePresence>
        {selectedActivity && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={selectedActivity.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedActivity(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-6 sm:p-8 shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setSelectedActivity(null)}
                aria-label="Close dialog"
                className="absolute top-5 right-5 w-8 h-8 rounded-full border border-[var(--line)] bg-[var(--surface2)] text-[var(--text)] flex items-center justify-center hover:bg-[var(--line)] transition-colors"
              >
                <X size={15} />
              </button>

              <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-5 bg-black/40 border border-[var(--line)]">
                <Image
                  src={selectedActivity.image}
                  alt={selectedActivity.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="inline-block px-2.5 py-0.5 rounded-full bg-[var(--blue)]/20 text-[var(--blue2)] text-[10px] font-mono uppercase font-semibold mb-2">
                {selectedActivity.category}
              </div>

              <h3 className="text-2xl font-bold tracking-tight text-[var(--text)] mb-3">
                {selectedActivity.title}
              </h3>

              <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed mb-4">
                {selectedActivity.detail}
              </p>

              {selectedActivity.authenticNote && (
                <div className="flex items-center gap-2 p-3 rounded-xl bg-[var(--surface2)] border border-[var(--line)] text-xs text-[var(--lime)] font-mono">
                  <Check size={14} />
                  <span>{selectedActivity.authenticNote}</span>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
