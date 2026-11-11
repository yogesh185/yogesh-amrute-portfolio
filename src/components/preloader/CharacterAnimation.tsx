"use client";

import { motion } from "framer-motion";

interface CharacterAnimationProps {
  stage: "coding" | "celebrating" | "resolving";
}

export function CharacterAnimation({ stage }: CharacterAnimationProps) {
  return (
    <div className="relative w-64 h-64 sm:w-72 sm:h-72 mx-auto flex items-center justify-center">
      {/* Ambient background aura */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600/20 via-cyan-500/15 to-transparent blur-2xl"
        animate={{
          scale: stage === "celebrating" ? [1, 1.25, 1.1] : [1, 1.08, 1],
          opacity: stage === "resolving" ? 0 : 0.8,
        }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      />

      <svg
        viewBox="0 0 320 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full relative z-10 drop-shadow-2xl"
      >
        <defs>
          <linearGradient id="screen-glow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#2563EB" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="skin-tone" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#D99B77" />
            <stop offset="100%" stopColor="#C4805A" />
          </linearGradient>
          <linearGradient id="hair-tone" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E293B" />
            <stop offset="100%" stopColor="#0F172A" />
          </linearGradient>
          <linearGradient id="jacket-tone" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E293B" />
            <stop offset="100%" stopColor="#090D16" />
          </linearGradient>
          <linearGradient id="desk-tone" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1E293B" />
            <stop offset="50%" stopColor="#334155" />
            <stop offset="100%" stopColor="#1E293B" />
          </linearGradient>
          <linearGradient id="accent-cyan" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00F2FE" />
            <stop offset="100%" stopColor="#4FACFE" />
          </linearGradient>
        </defs>

        {/* Desk Surface */}
        <rect x="30" y="240" width="260" height="12" rx="6" fill="url(#desk-tone)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <rect x="50" y="252" width="220" height="2" fill="url(#accent-cyan)" opacity="0.4" />

        {/* Laptop Base */}
        <path d="M120 236 L200 236 L208 240 L112 240 Z" fill="#475569" stroke="#64748B" strokeWidth="0.8" />
        
        {/* Laptop Screen */}
        <motion.g
          animate={{
            rotateX: stage === "resolving" ? 20 : 0,
          }}
          transition={{ duration: 0.4 }}
        >
          <path d="M126 182 L194 182 L198 236 L122 236 Z" fill="#0F172A" stroke="#38BDF8" strokeWidth="1.5" />
          <path d="M129 185 L191 185 L195 233 L125 233 Z" fill="url(#screen-glow)" opacity="0.85" />
          
          {/* Animated code lines on laptop screen */}
          <motion.line
            x1="135" y1="194" x2="165" y2="194"
            stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          />
          <motion.line
            x1="135" y1="202" x2="182" y2="202"
            stroke="#93C5FD" strokeWidth="2" strokeLinecap="round"
            animate={{ opacity: [0.4, 0.9, 0.4] }}
            transition={{ duration: 1.1, repeat: Infinity, delay: 0.2 }}
          />
          <motion.line
            x1="135" y1="210" x2="172" y2="210"
            stroke="#67E8F9" strokeWidth="2" strokeLinecap="round"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 0.9, repeat: Infinity, delay: 0.4 }}
          />
          <motion.line
            x1="135" y1="218" x2="155" y2="218"
            stroke="#FDE047" strokeWidth="2" strokeLinecap="round"
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 1.2, repeat: Infinity, delay: 0.1 }}
          />
        </motion.g>

        {/* Character: Torso & Dark Jacket over White T-Shirt */}
        <g id="character-body">
          {/* Jacket Body */}
          <path
            d="M105 240 C105 190 120 160 160 160 C200 160 215 190 215 240 Z"
            fill="url(#jacket-tone)"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="1"
          />
          {/* White T-Shirt V-Neck */}
          <path d="M148 160 L160 188 L172 160 Z" fill="#F8FAFC" />
          {/* Inner Shadow / Collar */}
          <path d="M144 160 L160 178 L148 198 L138 185 Z" fill="#090D16" opacity="0.6" />
          <path d="M176 160 L160 178 L172 198 L182 185 Z" fill="#090D16" opacity="0.6" />
        </g>

        {/* Character: Head & Hair */}
        <motion.g
          id="character-head"
          animate={{
            y: stage === "celebrating" ? -6 : [0, 2, 0],
            rotate: stage === "celebrating" ? [0, 3, 0] : [0, -1, 0],
          }}
          transition={{
            y: stage === "celebrating" ? { duration: 0.3 } : { duration: 2, repeat: Infinity, ease: "easeInOut" },
            rotate: stage === "celebrating" ? { duration: 0.4 } : { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          {/* Neck */}
          <rect x="153" y="146" width="14" height="18" rx="4" fill="url(#skin-tone)" />

          {/* Head base */}
          <ellipse cx="160" cy="125" rx="24" ry="28" fill="url(#skin-tone)" />

          {/* Ears */}
          <ellipse cx="134" cy="126" rx="4" ry="6" fill="#C4805A" />
          <ellipse cx="186" cy="126" rx="4" ry="6" fill="#C4805A" />

          {/* Modern Styled Hair */}
          <path
            d="M136 122 C134 100 144 90 160 88 C178 86 188 94 186 116 C182 108 174 102 160 102 C146 102 140 110 136 122 Z"
            fill="url(#hair-tone)"
          />
          <path
            d="M138 108 C144 94 158 92 172 94 C184 96 185 106 185 106 C176 98 162 98 148 104 Z"
            fill="#334155"
          />

          {/* Eyes & Eyebrows */}
          {stage === "celebrating" ? (
            // Smiling curved happy eyes
            <>
              <path d="M147 122 Q152 118 157 122" stroke="#0F172A" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              <path d="M163 122 Q168 118 173 122" stroke="#0F172A" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              {/* Joyful mouth */}
              <path d="M152 134 Q160 142 168 134" stroke="#0F172A" strokeWidth="2.5" strokeLinecap="round" fill="#FFFFFF" />
            </>
          ) : (
            // Focused coding eyes looking down at screen
            <>
              <ellipse cx="152" cy="124" rx="2.5" ry="3.5" fill="#0F172A" />
              <ellipse cx="168" cy="124" rx="2.5" ry="3.5" fill="#0F172A" />
              {/* Focused Eyebrows */}
              <path d="M146 117 L157 119" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" />
              <path d="M174 117 L163 119" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" />
              {/* Gentle concentrated mouth */}
              <path d="M155 136 Q160 138 165 136" stroke="#0F172A" strokeWidth="1.8" strokeLinecap="round" />
            </>
          )}

          {/* Modern Minimal Glasses Frame */}
          <rect x="143" y="116" width="16" height="13" rx="4" fill="none" stroke="#60A5FA" strokeWidth="1.5" opacity="0.85" />
          <rect x="161" y="116" width="16" height="13" rx="4" fill="none" stroke="#60A5FA" strokeWidth="1.5" opacity="0.85" />
          <line x1="159" y1="122" x2="161" y2="122" stroke="#60A5FA" strokeWidth="1.5" />
        </motion.g>

        {/* Arms & Hands */}
        {stage === "celebrating" ? (
          // Left arm on desk, Right arm raised giving thumbs up!
          <g id="celebrating-arms">
            {/* Left resting arm */}
            <path d="M118 200 Q130 228 145 234" stroke="#0F172A" strokeWidth="16" strokeLinecap="round" fill="none" />
            <circle cx="145" cy="234" r="6" fill="url(#skin-tone)" />

            {/* Right arm raised in salute / thumbs up */}
            <motion.g
              initial={{ rotate: -20, originX: "190px", originY: "200px" }}
              animate={{ rotate: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <path d="M200 200 Q225 180 230 150" stroke="#0F172A" strokeWidth="16" strokeLinecap="round" fill="none" />
              {/* Hand with thumbs up */}
              <g transform="translate(225, 135)">
                {/* Fist base */}
                <circle cx="6" cy="12" r="7" fill="url(#skin-tone)" />
                {/* Thumb pointing up */}
                <rect x="3" y="0" width="6" height="12" rx="3" fill="url(#skin-tone)" />
                {/* Success Sparkles around thumbs up */}
                <motion.g
                  animate={{ scale: [0.8, 1.2, 1], rotate: [0, 15, 0] }}
                  transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
                >
                  <path d="M-6 4 L-4 0 L-2 4 L2 6 L-2 8 L-4 12 L-6 8 L-10 6 Z" fill="#FDE047" />
                  <path d="M16 2 L17 0 L18 2 L20 3 L18 4 L17 6 L16 4 L14 3 Z" fill="#67E8F9" />
                  <circle cx="18" cy="16" r="1.5" fill="#38BDF8" />
                </motion.g>
              </g>
            </motion.g>
          </g>
        ) : (
          // Fast rhythmic typing hands
          <g id="typing-arms">
            {/* Left Arm */}
            <motion.path
              d="M120 200 Q130 224 140 234"
              stroke="#0F172A" strokeWidth="14" strokeLinecap="round" fill="none"
              animate={{ d: ["M120 200 Q130 224 140 234", "M120 200 Q130 221 142 231", "M120 200 Q130 224 140 234"] }}
              transition={{ duration: 0.25, repeat: Infinity }}
            />
            {/* Left Hand */}
            <motion.circle
              cx="140" cy="234" r="5" fill="url(#skin-tone)"
              animate={{ cy: [234, 231, 234] }}
              transition={{ duration: 0.25, repeat: Infinity }}
            />

            {/* Right Arm */}
            <motion.path
              d="M200 200 Q190 224 180 234"
              stroke="#0F172A" strokeWidth="14" strokeLinecap="round" fill="none"
              animate={{ d: ["M200 200 Q190 222 178 232", "M200 200 Q190 225 180 234", "M200 200 Q190 222 178 232"] }}
              transition={{ duration: 0.28, repeat: Infinity }}
            />
            {/* Right Hand */}
            <motion.circle
              cx="180" cy="234" r="5" fill="url(#skin-tone)"
              animate={{ cy: [232, 235, 232] }}
              transition={{ duration: 0.28, repeat: Infinity }}
            />
          </g>
        )}

        {/* Floating Creative & Engineering Particles */}
        {stage !== "resolving" && (
          <g id="floating-symbols" className="pointer-events-none select-none">
            {/* Floating Left: { } */}
            <motion.g
              animate={{ y: [-10, -45], opacity: [0, 1, 0], x: [0, -12] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
            >
              <text x="75" y="180" fill="#38BDF8" fontSize="15" fontWeight="bold" fontFamily="monospace">
                {"{ }"}
              </text>
            </motion.g>

            {/* Floating Left: AI */}
            <motion.g
              animate={{ y: [-5, -40], opacity: [0, 1, 0], x: [0, -8] }}
              transition={{ duration: 2.1, repeat: Infinity, delay: 0.6, ease: "easeOut" }}
            >
              <text x="90" y="140" fill="#818CF8" fontSize="13" fontWeight="bold" fontFamily="monospace">
                AI ✦
              </text>
            </motion.g>

            {/* Floating Right: < /> */}
            <motion.g
              animate={{ y: [-10, -50], opacity: [0, 1, 0], x: [0, 14] }}
              transition={{ duration: 1.9, repeat: Infinity, delay: 0.3, ease: "easeOut" }}
            >
              <text x="235" y="175" fill="#22D3EE" fontSize="15" fontWeight="bold" fontFamily="monospace">
                {"</>"}
              </text>
            </motion.g>

            {/* Floating Right: 01 */}
            <motion.g
              animate={{ y: [-8, -42], opacity: [0, 0.9, 0], x: [0, 10] }}
              transition={{ duration: 2.2, repeat: Infinity, delay: 0.9, ease: "easeOut" }}
            >
              <text x="220" y="135" fill="#34D399" fontSize="12" fontWeight="bold" fontFamily="monospace">
                0101
              </text>
            </motion.g>
          </g>
        )}
      </svg>
    </div>
  );
}
