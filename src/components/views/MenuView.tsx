import { useEffect, useRef, useState } from "react";
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
    <div className="min-h-screen bg-whey">
      <div>
        <div className="max-w-7xl mx-auto px-4 pt-12 pb-2">
          <h2 className="text-4xl sm:text-6xl lg:text-8xl text-center text-leaf font-podium uppercase font-bold text-gray-900 mb-2">
            Our Menu
          </h2>
          <p className="text-3xl text-leaf text-center text-gray-600">
            Locally-sourced Sussex-Wagyu burgers & more...
          </p>
        </div>
      </div>

      <div>
        <div className="max-w-7xl mx-auto px-4 py-6">
          {/* role=group + aria-label makes this a named group of toggle buttons */}
          <div
            role="group"
            aria-label="Filter menu by location"
            className="flex justify-center"
          >
            <div className="flex items-center justify-center gap-2 flex-wrap">
              <button
                type="button"
                onClick={() => setSelectedLocation(null)}
                aria-pressed={selectedLocation === null}
                className={`px-4 py-2 min-h-[44px] rounded-lg transition-colors hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-leaf focus:ring-offset-2 ${
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
                  aria-pressed={selectedLocation === location.id}
                  className={`px-4 py-2 min-h-[44px] rounded-lg transition-colors hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-leaf focus:ring-offset-2 ${
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
            <CarouselSection key={`burgers-${selectedLocation}`} title="Burgers" items={burgers} />
          )}
          {friesSides.length > 0 && (
            <CarouselSection key={`fries-${selectedLocation}`} title="Fries" items={friesSides} />
          )}
          {sauces.length > 0 && (
            <CarouselSection key={`sauces-${selectedLocation}`} title="Sauces" items={sauces} />
          )}
          {filteredItems.length === 0 && (
            <div className="text-center py-12" role="status" aria-live="polite">
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
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(items.length > 1);

  const updateScrollState = () => {
    const el = trackRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 1);
  };

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    return () => el.removeEventListener("scroll", updateScrollState);
  }, []);

  const scroll = (direction: "left" | "right") => {
    const el = trackRef.current;
    if (!el) return;
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      const cards = Array.from(el.firstElementChild?.children ?? []) as HTMLElement[];
      if (cards.length === 0) return;
      const cardWidth = cards[0].offsetWidth;
      const gap = 24; // gap-6
      const currentIndex = Math.round(el.scrollLeft / (cardWidth + gap));
      const targetIndex = direction === "right"
        ? Math.min(currentIndex + 1, cards.length - 1)
        : Math.max(currentIndex - 1, 0);
      el.scrollTo({ left: targetIndex * (cardWidth + gap), behavior: "smooth" });
    } else {
      const offset = el.clientWidth - 48;
      el.scrollBy({ left: direction === "right" ? offset : -offset, behavior: "smooth" });
    }
  };

  // 44px min touch target; focus ring replaces bare focus:outline-none
  const btnBase =
    "inline-flex items-center justify-center min-h-[44px] min-w-[44px] rounded-lg border-2 transition-colors focus:outline-none focus:ring-2 focus:ring-leaf focus:ring-offset-1";
  const btnEnabled = "bg-whey border-leaf text-leaf hover:bg-leaf hover:text-whey";
  const btnDisabled = "bg-whey/40 border-leaf/30 text-leaf/30 cursor-not-allowed";

  return (
    <section aria-label={title}>
      <div className="flex items-center justify-between gap-4 m-4 border-t-2 border-leaf">
        <h3 className="text-3xl font-poppins py-4">{title}</h3>
        <div className="flex gap-2" role="group" aria-label={`${title} carousel controls`}>
          <button
            type="button"
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`${btnBase} ${canScrollLeft ? btnEnabled : btnDisabled}`}
            aria-label={`Scroll ${title} left`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="11 6 5 12 11 18"/></svg>
          </button>
          <button
            type="button"
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`${btnBase} ${canScrollRight ? btnEnabled : btnDisabled}`}
            aria-label={`Scroll ${title} right`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="13 6 19 12 13 18"/></svg>
          </button>
        </div>
      </div>
      <div
        className="overflow-x-auto scroll-smooth py-4 -mx-4 md:mx-0 no-scrollbar"
        ref={trackRef}
        aria-label={`${title} items`}
      >
        <ul className="flex gap-6 snap-x snap-mandatory md:px-3 list-none">
          {items.map((item) => (
            <li
              key={item.id}
              className="flex-shrink-0 w-screen md:w-[45vw] lg:w-[24vw] snap-start"
            >
              <MenuItemCard item={item} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function MenuItemCard({ item }: { readonly item: MenuItemData }) {
  const availableAt =
    item.availableAt.length >= locations.length
      ? "All locations"
      : item.availableAt
          .map((locId) => locations.find((loc) => loc.id === locId)?.name ?? "")
          .join(", ");

  return (
    <article className="flex flex-col h-[600px] bg-whey border-2 border-leaf rounded-2xl overflow-hidden">
      <div className="relative w-full h-80 flex-shrink-0 overflow-hidden">
        <Image
          src={item.image ?? "/images/pattys.jpg"}
          alt={`3Bros ${item.name}`}
          fill
          className="object-cover"
        />
      </div>

      <div className="bg-forest flex-grow flex flex-col items-center justify-center px-6 py-5 text-center">
        <p className="text-grass text-xs uppercase tracking-widest mb-3">
          Available at: {availableAt}
        </p>
        <h4 className="text-3xl uppercase font-podium font-bold text-whey leading-tight mb-3">
          {item.name}
        </h4>
        <p className="text-whey/80 text-sm mb-4">{item.description}</p>
        <span className="text-grass text-base">£{item.price.toFixed(2)}</span>
      </div>
    </article>
  );
}
