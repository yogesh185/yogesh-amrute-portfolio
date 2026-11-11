"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X, Sparkles, Check } from "lucide-react";
import { BEYOND_TECH, BeyondTechItem } from "@/data/portfolioData";

export const BeyondTechSection: React.FC = () => {
  const [selectedActivity, setSelectedActivity] = useState<BeyondTechItem | null>(null);

  return (
    <section id="beyond" className="py-20 relative overflow-hidden">
      <div className="section-shell max-w-xl lg:max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Title matching Screen 8 */}
        <div className="mb-6">
          <span className="text-xs font-mono tracking-widest uppercase text-[var(--muted)]">
            Beyond Tech
          </span>
        </div>

        {/* 2x2 Asymmetrical Photo Grid matching Screen 8 of reference */}
        <div className="grid grid-cols-2 gap-3.5 sm:gap-4 w-full max-w-[340px] sm:max-w-[420px] mb-8">
          {/* Tile 1: Music Guitar */}
          <button
            type="button"
            aria-haspopup="dialog"
            aria-label="View story: Acoustic Music"
            onClick={() => setSelectedActivity(BEYOND_TECH[0])}
            className="group cursor-pointer relative aspect-square rounded-2xl overflow-hidden bg-black/40 border border-[var(--line)] hover:border-[var(--blue2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue2)] transition-all duration-300 shadow-md p-0"
          >
            <Image
              src="/images/personal/music/music-guitar.png"
              alt="Yamaha FS80C Acoustic Guitar"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2.5">
              <span className="font-mono text-[9px] uppercase tracking-wider text-white font-bold">
                Acoustic Music
              </span>
            </div>
          </button>

          {/* Tile 2: Football */}
          <button
            type="button"
            aria-haspopup="dialog"
            aria-label="View story: Football & Goalkeeping"
            onClick={() => setSelectedActivity(BEYOND_TECH[2])}
            className="group cursor-pointer relative aspect-square rounded-2xl overflow-hidden bg-black/40 border border-[var(--line)] hover:border-[var(--blue2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue2)] transition-all duration-300 shadow-md p-0"
          >
            <Image
              src="/images/personal/sports/football-goalkeeper.png"
              alt="Football and Goalkeeping"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2.5">
              <span className="font-mono text-[9px] uppercase tracking-wider text-white font-bold">
                Goalkeeping
              </span>
            </div>
          </button>

          {/* Tile 3: Authentic Judo Martial Arts Photograph */}
          <button
            type="button"
            aria-haspopup="dialog"
            aria-label="View story: Authentic Tournament Judo"
            onClick={() => setSelectedActivity(BEYOND_TECH[1])}
            className="group cursor-pointer relative aspect-square rounded-2xl overflow-hidden bg-black/40 border border-[var(--line)] hover:border-[var(--lime)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--lime)] transition-all duration-300 shadow-md ring-1 ring-white/10 p-0"
          >
            <Image
              src="/images/personal/martial-arts/martial-arts-original.png"
              alt="Yogesh Amrute — Authentic Tournament Judo Martial Arts photograph"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2.5">
              <span className="font-mono text-[9px] uppercase tracking-wider text-[var(--lime)] font-bold">
                Tournament Judo
              </span>
            </div>
          </button>

          {/* Tile 4: Chess */}
          <button
            type="button"
            aria-haspopup="dialog"
            aria-label="View story: Chess Strategy"
            onClick={() => setSelectedActivity(BEYOND_TECH[3])}
            className="group cursor-pointer relative aspect-square rounded-2xl overflow-hidden bg-black/40 border border-[var(--line)] hover:border-[var(--blue2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue2)] transition-all duration-300 shadow-md p-0"
          >
            <Image
              src="/images/personal/chess/chess.png"
              alt="Chess and Strategic Thinking"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2.5">
              <span className="font-mono text-[9px] uppercase tracking-wider text-white font-bold">
                Tactical Chess
              </span>
            </div>
          </button>
        </div>

        {/* Headline matching Screen 8 verbatim */}
        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text)] mb-3">
          A life beyond the screen.
        </h3>

        {/* Paragraph matching Screen 8 verbatim */}
        <p className="text-xs sm:text-sm text-[var(--muted)] max-w-sm sm:max-w-md mx-auto leading-relaxed mb-8">
          Music, martial arts, sports, chess and travel — the things that keep me curious and grounded.
        </p>

        {/* Bottom Circular Arrow Button matching Screen 8 */}
        <Link
          href="/contact"
          className="btn-round w-12 h-12 bg-[var(--surface)] border border-[var(--line)] hover:bg-[var(--blue)] hover:text-white transition-colors"
          aria-label="Continue to contact"
        >
          <ArrowRight size={18} />
        </Link>
      </div>

      {/* Activity Story Modal */}
      <AnimatePresence>
        {selectedActivity && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-md rounded-[32px] border border-[var(--line)] bg-[var(--surface)] p-6 shadow-2xl text-[var(--text)]"
            >
              <button
                onClick={() => setSelectedActivity(null)}
                className="absolute top-5 right-5 p-2 rounded-full hover:bg-[var(--surface2)] text-[var(--muted)] hover:text-[var(--text)] transition-colors"
                aria-label="Close"
              >
                <X size={18} />
              </button>

              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-black/40 border border-white/10 mb-5">
                <Image
                  src={selectedActivity.image}
                  alt={selectedActivity.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="inline-block px-3 py-1 rounded-full bg-[var(--surface2)] border border-[var(--line)] text-[var(--blue2)] font-mono text-[10px] font-bold tracking-wider mb-2">
                {selectedActivity.badge}
              </div>

              <h3 className="text-2xl font-bold tracking-tight mb-2">
                {selectedActivity.title}
              </h3>

              <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed mb-4">
                {selectedActivity.desc}
              </p>

              {selectedActivity.quote && (
                <div className="font-serif italic text-xs text-[var(--blue2)] border-l-2 border-[var(--blue2)] pl-3 py-1 mb-6">
                  &ldquo;{selectedActivity.quote}&rdquo;
                </div>
              )}

              <button
                onClick={() => setSelectedActivity(null)}
                className="btn-secondary w-full py-3 text-xs"
              >
                Close Story
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
