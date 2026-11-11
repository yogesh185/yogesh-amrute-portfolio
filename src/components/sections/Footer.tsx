"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp, Github, Linkedin, Instagram, Mail } from "lucide-react";
import { PERSONAL_DETAILS } from "@/data/portfolioData";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-[var(--line)] bg-[var(--bg)] text-[var(--muted)]">
      <div className="section-shell flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Monogram and Tagline */}
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="font-extrabold text-2xl tracking-tighter text-[var(--text)] hover:text-[var(--blue2)] transition-colors"
          >
            YA<span className="text-[var(--blue)]">.</span>
          </Link>
          <div className="h-4 w-[1px] bg-[var(--line)]" />
          <p className="text-xs">
            Designed with curiosity. Built with intention.
          </p>
        </div>

        {/* Center: Social Links */}
        <div className="flex items-center gap-5">
          <a
            href={PERSONAL_DETAILS.socials.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="hover:text-[var(--blue2)] transition-colors"
          >
            <Github size={17} />
          </a>
          <a
            href={PERSONAL_DETAILS.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hover:text-[var(--blue2)] transition-colors"
          >
            <Linkedin size={17} />
          </a>
          <a
            href={PERSONAL_DETAILS.socials.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="hover:text-[var(--blue2)] transition-colors"
          >
            <Instagram size={17} />
          </a>
          <a
            href={`mailto:${PERSONAL_DETAILS.email}`}
            aria-label="Email"
            className="hover:text-[var(--blue2)] transition-colors"
          >
            <Mail size={17} />
          </a>
        </div>

        {/* Right: Year, Location & Back to Top */}
        <div className="flex items-center gap-6 text-xs font-mono">
          <span>© {new Date().getFullYear()} {PERSONAL_DETAILS.name}</span>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-[var(--text)] transition-colors"
            aria-label="Back to top"
          >
            <span>Top</span>
            <ArrowUp size={13} />
          </button>
        </div>
      </div>
    </footer>
  );
};
