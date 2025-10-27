import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Bed, Bath, Square } from "lucide-react";

interface PropertyCardProps {
  image: string;
  title: string;
  location: string;
  price: string;
  beds?: number;
  baths?: number;
  sqft?: number;
  type?: string;
}

export default function PropertyCard({ image, title, location, price, beds, baths, sqft, type }: PropertyCardProps) {
  return (
    <Card className="overflow-hidden group cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl" data-testid={`card-property-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {type && (
          <Badge className="absolute top-4 left-4 bg-primary">{type}</Badge>
        )}
      </div>

      {/* Content */}
      <CardContent className="p-6">
        <h3 className="font-semibold text-xl mb-2" data-testid={`text-property-title-${title.toLowerCase().replace(/\s+/g, '-')}`}>{title}</h3>
        <div className="flex items-center gap-2 text-muted-foreground mb-4">
          <MapPin size={16} />
          <span className="text-sm">{location}</span>
        </div>

        {/* Property Details */}
        {(beds || baths || sqft) && (
          <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
            {beds && (
              <div className="flex items-center gap-1">
                <Bed size={16} />
                <span>{beds} Beds</span>
              </div>
            )}
            {baths && (
              <div className="flex items-center gap-1">
                <Bath size={16} />
                <span>{baths} Baths</span>
              </div>
            )}
            {sqft && (
              <div className="flex items-center gap-1">
                <Square size={16} />
                <span>{sqft} sqft</span>
              </div>
            )}
          </div>
        )}

        {/* Price and CTA */}
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary" data-testid={`text-price-${title.toLowerCase().replace(/\s+/g, '-')}`}>{price}</span>
          <Button variant="outline" size="sm" data-testid={`button-view-property-${title.toLowerCase().replace(/\s+/g, '-')}`}>View Details</Button>
        </div>
      </CardContent>
    </Card>
  );
}
