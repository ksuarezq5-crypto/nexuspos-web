export default function ReportesMockup() {
  return (
    <div className="space-y-3 p-2">
      <p className="text-xs font-bold text-white">Rentabilidad del mes</p>
      <div className="rounded-lg border border-white/5 bg-white/[0.03] p-3">
        <svg viewBox="0 0 240 70" className="h-16 w-full" preserveAspectRatio="none">
          <polyline
            points="0,55 30,45 60,50 90,30 120,35 150,15 180,22 210,8 240,18"
            fill="none"
            stroke="#3fc98b"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <polyline
            points="0,55 30,45 60,50 90,30 120,35 150,15 180,22 210,8 240,18 240,70 0,70"
            fill="url(#g)"
            stroke="none"
          />
          <defs>
            <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3fc98b" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#3fc98b" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="space-y-1.5">
        {[
          ["Rentabilidad", "S/ 4,120", "text-brand-400"],
          ["Propinas", "S/ 312", "text-violet-accent"],
          ["Empleado del mes", "Ana R.", "text-cyan-accent"],
        ].map(([label, value, color]) => (
          <div key={label} className="flex items-center justify-between rounded-lg border border-white/5 bg-white/[0.03] px-2.5 py-2 text-[10px]">
            <span className="text-ink-400">{label}</span>
            <span className={`font-bold ${color}`}>{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
