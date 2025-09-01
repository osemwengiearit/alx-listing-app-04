import { useRouter } from 'next/router';
import axios from 'axios';
import { useState, useEffect } from 'react';
import PropertyDetail from '@/components/property/PropertyDetail';

// Define the interface for a Property to ensure type safety.
interface Property {
  id: number;
  imageUrl: string;
  title: string;
  location: string;
  price: number;
  description: string;
  rating: number;
  reviews: number;
}

/**
 * The PropertyDetailPage component handles fetching and displaying a single property's details
 * based on the dynamic route ID.
 */
export default function PropertyDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Only proceed if the router has a valid ID.
    if (!id) return;

    const fetchProperty = async () => {
      try {
        // Assume API endpoint is /api/properties/:id
        // Using a placeholder API for demonstration.
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );

        // Map the placeholder data to our expected Property interface.
        const fetchedData: Property = {
          id: response.data.id,
          imageUrl: `https://placehold.co/800x600/E8E8E8/4F4F4F?text=Property+${response.data.id}`,
          title: `Charming Home ${response.data.id}`,
          location: `San Francisco, CA`,
          price: 2500,
          description: `This is a beautiful property located in a serene neighborhood. It features modern amenities and a stunning view. Perfect for a relaxing getaway.`,
          rating: 4.8,
          reviews: 24,
        };

        setProperty(fetchedData);
      } catch (err) {
        console.error('Error fetching property details:', err);
        setError('Failed to load property details. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <p className="text-xl text-gray-700">Loading...</p>
      </div>
    );
  }

  if (error || !property) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <p className="text-xl text-red-500">{error || 'Property not found'}</p>
      </div>
    );
  }

  return <PropertyDetail property={property} />;
}
