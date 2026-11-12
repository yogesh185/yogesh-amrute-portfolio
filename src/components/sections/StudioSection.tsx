"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, Code2, BrainCircuit, Layers, TrendingUp } from "lucide-react";
import { YARVO_STUDIO } from "@/data/portfolioData";
import { Magnetic } from "@/components/ui/Magnetic";
import { TextReveal } from "@/components/ui/TextReveal";

const STUDIO_SERVICES = [
  { title: "Product Engineering", desc: "Robust full-stack platforms, APIs & high-concurrency systems.", icon: Code2 },
  { title: "AI Solutions", desc: "Agentic pipelines, custom retrieval architectures & automation.", icon: BrainCircuit },
  { title: "Design & Experience", desc: "Art-directed web experiences, tactile motion & design systems.", icon: Layers },
  { title: "Growth & Marketing", desc: "Organic search visibility, performance optimization & analytics.", icon: TrendingUp },
];

export const StudioSection: React.FC = () => {
  return (
    <section id="studio" className="py-24 sm:py-32 relative overflow-hidden border-t border-[var(--line)]">
      {/* Background Volumetric Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(49,92,255,0.2)_0%,rgba(121,167,255,0.06)_40%,transparent_70%)] blur-3xl pointer-events-none" />

      <div className="section-shell max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Studio Venture Story */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="eyebrow-tag mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--blue2)]" />
                <span>YARVO STUDIO</span>
              </div>

              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[var(--text)] leading-[1.08] mb-6">
                <TextReveal delay={0.1}>Building something</TextReveal>
                <TextReveal delay={0.2}>
                  <span className="font-serif italic font-normal text-[var(--blue2)]">
                    of my own.
                  </span>
                </TextReveal>
              </h2>

              <p className="text-base sm:text-lg text-[var(--muted)] leading-relaxed mb-8 font-normal">
                YARVO.agency is my creative technology studio — combining strategy, design, engineering and AI to build digital products and grow brands.
              </p>
            </div>

            {/* 4 Capabilities Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
              {STUDIO_SERVICES.map((svc) => {
                const Icon = svc.icon;
                return (
                  <div
                    key={svc.title}
                    className="p-3.5 rounded-2xl border border-[var(--line)] bg-[var(--surface)] text-[var(--text)] flex items-start gap-3"
                  >
                    <div className="w-8 h-8 rounded-xl bg-[var(--surface2)] border border-[var(--line)] flex items-center justify-center shrink-0 text-[var(--blue2)]">
                      <Icon size={15} />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-[var(--text)]">
                        {svc.title}
                      </div>
                      <div className="text-[11px] text-[var(--muted)] leading-snug">
                        {svc.desc}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Explore YARVO CTA Button */}
            <div>
              <Magnetic strength={0.3}>
                <a
                  href={YARVO_STUDIO.url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary text-xs sm:text-sm px-6 py-3.5 rounded-full inline-flex items-center gap-2 shadow-xl shadow-[var(--glow)] group"
                >
                  <span>Explore YARVO</span>
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </Magnetic>
            </div>
          </div>

          {/* Right Column: Center 3D Crystal Gem Over Mountain Landscape */}
          <div className="lg:col-span-6 flex justify-center items-center relative">
            <div className="relative w-full max-w-[440px] aspect-square flex items-center justify-center">
              
              {/* Radial Cyan-Blue Caustic Background Disk */}
              <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(49,92,255,0.4)_0%,rgba(0,242,254,0.15)_40%,transparent_70%)] blur-2xl pointer-events-none" />

              {/* Glowing 3D Crystalline Gem Visual with Ambient Pulse */}
              <div className="relative z-10 w-[300px] sm:w-[360px] aspect-square filter drop-shadow-[0_0_45px_rgba(49,92,255,0.7)] animate-float">
                <Image
                  src="/images/projects/yarvo/yarvo-crystal.png"
                  alt="YARVO 3D Crystalline Polyhedron Gem"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Landscape Horizon Silhouette */}
              <div className="absolute inset-x-0 bottom-0 h-32 [mask-image:linear-gradient(to_bottom,transparent_0%,black_100%)] [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_100%)] opacity-30 pointer-events-none">
                <Image
                  src="/images/personal/travel/travel-mountain.png"
                  alt="Mountain Dusk Horizon"
                  fill
                  className="object-cover object-bottom"
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
