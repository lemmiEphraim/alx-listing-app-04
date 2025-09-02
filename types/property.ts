export interface Property {
  id: number;
  title: string;
  location: string;
  price: number;
  rating: number;
  reviewCount: number;
  image: string;
  type: string;
  bedrooms?: number;
  bathrooms?: number;
  area?: number;
  description?: string;
  amenities?: string[];
}
