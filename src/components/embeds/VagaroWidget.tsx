import { BOOKING_URL } from "@/lib/constants";

export default function VagaroWidget() {
  return (
    <div className="w-full">
      <div className="rounded-2xl overflow-hidden bg-card shadow-sm border border-card-border">
        <iframe
          src={BOOKING_URL}
          width="100%"
          height="800"
          style={{ border: 0 }}
          title="Book an appointment at Dream Hair Studio"
          loading="lazy"
          allow="payment"
        />
      </div>
      <p className="text-center mt-4 text-sm text-warm-gray font-sans">
        Having trouble with the booking widget?{" "}
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-red hover:underline font-medium"
        >
          Book directly on Vagaro
        </a>
      </p>
    </div>
  );
}
