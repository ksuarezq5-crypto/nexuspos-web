import { Monitor, Smartphone, Download, ShieldAlert } from "lucide-react";
import { DEMO_INSTALLER_URL, MOBILE_APK_URL } from "../config";
import Reveal from "./Reveal";

export default function Downloads() {
  return (
    <section id="descargas" className="px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Pruébalo en tu dispositivo</h2>
          <p className="mt-3 text-ink-300">Disponible para PC (Windows) y como app complementaria para Android.</p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
          <Reveal className="hover-lift glass-card rounded-3xl p-7">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500/15 text-brand-400">
              <Monitor size={20} />
            </div>
            <h3 className="mt-4 text-lg font-bold text-white">NexusPOS para PC (Windows)</h3>
            <p className="mt-2 text-[13px] leading-relaxed text-ink-300">
              La versión demo incluye todas las funciones con un límite de ventas de prueba. Ideal para conocer el
              sistema antes de activar tu licencia.
            </p>
            {DEMO_INSTALLER_URL ? (
              <a
                href={DEMO_INSTALLER_URL}
                className="mt-5 flex w-fit items-center gap-2 rounded-xl bg-brand-500 px-5 py-3 text-sm font-bold text-ink-950 transition hover:bg-brand-400"
              >
                <Download size={16} /> Descargar demo (.exe)
              </a>
            ) : (
              <p className="mt-5 flex items-center gap-2 rounded-xl border border-amber-accent/20 bg-amber-accent/10 px-4 py-3 text-xs text-amber-accent">
                <ShieldAlert size={14} /> Enlace de descarga pendiente de configurar
              </p>
            )}
          </Reveal>

          <Reveal delay={140} className="hover-lift glass-card rounded-3xl p-7">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-accent/15 text-violet-accent">
              <Smartphone size={20} />
            </div>
            <h3 className="mt-4 text-lg font-bold text-white">NexusPOS Móvil (Android)</h3>
            <p className="mt-2 text-[13px] leading-relaxed text-ink-300">
              Complementa tu PC desde el celular. Al instalarlo, activa "Orígenes desconocidos" en tu Android para
              poder abrir el archivo .apk.
            </p>
            {MOBILE_APK_URL ? (
              <a
                href={MOBILE_APK_URL}
                className="mt-5 flex w-fit items-center gap-2 rounded-xl bg-violet-accent px-5 py-3 text-sm font-bold text-ink-950 transition hover:opacity-90"
              >
                <Download size={16} /> Descargar app (.apk)
              </a>
            ) : (
              <p className="mt-5 flex items-center gap-2 rounded-xl border border-amber-accent/20 bg-amber-accent/10 px-4 py-3 text-xs text-amber-accent">
                <ShieldAlert size={14} /> Enlace de descarga pendiente de configurar
              </p>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
