import { NextResponse } from "next/server";
import { getBaseProducts } from "@/lib/base";
import { products as fallbackProducts } from "@/lib/products";

export async function GET() {
  try {
    return NextResponse.json({
      products: await getBaseProducts(),
      currency: "JPY",
      source: "base",
    });
  } catch (error) {
    console.warn("Using fallback products:", error);
    return NextResponse.json({
      products: fallbackProducts,
      currency: "JPY",
      source: "fallback",
    });
  }
}
