"use client";

import React from "react";
import Image from "next/image";
import { Mail, Linkedin, Github, Instagram, ArrowUpRight } from "lucide-react";
import { PERSONAL_DETAILS } from "@/data/portfolioData";
import { Magnetic } from "@/components/ui/Magnetic";
import { TextReveal } from "@/components/ui/TextReveal";
import { GlassRibbon } from "@/components/ui/GlassRibbon";

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 sm:py-36 relative overflow-hidden border-t border-[var(--line)]">
      {/* Background Volumetric Aura */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(49,92,255,0.25)_0%,rgba(8,13,27,0.95)_65%)] pointer-events-none" />

      {/* Subtle Ambient Connector Ribbon */}
      <div className="absolute top-0 inset-x-0 flex justify-center pointer-events-none opacity-30">
        <GlassRibbon variant="connector" className="w-full max-w-4xl" />
      </div>

      <div className="section-shell max-w-4xl mx-auto relative z-10 flex flex-col items-center text-center">
        
        {/* Eyebrow */}
        <div className="eyebrow-tag mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--blue2)]" />
          <span>COLLABORATION & INQUIRY</span>
        </div>

        {/* Monumental Headline */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[var(--text)] leading-[1.08] mb-6 max-w-2xl">
          <TextReveal delay={0.1}>Let&apos;s build</TextReveal>
          <TextReveal delay={0.2}>
            <span className="font-serif italic font-normal text-[var(--blue2)]">
              something meaningful.
            </span>
          </TextReveal>
        </h2>

        {/* Supporting Copy */}
        <p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed mb-10 max-w-md font-normal">
          Whether you&apos;re looking to architect a new product, integrate intelligent AI systems, or explore a creative venture — my inbox is open.
        </p>

        {/* CTAs Row */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          {/* Primary Magnetic CTA */}
          <Magnetic strength={0.3}>
            <a
              href={`mailto:${PERSONAL_DETAILS.email}?subject=Collaboration%20Inquiry`}
              className="btn-primary text-xs sm:text-sm px-8 py-4 rounded-full flex items-center gap-2 shadow-2xl shadow-[var(--glow)] group font-semibold"
            >
              <span>Get in Touch</span>
              <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </Magnetic>

          {/* Direct Email Address Copy */}
          <a
            href={`mailto:${PERSONAL_DETAILS.email}`}
            className="text-xs font-mono text-[var(--muted)] hover:text-[var(--text)] py-3 px-4 rounded-full border border-[var(--line)] bg-[var(--surface)] hover:border-[var(--blue2)] transition-colors"
          >
            {PERSONAL_DETAILS.email}
          </a>
        </div>

        {/* Social Connection Icons */}
        <div className="flex items-center gap-3">
          <Magnetic strength={0.35}>
            <a
              href={`mailto:${PERSONAL_DETAILS.email}`}
              className="w-11 h-11 rounded-full border border-[var(--line)] bg-[var(--surface)] hover:bg-[var(--surface2)] text-[var(--muted)] hover:text-[var(--text)] flex items-center justify-center transition-all shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue)]"
              aria-label="Email Yogesh Amrute"
            >
              <Mail size={16} />
            </a>
          </Magnetic>

          <Magnetic strength={0.35}>
            <a
              href={PERSONAL_DETAILS.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="w-11 h-11 rounded-full border border-[var(--line)] bg-[var(--surface)] hover:bg-[var(--surface2)] text-[var(--muted)] hover:text-[var(--text)] flex items-center justify-center transition-all shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue)]"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={16} />
            </a>
          </Magnetic>

          <Magnetic strength={0.35}>
            <a
              href={PERSONAL_DETAILS.socials.github}
              target="_blank"
              rel="noreferrer"
              className="w-11 h-11 rounded-full border border-[var(--line)] bg-[var(--surface)] hover:bg-[var(--surface2)] text-[var(--muted)] hover:text-[var(--text)] flex items-center justify-center transition-all shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue)]"
              aria-label="GitHub Profile"
            >
              <Github size={16} />
            </a>
          </Magnetic>

          <Magnetic strength={0.35}>
            <a
              href={PERSONAL_DETAILS.socials.instagram}
              target="_blank"
              rel="noreferrer"
              className="w-11 h-11 rounded-full border border-[var(--line)] bg-[var(--surface)] hover:bg-[var(--surface2)] text-[var(--muted)] hover:text-[var(--text)] flex items-center justify-center transition-all shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue)]"
              aria-label="Instagram Profile"
            >
              <Instagram size={16} />
            </a>
          </Magnetic>
        </div>

        {/* Mountain Sunset Silhouette Artwork Backdrop */}
        <div className="relative w-full aspect-[21/9] max-w-2xl rounded-3xl overflow-hidden mt-16 border border-[var(--line)] shadow-2xl [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)]">
          <Image
            src="/images/personal/travel/travel-mountain.png"
            alt="Mountain Dusk Landscape Horizon with Explorer Silhouette"
            fill
            className="object-cover object-bottom"
          />
        </div>

      </div>
    </section>
  );
};
