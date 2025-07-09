export interface Good {
  id: number | string;
  name: string;
  description: string;
  price?: number;
  points?: number;
  images?: string[];
  productUrl?: string;
  category?: 'coffee' | 'equipment' | 'merch' | 'subscription' | 'accessory';
  rating?: number;
  reviewsCount?: number;
  isNew?: boolean;
  isSale?: boolean;
  isBestSeller?: boolean;
  isRecommended?: boolean;

  roastType?: string;
  country?: string;
  region?: string;
  varietal?: string;
  farm?: string;
  process?: string;
  altitude?: string;
  grade?: string;
  notes?: string;

  stockQuantity?: number;
  available?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
