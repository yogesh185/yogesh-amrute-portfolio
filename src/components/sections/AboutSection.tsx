"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="section-shell">
        <div className="max-w-xl mx-auto flex flex-col items-center text-center lg:text-left lg:items-start lg:max-w-5xl lg:grid lg:grid-cols-12 lg:gap-12 items-center">
          
          {/* Top Title matching Screen 3 */}
          <div className="w-full lg:col-span-12 mb-6">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text)]">
              About <span className="font-serif italic font-normal text-[var(--blue2)]">Me</span>
            </h2>
          </div>

          {/* Profile Portrait with Swirling Cobalt Ribbon - UNCONTAINERIZED */}
          <div className="lg:col-span-5 flex justify-center mb-8 lg:mb-0 relative">
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-square flex items-center justify-center">
              {/* Ethereal Ambient Radial Glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(49,92,255,0.4)_0%,rgba(121,167,255,0.15)_45%,transparent_70%)] blur-2xl pointer-events-none" />

              {/* Free-Floating Profile with Radial Feathering Mask */}
              <div className="relative w-[260px] sm:w-[300px] aspect-square [mask-image:radial-gradient(circle_at_center,black_52%,transparent_90%)] [-webkit-mask-image:radial-gradient(circle_at_center,black_52%,transparent_90%)]">
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

          {/* Text Content & Stats matching Screen 3 verbatim */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start">
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text)] mb-3">
              A builder, a creator and a curious mind.
            </h3>

            <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed mb-8 max-w-lg">
              I design, build and grow digital products — from idea to scale. I work at the intersection of technology, design and AI to solve real problems.
            </p>

            {/* 3 Stat Counters in a Row */}
            <div className="grid grid-cols-3 gap-6 sm:gap-10 w-full max-w-md pb-8 mb-8 border-b border-[var(--line)]">
              <div>
                <span className="font-sans text-2xl sm:text-3xl font-bold text-[var(--text)] block mb-1">
                  5+
                </span>
                <span className="text-xs text-[var(--muted)] font-medium">
                  Projects
                </span>
              </div>
              <div>
                <span className="font-sans text-2xl sm:text-3xl font-bold text-[var(--text)] block mb-1">
                  3+
                </span>
                <span className="text-xs text-[var(--muted)] font-medium">
                  Concepts
                </span>
              </div>
              <div>
                <span className="font-sans text-2xl sm:text-3xl font-bold text-[var(--text)] block mb-1">
                  2+
                </span>
                <span className="text-xs text-[var(--muted)] font-medium">
                  Years
                </span>
              </div>
            </div>

            {/* My Story Button matching Screen 3 */}
            <Link
              href="/beyond-tech"
              className="btn-secondary text-xs px-6 py-3 rounded-full flex items-center gap-2 hover:border-[var(--blue2)] transition-colors"
            >
              <span>My Story</span>
              <ArrowRight size={14} />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};
