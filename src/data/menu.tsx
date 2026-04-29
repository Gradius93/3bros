import type { MenuItemData } from "../types";

export const menuItems: MenuItemData[] = [
  // Burgers
  {
    id: 1,
    name: "The Classic",
    description:
      "Sussex-Wagyu beef, smoked cheddar, lettuce, bros burger sauce",
    price: 12.0,
    category: "burger",
    availableAt: [1, 2, 3, 4, 5, 6], // Available at all locations
  },
  {
    id: 2,
    name: "Bacon Cheese",
    description:
      "Sussex-Wagyu patty, crispy smoked bacon, smoked cheddar, bros burger sauce",
    price: 14,
    category: "burger",
    availableAt: [1, 2, 3, 4, 5, 6], // Available at all locations
  },
  {
    id: 3,
    name: "Chilli Blue",
    description: "Sussex-Wagyu beef, blue cheese, chilli sauce",
    price: 12.5,
    category: "burger",
    availableAt: [1, 2, 3, 4, 5, 6], // Available at all locations
  },
  {
    id: 4,
    name: "Mushroom & Halloumi",
    description:
      "Portobello mushroom, grilled halloumi, lettuce, bros burger sauce",
    price: 12,
    category: "burger",
    availableAt: [1, 3], // Only at Trenchmore Farm and Chichester
  },
  {
    id: 5,
    name: "Bone marrow & truffle",
    description:
      "Sussex Wagyu beef, smoked cheddar, confit onion, pickled gherkin, bone marrow truffle mayo",
    price: 13,
    category: "burger",
    availableAt: [2, 3, 4], // Only at Brighton, Chichester and Winchester
  },
  {
    id: 6,
    name: "Chickpea & Veg",
    description:
      "Aromatic chickpea & veg patty, lettuce, vegan bros burger sauce",
    price: 12,
    category: "burger",
    availableAt: [2], // Only at Brighton
  },
  {
    id: 7,
    name: "Mushroom garlictruffle",
    description:
      "Crispy mushroom & truffle patty, pickled gherkin, vegan confit garlic mayo",
    price: 12,
    category: "burger",
    availableAt: [2, 4], // Only at Brighton and Winchester
  },

  // Fries & sides
  {
    id: 8,
    name: "Truffle Parmesan & Fries",
    description: "Grated parmesan & black truffle EV olive oil",
    price: 6.5,
    category: "fries/sides",
    availableAt: [2], // Only at Brighton
  },
  {
    id: 9,
    name: "Fries",
    description: "Rosemary & oregano salt dusting",
    price: 4,
    category: "fries/sides",
    availableAt: [1, 2, 3, 4, 5, 6], // Available at all locations
  },

  {
    id: 10,
    name: "Halloumi Fries",
    description: "Fried halloumi & hot honey",
    price: 7.5,
    category: "fries/sides",
    availableAt: [2, 3, 4], // Only at Brighton, Chichester and Winchester
  },
  {
    id: 11,
    name: "Mac & Cheese Bites",
    description: "Mac & cheese bites & chilli sauce",
    price: 7.5,
    category: "fries/sides",
    availableAt: [2, 3, 4], // Only at Brighton, Chichester and Winchester
  },
  {
    id: 12,
    name: "Wragù Fries",
    description:
      "Rich spiced Sussex Wagyu ragù, smoked cheddar, pickled jalapeño loaded fries",
    price: 9.5,
    category: "fries/sides",
    availableAt: [2], // Only at Brighton
  },

  // Sauces
  {
    id: 13,
    name: "Bros burger sauce",
    price: 2,
    category: "sauces",
    availableAt: [1, 2, 3, 4, 5, 6], // Available at all locations
  },
  {
    id: 14,
    name: "chilli sauce",
    price: 2,
    category: "sauces",
    availableAt: [1, 2, 3, 4, 5, 6], // Available at all locations
  },
  {
    id: 15,
    name: "hot honey",
    price: 2,
    category: "sauces",
    availableAt: [2, 3, 4], // Only at Brighton, Chichester and Winchester
  },
  {
    id: 16,
    name: "Bone marrow truffle mayo",
    price: 2,
    category: "sauces",
    availableAt: [2, 3, 4], // Only at Brighton, Chichester and Winchester
  },
  {
    id: 17,
    name: "Vegan bros burger sauce",
    price: 2,
    category: "sauces",
    availableAt: [2], // Only at Brighton
  },
  {
    id: 18,
    name: "Vegan confit garlic mayo",
    price: 2,
    category: "sauces",
    availableAt: [2, 4], // Only at Brighton and Winchester
  },
];
