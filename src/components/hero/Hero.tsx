"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import { GlassRibbon } from "@/components/ui/GlassRibbon";
import { PERSONAL_DETAILS } from "@/data/portfolioData";

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, 35]);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-[92vh] flex flex-col justify-between pt-4 pb-12 overflow-hidden"
    >
      {/* Background Ambient Glow */}
      <div className="ambient-glow w-[500px] h-[500px] -top-24 left-1/2 -translate-x-1/2 bg-[var(--glow)] opacity-50" />

      <div className="section-shell relative z-10 w-full flex-1 flex flex-col justify-center">
        {/* Mobile-first & Desktop Responsive Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Portrait Visual Showcase (Centered on Mobile, Right Column on Desktop) - UNCONTAINERIZED */}
          <motion.div
            style={{ y: yParallax }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="order-1 lg:order-2 lg:col-span-6 flex justify-center items-center relative"
          >
            <div className="relative w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[480px] flex items-center justify-center">
              {/* Ethereal Ambient Radial Glow behind portrait */}
              <div className="absolute w-[320px] sm:w-[420px] aspect-square rounded-full bg-[radial-gradient(circle,rgba(49,92,255,0.45)_0%,rgba(121,167,255,0.18)_40%,transparent_70%)] blur-3xl pointer-events-none" />

              {/* Floating 3D Iridescent Glass Ribbon (Single source of truth) */}
              <GlassRibbon
                variant="hero"
                className="absolute inset-0 pointer-events-none z-0 scale-110"
                interactive={false}
              />

              {/* Free-Floating Uncontainerized Portrait with Soft Multi-Directional Feathering */}
              <div className="relative z-10 w-[280px] sm:w-[350px] lg:w-[410px] aspect-[4/5] [mask-image:radial-gradient(ellipse_at_50%_45%,black_58%,transparent_92%)] [-webkit-mask-image:radial-gradient(ellipse_at_50%_45%,black_58%,transparent_92%)]">
                <Image
                  src="/images/profile/hero-portrait.png"
                  alt="Yogesh Amrute seated wearing black jacket and white t-shirt with signature cobalt ribbon"
                  fill
                  priority
                  className="object-contain object-bottom scale-105 select-none"
                />
                {/* Bottom smooth gradient fade into canvas */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[var(--bg)] via-[var(--bg)]/80 to-transparent pointer-events-none" />
              </div>

              {/* Floating Status Pill (Freely positioned, organic glassmorphism) */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute top-2 right-2 sm:right-6 z-20 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--surface)]/80 backdrop-blur-xl border border-[var(--line)] shadow-xl shadow-black/20"
              >
                <span className="w-2 h-2 rounded-full bg-[var(--lime)] shadow-[0_0_8px_var(--lime)] animate-pulse" />
                <span className="font-mono text-[10px] tracking-wider text-[var(--text)] uppercase font-semibold">
                  AVAILABLE
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Headline & Copy (Below portrait on mobile, Left Column on Desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="order-2 lg:order-1 lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            {/* Spaced Sub-label matching reference */}
            <div className="font-mono text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[var(--muted)] mb-3">
              DEVELOPER · BUILDER · CREATOR
            </div>

            {/* Oversized Headline */}
            <h1 className="font-sans text-3xl sm:text-5xl md:text-6xl lg:text-[68px] font-bold tracking-tight text-[var(--text)] leading-[1.08] mb-4">
              Building <br className="hidden sm:inline" />
              digital products <br className="hidden sm:inline" />
              that move ideas <br className="hidden sm:inline" />
              <em className="font-serif italic font-normal text-[var(--blue2)]">
                forward.
              </em>
            </h1>

            {/* Subtitle Paragraph matching reference verbatim */}
            <p className="text-xs sm:text-sm md:text-base text-[var(--muted)] max-w-lg font-normal leading-relaxed mb-8">
              I build products, automate workflows and create digital experiences at the intersection of technology and design.
            </p>

            {/* Action Buttons Row */}
            <div className="flex items-center gap-3.5 mb-8">
              {/* Primary Pill Button with Arrow */}
              <Link
                href="/work"
                className="btn-primary text-xs sm:text-sm px-6 py-3.5 shadow-lg shadow-[var(--glow)]"
              >
                <span>Explore Work</span>
                <ArrowRight size={15} />
              </Link>

              {/* Secondary Clean CTA */}
              <Link
                href="/contact"
                className="btn-secondary text-xs sm:text-sm px-5 py-3.5 rounded-full"
              >
                <span>Get in Touch</span>
              </Link>
            </div>

            {/* Downward Scroll Indicator matching Screen 01 verbatim */}
            <a
              href="#explore"
              className="inline-flex items-center gap-1.5 text-xs text-[var(--muted)] hover:text-[var(--text)] transition-colors font-mono tracking-wider"
            >
              <ArrowDown size={13} className="animate-bounce" />
              <span>Scroll</span>
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
