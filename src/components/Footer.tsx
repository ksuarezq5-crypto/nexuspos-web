import { useEffect, useRef, useState } from "react";
import { Zap, ChevronRight } from "lucide-react";
import { SERVICES } from "./Services";

const PRODUCT_LINKS = [
  { href: "#funciones", label: "Funciones" },
  { href: "#planes", label: "Planes" },
  { href: "#descargas", label: "Descargas" },
  { href: "#faq", label: "Preguntas frecuentes" },
];

export default function Footer({ onOpenServices }: { onOpenServices?: () => void }) {
  const [servicesOpen, setServicesOpen] = useState(false);
  const wrapRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (!servicesOpen) return;
    function onClickOutside(e: MouseEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setServicesOpen(false);
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [servicesOpen]);

  function handleSelectServices() {
    setServicesOpen(false);
    onOpenServices?.();
  }

  return (
    <footer className="border-t border-white/5 px-5 py-14">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 sm:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 font-bold text-ink-100">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-brand-400 to-brand-600">
              <Zap size={14} className="text-ink-950" />
            </span>
            VentaPro
          </div>
          <p className="mt-3 max-w-xs text-[13px] leading-relaxed text-ink-400">
            Sistema de punto de venta para restaurantes y negocios retail — pensado para funcionar rápido, con o sin
            internet.
          </p>
        </div>

        <div>
          <p className="text-[11px] font-bold uppercase tracking-wide text-ink-400">Producto</p>
          <ul className="mt-3 space-y-2">
            {PRODUCT_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-[13px] text-ink-300 transition hover:text-white">
                  {l.label}
                </a>
              </li>
            ))}

            {/* -- "Servicios" no vive en el scroll normal de la página: al hacer
               clic aquí se despliega un menú lateral solo con los títulos, y
               elegir uno revela la sección completa (con imágenes y detalle)
               más arriba. -- */}
            <li ref={wrapRef} className="relative">
              <button
                type="button"
                onClick={() => setServicesOpen((o) => !o)}
                aria-expanded={servicesOpen}
                className="flex items-center gap-1 text-[13px] text-ink-300 transition hover:text-white"
              >
                Servicios
                <ChevronRight size={12} className={servicesOpen ? "rotate-90 transition" : "transition"} />
              </button>

              {servicesOpen && (
                <div className="absolute bottom-full left-0 z-20 mb-2 w-72 rounded-2xl border border-white/10 bg-ink-800 p-2 shadow-2xl sm:bottom-auto sm:left-full sm:top-1/2 sm:mb-0 sm:ml-3 sm:-translate-y-1/2">
                  <p className="px-3 pb-1.5 pt-1 text-[10px] font-bold uppercase tracking-wide text-ink-500">
                    Otros servicios que ofrecemos
                  </p>
                  <ul>
                    {SERVICES.map(({ icon: Icon, title }) => (
                      <li key={title}>
                        <button
                          type="button"
                          onClick={handleSelectServices}
                          className="flex w-full items-center gap-2.5 rounded-xl px-3 py-2 text-left text-[12.5px] text-ink-200 transition hover:bg-white/5 hover:text-white"
                        >
                          <Icon size={14} className="shrink-0 text-violet-accent" />
                          {title}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          </ul>
        </div>

        <div>
          <p className="text-[11px] font-bold uppercase tracking-wide text-ink-400">Contacto</p>
          <p className="mt-3 max-w-xs text-[13px] leading-relaxed text-ink-300">
            ¿Tienes dudas antes de decidirte? Escríbenos desde el formulario de esta página y te respondemos
            directamente.
          </p>
          <a
            href="#contacto"
            className="mt-3 inline-block text-[13px] font-semibold text-brand-400 transition hover:text-brand-300"
          >
            Ir al formulario →
          </a>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-6xl flex-col items-center justify-between gap-3 border-t border-white/5 pt-6 text-xs text-ink-500 sm:flex-row sm:text-left">
        <span>© {new Date().getFullYear()} VentaPro. Todos los derechos reservados.</span>
        <a href="/privacidad.html" className="text-ink-400 transition hover:text-white">
          Política de privacidad
        </a>
      </div>
    </footer>
  );
}
