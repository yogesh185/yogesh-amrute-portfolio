import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Code2, Sparkles, Compass } from "lucide-react";
import { Navbar } from "@/components/navigation/Navbar";
import { AboutSection } from "@/components/sections/AboutSection";
import { Footer } from "@/components/sections/Footer";
import { CAPABILITIES } from "@/data/portfolioData";

export const metadata: Metadata = {
  title: "About // Yogesh Amrute — Builder, Engineer, Curious Mind",
  description:
    "Learn about Yogesh Amrute's computer science background, engineering philosophy, and life beyond the screen.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)] transition-colors duration-500">
      <Navbar />

      {/* Screen 03: About Me */}
      <div className="pt-4 sm:pt-8">
        <AboutSection />
      </div>

      {/* Editorial Story & Craft Philosophy */}
      <section className="py-16 sm:py-20 border-t border-[var(--line)]">
        <div className="section-shell max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-4">
              <span className="font-mono text-xs uppercase tracking-widest text-[var(--blue2)] block mb-2">
                01 // PHILOSOPHY
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Engineering by craft. <br />
                Creator by curiosity.
              </h3>
            </div>
            <div className="md:col-span-8 space-y-5 text-sm sm:text-base text-[var(--muted)] leading-relaxed font-normal">
              <p>
                Technology is at its best when it solves genuine friction without shouting for attention. Over the past several years, I have gravitated toward the intersection where reliable systems architecture meets thoughtful human interaction.
              </p>
              <p>
                From building enterprise multi-tenant commerce workflows on Next.js and Supabase for <strong className="text-[var(--text)]">Intrust India</strong>, to architecting high-yield agricultural product platforms for <strong className="text-[var(--text)]">Aadi Seeds</strong> and launching <strong className="text-[var(--text)]">YARVO.agency</strong>, every project is a relentless exercise in clarity, performance, and craftsmanship.
              </p>
            </div>
          </div>

          {/* Core Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
            {CAPABILITIES.map((cap) => (
              <div
                key={cap.number}
                className="p-6 rounded-2xl border border-[var(--line)] bg-[var(--surface)] hover:border-[var(--blue2)] transition-colors"
              >
                <span className="font-mono text-xs text-[var(--blue2)] font-bold block mb-2">
                  {cap.number}
                </span>
                <h4 className="font-bold text-base text-[var(--text)] mb-1">
                  {cap.title}
                </h4>
                <p className="text-xs text-[var(--muted)] leading-relaxed">
                  {cap.subtitle}
                </p>
              </div>
            ))}
          </div>

          {/* Beyond Tech Gateway Callout */}
          <div className="mt-16 p-8 rounded-[32px] border border-[var(--line)] bg-[var(--surface)] flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-widest text-[var(--blue2)] block mb-1">
                DISCIPLINES // LIFE BEYOND THE SCREEN
              </span>
              <h4 className="text-xl sm:text-2xl font-bold text-[var(--text)]">
                Discover life beyond the screen.
              </h4>
              <p className="text-xs text-[var(--muted)] mt-1 max-w-md">
                Acoustic guitar melodies, tournament Judo discipline, football goalkeeping, and chess strategy.
              </p>
            </div>
            <Link
              href="/beyond-tech"
              className="btn-primary text-xs px-6 py-3.5 shrink-0"
            >
              <span>Explore Beyond Tech</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
