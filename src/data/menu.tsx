import type { MenuItemData } from "../types";

export const menuItems: MenuItemData[] = [
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