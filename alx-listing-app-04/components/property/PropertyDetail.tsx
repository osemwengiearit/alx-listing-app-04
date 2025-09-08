// components/common/PropertyDetail.tsx
import React from "react";

interface PropertyDetailProps {
  id: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: number; // in sqft or m²
}

const PropertyDetail: React.FC<PropertyDetailProps> = ({
  title,
  description,
  price,
  imageUrl,
  location,
  bedrooms,
  bathrooms,
  area,
}) => {
  return (
    <div className="p-6 bg-white rounded-2xl shadow-lg">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-80 object-cover rounded-xl mb-6"
      />
      <h1 className="text-3xl font-bold mb-2">{title}</h1>
      <p className="text-gray-500 text-lg mb-4">{location}</p>

      <div className="grid grid-cols-3 gap-4 text-center mb-6">
        <div>
          <p className="text-lg font-semibold">{bedrooms}</p>
          <p className="text-sm text-gray-500">Bedrooms</p>
        </div>
        <div>
          <p className="text-lg font-semibold">{bathrooms}</p>
          <p className="text-sm text-gray-500">Bathrooms</p>
        </div>
        <div>
          <p className="text-lg font-semibold">{area} sqft</p>
          <p className="text-sm text-gray-500">Area</p>
        </div>
      </div>

      <p className="text-gray-700 mb-6">{description}</p>

      <p className="text-2xl font-bold text-green-600">
        ${price.toLocaleString()}
      </p>
    </div>
  );
};

export default PropertyDetail;
