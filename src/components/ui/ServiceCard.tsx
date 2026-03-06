import type { ServiceItem } from "@/types";

interface ServiceCardProps {
  service: ServiceItem;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="flex items-center justify-between py-4 border-b border-card-border last:border-0">
      <div>
        <h4 className="font-sans font-medium text-brand-dark">
          {service.name}
        </h4>
        {service.description && (
          <p className="text-sm text-warm-gray mt-0.5">{service.description}</p>
        )}
      </div>
      <span className="font-sans font-semibold text-brand-dark ml-4 whitespace-nowrap">
        {service.price}
      </span>
    </div>
  );
}
