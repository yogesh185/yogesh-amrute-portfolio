"use client";

import React, { useEffect, useState } from "react";
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

export const NAV_LINKS = [
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
  const pathname = usePathname();

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
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    if (typeof window !== "undefined") {
      window.document.documentElement.dataset.theme = next;
      try {
        localStorage.setItem("ya-theme", next);
      } catch {}
    }
  };

  const getIsActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? "bg-[color-mix(in_srgb,var(--bg)_88%,transparent)] backdrop-blur-xl border-b border-[var(--line)] shadow-lg shadow-black/10 py-3"
            : "bg-transparent py-4 sm:py-5"
        }`}
      >
        <div className="section-shell flex items-center justify-between">
          {/* YA Wordmark */}
          <Link
            href="/"
            className="group flex items-center gap-1 focus:outline-none"
            aria-label="Yogesh Amrute Home"
          >
            <span className="font-extrabold text-2xl tracking-tighter text-[var(--text)] group-hover:text-[var(--blue2)] transition-colors">
              YA
            </span>
            <span className="w-2 h-2 rounded-full bg-[var(--blue)] group-hover:scale-125 transition-transform" />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-[13px] font-medium text-[var(--muted)]">
            {NAV_LINKS.slice(1).map((link) => {
              const active = getIsActive(link.href);
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`transition-colors relative py-1 ${
                    active
                      ? "text-[var(--text)] font-semibold"
                      : "hover:text-[var(--text)]"
                  }`}
                >
                  <span>{link.label}</span>
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--blue)] rounded-full"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2.5">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="flex items-center justify-center w-9 h-9 sm:w-auto sm:px-3 sm:py-1.5 rounded-full border border-[var(--line)] bg-[var(--surface)] text-[var(--muted)] hover:text-[var(--text)] hover:border-[var(--blue2)] transition-colors"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              <span className="text-[var(--blue2)]">
                {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
              </span>
              <span className="hidden sm:inline font-sans text-xs capitalize ml-1.5 font-medium">
                {theme === "dark" ? "Light" : "Dark"}
              </span>
            </button>

            {/* Let's talk Desktop Pill CTA */}
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[var(--blue)] hover:bg-[#254fe8] text-white font-bold text-xs shadow-md shadow-[var(--glow)] transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Let&apos;s talk</span>
              <ArrowUpRight size={13} />
            </Link>

            {/* Mobile Hamburger Button (Matching Screen 1 of reference) */}
            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-full border border-[var(--line)] bg-[var(--surface)] text-[var(--text)] hover:border-[var(--blue2)] transition-colors"
              aria-label="Open mobile navigation"
            >
              <Menu size={16} />
            </button>
          </div>
        </div>
      </header>

      {/* Screen 2: Navigation Menu Fullscreen Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex flex-col justify-between p-6 sm:p-8 bg-[var(--bg)] text-[var(--text)] overflow-hidden"
          >
            {/* Top Bar matching Screen 2 */}
            <div className="flex items-center justify-between">
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-1"
              >
                <span className="font-extrabold text-2xl tracking-tighter">YA</span>
                <span className="w-2 h-2 rounded-full bg-[var(--blue)]" />
              </Link>
              <button
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center w-10 h-10 rounded-full border border-[var(--line)] bg-[var(--surface)] text-[var(--text)] hover:border-[var(--blue2)] transition-colors"
                aria-label="Close menu"
              >
                <X size={18} />
              </button>
            </div>

            {/* Menu Items matching Screen 2 */}
            <div className="relative z-10 flex flex-col justify-center my-auto py-6 space-y-5">
              {NAV_LINKS.map((link, idx) => {
                const isActive = getIsActive(link.href);
                return (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04 + 0.05, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className={`flex items-center gap-3 text-2xl sm:text-3xl font-sans font-semibold tracking-tight transition-colors ${
                        isActive
                          ? "text-[var(--text)]"
                          : "text-[var(--muted)] hover:text-[var(--text)]"
                      }`}
                    >
                      {isActive ? (
                        <span className="w-2.5 h-2.5 rounded-full bg-[var(--blue)] shadow-[0_0_12px_var(--blue)]" />
                      ) : (
                        <span className="w-2.5 h-2.5" />
                      )}
                      <span>{link.label}</span>
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* Ambient Background Wave matching Screen 2 */}
            <div className="absolute bottom-16 left-0 right-0 h-48 pointer-events-none opacity-40 overflow-hidden">
              <svg viewBox="0 0 600 200" className="w-full h-full" fill="none">
                <defs>
                  <linearGradient id="navWaveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#315CFF" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#79A7FF" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#B7FF4A" stopOpacity="0.2" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,120 C150,50 300,180 450,90 C520,50 580,110 650,80 L650,200 L0,200 Z"
                  fill="url(#navWaveGrad)"
                />
              </svg>
            </div>

            {/* Bottom Ambient Glow Wave & Social Icons matching Screen 2 */}
            <div className="relative z-10 pt-6 border-t border-[var(--line)] flex items-center justify-between">
              <div className="flex items-center gap-5 text-[var(--muted)]">
                <a
                  href={PERSONAL_DETAILS.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="hover:text-[var(--blue2)] transition-colors"
                >
                  <Github size={18} />
                </a>
                <a
                  href={PERSONAL_DETAILS.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="hover:text-[var(--blue2)] transition-colors"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href={PERSONAL_DETAILS.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="hover:text-[var(--blue2)] transition-colors"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href={`mailto:${PERSONAL_DETAILS.email}`}
                  aria-label="Email"
                  className="hover:text-[var(--blue2)] transition-colors"
                >
                  <Mail size={18} />
                </a>
              </div>

              <div className="font-mono text-[10px] text-[var(--muted)] uppercase tracking-wider">
                BHOPAL, INDIA
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
