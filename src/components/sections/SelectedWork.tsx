"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowLeft, MoreHorizontal, ExternalLink, X, ArrowRight } from "lucide-react";

interface WorkProject {
  id: string;
  name: string;
  category: "Web" | "Product" | "AI";
  subtitle: string;
  badge?: string;
  desc: string;
  tech: string[];
  metrics: { value: string; label: string }[];
  image: string;
  url: string;
}

const WORK_PROJECTS: WorkProject[] = [
  {
    id: "intrust-india",
    name: "Intrust India",
    category: "Product",
    subtitle: "Business & Commerce Ecosystem",
    badge: "Featured Project",
    desc: "A connected business ecosystem with commerce, CRM, HRM, wallet and more.",
    tech: ["Next.js", "Supabase", "API"],
    metrics: [
      { value: "12+", label: "Modules" },
      { value: "6K+", label: "Users" },
      { value: "1.8L+", label: "Items" },
    ],
    image: "/images/refined/intrust-work-card.png",
    url: "https://www.intrustindia.com",
  },
  {
    id: "aadi-seeds",
    name: "Aadi Seeds",
    category: "Web",
    subtitle: "Agriculture & Seed Business",
    badge: "Client Project",
    desc: "Agricultural business website and digital presence designed for high-yield farming solutions.",
    tech: ["Next.js", "Tailwind CSS", "Responsive"],
    metrics: [
      { value: "40+", label: "Varieties" },
      { value: "100%", label: "Mobile-First" },
      { value: "99", label: "Performance" },
    ],
    image: "/images/refined/aadi-work-card.png",
    url: "https://aadiseeds.in",
  },
  {
    id: "yarvo-agency",
    name: "YARVO.agency",
    category: "Product",
    subtitle: "Creative Technology Studio",
    badge: "My Venture",
    desc: "An independent creative technology studio combining strategy, design, engineering and AI.",
    tech: ["Next.js", "WebGL", "AI Solutions"],
    metrics: [
      { value: "Founder", label: "Role" },
      { value: "Full-Stack", label: "Craft" },
      { value: "Active", label: "Studio" },
    ],
    image: "/images/refined/yarvo-work-card.png",
    url: "https://yarvo.agency",
  },
  {
    id: "doc-ai",
    name: "Doc AI",
    category: "AI",
    subtitle: "Intelligent Document System",
    badge: "Built Project",
    desc: "AI-powered document intelligence experience exploring conversational access to complex information.",
    tech: ["Python", "FastAPI", "LangChain"],
    metrics: [
      { value: "Sub-Sec", label: "Indexing" },
      { value: "Source", label: "Cited" },
      { value: "RAG", label: "Pipeline" },
    ],
    image: "/images/concepts/nexus/nexus-mockup.png",
    url: "#contact",
  },
];

const FILTERS = ["All", "Web", "Product", "AI"];

export const SelectedWork: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [detailProject, setDetailProject] = useState<WorkProject | null>(null);

  const filtered = WORK_PROJECTS.filter((p) => {
    if (activeFilter === "All") return true;
    return p.category === activeFilter;
  });

  return (
    <section id="work" className="py-20 relative">
      <div className="section-shell max-w-xl lg:max-w-5xl mx-auto">
        {/* Title matching Screen 4 of reference */}
        <div className="mb-6">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text)]">
            Work
          </h2>
        </div>

        {/* Filter Chips matching Screen 4: All, Web, Product, AI */}
        <div className="flex items-center gap-2 mb-8">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeFilter === f
                  ? "bg-[var(--blue)] text-white shadow-md shadow-[var(--glow)]"
                  : "bg-[var(--surface)] border border-[var(--line)] text-[var(--muted)] hover:text-[var(--text)]"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Project Cards List matching Screen 4 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {filtered.map((proj) => (
            <div
              key={proj.id}
              onClick={() => setDetailProject(proj)}
              className="group cursor-pointer rounded-2xl overflow-hidden border border-[var(--line)] bg-[var(--surface)] hover:border-[var(--blue2)] transition-all duration-300 p-4 flex flex-col justify-between"
            >
              {/* Top Meta info */}
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h3 className="text-lg font-bold text-[var(--text)] group-hover:text-[var(--blue2)] transition-colors">
                    {proj.name}
                  </h3>
                  <p className="text-xs text-[var(--muted)] flex items-center gap-1">
                    <span>{proj.subtitle}</span>
                    <ArrowUpRight size={13} className="text-[var(--blue2)]" />
                  </p>
                </div>
              </div>

              {/* Visual screen card mockup */}
              <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-black/40 border border-white/5 p-2 flex items-center justify-center">
                <Image
                  src={proj.image}
                  alt={proj.name}
                  fill
                  className="object-contain p-2 group-hover:scale-103 transition-transform duration-500 ease-out"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Screen 5: Project Detail Modal matching reference */}
      <AnimatePresence>
        {detailProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-md rounded-[32px] border border-[var(--line)] bg-[var(--surface)] p-6 shadow-2xl text-[var(--text)]"
            >
              {/* Top Bar with Back Arrow and More Options */}
              <div className="flex items-center justify-between mb-4">
                <button
                  onClick={() => setDetailProject(null)}
                  className="p-2 rounded-full hover:bg-[var(--surface2)] text-[var(--muted)] hover:text-[var(--text)] transition-colors"
                  aria-label="Back to projects"
                >
                  <ArrowLeft size={18} />
                </button>
                <button
                  onClick={() => setDetailProject(null)}
                  className="p-2 rounded-full hover:bg-[var(--surface2)] text-[var(--muted)] hover:text-[var(--text)] transition-colors"
                  aria-label="Close"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Main Visual Showcase */}
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-black/40 border border-white/5 mb-5 flex items-center justify-center">
                <Image
                  src={detailProject.image}
                  alt={detailProject.name}
                  fill
                  className="object-contain p-3"
                />
              </div>

              {/* Featured Project Pill Badge */}
              {detailProject.badge && (
                <div className="inline-block px-3 py-1 rounded-full bg-[var(--blue)] text-white text-[10px] font-bold font-mono tracking-wider mb-2">
                  {detailProject.badge}
                </div>
              )}

              {/* Title & Description */}
              <h3 className="text-2xl font-bold tracking-tight mb-2">
                {detailProject.name}
              </h3>

              <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed mb-4">
                {detailProject.desc}
              </p>

              {/* Technology Chips */}
              <div className="flex flex-wrap gap-2 mb-6">
                {detailProject.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-full text-[11px] font-mono bg-[var(--surface2)] border border-[var(--line)] text-[var(--text)]"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* 3 Metric Counters matching Screen 5 */}
              <div className="grid grid-cols-3 gap-2 py-4 mb-6 border-y border-[var(--line)] text-center">
                {detailProject.metrics.map((m) => (
                  <div key={m.label}>
                    <span className="font-sans text-xl font-bold text-[var(--text)] block mb-0.5">
                      {m.value}
                    </span>
                    <span className="text-[10px] text-[var(--muted)] font-medium">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action Buttons: View Live ↗ & Deep Dive Case Study */}
              <div className="flex flex-col gap-2.5">
                <a
                  href={detailProject.url}
                  target={detailProject.url.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="btn-primary w-full py-3.5 text-xs font-bold"
                >
                  <span>View Live</span>
                  <ArrowUpRight size={15} />
                </a>

                <Link
                  href={`/work/${detailProject.id}`}
                  className="w-full py-2.5 text-center text-xs font-semibold text-[var(--muted)] hover:text-[var(--text)] transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Read Full Case Study</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
