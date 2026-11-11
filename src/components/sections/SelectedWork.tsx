"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowLeft, X, ArrowRight, ExternalLink } from "lucide-react";

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
    badge: "Production Platform",
    desc: "A unified enterprise platform integrating customer-facing commerce, merchant management interfaces, CRM, HRM, digital wallets, and reward distribution into one cohesive system.",
    tech: ["Next.js", "Supabase", "APIs", "Tailwind CSS"],
    metrics: [
      { value: "Multi-Role", label: "Architecture" },
      { value: "Next.js", label: "Core Stack" },
      { value: "PostgreSQL", label: "RLS Security" },
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
    desc: "An organic agrarian digital presence crafted for high-yield farming solutions. Features mobile-first crop directories, seed specifications, and localized distributor inquiry paths.",
    tech: ["Next.js", "Tailwind CSS", "SSG", "Responsive"],
    metrics: [
      { value: "Agrarian Web", label: "Platform" },
      { value: "Mobile-First", label: "Layout" },
      { value: "Optimized", label: "Delivery" },
    ],
    image: "/images/refined/aadi-work-card.png",
    url: "https://aadiseeds.in",
  },
  {
    id: "yarvo-agency",
    name: "YARVO.agency",
    category: "Product",
    subtitle: "Creative Technology Studio",
    badge: "Founder Venture",
    desc: "An independent boutique studio combining strategy, design, full-stack engineering, and AI to build high-impact digital products and tactile web experiences.",
    tech: ["Next.js", "WebGL", "Creative Direction", "AI"],
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
    badge: "Technical Prototype",
    desc: "AI-powered document intelligence experience exploring conversational retrieval over complex knowledge bases with hybrid vector embeddings and verbatim source citations.",
    tech: ["Python", "FastAPI", "LangChain", "Vector Search"],
    metrics: [
      { value: "Hybrid Vector", label: "Retrieval" },
      { value: "Source-Cited", label: "Verification" },
      { value: "FastAPI", label: "Backend" },
    ],
    image: "/images/projects/doc-ai/doc-ai-preview.svg",
    url: "#contact",
  },
];

const FILTERS = ["All", "Web", "Product", "AI"];

export const SelectedWork: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [detailProject, setDetailProject] = useState<WorkProject | null>(null);

  // Close modal on Escape key & manage scroll lock
  useEffect(() => {
    if (!detailProject) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDetailProject(null);
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [detailProject]);

  const filtered = WORK_PROJECTS.filter((p) => {
    if (activeFilter === "All") return true;
    return p.category === activeFilter;
  });

  return (
    <section id="work" className="py-24 border-t border-[var(--line)] relative">
      <div className="section-shell max-w-6xl mx-auto">
        
        {/* Header & Filter Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <div className="eyebrow-tag mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--blue2)]" />
              <span>SELECTED PRODUCTIONS</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-[var(--text)]">
              Things I&apos;ve{" "}
              <em className="font-serif italic font-normal text-[var(--blue2)]">
                built.
              </em>
            </h2>
          </div>

          {/* Filter Chips */}
          <div className="flex items-center gap-2 self-start md:self-end" role="tablist">
            {FILTERS.map((f) => (
              <button
                key={f}
                type="button"
                role="tab"
                aria-selected={activeFilter === f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue2)] ${
                  activeFilter === f
                    ? "bg-[var(--blue)] text-white shadow-md shadow-[var(--glow)]"
                    : "bg-[var(--surface)] border border-[var(--line)] text-[var(--muted)] hover:text-[var(--text)]"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Alternating Editorial Showcase Rows */}
        <div className="space-y-12">
          {filtered.map((proj, idx) => {
            const isEven = idx % 2 === 1;
            return (
              <motion.div
                key={proj.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                className="group rounded-3xl border border-[var(--line)] bg-[var(--surface)]/60 backdrop-blur-md p-6 sm:p-10 transition-all duration-300 hover:border-[var(--blue2)] hover:shadow-2xl hover:shadow-[var(--glow)]"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${isEven ? "lg:grid-flow-dense" : ""}`}>
                  
                  {/* Visual Column */}
                  <div className={`lg:col-span-7 ${isEven ? "lg:col-start-6" : ""}`}>
                    <button
                      type="button"
                      aria-haspopup="dialog"
                      aria-label={`Open preview modal for ${proj.name}`}
                      onClick={() => setDetailProject(proj)}
                      className="w-full relative aspect-[16/10] rounded-2xl overflow-hidden bg-black/40 border border-white/5 p-3 flex items-center justify-center cursor-pointer group/preview focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue2)]"
                    >
                      <Image
                        src={proj.image}
                        alt={`${proj.name} showcase preview`}
                        fill
                        className="object-contain p-2 group-hover/preview:scale-103 transition-transform duration-500 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover/preview:opacity-100 transition-opacity flex items-end p-4">
                        <span className="font-mono text-xs text-white bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                          Click to expand
                        </span>
                      </div>
                    </button>
                  </div>

                  {/* Narrative Column */}
                  <div className={`lg:col-span-5 flex flex-col justify-between ${isEven ? "lg:col-start-1" : ""}`}>
                    <div>
                      {/* Meta & Badge */}
                      <div className="flex items-center gap-2.5 mb-3">
                        {proj.badge && (
                          <span className="font-mono text-[10px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-[var(--surface2)] border border-[var(--line)] text-[var(--blue2)]">
                            {proj.badge}
                          </span>
                        )}
                        <span className="text-xs text-[var(--muted)] font-mono">
                          {proj.category}
                        </span>
                      </div>

                      {/* Project Title */}
                      <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text)] mb-2 group-hover:text-[var(--blue2)] transition-colors">
                        {proj.name}
                      </h3>

                      <p className="text-xs sm:text-sm font-medium text-[var(--blue2)] mb-4">
                        {proj.subtitle}
                      </p>

                      <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed mb-6 font-normal">
                        {proj.desc}
                      </p>

                      {/* Architecture Metrics Grid */}
                      <div className="grid grid-cols-3 gap-3 py-3 border-y border-[var(--line)] mb-6 text-center">
                        {proj.metrics.map((m) => (
                          <div key={m.label}>
                            <span className="font-sans text-xs sm:text-sm font-bold text-[var(--text)] block truncate">
                              {m.value}
                            </span>
                            <span className="text-[10px] text-[var(--muted)] font-mono uppercase">
                              {m.label}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Chips */}
                      <div className="flex flex-wrap gap-1.5 mb-8">
                        {proj.tech.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-[var(--surface2)] border border-[var(--line)] text-[var(--text)]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-4 pt-2">
                      <Link
                        href={`/work/${proj.id}`}
                        className="btn-primary text-xs px-5 py-2.5 shadow-md shadow-[var(--glow)]"
                      >
                        <span>Case Study</span>
                        <ArrowRight size={13} />
                      </Link>

                      {proj.url.startsWith("http") && (
                        <a
                          href={proj.url}
                          target="_blank"
                          rel="noreferrer"
                          className="btn-secondary text-xs px-4 py-2.5 rounded-full flex items-center gap-1.5"
                        >
                          <span>Live Site</span>
                          <ExternalLink size={12} />
                        </a>
                      )}
                    </div>

                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Screen 5: Project Detail Modal Dialog */}
      <AnimatePresence>
        {detailProject && (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-dialog-title"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-lg rounded-[32px] border border-[var(--line)] bg-[var(--surface)] p-6 sm:p-8 shadow-2xl text-[var(--text)] max-h-[90vh] overflow-y-auto"
            >
              {/* Top Bar with Back Arrow and Close */}
              <div className="flex items-center justify-between mb-4">
                <button
                  type="button"
                  onClick={() => setDetailProject(null)}
                  className="p-2 rounded-full hover:bg-[var(--surface2)] text-[var(--muted)] hover:text-[var(--text)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue2)] transition-colors"
                  aria-label="Back to work showcase"
                >
                  <ArrowLeft size={18} />
                </button>
                <button
                  type="button"
                  onClick={() => setDetailProject(null)}
                  className="p-2 rounded-full hover:bg-[var(--surface2)] text-[var(--muted)] hover:text-[var(--text)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue2)] transition-colors"
                  aria-label="Close dialog"
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

              {/* Badge */}
              {detailProject.badge && (
                <div className="inline-block px-3 py-1 rounded-full bg-[var(--blue)] text-white text-[10px] font-bold font-mono tracking-wider mb-2">
                  {detailProject.badge}
                </div>
              )}

              {/* Title & Description */}
              <h3 id="project-dialog-title" className="text-2xl font-bold tracking-tight mb-2">
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

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-2 py-4 mb-6 border-y border-[var(--line)] text-center">
                {detailProject.metrics.map((m) => (
                  <div key={m.label}>
                    <span className="font-sans text-base sm:text-lg font-bold text-[var(--text)] block mb-0.5">
                      {m.value}
                    </span>
                    <span className="text-[10px] text-[var(--muted)] font-mono uppercase">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-2.5">
                {detailProject.url.startsWith("http") && (
                  <a
                    href={detailProject.url}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary w-full py-3.5 text-xs font-bold"
                  >
                    <span>View Live</span>
                    <ArrowUpRight size={15} />
                  </a>
                )}

                <Link
                  href={`/work/${detailProject.id}`}
                  className="w-full py-2.5 text-center text-xs font-semibold text-[var(--muted)] hover:text-[var(--text)] transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Read Full Architectural Case Study</span>
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
