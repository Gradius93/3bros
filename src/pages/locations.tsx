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
    "@type": "ItemList",
    name: "3Bros Burgers — All Locations",
    description: "Find a 3Bros Burgers location near you across the South of England.",
    itemListElement: locations.map((loc, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "FoodEstablishment",
        name: `3Bros Burgers — ${loc.name}`,
        address: {
          "@type": "PostalAddress",
          streetAddress: loc.address,
          addressLocality: loc.city.split(",")[0].trim(),
          postalCode: loc.city.split(",")[1]?.trim(),
          addressCountry: "GB",
        },
        url: `https://3bros.co.uk/locations`,
      },
    })),
  };

  return (
    <>
      <SEOHead
        title="3Bros Burgers Locations — Brighton, Chichester, Winchester & Horsham"
        description="Find a 3Bros Burgers near you. Visit us at Shelter Hall Brighton, The Ghost at the Feast Chichester, Helch Winchester, or Trenchmore Farm Horsham."
        canonical="/locations"
        keywords="3Bros locations, Shelter Hall Brighton, Ghost at the Feast Chichester, Helch Winchester, Trenchmore Farm Horsham"
        structuredData={structuredData}
      />
      <main id="main-content" role="main" className="min-h-screen bg-gray-50">
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
        </div>

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
                  <h2 className="text-xl font-bold text-gray-900 mb-1">
                    {location.name}
                  </h2>
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
      </main>
    </>
  );
}
