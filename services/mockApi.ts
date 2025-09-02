import { Property } from '@/components/property/PropertyCard';

// Mock data for properties
export const mockProperties: Property[] = [
  {
    id: 1,
    title: 'Luxury Apartment in Downtown',
    location: 'Downtown, New York',
    price: 250,
    rating: 4.8,
    reviewCount: 124,
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    type: 'Apartment',
  },
  {
    id: 2,
    title: 'Cozy Beach House',
    location: 'Malibu, California',
    price: 350,
    rating: 4.9,
    reviewCount: 89,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    type: 'House',
  },
  {
    id: 3,
    title: 'Modern City Loft',
    location: 'Chicago, Illinois',
    price: 195,
    rating: 4.5,
    reviewCount: 76,
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    type: 'Loft',
  },
  {
    id: 4,
    title: 'Mountain Cabin Retreat',
    location: 'Aspen, Colorado',
    price: 275,
    rating: 4.7,
    reviewCount: 112,
    image: 'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    type: 'Cabin',
  },
  {
    id: 5,
    title: 'Urban Studio Apartment',
    location: 'Seattle, Washington',
    price: 120,
    rating: 4.3,
    reviewCount: 64,
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    type: 'Studio',
  },
];

// Simulate API call with a delay
export const fetchProperties = (): Promise<Property[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockProperties);
    }, 1500); // Simulate network delay
  });
};
