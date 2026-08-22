import CountUp from "../CountUp";

const BARS = [38, 62, 45, 80, 58, 94, 70];
const KPIS = [
  { label: "Ventas hoy", prefix: "S/ ", to: 1284 },
  { label: "Ticket promedio", value: "S/ 24.50" },
  { label: "Productos vendidos", to: 156 },
  { label: "Clientes nuevos", to: 12 },
];

export default function DashboardMockup() {
  return (
    <div className="space-y-3 p-2">
      <div className="flex items-center justify-between">
        <p className="text-xs font-bold text-white">Dashboard</p>
        <span className="flex items-center gap-1.5 rounded-full bg-brand-500/10 px-2 py-0.5 text-[9px] font-semibold text-brand-400">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-400" /> En vivo
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {KPIS.map((k) => (
          <div key={k.label} className="rounded-lg border border-white/5 bg-white/[0.03] p-2.5">
            <p className="text-[9px] text-ink-400">{k.label}</p>
            <p className="mt-1 text-sm font-bold text-white">
              {k.to !== undefined ? <CountUp to={k.to} prefix={k.prefix} /> : k.value}
            </p>
          </div>
        ))}
      </div>

      <div className="rounded-lg border border-white/5 bg-white/[0.03] p-3">
        <p className="mb-2.5 text-[9px] font-semibold uppercase tracking-wide text-ink-400">Ventas de la semana</p>
        <div className="flex h-20 items-end gap-2">
          {BARS.map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t-sm bg-gradient-to-t from-brand-600 to-brand-400 transition-all duration-700"
              style={{ height: `${h}%`, transitionDelay: `${i * 60}ms` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
