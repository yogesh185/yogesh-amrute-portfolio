import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, CheckCircle2, Cpu, ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/sections/Footer";
import { PROJECTS } from "@/data/portfolioData";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.name} // Case Study by Yogesh Amrute`,
    description: project.summary,
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <Navbar />
      <article className="py-16 sm:py-24">
        <div className="section-shell max-w-4xl">
          {/* Back Link */}
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs font-mono text-[var(--muted)] hover:text-[var(--blue2)] mb-10 transition-colors"
          >
            <ArrowLeft size={14} />
            <span>BACK TO ALL PROJECTS</span>
          </Link>

          {/* Header Metadata */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="font-mono text-xs font-bold text-[var(--blue2)] px-3 py-1 rounded-full bg-[var(--surface2)] border border-[var(--line)]">
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

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6">
            {project.name}
          </h1>

          <p className="text-lg sm:text-xl text-[var(--muted)] leading-relaxed mb-10 font-normal">
            {project.desc}
          </p>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-2xl bg-[var(--surface)] border border-[var(--line)] mb-12">
            {project.metrics.map((m) => (
              <div key={m.label}>
                <span className="font-mono text-3xl font-bold text-[var(--blue2)] block">
                  {m.value}
                </span>
                <span className="font-mono text-[10px] tracking-wider text-[var(--muted)] uppercase">
                  {m.label}
                </span>
              </div>
            ))}
          </div>

          {/* Main Visual Showcase */}
          <div className="relative w-full aspect-[16/9] rounded-[24px] overflow-hidden border border-[var(--line)] bg-[var(--surface)] mb-14 shadow-2xl">
            <Image
              src={project.detailImage || project.previewImage}
              alt={project.name}
              fill
              priority
              className="object-contain p-4 sm:p-8"
            />
          </div>

          {/* Deep Dive: Problem & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
            <div className="p-7 rounded-2xl border border-[var(--line)] bg-[var(--surface)]">
              <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--blue2)] mb-3">
                THE CHALLENGE
              </h3>
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                {project.challenges}
              </p>
            </div>
            <div className="p-7 rounded-2xl border border-[var(--line)] bg-[var(--surface)]">
              <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--lime)] mb-3">
                THE ARCHITECTURAL SOLUTION
              </h3>
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Highlights */}
          <div className="mb-14">
            <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--blue2)] mb-6 flex items-center gap-2">
              <CheckCircle2 size={16} />
              <span>SELECTED ARCHITECTURAL CONTRIBUTIONS</span>
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.highlights.map((h, i) => (
                <li
                  key={i}
                  className="p-5 rounded-2xl bg-[var(--surface)] border border-[var(--line)] text-xs text-[var(--muted)] leading-relaxed flex items-start gap-3"
                >
                  <span className="w-2 h-2 rounded-full bg-[var(--blue2)] mt-1.5 shrink-0" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technology Stack & External Links */}
          <div className="p-8 rounded-[28px] border border-[var(--line)] bg-[var(--surface)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <span className="font-mono text-xs text-[var(--muted)] uppercase tracking-wider block mb-2">
                TECHNOLOGY ECOSYSTEM
              </span>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-full text-xs font-mono bg-[var(--surface2)] border border-[var(--line)] text-[var(--text)]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

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
                  <span>Visit Live Project</span>
                  <ExternalLink size={14} />
                </a>
              )}
            </div>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}
