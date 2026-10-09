
import Link from "next/link";
import { ArrowUpRight, Star } from "lucide-react";
import type { Service } from "@/lib/data";

export default function ServiceCard({
  service,
  index = 0,
}: {
  service: Service;
  index?: number;
}) {
  const Icon = service.icon;

  const isMainService =
    service.slug === "it-support-maintenance";

  return (
    <Link
      href={`/services/${service.slug}`}
      className={`service-card group ${
        isMainService ? "service-card-main" : ""
      }`}
    >
      <div className="service-card-top">
        <span className="service-icon">
          <Icon size={23} strokeWidth={1.7} />
        </span>

        {isMainService ? (
          <span className="service-main-badge">
            <Star size={12} fill="currentColor" />
            Core Service
          </span>
        ) : (
          <span className="service-index">
            {String(index + 1).padStart(2, "0")}
          </span>
        )}
      </div>

      <h3>{service.title}</h3>

      <p>{service.short}</p>

      <span className="card-link">
        Explore service
        <ArrowUpRight size={16} />
      </span>
    </Link>
  );
}
