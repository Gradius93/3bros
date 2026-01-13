import { useState } from "react";
import type { MenuItemData, Location } from "@/types";

const locations: Location[] = [
  { id: 1, name: "The Ghost at the Feast" },
  { id: 2, name: "Brighton Central" },
  { id: 3, name: "Lewes Market" },
  { id: 4, name: "Hove Beachfront" },
  { id: 5, name: "Worthing Town" },
  { id: 6, name: "Arundel Village" },
];

const menuItems: MenuItemData[] = [
  // Burgers
  {
    id: 1,
    name: "Classic 3Bros Burger",
    description: "Sussex-Wagyu beef, lettuce, tomato, pickles, special sauce",
    price: 12.5,
    category: "burger",
    availableAt: [1, 2, 3, 4, 5, 6], // Available at all locations
  },
  {
    id: 2,
    name: "The Ghost Special",
    description:
      "Double Sussex-Wagyu patty, aged cheddar, caramelized onions, bacon",
    price: 15,
    category: "burger",
    availableAt: [1], // Only at Chichester
  },
  {
    id: 3,
    name: "Brighton Blue",
    description: "Single patty, blue cheese, arugula, fig jam, crispy shallots",
    price: 14,
    category: "burger",
    availableAt: [2, 4], // Only at Brighton and Hove
  },
  {
    id: 4,
    name: "Spicy Sriracha Burger",
    description:
      "Sussex-Wagyu beef, pepper jack cheese, jalapeños, sriracha mayo",
    price: 13.5,
    category: "burger",
    availableAt: [1, 2, 3, 4, 5, 6],
  },
  {
    id: 5,
    name: "Mushroom Swiss Delight",
    description:
      "Sautéed mushrooms, Swiss cheese, truffle aioli, crispy onions",
    price: 14.5,
    category: "burger",
    availableAt: [3, 6], // Only at Lewes and Arundel
  },

  // Fries
  {
    id: 6,
    name: "Classic Fries",
    description: "Crispy golden fries seasoned with sea salt",
    price: 4,
    category: "fries",
    availableAt: [1, 2, 3, 4, 5, 6],
  },
  {
    id: 7,
    name: "Truffle Parmesan Fries",
    description: "Hand-cut fries tossed in truffle oil and parmesan",
    price: 6.5,
    category: "fries",
    availableAt: [1, 2, 4, 5],
  },
  {
    id: 8,
    name: "Loaded Cheese Fries",
    description: "Fries topped with melted cheese, bacon bits, and chives",
    price: 7,
    category: "fries",
    availableAt: [1, 2, 3, 4, 5, 6],
  },

  // Sides
  {
    id: 9,
    name: "Onion Rings",
    description: "Beer-battered crispy onion rings with ranch dip",
    price: 5.5,
    category: "sides",
    availableAt: [1, 2, 3, 4, 5, 6],
  },
  {
    id: 10,
    name: "Coleslaw",
    description: "Creamy homemade coleslaw with a tangy twist",
    price: 3.5,
    category: "sides",
    availableAt: [1, 2, 3, 4, 5, 6],
  },
  {
    id: 11,
    name: "Mac & Cheese Bites",
    description: "Crispy fried mac and cheese balls",
    price: 6,
    category: "sides",
    availableAt: [1, 2, 4],
  },
  {
    id: 12,
    name: "Sweet Potato Fries",
    description: "Crispy sweet potato fries with honey mayo",
    price: 5,
    category: "sides",
    availableAt: [1, 2, 3, 4, 5, 6],
  },

  // Drinks
  {
    id: 13,
    name: "Coca-Cola",
    description: "Classic Coke (330ml)",
    price: 2.5,
    category: "drinks",
    availableAt: [1, 2, 3, 4, 5, 6],
  },
  {
    id: 14,
    name: "Local Craft Beer",
    description: "Selection of Sussex craft beers",
    price: 5.5,
    category: "drinks",
    availableAt: [1, 2, 3, 4, 5, 6],
  },
  {
    id: 15,
    name: "Homemade Lemonade",
    description: "Fresh squeezed lemonade",
    price: 3.5,
    category: "drinks",
    availableAt: [1, 2, 3, 4, 5, 6],
  },
  {
    id: 16,
    name: "Milkshakes",
    description: "Vanilla, chocolate, or strawberry",
    price: 4.5,
    category: "drinks",
    availableAt: [1, 2, 3, 4, 5, 6],
  },
];

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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="w-full px-8 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Our Menu</h1>
          <p className="text-lg text-gray-600">
            Locally-sourced Sussex-Wagyu burgers and more
          </p>
        </div>
      </div>

      {/* Location Filter */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="w-full px-8 py-6">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="text-sm font-semibold text-gray-700">
              Filter by Location:
            </span>
            <div className="flex gap-2 flex-wrap">
              <button
                onClick={() => setSelectedLocation(null)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  selectedLocation === null
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
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    selectedLocation === location.id
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
      <div className="w-full px-8 py-12">
        <div className="max-w-6xl mx-auto space-y-16">
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
