import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { ThemeProvider }      from "@/components/ThemeProvider";
import ScrollAnimationInit    from "@/components/ScrollAnimationInit";

import "./globals.css";

// Font loaded via next/font (NOT via @import in CSS)
// next/font automatically preloads
const inter = Inter({
  subsets:  ["latin"],
  display:  "swap",
  variable: "--font-inter",
  preload:  true,
});

// SEO Metadata 
export const metadata: Metadata = {
  title: {
    default:  "Rutu Koladiya - Frontend Developer | React & Next.js",
    template: "%s | Rutu Koladiya",
  },

  description:
    "Frontend Developer with 1+ year of experience building fast, responsive web apps using React and Next.js. Available for frontend roles and freelance projects.",

  // Change to your custom domain once you have one.
  metadataBase: new URL("https://rutukoladiya.netlify.app"),
  alternates: {
    canonical: "/",
  },

  keywords: [
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "React Developer India",
    "Frontend Developer Surat",
    "Freelance React Developer",
    "Full Stack Developer",
    "Rutu Koladiya",
  ],

  // When we share our portfolio link, this controls the preview card.
  openGraph: {
    type:        "website",
    url:         "https://rutukoladiya.netlify.app",
    title:       "Rutu Koladiya - Frontend Developer | React & Next.js",
    description: "Frontend Developer with 1+ year of experience building fast, responsive web apps using React and Next.js. Available for roles and freelance projects.",
    siteName:    "Rutu Koladiya Portfolio",
    // Add this image for rich link previews 
    // Create a 1200x630px image (your photo + name + title)
    // Place it at: public/og-image.png
    images: [
      {
        url:    "/og-image.png",  // TODO: Create this image
        width:  1200,
        height: 630,
        alt:    "Rutu Koladiya - Frontend Developer specialising in React and Next.js",
      },
    ],
  },

  twitter: {
    card:        "summary_large_image",
    title:       "Rutu Koladiya - Frontend Developer | React & Next.js",
    description: "Frontend Developer specialising in React and Next.js. Available for roles and freelance projects.",
    images:      ["/og-image.png"], // Same image as OG
  },

  robots: {
    index:           true,
    follow:          true,
    googleBot: {
      index:               true,
      follow:              true,
      "max-image-preview": "large",
    },
  },

  icons: {
    icon:  [
      { url: "/favicon.ico",  sizes: "any" },
      { url: "/favicon.png",     type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },

  authors: [{ name: "Rutu Koladiya", url: "https://github.com/ruturkoladiya" }],
  creator: "Rutu Koladiya",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`
          ${inter.className}
          bg-dark-bg text-theme-text
          font-sans antialiased overflow-x-hidden
          transition-colors duration-300
        `}
      >
        <ThemeProvider>
          <ScrollAnimationInit />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}