import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import PropertyCard from "@/components/PropertyCard";
import CTASection from "@/components/CTASection";
import { updateMetaTags, seoConfigs } from "@/lib/seo.ts";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import heroImage from '@assets/generated_images/Modern_luxury_home_hero_1e61facd.png';
import property1 from '@assets/generated_images/Modern_townhouse_property_listing_63a715d4.png';
import property2 from '@assets/generated_images/Contemporary_apartment_building_exterior_8cdbfe5b.png';
import property3 from '@assets/generated_images/Suburban_family_home_exterior_0ecbb013.png';
import ctaBg from '@assets/generated_images/City_skyline_sunset_panorama_a266ea56.png';

export default function Network() {
  useEffect(() => {
    updateMetaTags(seoConfigs.network);
  }, []);

  const [propertyType, setPropertyType] = useState("all");
  const [priceRange, setPriceRange] = useState("all");
  const [location, setLocation] = useState("all");

  const properties = [
    {
      image: property1,
      title: "Modern Townhouse",
      location: "Downtown District",
      price: "$625,000",
      beds: 3,
      baths: 2,
      sqft: 2100,
      type: "For Sale",
    },
    {
      image: property2,
      title: "Luxury Apartment",
      location: "Riverside Heights",
      price: "$450,000",
      beds: 2,
      baths: 2,
      sqft: 1500,
      type: "For Sale",
    },
    {
      image: property3,
      title: "Family Home",
      location: "Suburban Grove",
      price: "$525,000",
      beds: 4,
      baths: 3,
      sqft: 2400,
      type: "For Sale",
    },
    {
      image: property1,
      title: "Urban Condo",
      location: "City Center",
      price: "$380,000",
      beds: 1,
      baths: 1,
      sqft: 900,
      type: "For Sale",
    },
    {
      image: property2,
      title: "Executive Villa",
      location: "Lakeside Estates",
      price: "$875,000",
      beds: 5,
      baths: 4,
      sqft: 3200,
      type: "For Sale",
    },
    {
      image: property3,
      title: "Starter Home",
      location: "Green Valley",
      price: "$295,000",
      beds: 2,
      baths: 1,
      sqft: 1100,
      type: "For Sale",
    },
  ];

  const partners = [
    "Premium Realty Group",
    "Coastal Properties Inc",
    "Urban Living Partners",
    "Skyline Developments",
    "Heritage Home Builders",
    "Metro Real Estate Co",
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="pt-20">
        <HeroSection
          title="Property Network"
          subtitle="Discover Premium Properties and Connect with Top Agents"
          primaryCta={{ text: "List Your Property", href: "/contact" }}
          backgroundImage={heroImage}
          compact
        />
      </div>

      {/* Filters */}
      <section className="py-8 bg-accent/50 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Select value={propertyType} onValueChange={setPropertyType}>
              <SelectTrigger data-testid="select-property-type">
                <SelectValue placeholder="Property Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="house">House</SelectItem>
                <SelectItem value="apartment">Apartment</SelectItem>
                <SelectItem value="condo">Condo</SelectItem>
                <SelectItem value="townhouse">Townhouse</SelectItem>
              </SelectContent>
            </Select>

            <Select value={location} onValueChange={setLocation}>
              <SelectTrigger data-testid="select-location">
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Locations</SelectItem>
                <SelectItem value="downtown">Downtown</SelectItem>
                <SelectItem value="suburban">Suburban</SelectItem>
                <SelectItem value="riverside">Riverside</SelectItem>
                <SelectItem value="lakeside">Lakeside</SelectItem>
              </SelectContent>
            </Select>

            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger data-testid="select-price-range">
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="0-300k">Under $300k</SelectItem>
                <SelectItem value="300k-500k">$300k - $500k</SelectItem>
                <SelectItem value="500k-700k">$500k - $700k</SelectItem>
                <SelectItem value="700k+">$700k+</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="outline" onClick={() => {
              setPropertyType("all");
              setLocation("all");
              setPriceRange("all");
            }} data-testid="button-reset-filters">
              Reset Filters
            </Button>
          </div>
        </div>
      </section>

      {/* Property Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Properties</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Browse our curated selection of premium properties
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property, index) => (
              <PropertyCard key={`${property.title}-${index}`} {...property} />
            ))}
          </div>
        </div>
      </section>

      {/* Partner Agents */}
      <section className="py-24 bg-accent/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Partner Network</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Trusted real estate professionals and developers
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
            {partners.map((partner) => (
              <div
                key={partner}
                className="bg-background rounded-lg p-6 flex items-center justify-center text-center hover:shadow-lg transition-shadow"
              >
                <span className="font-semibold text-sm">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Join Our Network"
        description="Connect with industry professionals and access exclusive opportunities."
        ctaText="Become a Partner"
        ctaHref="/contact"
        backgroundImage={ctaBg}
      />

      <Footer />
    </div>
  );
}
