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
    id: "lavender-villa",
    name: "Lavender Villa",
    location: "North Goa",
    image: '/assets/lavender-villa/1.jpg',
    images: ['/assets/lavender-villa/1.jpg', '/assets/lavender-villa/2.jpg', '/assets/lavender-villa/3.jpg', '/assets/lavender-villa/4.jpg', '/assets/lavender-villa/8.jpg', '/assets/lavender-villa/9.jpg', '/assets/lavender-villa/11.jpg', '/assets/lavender-villa/12.jpg', '/assets/lavender-villa/13.jpg', '/assets/lavender-villa/15.jpg', '/assets/lavender-villa/17.jpg', '/assets/lavender-villa/19.jpg', '/assets/lavender-villa/20.jpg', '/assets/lavender-villa/21.jpg', '/assets/lavender-villa/22.jpg', '/assets/lavender-villa/23.jpg', '/assets/lavender-villa/25.jpg', '/assets/lavender-villa/28.jpg', '/assets/lavender-villa/30.jpg', '/assets/lavender-villa/31.jpg', '/assets/lavender-villa/32.jpg', '/assets/lavender-villa/33.jpg', '/assets/lavender-villa/34.jpg', '/assets/lavender-villa/36.jpg', '/assets/lavender-villa/37.jpg', '/assets/lavender-villa/38.jpg', '/assets/lavender-villa/40.jpg', '/assets/lavender-villa/42.jpg', '/assets/lavender-villa/44.jpg', '/assets/lavender-villa/46.jpg', '/assets/lavender-villa/47.jpg', '/assets/lavender-villa/48.jpg', '/assets/lavender-villa/49.jpg', '/assets/lavender-villa/50.jpg', '/assets/lavender-villa/51.jpg', '/assets/lavender-villa/52.jpg', '/assets/lavender-villa/53.jpg', '/assets/lavender-villa/54.jpg', '/assets/lavender-villa/55.jpg', '/assets/lavender-villa/60.jpg', '/assets/lavender-villa/61.jpg', '/assets/lavender-villa/68.jpg', '/assets/lavender-villa/69.jpg', '/assets/lavender-villa/70.jpg', '/assets/lavender-villa/72.jpg', '/assets/lavender-villa/73.jpg', '/assets/lavender-villa/75.jpg', '/assets/lavender-villa/79.jpg', '/assets/lavender-villa/80.jpg', '/assets/lavender-villa/82.jpg'],
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
  },  
  {
    id: "veena-villa",
    name: "Veena Villa",
    location: "North Goa",
    image: '/assets/veena-villa/img51.jpg',
    images: ['/assets/veena-villa/img51.jpg', '/assets/veena-villa/img57.jpg', '/assets/veena-villa/img62.jpg', '/assets/veena-villa/img67.jpg', '/assets/veena-villa/img72.jpg', '/assets/veena-villa/img77.jpg', '/assets/veena-villa/img82.jpg', '/assets/veena-villa/img87.jpg', '/assets/veena-villa/img92.jpg', '/assets/veena-villa/img97.jpg', '/assets/veena-villa/img102.jpg', '/assets/veena-villa/img107.jpg', '/assets/veena-villa/img112.jpg', '/assets/veena-villa/img117.jpg', '/assets/veena-villa/img122.jpg', '/assets/veena-villa/img127.jpg', '/assets/veena-villa/img132.jpg', '/assets/veena-villa/img137.jpg', '/assets/veena-villa/img142.jpg', '/assets/veena-villa/img147.jpg', '/assets/veena-villa/img152.jpg', '/assets/veena-villa/img159.jpg', '/assets/veena-villa/img164.jpg', '/assets/veena-villa/img174.jpg', '/assets/veena-villa/img179.jpg', '/assets/veena-villa/img184.jpg', '/assets/veena-villa/img189.jpg', '/assets/veena-villa/img194.jpg', '/assets/veena-villa/img199.jpg', '/assets/veena-villa/img204.jpg', '/assets/veena-villa/img209.jpg', '/assets/veena-villa/img214.jpg', '/assets/veena-villa/img219.jpg', '/assets/veena-villa/img224.jpg', '/assets/veena-villa/img229.jpg', '/assets/veena-villa/img234.jpg', '/assets/veena-villa/img239.jpg', '/assets/veena-villa/img244.jpg', '/assets/veena-villa/img249.jpg', '/assets/veena-villa/img254.jpg', '/assets/veena-villa/img260.jpg', '/assets/veena-villa/img265.jpg', '/assets/veena-villa/img270.jpg', '/assets/veena-villa/img275.jpg',],
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
    id: "la-anjuna-3-bhk",
    name: "La Anjuna 3 BHK",
    location: "Anjuna, North Goa",
    image: '/assets/la-anjuna-3-bhk/RIO06608-Enhanced-NR-HDR.jpg',
    images: ['/assets/la-anjuna-3-bhk/RIO06608-Enhanced-NR-HDR.jpg', '/assets/la-anjuna-3-bhk/RIO06586-Enhanced-NR-HDR.jpg', '/assets/la-anjuna-3-bhk/RIO06580-Enhanced-NR-HDR.jpg', '/assets/la-anjuna-3-bhk/RIO06575-Enhanced-NR-HDR.jpg', '/assets/la-anjuna-3-bhk/RIO06570-Enhanced-NR-HDR.jpg', '/assets/la-anjuna-3-bhk/RIO06558-Enhanced-NR-HDR-2.jpg', '/assets/la-anjuna-3-bhk/RIO06554-Enhanced-NR-HDR.jpg', '/assets/la-anjuna-3-bhk/RIO06551-Enhanced-NR-HDR.jpg', '/assets/la-anjuna-3-bhk/RIO06548-Enhanced-NR-HDR.jpg', '/assets/la-anjuna-3-bhk/RIO06543-Enhanced-NR-HDR.jpg', '/assets/la-anjuna-3-bhk/RIO06534-Enhanced-NR-HDR.jpg', '/assets/la-anjuna-3-bhk/RIO06533-Enhanced-NR-HDR.jpg', '/assets/la-anjuna-3-bhk/RIO06528-Enhanced-NR-HDR.jpg', '/assets/la-anjuna-3-bhk/RIO06527-Enhanced-NR-HDR.jpg', '/assets/la-anjuna-3-bhk/RIO06505-Enhanced-NR-HDR.jpg', '/assets/la-anjuna-3-bhk/RIO06494-Enhanced-NR-HDR.jpg', '/assets/la-anjuna-3-bhk/RIO06491-Enhanced-NR-HDR-2.jpg', '/assets/la-anjuna-3-bhk/RIO06486-Enhanced-NR-HDR.jpg', '/assets/la-anjuna-3-bhk/RIO06483-Enhanced-NR-HDR.jpg', '/assets/la-anjuna-3-bhk/RIO06480-Enhanced-NR-HDR.jpg', '/assets/la-anjuna-3-bhk/RIO06477-Enhanced-NR-HDR.jpg', '/assets/la-anjuna-3-bhk/RIO06474-Enhanced-NR-HDR.jpg', '/assets/la-anjuna-3-bhk/RIO06471-Enhanced-NR-HDR.jpg', '/assets/la-anjuna-3-bhk/RIO06468-Enhanced-NR-HDR.jpg', '/assets/la-anjuna-3-bhk/RIO06465-Enhanced-NR-HDR.jpg', '/assets/la-anjuna-3-bhk/RIO06462-Enhanced-NR-HDR.jpg', '/assets/la-anjuna-3-bhk/RIO06459-Enhanced-NR-HDR.jpg',],
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
    id: "la-anjuna-9-bhk",
    name: "La Anjuna 9 BHK",
    location: "Anjuna, North Goa",
    image: '/assets/la-anjuna-9-bhk/outdoor/RIO06608-Enhanced-NR-HDR.jpg',
    images: ['/assets/la-anjuna-9-bhk/outdoor/RIO06608-Enhanced-NR-HDR.jpg', '/assets/la-anjuna-9-bhk/outdoor/RIO06586-Enhanced-NR-HDR.jpg', '/assets/la-anjuna-9-bhk/outdoor/RIO06580-Enhanced-NR-HDR.jpg', '/assets/la-anjuna-9-bhk/outdoor/RIO06575-Enhanced-NR-HDR.jpg', '/assets/la-anjuna-9-bhk/outdoor/RIO06570-Enhanced-NR-HDR.jpg', '/assets/la-anjuna-9-bhk/outdoor/RIO06558-Enhanced-NR-HDR-2.jpg', '/assets/la-anjuna-9-bhk/room-1/RIO06570-Enhanced-NR-HDR.jpg', '/assets/la-anjuna-9-bhk/room-1/RIO06575-Enhanced-NR-HDR.jpg', '/assets/la-anjuna-9-bhk/room-1/RIO06580-Enhanced-NR-HDR.jpg', '/assets/la-anjuna-9-bhk/room-1/RIO06586-Enhanced-NR-HDR.jpg', '/assets/la-anjuna-9-bhk/room-1/RIO06610-HDR.jpg', '/assets/la-anjuna-9-bhk/room-1/RIO06615-HDR.jpg', '/assets/la-anjuna-9-bhk/room-1/RIO06620-HDR.jpg', '/assets/la-anjuna-9-bhk/room-1/RIO06625-HDR.jpg', '/assets/la-anjuna-9-bhk/room-1/RIO06630-HDR.jpg', '/assets/la-anjuna-9-bhk/room-1/RIO06635-HDR.jpg', '/assets/la-anjuna-9-bhk/room-1/RIO06640-HDR.jpg', '/assets/la-anjuna-9-bhk/room-1/RIO06645-HDR.jpg', '/assets/la-anjuna-9-bhk/room-2/RIO06654-Enhanced-NR-HDR.jpg', '/assets/la-anjuna-9-bhk/room-2/RIO06655-Enhanced-NR-HDR.jpg', '/assets/la-anjuna-9-bhk/room-2/RIO06661-Enhanced-NR-HDR.jpg', '/assets/la-anjuna-9-bhk/room-2/RIO06672-Enhanced-NR-HDR.jpg', '/assets/la-anjuna-9-bhk/room-2/RIO06675-Enhanced-NR-HDR.jpg', '/assets/la-anjuna-9-bhk/room-2/RIO06680-Enhanced-NR-HDR.jpg', '/assets/la-anjuna-9-bhk/room-2/RIO06685-Enhanced-NR-HDR.jpg', '/assets/la-anjuna-9-bhk/room-3/RIO06690-Enhanced-NR-HDR.jpg', '/assets/la-anjuna-9-bhk/room-3/RIO06695-Enhanced-NR-HDR.jpg', '/assets/la-anjuna-9-bhk/room-3/RIO06700-Enhanced-NR-HDR.jpg', '/assets/la-anjuna-9-bhk/room-3/RIO06705-Enhanced-NR-HDR.jpg', '/assets/la-anjuna-9-bhk/room-3/RIO06720-Enhanced-NR-HDR.jpg', '/assets/la-anjuna-9-bhk/room-3/RIO06725-Enhanced-NR-HDR.jpg', '/assets/la-anjuna-9-bhk/room-4/RIO06734-Enhanced-NR-HDR.jpg', '/assets/la-anjuna-9-bhk/room-4/RIO06735-Enhanced-NR-HDR.jpg', '/assets/la-anjuna-9-bhk/room-4/RIO06740-Enhanced-NR-HDR.jpg', '/assets/la-anjuna-9-bhk/room-4/RIO06745-Enhanced-NR-HDR.jpg', '/assets/la-anjuna-9-bhk/room-4/RIO06750-Enhanced-NR-HDR.jpg', '/assets/la-anjuna-9-bhk/room-4/RIO06755-Enhanced-NR-HDR.jpg', '/assets/la-anjuna-9-bhk/room-4/RIO06760-Enhanced-NR-HDR.jpg', '/assets/la-anjuna-9-bhk/room-4/RIO06765-Enhanced-NR-HDR.jpg', '/assets/la-anjuna-9-bhk/room-5/RIO06770-Enhanced-NR-HDR.jpg', '/assets/la-anjuna-9-bhk/room-5/RIO06775-Enhanced-NR-HDR.jpg', '/assets/la-anjuna-9-bhk/room-5/RIO06780-Enhanced-NR-HDR.jpg', '/assets/la-anjuna-9-bhk/room-5/RIO06785-Enhanced-NR-HDR.jpg', '/assets/la-anjuna-9-bhk/room-5/RIO06790-Enhanced-NR-HDR.jpg', '/assets/la-anjuna-9-bhk/room-5/RIO06795-Enhanced-NR-HDR.jpg', '/assets/la-anjuna-9-bhk/room-5/RIO06800-Enhanced-NR-HDR.jpg', '/assets/la-anjuna-9-bhk/room-5/RIO06805-Enhanced-NR-HDR.jpg', '/assets/la-anjuna-9-bhk/room-5/RIO06815-Enhanced-NR-HDR.jpg', '/assets/la-anjuna-9-bhk/room-5/RIO06820-Enhanced-NR-HDR.jpg', '/assets/la-anjuna-9-bhk/room-5/RIO06825-Enhanced-NR-HDR.jpg', '/assets/la-anjuna-9-bhk/room-5/RIO06830-Enhanced-NR-HDR.jpg', '/assets/la-anjuna-9-bhk/room-5/RIO06835-Enhanced-NR-HDR.jpg', '/assets/la-anjuna-9-bhk/room-5/RIO06840-Enhanced-NR-HDR.jpg', '/assets/la-anjuna-9-bhk/room-5/RIO06845-Enhanced-NR-HDR.jpg', '/assets/la-anjuna-9-bhk/room-5/RIO06850-Enhanced-NR-HDR.jpg', '/assets/la-anjuna-9-bhk/room-5/RIO06855-Enhanced-NR-HDR.jpg', '/assets/la-anjuna-9-bhk/room-5/RIO06860-Enhanced-NR-HDR.jpg', '/assets/la-anjuna-9-bhk/room-5/RIO06870-Enhanced-NR-HDR.jpg', '/assets/la-anjuna-9-bhk/room-5/RIO06875-Enhanced-NR-HDR.jpg', '/assets/la-anjuna-9-bhk/room-5/RIO06880-Enhanced-NR-HDR.jpg', '/assets/la-anjuna-9-bhk/room-6/RIO06885-Enhanced-NR-HDR.jpg', '/assets/la-anjuna-9-bhk/room-6/RIO06890-Enhanced-NR-HDR.jpg', '/assets/la-anjuna-9-bhk/room-6/RIO06895-Enhanced-NR-HDR.jpg', '/assets/la-anjuna-9-bhk/room-6/RIO06900-Enhanced-NR-HDR.jpg', '/assets/la-anjuna-9-bhk/room-6/RIO06905-Enhanced-NR-HDR.jpg', '/assets/la-anjuna-9-bhk/room-6/RIO06915-Enhanced-NR-HDR.jpg', '/assets/la-anjuna-9-bhk/room-6/RIO06920-Enhanced-NR-HDR.jpg', '/assets/la-anjuna-9-bhk/room-6/RIO06925-Enhanced-NR-HDR.jpg', '/assets/la-anjuna-9-bhk/room-6/RIO06930-Enhanced-NR-HDR.jpg', '/assets/la-anjuna-9-bhk/room-6/RIO06935-Enhanced-NR-HDR.jpg', '/assets/la-anjuna-9-bhk/room-6/RIO06940-Enhanced-NR-HDR.jpg',],
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
];

export const getVillaById = (id: string): Villa | undefined => {
  return villas.find(villa => villa.id === id);
};
