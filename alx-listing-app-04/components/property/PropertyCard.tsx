// components/common/PropertyCard.tsx
import React from "react";

interface PropertyCardProps {
  id: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  location: string;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  title,
  description,
  price,
  imageUrl,
  location,
}) => {
  return (
    <div className="rounded-2xl shadow-md p-4 bg-white">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover rounded-xl mb-3"
      />
      <h2 className="text-xl font-semibold mb-1">{title}</h2>
      <p className="text-gray-500 text-sm mb-2">{location}</p>
      <p className="text-gray-700 mb-3">{description}</p>
      <p className="text-lg font-bold">${price.toLocaleString()}</p>
    </div>
  );
};

export default PropertyCard;
