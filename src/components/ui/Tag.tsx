interface TagProps {
  children: React.ReactNode;
}

export default function Tag({ children }: TagProps) {
  return (
    <span className="text-[11px] font-mono px-2.5 py-1 rounded border border-theme-text/10 bg-theme-text/5 text-muted">
      {children}
    </span>
  );
}
