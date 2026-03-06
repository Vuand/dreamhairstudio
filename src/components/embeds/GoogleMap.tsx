import { BUSINESS_INFO } from "@/lib/constants";

interface GoogleMapProps {
  className?: string;
}

export default function GoogleMap({ className = "" }: GoogleMapProps) {
  return (
    <div className={`rounded-xl overflow-hidden ${className}`}>
      <iframe
        src={BUSINESS_INFO.googleMapsEmbed}
        width="100%"
        height="100%"
        style={{ border: 0, minHeight: 300 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={`${BUSINESS_INFO.name} location map`}
      />
    </div>
  );
}
