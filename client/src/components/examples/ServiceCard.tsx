import ServiceCard from '../ServiceCard';
import { TrendingUp } from 'lucide-react';

export default function ServiceCardExample() {
  return (
    <div className="p-8 max-w-sm">
      <ServiceCard
        icon={TrendingUp}
        title="Property Marketing & Promotion"
        description="Maximize your property's visibility with our comprehensive marketing strategies and promotional campaigns."
        ctaText="Learn More"
        ctaHref="/services"
      />
    </div>
  );
}
