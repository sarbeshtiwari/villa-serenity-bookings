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
    id: "serenity-villa",
    name: "Serenity Villa",
    location: "Anjuna, North Goa",
    image: villa1,
    images: [villa1, villa2, villa3, villa4],
    bedrooms: 4,
    bathrooms: 4,
    guests: 8,
    description: "A luxurious beachfront retreat with stunning ocean views and private pool.",
    longDescription: "Serenity Villa offers an unparalleled escape to paradise. Nestled along the pristine shores of Anjuna Beach, this magnificent property combines traditional Goan architecture with modern luxury. Wake up to the sound of waves, enjoy your morning coffee on the spacious terrace, and spend your days lounging by the infinity pool overlooking the Arabian Sea.",
    amenities: [
      "Private Infinity Pool",
      "Ocean Views",
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
      "Steps away from Anjuna Beach",
      "Stunning sunset views",
      "Perfect for families and groups",
      "Chef service available"
    ]
  },
  {
    id: "palm-grove-villa",
    name: "Palm Grove Villa",
    location: "Vagator, North Goa",
    image: villa2,
    images: [villa2, villa1, villa3, villa4],
    bedrooms: 3,
    bathrooms: 3,
    guests: 6,
    description: "Tropical paradise surrounded by palm trees with a stunning beachfront location.",
    longDescription: "Palm Grove Villa is your tropical sanctuary in the heart of Vagator. This stunning property is surrounded by swaying palm trees and offers direct access to one of Goa's most beautiful beaches. The villa features an open-plan design that seamlessly blends indoor and outdoor living, perfect for those seeking a true tropical escape.",
    amenities: [
      "Beachfront Access",
      "Private Pool",
      "Outdoor Living Area",
      "Modern Kitchen",
      "Air Conditioning",
      "High-Speed WiFi",
      "Sun Deck",
      "Hammocks",
      "Beach Equipment",
      "Concierge Service"
    ],
    highlights: [
      "Direct beach access",
      "Surrounded by palm gardens",
      "Ideal for couples and small groups",
      "Water sports nearby"
    ]
  },
  {
    id: "heritage-house",
    name: "Heritage House",
    location: "Fontainhas, Panaji",
    image: villa3,
    images: [villa3, villa1, villa2, villa4],
    bedrooms: 5,
    bathrooms: 4,
    guests: 10,
    description: "A restored Portuguese colonial mansion in the heart of Goa's Latin Quarter.",
    longDescription: "Step back in time at Heritage House, a meticulously restored Portuguese colonial mansion located in Fontainhas, Goa's UNESCO-recognized Latin Quarter. This architectural gem features original azulejo tiles, high ceilings with wooden beams, and antique furnishings that tell stories of a bygone era. Experience authentic Goan culture while enjoying modern comforts.",
    amenities: [
      "Historic Architecture",
      "Antique Furnishings",
      "Courtyard Garden",
      "Library Room",
      "Air Conditioning",
      "WiFi",
      "Walking Distance to Restaurants",
      "Cultural Tours Arranged",
      "Traditional Goan Breakfast",
      "Private Guide Available"
    ],
    highlights: [
      "UNESCO heritage location",
      "Original Portuguese architecture",
      "Walking distance to cafes and galleries",
      "Perfect for history enthusiasts"
    ]
  },
  {
    id: "sunset-terrace",
    name: "Sunset Terrace",
    location: "Candolim, North Goa",
    image: villa4,
    images: [villa4, villa1, villa2, villa3],
    bedrooms: 3,
    bathrooms: 3,
    guests: 6,
    description: "Modern villa with rooftop terrace offering panoramic sunset views over the ocean.",
    longDescription: "Sunset Terrace is a contemporary masterpiece designed for those who appreciate modern luxury with a touch of Goan charm. The highlight of this villa is its spectacular rooftop terrace, offering 360-degree views perfect for watching the famous Goa sunsets. The villa features clean lines, natural materials, and seamless indoor-outdoor living.",
    amenities: [
      "Rooftop Terrace",
      "Panoramic Views",
      "Plunge Pool",
      "Modern Design",
      "Smart Home Features",
      "High-Speed WiFi",
      "Outdoor Dining",
      "Fire Pit",
      "Premium Sound System",
      "Wine Cellar"
    ],
    highlights: [
      "Best sunset views in Candolim",
      "Contemporary architecture",
      "Perfect for entertaining",
      "Close to beach and restaurants"
    ]
  }
];

export const getVillaById = (id: string): Villa | undefined => {
  return villas.find(villa => villa.id === id);
};
