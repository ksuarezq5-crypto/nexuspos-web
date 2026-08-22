import { Zap } from "lucide-react";

const PRODUCT_LINKS = [
  { href: "#funciones", label: "Funciones" },
  { href: "#planes", label: "Planes" },
  { href: "#descargas", label: "Descargas" },
  { href: "#faq", label: "Preguntas frecuentes" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 px-5 py-14">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 sm:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 font-bold text-ink-100">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-brand-400 to-brand-600">
              <Zap size={14} className="text-ink-950" />
            </span>
            NexusPOS
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

      <div className="mx-auto mt-10 max-w-6xl border-t border-white/5 pt-6 text-center text-xs text-ink-500 sm:text-left">
        © {new Date().getFullYear()} NexusPOS. Todos los derechos reservados.
      </div>
    </footer>
  );
}
