import React from 'react';

// Define the interface for the property object
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

interface PropertyDetailProps {
  property: Property;
}

/**
 * PropertyDetail component displays the detailed view of a single property.
 */
const PropertyDetail: React.FC<PropertyDetailProps> = ({ property }) => {
  return (
    <div className="container mx-auto p-4 md:p-8 max-w-4xl">
      {/* Property Image */}
      <div className="rounded-xl overflow-hidden shadow-lg mb-6">
        <img
          className="w-full h-80 object-cover"
          src={property.imageUrl}
          alt={property.title}
        />
      </div>

      {/* Property Details Section */}
      <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
        {/* Title and Price */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold text-gray-800">{property.title}</h1>
          <span className="text-2xl font-bold text-indigo-600">
            ${property.price}
          </span>
        </div>

        {/* Location and Rating */}
        <div className="flex items-center text-gray-500 mb-6">
          <span className="text-sm">{property.location}</span>
          <span className="mx-2">•</span>
          <span className="text-sm">
            ⭐ {property.rating} ({property.reviews} reviews)
          </span>
        </div>

        {/* Description */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-gray-800">
            About this place
          </h2>
          <p className="text-gray-600 leading-relaxed">
            {property.description}
          </p>
        </div>

        {/* Booking Button */}
        <div className="mt-8">
          <button className="w-full bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors duration-200 shadow-md">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
