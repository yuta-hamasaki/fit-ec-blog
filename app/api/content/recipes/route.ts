import { NextResponse } from "next/server";
import { fallbackRecipes } from "@/lib/fallback-content";
import { getRecipes } from "@/lib/microcms";

export async function GET() {
  try {
    return NextResponse.json({ contents: await getRecipes(), source: "microcms" });
  } catch (error) {
    console.warn("Using fallback recipes:", error);
    return NextResponse.json({ contents: fallbackRecipes, source: "fallback" });
  }
}
