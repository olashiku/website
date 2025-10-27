import PropertyCard from '../PropertyCard';
import propertyImage from '@assets/generated_images/Modern_townhouse_property_listing_63a715d4.png';

export default function PropertyCardExample() {
  return (
    <div className="p-8 max-w-sm">
      <PropertyCard
        image={propertyImage}
        title="Modern Townhouse"
        location="Downtown District"
        price="$625,000"
        beds={3}
        baths={2}
        sqft={2100}
        type="For Sale"
      />
    </div>
  );
}
