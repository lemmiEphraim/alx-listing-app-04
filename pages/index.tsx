import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios';
import PropertyCard from '@/components/property/PropertyCard';

interface Property {
  id: number;
  title: string;
  location: string;
  price: number;
  rating: number;
  reviewCount: number;
  image: string;
  type: string;
}

const Home: React.FC = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        // In a real app, you would use your actual API endpoint
        // For now, we'll use a mock API response
        const response = await axios.get('https://jsonplaceholder.typicode.com/photos?_limit=10');
        
        // Transform the API response to match our Property interface
        const propertyData: Property[] = response.data.map((item: any, index: number) => ({
          id: item.id,
          title: `Beautiful Property ${index + 1}`,
          location: `Location ${index + 1}, City`,
          price: Math.floor(Math.random() * 300) + 100,
          rating: (Math.random() * 2 + 3).toFixed(1), // Random rating between 3.0 and 5.0
          reviewCount: Math.floor(Math.random() * 100),
          image: item.url, // Using the image from the API
          type: index % 3 === 0 ? 'Apartment' : index % 3 === 1 ? 'House' : 'Condo',
        }));
        
        setProperties(propertyData);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch properties');
        setLoading(false);
        console.error('Error fetching properties:', err);
      }
    };

    fetchProperties();
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#2B876E" />
        <Text style={styles.loadingText}>Loading properties...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Featured Properties</Text>
      {properties.map(property => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  loadingText: {
    marginTop: 12,
    fontSize: 16,
    color: '#666',
  },
  errorText: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
  },
});

export default Home;
