"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Layers,
  Compass,
  Cpu,
  Mail,
  Flame,
  Globe,
} from "lucide-react";
import { Navbar } from "@/components/navigation/Navbar";
import { Hero } from "@/components/hero/Hero";
import { Footer } from "@/components/sections/Footer";

const DIRECTORY_ITEMS = [
  {
    num: "01",
    label: "SELECTED WORK",
    title: "Production Systems & Products",
    desc: "Intrust India enterprise ecosystem, Aadi Seeds agricultural directory, and Doc AI intelligence.",
    meta: "12+ Modules · 6K+ Users · 1.8L+ Items",
    href: "/work",
    tag: "Work",
    image: "/images/refined/intrust-work-card.png",
  },
  {
    num: "02",
    label: "ABOUT YOGESH",
    title: "A builder, creator and curious mind.",
    desc: "Full-stack engineer and AI builder creating digital products with craft and purpose.",
    meta: "5+ Projects · 3+ Concepts · 2+ Years",
    href: "/about",
    tag: "Bio & Story",
    image: "/images/profile/about-portrait.png",
  },
  {
    num: "03",
    label: "EXPERIMENTS LAB",
    title: "AVARA, ORBIT & NEXUS",
    desc: "Speculative research exploring real-time AI avatars, ambient memory, and connected lifestyle.",
    meta: "Exploratory AI Prototypes",
    href: "/experiments",
    tag: "Concept Lab",
    image: "/images/concepts/avara/avara-mockup.png",
  },
  {
    num: "04",
    label: "STUDIO VENTURE",
    title: "YARVO.agency Spotlight",
    desc: "An independent creative technology studio combining strategy, design, engineering, and AI.",
    meta: "Product Engineering & AI Solutions",
    href: "/studio",
    tag: "Venture",
    image: "/images/projects/yarvo/yarvo-crystal.png",
  },
  {
    num: "05",
    label: "LIFE BEYOND TECH",
    title: "A life beyond the screen.",
    desc: "Authentic acoustic guitar, competitive Judo tournament discipline, football goalkeeping, and chess.",
    meta: "4 Authentic Disciplines",
    href: "/beyond-tech",
    tag: "Beyond Tech",
    image: "/images/personal/martial-arts/martial-arts-original.png",
  },
  {
    num: "06",
    label: "COLLABORATION",
    title: "Let's Build Together.",
    desc: "Open to selected product engineering collaborations, founding advisory, and ambitious ideas.",
    meta: "hello@yogeshamrute.dev · Bhopal, India",
    href: "/contact",
    tag: "Direct Connect",
    image: "/images/personal/travel/travel-mountain.png",
  },
];

export default function Home() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)] transition-colors duration-500 flex flex-col justify-between">
      {/* 01 Navigation */}
      <Navbar />

      {/* 01 Hero Section (Screen 01) - Uncontainerized & Cinematic */}
      <Hero />

      {/* Subtle Ambient Availability Strip */}
      <section className="border-y border-[var(--line)] py-4 bg-[var(--surface)]/20 backdrop-blur-md">
        <div className="section-shell flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[var(--muted)]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[var(--lime)] animate-ping" />
            <span className="text-[var(--text)] font-semibold">STATUS:</span>
            <span>OPEN TO SELECTED COLLABORATIONS</span>
          </div>
          <div className="hidden sm:flex items-center gap-6">
            <span>BHOPAL, INDIA</span>
            <span>·</span>
            <span>UTC+5:30 IST</span>
            <span>·</span>
            <span>FOUNDER @ YARVO.AGENCY</span>
          </div>
        </div>
      </section>

      {/* Clean Editorial Portfolio Directory (Replaces bulky card grid) */}
      <section id="explore" className="py-20 sm:py-28 relative">
        <div className="section-shell max-w-5xl">
          
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-16 gap-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--blue2)] font-semibold block mb-3">
                02 // DIRECTORY
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[var(--text)]">
                Selected Spaces.
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[var(--muted)] max-w-md font-normal leading-relaxed">
              Every space is crafted as a focused, discrete editorial experience. Select any discipline below to enter.
            </p>
          </div>

          {/* Clean Horizontal Editorial Rows */}
          <div className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
            {DIRECTORY_ITEMS.map((item, idx) => (
              <Link
                key={item.num}
                href={item.href}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="group py-8 sm:py-10 flex flex-col md:flex-row md:items-center justify-between gap-6 transition-all duration-300 hover:px-4 rounded-2xl hover:bg-[var(--surface)]/40 relative"
              >
                {/* Left Column: Number, Title, Description */}
                <div className="flex items-start gap-6 sm:gap-10">
                  <span className="font-mono text-sm sm:text-base font-bold text-[var(--blue2)] pt-1">
                    {item.num}
                  </span>
                  
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-mono text-[10px] tracking-wider uppercase px-2.5 py-0.5 rounded-full border border-[var(--line)] bg-[var(--surface)] text-[var(--muted)]">
                        {item.tag}
                      </span>
                      <span className="font-mono text-[10px] text-[var(--muted)] hidden sm:inline">
                        {item.meta}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-[var(--text)] group-hover:text-[var(--blue2)] transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[var(--muted)] mt-2 max-w-xl leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Right Column: Clean Action Arrow & Micro-Thumbnail Preview */}
                <div className="flex items-center gap-5 shrink-0 self-end md:self-center">
                  {/* Subtle Floating Micro-Thumbnail */}
                  <div className="relative w-16 h-12 rounded-xl overflow-hidden border border-[var(--line)] hidden sm:block opacity-75 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Circle Arrow Pill */}
                  <div className="w-11 h-11 rounded-full border border-[var(--line)] bg-[var(--surface)] group-hover:bg-[var(--blue)] group-hover:border-[var(--blue)] text-[var(--muted)] group-hover:text-white flex items-center justify-center transition-all duration-300 group-hover:translate-x-1">
                    <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
