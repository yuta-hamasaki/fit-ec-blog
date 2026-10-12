const supabaseUrl = process.env.SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

export interface CustomerInput {
  email: string;
  name: string;
  phone?: string;
  marketingConsent?: boolean;
}

export async function upsertCustomer(customer: CustomerInput) {
  if (!supabaseUrl || !serviceRoleKey) {
    throw new Error("Supabase is not configured");
  }
  const response = await fetch(`${supabaseUrl}/rest/v1/customers?on_conflict=email`, {
    method: "POST",
    headers: {
      apikey: serviceRoleKey,
      Authorization: `Bearer ${serviceRoleKey}`,
      "Content-Type": "application/json",
      Prefer: "resolution=merge-duplicates,return=representation",
    },
    body: JSON.stringify({
      email: customer.email.toLowerCase(),
      name: customer.name,
      phone: customer.phone || null,
      marketing_consent: customer.marketingConsent ?? false,
      updated_at: new Date().toISOString(),
    }),
    cache: "no-store",
  });
  if (!response.ok) throw new Error(`Supabase request failed: ${response.status}`);
  return (await response.json()) as Array<{ id: string }>;
}
