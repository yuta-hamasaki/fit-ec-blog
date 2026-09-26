import { NextResponse } from "next/server";
import { upsertCustomer, type CustomerInput } from "@/lib/supabase-rest";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: CustomerInput;
  try {
    body = (await request.json()) as CustomerInput;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }
  if (!body.name?.trim() || !emailPattern.test(body.email ?? "")) {
    return NextResponse.json({ error: "名前と有効なメールアドレスは必須です" }, { status: 400 });
  }
  try {
    const [customer] = await upsertCustomer({ ...body, name: body.name.trim() });
    return NextResponse.json({ customerId: customer.id }, { status: 201 });
  } catch (error) {
    console.error("Customer upsert failed:", error);
    return NextResponse.json({ error: "顧客情報を保存できませんでした" }, { status: 503 });
  }
}
