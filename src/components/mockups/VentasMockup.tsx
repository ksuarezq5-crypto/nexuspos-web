const PRODUCTS = ["Café", "Sanguche", "Jugo", "Torta", "Pizza", "Gaseosa"];
const CART = [
  { name: "Café americano", qty: 2, price: "S/ 12.00" },
  { name: "Sanguche mixto", qty: 1, price: "S/ 9.50" },
  { name: "Jugo de naranja", qty: 1, price: "S/ 6.00" },
];

export default function VentasMockup() {
  return (
    <div className="grid grid-cols-1 gap-2.5 p-2 sm:grid-cols-5">
      <div className="grid grid-cols-3 gap-2 sm:col-span-3">
        {PRODUCTS.map((p, i) => (
          <div
            key={p}
            className="flex aspect-square flex-col items-center justify-center rounded-lg border border-white/5 bg-white/[0.03] p-1.5 text-center"
          >
            <div
              className="mb-1.5 h-5 w-5 rounded-md"
              style={{ background: ["#3fc98b", "#8b5cf6", "#f5a623", "#22d3ee", "#f4467e", "#3fc98b"][i] }}
            />
            <p className="text-[9px] font-medium text-ink-100">{p}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col rounded-lg border border-white/5 bg-white/[0.03] p-2.5 sm:col-span-2">
        <p className="mb-2 text-[9px] font-semibold uppercase tracking-wide text-ink-400">Carrito</p>
        <div className="flex-1 space-y-1.5">
          {CART.map((c) => (
            <div key={c.name} className="flex items-center justify-between text-[9px] text-ink-100">
              <span>
                {c.qty}× {c.name}
              </span>
              <span className="text-ink-300">{c.price}</span>
            </div>
          ))}
        </div>
        <div className="mt-2 flex items-center justify-between border-t border-white/5 pt-2 text-[10px] font-bold text-white">
          <span>Total</span>
          <span>S/ 27.50</span>
        </div>
        <div className="mt-2 rounded-md bg-brand-500 py-1.5 text-center text-[9px] font-bold text-ink-950">Cobrar</div>
      </div>
    </div>
  );
}
