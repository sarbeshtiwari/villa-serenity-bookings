export interface Villa {
  id: string;
  name: string;
  location: string;
  image: string;
  images: string[];
  type?: number;
  bedrooms: number;
  bathrooms?: number;
  guests: any;
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
    image: '/assets/lavender-villa/1.webp',
    images: ['/assets/lavender-villa/1.webp', '/assets/lavender-villa/2.webp', '/assets/lavender-villa/3.webp', '/assets/lavender-villa/4.webp', '/assets/lavender-villa/8.webp', '/assets/lavender-villa/9.webp', '/assets/lavender-villa/11.webp', '/assets/lavender-villa/12.webp', '/assets/lavender-villa/13.webp', '/assets/lavender-villa/15.webp', '/assets/lavender-villa/17.webp', '/assets/lavender-villa/19.webp', '/assets/lavender-villa/20.webp', '/assets/lavender-villa/21.webp', '/assets/lavender-villa/22.webp', '/assets/lavender-villa/23.webp', '/assets/lavender-villa/25.webp', '/assets/lavender-villa/28.webp', '/assets/lavender-villa/30.webp', '/assets/lavender-villa/31.webp', '/assets/lavender-villa/32.webp', '/assets/lavender-villa/33.webp', '/assets/lavender-villa/34.webp', '/assets/lavender-villa/36.webp', '/assets/lavender-villa/37.webp', '/assets/lavender-villa/38.webp', '/assets/lavender-villa/40.webp', '/assets/lavender-villa/42.webp', '/assets/lavender-villa/44.webp', '/assets/lavender-villa/46.webp', '/assets/lavender-villa/47.webp', '/assets/lavender-villa/48.webp', '/assets/lavender-villa/49.webp', '/assets/lavender-villa/50.webp', '/assets/lavender-villa/51.webp', '/assets/lavender-villa/52.webp', '/assets/lavender-villa/53.webp', '/assets/lavender-villa/54.webp', '/assets/lavender-villa/55.webp', '/assets/lavender-villa/60.webp', '/assets/lavender-villa/61.webp', '/assets/lavender-villa/68.webp', '/assets/lavender-villa/69.webp', '/assets/lavender-villa/70.webp', '/assets/lavender-villa/72.webp', '/assets/lavender-villa/73.webp', '/assets/lavender-villa/75.webp', '/assets/lavender-villa/79.webp', '/assets/lavender-villa/80.webp', '/assets/lavender-villa/82.webp'],
    bedrooms: 7,
    type: 7,
    guests: '16+',
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
    image: '/assets/veena-villa/img51.webp',
    images: ['/assets/veena-villa/img51.webp', '/assets/veena-villa/img57.webp', '/assets/veena-villa/img62.webp', '/assets/veena-villa/img67.webp', '/assets/veena-villa/img72.webp', '/assets/veena-villa/img77.webp', '/assets/veena-villa/img82.webp', '/assets/veena-villa/img87.webp', '/assets/veena-villa/img92.webp', '/assets/veena-villa/img97.webp', '/assets/veena-villa/img102.webp', '/assets/veena-villa/img107.webp', '/assets/veena-villa/img112.webp', '/assets/veena-villa/img117.webp', '/assets/veena-villa/img122.webp', '/assets/veena-villa/img127.webp', '/assets/veena-villa/img132.webp', '/assets/veena-villa/img137.webp', '/assets/veena-villa/img142.webp', '/assets/veena-villa/img147.webp', '/assets/veena-villa/img152.webp', '/assets/veena-villa/img159.webp', '/assets/veena-villa/img164.webp', '/assets/veena-villa/img174.webp', '/assets/veena-villa/img179.webp', '/assets/veena-villa/img184.webp', '/assets/veena-villa/img189.webp', '/assets/veena-villa/img194.webp', '/assets/veena-villa/img199.webp', '/assets/veena-villa/img204.webp', '/assets/veena-villa/img209.webp', '/assets/veena-villa/img214.webp', '/assets/veena-villa/img219.webp', '/assets/veena-villa/img224.webp', '/assets/veena-villa/img229.webp', '/assets/veena-villa/img234.webp', '/assets/veena-villa/img239.webp', '/assets/veena-villa/img244.webp', '/assets/veena-villa/img249.webp', '/assets/veena-villa/img254.webp', '/assets/veena-villa/img260.webp', '/assets/veena-villa/img265.webp', '/assets/veena-villa/img270.webp', '/assets/veena-villa/img275.webp',],
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
    image: '/assets/la-anjuna-3-bhk/RIO06608-Enhanced-NR-HDR.webp',
    images: ['/assets/la-anjuna-3-bhk/RIO06608-Enhanced-NR-HDR.webp', '/assets/la-anjuna-3-bhk/RIO06586-Enhanced-NR-HDR.webp', '/assets/la-anjuna-3-bhk/RIO06580-Enhanced-NR-HDR.webp', '/assets/la-anjuna-3-bhk/RIO06575-Enhanced-NR-HDR.webp', '/assets/la-anjuna-3-bhk/RIO06570-Enhanced-NR-HDR.webp', '/assets/la-anjuna-3-bhk/RIO06558-Enhanced-NR-HDR-2.webp', '/assets/la-anjuna-3-bhk/RIO06554-Enhanced-NR-HDR.webp', '/assets/la-anjuna-3-bhk/RIO06551-Enhanced-NR-HDR.webp', '/assets/la-anjuna-3-bhk/RIO06548-Enhanced-NR-HDR.webp', '/assets/la-anjuna-3-bhk/RIO06543-Enhanced-NR-HDR.webp', '/assets/la-anjuna-3-bhk/RIO06534-Enhanced-NR-HDR.webp', '/assets/la-anjuna-3-bhk/RIO06533-Enhanced-NR-HDR.webp', '/assets/la-anjuna-3-bhk/RIO06528-Enhanced-NR-HDR.webp', '/assets/la-anjuna-3-bhk/RIO06527-Enhanced-NR-HDR.webp', '/assets/la-anjuna-3-bhk/RIO06505-Enhanced-NR-HDR.webp', '/assets/la-anjuna-3-bhk/RIO06494-Enhanced-NR-HDR.webp', '/assets/la-anjuna-3-bhk/RIO06491-Enhanced-NR-HDR-2.webp', '/assets/la-anjuna-3-bhk/RIO06486-Enhanced-NR-HDR.webp', '/assets/la-anjuna-3-bhk/RIO06483-Enhanced-NR-HDR.webp', '/assets/la-anjuna-3-bhk/RIO06480-Enhanced-NR-HDR.webp', '/assets/la-anjuna-3-bhk/RIO06477-Enhanced-NR-HDR.webp', '/assets/la-anjuna-3-bhk/RIO06474-Enhanced-NR-HDR.webp', '/assets/la-anjuna-3-bhk/RIO06471-Enhanced-NR-HDR.webp', '/assets/la-anjuna-3-bhk/RIO06468-Enhanced-NR-HDR.webp', '/assets/la-anjuna-3-bhk/RIO06465-Enhanced-NR-HDR.webp', '/assets/la-anjuna-3-bhk/RIO06462-Enhanced-NR-HDR.webp', '/assets/la-anjuna-3-bhk/RIO06459-Enhanced-NR-HDR.webp',],
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
    image: '/assets/la-anjuna-9-bhk/outdoor/RIO06608-Enhanced-NR-HDR.webp',
    images: ['/assets/la-anjuna-9-bhk/outdoor/RIO06608-Enhanced-NR-HDR.webp', '/assets/la-anjuna-9-bhk/outdoor/RIO06586-Enhanced-NR-HDR.webp', '/assets/la-anjuna-9-bhk/outdoor/RIO06580-Enhanced-NR-HDR.webp', '/assets/la-anjuna-9-bhk/outdoor/RIO06575-Enhanced-NR-HDR.webp', '/assets/la-anjuna-9-bhk/outdoor/RIO06570-Enhanced-NR-HDR.webp', '/assets/la-anjuna-9-bhk/outdoor/RIO06558-Enhanced-NR-HDR-2.webp', '/assets/la-anjuna-9-bhk/room-1/RIO06570-Enhanced-NR-HDR.webp', '/assets/la-anjuna-9-bhk/room-1/RIO06575-Enhanced-NR-HDR.webp', '/assets/la-anjuna-9-bhk/room-1/RIO06580-Enhanced-NR-HDR.webp', '/assets/la-anjuna-9-bhk/room-1/RIO06586-Enhanced-NR-HDR.webp', '/assets/la-anjuna-9-bhk/room-1/RIO06610-HDR.webp', '/assets/la-anjuna-9-bhk/room-1/RIO06615-HDR.webp', '/assets/la-anjuna-9-bhk/room-1/RIO06620-HDR.webp', '/assets/la-anjuna-9-bhk/room-1/RIO06625-HDR.webp', '/assets/la-anjuna-9-bhk/room-1/RIO06630-HDR.webp', '/assets/la-anjuna-9-bhk/room-1/RIO06635-HDR.webp', '/assets/la-anjuna-9-bhk/room-1/RIO06640-HDR.webp', '/assets/la-anjuna-9-bhk/room-1/RIO06645-HDR.webp', '/assets/la-anjuna-9-bhk/room-2/RIO06654-Enhanced-NR-HDR.webp', '/assets/la-anjuna-9-bhk/room-2/RIO06655-Enhanced-NR-HDR.webp', '/assets/la-anjuna-9-bhk/room-2/RIO06661-Enhanced-NR-HDR.webp', '/assets/la-anjuna-9-bhk/room-2/RIO06672-Enhanced-NR-HDR.webp', '/assets/la-anjuna-9-bhk/room-2/RIO06675-Enhanced-NR-HDR.webp', '/assets/la-anjuna-9-bhk/room-2/RIO06680-Enhanced-NR-HDR.webp', '/assets/la-anjuna-9-bhk/room-2/RIO06685-Enhanced-NR-HDR.webp', '/assets/la-anjuna-9-bhk/room-3/RIO06690-Enhanced-NR-HDR.webp', '/assets/la-anjuna-9-bhk/room-3/RIO06695-Enhanced-NR-HDR.webp', '/assets/la-anjuna-9-bhk/room-3/RIO06700-Enhanced-NR-HDR.webp', '/assets/la-anjuna-9-bhk/room-3/RIO06705-Enhanced-NR-HDR.webp', '/assets/la-anjuna-9-bhk/room-3/RIO06720-Enhanced-NR-HDR.webp', '/assets/la-anjuna-9-bhk/room-3/RIO06725-Enhanced-NR-HDR.webp', '/assets/la-anjuna-9-bhk/room-4/RIO06734-Enhanced-NR-HDR.webp', '/assets/la-anjuna-9-bhk/room-4/RIO06735-Enhanced-NR-HDR-2.webp', '/assets/la-anjuna-9-bhk/room-4/RIO06740-Enhanced-NR-HDR.webp', '/assets/la-anjuna-9-bhk/room-4/RIO06745-Enhanced-NR-HDR.webp', '/assets/la-anjuna-9-bhk/room-4/RIO06750-Enhanced-NR-HDR.webp', '/assets/la-anjuna-9-bhk/room-4/RIO06755-Enhanced-NR-HDR.webp', '/assets/la-anjuna-9-bhk/room-4/RIO06760-Enhanced-NR-HDR.webp', '/assets/la-anjuna-9-bhk/room-4/RIO06765-Enhanced-NR-HDR.webp', '/assets/la-anjuna-9-bhk/room-5/RIO06770-Enhanced-NR-HDR.webp', '/assets/la-anjuna-9-bhk/room-5/RIO06775-Enhanced-NR-HDR.webp', '/assets/la-anjuna-9-bhk/room-5/RIO06780-Enhanced-NR-HDR.webp', '/assets/la-anjuna-9-bhk/room-5/RIO06785-Enhanced-NR-HDR.webp', '/assets/la-anjuna-9-bhk/room-5/RIO06790-Enhanced-NR-HDR.webp', '/assets/la-anjuna-9-bhk/room-5/RIO06795-Enhanced-NR-HDR.webp', '/assets/la-anjuna-9-bhk/room-5/RIO06800-Enhanced-NR-HDR.webp', '/assets/la-anjuna-9-bhk/room-5/RIO06805-Enhanced-NR-HDR.webp', '/assets/la-anjuna-9-bhk/room-5/RIO06815-Enhanced-NR-HDR.webp', '/assets/la-anjuna-9-bhk/room-5/RIO06820-Enhanced-NR-HDR.webp', '/assets/la-anjuna-9-bhk/room-5/RIO06825-Enhanced-NR-HDR.webp', '/assets/la-anjuna-9-bhk/room-5/RIO06830-Enhanced-NR-HDR.webp', '/assets/la-anjuna-9-bhk/room-5/RIO06835-Enhanced-NR-HDR.webp', '/assets/la-anjuna-9-bhk/room-5/RIO06840-Enhanced-NR-HDR.webp', '/assets/la-anjuna-9-bhk/room-5/RIO06845-Enhanced-NR-HDR.webp', '/assets/la-anjuna-9-bhk/room-5/RIO06850-Enhanced-NR-HDR.webp', '/assets/la-anjuna-9-bhk/room-5/RIO06855-Enhanced-NR-HDR.webp', '/assets/la-anjuna-9-bhk/room-5/RIO06860-Enhanced-NR-HDR.webp', '/assets/la-anjuna-9-bhk/room-5/RIO06870-Enhanced-NR-HDR.webp', '/assets/la-anjuna-9-bhk/room-5/RIO06875-Enhanced-NR-HDR.webp', '/assets/la-anjuna-9-bhk/room-5/RIO06880-Enhanced-NR-HDR.webp', '/assets/la-anjuna-9-bhk/room-6/RIO06885-Enhanced-NR-HDR.webp', '/assets/la-anjuna-9-bhk/room-6/RIO06890-Enhanced-NR-HDR.webp', '/assets/la-anjuna-9-bhk/room-6/RIO06895-Enhanced-NR-HDR.webp', '/assets/la-anjuna-9-bhk/room-6/RIO06900-Enhanced-NR-HDR.webp', '/assets/la-anjuna-9-bhk/room-6/RIO06905-Enhanced-NR-HDR.webp', '/assets/la-anjuna-9-bhk/room-6/RIO06915-Enhanced-NR-HDR.webp', '/assets/la-anjuna-9-bhk/room-6/RIO06920-Enhanced-NR-HDR.webp', '/assets/la-anjuna-9-bhk/room-6/RIO06925-Enhanced-NR-HDR.webp', '/assets/la-anjuna-9-bhk/room-6/RIO06930-Enhanced-NR-HDR.webp', '/assets/la-anjuna-9-bhk/room-6/RIO06935-Enhanced-NR-HDR.webp', '/assets/la-anjuna-9-bhk/room-6/RIO06940-Enhanced-NR-HDR.webp',],
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
    image: '/assets/la-vagator/DJI_20240522185512_0101_D.webp',
    images: ['/assets/la-vagator/DJI_20240522185512_0101_D.webp', '/assets/la-vagator/DJI_20240522170156_0021_D.webp', '/assets/la-vagator/DJI_20240522170517_0028_D.webp', 
      '/assets/la-vagator/DJI_20240522183916_0056_D.webp', '/assets/la-vagator/DSC04111-HDR.webp', '/assets/la-vagator/DSC04126-HDR.webp', '/assets/la-vagator/DSC04134-HDR.webp', 
      '/assets/la-vagator/DSC04144-HDR.webp', '/assets/la-vagator/DSC04149-HDR.webp', '/assets/la-vagator/DSC04151-HDR.webp', '/assets/la-vagator/DSC04156-HDR.webp',
      '/assets/la-vagator/DSC04159-HDR.webp', '/assets/la-vagator/DSC04165-HDR.webp', '/assets/la-vagator/DSC04170-HDR.webp', '/assets/la-vagator/DSC04175-HDR.webp',
      '/assets/la-vagator/DSC04180-HDR.webp', '/assets/la-vagator/DSC04185-HDR.webp', '/assets/la-vagator/DSC04190-HDR.webp', '/assets/la-vagator/DSC04198-HDR.webp',
      '/assets/la-vagator/DSC04201-HDR.webp', '/assets/la-vagator/DSC04207-HDR.webp', '/assets/la-vagator/DSC04210-HDR.webp', '/assets/la-vagator/DSC04223-HDR.webp',
      '/assets/la-vagator/DSC04233-HDR.webp', '/assets/la-vagator/DSC04238-HDR.webp', '/assets/la-vagator/DSC04240-HDR.webp', '/assets/la-vagator/DSC04246.webp',
      '/assets/la-vagator/DSC04249.webp', '/assets/la-vagator/DSC04251-HDR.webp', '/assets/la-vagator/DSC04255.webp', '/assets/la-vagator/DSC04258.webp',
      '/assets/la-vagator/DSC04261.webp', '/assets/la-vagator/DSC04264.webp', '/assets/la-vagator/DSC04267.webp', '/assets/la-vagator/DSC04270.webp', '/assets/la-vagator/DSC04273.webp',
      '/assets/la-vagator/DSC04276.webp', '/assets/la-vagator/DSC04278-HDR.webp', '/assets/la-vagator/DSC04284-HDR.webp', '/assets/la-vagator/DSC04289-HDR.webp',
      '/assets/la-vagator/DSC04292-HDR.webp', '/assets/la-vagator/DSC04293-HDR.webp', '/assets/la-vagator/DSC04298-HDR.webp', '/assets/la-vagator/DSC04299-HDR.webp',
      '/assets/la-vagator/DSC04311-HDR.webp', '/assets/la-vagator/DSC04325-HDR.webp', '/assets/la-vagator/DSC04328-HDR.webp', '/assets/la-vagator/DSC04359-HDR.webp',
      '/assets/la-vagator/DSC04364-HDR.webp', '/assets/la-vagator/DSC04369-HDR.webp', '/assets/la-vagator/DSC04374-HDR.webp', '/assets/la-vagator/DSC04379-HDR.webp',
      '/assets/la-vagator/DSC04384-HDR.webp', '/assets/la-vagator/DSC04389-HDR.webp', '/assets/la-vagator/DSC04399-HDR.webp', '/assets/la-vagator/DSC04412-HDR.webp',
      '/assets/la-vagator/DSC04417-HDR.webp', '/assets/la-vagator/DSC04419-HDR.webp', '/assets/la-vagator/DSC04424-HDR.webp', '/assets/la-vagator/DSC04432-HDR.webp',
      '/assets/la-vagator/DSC04437-HDR.webp', '/assets/la-vagator/DSC04439-HDR.webp', '/assets/la-vagator/DSC04449-HDR.webp', '/assets/la-vagator/DSC04456-HDR.webp',
      '/assets/la-vagator/DSC04459-HDR.webp', '/assets/la-vagator/DSC04464-HDR.webp', '/assets/la-vagator/DSC04469-HDR.webp', '/assets/la-vagator/DSC04477-HDR.webp',
      '/assets/la-vagator/DSC04479-HDR.webp', '/assets/la-vagator/DSC04484-HDR.webp', '/assets/la-vagator/DSC04489-HDR.webp', '/assets/la-vagator/DSC04494-HDR.webp',
      '/assets/la-vagator/DSC04499-HDR.webp', '/assets/la-vagator/DSC04512-HDR.webp', '/assets/la-vagator/DSC04516-HDR.webp', '/assets/la-vagator/DSC04524-HDR.webp',
      '/assets/la-vagator/DSC04529-HDR.webp', '/assets/la-vagator/DSC04531-HDR.webp', '/assets/la-vagator/DSC04536-HDR.webp', '/assets/la-vagator/DSC04549-HDR.webp',
      '/assets/la-vagator/DSC04564-HDR.webp', '/assets/la-vagator/DSC04566-HDR.webp', '/assets/la-vagator/DSC04574-HDR.webp', '/assets/la-vagator/DSC04579-HDR.webp',
      '/assets/la-vagator/DSC04584-HDR.webp', '/assets/la-vagator/DSC04591-HDR.webp', '/assets/la-vagator/DSC04596-HDR.webp', '/assets/la-vagator/DSC04603-HDR.webp',
      '/assets/la-vagator/DSC04606-HDR.webp', '/assets/la-vagator/DSC04609-HDR.webp', '/assets/la-vagator/DSC04616-HDR-Pano.webp', '/assets/la-vagator/DSC04620-HDR.webp',
      '/assets/la-vagator/DSC04622-HDR.webp', '/assets/la-vagator/DSC04626-HDR.webp', '/assets/la-vagator/DSC04629-HDR.webp', '/assets/la-vagator/DSC04641-HDR.webp',
      '/assets/la-vagator/DSC04644-HDR.webp', '/assets/la-vagator/DSC04659-HDR.webp', '/assets/la-vagator/DSC04672-HDR.webp', '/assets/la-vagator/DSC04683-HDR.webp',],
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
