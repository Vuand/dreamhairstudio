export interface BusinessInfo {
  name: string;
  tagline: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    full: string;
  };
  phone: string;
  email: string;
  bookingUrl: string;
  googleMapsEmbed: string;
  googleMapsUrl: string;
  coordinates: { lat: number; lng: number };
}

export interface BusinessHours {
  day: string;
  hours: string;
  isOpen: boolean;
}

export interface StaffMember {
  name: string;
  slug: string;
  role: string;
  rating: number | null;
  reviewCount: number;
  bio: string;
  image: string | null;
  bookingUrl: string;
}

export interface ServiceItem {
  name: string;
  price: string;
  description?: string;
}

export interface ServiceCategory {
  name: string;
  slug: string;
  description: string;
  services: ServiceItem[];
}

export interface Review {
  author: string;
  rating: number;
  text: string;
  date: string;
  verified: boolean;
}

export interface TrustBadge {
  icon: string;
  label: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Amenity {
  icon: string;
  label: string;
}
