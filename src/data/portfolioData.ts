export interface Project {
  id: string;
  slug: string;
  name: string;
  kind: "REAL PROJECT" | "MY VENTURE" | "BUILT PROJECT";
  type: "Platform" | "Website" | "Studio" | "AI";
  categoryLabel: string;
  summary: string;
  desc: string;
  url: string;
  githubUrl?: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  visual: string;
  previewImage: string;
  detailImage?: string;
  role: string;
  duration: string;
  year: number;
  featured: boolean;
  accentColor: string;
  note: string;
  highlights: string[];
  architecture: string[];
  challenges: string;
  solution: string;
}

export interface Concept {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  desc: string;
  previewImage: string;
  tags: string[];
  features: string[];
  accentColor: string;
  disclaimer: string;
}

export interface BeyondTechItem {
  id: string;
  category: "MUSIC" | "MARTIAL ARTS" | "SPORTS" | "CHESS" | "EXPLORATION";
  title: string;
  subtitle: string;
  desc: string;
  image: string;
  symbol?: string;
  quote?: string;
  badge: string;
}

export const PERSONAL_DETAILS = {
  name: "Yogesh Amrute",
  initials: "YA",
  titles: [
    "Full-Stack Engineer",
    "AI Engineer / Builder",
    "Creative Technologist",
    "Product Thinker",
    "Founder of YARVO.agency"
  ],
  tagline: "Building digital products that move ideas forward.",
  supportingCopy: "Engineer by craft. Creator by curiosity.",
  bio: "I'm Yogesh — a full-stack engineer, AI builder and entrepreneur passionate about creating meaningful digital products, exploring emerging technology and bringing ambitious ideas to life.",
  location: "Bhopal, India",
  timezone: "IST (UTC+5:30)",
  availability: "Open to selected collaborations",
  email: "hello@yogeshamrute.dev",
  socials: {
    github: "https://github.com/yogeshamrute",
    linkedin: "https://linkedin.com/in/yogeshamrute",
    instagram: "https://instagram.com/yogeshamrute",
    studio: "https://yarvo.agency"
  },
  stats: [
    { label: "Production Projects", value: "5+" },
    { label: "Concept Prototypes", value: "3+" },
    { label: "Years Engineering", value: "2+" },
    { label: "Code & Craft", value: "100%" }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: "intrust-india",
    slug: "intrust-india",
    name: "Intrust India",
    kind: "REAL PROJECT",
    type: "Platform",
    categoryLabel: "Business & Commerce Ecosystem",
    summary: "A connected enterprise ecosystem spanning commerce, merchant workflows, CRM, HRM, wallets and rewards.",
    desc: "Intrust India is a unified business operations and commerce infrastructure platform. It integrates customer-facing commerce, merchant management interfaces, internal CRM, HRM payroll, digital wallets, gift card distribution and automated reward mechanisms into one cohesive system.",
    url: "https://www.intrustindia.com",
    tags: ["Next.js", "React", "Tailwind CSS", "Supabase", "APIs"],
    metrics: [
      { label: "Architecture Modules", value: "12+" },
      { label: "Registered Users", value: "6K+" },
      { label: "Catalog Items", value: "1.8L+" },
      { label: "Performance Score", value: "98/100" }
    ],
    visual: "intrust",
    previewImage: "/images/projects/intrust/intrust-preview.png",
    detailImage: "/images/projects/intrust/intrust-detail.png",
    role: "Lead Full-Stack Engineer & Architect",
    duration: "10 Months",
    year: 2024,
    featured: true,
    accentColor: "#315CFF",
    note: "Live production platform · Showcases modules personally designed and engineered by Yogesh.",
    highlights: [
      "Engineered high-concurrency commerce checkout with real-time inventory locking",
      "Architected role-based multi-tenant dashboard for customers, merchants, and operations staff",
      "Implemented secure digital wallet ledger with transaction verification and gift card redemptions",
      "Built internal HRM and merchant settlement workflows backed by Supabase row-level security"
    ],
    architecture: [
      "Next.js App Router for server-rendered storefronts and dynamic admin dashboards",
      "Supabase PostgreSQL with Row Level Security (RLS) for multi-tenant data isolation",
      "Optimistic UI updates and cache revalidation for high-speed merchant operations",
      "Tailwind CSS component system tailored for dense data tables and mobile point-of-sale"
    ],
    challenges: "Consolidating fragmented business functions—customer storefront, merchant orders, staff HRM, and wallet ledgers—into a single synchronized ecosystem without latency bottlenecks.",
    solution: "Designed modular domain-driven micro-services connected via unified API routes and Supabase realtime subscriptions, ensuring instant state sync across all operational portals."
  },
  {
    id: "aadi-seeds",
    slug: "aadi-seeds",
    name: "Aadi Seeds",
    kind: "REAL PROJECT",
    type: "Website",
    categoryLabel: "Agriculture & Seed Business",
    summary: "Modern digital presence and agricultural product directory for a leading seed enterprise.",
    desc: "A digital experience crafted for Aadi Seeds, an agricultural enterprise dedicated to high-yield seeds and farming solutions. Built to give farmers, distributors, and agronomists clear access to crop varieties, germination specs, and regional dealer contacts.",
    url: "https://aadiseeds.in",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "Responsive Design"],
    metrics: [
      { label: "Crop Varieties", value: "40+" },
      { label: "Mobile First", value: "100%" },
      { label: "Lighthouse Performance", value: "99" },
      { label: "Status", value: "Live Client" }
    ],
    visual: "aadi",
    previewImage: "/images/projects/aadi-seeds/aadi-preview.png",
    detailImage: "/images/projects/aadi-seeds/aadi-preview.png",
    role: "Frontend Engineer & UI Designer",
    duration: "3 Months",
    year: 2024,
    featured: true,
    accentColor: "#4E9F3D",
    note: "Real client deployment · Natural, premium agrarian design system.",
    highlights: [
      "Crafted an organic agrarian visual identity using earthy botanic tones and clean typography",
      "Engineered an offline-resilient mobile crop catalog tailored for rural and low-bandwidth connections",
      "Created dynamic product comparison filters for hybrid seed yields and seasonal sowing windows",
      "Integrated regional distributor locator with direct WhatsApp inquiry dispatch"
    ],
    architecture: [
      "Static Site Generation (SSG) for instant page load on 3G/4G rural mobile devices",
      "Modern CSS variables and Tailwind utilities for high-contrast sunlight readability",
      "Lightweight responsive image optimization using next/image with AVIF/WebP formats"
    ],
    challenges: "Building a digital presence that feels modern and premium while remaining ultra-accessible and fast for farmers accessing the site from rural mobile devices with variable connectivity.",
    solution: "Leveraged pre-rendered static generation, zero heavy third-party tracking scripts, and a tactile, large-touch-target interface with localized inquiry paths."
  },
  {
    id: "yarvo-agency",
    slug: "yarvo-agency",
    name: "YARVO.agency",
    kind: "MY VENTURE",
    type: "Studio",
    categoryLabel: "Creative Technology Studio",
    summary: "Independent creative technology studio combining strategy, design, engineering and AI.",
    desc: "YARVO is Yogesh's entrepreneurial venture—a boutique creative technology studio partnering with ambitious founders, startups, and brands to craft high-impact digital products, immersive web experiences, and intelligent AI tools.",
    url: "https://yarvo.agency",
    tags: ["Creative Direction", "Next.js", "WebGL", "AI Solutions"],
    metrics: [
      { label: "Role", value: "Founder & Lead" },
      { label: "Core Pillars", value: "Strategy + Code" },
      { label: "Visual Identity", value: "Obsidian & Blue" },
      { label: "Venture Status", value: "Active Studio" }
    ],
    visual: "yarvo",
    previewImage: "/images/projects/yarvo/yarvo-showcase.png",
    detailImage: "/images/projects/yarvo/yarvo-crystal.png",
    role: "Founder & Creative Technologist",
    duration: "Ongoing",
    year: 2024,
    featured: true,
    accentColor: "#315CFF",
    note: "Founder-led venture · Digital studio combining engineering, motion, and digital growth.",
    highlights: [
      "Formulated studio vision, service offerings, and high-standard design engineering ethos",
      "Built bespoke digital experiences blending cinematic 3D elements with micro-animations",
      "Architected reusable design system and rapid prototype pipelines for early-stage founders",
      "Helped clients transition from legacy websites to modern performant web applications"
    ],
    architecture: [
      "Next.js App Router with React Server Components for crisp performance",
      "CSS Glassmorphism & GPU-accelerated transforms for cinematic visual flair",
      "Framer Motion layout transitions and responsive viewport choreography"
    ],
    challenges: "Positioning an independent technology studio to compete on visual sophistication and engineering rigor against larger established agencies.",
    solution: "Demonstrating end-to-end craft through live production case studies, custom interactive prototypes, and direct founder-level technical execution."
  },
  {
    id: "doc-ai",
    slug: "doc-ai",
    name: "Doc AI",
    kind: "BUILT PROJECT",
    type: "AI",
    categoryLabel: "Intelligent Document Intelligence",
    summary: "AI-powered document intelligence experience exploring conversational retrieval over complex knowledge bases.",
    desc: "Doc AI transforms dense PDFs, contracts, research papers, and technical specifications into interactive conversational knowledge. Built with a robust retrieval-augmented generation (RAG) pipeline, vector search, and precise source attribution.",
    url: "#contact",
    githubUrl: "https://github.com/yogeshamrute/doc-ai",
    tags: ["Python", "FastAPI", "LangChain", "Vector DB", "React"],
    metrics: [
      { label: "Chunk Indexing", value: "Sub-Second" },
      { label: "Accuracy", value: "Source-Cited" },
      { label: "Backend", value: "FastAPI + RAG" },
      { label: "Frontend", value: "Streaming UI" }
    ],
    visual: "doc",
    previewImage: "/images/projects/intrust/intrust-detail.png",
    detailImage: "/images/concepts/nexus/nexus-mockup.png",
    role: "AI Engineer & Full-Stack Developer",
    duration: "4 Months",
    year: 2024,
    featured: true,
    accentColor: "#79A7FF",
    note: "Built technical implementation · Real RAG architecture with source document citations.",
    highlights: [
      "Engineered document ingestion pipeline supporting recursive chunking and semantic overlap",
      "Implemented vector embedding search using cosine similarity for high-precision context retrieval",
      "Built real-time token streaming frontend with markdown rendering and highlighted source page links",
      "Integrated evaluation guardrails to prevent hallucinations and maintain verifiable factuality"
    ],
    architecture: [
      "FastAPI asynchronous backend with Python LangChain integration",
      "Vector embeddings stored in Chroma / FAISS with hybrid keyword-vector search",
      "Next.js client with EventSource streaming and syntax-highlighted citations"
    ],
    challenges: "Eliminating generative hallucinations and ensuring that every claim in the response maps strictly to an exact page, paragraph, and line in the uploaded document.",
    solution: "Implemented strict chunk-level metadata injection and prompt guardrails requiring the LLM to output verbatim quotes and verified citation anchors."
  }
];

export const CONCEPTS: Concept[] = [
  {
    id: "avara",
    slug: "avara",
    name: "AVARA",
    subtitle: "Avatar Communication & Voice Intelligence",
    desc: "A conceptual mobile-first platform exploring expressive, real-time AI avatars, low-latency voice conversations, and personalized digital companionship designed for deep focus and emotional intelligence.",
    previewImage: "/images/concepts/avara/avara-mockup.png",
    tags: ["Mobile Concept", "AI Avatars", "Voice Synthesis", "Spatial UI"],
    features: [
      "Real-time expressive facial animation responding to voice cadence and emotion",
      "Sub-200ms conversational voice loop powered by audio streaming models",
      "Adaptive avatar persona styling from minimalist abstract forms to photorealistic presence",
      "Privacy-first memory sandbox allowing users full sovereignty over stored interaction history"
    ],
    accentColor: "#79A7FF",
    disclaimer: "INDEPENDENT CONCEPT — NOT A LAUNCHED PRODUCT. EXPLORATORY INTERACTION RESEARCH."
  },
  {
    id: "orbit",
    slug: "orbit",
    name: "ORBIT",
    subtitle: "Personal Contextual Intelligence",
    desc: "A speculative operating system layer exploring proactive assistance, contextual long-term memory, automated task decomposition, and ambient intelligence that organizes daily life without notification fatigue.",
    previewImage: "/images/concepts/orbit/orbit-mockup.png",
    tags: ["Agentic AI", "Contextual Memory", "Workflow Automation", "Ambient UX"],
    features: [
      "Contextual knowledge graph connecting calendar, active projects, reading lists and communications",
      "Proactive daily synthesis briefing that highlights only high-leverage priorities",
      "Natural language intent parser that drafts emails, summarizes discussions and books meetings",
      "Zero-clutter interface that fades into the background until contextually triggered"
    ],
    accentColor: "#315CFF",
    disclaimer: "INDEPENDENT CONCEPT — NOT A LAUNCHED PRODUCT. SYSTEM DESIGN PROTOTYPE."
  },
  {
    id: "nexus",
    slug: "nexus",
    name: "NEXUS",
    subtitle: "Connected Lifestyle & Decentralized Identity",
    desc: "An exploration of unified digital identity, seamless multi-service authentication, earned tokenized rewards, and connected everyday lifestyle tools inside one cohesive, privacy-centric mobile interface.",
    previewImage: "/images/concepts/nexus/nexus-mockup.png",
    tags: ["Digital Identity", "Connected Services", "Gamified Rewards", "Fintech Concept"],
    features: [
      "Unified biometric passport for passwordless authentication across third-party web services",
      "Real-time lifestyle dashboard aggregating mobility, subscriptions, orders and loyalty credits",
      "Decentralized verifiable credentials ensuring users never expose sensitive personally identifiable info",
      "Spatial card interactions with haptic feedback and dynamic fluid micro-animations"
    ],
    accentColor: "#B7FF4A",
    disclaimer: "INDEPENDENT CONCEPT — NOT A LAUNCHED PRODUCT. SPECULATIVE PRODUCT ARCHITECTURE."
  }
];

export const CAPABILITIES = [
  {
    number: "01",
    title: "Engineering",
    subtitle: "Build the foundation.",
    desc: "Architecting reliable, scalable full-stack web applications, REST/GraphQL APIs, relational schemas, caching layers, and high-throughput systems that perform under load.",
    tags: ["Next.js & React 19", "TypeScript", "Node.js & Python", "PostgreSQL & Supabase", "System Architecture", "Performance Optimization"]
  },
  {
    number: "02",
    title: "AI & Intelligence",
    subtitle: "Make systems smarter.",
    desc: "Building practical LLM applications, retrieval-augmented generation (RAG) pipelines, conversational agents, vector search embeddings, and intelligent background automation.",
    tags: ["RAG Pipelines", "Vector Databases", "LangChain & LlamaIndex", "Prompt Engineering", "OpenAI / Claude APIs", "Autonomous Agents"]
  },
  {
    number: "03",
    title: "Digital Experiences",
    subtitle: "Make it feel right.",
    desc: "Crafting tactile, cinematic frontend interfaces with intentional typography, micro-interactions, responsive device geometry, and smooth GPU-accelerated motion choreography.",
    tags: ["Tailwind CSS v4", "Framer Motion", "GSAP & ScrollTrigger", "Responsive Architecture", "Micro-Interactions", "Design Systems"]
  },
  {
    number: "04",
    title: "Product Thinking",
    subtitle: "Solve the right problem.",
    desc: "Bridging engineering rigor with founder mindset—rapid prototyping, user journeys, iterative experimentation, product strategy, and relentless focus on shipped outcomes.",
    tags: ["Product Strategy", "Rapid Prototyping", "MVP Scoping", "User Experience", "Growth Architecture", "Founder Execution"]
  }
];

export const BEYOND_TECH: BeyondTechItem[] = [
  {
    id: "music",
    category: "MUSIC",
    title: "Guitar & Keys",
    subtitle: "Acoustic Harmony & Melody",
    desc: "Playing acoustic guitar on a Yamaha FS80C and exploring chord progressions on keys. Music is where analytical discipline meets creative expression — finding resonance in timing, tone, and tempo.",
    image: "/images/personal/music/music-guitar.png",
    symbol: "♫",
    quote: "Precision in timing. Emotion in melody.",
    badge: "Yamaha FS80C"
  },
  {
    id: "martial-arts",
    category: "MARTIAL ARTS",
    title: "Judo & Discipline",
    subtitle: "Balance, Patience & Leverage",
    desc: "Years of competitive Judo tournament training taught me how to use an opponent's momentum, stay grounded under pressure, and respect the discipline required to stand back up after every throw.",
    image: "/images/personal/martial-arts/martial-arts-original.png",
    symbol: "柔",
    quote: "Maximum efficiency, minimum effort. Mutual welfare and benefit.",
    badge: "Tournament Judo · Authentic Record"
  },
  {
    id: "sports",
    category: "SPORTS",
    title: "Football & Goalkeeping",
    subtitle: "Focus Under The Crossbar",
    desc: "Goalkeeping demands split-second decision-making, relentless vigilance, and commanding the backline. It shapes how I handle high-stakes engineering deployments: calm, composed, and ready to make the decisive save.",
    image: "/images/personal/sports/football-goalkeeper.png",
    symbol: "⚽",
    quote: "The last line of defense. The first line of attack.",
    badge: "Goalkeeper #1"
  },
  {
    id: "chess",
    category: "CHESS",
    title: "Chess & Strategy",
    subtitle: "Anticipation & Tactical Depth",
    desc: "Every move alters the geometry of the entire board. Chess sharpens mental stamina, risk calculation, and the discipline of sacrificing short-term convenience for long-term strategic advantage.",
    image: "/images/personal/chess/chess.png",
    symbol: "♞",
    quote: "Think three moves ahead. Execute with precision.",
    badge: "Tactical Mind"
  },
  {
    id: "travel",
    category: "EXPLORATION",
    title: "Travel & Curiosity",
    subtitle: "Fresh Perspectives & Horizons",
    desc: "Stepping outside the studio into new terrains, mountain horizons, and unfamiliar cultures. Stepping away from the screen fuels the imagination and reminds me what we are truly building technology for.",
    image: "/images/personal/travel/travel-mountain.png",
    symbol: "↗",
    quote: "Curiosity expands when boundaries recede.",
    badge: "Explorer"
  }
];

export const YARVO_STUDIO = {
  name: "YARVO.agency",
  headline: "Building digital products, brands and AI experiences.",
  tagline: "An independent creative technology studio bringing strategy, design, engineering and AI together.",
  services: [
    { title: "Product Engineering", desc: "Full-stack web applications, scalable APIs, database architecture, and performant cloud deployments." },
    { title: "AI Solutions", desc: "Bespoke RAG pipelines, intelligent agentic workflows, conversational interfaces, and custom AI tools." },
    { title: "Design & Experience", desc: "Cinematic interface design, design systems, micro-interactions, and high-conversion editorial layouts." },
    { title: "Growth & Strategy", desc: "Technical SEO, product positioning, analytics infrastructure, and rapid prototype experimentation." }
  ],
  url: "https://yarvo.agency"
};
