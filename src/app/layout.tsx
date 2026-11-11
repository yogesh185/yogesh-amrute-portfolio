import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#080D1B" },
    { media: "(prefers-color-scheme: light)", color: "#F3F0E9" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Yogesh Amrute — Full-Stack Engineer, AI Builder & Creator",
  description:
    "Building digital products that move ideas forward. Full-stack engineer, AI builder and founder of YARVO.agency creating thoughtful digital products and experiences.",
  metadataBase: new URL("https://yogeshamrute.dev"),
  keywords: [
    "Yogesh Amrute",
    "Full-Stack Engineer",
    "AI Engineer",
    "Creative Technologist",
    "YARVO.agency",
    "Next.js Developer",
    "React 19",
    "Tailwind CSS",
    "Bhopal India",
  ],
  authors: [{ name: "Yogesh Amrute", url: "https://yogeshamrute.dev" }],
  creator: "Yogesh Amrute",
  openGraph: {
    title: "Yogesh Amrute — Building digital products that move ideas forward",
    description:
      "Full-stack engineer, AI builder and entrepreneur creating thoughtful digital products and experiences.",
    url: "https://yogeshamrute.dev",
    siteName: "Yogesh Amrute Portfolio",
    images: [
      {
        url: "/images/design-reference.jpg",
        width: 1200,
        height: 630,
        alt: "Yogesh Amrute — Digital Portfolio Showcase",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yogesh Amrute — Full-Stack Engineer & AI Builder",
    description: "Building digital products that move ideas forward.",
    images: ["/images/design-reference.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Anti-FOUC Theme Script: prevents flash of incorrect theme on initial load */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var saved = localStorage.getItem('ya-theme');
                var theme = saved === 'light' || saved === 'dark' ? saved : (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
                document.documentElement.dataset.theme = theme;
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="antialiased min-h-screen selection:bg-[var(--blue)] selection:text-white">
        {children}
      </body>
    </html>
  );
}
