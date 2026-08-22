import { SUPABASE_URL, SUPABASE_ANON_KEY } from "../config";

export interface InquiryInput {
  name: string;
  businessName: string;
  contact: string;
  tierInterest: string;
  billingInterest: string;
  message: string;
}

export async function sendPurchaseInquiry(input: InquiryInput): Promise<void> {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    throw new Error("El formulario todavía no está conectado (falta configurar Supabase).");
  }

  const res = await fetch(`${SUPABASE_URL.replace(/\/+$/, "")}/functions/v1/send-purchase-inquiry`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
    },
    body: JSON.stringify({
      name: input.name,
      business_name: input.businessName,
      contact: input.contact,
      tier_interest: input.tierInterest,
      billing_interest: input.billingInterest,
      message: input.message,
    }),
  });

  const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
  if (!res.ok || !data.ok) {
    throw new Error(data.error || `HTTP ${res.status} ${res.statusText}`);
  }
}
