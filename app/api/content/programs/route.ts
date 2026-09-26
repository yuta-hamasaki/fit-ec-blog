import { NextResponse } from "next/server";
import { fallbackPrograms } from "@/lib/fallback-content";
import { getPrograms } from "@/lib/microcms";

export async function GET() {
  try {
    return NextResponse.json({ contents: await getPrograms(), source: "microcms" });
  } catch (error) {
    console.warn("Using fallback programs:", error);
    return NextResponse.json({ contents: fallbackPrograms, source: "fallback" });
  }
}
