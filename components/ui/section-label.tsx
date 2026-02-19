export function SectionLabel({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 mb-3.5">
      <div className="w-8 sm:w-11 h-[1.5px] bg-ksw-blue" />
      <span className="text-[10.5px] sm:text-xs font-semibold tracking-[0.13em] uppercase text-ksw-gray-light">
        {text}
      </span>
    </div>
  );
}