interface SectionLabelProps {
  children: React.ReactNode;
}

export default function SectionLabel({ children }: SectionLabelProps) {
  return (
    <p className="text-[11px] font-medium tracking-[2px] uppercase text-accent-2 mb-3">
      {children}
    </p>
  );
}
