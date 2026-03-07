import type { Metadata } from "next";
import { cormorantGaramond, dmSans } from "@/lib/fonts";
import { getLocalBusinessJsonLd } from "@/lib/metadata";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileBookNow from "@/components/layout/MobileBookNow";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Dream Hair Studio | Hair Salon & Barbershop in Corvallis, OR",
    template: "%s | Dream Hair Studio",
  },
  description:
    "Professional hair studio and barbershop in Corvallis, OR. Expert haircuts, styling, color, and barbering services for everyone. Book your appointment today!",
  keywords: [
    "hair salon Corvallis",
    "barber Corvallis OR",
    "haircut Corvallis",
    "Dream Hair Studio",
    "hair color Corvallis",
    "balayage Corvallis",
    "barbershop Corvallis Oregon",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Dream Hair Studio",
    title: "Dream Hair Studio | Hair Salon & Barbershop in Corvallis, OR",
    description:
      "Professional hair studio and barbershop in Corvallis, OR. Expert haircuts, styling, color, and barbering for everyone.",
    images: [{ url: "/images/DreamStudioLogo.jpg", width: 800, height: 600 }],
  },
  metadataBase: new URL("https://dreamhairstudio.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = getLocalBusinessJsonLd();

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${cormorantGaramond.variable} ${dmSans.variable} antialiased`}
      >
        <Header />
        <main className="pt-16 md:pt-20 pb-16 lg:pb-0">{children}</main>
        <Footer />
        <MobileBookNow />
      </body>
    </html>
  );
}
