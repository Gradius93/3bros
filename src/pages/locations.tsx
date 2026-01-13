import Image from "next/image";
import { useState } from "react";

interface Location {
  id: number;
  name: string;
  description: string;
  address: string;
  city: string;
  phone: string;
  hours: string;
  image: string;
}

const locations: Location[] = [
  {
    id: 1,
    name: "The Ghost at the Feast",
    description:
      "Our flagship location in historic Chichester, serving the finest Sussex-Wagyu burgers in a cozy pub setting.",
    address: "10 St Pancras, Chichester",
    city: "Chichester, West Sussex",
    phone: "+44 1243 123456",
    hours: "Mon-Sun: 12pm - 10pm",
    image: "/images/3bros_logo.png",
  },
  {
    id: 2,
    name: "Brighton Central",
    description:
      "Back to our roots! Our newest location brings 3Bros home to Brighton's vibrant food scene.",
    address: "25 North Street",
    city: "Brighton, East Sussex",
    phone: "+44 1273 234567",
    hours: "Mon-Sun: 11am - 11pm",
    image: "/images/3bros_logo.png",
  },
  {
    id: 3,
    name: "Lewes Market",
    description:
      "A hidden gem in the heart of Lewes, perfect for a weekend burger after exploring the town.",
    address: "8 High Street",
    city: "Lewes, East Sussex",
    phone: "+44 1273 345678",
    hours: "Tue-Sat: 12pm - 9pm",
    image: "/images/3bros_logo.png",
  },
  {
    id: 4,
    name: "Hove Beachfront",
    description:
      "Enjoy award-winning burgers with stunning seafront views along Hove's beautiful coastline.",
    address: "42 Kingsway",
    city: "Hove, East Sussex",
    phone: "+44 1273 456789",
    hours: "Mon-Sun: 11am - 10pm",
    image: "/images/3bros_logo.png",
  },
  {
    id: 5,
    name: "Worthing Town",
    description:
      "Bringing locally-sourced, sustainable burgers to the heart of Worthing's bustling town center.",
    address: "15 Chapel Road",
    city: "Worthing, West Sussex",
    phone: "+44 1903 567890",
    hours: "Mon-Sun: 12pm - 9pm",
    image: "/images/3bros_logo.png",
  },
  {
    id: 6,
    name: "Arundel Village",
    description:
      "Experience 3Bros in the picturesque medieval town of Arundel, surrounded by historic charm.",
    address: "3 High Street",
    city: "Arundel, West Sussex",
    phone: "+44 1903 678901",
    hours: "Wed-Sun: 12pm - 8pm",
    image: "/images/3bros_logo.png",
  },
];

export default function Locations() {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(
    null
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="w-full px-8 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Our Locations
          </h1>
          <p className="text-lg text-gray-600">
            Find a 3Bros near you across Sussex
          </p>
        </div>
      </div>

      {/* Instagram-style Grid */}
      <div className="w-full px-0 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
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

      {/* Location Details Modal */}
      {selectedLocation && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <button
            className="absolute inset-0 border-0 bg-transparent cursor-default"
            onClick={() => setSelectedLocation(null)}
            aria-label="Close location details"
          />
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto relative z-10">
            {/* Image */}
            <div className="relative w-full aspect-video">
              <Image
                src={selectedLocation.image}
                alt={selectedLocation.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Details */}
            <div className="p-8">
              <h2
                id="location-modal-title"
                className="text-3xl font-bold text-gray-900 mb-4"
              >
                {selectedLocation.name}
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">
                    Address
                  </h3>
                  <p className="text-lg text-gray-900">
                    {selectedLocation.address}
                  </p>
                  <p className="text-lg text-gray-700">
                    {selectedLocation.city}
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">
                    Phone
                  </h3>
                  <a
                    href={`tel:${selectedLocation.phone}`}
                    className="text-lg text-blue-600 hover:underline"
                  >
                    {selectedLocation.phone}
                  </a>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">
                    Hours
                  </h3>
                  <p className="text-lg text-gray-900">
                    {selectedLocation.hours}
                  </p>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedLocation(null)}
                className="mt-8 w-full px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
