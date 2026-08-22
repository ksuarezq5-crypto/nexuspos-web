import { useState, type FormEvent } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { sendPurchaseInquiry } from "../lib/inquiryClient";
import { tiers, billingLabels, type BillingId, type TierId } from "../data/plans";
import Reveal from "./Reveal";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [contact, setContact] = useState("");
  const [tierInterest, setTierInterest] = useState(tiers[0].id);
  const [billingInterest, setBillingInterest] = useState<BillingId>("unico");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    try {
      await sendPurchaseInquiry({ name, businessName, contact, tierInterest, billingInterest, message });
      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "No se pudo enviar tu solicitud");
    }
  }

  if (status === "sent") {
    return (
      <section id="contacto" className="px-5 py-20">
        <div className="mx-auto max-w-lg rounded-3xl border border-brand-500/30 bg-brand-500/[0.06] p-8 text-center">
          <CheckCircle2 size={32} className="mx-auto text-brand-400" />
          <h3 className="mt-4 text-xl font-bold text-white">¡Listo, recibimos tu solicitud!</h3>
          <p className="mt-2 text-sm text-ink-300">
            Te contactaremos pronto con tu código de activación y los detalles de pago.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="contacto" className="px-5 py-20">
      <div className="mx-auto max-w-lg">
        <Reveal className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Activa tu licencia</h2>
          <p className="mt-3 text-ink-300">
            Escríbenos con tus datos y el plan que te interesa — te contactamos para darte tu código de activación.
          </p>
        </Reveal>

        <Reveal delay={120}>
        <form onSubmit={handleSubmit} className="glass-card mt-9 space-y-4 rounded-3xl p-6 sm:p-7">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-xs font-medium text-ink-300">Tu nombre</label>
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-xl bg-ink-800/60 px-3.5 py-2.5 text-sm text-ink-100 outline-none focus:ring-2 focus:ring-brand-500/40"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-medium text-ink-300">Negocio</label>
              <input
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                className="w-full rounded-xl bg-ink-800/60 px-3.5 py-2.5 text-sm text-ink-100 outline-none focus:ring-2 focus:ring-brand-500/40"
              />
            </div>
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-medium text-ink-300">Correo o teléfono de contacto</label>
            <input
              required
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              placeholder="correo@ejemplo.com o +51 987 654 321"
              className="w-full rounded-xl bg-ink-800/60 px-3.5 py-2.5 text-sm text-ink-100 outline-none placeholder:text-ink-500 focus:ring-2 focus:ring-brand-500/40"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-xs font-medium text-ink-300">Plan de interés</label>
              <select
                value={tierInterest}
                onChange={(e) => setTierInterest(e.target.value as TierId)}
                className="w-full rounded-xl bg-ink-800/60 px-3.5 py-2.5 text-sm text-ink-100 outline-none focus:ring-2 focus:ring-brand-500/40"
              >
                {tiers.map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-medium text-ink-300">Modalidad</label>
              <select
                value={billingInterest}
                onChange={(e) => setBillingInterest(e.target.value as BillingId)}
                className="w-full rounded-xl bg-ink-800/60 px-3.5 py-2.5 text-sm text-ink-100 outline-none focus:ring-2 focus:ring-brand-500/40"
              >
                {(Object.keys(billingLabels) as BillingId[]).map((b) => (
                  <option key={b} value={b}>
                    {billingLabels[b]}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-medium text-ink-300">Mensaje (opcional)</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={3}
              placeholder="Cuéntanos sobre tu negocio…"
              className="w-full rounded-xl bg-ink-800/60 px-3.5 py-2.5 text-sm text-ink-100 outline-none placeholder:text-ink-500 focus:ring-2 focus:ring-brand-500/40"
            />
          </div>

          {status === "error" && (
            <p className="flex items-center gap-2 rounded-xl border border-rose-accent/25 bg-rose-accent/10 px-3.5 py-2.5 text-xs text-rose-accent">
              <AlertCircle size={14} className="shrink-0" /> {error}
            </p>
          )}

          <button
            type="submit"
            disabled={status === "sending"}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-500 px-5 py-3 text-sm font-bold text-ink-950 transition hover:bg-brand-400 disabled:opacity-50"
          >
            <Send size={15} /> {status === "sending" ? "Enviando…" : "Solicitar activación"}
          </button>
        </form>
        </Reveal>
      </div>
    </section>
  );
}
