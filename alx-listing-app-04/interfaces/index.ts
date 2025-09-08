// Address structure
interface Address {
  state: string;
  city: string;
  country: string;
}

// Offers structure
interface Offers {
  bed: string; // e.g. "3"
  shower: string; // e.g. "2"
  occupants: string; // e.g. "4-6"
}

// Main property interface
export interface PropertyProps {
  name: string; // Property name/title
  address: Address; // Location details
  rating: number; // Average user rating
  category: string[]; // Array of feature tags
  price: number; // Price per night or per stay
  offers: Offers; // Details about beds, showers, and capacity
  image: string; // URL to the property's image
  discount: string; // Discount percentage as string (e.g. "20" or "")
}
