import { useState } from "react";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";
import Reveal from "./Reveal";

const FAQS = [
  {
    q: "¿Funciona sin conexión a internet?",
    a: "Sí. El punto de venta funciona 100% local en tu PC — la conexión solo se usa para funciones opcionales como respaldo en la nube, sincronización entre sucursales o el asistente de IA. Si tu plan es mensual o anual, el sistema necesita confirmar tu membresía de vez en cuando: cada 27 días y 12 horas en el mensual, o cada 11 meses, 27 días y 12 horas en el anual. Si pasa ese tiempo sin internet, se bloquea solo hasta que te reconectes (el plan único no tiene este límite).",
  },
  {
    q: "¿Qué pasa con mis datos si dejo de pagar la licencia mensual o anual?",
    a: "Tu información sigue en tu equipo, nunca se borra. Solo se bloquea el acceso al sistema hasta que renueves — igual que cualquier software con licencia.",
  },
  {
    q: "¿Puedo cambiar de plan más adelante?",
    a: "Sí, puedes subir de Básico a Intermedio o Avanzado cuando lo necesites — solo escríbenos desde el formulario de contacto.",
  },
  {
    q: "¿Cómo recibo el código de activación?",
    a: "Llenas el formulario de esta página con tus datos y el plan que quieres, te contactamos directamente y coordinamos el pago y la entrega de tu código.",
  },
  {
    q: "¿Sirve para restaurantes y para tiendas por igual?",
    a: "Sí. Tiene un modo general (retail) y un modo restaurante que activa mesas, comandas de cocina, carta digital y domicilios.",
  },
  {
    q: "¿Qué pasa si tengo un problema técnico?",
    a: "Puedes reportarlo directamente desde la app (sección de soporte) o desde el formulario de esta página — te responde quien construyó el sistema.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="px-5 py-20">
      <div className="mx-auto max-w-3xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Preguntas frecuentes</h2>
          <p className="mt-3 text-ink-300">Lo que la mayoría pregunta antes de decidirse.</p>
        </Reveal>

        <div className="mt-10 space-y-2.5">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.q} delay={i * 60} className="glass-card overflow-hidden rounded-2xl">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left"
                >
                  <span className="text-sm font-semibold text-white">{item.q}</span>
                  <ChevronDown
                    size={17}
                    className={clsx("shrink-0 text-ink-400 transition-transform", isOpen && "rotate-180")}
                  />
                </button>
                <div
                  className={clsx(
                    "grid transition-all duration-300",
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-4 text-[13px] leading-relaxed text-ink-300">{item.a}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
