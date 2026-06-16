export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      className="border-t border-[var(--border)] py-8 px-4 sm:px-8 text-center"
      role="contentinfo"
    >
      <p className="text-xs text-muted">
        © {year} Rutu Koladiya · Software Engineer · India
      </p>
    </footer>
  );
}
