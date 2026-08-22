import { type ReactNode } from "react";
import { PlayCircle } from "lucide-react";

export default function DeviceFrame({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="glass-card overflow-hidden rounded-2xl p-1.5 shadow-2xl shadow-black/40">
      <div className="flex items-center gap-1.5 px-3 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-rose-accent/60" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-accent/60" />
        <span className="h-2.5 w-2.5 rounded-full bg-brand-400/60" />
        <span className="ml-3 flex items-center gap-1.5 text-[11px] text-ink-400">
          <PlayCircle size={12} /> {label}
        </span>
      </div>
      <div className="rounded-b-xl bg-ink-900 p-3">{children}</div>
    </div>
  );
}
