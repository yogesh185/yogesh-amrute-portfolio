import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/navigation/Navbar";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Contact // Yogesh Amrute — Let's Build Together",
  description:
    "Get in touch with Yogesh Amrute for full-stack engineering, AI product development, and architectural collaborations.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <Navbar />
      <div className="pt-12">
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
}
