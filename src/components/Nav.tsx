import { useState } from "react";
import { Menu, X, Zap } from "lucide-react";

const LINKS = [
  { href: "#funciones", label: "Funciones" },
  { href: "#planes", label: "Planes" },
  { href: "#descargas", label: "Descargas" },
  { href: "#faq", label: "Preguntas" },
  { href: "#contacto", label: "Contacto" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-ink-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#top" className="flex items-center gap-2 font-extrabold tracking-tight text-white">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand-400 to-brand-600">
            <Zap size={16} className="text-ink-950" />
          </span>
          NexusPOS
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="nav-link text-sm font-medium text-ink-300 transition hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#descargas"
          className="shine hidden rounded-xl bg-brand-500 px-4 py-2 text-sm font-bold text-ink-950 transition hover:bg-brand-400 md:inline-block"
        >
          Descargar demo
        </a>

        <button
          onClick={() => setOpen((o) => !o)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-ink-100 md:hidden"
          aria-label="Menú"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/5 bg-ink-950 px-5 pb-5 pt-2 md:hidden">
          <nav className="flex flex-col gap-1">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-2.5 text-sm font-medium text-ink-300 hover:bg-white/5 hover:text-white"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#descargas"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-xl bg-brand-500 px-4 py-2.5 text-center text-sm font-bold text-ink-950"
            >
              Descargar demo
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
