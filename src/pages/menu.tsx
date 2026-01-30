import { useState } from "react";
import type { MenuItemData } from "@/types";
import SEOHead from "../components/SEOHead";
import { locations } from "../data/locations";
import { menuItems } from "../data/menu";

export default function Menu() {
  const [selectedLocation, setSelectedLocation] = useState<number | null>(null);

  // Filter menu items based on selected location
  const filteredItems = selectedLocation
    ? menuItems.filter((item) => item.availableAt.includes(selectedLocation))
    : menuItems;

  // Group items by category
  const burgers = filteredItems.filter((item) => item.category === "burger");
  const fries = filteredItems.filter((item) => item.category === "fries");
  const sides = filteredItems.filter((item) => item.category === "sides");
  const drinks = filteredItems.filter((item) => item.category === "drinks");

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Menu",
    name: "3Bros Burgers Menu",
    description:
      "Sussex-Wagyu burgers, loaded fries, sides, and drinks. Premium locally-sourced ingredients.",
  };

  return (
    <>
      <SEOHead
        title="Menu - 3Bros Burgers"
        description="Explore our menu of Sussex-Wagyu burgers, truffle fries, crispy sides, and craft drinks. Premium ingredients, locally sourced from Trenchmore Farm."
        canonical="/menu"
        keywords="3Bros menu, Wagyu burger menu, Sussex burgers, burger prices, gourmet burgers Sussex"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Our Menu</h1>
            <p className="text-lg text-gray-600">
              Locally-sourced Sussex-Wagyu burgers and more
            </p>
          </div>
        </div>

        {/* Location Filter */}
        <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex items-center gap-4 flex-wrap">
              <span className="text-sm font-semibold text-gray-700">
                Filter by Location:
              </span>
              <div className="flex gap-2 flex-wrap">
                <button
                  onClick={() => setSelectedLocation(null)}
                  className={`px-4 py-2 rounded-lg transition-colors ${selectedLocation === null
                    ? "bg-gray-900 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                >
                  All Locations
                </button>
                {locations.map((location) => (
                  <button
                    key={location.id}
                    onClick={() => setSelectedLocation(location.id)}
                    className={`px-4 py-2 rounded-lg transition-colors ${selectedLocation === location.id
                      ? "bg-gray-900 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                      }`}
                  >
                    {location.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Menu Content */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="space-y-16">
            {/* Burgers Section */}
            {burgers.length > 0 && (
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-8 pb-4 border-b-2 border-gray-900">
                  Burgers
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {burgers.map((item) => (
                    <MenuItemCard key={item.id} item={item} />
                  ))}
                </div>
              </section>
            )}

            {/* Fries Section */}
            {fries.length > 0 && (
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-8 pb-4 border-b-2 border-gray-900">
                  Fries
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {fries.map((item) => (
                    <MenuItemCard key={item.id} item={item} />
                  ))}
                </div>
              </section>
            )}

            {/* Sides Section */}
            {sides.length > 0 && (
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-8 pb-4 border-b-2 border-gray-900">
                  Sides
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {sides.map((item) => (
                    <MenuItemCard key={item.id} item={item} />
                  ))}
                </div>
              </section>
            )}

            {/* Drinks Section */}
            {drinks.length > 0 && (
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-8 pb-4 border-b-2 border-gray-900">
                  Drinks
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {drinks.map((item) => (
                    <MenuItemCard key={item.id} item={item} />
                  ))}
                </div>
              </section>
            )}

            {/* No items message */}
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
    </>
  );
}

function MenuItemCard({ item }: { readonly item: MenuItemData }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
        <span className="text-lg font-semibold text-gray-900">
          £{item.price.toFixed(2)}
        </span>
      </div>
      <p className="text-gray-600 mb-4">{item.description}</p>
      <div className="text-xs text-gray-500">
        Available at:{" "}
        {item.availableAt.length === 6
          ? "All locations"
          : item.availableAt
            .map(
              (locId) => locations.find((loc) => loc.id === locId)?.name || ""
            )
            .join(", ")}
      </div>
    </div>
  );
}
