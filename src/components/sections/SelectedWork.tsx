"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { Magnetic } from "@/components/ui/Magnetic";
import { TextReveal } from "@/components/ui/TextReveal";

interface WorkProject {
  id: string;
  name: string;
  category: "Web" | "Product" | "AI";
  subtitle: string;
  desc: string;
  tech: string[];
  metrics: { value: string; label: string }[];
  image: string;
  detailRoute: string;
  externalUrl?: string;
}

const WORK_PROJECTS: WorkProject[] = [
  {
    id: "intrust-india",
    name: "Intrust India",
    category: "Product",
    subtitle: "Business Ecosystem",
    desc: "A multi-role enterprise platform integrating commerce, merchant management interfaces, CRM, HRM, digital wallets, gift cards and rewards into one cohesive ecosystem.",
    tech: ["Next.js", "Supabase", "APIs", "PostgreSQL"],
    metrics: [
      { value: "Enterprise", label: "Architecture" },
      { value: "Next.js", label: "Core Stack" },
      { value: "PostgreSQL", label: "RLS Security" },
    ],
    image: "/images/refined/intrust-work-card.png",
    detailRoute: "/work/intrust-india",
    externalUrl: "https://www.intrustindia.com",
  },
  {
    id: "aadi-seeds",
    name: "Aadi Seeds",
    category: "Web",
    subtitle: "Agriculture & Business",
    desc: "An organic agrarian digital presence crafted for high-yield farming solutions. Features mobile-first crop directories, seed specifications, and localized distributor inquiry paths.",
    tech: ["Next.js", "Tailwind CSS", "SSG", "Responsive"],
    metrics: [
      { value: "Agrarian Web", label: "Platform" },
      { value: "Mobile-First", label: "Layout" },
      { value: "Optimized", label: "Delivery" },
    ],
    image: "/images/refined/aadi-work-card.png",
    detailRoute: "/work/aadi-seeds",
    externalUrl: "https://aadiseeds.in",
  },
  {
    id: "yarvo-agency",
    name: "YARVO.agency",
    category: "Product",
    subtitle: "Creative Technology Studio",
    desc: "An independent boutique studio combining strategy, design, full-stack engineering, and AI to build high-impact digital products and tactile web experiences.",
    tech: ["Next.js", "WebGL", "Creative Direction", "AI"],
    metrics: [
      { value: "Founder", label: "Role" },
      { value: "Full-Stack", label: "Craft" },
      { value: "Active", label: "Studio" },
    ],
    image: "/images/refined/yarvo-work-card.png",
    detailRoute: "/work/yarvo-agency",
    externalUrl: "https://yarvo.agency",
  },
  {
    id: "doc-ai",
    name: "Doc AI",
    category: "AI",
    subtitle: "Intelligent Document System",
    desc: "AI-powered document intelligence experience exploring conversational retrieval over complex knowledge bases with hybrid vector embeddings and verbatim source citations.",
    tech: ["Python", "FastAPI", "LangChain", "Vector Search"],
    metrics: [
      { value: "Hybrid Vector", label: "Retrieval" },
      { value: "Source-Cited", label: "Verification" },
      { value: "FastAPI", label: "Backend" },
    ],
    image: "/images/projects/doc-ai/doc-ai-preview.svg",
    detailRoute: "/work/doc-ai",
  },
];

const FILTERS = ["All (4)", "Web (1)", "Product (2)", "AI (1)"];

export const SelectedWork: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("All (4)");
  const [selectedIndex, setSelectedIndex] = useState(0);

  const filterCategory = (f: string) => {
    if (f.startsWith("All")) return "All";
    if (f.startsWith("Web")) return "Web";
    if (f.startsWith("Product")) return "Product";
    if (f.startsWith("AI")) return "AI";
    return "All";
  };

  const currentCategory = filterCategory(activeFilter);
  const filteredProjects = WORK_PROJECTS.filter((p) => {
    if (currentCategory === "All") return true;
    return p.category === currentCategory;
  });

  const activeProject = filteredProjects[selectedIndex] || filteredProjects[0] || WORK_PROJECTS[0];

  const handleNext = () => {
    if (filteredProjects.length <= 1) return;
    setSelectedIndex((prev) => (prev + 1) % filteredProjects.length);
  };

  const handlePrev = () => {
    if (filteredProjects.length <= 1) return;
    setSelectedIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };

  return (
    <section id="work" className="py-24 sm:py-32 relative overflow-hidden border-t border-[var(--line)]">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(49,92,255,0.15)_0%,transparent_70%)] blur-3xl pointer-events-none" />

      <div className="section-shell max-w-6xl mx-auto">
        
        {/* Section Header with Category Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="eyebrow-tag mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--blue2)]" />
              <span>SELECTED WORK</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[var(--text)]">
              <TextReveal>Things I&apos;ve built.</TextReveal>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 text-xs font-mono">
            {FILTERS.map((f) => {
              const active = activeFilter === f;
              return (
                <button
                  key={f}
                  type="button"
                  onClick={() => {
                    setActiveFilter(f);
                    setSelectedIndex(0);
                  }}
                  className={`px-3.5 py-1.5 rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue)] ${
                    active
                      ? "bg-[var(--blue)] text-white font-semibold shadow-md shadow-[var(--glow)]"
                      : "bg-[var(--surface)] text-[var(--muted)] border border-[var(--line)] hover:text-[var(--text)]"
                  }`}
                >
                  {f}
                </button>
              );
            })}
          </div>
        </div>

        {/* Featured Angled Case-Study Showcase */}
        <div className="relative mb-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              <SpotlightCard className="p-6 sm:p-10 lg:p-12 shadow-2xl border border-[var(--line)]">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  
                  {/* Left Column: Project Copy, Stack & CTAs */}
                  <div className="lg:col-span-5 flex flex-col justify-between">
                    <div>
                      <div className="inline-block px-3 py-1 rounded-full bg-[var(--surface2)] border border-[var(--line)] text-[10px] font-mono uppercase tracking-wider text-[var(--blue2)] font-semibold mb-4">
                        {activeProject.subtitle}
                      </div>

                      <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--text)] mb-4">
                        {activeProject.name}
                      </h3>

                      <p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed mb-6 font-normal">
                        {activeProject.desc}
                      </p>

                      {/* Tech stack badges */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {activeProject.tech.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-1 rounded-md text-xs font-mono bg-[var(--surface2)] text-[var(--text)] border border-[var(--line)]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Links */}
                    <div className="flex items-center gap-4 pt-4 border-t border-[var(--line)]">
                      <Magnetic strength={0.25}>
                        <Link
                          href={activeProject.detailRoute}
                          className="btn-primary text-xs sm:text-sm px-5 py-3 rounded-full flex items-center gap-2 shadow-lg shadow-[var(--glow)] group"
                        >
                          <span>View Case Study</span>
                          <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </Link>
                      </Magnetic>

                      {activeProject.externalUrl && (
                        <a
                          href={activeProject.externalUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-xs text-[var(--muted)] hover:text-[var(--text)] flex items-center gap-1.5 transition-colors font-mono"
                        >
                          <span>Live Site</span>
                          <ExternalLink size={12} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Right Column: Floating Angled Tablet Mockup */}
                  <div className="lg:col-span-7 flex justify-center items-center relative">
                    <div className="relative w-full aspect-[16/10] max-w-[580px] rounded-2xl overflow-hidden shadow-2xl border border-[var(--line)] bg-black/60 group">
                      <Image
                        src={activeProject.image}
                        alt={`${activeProject.name} showcase preview`}
                        fill
                        className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      {/* Glossy Overlay Highlight */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none" />
                    </div>
                  </div>

                </div>
              </SpotlightCard>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Interactive Thumbnail Carousel Strip matching Filtered Projects */}
        <div className="flex items-center justify-between gap-4 pt-2">
          {/* Thumbnails list mapping strictly over filteredProjects */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 flex-1">
            {filteredProjects.map((proj, idx) => {
              const isSelected = selectedIndex === idx;
              return (
                <button
                  key={proj.id}
                  type="button"
                  onClick={() => setSelectedIndex(idx)}
                  className={`relative p-3 rounded-2xl border text-left transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue)] ${
                    isSelected
                      ? "border-[var(--blue)] bg-[var(--surface)] shadow-lg shadow-[var(--glow)]"
                      : "border-[var(--line)] bg-[var(--surface)]/60 hover:border-[var(--blue2)] hover:bg-[var(--surface)]"
                  }`}
                >
                  <div className="font-semibold text-xs text-[var(--text)] truncate">
                    {proj.name}
                  </div>
                  <div className="text-[10px] text-[var(--muted)] truncate font-mono">
                    {proj.subtitle}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Navigation Arrows */}
          {filteredProjects.length > 1 && (
            <div className="hidden sm:flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous project"
                className="w-9 h-9 rounded-full border border-[var(--line)] bg-[var(--surface)] hover:bg-[var(--surface2)] text-[var(--text)] flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue)]"
              >
                <ArrowLeft size={14} />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next project"
                className="w-9 h-9 rounded-full border border-[var(--line)] bg-[var(--surface)] hover:bg-[var(--surface2)] text-[var(--text)] flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue)]"
              >
                <ArrowRight size={14} />
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
