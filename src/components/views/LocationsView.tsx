import Image from "next/image";
import { useState } from "react";
import { LocationModal } from "@/components/modals/LocationModal";
import { locations } from "@/data/locations";
import type { Location as StoreLocation } from "@/types";

export default function LocationsView() {
  const [selectedLocation, setSelectedLocation] = useState<StoreLocation | null>(
    null
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">Our Locations</h2>
          <p className="text-lg text-gray-600">
            Find a 3Bros near you across South England
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,320px))] justify-center gap-8">
          {locations.map((location) => (
            <div key={location.id} className="w-full">
              <button
                type="button"
                className="relative aspect-square bg-white overflow-hidden cursor-pointer group w-full border-0 p-0 mb-3"
                onClick={() => setSelectedLocation(location)}
                aria-label={`View details for ${location.name}`}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={location.image}
                    alt={location.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </button>

              <div className="px-2 text-center">
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
  );
}
