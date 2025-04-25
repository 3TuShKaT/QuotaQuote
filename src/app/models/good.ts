export interface Good {
  id: number | string;
  name: string;
  description: string;
  price?: number;
  points?: number;
  image: string;
  url: string;
  category?: string;
  rating?: number;
  reviewsCount?: number;
  isNew?: boolean;
  isSale?: boolean;
  isBestSeller?: boolean;
  isRecommended?: boolean;
}
