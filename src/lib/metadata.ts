import { BUSINESS_INFO, BUSINESS_HOURS, FAQ_ITEMS } from "./constants";

export function getLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    name: BUSINESS_INFO.name,
    description:
      "Professional hair studio and barbershop in Corvallis, OR offering haircuts, styling, color, and barbering services for everyone.",
    url: "https://dreamhairstudio.com",
    telephone: BUSINESS_INFO.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS_INFO.address.street,
      addressLocality: BUSINESS_INFO.address.city,
      addressRegion: BUSINESS_INFO.address.state,
      postalCode: BUSINESS_INFO.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS_INFO.coordinates.lat,
      longitude: BUSINESS_INFO.coordinates.lng,
    },
    openingHoursSpecification: BUSINESS_HOURS.filter((h) => h.isOpen).map(
      (h) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: h.day,
        opens: "09:00",
        closes: "18:30",
      })
    ),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "5",
      bestRating: "5",
    },
    priceRange: "$$",
    image: "/images/DreamStudioLogo.jpg",
    paymentAccepted: "Cash, Credit Card, Debit Card",
    currenciesAccepted: "USD",
  };
}

export function getFAQJsonLd(items?: typeof FAQ_ITEMS) {
  const faqItems = items || FAQ_ITEMS;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
