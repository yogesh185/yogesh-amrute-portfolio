"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { CharacterAnimation } from "./CharacterAnimation";
import { GlassRibbon } from "../ui/GlassRibbon";

const PRELOADER_SESSION_KEY = "ya_preloader_seen_v1";

export function PortfolioPreloader() {
  const shouldReduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [stage, setStage] = useState<"coding" | "celebrating" | "resolving">("coding");
  const [progress, setProgress] = useState(15);

  const dismiss = useCallback(() => {
    setIsVisible(false);
    try {
      sessionStorage.setItem(PRELOADER_SESSION_KEY, "1");
    } catch {
      // Ignore storage errors in private/iframe contexts
    }
  }, []);

  useEffect(() => {
    setMounted(true);

    try {
      const alreadySeen = sessionStorage.getItem(PRELOADER_SESSION_KEY);
      if (alreadySeen === "1" || shouldReduceMotion) {
        setIsVisible(false);
        return;
      }
    } catch {
      // Ignore storage errors
    }

    // Show preloader
    setIsVisible(true);

    // Timeline sequence (max 2.4s total)
    const timer1 = setTimeout(() => {
      setStage("celebrating");
      setProgress(85);
    }, 1100);

    const timer2 = setTimeout(() => {
      setStage("resolving");
      setProgress(100);
    }, 1800);

    const timer3 = setTimeout(() => {
      dismiss();
    }, 2400);

    // Escape key listener to skip immediately
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        dismiss();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [shouldReduceMotion, dismiss]);

  if (!mounted || !isVisible) {
    return null;
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          role="status"
          aria-live="polite"
          aria-label="Loading Yogesh Amrute portfolio experience"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[var(--bg)] text-[var(--text)] overflow-hidden select-none"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Subtle Ambient Background Mesh */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(49,92,255,0.2)_0%,transparent_70%)] rounded-full blur-3xl" />
          </div>

          {/* Top Skip Button */}
          <div className="absolute top-6 right-6 z-20">
            <button
              type="button"
              onClick={dismiss}
              aria-label="Skip intro animation (Esc)"
              className="group flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider text-[var(--muted)] hover:text-[var(--text)] bg-[var(--surface)] hover:bg-[var(--surface2)] border border-[var(--line)] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue)]"
            >
              <span>SKIP</span>
              <kbd className="px-1.5 py-0.5 text-[10px] rounded bg-[var(--surface2)] font-mono text-[var(--muted)] group-hover:text-[var(--text)]">
                ESC
              </kbd>
            </button>
          </div>

          {/* Center Stage Presentation */}
          <div className="relative z-10 flex flex-col items-center max-w-sm px-6 text-center">
            {stage !== "resolving" ? (
              <motion.div
                key="character-stage"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="w-full flex flex-col items-center"
              >
                <CharacterAnimation stage={stage} />

                {/* Status indicator line */}
                <div className="mt-4 flex flex-col items-center gap-2 w-full">
                  <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-[var(--muted)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--blue)] animate-pulse" />
                    <span>
                      {stage === "coding" ? "Crafting digital experiences..." : "Systems ready"}
                    </span>
                  </div>

                  {/* Progress Line */}
                  <div className="w-48 h-1 rounded-full bg-[var(--line)] overflow-hidden mt-1">
                    <motion.div
                      className="h-full bg-gradient-to-r from-[var(--blue)] to-[var(--blue2)] rounded-full"
                      initial={{ width: "15%" }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.7, ease: "easeOut" }}
                    />
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="resolving-stage"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center justify-center relative py-8"
              >
                {/* Monogram with Ribbon Overlay */}
                <div className="relative flex items-center justify-center w-32 h-32">
                  <div className="absolute inset-0 flex items-center justify-center scale-90 pointer-events-none">
                    <GlassRibbon variant="compact" className="opacity-75" />
                  </div>
                  <span className="relative z-10 font-bold text-4xl sm:text-5xl tracking-tighter text-[var(--text)]">
                    YA<span className="text-[var(--blue)]">.</span>
                  </span>
                </div>
                <p className="mt-3 text-xs tracking-widest font-mono text-[var(--muted)] uppercase">
                  Yogesh Amrute
                </p>
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
