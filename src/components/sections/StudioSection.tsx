"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Code, BrainCircuit, Layers, TrendingUp } from "lucide-react";
import { YARVO_STUDIO } from "@/data/portfolioData";

const STUDIO_SERVICES = [
  { title: "Product Engineering", icon: Code },
  { title: "AI Solutions", icon: BrainCircuit },
  { title: "Design & Experience", icon: Layers },
  { title: "Growth & Marketing", icon: TrendingUp },
];

export const StudioSection: React.FC = () => {
  return (
    <section id="studio" className="py-20 relative overflow-hidden">
      <div className="section-shell max-w-xl mx-auto flex flex-col items-center text-center">
        {/* Title matching Screen 7 */}
        <div className="mb-2">
          <span className="text-xs font-mono tracking-widest uppercase text-[var(--muted)]">
            Studio
          </span>
        </div>

        {/* Big Bold YARVO.agency */}
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--text)] mb-3">
          YARVO.agency
        </h2>

        {/* Subtitle matching Screen 7 verbatim */}
        <p className="text-xs sm:text-sm text-[var(--muted)] max-w-md mx-auto leading-relaxed mb-8">
          A creative technology studio building digital products, brands and AI experiences.
        </p>

        {/* Center 3D Crystal Gem Visual matching Screen 7 */}
        <div className="relative w-48 h-48 sm:w-56 sm:h-56 mb-8 flex items-center justify-center">
          <div className="relative w-full h-full filter drop-shadow-[0_0_35px_rgba(49,92,255,0.65)] animate-pulse">
            <Image
              src="/images/projects/yarvo/yarvo-crystal.png"
              alt="YARVO 3D Crystalline Gem"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* 4 Capabilities List matching Screen 7 */}
        <div className="w-full max-w-sm space-y-2.5 mb-8">
          {STUDIO_SERVICES.map((svc) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.title}
                className="flex items-center gap-3 p-3.5 rounded-2xl border border-[var(--line)] bg-[var(--surface)] text-[var(--text)] hover:border-[var(--blue2)] transition-colors text-left"
              >
                <div className="text-[var(--blue2)]">
                  <Icon size={16} />
                </div>
                <span className="text-xs font-semibold tracking-wide">
                  {svc.title}
                </span>
              </div>
            );
          })}
        </div>

        {/* Bottom Circular Arrow Button matching Screen 7 */}
        <a
          href={YARVO_STUDIO.url}
          target="_blank"
          rel="noreferrer"
          className="btn-round w-12 h-12 bg-[var(--surface)] border border-[var(--line)] hover:bg-[var(--blue)] hover:text-white transition-colors"
          aria-label="Visit YARVO.agency"
        >
          <ArrowRight size={18} />
        </a>
      </div>
    </section>
  );
};
