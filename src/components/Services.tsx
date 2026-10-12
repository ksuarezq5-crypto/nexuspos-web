import { Wrench, Router, Globe, Code2, LifeBuoy, Check } from "lucide-react";
import Reveal from "./Reveal";

export const SERVICES = [
  {
    icon: Wrench,
    title: "Soporte técnico y mantenimiento de computadoras",
    items: [
      "Mantenimiento preventivo y correctivo de PC y laptops",
      "Instalación y configuración de Windows y programas",
      "Diagnóstico y solución de problemas de hardware y software",
      "Optimización del rendimiento de equipos",
    ],
  },
  {
    icon: Router,
    title: "Redes y conectividad",
    items: [
      "Instalación y configuración de redes empresariales",
      "Configuración de routers, switches y puntos de acceso",
      "Configuración de equipos Ubiquiti y redes Wi-Fi",
      "Diagnóstico de problemas de conectividad",
    ],
  },
  {
    icon: Globe,
    title: "Desarrollo de páginas web",
    items: [
      "Diseño de páginas web para negocios y emprendedores",
      "Landing pages para promocionar productos y servicios",
      "Integración de botones de WhatsApp y formularios de contacto",
      "Publicación y configuración de hosting y dominios",
    ],
  },
  {
    icon: Code2,
    title: "Desarrollo de sistemas y software empresarial",
    items: [
      "Sistemas de ventas, inventario y control de caja",
      "Software de escritorio y aplicaciones multiplataforma",
      "Automatización de procesos para negocios",
      "Personalización de sistemas según las necesidades del cliente",
      "Implementación y capacitación en el uso del software",
    ],
  },
  {
    icon: LifeBuoy,
    title: "Asistencia informática para empresas",
    items: [
      "Soporte técnico remoto y presencial",
      "Instalación y configuración de equipos de trabajo",
      "Resolución de incidencias informáticas",
      "Mantenimiento de equipos y asistencia a usuarios",
    ],
  },
];

export default function Services() {
  return (
    <section id="servicios" className="px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="mb-3 inline-block rounded-full bg-violet-accent/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-violet-accent">
            Más allá del software
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Otros servicios que ofrecemos</h2>
          <p className="mt-3 text-ink-300">
            Además de VentaPro, brindamos soporte técnico integral para que tu negocio funcione sin problemas.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
          {SERVICES.map(({ icon: Icon, title, items }, i) => (
            <Reveal
              key={title}
              delay={(i % 4) * 90}
              className={i === SERVICES.length - 1 ? "md:col-span-2" : undefined}
            >
              <div className="hover-lift glass-card h-full rounded-3xl p-6 transition hover:bg-white/[0.04]">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-accent/15 text-violet-accent">
                  <Icon size={20} />
                </div>
                <h3 className="mt-4 text-base font-bold text-white">{title}</h3>
                <ul className={i === SERVICES.length - 1 ? "mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2" : "mt-4 space-y-2"}>
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[13px] leading-relaxed text-ink-300">
                      <Check size={14} className="mt-0.5 shrink-0 text-brand-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-10 text-center">
          <a
            href="#contacto"
            className="shine inline-flex items-center gap-2 rounded-xl bg-violet-accent px-6 py-3 text-sm font-bold text-ink-950 transition hover:opacity-90"
          >
            Cotiza tu servicio
          </a>
        </Reveal>
      </div>
    </section>
  );
}
