import Image from "next/image";
import { useState } from "react";
import { locations } from "@/data/locations";

export default function LocationsView() {
  const [openId, setOpenId] = useState(locations[0].id);

  const activeLocation = locations.find((l) => l.id === openId) ?? locations[0];

  return (
    <section
      className="bg-whey py-8 overflow-hidden"
      aria-label="Our locations"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left: title + subtitle + accordion */}
          <div>
            <h2 className="font-podium text-5xl sm:text-6xl md:text-7xl lg:text-9xl uppercase font-normal leading-none text-leaf mb-1 text-center">
              Locations
            </h2>
            <p className="text-leaf text-base mb-10 text-center">
              Find a 3Bros near you!
            </p>

            {/* Accordion — each button exposes its panel via aria-controls */}
            <div className="divide-y divide-leaf">
              {locations.map((location) => {
                const isOpen = location.id === openId;
                const panelId = `location-panel-${location.id}`;
                return (
                  <div key={location.id}>
                    <button
                      type="button"
                      className="w-full flex items-center justify-between py-3 text-left group focus:outline-none focus:ring-2 focus:ring-leaf focus:rounded"
                      onClick={() => setOpenId(location.id)}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                    >
                      <span
                        className={`font-poppins text-[28px] font-normal transition-colors ${
                          isOpen
                            ? "text-leaf"
                            : "text-leaf/70 group-hover:text-leaf/90"
                        }`}
                      >
                        {location.name}
                      </span>
                      <span
                        aria-hidden="true"
                        className="flex items-center justify-center w-6 h-6 shrink-0 border-2 border-leaf rounded-[4px] text-leaf text-3xl leading-none ml-4"
                      >
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    <div
                      id={panelId}
                      role="region"
                      aria-label={location.name}
                      hidden={!isOpen}
                      className={isOpen ? "pb-3" : ""}
                    >
                      {isOpen && (
                        <a
                          href={location.mapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-leaf hover:text-akushi-gold transition-colors text-[16px] focus:outline-none focus:ring-2 focus:ring-leaf focus:rounded"
                        >
                          {location.address}, {location.city}
                          <span className="sr-only">(opens in new tab)</span>
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: image, top-aligned with title */}
          <div className="relative w-4/5 mx-auto aspect-square overflow-hidden rounded-sm">
            <Image
              key={activeLocation.id}
              src={activeLocation.image}
              alt={`3Bros at ${activeLocation.name}`}
              fill
              className="object-cover transition-opacity duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
