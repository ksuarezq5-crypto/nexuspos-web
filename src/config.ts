export const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL ?? "";
export const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY ?? "";

// Deja estos vacíos hasta que subas los instaladores reales a algún hosting
// (por ejemplo, el mismo bucket público de Supabase Storage ya usado para las
// actualizaciones) y pegues la URL pública resultante en tu archivo ".env".
export const DEMO_INSTALLER_URL = import.meta.env.VITE_DEMO_INSTALLER_URL ?? "";
export const MOBILE_APK_URL = import.meta.env.VITE_MOBILE_APK_URL ?? "";

export const WHATSAPP_NUMBER = ""; // opcional, formato "51987654321" sin "+" ni espacios
