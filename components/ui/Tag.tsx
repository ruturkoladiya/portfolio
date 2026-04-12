interface TagProps {
  children: React.ReactNode;
}

export default function Tag({ children }: TagProps) {
  return (
    <span className="text-[11px] px-2.5 py-1 rounded border border-white/10 bg-white/5 text-muted">
      {children}
    </span>
  );
}
