"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, CheckCircle2, Cpu, Layers, Sparkles } from "lucide-react";
import { Project } from "@/data/portfolioData";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md">
        {/* Backdrop click dismiss */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[28px] border border-[var(--line)] bg-[var(--surface)] text-[var(--text)] shadow-2xl p-6 sm:p-10"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full border border-[var(--line)] bg-[var(--surface2)] hover:border-[var(--blue2)] text-[var(--muted)] hover:text-[var(--text)] transition-colors z-20"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>

          {/* Header Strip */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="font-mono text-xs font-bold text-[var(--blue2)] tracking-wider px-3 py-1 rounded-full bg-[var(--surface2)] border border-[var(--line)]">
              {project.kind}
            </span>
            <span className="font-mono text-xs text-[var(--muted)]">
              {project.categoryLabel}
            </span>
            <span className="font-mono text-xs text-[var(--muted)]">·</span>
            <span className="font-mono text-xs text-[var(--muted)]">
              {project.year}
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4">
            {project.name}
          </h2>

          <p className="text-base sm:text-lg text-[var(--muted)] leading-relaxed mb-8">
            {project.desc}
          </p>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-[var(--surface2)] border border-[var(--line)] mb-8">
            {project.metrics.map((m) => (
              <div key={m.label}>
                <span className="font-mono text-2xl font-bold text-[var(--blue2)] block">
                  {m.value}
                </span>
                <span className="font-mono text-[10px] tracking-wider text-[var(--muted)] uppercase">
                  {m.label}
                </span>
              </div>
            ))}
          </div>

          {/* Visual Preview Showcase */}
          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-[var(--line)] bg-[var(--bg)] mb-8">
            <Image
              src={project.detailImage || project.previewImage}
              alt={project.name}
              fill
              className="object-contain p-4"
            />
          </div>

          {/* Key Engineering Highlights */}
          <div className="mb-8">
            <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--blue2)] mb-4 flex items-center gap-2">
              <CheckCircle2 size={16} />
              <span>WHAT YOGESH ENGINEERED & BUILT</span>
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.highlights.map((h, i) => (
                <li
                  key={i}
                  className="p-3.5 rounded-xl bg-[var(--surface2)] border border-[var(--line)] text-xs text-[var(--muted)] leading-relaxed flex items-start gap-2.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--blue2)] mt-1.5 shrink-0" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technical Architecture */}
          <div className="mb-8">
            <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--lime)] mb-4 flex items-center gap-2">
              <Cpu size={16} />
              <span>TECHNICAL ARCHITECTURE & STACK</span>
            </h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-full text-xs font-mono bg-[var(--surface2)] border border-[var(--line)] text-[var(--text)]"
                >
                  {t}
                </span>
              ))}
            </div>
            <ul className="space-y-2 text-xs text-[var(--muted)]">
              {project.architecture.map((a, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[var(--blue2)]">→</span>
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Real Note & Actions */}
          <div className="pt-6 border-t border-[var(--line)] flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs text-[var(--muted)] font-mono">
              Role: <strong className="text-[var(--text)]">{project.role}</strong> ({project.duration})
            </span>

            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary text-xs"
                >
                  <Github size={14} />
                  <span>GitHub</span>
                </a>
              )}
              {project.url.startsWith("http") && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary text-xs"
                >
                  <span>Visit Live</span>
                  <ExternalLink size={14} />
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
