import Image from "next/image";
import { useState } from "react";
import { locations } from "@/data/locations";

export default function LocationsView() {
  const [openId, setOpenId] = useState(locations[0].id);

  const activeLocation = locations.find((l) => l.id === openId) ?? locations[0];

  return (
    <section className="bg-whey py-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left: title + subtitle + accordion */}
          <div>
            <h2 className="font-podium text-5xl sm:text-6xl md:text-7xl lg:text-9xl uppercase font-normal leading-none text-leaf mb-1 text-center">
              Locations
            </h2>
            <p className="text-leaf text-base mb-10 text-center">Find a 3bros near you!</p>

            <div className="divide-y divide-leaf">
              {locations.map((location) => {
                const isOpen = location.id === openId;
                return (
                  <div key={location.id}>
                    <button
                      type="button"
                      className="w-full flex items-center justify-between py-3 text-left group"
                      onClick={() => setOpenId(location.id)}
                    >
                      <span
                        className={`font-poppins text-[28px] font-normal transition-colors ${
                          isOpen ? "text-leaf" : "text-leaf/50 group-hover:text-leaf/80"
                        }`}
                      >
                        {location.name}
                      </span>
                      <span className="flex items-center justify-center w-6 h-6 shrink-0 border-2 border-leaf rounded-[4px] text-leaf text-3xl leading-none ml-4">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="pb-3">
                        <a
                          href={location.mapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-grass hover:text-akushi-gold transition-colors text-[16px]"
                        >
                          {location.address}, {location.city}
                        </a>
                      </div>
                    )}
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
              alt={activeLocation.name}
              fill
              className="object-cover transition-opacity duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
