"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { GlassRibbon } from "@/components/ui/GlassRibbon";
import { Magnetic } from "@/components/ui/Magnetic";
import { TextReveal } from "@/components/ui/TextReveal";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 sm:py-32 relative overflow-hidden border-t border-[var(--line)]">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(49,92,255,0.18)_0%,transparent_70%)] blur-3xl pointer-events-none" />

      <div className="section-shell max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Authentic Profile Portrait with Swirling Cobalt Ribbon - UNCONTAINERIZED */}
          <div className="lg:col-span-5 flex justify-center relative order-2 lg:order-1">
            <div className="relative w-full max-w-[320px] sm:max-w-[380px] aspect-square flex items-center justify-center">
              
              {/* Ethereal Radial Glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(49,92,255,0.4)_0%,rgba(121,167,255,0.15)_45%,transparent_70%)] blur-2xl pointer-events-none" />

              {/* Free-Floating Profile with Radial Feathering Mask */}
              <div className="relative w-[280px] sm:w-[340px] aspect-square [mask-image:radial-gradient(circle_at_center,black_54%,transparent_90%)] [-webkit-mask-image:radial-gradient(circle_at_center,black_54%,transparent_90%)]">
                <Image
                  src="/images/profile/about-portrait.png"
                  alt="Yogesh Amrute profile with electric cobalt ribbon"
                  fill
                  priority
                  className="object-contain object-center scale-105 select-none"
                />
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[var(--bg)] to-transparent pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Right Column: Text Content, Bio & Verified Metrics */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left order-1 lg:order-2">
            <div className="eyebrow-tag mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--blue2)]" />
              <span>ABOUT YOGESH</span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-5xl font-bold tracking-tight text-[var(--text)] mb-4 leading-tight">
              <TextReveal delay={0.1}>A builder, a creator</TextReveal>
              <TextReveal delay={0.2}>
                <span className="font-serif italic font-normal text-[var(--blue2)]">
                  and a curious mind.
                </span>
              </TextReveal>
            </h2>

            <p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed mb-8 max-w-xl font-normal">
              A computer science engineer who loves building products, exploring new technology and turning ideas into impactful, real-world solutions. I combine full-stack engineering with creative direction and entrepreneurial execution.
            </p>

            {/* 3 Metric Counters in a Row */}
            <div className="grid grid-cols-3 gap-6 sm:gap-10 w-full max-w-md pb-8 mb-8 border-b border-[var(--line)]">
              <div>
                <span className="font-sans text-3xl sm:text-4xl font-bold text-[var(--text)] block mb-1">
                  5+
                </span>
                <span className="text-xs text-[var(--muted)] font-mono uppercase tracking-wider">
                  Shipped Work
                </span>
              </div>
              <div>
                <span className="font-sans text-3xl sm:text-4xl font-bold text-[var(--text)] block mb-1">
                  3+
                </span>
                <span className="text-xs text-[var(--muted)] font-mono uppercase tracking-wider">
                  AI Concepts
                </span>
              </div>
              <div>
                <span className="font-sans text-3xl sm:text-4xl font-bold text-[var(--text)] block mb-1">
                  2+
                </span>
                <span className="text-xs text-[var(--muted)] font-mono uppercase tracking-wider">
                  Years Building
                </span>
              </div>
            </div>

            {/* Pathway CTA */}
            <div>
              <Magnetic strength={0.25}>
                <Link
                  href="/about"
                  className="btn-secondary text-xs sm:text-sm px-6 py-3.5 rounded-full inline-flex items-center gap-2 border border-[var(--line)] hover:border-[var(--blue2)] transition-colors group"
                >
                  <span>Read Full Background</span>
                  <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </Magnetic>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
