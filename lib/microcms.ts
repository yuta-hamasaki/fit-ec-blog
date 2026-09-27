import type { MicroCMSListResponse, Program, Recipe } from "./content-types";

const serviceDomain = process.env.MICROCMS_SERVICE_DOMAIN;
const apiKey = process.env.MICROCMS_API_KEY;

async function getList<T>(endpoint: string): Promise<T[]> {
  if (!serviceDomain || !apiKey) throw new Error("microCMS is not configured");
  const response = await fetch(
    `https://${serviceDomain}.microcms.io/api/v1/${endpoint}?limit=100`,
    { headers: { "X-MICROCMS-API-KEY": apiKey }, next: { revalidate: 60 } },
  );
  if (!response.ok) throw new Error(`microCMS request failed: ${response.status}`);
  return ((await response.json()) as MicroCMSListResponse<T>).contents;
}

function youtubeId(program: Program): string {
  if (program.videoId) return program.videoId;
  if (!program.videoUrl) return "";
  try {
    const url = new URL(program.videoUrl);
    if (url.hostname === "youtu.be") return url.pathname.slice(1);
    if (url.pathname.startsWith("/embed/")) return url.pathname.split("/")[2];
    return url.searchParams.get("v") ?? "";
  } catch {
    return "";
  }
}

export async function getPrograms() {
  const programs = await getList<Program>("programs");
  return programs.map((program) => ({ ...program, videoId: youtubeId(program) }));
}
export const getRecipes = () => getList<Recipe>("recipes");
