"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, ArrowDown, MapPin, Sparkles } from "lucide-react";
import { GlassRibbon } from "@/components/ui/GlassRibbon";
import { Magnetic } from "@/components/ui/Magnetic";
import { TextReveal } from "@/components/ui/TextReveal";

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, 40]);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-[96vh] flex flex-col justify-between pt-24 sm:pt-28 pb-12 overflow-hidden"
    >
      {/* Background Volumetric Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(49,92,255,0.22)_0%,rgba(121,167,255,0.08)_45%,transparent_70%)] blur-3xl pointer-events-none" />

      <div className="section-shell relative z-10 w-full flex-1 flex flex-col justify-center max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Portrait Visual Showcase (Right Column on Desktop, Centered on Mobile) - UNCONTAINERIZED */}
          <motion.div
            style={{ y: yParallax }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="order-1 lg:order-2 lg:col-span-6 flex justify-center items-center relative"
          >
            <div className="relative w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[480px] flex items-center justify-center">
              {/* Ethereal Ambient Glow behind portrait */}
              <div className="absolute w-[320px] sm:w-[420px] aspect-square rounded-full bg-[radial-gradient(circle,rgba(49,92,255,0.45)_0%,rgba(121,167,255,0.18)_40%,transparent_70%)] blur-3xl pointer-events-none" />

              {/* Signature 3D Iridescent Glass Ribbon (Single source of truth) */}
              <GlassRibbon
                variant="hero"
                className="absolute inset-0 pointer-events-none z-0 scale-110"
                interactive={false}
              />

              {/* Free-Floating Uncontainerized Portrait with Multi-Directional Feathering */}
              <div className="relative z-10 w-[290px] sm:w-[360px] lg:w-[420px] aspect-[4/5] [mask-image:radial-gradient(ellipse_at_50%_45%,black_58%,transparent_92%)] [-webkit-mask-image:radial-gradient(ellipse_at_50%_45%,black_58%,transparent_92%)]">
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

              {/* Floating Identity Capsule near arm */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="absolute -bottom-2 right-2 sm:right-4 z-20 flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-[var(--surface)]/85 backdrop-blur-xl border border-[var(--line)] shadow-xl shadow-black/20"
              >
                <div>
                  <div className="font-semibold text-xs text-[var(--text)] tracking-tight">
                    Yogesh Amrute
                  </div>
                  <div className="font-mono text-[9px] text-[var(--muted)] tracking-wider">
                    Founder, Builder & Technologist ↗
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Headline & Editorial Copy (Left Column on Desktop) */}
          <div className="order-2 lg:order-1 lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Monospace Spaced Category Eyebrow matching reference */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-mono text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[var(--muted)] mb-3"
            >
              ENGINEER / CREATOR / ENTREPRENEUR
            </motion.div>

            {/* Monumental Headline with Masked TextReveal */}
            <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-bold tracking-tight text-[var(--text)] leading-[1.06] mb-5">
              <TextReveal delay={0.1}>Building digital</TextReveal>
              <TextReveal delay={0.2}>products that</TextReveal>
              <TextReveal delay={0.3}>
                move ideas{" "}
                <em className="font-serif italic font-normal text-[var(--blue2)]">
                  forward.
                </em>
              </TextReveal>
            </h1>

            {/* Supporting Copy matching prompt verbatim */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xs sm:text-sm md:text-base text-[var(--muted)] max-w-lg font-normal leading-relaxed mb-8"
            >
              I&apos;m Yogesh — a full-stack engineer, AI builder and entrepreneur creating thoughtful digital products and experiences.
            </motion.p>

            {/* CTAs with Magnetic Physics */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-8"
            >
              {/* Primary Pill Button: Explore My Work */}
              <Magnetic strength={0.3}>
                <Link
                  href="#work"
                  className="btn-primary text-xs sm:text-sm px-6 py-3.5 rounded-full flex items-center gap-2 shadow-xl shadow-[var(--glow)] group"
                >
                  <span>Explore My Work</span>
                  <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </Magnetic>

              {/* Secondary Clean Glass CTA: About Me */}
              <Magnetic strength={0.2}>
                <Link
                  href="#about"
                  className="btn-secondary text-xs sm:text-sm px-6 py-3.5 rounded-full border border-[var(--line)] hover:border-[var(--blue2)] transition-colors"
                >
                  <span>About Me</span>
                </Link>
              </Magnetic>
            </motion.div>

            {/* Availability Indicator & Location Status */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-mono text-[var(--muted)] mb-8"
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[var(--lime)] shadow-[0_0_8px_var(--lime)] animate-pulse" />
                <span className="text-[var(--text)] font-medium">Available for selected collaborations</span>
              </div>
              <div className="flex items-center gap-1.5 text-[var(--muted)]">
                <MapPin size={13} className="text-[var(--blue2)]" />
                <span>India</span>
              </div>
            </motion.div>

            {/* Downward Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <a
                href="#philosophy"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--surface)] border border-[var(--line)] text-xs text-[var(--muted)] hover:text-[var(--text)] transition-colors font-mono tracking-wider"
              >
                <ArrowDown size={13} className="animate-bounce text-[var(--blue2)]" />
                <span>Scroll</span>
              </a>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
