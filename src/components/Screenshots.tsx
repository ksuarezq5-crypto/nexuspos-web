import Reveal from "./Reveal";
import DeviceFrame from "./mockups/DeviceFrame";
import posShot from "../assets/screenshots/pos.png";
import mesasShot from "../assets/screenshots/mesas.png";
import reportesShot from "../assets/screenshots/reportes.png";

const SCREENS = [
  { label: "Ventas — Terminal POS", src: posShot, alt: "Punto de venta de VentaPro con catálogo y carrito" },
  { label: "Mesas en vivo", src: mesasShot, alt: "Mapa de mesas en vivo de VentaPro" },
  { label: "Reportes y rentabilidad", src: reportesShot, alt: "Reportes de ventas y rentabilidad de VentaPro" },
];

export default function Screenshots() {
  return (
    <section className="px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Así se ve por dentro</h2>
          <p className="mt-3 text-ink-300">Interfaz real del sistema, pensada para moverse rápido en el mostrador.</p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {SCREENS.map(({ label, src, alt }, i) => (
            <Reveal key={label} delay={i * 120} className="hover-lift">
              <DeviceFrame label={label}>
                <img src={src} alt={alt} className="w-full rounded-lg border border-white/5" loading="lazy" />
              </DeviceFrame>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
