import { HardDrive, ShieldCheck, Headset, RefreshCw } from "lucide-react";
import Reveal from "./Reveal";

const ITEMS = [
  { icon: HardDrive, title: "Tus datos, en tu equipo", desc: "La información vive en tu PC — no dependes de que un servidor externo siga en línea." },
  { icon: ShieldCheck, title: "Sin permanencia forzada", desc: "Pagas tu licencia (única, mensual o anual) y listo. Nada de contratos escondidos." },
  { icon: Headset, title: "Soporte directo", desc: "Escribes y te responde quien construyó el sistema, no un ticket perdido en una cola." },
  { icon: RefreshCw, title: "Actualizaciones incluidas", desc: "Las mejoras y correcciones te llegan solas, sin costo extra por versión." },
];

export default function TrustBar() {
  return (
    <section className="border-y border-white/5 bg-white/[0.015] px-5 py-10">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 sm:grid-cols-4">
        {ITEMS.map(({ icon: Icon, title, desc }, i) => (
          <Reveal key={title} delay={i * 80} className="text-center sm:text-left">
            <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-lg bg-brand-500/10 text-brand-400 sm:mx-0">
              <Icon size={16} />
            </div>
            <p className="mt-2.5 text-xs font-bold text-white">{title}</p>
            <p className="mt-1 text-[11.5px] leading-relaxed text-ink-400">{desc}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
