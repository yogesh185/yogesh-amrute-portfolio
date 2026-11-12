"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
  borderColor?: string;
}

export const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className = "",
  spotlightColor = "rgba(49, 92, 255, 0.18)",
  borderColor = "rgba(121, 167, 255, 0.35)",
  ...props
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [canHover, setCanHover] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const rafId = requestAnimationFrame(() => {
      if (typeof window !== "undefined") {
        setCanHover(window.matchMedia("(pointer: fine)").matches);
      }
    });
    return () => cancelAnimationFrame(rafId);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!canHover || !cardRef.current) return;
    const { left, top } = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!canHover || !cardRef.current) return;
    const { left, top } = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const background = useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, ${spotlightColor}, transparent 80%)`;
  const borderBackground = useMotionTemplate`radial-gradient(320px circle at ${mouseX}px ${mouseY}px, ${borderColor}, transparent 70%)`;

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`group relative rounded-[24px] overflow-hidden border border-[var(--line)] bg-[var(--surface)] transition-all duration-300 ${className}`}
      {...props}
    >
      {/* Dynamic Specular Border Glow */}
      {canHover && (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-px rounded-[24px] transition-opacity duration-300"
          style={{
            background: borderBackground,
            opacity: isHovered ? 1 : 0,
          }}
        />
      )}

      {/* Dynamic Specular Surface Glow */}
      {canHover && (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-[24px] transition-opacity duration-300"
          style={{
            background,
            opacity: isHovered ? 1 : 0,
          }}
        />
      )}

      {/* Card Content */}
      <div className="relative z-10 w-full h-full">{children}</div>
    </div>
  );
};
