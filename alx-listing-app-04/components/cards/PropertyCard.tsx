import React from 'react';
import { PropertyProps } from '@/interfaces';
import Image from 'next/image';

interface Props {
  property: PropertyProps;
}

const PropertyCard: React.FC<Props> = ({ property }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden w-full max-w-sm">
      <Image
        src={property.image}
        alt={property.name}
        width={400}
        height={250}
        className="object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{property.name}</h3>
        <p className="text-sm text-gray-600">
          {property.address.city}, {property.address.country}
        </p>
        <p className="mt-2 text-gray-800 font-bold">${property.price}</p>
        <p className="text-sm text-yellow-600">⭐ {property.rating}</p>
      </div>
    </div>
  );
};

export default PropertyCard;
