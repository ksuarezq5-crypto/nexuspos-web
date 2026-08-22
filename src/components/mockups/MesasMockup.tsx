const MESAS = [
  { n: 1, estado: "libre" },
  { n: 2, estado: "ocupada" },
  { n: 3, estado: "ocupada" },
  { n: 4, estado: "cobrar" },
  { n: 5, estado: "libre" },
  { n: 6, estado: "ocupada" },
  { n: 7, estado: "libre" },
  { n: 8, estado: "cobrar" },
];

const STYLES: Record<string, string> = {
  libre: "border-white/5 bg-white/[0.03] text-ink-400",
  ocupada: "border-brand-500/25 bg-brand-500/10 text-brand-400",
  cobrar: "border-amber-accent/25 bg-amber-accent/10 text-amber-accent",
};

export default function MesasMockup() {
  return (
    <div className="p-2">
      <div className="mb-2.5 flex items-center gap-3 text-[9px] text-ink-400">
        <span className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-white/20" /> Libre</span>
        <span className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-brand-400" /> Ocupada</span>
        <span className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-amber-accent" /> Por cobrar</span>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {MESAS.map((m) => (
          <div
            key={m.n}
            className={`flex aspect-square flex-col items-center justify-center rounded-lg border text-center ${STYLES[m.estado]}`}
          >
            <p className="text-xs font-bold">{m.n}</p>
            <p className="text-[8px] capitalize">{m.estado}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
