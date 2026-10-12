import { useState, type FormEvent } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { sendPurchaseInquiry } from "../lib/inquiryClient";
import { SERVICES } from "./Services";
import Reveal from "./Reveal";

type Status = "idle" | "sending" | "sent" | "error";

export default function ServiceQuoteForm() {
  const [name, setName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [contact, setContact] = useState("");
  const [serviceInterest, setServiceInterest] = useState(SERVICES[0].title);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    try {
      await sendPurchaseInquiry({
        name,
        businessName,
        contact,
        tierInterest: serviceInterest,
        billingInterest: "cotización de servicio",
        message,
      });
      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "No se pudo enviar tu solicitud");
    }
  }

  if (status === "sent") {
    return (
      <section id="contacto" className="px-5 py-20">
        <div className="mx-auto max-w-lg rounded-3xl border border-violet-accent/30 bg-violet-accent/[0.06] p-8 text-center">
          <CheckCircle2 size={32} className="mx-auto text-violet-accent" />
          <h3 className="mt-4 text-xl font-bold text-white">¡Listo, recibimos tu solicitud!</h3>
          <p className="mt-2 text-sm text-ink-300">Te contactaremos pronto con tu cotización.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="contacto" className="px-5 py-20">
      <div className="mx-auto max-w-lg">
        <Reveal className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Cotiza tu servicio</h2>
          <p className="mt-3 text-ink-300">
            Cuéntanos qué necesitas y te enviamos una cotización sin compromiso.
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
                  className="w-full rounded-xl bg-ink-800/60 px-3.5 py-2.5 text-sm text-ink-100 outline-none focus:ring-2 focus:ring-violet-accent/40"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-medium text-ink-300">Negocio</label>
                <input
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  className="w-full rounded-xl bg-ink-800/60 px-3.5 py-2.5 text-sm text-ink-100 outline-none focus:ring-2 focus:ring-violet-accent/40"
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
                className="w-full rounded-xl bg-ink-800/60 px-3.5 py-2.5 text-sm text-ink-100 outline-none placeholder:text-ink-500 focus:ring-2 focus:ring-violet-accent/40"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-medium text-ink-300">Servicio de interés</label>
              <select
                value={serviceInterest}
                onChange={(e) => setServiceInterest(e.target.value)}
                className="w-full rounded-xl bg-ink-800/60 px-3.5 py-2.5 text-sm text-ink-100 outline-none focus:ring-2 focus:ring-violet-accent/40"
              >
                {SERVICES.map((s) => (
                  <option key={s.title} value={s.title}>
                    {s.title}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-medium text-ink-300">Mensaje (opcional)</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={3}
                placeholder="Cuéntanos qué necesitas…"
                className="w-full rounded-xl bg-ink-800/60 px-3.5 py-2.5 text-sm text-ink-100 outline-none placeholder:text-ink-500 focus:ring-2 focus:ring-violet-accent/40"
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
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-violet-accent px-5 py-3 text-sm font-bold text-ink-950 transition hover:opacity-90 disabled:opacity-50"
            >
              <Send size={15} /> {status === "sending" ? "Enviando…" : "Solicitar cotización"}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
