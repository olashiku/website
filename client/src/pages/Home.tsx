import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import PropertyCard from "@/components/PropertyCard";
import TestimonialCard from "@/components/TestimonialCard";
import StatsSection from "@/components/StatsSection";
import CTASection from "@/components/CTASection";
import { TrendingUp, Users, BarChart3, Megaphone, Building2, LineChart, Calendar, Target } from "lucide-react";
import heroImage from '@assets/generated_images/Modern_luxury_home_hero_1e61facd.png';
import property1 from '@assets/generated_images/Modern_townhouse_property_listing_63a715d4.png';
import property2 from '@assets/generated_images/Contemporary_apartment_building_exterior_8cdbfe5b.png';
import property3 from '@assets/generated_images/Suburban_family_home_exterior_0ecbb013.png';
import testimonial1 from '@assets/generated_images/Professional_woman_headshot_portrait_64c6baf6.png';
import testimonial2 from '@assets/generated_images/Professional_man_headshot_portrait_c65913d1.png';
import testimonial3 from '@assets/generated_images/Smiling_professional_woman_headshot_e4d46485.png';
import ctaBg from '@assets/generated_images/City_skyline_sunset_panorama_a266ea56.png';

export default function Home() {
  const services = [
    {
      icon: TrendingUp,
      title: "Property Marketing",
      description: "Maximize your property's visibility with comprehensive marketing strategies.",
    },
    {
      icon: Users,
      title: "Agent Networking",
      description: "Connect with top real estate professionals in our exclusive network.",
    },
    {
      icon: BarChart3,
      title: "Market Analysis",
      description: "Get detailed insights and data-driven market analysis reports.",
    },
    {
      icon: Megaphone,
      title: "Digital Marketing",
      description: "Leverage cutting-edge digital marketing to reach more buyers.",
    },
  ];

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
  ];

  const testimonials = [
    {
      quote: "Rock City Home helped us sell our property in record time. Their marketing expertise and professional network made all the difference.",
      author: "Sarah Johnson",
      role: "Property Owner",
      avatar: testimonial1,
    },
    {
      quote: "As a real estate agent, joining their network has been transformative for my business. The quality of leads and support is exceptional.",
      author: "Michael Chen",
      role: "Real Estate Agent",
      avatar: testimonial2,
    },
    {
      quote: "Their market analysis gave us the insights we needed to make informed investment decisions. Highly professional and reliable.",
      author: "Emily Rodriguez",
      role: "Property Investor",
      avatar: testimonial3,
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <div className="pt-20">
        <HeroSection
          title="Your Trusted Partner in Real Estate Marketing"
          subtitle="Connecting Property Dreams with Perfect Solutions"
          primaryCta={{ text: "Request Consultation", href: "/contact" }}
          secondaryCta={{ text: "View Services", href: "/services" }}
          backgroundImage={heroImage}
          trustIndicator="Trusted by 500+ agents and developers"
        />
      </div>

      {/* Services Preview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive real estate solutions tailored to your needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                ctaText="Learn More"
                ctaHref="/services"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 bg-accent/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Choose Rock City Home?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We revolutionize real estate marketing by creating meaningful connections between buyers, sellers, agents, and developers.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Target className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Strategic Marketing</h3>
                    <p className="text-muted-foreground">Data-driven strategies that deliver real results</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Users className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Expert Network</h3>
                    <p className="text-muted-foreground">Access to top professionals in the industry</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <LineChart className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Proven Results</h3>
                    <p className="text-muted-foreground">Track record of successful transactions</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <img
                src={heroImage}
                alt="Modern property"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Properties</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our curated selection of premium properties
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {properties.map((property) => (
              <PropertyCard key={property.title} {...property} />
            ))}
          </div>
          <div className="text-center">
            <a href="/network" className="inline-flex items-center text-primary hover:underline font-semibold text-lg" data-testid="link-view-all-properties">
              View All Properties →
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Testimonials */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real stories from satisfied clients and partners
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.author} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Elevate Your Real Estate Business?"
        description="Join our network of successful agents and property developers today."
        ctaText="Get Started"
        ctaHref="/contact"
        backgroundImage={ctaBg}
      />

      <Footer />
    </div>
  );
}
