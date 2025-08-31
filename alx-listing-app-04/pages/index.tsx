// pages/index.tsx
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { PROPERTYLISTINGSAMPLE, HERO_BACKGROUND_IMAGE } from "@/constants";
import { PropertyProps } from "@/interfaces";
import Pill from "@/components/Pill";

type PropertyCategory = string;

interface PropertyCardProps {
  property: PropertyProps;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-200 hover:scale-105">
      <div className="relative w-full h-48">
        <Image
          src={property.image}
          alt={property.name}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
        {property.discount && (
          <span className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            -{property.discount}%
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 truncate">
          {property.name}
        </h3>
        <p className="text-gray-600 text-sm">
          {property.address.city}, {property.address.country}
        </p>
        <div className="flex items-center mt-2">
          <span className="text-yellow-500 text-lg mr-1">★</span>
          <span className="text-gray-700 font-medium">{property.rating}</span>
          <span className="ml-auto text-blue-600 text-xl font-bold">
            ${property.price}
          </span>
        </div>
        <div className="mt-2 flex flex-wrap gap-2">
          {property.category.map((cat) => (
            <span
              key={cat}
              className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
            >
              {cat}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<PropertyCategory | "All">(
    "All"
  );

  const allCategories = Array.from(
    new Set(
      PROPERTYLISTINGSAMPLE.flatMap((property) => property.category)
    )
  );

  const filters = ["All", ...allCategories];

  const filteredProperties =
    activeFilter === "All"
      ? PROPERTYLISTINGSAMPLE
      : PROPERTYLISTINGSAMPLE.filter((property) =>
          property.category.includes(activeFilter)
        );

  return (
    <>
      <Head>
        <title>ALX Listing App - Home</title>
        <meta name="description" content="Find your favorite place here!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section
        className="relative h-[500px] bg-cover bg-center flex items-center justify-center text-center px-4"
        style={{ backgroundImage: `url(${HERO_BACKGROUND_IMAGE})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-white">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
            Find your favorite place here!
          </h1>
          <p className="mt-4 text-xl md:text-2xl font-light drop-shadow-md">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Filter Properties
          </h2>
          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => (
              <Pill
                key={filter}
                label={filter}
                isActive={activeFilter === filter}
                onClick={setActiveFilter}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Explore Properties
          </h2>
          {filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProperties.map((property) => (
                <PropertyCard key={property.name} property={property} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-600 text-lg">
              No properties found for the selected filter.
            </p>
          )}
        </section>
      </div>
    </>
  );
};

export default Home;