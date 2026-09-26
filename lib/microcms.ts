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

export const getPrograms = () => getList<Program>("programs");
export const getRecipes = () => getList<Recipe>("recipes");
