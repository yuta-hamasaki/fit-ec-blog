import { NextResponse } from "next/server";
import { products } from "@/lib/products";

// A zero-cost, same-origin catalog API. It can later be replaced with a
// provider adapter without changing the storefront response shape.
export function GET() {
  return NextResponse.json({ products, currency: "JPY" });
}
