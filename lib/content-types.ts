export interface Program {
  id: string;
  title: string;
  duration: number;
  level: "初級" | "中級" | "上級";
  type: string;
  part: string;
  calories: number;
  videoId: string;
  color?: string;
}

export interface Recipe {
  id: string;
  title: string;
  kcal: number;
  p: number;
  f: number;
  c: number;
  time: number;
  tags: string[];
  ingredients: string[];
  steps: string[];
  color?: string;
}

export interface MicroCMSListResponse<T> {
  contents: T[];
  totalCount: number;
  offset: number;
  limit: number;
}
