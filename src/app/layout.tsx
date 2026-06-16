import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";

import { ThemeProvider } from "@/components/ThemeProvider";
import ScrollAnimationInit from "@/components/ScrollAnimationInit";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plus-jakarta",
  preload: true,
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
  preload: true,
});

// SEO & GEO (Generative Engine Optimization) Metadata
export const metadata: Metadata = {
  title: {
    default: "Rutu Koladiya - Software Engineer | React & Next.js Developer",
    template: "%s | Rutu Koladiya",
  },

  description:
    "Rutu Koladiya is a Software Engineer with 1+ year of professional experience building fast, responsive, and accessible web applications using React, Next.js, Node.js, and TypeScript. Based in India, available for frontend roles and freelance projects.",

  metadataBase: new URL("https://rutu-koladiya-portfolio.vercel.app/"),
  alternates: {
    canonical: "/",
  },

  keywords: [
    "Rutu Koladiya",
    "Software Engineer",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "React Developer India",
    "Frontend Developer Surat",
    "Freelance React Developer",
    "Full Stack Developer",
    "TypeScript Developer",
    "Node.js Developer",
    "Accessible Web Developer",
  ],

  // When we share our portfolio link, this controls the preview card.
  openGraph: {
    url: "https://rutu-koladiya-portfolio.vercel.app/",
    title: "Rutu Koladiya - Software Engineer | React & Next.js Developer",
    description:
      "Software Engineer with 1+ year of experience building fast, responsive web apps using React, Next.js, and Node.js. Available for roles and freelance projects.",
    siteName: "Rutu Koladiya Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rutu Koladiya - Software Engineer specialising in React and Next.js",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Rutu Koladiya - Software Engineer | React & Next.js Developer",
    description:
      "Software Engineer specialising in React and Next.js. Available for roles and freelance projects.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },

  authors: [{ name: "Rutu Koladiya", url: "https://github.com/ruturkoladiya" }],
  creator: "Rutu Koladiya",
};

// JSON-LD Structured Data for SEO + GEO (Generative Engine Optimization)
// Helps AI-powered search engines (Google SGE, Bing Chat, Perplexity)
// extract and cite accurate information about you.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Rutu Koladiya",
  url: "https://rutu-koladiya-portfolio.vercel.app",
  jobTitle: "Software Engineer",
  description:
    "Software Engineer with 1+ year of professional experience building fast, responsive, and accessible web applications using React, Next.js, Node.js, and TypeScript. Based in India.",
  image: "https://rutu-koladiya-portfolio.vercel.app/og-image.png",
  email: "mailto:ruturkoladiya@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
    addressRegion: "Gujarat",
  },
  sameAs: [
    "https://github.com/ruturkoladiya",
    "https://linkedin.com/in/rutu-koladiya",
  ],
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "REST APIs",
    "Tailwind CSS",
    "Redux Toolkit",
    "Frontend Architecture",
    "Responsive Web Design",
    "Web Accessibility",
    "OpenAI API Integration",
  ],
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Gujarat, India",
  },
  worksFor: {
    "@type": "Organization",
    name: "Bigscale Technologies",
  },
  hasOccupation: {
    "@type": "Occupation",
    name: "Software Engineer",
    skills:
      "React, Next.js, TypeScript, Node.js, Express.js, PostgreSQL, Redux Toolkit, REST APIs, Tailwind CSS",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        {/* JSON-LD structured data for SEO + GEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className={`
          ${inter.className}
          bg-dark-bg text-theme-text
          font-sans antialiased overflow-x-hidden
          transition-colors duration-300
        `}
      >
        {/* Skip to content link — WCAG 2.4.1 */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        <ThemeProvider>
          <ScrollAnimationInit />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
