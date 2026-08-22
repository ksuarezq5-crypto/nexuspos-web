import { useState } from "react";
import { Check } from "lucide-react";
import clsx from "clsx";
import { tiers, billingLabels, billingHint, type BillingId } from "../data/plans";
import Reveal from "./Reveal";

const BILLING_OPTIONS: BillingId[] = ["unico", "mensual", "anual"];

export default function Plans() {
  const [billing, setBilling] = useState<BillingId>("unico");

  return (
    <section id="planes" className="px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Planes para cada etapa</h2>
          <p className="mt-3 text-ink-300">Empieza simple y sube de plan cuando tu negocio lo necesite.</p>
        </Reveal>

        <div className="mx-auto mt-8 flex w-fit gap-1 rounded-2xl border border-white/10 bg-white/5 p-1">
          {BILLING_OPTIONS.map((b) => (
            <button
              key={b}
              onClick={() => setBilling(b)}
              className={clsx(
                "rounded-xl px-4 py-2 text-xs font-bold transition sm:text-sm",
                billing === b ? "bg-brand-500 text-ink-950" : "text-ink-300 hover:text-white"
              )}
            >
              {billingLabels[b]}
            </button>
          ))}
        </div>
        <p className="mt-2.5 text-center text-[11px] text-ink-400">{billingHint[billing]}</p>

        <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {tiers.map((tier, i) => (
            <Reveal
              key={tier.id}
              delay={i * 120}
              className={clsx(
                "hover-lift flex h-full flex-col rounded-3xl border p-6",
                tier.highlighted ? "border-brand-500/40 bg-brand-500/[0.06]" : "glass-card"
              )}
            >
              {tier.highlighted && (
                <span className="mb-3 w-fit rounded-full bg-brand-500/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-brand-400">
                  Más elegido
                </span>
              )}
              <h3 className="text-lg font-extrabold text-white">{tier.name}</h3>
              <p className="mt-1 text-xs text-ink-300">{tier.tagline}</p>

              <div className="mt-5 flex items-baseline gap-1.5">
                <span className="text-3xl font-extrabold text-white">S/ {tier.prices[billing]}</span>
                {billing !== "unico" && <span className="text-xs text-ink-400">/ {billing === "mensual" ? "mes" : "año"}</span>}
              </div>

              <a
                href="#contacto"
                className={clsx(
                  "mt-5 rounded-xl px-4 py-2.5 text-center text-sm font-bold transition",
                  tier.highlighted
                    ? "bg-brand-500 text-ink-950 hover:bg-brand-400"
                    : "border border-white/10 bg-white/5 text-ink-100 hover:bg-white/10"
                )}
              >
                Quiero este plan
              </a>

              <ul className="mt-6 space-y-2.5">
                {tier.includesPrevious && (
                  <li className="text-[11px] font-semibold uppercase tracking-wide text-ink-400">
                    Todo lo del plan anterior, más:
                  </li>
                )}
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-[13px] text-ink-100">
                    <Check size={15} className="mt-0.5 shrink-0 text-brand-400" />
                    {f}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
