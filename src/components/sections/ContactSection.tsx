"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Mail, Linkedin, Github, Instagram, ArrowUpRight, Send, CheckCircle2 } from "lucide-react";
import { PERSONAL_DETAILS } from "@/data/portfolioData";

export const ContactSection: React.FC = () => {
  const [showDirectForm, setShowDirectForm] = useState(false);
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message) return;
    setSent(true);
    setTimeout(() => {
      window.location.href = `mailto:${PERSONAL_DETAILS.email}?subject=Collaboration%20Inquiry&body=${encodeURIComponent(message)}`;
    }, 400);
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="section-shell max-w-xl mx-auto flex flex-col items-center text-center">
        {/* Contact Container with Mountain Backdrop matching Screen 9 */}
        <div className="relative w-full max-w-[360px] sm:max-w-[420px] rounded-[36px] overflow-hidden border border-[var(--line)] bg-[var(--surface)] p-6 sm:p-8 shadow-2xl flex flex-col items-center">
          
          {/* Background Mountain Ridge Art matching Screen 9 with seamless downward dissolve */}
          <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden mb-6 [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)]">
            <Image
              src="/images/personal/travel/travel-mountain.png"
              alt="Mountain Ridge Sunset Atmosphere"
              fill
              className="object-cover"
            />
          </div>

          {/* Title matching Screen 9 verbatim */}
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text)] mb-3">
            Let&apos;s Build <br />
            Together.
          </h2>

          {/* Subtitle matching Screen 9 verbatim */}
          <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed mb-8 max-w-xs">
            Whether it&apos;s a product, an idea or a collaboration — I&apos;m always open to interesting conversations.
          </p>

          {/* Contact Links Rows matching Screen 9 */}
          <div className="w-full space-y-2.5 mb-8">
            {/* Email */}
            <a
              href={`mailto:${PERSONAL_DETAILS.email}`}
              className="flex items-center gap-3 p-3.5 rounded-2xl border border-[var(--line)] bg-[var(--surface2)] hover:border-[var(--blue2)] transition-colors text-xs text-[var(--text)] text-left"
            >
              <div className="text-[var(--blue2)]">
                <Mail size={16} />
              </div>
              <span className="font-mono text-[11px] truncate flex-1">
                {PERSONAL_DETAILS.email}
              </span>
            </a>

            {/* LinkedIn */}
            <a
              href={PERSONAL_DETAILS.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 p-3.5 rounded-2xl border border-[var(--line)] bg-[var(--surface2)] hover:border-[var(--blue2)] transition-colors text-xs text-[var(--text)] text-left"
            >
              <div className="text-[var(--blue2)]">
                <Linkedin size={16} />
              </div>
              <span className="font-semibold text-xs flex-1">
                LinkedIn
              </span>
              <ArrowUpRight size={13} className="text-[var(--muted)]" />
            </a>

            {/* GitHub */}
            <a
              href={PERSONAL_DETAILS.socials.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 p-3.5 rounded-2xl border border-[var(--line)] bg-[var(--surface2)] hover:border-[var(--blue2)] transition-colors text-xs text-[var(--text)] text-left"
            >
              <div className="text-[var(--blue2)]">
                <Github size={16} />
              </div>
              <span className="font-semibold text-xs flex-1">
                GitHub
              </span>
              <ArrowUpRight size={13} className="text-[var(--muted)]" />
            </a>

            {/* Instagram */}
            <a
              href={PERSONAL_DETAILS.socials.instagram}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 p-3.5 rounded-2xl border border-[var(--line)] bg-[var(--surface2)] hover:border-[var(--blue2)] transition-colors text-xs text-[var(--text)] text-left"
            >
              <div className="text-[var(--blue2)]">
                <Instagram size={16} />
              </div>
              <span className="font-semibold text-xs flex-1">
                Instagram
              </span>
              <ArrowUpRight size={13} className="text-[var(--muted)]" />
            </a>
          </div>

          {/* Bottom Primary CTA Button matching Screen 9 */}
          {!showDirectForm ? (
            <button
              type="button"
              onClick={() => setShowDirectForm(true)}
              className="btn-primary w-full py-4 text-xs font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue2)]"
            >
              <span>Get in Touch</span>
              <ArrowUpRight size={15} />
            </button>
          ) : (
            <form onSubmit={handleSendMessage} className="w-full space-y-3 text-left">
              <div>
                <label
                  htmlFor="contact-note"
                  className="block text-xs font-semibold text-[var(--text)] mb-1.5"
                >
                  Direct Inquiry Note
                </label>
                <textarea
                  id="contact-note"
                  required
                  rows={3}
                  placeholder="Share a brief overview of your product, challenge, or collaboration idea..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full p-3 rounded-xl border border-[var(--line)] bg-[var(--surface2)] text-xs text-[var(--text)] placeholder-[var(--muted)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue2)] transition-all resize-none"
                />
                <p className="text-[10px] text-[var(--muted)] mt-1 font-mono">
                  Opens your email client with this note prepared for {PERSONAL_DETAILS.email}
                </p>
              </div>

              <button
                type="submit"
                className="btn-primary w-full py-3.5 text-xs font-bold flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue2)]"
              >
                <Send size={13} />
                <span>Compose in Email Client</span>
              </button>
            </form>
          )}

          {sent && (
            <div className="mt-3 text-[11px] font-mono text-[var(--lime)] flex items-center gap-1.5">
              <CheckCircle2 size={13} />
              <span>Handoff initiated — launching email composer...</span>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};
