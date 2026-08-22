import {
  ShoppingCart,
  Package,
  Users,
  BarChart3,
  ChefHat,
  QrCode,
  Bike,
  Bot,
  Cloud,
  Printer,
  Share2,
  Receipt,
} from "lucide-react";
import Reveal from "./Reveal";

const FEATURES = [
  { icon: ShoppingCart, title: "Venta rápida", desc: "Carrito, checkout y métodos de pago configurables (efectivo, tarjeta, QR, Yape/Plin)." },
  { icon: Package, title: "Inventario", desc: "Stock, imágenes de producto, combos y alertas de reabastecimiento." },
  { icon: ChefHat, title: "Mesas y cocina", desc: "Comandas en vivo, ticket de cocina automático y carta digital con QR." },
  { icon: Bike, title: "Domicilios", desc: "Pedidos para reparto con panel para tus motorizados." },
  { icon: Receipt, title: "Boletas y ticket", desc: "Comprobantes con tu logo, impresión térmica USB, red o Bluetooth." },
  { icon: Users, title: "Clientes y empleados", desc: "Roles y permisos por empleado, historial de clientes." },
  { icon: BarChart3, title: "Reportes", desc: "Rentabilidad, propinas y desempeño por empleado, exportables a Excel/PDF." },
  { icon: Share2, title: "Multi-sucursal", desc: "Sincronización en tiempo real de stock y ventas entre varios equipos." },
  { icon: Cloud, title: "Respaldo en la nube", desc: "Copia de seguridad automática de tu catálogo, ventas y clientes." },
  { icon: Bot, title: "Asistente con IA", desc: "Resuelve dudas de tu negocio y sugiere decisiones en lenguaje natural." },
  { icon: QrCode, title: "Carta con QR", desc: "Tus clientes ven el menú desde su celular escaneando un código." },
  { icon: Printer, title: "Multi-dispositivo", desc: "Funciona en PC (Windows) y como app complementaria en Android." },
];

export default function Features() {
  return (
    <section id="funciones" className="px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Todo lo que tu negocio necesita
          </h2>
          <p className="mt-3 text-ink-300">
            Retail o restaurante, un solo sistema que crece contigo.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(({ icon: Icon, title, desc }, i) => (
            <Reveal key={title} delay={(i % 6) * 70}>
              <div className="hover-lift glass-card h-full rounded-2xl p-5 transition hover:bg-white/[0.04]">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/15 text-brand-400">
                  <Icon size={18} />
                </div>
                <h3 className="mt-3.5 text-sm font-bold text-white">{title}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-ink-300">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
