import type {
  BusinessInfo,
  BusinessHours,
  StaffMember,
  ServiceCategory,
  Review,
  TrustBadge,
  FAQItem,
  Amenity,
} from "@/types";

export const BOOKING_URL = "https://www.vagaro.com/dreamhairstudio4/book-now";

export const BUSINESS_INFO: BusinessInfo = {
  name: "Dream Hair Studio",
  tagline: "Where Every Look Becomes a Dream",
  address: {
    street: "800 NW Starker Ave Suite 23",
    city: "Corvallis",
    state: "OR",
    zip: "97330",
    full: "800 NW Starker Ave Suite 23, Corvallis, OR 97330",
  },
  phone: "(541) 230-9242",
  email: "",
  bookingUrl: BOOKING_URL,
  googleMapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2861.123456789!2d-123.28!3d44.57!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sDream+Hair+Studio!5e0!3m2!1sen!2sus!4v1234567890",
  googleMapsUrl: "https://maps.google.com/?q=Dream+Hair+Studio+800+NW+Starker+Ave+Suite+23+Corvallis+OR+97330",
  coordinates: { lat: 44.5704, lng: -123.2801 },
};

export const BUSINESS_HOURS: BusinessHours[] = [
  { day: "Monday", hours: "9:00 AM - 6:30 PM", isOpen: true },
  { day: "Tuesday", hours: "9:00 AM - 6:30 PM", isOpen: true },
  { day: "Wednesday", hours: "9:00 AM - 6:30 PM", isOpen: true },
  { day: "Thursday", hours: "9:00 AM - 6:30 PM", isOpen: true },
  { day: "Friday", hours: "9:00 AM - 6:30 PM", isOpen: true },
  { day: "Saturday", hours: "9:00 AM - 6:30 PM", isOpen: true },
  { day: "Sunday", hours: "Closed", isOpen: false },
];

export const AMENITIES: Amenity[] = [
  { icon: "tv", label: "TV" },
  { icon: "accessible", label: "Disabled Access" },
];

export const PAYMENT_METHODS = [
  "Visa",
  "MasterCard",
  "Discover",
  "American Express",
  "Debit Cards",
  "Cash",
];

export const LANGUAGES = ["English", "Spanish"];

export const STAFF: StaffMember[] = [
  {
    name: "Roland",
    slug: "roland",
    role: "Barber / Stylist",
    rating: 5.0,
    reviewCount: 4,
    bio: "Experienced barber and stylist delivering precision cuts and styles for every client.",
    image: null,
    bookingUrl: BOOKING_URL,
  },
  {
    name: "Dalia",
    slug: "dalia",
    role: "Stylist / Colorist",
    rating: null,
    reviewCount: 0,
    bio: "Skilled stylist and colorist specializing in beautiful transformations and vibrant color work.",
    image: null,
    bookingUrl: BOOKING_URL,
  },
  {
    name: 'Juan "Chapis"',
    slug: "juan-chapis",
    role: "Barber",
    rating: 5.0,
    reviewCount: 1,
    bio: "Passionate barber known for clean fades, sharp lineups, and attention to detail. Dedicated to making every client look and feel their best.",
    image: null,
    bookingUrl: BOOKING_URL,
  },
  {
    name: "Benjamin",
    slug: "benjamin",
    role: "Barber",
    rating: null,
    reviewCount: 0,
    bio: "Talented barber bringing fresh styles and classic cuts to every appointment.",
    image: null,
    bookingUrl: BOOKING_URL,
  },
];

export const SERVICES: ServiceCategory[] = [
  {
    name: "Barbering",
    slug: "barbering",
    description: "Classic and modern barbering services for all ages",
    services: [
      { name: "Men's Haircut", price: "$35" },
      { name: "Men's Haircut + Beard Trim", price: "$45" },
      { name: "Haircut (Ages 10 & Under)", price: "$25" },
      { name: "Haircut (Ages 11-17)", price: "$30" },
      { name: "Senior Men's Haircut (60+)", price: "$25" },
      { name: "Beard Trim", price: "$15" },
      { name: "Line Up", price: "$15" },
      { name: "Razor Shave", price: "$35" },
      { name: "Eyebrow Wax (Men's)", price: "$10" },
      { name: "New Client Special", price: "$32", description: "First-time client haircut" },
    ],
  },
  {
    name: "Hairstyles",
    slug: "hairstyles",
    description: "Professional styling for every occasion",
    services: [
      { name: "Women's Haircut", price: "$45+" },
      { name: "Women's Haircut & Style", price: "$65+" },
      { name: "Blowout / Style", price: "$35+" },
      { name: "Deep Conditioning Treatment", price: "$25+" },
      { name: "Special Occasion Style", price: "$75+" },
      { name: "Bridal Hair", price: "Consultation" },
    ],
  },
  {
    name: "Color",
    slug: "color",
    description: "Expert color services from subtle to bold",
    services: [
      { name: "All-Over Color", price: "$85+" },
      { name: "Root Touch-Up", price: "$65+" },
      { name: "Partial Highlights", price: "$95+" },
      { name: "Full Highlights", price: "$120+" },
      { name: "Balayage", price: "$150+" },
      { name: "Ombre", price: "$140+" },
      { name: "Color Correction", price: "Consultation" },
      { name: "Gloss / Toner", price: "$35+" },
      { name: "Cap Highlights", price: "$85+" },
      { name: "Men's Color Camo", price: "$30+" },
      { name: "Vivid / Fashion Color", price: "$150+" },
      { name: "Bleach & Tone", price: "$120+" },
      { name: "Keratin Treatment", price: "$200+" },
      { name: "Perm", price: "$100+" },
    ],
  },
];

export const FEATURED_SERVICES = [
  "Men's Haircut",
  "Women's Haircut & Style",
  "Balayage",
  "Men's Haircut + Beard Trim",
  "Full Highlights",
  "Blowout / Style",
  "Razor Shave",
  "New Client Special",
];

export const REVIEWS: Review[] = [
  {
    author: "Tyler F.",
    rating: 5,
    text: "Best haircut I've ever had! The attention to detail is incredible. Roland took the time to understand exactly what I wanted and delivered perfectly. Will definitely be coming back.",
    date: "2024-08-15",
    verified: true,
  },
  {
    author: "Gary Z.",
    rating: 5,
    text: "Great experience from start to finish. The studio is clean and welcoming, and the staff is super friendly. Got a fresh fade and beard trim — couldn't be happier with the results.",
    date: "2024-07-20",
    verified: true,
  },
];

export const TRUST_BADGES: TrustBadge[] = [
  { icon: "star", label: "5.0 Rating" },
  { icon: "walk-in", label: "Walk-Ins Welcome" },
  { icon: "language", label: "Bilingual (EN/ES)" },
  { icon: "child", label: "Kid-Friendly" },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Do you accept walk-ins?",
    answer:
      "Yes, walk-ins are always welcome! However, we recommend booking an appointment to guarantee your preferred time slot, especially during busy hours.",
  },
  {
    question: "Do you offer services for kids?",
    answer:
      "Absolutely! We love working with clients of all ages. We offer special pricing for children ages 10 and under ($25) and ages 11-17 ($30).",
  },
  {
    question: "Do you offer both barber and salon services?",
    answer:
      "Yes! Dream Hair Studio offers the best of both worlds — full barbering services including fades, lineups, and razor shaves, plus hairstyling and color services for everyone.",
  },
  {
    question: "Do I need a consultation before color services?",
    answer:
      "We recommend a consultation for color correction and bridal services. For standard color services, your stylist will discuss everything during your appointment. Free consultations are available — just book one through our booking page.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept Visa, MasterCard, Discover, American Express, debit cards, and cash.",
  },
  {
    question: "Do you have Spanish-speaking staff?",
    answer:
      "Yes! We proudly offer bilingual service in both English and Spanish. Everyone is welcome at Dream Hair Studio.",
  },
];

export const WHY_CHOOSE_US = [
  {
    title: "Expert Team",
    description: "Skilled barbers and stylists passionate about their craft",
    icon: "scissors",
  },
  {
    title: "Everyone Welcome",
    description: "Inclusive studio for all ages, styles, and backgrounds",
    icon: "heart",
  },
  {
    title: "Bilingual Service",
    description: "Fluent service in both English and Spanish",
    icon: "globe",
  },
  {
    title: "Full Service Studio",
    description: "Barbering, styling, and color all under one roof",
    icon: "sparkles",
  },
  {
    title: "Convenient Location",
    description: "Easy to find in the heart of Corvallis",
    icon: "map-pin",
  },
  {
    title: "Walk-Ins Welcome",
    description: "No appointment? No problem. Walk-ins always welcome",
    icon: "door",
  },
];
