import villa1 from "@/assets/villa-1.jpg";
import villa2 from "@/assets/villa-2.jpg";
import villa3 from "@/assets/villa-3.jpg";
import villa4 from "@/assets/villa-4.jpg";

export interface Villa {
  id: string;
  name: string;
  location: string;
  image: string;
  images: string[];
  bedrooms: number;
  bathrooms: number;
  guests: number;
  description: string;
  longDescription: string;
  amenities: string[];
  highlights: string[];
}

export const villas: Villa[] = [
  {
    id: "veena-villa",
    name: "Veena Villa",
    location: "North Goa",
    image: villa1,
    images: [villa1, villa2, villa3, villa4],
    bedrooms: 4,
    bathrooms: 4,
    guests: 8,
    description: "A stunning luxury villa offering a perfect blend of comfort and elegance in North Goa.",
    longDescription: "Veena Villa is a beautifully designed retreat that offers the perfect escape from the hustle and bustle of city life. Nestled in the serene landscapes of North Goa, this villa combines traditional charm with modern amenities. Enjoy spacious living areas, beautifully landscaped gardens, and proximity to Goa's best beaches and attractions.",
    amenities: [
      "Private Pool",
      "Spacious Living Areas",
      "Fully Equipped Kitchen",
      "Air Conditioning",
      "WiFi",
      "Private Parking",
      "Garden",
      "BBQ Area",
      "Daily Housekeeping",
      "24/7 Security"
    ],
    highlights: [
      "Close to popular beaches",
      "Peaceful and serene location",
      "Perfect for families and groups",
      "Chef service available on request"
    ]
  },
  {
    id: "la-vagator",
    name: "La Vagator",
    location: "Vagator, North Goa",
    image: villa2,
    images: [villa2, villa1, villa3, villa4],
    bedrooms: 6,
    bathrooms: 6,
    guests: 12,
    description: "A luxurious 3BHK villa with 6 elegantly designed rooms including a private jacuzzi room.",
    longDescription: "La Vagator is our flagship property, a magnificent 3BHK villa featuring 6 uniquely designed rooms spread across a stunning property in the heart of Vagator. Room 5 offers an exclusive experience with a private jacuzzi and serene back area. The villa boasts beautiful outdoor areas perfect for gatherings, parties, or simply relaxing under the Goan sun.",
    amenities: [
      "6 Luxurious Rooms",
      "Private Jacuzzi (Room 5)",
      "Expansive Outdoor Area",
      "Private Pool",
      "Fully Equipped Kitchen",
      "Air Conditioning",
      "High-Speed WiFi",
      "Private Parking",
      "Garden & Lawn",
      "BBQ & Entertainment Area",
      "Daily Housekeeping",
      "24/7 Security"
    ],
    highlights: [
      "Room 5 with private jacuzzi",
      "Beautiful outdoor entertainment area",
      "Perfect for large groups and events",
      "Minutes from Vagator Beach"
    ]
  },
  {
    id: "la-anjuna",
    name: "La Anjuna",
    location: "Anjuna, North Goa",
    image: villa3,
    images: [villa3, villa1, villa2, villa4],
    bedrooms: 4,
    bathrooms: 4,
    guests: 8,
    description: "Experience the vibrant spirit of Anjuna in this beautifully crafted luxury villa.",
    longDescription: "La Anjuna captures the essence of Goa's most iconic beach destination. Located in the heart of Anjuna, this villa offers easy access to the famous flea markets, beach shacks, and nightlife while providing a peaceful sanctuary to return to. The property features elegant interiors, comfortable bedrooms, and outdoor spaces designed for relaxation.",
    amenities: [
      "Private Pool",
      "Spacious Bedrooms",
      "Modern Kitchen",
      "Air Conditioning",
      "WiFi",
      "Private Parking",
      "Sun Loungers",
      "Outdoor Dining",
      "Daily Housekeeping",
      "Concierge Service"
    ],
    highlights: [
      "Walking distance to Anjuna Beach",
      "Near famous Anjuna Flea Market",
      "Vibrant nightlife nearby",
      "Perfect blend of party and peace"
    ]
  },
  {
    id: "lavender-villa",
    name: "Lavender Villa",
    location: "North Goa",
    image: villa4,
    images: [villa4, villa1, villa2, villa3],
    bedrooms: 3,
    bathrooms: 3,
    guests: 6,
    description: "A charming villa with elegant interiors and a tranquil atmosphere for a relaxing getaway.",
    longDescription: "Lavender Villa offers an intimate and refined escape in North Goa. Named for its serene ambiance, this charming property features elegantly appointed rooms, cozy living spaces, and beautiful gardens that provide the perfect backdrop for a peaceful vacation. Ideal for couples, small families, or friends seeking a quiet retreat.",
    amenities: [
      "Private Pool",
      "Elegant Interiors",
      "Fully Equipped Kitchen",
      "Air Conditioning",
      "WiFi",
      "Private Parking",
      "Garden",
      "Outdoor Seating",
      "Daily Housekeeping",
      "Airport Transfers Available"
    ],
    highlights: [
      "Tranquil and peaceful setting",
      "Perfect for couples and small groups",
      "Beautifully landscaped gardens",
      "Close to beaches and restaurants"
    ]
  }
];

export const getVillaById = (id: string): Villa | undefined => {
  return villas.find(villa => villa.id === id);
};
