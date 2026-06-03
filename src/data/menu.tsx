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
    availableAt: [1, 2, 3, 4, 5, 6],
    image: "/images/menu_Classic.jpg",
  },
  {
    id: 2,
    name: "Bacon Cheese",
    description:
      "Sussex-Wagyu patty, crispy smoked bacon, smoked cheddar, bros burger sauce",
    price: 14,
    category: "burger",
    availableAt: [1, 2, 3, 4, 5, 6],
    image: "/images/menu_Bacon_Cheese.jpg",
  },
  {
    id: 3,
    name: "Chilli Blue",
    description: "Sussex-Wagyu beef, blue cheese, chilli sauce",
    price: 12.5,
    category: "burger",
    availableAt: [1, 2, 3, 4, 5, 6],
    image: "/images/menu_Chilli_Blue.jpg",
  },
  {
    id: 4,
    name: "Mushroom & Halloumi",
    description:
      "Portobello mushroom, grilled halloumi, lettuce, bros burger sauce",
    price: 12,
    category: "burger",
    availableAt: [1, 3],
    image: "/images/menu_Mushroom_Halloumi.jpg",
  },
  {
    id: 5,
    name: "Bone marrow & truffle",
    description:
      "Sussex Wagyu beef, smoked cheddar, confit onion, pickled gherkin, bone marrow truffle mayo",
    price: 13,
    category: "burger",
    availableAt: [2, 3, 4],
    image: "/images/menu_Bone_Marrow_Truffle.jpg",
  },
  {
    id: 6,
    name: "Chickpea & Veg",
    description:
      "Aromatic chickpea & veg patty, lettuce, vegan bros burger sauce",
    price: 12,
    category: "burger",
    availableAt: [2],
    image: "/images/menu_Chickpea_Veg.jpg",
  },
  {
    id: 7,
    name: "Mushroom garlictruffle",
    description:
      "Crispy mushroom & truffle patty, pickled gherkin, vegan confit garlic mayo",
    price: 12,
    category: "burger",
    availableAt: [2, 4],
    image: "/images/menu_Mushroom_Garlic_Truffle.jpg",
  },

  // Fries & sides
  {
    id: 8,
    name: "Fries",
    description: "Rosemary & oregano salt dusting",
    price: 4,
    category: "fries/sides",
    availableAt: [1, 2, 3, 4, 5, 6],
    image: "/images/menu_Rosemary_Oregano_Fries.jpg",
  },
  {
    id: 9,
    name: "Truffle Parmesan & Fries",
    description: "Grated parmesan & black truffle EV olive oil",
    price: 6.5,
    category: "fries/sides",
    availableAt: [2],
    image: "/images/menu_Truffle_Parmesan_Fries.jpg",
  },

  {
    id: 10,
    name: "Halloumi Fries",
    description: "Fried halloumi & hot honey",
    price: 7.5,
    category: "fries/sides",
    availableAt: [2, 3, 4],
    image: "/images/menu_Halloumi_Fries.jpg",
  },
  {
    id: 11,
    name: "Mac & Cheese Bites",
    description: "Mac & cheese bites & chilli sauce",
    price: 7.5,
    category: "fries/sides",
    availableAt: [2, 3, 4],
    image: "/images/menu_Mac_Cheese_Bites.jpg",
  },
  {
    id: 12,
    name: "Wragù Fries",
    description:
      "Rich spiced Sussex Wagyu ragù, smoked cheddar, pickled jalapeño loaded fries",
    price: 9.5,
    category: "fries/sides",
    availableAt: [2],
    image: "/images/menu_Wragu_Fries.jpg",
  },

  // Sauces
  {
    id: 13,
    name: "Bros burger sauce",
    price: 2,
    category: "sauces",
    availableAt: [1, 2, 3, 4, 5, 6],
    image: "/images/menu_Bros_Burger_Sauce.jpg",
  },
  {
    id: 14,
    name: "chilli sauce",
    price: 2,
    category: "sauces",
    availableAt: [1, 2, 3, 4, 5, 6],
    image: "/images/menu_Chilli_Sauce.jpg",
  },
  {
    id: 15,
    name: "hot honey",
    price: 2,
    category: "sauces",
    availableAt: [2, 3, 4],
    image: "/images/menu_Hot_Honey.jpg",
  },
  {
    id: 16,
    name: "Bone marrow truffle mayo",
    price: 2,
    category: "sauces",
    availableAt: [2, 3, 4],
    image: "/images/menu_Bone_Marrow_Truffle_Mayo.jpg",
  },
  {
    id: 17,
    name: "Vegan bros burger sauce",
    price: 2,
    category: "sauces",
    availableAt: [2],
    image: "/images/menu_Bros_Burger_Sauce.jpg",
  },
  {
    id: 18,
    name: "Vegan confit garlic mayo",
    price: 2,
    category: "sauces",
    availableAt: [2, 4],
    image: "/images/menu_Vegan_Confit_Garlic_Mayo.jpg",
  },
];
