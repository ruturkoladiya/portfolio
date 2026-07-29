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
    default: "Rutu Koladiya - Full Stack Developer | React, Next.js & Node.js",
    template: "%s | Rutu Koladiya",
  },

  description:
    "Rutu Koladiya is a Full Stack Developer with 1+ year of professional experience building production-grade React.js, Next.js, and Node.js applications for healthcare and business platforms. Based in India.",

  metadataBase: new URL("https://rutu-koladiya-portfolio.vercel.app/"),
  alternates: {
    canonical: "/",
  },

  keywords: [
    "Rutu Koladiya",
    "Full Stack Developer",
    "Full Stack MERN Developer",
    "MERN Developer",
    "Frontend Developer",
    "React.js Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Express.js Developer",
    "PostgreSQL Developer",
    "MongoDB Developer",
    "Prisma ORM Developer",
    "Full Stack Developer Surat",
    "React Developer India",
  ],

  // When we share our portfolio link, this controls the preview card.
  openGraph: {
    url: "https://rutu-koladiya-portfolio.vercel.app/",
    title: "Rutu Koladiya - Full Stack Developer | React, Next.js & Node.js",
    description:
      "Full Stack Developer with 1+ year of experience building production-grade React.js and Next.js applications for healthcare and business platforms.",
    siteName: "Rutu Koladiya Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rutu Koladiya - Full Stack Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Rutu Koladiya - Full Stack Developer | React, Next.js & Node.js",
    description:
      "Full Stack Developer with 1+ year of experience building production-grade React.js and Next.js applications for healthcare and business platforms.",
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
  jobTitle: "Full Stack Developer",
  description:
    "Full Stack Developer with 1+ year of professional experience building production-grade React.js and Next.js applications for healthcare and business platforms. Based in India.",
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
    "React.js",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "MongoDB",
    "Prisma ORM",
    "REST APIs",
    "Tailwind CSS",
    "Redux Toolkit",
    "RTK Query",
    "Material UI",
    "Ant Design",
    "Shadcn UI",
    "Cloudinary",
    "Vercel",
    "OpenAI API",
    "Google Gemini API",
    "Frontend Architecture",
    "Responsive Web Design",
    "Web Accessibility",
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
    name: "Full Stack Developer",
    skills:
      "React.js, Next.js, TypeScript, Redux Toolkit, RTK Query, Tailwind CSS, Material UI, Ant Design, Shadcn UI, Node.js, Express.js, PostgreSQL, MongoDB, Prisma, Cloudinary, OpenAI API, Google Gemini API",
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
