"use client";

import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface GlassRibbonProps {
  variant?: "hero" | "connector" | "experiments" | "studio" | "contact" | "compact";
  className?: string;
  interactive?: boolean;
}

export const GlassRibbon: React.FC<GlassRibbonProps> = ({
  variant = "hero",
  className = "",
  interactive = true,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Pointer position for micro-parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs
  const springX = useSpring(mouseX, { stiffness: 45, damping: 15 });
  const springY = useSpring(mouseY, { stiffness: 45, damping: 15 });

  const rotateX = useTransform(springY, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-8, 8]);
  const translateX = useTransform(springX, [-0.5, 0.5], [-12, 12]);
  const translateY = useTransform(springY, [-0.5, 0.5], [-10, 10]);

  useEffect(() => {
    if (!interactive || typeof window === "undefined") return;

    // Disable pointer tracking on touch devices or when reduced motion is preferred
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!isFinePointer || isReducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - (rect.left + rect.width / 2)) / rect.width;
      const y = (e.clientY - (rect.top + rect.height / 2)) / rect.height;
      mouseX.set(Math.max(-1, Math.min(1, x)));
      mouseY.set(Math.max(-1, Math.min(1, y)));
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [interactive, mouseX, mouseY]);

  if (variant === "studio") {
    return (
      <div ref={containerRef} className={`relative flex items-center justify-center ${className}`}>
        <motion.div
          style={{ rotateX, rotateY, x: translateX, y: translateY }}
          className="relative w-72 h-72 sm:w-88 sm:h-88 filter drop-shadow-[0_0_50px_rgba(49,92,255,0.6)]"
        >
          <svg viewBox="0 0 300 300" className="w-full h-full animate-ribbon" fill="none">
            <defs>
              <linearGradient id="studioGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#79A7FF" stopOpacity="0.9" />
                <stop offset="35%" stopColor="#315CFF" stopOpacity="0.75" />
                <stop offset="70%" stopColor="#1B3BB2" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#B7FF4A" stopOpacity="0.4" />
              </linearGradient>
              <linearGradient id="specularGrad" x1="20%" y1="0%" x2="80%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
                <stop offset="50%" stopColor="#A4C4FF" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            {/* 3D Polyhedron / Diamond Ribbon Facets */}
            <polygon points="150,20 260,95 220,240 80,240 40,95" fill="url(#studioGrad)" stroke="rgba(121,167,255,0.4)" strokeWidth="1.5" />
            <polygon points="150,20 150,150 260,95" fill="rgba(255,255,255,0.18)" />
            <polygon points="150,150 220,240 260,95" fill="rgba(49,92,255,0.45)" />
            <polygon points="150,150 80,240 220,240" fill="rgba(27,59,178,0.6)" />
            <polygon points="150,150 40,95 80,240" fill="rgba(121,167,255,0.25)" />
            <polygon points="150,20 40,95 150,150" fill="rgba(255,255,255,0.3)" />
            {/* Edge Specular Lights */}
            <line x1="150" y1="20" x2="150" y2="150" stroke="url(#specularGrad)" strokeWidth="2.5" />
            <line x1="40" y1="95" x2="150" y2="150" stroke="url(#specularGrad)" strokeWidth="2" />
            <line x1="260" y1="95" x2="150" y2="150" stroke="url(#specularGrad)" strokeWidth="2" />
          </svg>
        </motion.div>
      </div>
    );
  }

  if (variant === "compact" || variant === "connector") {
    return (
      <div className={`relative overflow-hidden pointer-events-none ${className}`}>
        <svg viewBox="0 0 800 120" className="w-full h-auto opacity-70" fill="none">
          <defs>
            <linearGradient id="connectorGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#315CFF" stopOpacity="0" />
              <stop offset="30%" stopColor="#315CFF" stopOpacity="0.8" />
              <stop offset="60%" stopColor="#79A7FF" stopOpacity="0.9" />
              <stop offset="85%" stopColor="#B7FF4A" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#315CFF" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0,60 C200,10 350,110 500,40 C650,-20 700,90 800,60"
            stroke="url(#connectorGrad)"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <path
            d="M0,60 C200,10 350,110 500,40 C650,-20 700,90 800,60"
            stroke="#FFFFFF"
            strokeWidth="1.2"
            strokeOpacity="0.6"
            strokeDasharray="8 12"
          />
        </svg>
      </div>
    );
  }

  // Hero & Default Variant: Multi-loop sculptural iridescent glass ribbon
  return (
    <div ref={containerRef} className={`relative flex items-center justify-center select-none ${className}`}>
      <motion.div
        style={{
          rotateX,
          rotateY,
          x: translateX,
          y: translateY,
          perspective: 1000,
        }}
        className="relative w-full h-full flex items-center justify-center"
      >
        <svg
          viewBox="0 0 650 650"
          className="w-full h-full animate-ribbon transform-gpu filter drop-shadow-[0_15px_45px_rgba(49,92,255,0.45)]"
          fill="none"
        >
          <defs>
            {/* Primary Cobalt Body Gradient */}
            <linearGradient id="ribbonBody1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#79A7FF" stopOpacity="0.92" />
              <stop offset="28%" stopColor="#315CFF" stopOpacity="0.82" />
              <stop offset="65%" stopColor="#1E3EA8" stopOpacity="0.88" />
              <stop offset="92%" stopColor="#79A7FF" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#B7FF4A" stopOpacity="0.5" />
            </linearGradient>

            <linearGradient id="ribbonBody2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#315CFF" stopOpacity="0.85" />
              <stop offset="45%" stopColor="#79A7FF" stopOpacity="0.75" />
              <stop offset="80%" stopColor="#111B33" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#436BFF" stopOpacity="0.8" />
            </linearGradient>

            {/* Specular Edge Highlights */}
            <linearGradient id="specularEdge" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.1" />
              <stop offset="35%" stopColor="#FFFFFF" stopOpacity="0.95" />
              <stop offset="70%" stopColor="#BCE2FF" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.2" />
            </linearGradient>

            {/* Ambient Radial Caustic Glow */}
            <radialGradient id="causticGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#315CFF" stopOpacity="0.45" />
              <stop offset="60%" stopColor="#315CFF" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#315CFF" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Deep ambient blur disk */}
          <circle cx="325" cy="325" r="260" fill="url(#causticGlow)" />

          {/* Ribbon Layer 1: Back Loop (behind subject) */}
          <path
            d="M120,440 C80,310 180,140 330,120 C480,100 560,210 530,340 C500,470 380,520 250,510"
            stroke="url(#ribbonBody2)"
            strokeWidth="48"
            strokeLinecap="round"
            fill="none"
            opacity="0.85"
          />

          {/* Ribbon Layer 2: Main Curving Body */}
          <path
            d="M160,190 C260,90 440,90 510,220 C580,350 490,480 340,510 C190,540 100,410 140,280 C180,150 350,110 470,160"
            stroke="url(#ribbonBody1)"
            strokeWidth="52"
            strokeLinecap="round"
            fill="none"
          />

          {/* Ribbon Layer 3: Glass Thickness / Inner Core */}
          <path
            d="M160,190 C260,90 440,90 510,220 C580,350 490,480 340,510 C190,540 100,410 140,280 C180,150 350,110 470,160"
            stroke="rgba(255,255,255,0.22)"
            strokeWidth="20"
            strokeLinecap="round"
            fill="none"
          />

          {/* Ribbon Layer 4: Razor-sharp Specular Glass Reflection */}
          <path
            d="M170,185 C265,85 435,85 505,215 C575,345 485,475 335,505 C185,535 95,405 135,275 C175,145 345,105 465,155"
            stroke="url(#specularEdge)"
            strokeWidth="3.2"
            strokeLinecap="round"
            fill="none"
          />

          {/* Caustic Highlight Points */}
          <circle cx="505" cy="215" r="5" fill="#FFFFFF" opacity="0.9" filter="drop-shadow(0 0 6px #FFFFFF)" />
          <circle cx="140" cy="280" r="4" fill="#B7FF4A" opacity="0.85" filter="drop-shadow(0 0 6px #B7FF4A)" />
          <circle cx="340" cy="510" r="4.5" fill="#79A7FF" opacity="0.8" filter="drop-shadow(0 0 6px #79A7FF)" />
        </svg>
      </motion.div>
    </div>
  );
};
