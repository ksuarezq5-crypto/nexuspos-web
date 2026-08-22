import Reveal from "./Reveal";
import DeviceFrame from "./mockups/DeviceFrame";
import VentasMockup from "./mockups/VentasMockup";
import MesasMockup from "./mockups/MesasMockup";
import ReportesMockup from "./mockups/ReportesMockup";

const SCREENS = [
  { label: "Ventas — Terminal POS", Mockup: VentasMockup },
  { label: "Mesas en vivo", Mockup: MesasMockup },
  { label: "Reportes y rentabilidad", Mockup: ReportesMockup },
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
          {SCREENS.map(({ label, Mockup }, i) => (
            <Reveal key={label} delay={i * 120} className="hover-lift">
              <DeviceFrame label={label}>
                <Mockup />
              </DeviceFrame>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
