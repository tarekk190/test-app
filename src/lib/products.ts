export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  images: string[];
  features?: string[];
  specifications?: Record<string, string>;
  category: string;
}

export const products: Product[] = [
  {
    id: "Many Size of Bags",
    name: "Many Size of Bags",
    price: 129.99,
    description:
      "A versatile and durable backpack perfect for all your outdoor adventures. Features multiple compartments and weather-resistant material.",
    images: [
      "https://images.unsplash.com/photo-1510820058481-c2e18e60c3b2?w=1200&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a45?w=1200&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1496346236646-50e985b31ea4?w=1200&h=1200&fit=crop",
    ],
    category: "backpacks",
    features: [
      "Water-resistant material",
      'Laptop compartment (up to 15")',
      "Multiple storage pockets",
      "Padded shoulder straps",
      "Chest and waist straps",
    ],
    specifications: {
      capacity: "30L",
      weight: "1.2kg",
      material: "Ripstop Nylon",
      dimensions: "50 x 30 x 20 cm",
    },
  },
  {
    id: "Black Travel Bag",
    name: "Black Travel Bag",
    price: 89.99,
    description:
      "Sleek and spacious duffel bag designed for urban travelers. Perfect for weekend getaways or gym sessions.",
    images: [
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a45?w=1200&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a45?w=1200&h=1200&fit=crop",
    ],
    category: "duffels",
    features: [
      "Shoe compartment",
      "Removable shoulder strap",
      "Water bottle pocket",
      "Quick access pocket",
    ],
    specifications: {
      capacity: "40L",
      weight: "0.9kg",
      material: "Ballistic Nylon",
      dimensions: "55 x 25 x 25 cm",
    },
  },
  {
    id: "weekender-leather-bag",
    name: "Weekender Leather Bag",
    price: 199.99,
    description:
      "Premium leather weekender bag with classic design. Perfect for business trips and short vacations.",
    images: [
      "https://images.unsplash.com/photo-1547949003-9792a18a2601?w=1200&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1516594798947-e65505dbb29d?w=1200&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=1200&h=1200&fit=crop",
    ],
    category: "weekenders",
    features: [
      "Full-grain leather",
      "Brass hardware",
      "Laptop sleeve",
      "Trolley sleeve",
    ],
    specifications: {
      capacity: "45L",
      weight: "1.8kg",
      material: "Full-grain leather",
      dimensions: "60 x 30 x 25 cm",
    },
  },
  {
    id: "hiking-daypack",
    name: "Hiking Daypack",
    price: 79.99,
    description:
      "Lightweight and comfortable daypack for hiking and outdoor activities. Features hydration compatibility.",
    images: [
      "https://images.unsplash.com/photo-1585916420730-d7f95e942d43?w=1200&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1510820058481-c2e18e60c3b2?w=1200&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1496346236646-50e985b31ea4?w=1200&h=1200&fit=crop",
    ],
    category: "backpacks",
    features: [
      "Hydration compatible",
      "Trekking pole attachments",
      "Rain cover included",
      "Ventilated back panel",
    ],
    specifications: {
      capacity: "22L",
      weight: "0.8kg",
      material: "Nylon",
      dimensions: "45 x 25 x 20 cm",
    },
  },
  {
    id: "rolling-carry-on",
    name: "Rolling Carry-on Suitcase",
    price: 159.99,
    description:
      "Smart carry-on suitcase with smooth-rolling wheels and organized compartments. Meets airline size requirements.",
    images: [
      "https://images.unsplash.com/photo-1581553680321-4fffae59fccd?w=1200&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1550089479-fe0e48e7d788?w=1200&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?w=1200&h=1200&fit=crop",
    ],
    category: "luggage",
    features: [
      "360° spinner wheels",
      "TSA-approved lock",
      "Expandable design",
      "USB charging port",
    ],
    specifications: {
      capacity: "35L",
      weight: "2.8kg",
      material: "Polycarbonate",
      dimensions: "55 x 35 x 23 cm",
    },
  },
  {
    id: "travel-tote-bag",
    name: "Travel Tote Bag",
    price: 69.99,
    description:
      "Stylish and functional tote bag perfect for daily commute or as a personal item for flights.",
    images: [
      "https://images.unsplash.com/photo-1591561954557-26941169b49e?w=1200&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=1200&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1524498250077-390f9e378fc0?w=1200&h=1200&fit=crop",
    ],
    category: "totes",
    features: [
      "Padded laptop sleeve",
      "Key leash",
      "Multiple pockets",
      "Luggage sleeve",
    ],
    specifications: {
      capacity: "20L",
      weight: "0.6kg",
      material: "Canvas & Leather",
      dimensions: "40 x 35 x 15 cm",
    },
  },
]; 