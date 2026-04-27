import Image from "next/image";
import { useState } from "react";
import SEOHead from "../components/SEOHead";
import { LocationModal } from "../components/modals/LocationModal";
import { locations } from "../data/locations";
import type { Location as StoreLocation } from "../types";

export default function Locations() {
  const [selectedLocation, setSelectedLocation] = useState<StoreLocation | null>(
    null
  );

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "3Bros",
    description: "Find 3Bros locations across South England",
    address: {
      "@type": "PostalAddress",
      addressCountry: "GB",
      addressRegion: "South England",
    },
  };

  return (
    <>
      <SEOHead
        title="Locations - 3Bros"
        description="Find a 3Bros near you. Visit our locations in Horsham, Brighton, Chichester, and Winchester. Farm shop and food halls offering quality local produce."
        canonical="/locations"
        keywords="3Bros locations, food halls, farm shop, Horsham, Brighton, Chichester, Winchester, local produce"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Our Locations
            </h1>
            <p className="text-lg text-gray-600">
              Find a 3Bros near you across South England
            </p>
          </div>
        </div>2

        {/* Instagram-style Grid */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((location) => (
              <div key={location.id} className="w-full">
                <button
                  className="relative aspect-square bg-white overflow-hidden cursor-pointer group w-full border-0 p-0 mb-3"
                  onClick={() => setSelectedLocation(location)}
                  aria-label={`View details for ${location.name}`}
                >
                  {/* Image */}
                  <div className="relative w-full h-full">
                    <Image
                      src={location.image}
                      alt={location.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </button>

                {/* Title and Description */}
                <div className="px-2">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {location.name}
                  </h3>
                  <p className="text-sm text-gray-600">{location.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {selectedLocation && (
          <LocationModal
            location={selectedLocation}
            onClose={() => setSelectedLocation(null)}
          />
        )}
      </div>
    </>
  );
}
