export type TierId = "basico" | "intermedio" | "avanzado";
export type BillingId = "unico" | "mensual" | "anual";

export const billingLabels: Record<BillingId, string> = {
  unico: "Pago único",
  mensual: "Mensual",
  anual: "Anual",
};

export const billingHint: Record<BillingId, string> = {
  unico: "Pagas una sola vez, es tuyo de por vida",
  mensual: "Se renueva cada mes",
  anual: "Se renueva cada año (2 meses gratis vs. mensual)",
};

export interface Tier {
  id: TierId;
  name: string;
  tagline: string;
  // Precio de ejemplo en soles — reemplázalo por tus precios reales, es
  // el único lugar donde hay que tocarlo.
  prices: Record<BillingId, number>;
  features: string[];
  includesPrevious: boolean;
  highlighted?: boolean;
}

export const tiers: Tier[] = [
  {
    id: "basico",
    name: "Básico",
    tagline: "Para empezar a vender rápido",
    prices: { unico: 349, mensual: 39, anual: 390 },
    includesPrevious: false,
    features: [
      "Punto de venta con carrito y checkout rápido",
      "Inventario con imágenes y control de stock",
      "Clientes y caja (apertura / cierre)",
      "Dashboard con indicadores clave",
      "Recibos y boletas con tu logo",
      "Métodos de pago configurables (efectivo, tarjeta, QR, Yape/Plin…)",
      "Confirmación automática de pagos Yape desde el celular",
      "Vales de regalo: emisión y canje desde el cobro",
      "Exportación a Excel y PDF",
      "Impresión térmica (USB, red o Bluetooth)",
      "Modo restaurante: mesas, cocina, carta digital con QR y domicilios",
      "Modo peluquería: comisión por estilista y receta de productos",
      "Respaldo local descargable",
    ],
  },
  {
    id: "intermedio",
    name: "Intermedio",
    tagline: "Para negocios que ya crecen",
    prices: { unico: 599, mensual: 69, anual: 690 },
    includesPrevious: true,
    highlighted: true,
    features: [
      "Proveedores y órdenes de compra",
      "Reportes avanzados: rentabilidad, propinas, desempeño por empleado",
      "Roles y permisos de empleados",
      "Sincronización en tiempo real entre varios equipos o sucursales",
      "Directorio de sucursales: encargado por local, estadísticas y login filtrado por sucursal",
    ],
  },
  {
    id: "avanzado",
    name: "Avanzado",
    tagline: "Automatización e IA para escalar",
    prices: { unico: 999, mensual: 119, anual: 1190 },
    includesPrevious: true,
    features: [
      "Finanzas: contabilidad, estados financieros, ratios y producción",
      "Asistente de negocio con IA conversacional",
      "Respaldo automático en la nube",
      "Reabastecimiento predictivo de inventario",
      "Detección de mermas y fraude por empleado",
      "Soporte prioritario",
    ],
  },
];
