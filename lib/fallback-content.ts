import type { Program, Recipe } from "./content-types";

export const fallbackPrograms: Program[] = [
  { id: "boxing-burn", title: "脂肪燃焼ボクシング", duration: 20, level: "中級", type: "ボクシング", part: "全身", calories: 230, videoId: "M7lc1UVf-VE", color: "from-red-800" },
  { id: "silent-shadow", title: "静音シャドーボクシング", duration: 10, level: "初級", type: "静音ノーキック", part: "二の腕", calories: 110, videoId: "M7lc1UVf-VE", color: "from-zinc-600" },
  { id: "kick-core", title: "キック＆コアクラッシュ", duration: 30, level: "上級", type: "キックボクシング", part: "お腹", calories: 380, videoId: "M7lc1UVf-VE", color: "from-orange-700" },
  { id: "boxing-basic", title: "はじめてのボクシング", duration: 10, level: "初級", type: "ボクシング", part: "全身", calories: 95, videoId: "M7lc1UVf-VE", color: "from-blue-800" },
  { id: "silent-hiit", title: "ノーキック HIIT", duration: 20, level: "中級", type: "静音ノーキック", part: "お腹", calories: 210, videoId: "M7lc1UVf-VE", color: "from-purple-800" },
  { id: "power-kick", title: "パワーキックコンボ", duration: 30, level: "上級", type: "キックボクシング", part: "全身", calories: 420, videoId: "M7lc1UVf-VE", color: "from-amber-700" },
];

export const fallbackRecipes: Recipe[] = [
  { id: "chicken-grill", title: "鶏むね肉の香味グリル", kcal: 382, p: 46, f: 9, c: 28, time: 15, tags: ["高タンパク", "鶏胸肉", "減量期"], ingredients: ["鶏むね肉 200g", "玄米 100g", "長ねぎ 1/4本", "醤油・酢 各大さじ1"], steps: ["鶏むね肉を均一な厚さに開く", "フライパンで両面を香ばしく焼く", "刻んだねぎと調味料を合わせてかける"], color: "from-amber-700" },
  { id: "tuna-bowl", title: "ツナと卵のパワーボウル", kcal: 415, p: 38, f: 12, c: 40, time: 5, tags: ["5分時短", "高タンパク", "作り置き"], ingredients: ["ノンオイルツナ 1缶", "卵 2個", "雑穀ごはん 120g", "葉野菜 適量"], steps: ["卵を好みの固さに茹でる", "器にごはんと葉野菜を盛る", "ツナと卵をのせる"], color: "from-emerald-700" },
  { id: "spicy-soup", title: "旨辛チキン・スープ", kcal: 298, p: 41, f: 7, c: 18, time: 20, tags: ["高タンパク", "鶏胸肉", "作り置き", "減量期"], ingredients: ["鶏むね肉 150g", "白菜 100g", "キムチ 50g", "鶏がらスープ 300ml"], steps: ["材料を食べやすく切る", "スープを沸かして鶏肉を煮る", "野菜とキムチを加えて5分煮る"], color: "from-red-800" },
  { id: "protein-oats", title: "プロテイン・オーバーナイトオーツ", kcal: 340, p: 30, f: 8, c: 42, time: 5, tags: ["5分時短", "高タンパク", "作り置き"], ingredients: ["オートミール 40g", "プロテイン 25g", "無脂肪ヨーグルト 100g", "ベリー 適量"], steps: ["保存容器ですべてを混ぜる", "冷蔵庫で一晩休ませる", "ベリーを添える"], color: "from-purple-800" },
];
