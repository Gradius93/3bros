import { useRef, useState } from "react";
import type { MenuItemData } from "@/types";
import { locations } from "@/data/locations";
import { menuItems } from "@/data/menu";
import Image from "next/image";

export default function MenuView() {
  const [selectedLocation, setSelectedLocation] = useState<number | null>(null);

  const filteredItems = selectedLocation
    ? menuItems.filter((item) => item.availableAt.includes(selectedLocation))
    : menuItems;

  const burgers = filteredItems.filter((item) => item.category === "burger");
  const friesSides = filteredItems.filter(
    (item) => item.category === "fries/sides"
  );
  const sauces = filteredItems.filter((item) => item.category === "sauces");

  return (
    <div className="min-h-screen bg-whey mt-24">
      <div>
        <div className="max-w-7xl mx-auto px-4 pt-12 pb-2">
          <h2 className="text-8xl text-center text-leaf font-podium uppercase font-bold text-gray-900 mb-2">
            Our Menu
          </h2>
          <p className="text-3xl text-leaf text-center text-gray-600">
            Locally-sourced Sussex-Wagyu burgers & more...
          </p>
        </div>
      </div>

      <div className="sticky top-24 z-10">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex justify-center">
            <div className="flex items-center justify-center gap-2 flex-wrap">
              <button
                type="button"
                onClick={() => setSelectedLocation(null)}
                className={`px-4 py-2 rounded-lg transition-colors hover:cursor-pointer ${
                  selectedLocation === null
                    ? "bg-grass text-whey"
                    : "bg-whey text-grass border-2 border-grass"
                }`}
              >
                All Locations
              </button>
              {locations.map((location) => (
                <button
                  key={location.id}
                  type="button"
                  onClick={() => setSelectedLocation(location.id)}
                  className={`px-4 py-2 rounded-lg transition-colors hover:cursor-pointer ${
                    selectedLocation === location.id
                      ? "bg-grass text-whey"
                      : "bg-whey text-grass border-2 border-grass"
                  }`}
                >
                  {location.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="space-y-16">
          {burgers.length > 0 && (
            <CarouselSection title="Burgers" items={burgers} />
          )}
          {friesSides.length > 0 && (
            <CarouselSection title="Fries" items={friesSides} />
          )}
          {sauces.length > 0 && (
            <CarouselSection title="Sauces" items={sauces} />
          )}
          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">
                No menu items available at this location.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function CarouselSection({
  title,
  items,
}: {
  readonly title: string;
  readonly items: MenuItemData[];
}) {
  const trackRef = useRef<HTMLDivElement | null>(null);

  const scrollByWidth = (direction: "left" | "right") => {
    if (!trackRef.current) return;
    const offset = trackRef.current.clientWidth - 48;
    trackRef.current.scrollBy({
      left: direction === "right" ? offset : -offset,
      behavior: "smooth",
    });
  };

  return (
    <section>
      <div className="flex items-center justify-between gap-4 m-4 border-t-2 border-leaf">
        <h3 className="text-3xl font-poppins py-4">{title}</h3>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => scrollByWidth("left")}
            className="inline-flex items-center justify-center h-11 w-11 rounded-full bg-white border border-gray-300 text-gray-700 shadow-sm hover:bg-gray-100 focus:outline-none"
            aria-label={`Scroll ${title} left`}
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => scrollByWidth("right")}
            className="inline-flex items-center justify-center h-11 w-11 rounded-full bg-white border border-gray-300 text-gray-700 shadow-sm hover:bg-gray-100 focus:outline-none"
            aria-label={`Scroll ${title} right`}
          >
            →
          </button>
        </div>
      </div>
      <div className="overflow-x-auto scroll-smooth py-4" ref={trackRef}>
        <div className="flex gap-6 snap-x snap-mandatory px-3">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-[90vw] md:w-[45vw] lg:w-[24vw] snap-start"
            >
              <MenuItemCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MenuItemCard({ item }: { readonly item: MenuItemData }) {
  return (
    <div className="bg-forest rounded-b-lg shadow-md hover:shadow-lg transition-shadow h-[500px] flex flex-col overflow-hidden">
      <div className="relative w-full h-48 overflow-hidden flex-shrink-0">
        <Image
          src="/images/pattys.jpg"
          alt={item.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="text-xs text-grass mb-2 flex-shrink-0">
          Available at:{" "}
          {item.availableAt.length === 6
            ? "All locations"
            : item.availableAt
                .map(
                  (locId) =>
                    locations.find((loc) => loc.id === locId)?.name || ""
                )
                .join(", ")}
        </div>
        <div className="flex mb-3 justify-center flex-shrink-0">
          <h4 className="text-4xl uppercase font-podium text-whey">
            {item.name}
          </h4>
        </div>
        <p className="text-whey mb-4 flex-grow">{item.description}</p>
        <span className="text-lg text-grass flex-shrink-0">
          £{item.price.toFixed(2)}
        </span>
      </div>
    </div>
  );
}
