export interface MenuItem {
  href: string;
  label: string;
}

export interface MenuItemData {
  id: number;
  name: string;
  description: string;
  price: number;
  category: 'burger' | 'fries' | 'sides' | 'drinks';
  availableAt: number[]; // Location IDs where this item is available
  image?: string;
}

export interface Location {
  id: number;
  name: string;
  description: string;
  address: string;
  city: string;
  phone?: string;
  hours: string;
  image: string;
  mapsUrl: string;
}
