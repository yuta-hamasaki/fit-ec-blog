export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  color: string;
  num: string;
  stock?: number;
  imageUrl?: string;
  itemUrl?: string;
  subscriptionEligible?: boolean;
}

export const products: Product[] = [
  { id: "ball", name: "静音パンチングボール", category: "TRAINING GEAR", price: 12800, color: "from-red-700", num: "01", subscriptionEligible: true },
  { id: "wrap", name: "プレミアム バンテージ", category: "TRAINING GEAR", price: 1980, color: "from-zinc-500", num: "02", subscriptionEligible: true },
  { id: "protein", name: "Wプロテイン / チョコレート", category: "SUPPLEMENT", price: 4980, color: "from-amber-800", num: "03", subscriptionEligible: true },
  { id: "mat", name: "ショックレス トレーニングマット", category: "HOME GYM", price: 8900, color: "from-stone-600", num: "04", subscriptionEligible: true },
];
