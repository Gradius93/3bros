import Image from "next/image";
import { useState } from "react";
import type { Location } from "../../types";

interface LocationModalProps {
  readonly location: Location;
  readonly onClose: () => void;
}

export function LocationModal({ location, onClose }: LocationModalProps) {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 300); // Match fadeOut duration (0.3s)
  };

  return (
    <div
      className={`fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 ${
        isClosing ? "animate-fadeOut" : "animate-fadeIn"
      }`}
    >
      <button
        className="absolute inset-0 border-0 bg-transparent cursor-default"
        onClick={handleClose}
        aria-label="Close location details"
      />
      <div
        className={`bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto relative z-10 ${
          isClosing ? "animate-fadeOut" : "animate-flipIn"
        }`}
      >
        {/* Image */}
        <div className="relative w-full aspect-video">
          <Image
            src={location.image}
            alt={location.name}
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
            {location.name}
          </h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">
                Address
              </h3>
              <p className="text-lg text-gray-900">{location.address}</p>
              <p className="text-lg text-gray-700">{location.city}</p>
            </div>

            {location.phone && (
              <div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">
                  Phone
                </h3>
                <a
                  href={`tel:${location.phone}`}
                  className="text-lg text-blue-600 hover:underline"
                >
                  {location.phone}
                </a>
              </div>
            )}

            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">
                Hours
              </h3>
              <p className="text-lg text-gray-900">{location.hours}</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-8 space-y-3">
            <a
              href={location.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              View on Google Maps
            </a>
            <button
              onClick={handleClose}
              className="w-full px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
