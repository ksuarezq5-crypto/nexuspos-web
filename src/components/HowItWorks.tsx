import { Download, Settings2, CreditCard, LifeBuoy } from "lucide-react";
import Reveal from "./Reveal";

const STEPS = [
  { icon: Download, title: "Descarga la demo", desc: "Instálala gratis y explora todas las funciones sin compromiso." },
  { icon: Settings2, title: "Configúrala a tu negocio", desc: "Tipo de negocio, moneda, métodos de pago, impresora — en minutos." },
  { icon: CreditCard, title: "Elige tu plan y actívala", desc: "Escríbenos, te damos tu código y tu licencia queda activa al instante." },
  { icon: LifeBuoy, title: "Recibe soporte real", desc: "Dudas o problemas, escribes desde la misma app y te respondemos." },
];

export default function HowItWorks() {
  return (
    <section className="px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Cómo funciona</h2>
          <p className="mt-3 text-ink-300">Sin letra pequeña, sin vueltas.</p>
        </Reveal>

        <div className="relative mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-white/10 lg:block" aria-hidden="true" />
          {STEPS.map(({ icon: Icon, title, desc }, i) => (
            <Reveal key={title} delay={i * 110} className="relative text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-ink-900 text-brand-400">
                <Icon size={20} />
              </div>
              <p className="mt-4 text-[10px] font-bold uppercase tracking-wide text-ink-400">Paso {i + 1}</p>
              <h3 className="mt-1 text-sm font-bold text-white">{title}</h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-ink-300">{desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
