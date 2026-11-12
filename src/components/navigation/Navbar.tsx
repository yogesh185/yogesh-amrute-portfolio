"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sun,
  Moon,
  Menu,
  X,
  ArrowUpRight,
  Github,
  Linkedin,
  Instagram,
  Mail,
} from "lucide-react";
import { PERSONAL_DETAILS } from "@/data/portfolioData";
import { Magnetic } from "@/components/ui/Magnetic";

export const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "Experiments", href: "#experiments" },
  { label: "Studio", href: "#studio" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const FULL_NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Experiments", href: "/experiments" },
  { label: "Studio", href: "/studio" },
  { label: "Beyond Tech", href: "/beyond-tech" },
  { label: "Contact", href: "/contact" },
];

export const Navbar: React.FC = () => {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem("ya-theme");
    const initial =
      saved === "light" || saved === "dark"
        ? saved
        : window.matchMedia("(prefers-color-scheme: light)").matches
        ? "light"
        : "dark";

    setTheme(initial);
    document.documentElement.dataset.theme = initial;

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section spy for homepage
      if (pathname === "/") {
        const sections = ["work", "experiments", "studio", "about", "contact"];
        let current = "";
        for (const s of sections) {
          const el = document.getElementById(s);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 200 && rect.bottom >= 150) {
              current = `#${s}`;
            }
          }
        }
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  // Modal accessibility: Escape key, body scroll lock, focus restoration
  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      triggerRef.current?.focus();
    };
  }, [menuOpen]);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";

    const updateDOM = () => {
      setTheme(next);
      if (typeof window !== "undefined") {
        window.document.documentElement.dataset.theme = next;
        try {
          localStorage.setItem("ya-theme", next);
        } catch {}
      }
    };

    if (typeof document !== "undefined" && "startViewTransition" in document) {
      (document as unknown as { startViewTransition: (cb: () => void) => void }).startViewTransition(updateDOM);
    } else {
      updateDOM();
    }
  };

  return (
    <>
      {/* Floating Capsule Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pt-3.5 sm:pt-4 pointer-events-none transition-all duration-300">
        <nav
          aria-label="Primary"
          className={`pointer-events-auto flex items-center justify-between gap-4 sm:gap-8 px-4 sm:px-5 py-2.5 rounded-full transition-all duration-300 ${
            scrolled
              ? "bg-[color-mix(in_srgb,var(--bg)_82%,transparent)] backdrop-blur-2xl border border-[var(--line)] shadow-2xl shadow-black/30 scale-[0.98]"
              : "bg-[color-mix(in_srgb,var(--bg)_60%,transparent)] backdrop-blur-xl border border-[var(--line)] shadow-lg shadow-black/10"
          } max-w-5xl w-full`}
        >
          {/* YA Monogram */}
          <Link
            href="/"
            className="group flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue)] rounded-full px-1"
            aria-label="Yogesh Amrute Home"
          >
            <span className="font-extrabold text-xl sm:text-2xl tracking-tighter text-[var(--text)] group-hover:text-[var(--blue2)] transition-colors">
              YA
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--blue)] group-hover:scale-125 transition-transform" />
          </Link>

          {/* Center Links (Desktop) */}
          <div className="hidden md:flex items-center gap-1 text-[13px] font-medium text-[var(--muted)]">
            {NAV_LINKS.map((link) => {
              const isSectionActive = activeSection === link.href;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`relative px-3.5 py-1.5 rounded-full transition-all duration-200 hover:text-[var(--text)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue)] ${
                    isSectionActive ? "text-[var(--text)] font-semibold" : ""
                  }`}
                >
                  {isSectionActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-[var(--surface)] border border-[var(--line)] z-0 shadow-sm"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </a>
              );
            })}
          </div>

          {/* Right Action Capsule */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Let's Talk CTA */}
            <Magnetic strength={0.25} className="hidden sm:inline-block">
              <a
                href="#contact"
                className="btn-primary text-xs font-semibold px-4 py-2 rounded-full flex items-center gap-1.5 shadow-md shadow-[var(--glow)]"
              >
                <span>Let&apos;s Talk</span>
                <ArrowUpRight size={13} />
              </a>
            </Magnetic>

            {/* Theme Toggle Button */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
              className="w-8 h-8 rounded-full border border-[var(--line)] bg-[var(--surface)] hover:bg-[var(--surface2)] text-[var(--muted)] hover:text-[var(--text)] flex items-center justify-center transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue)]"
            >
              {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              ref={triggerRef}
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open full site navigation"
              aria-haspopup="dialog"
              aria-expanded={menuOpen}
              className="md:hidden w-8 h-8 rounded-full border border-[var(--line)] bg-[var(--surface)] text-[var(--text)] flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue)]"
            >
              <Menu size={16} />
            </button>
          </div>
        </nav>
      </header>

      {/* Full-Screen Accessible Navigation Dialog (Mobile & Overlay) */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Site Navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[100] bg-[var(--bg)]/98 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-10 select-none overflow-y-auto"
          >
            {/* Top Bar inside Overlay */}
            <div className="flex items-center justify-between w-full max-w-5xl mx-auto">
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="group flex items-center gap-1.5 focus-visible:outline-none"
              >
                <span className="font-extrabold text-2xl tracking-tighter text-[var(--text)]">
                  YA
                </span>
                <span className="w-2 h-2 rounded-full bg-[var(--blue)]" />
              </Link>

              <button
                ref={closeButtonRef}
                type="button"
                onClick={() => setMenuOpen(false)}
                aria-label="Close navigation menu"
                className="w-10 h-10 rounded-full border border-[var(--line)] bg-[var(--surface)] hover:bg-[var(--surface2)] text-[var(--text)] flex items-center justify-center transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue)]"
              >
                <X size={18} />
              </button>
            </div>

            {/* Monumental Navigation Links */}
            <div className="w-full max-w-5xl mx-auto my-auto py-8">
              <div className="flex flex-col space-y-3 sm:space-y-4">
                {FULL_NAV_LINKS.map((item, idx) => {
                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.08 * idx,
                        duration: 0.5,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className="group flex items-baseline gap-4 py-1 text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[var(--text)] hover:text-[var(--blue2)] transition-colors focus-visible:outline-none"
                      >
                        <span className="font-mono text-xs sm:text-sm text-[var(--muted)] font-normal">
                          0{idx + 1}
                        </span>
                        <span>{item.label}</span>
                        <ArrowUpRight
                          size={24}
                          className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[var(--blue2)]"
                        />
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Metadata & Social Connections */}
            <div className="w-full max-w-5xl mx-auto pt-6 border-t border-[var(--line)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--muted)]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[var(--lime)] animate-pulse" />
                <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--text)] font-semibold">
                  AVAILABLE FOR COLLABORATIONS
                </span>
              </div>

              <div className="flex items-center gap-4">
                <a
                  href={`mailto:${PERSONAL_DETAILS.email}`}
                  className="p-2 rounded-full border border-[var(--line)] hover:text-[var(--text)] hover:border-[var(--blue2)] transition-colors"
                  aria-label="Email Yogesh"
                >
                  <Mail size={14} />
                </a>
                <a
                  href={PERSONAL_DETAILS.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-full border border-[var(--line)] hover:text-[var(--text)] hover:border-[var(--blue2)] transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={14} />
                </a>
                <a
                  href={PERSONAL_DETAILS.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-full border border-[var(--line)] hover:text-[var(--text)] hover:border-[var(--blue2)] transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github size={14} />
                </a>
                <a
                  href={PERSONAL_DETAILS.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-full border border-[var(--line)] hover:text-[var(--text)] hover:border-[var(--blue2)] transition-colors"
                  aria-label="Instagram Profile"
                >
                  <Instagram size={14} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
