import Link from "next/link";

/**
 * Reusable Button/Link component.
 * Renders as Next.js Link for internal navigation, or <a> for external links.
 * Supports "primary" (filled accent) and "ghost" (outlined) variants.
 */
interface ButtonProps {
  href: string;
  variant?: "primary" | "ghost";
  children: React.ReactNode;
  external?: boolean;
}

export default function Button({ href, variant = "primary", children, external = false }: ButtonProps) {
  const base =
    "inline-block px-7 py-3 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2";

  const variants = {
    primary: "bg-accent text-white hover:bg-accent-hover hover:-translate-y-px",
    ghost:   "bg-transparent text-theme-text border border-theme-text/20 hover:border-theme-text/40 hover:-translate-y-px",
  };

  const className = `${base} ${variants[variant]}`;

  if (external) {
    return <a href={href} className={className} target="_blank" rel="noopener noreferrer">{children}</a>;
  }
  return <Link href={href} className={className}>{children}</Link>;
}
