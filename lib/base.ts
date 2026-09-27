import type { Product } from "./products";

const apiOrigin = "https://api.thebase.in/1";
const accessToken = process.env.BASE_ACCESS_TOKEN;
const shopUrl = process.env.BASE_SHOP_URL;

interface BaseItem {
  item_id: number;
  title: string;
  price: number | string;
  stock: number;
  img1_origin?: string;
  img1_300?: string;
  item_url?: string;
}

interface BaseItemsResponse {
  items: BaseItem[];
}

/** Fetches the catalog managed in BASE. The access token is never sent to the browser. */
export async function getBaseProducts(): Promise<Product[]> {
  if (!accessToken) throw new Error("BASE_ACCESS_TOKEN is not configured");

  const response = await fetch(`${apiOrigin}/items?limit=100`, {
    headers: { Authorization: `Bearer ${accessToken}` },
    next: { revalidate: 60 },
  });
  if (!response.ok) throw new Error(`BASE API request failed: ${response.status}`);

  const data = (await response.json()) as BaseItemsResponse;
  return data.items.map((item, index) => ({
    id: String(item.item_id),
    name: item.title,
    category: "BASE SHOP",
    price: Number(item.price),
    stock: item.stock,
    imageUrl: item.img1_origin || item.img1_300,
    itemUrl: item.item_url || (shopUrl ? `${shopUrl}/items/${item.item_id}` : undefined),
    subscriptionEligible: false,
    color: "from-zinc-700",
    num: String(index + 1).padStart(2, "0"),
  }));
}
