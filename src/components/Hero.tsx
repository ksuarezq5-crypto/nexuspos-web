import { useRef, useState } from "react";
import { ArrowRight, Download } from "lucide-react";
import Reveal from "./Reveal";
import DeviceFrame from "./mockups/DeviceFrame";
import DashboardMockup from "./mockups/DashboardMockup";

export default function Hero() {
  const tiltRef = useRef<HTMLDivElement | null>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = tiltRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: py * -6, y: px * 8 });
  }

  function handleMouseLeave() {
    setTilt({ x: 0, y: 0 });
  }

  return (
    <section id="top" className="relative overflow-hidden px-5 pb-20 pt-16 sm:pt-24">
      <div
        className="pointer-events-none absolute left-1/2 top-[-280px] -z-30 h-[820px] w-[1100px] -translate-x-1/2"
        aria-hidden="true"
      >
        <div
          className="aurora h-full w-full"
          style={{ maskImage: "radial-gradient(closest-side, black 0%, transparent 72%)" }}
        />
      </div>
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-20 h-[720px] grid-overlay"
        aria-hidden="true"
      />

      <div
        className="blob pointer-events-none absolute left-1/2 top-[-220px] -z-10 h-[560px] w-[900px] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(closest-side, rgba(28,174,112,0.45), transparent 70%)" }}
        aria-hidden="true"
      />
      <div
        className="blob blob-delay pointer-events-none absolute right-[-160px] top-[80px] -z-10 h-[420px] w-[420px] rounded-full opacity-35 blur-3xl"
        style={{ background: "radial-gradient(closest-side, rgba(139,92,246,0.45), transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-6xl text-center">
        <Reveal>
          <span className="mx-auto flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-semibold text-ink-300">
            Nueva generación de punto de venta
          </span>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
            El punto de venta que hace crecer{" "}
            <span className="bg-gradient-to-r from-brand-400 via-cyan-accent to-brand-400 bg-[length:200%_auto] bg-clip-text text-transparent [animation:shimmer-text_4s_linear_infinite]">
              tu negocio
            </span>
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="mx-auto mt-5 max-w-xl text-base text-ink-300 sm:text-lg">
            Ventas, inventario, mesas, cocina, reportes e inteligencia artificial en un solo sistema — para PC y
            celular. Pruébalo gratis antes de decidir.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#descargas"
              className="shine flex w-full items-center justify-center gap-2 rounded-xl bg-brand-500 px-6 py-3.5 text-sm font-bold text-ink-950 transition hover:-translate-y-0.5 hover:bg-brand-400 hover:shadow-lg hover:shadow-brand-500/20 sm:w-auto"
            >
              <Download size={16} /> Descargar demo gratis
            </a>
            <a
              href="#planes"
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-bold text-ink-100 transition hover:-translate-y-0.5 hover:bg-white/10 sm:w-auto"
            >
              Ver planes <ArrowRight size={16} />
            </a>
          </div>
        </Reveal>

        <Reveal delay={420} className="mx-auto mt-14 max-w-4xl">
          <div
            ref={tiltRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: `perspective(1200px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
              transition: "transform 0.2s ease-out",
            }}
          >
            <DeviceFrame label="NexusPOS — vista previa">
              <DashboardMockup />
            </DeviceFrame>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
