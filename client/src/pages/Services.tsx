import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import { TrendingUp, Users, BarChart3, Megaphone, Building2, LineChart, Calendar, Target } from "lucide-react";
import heroImage from '@assets/generated_images/Business_handshake_partnership_scene_9c3b6742.png';
import ctaBg from '@assets/generated_images/City_skyline_sunset_panorama_a266ea56.png';

export default function Services() {
  const services = [
    {
      icon: TrendingUp,
      title: "Property Marketing & Promotion",
      description: "Maximize your property's visibility with comprehensive marketing strategies, professional photography, virtual tours, and targeted promotional campaigns across multiple channels.",
    },
    {
      icon: Users,
      title: "Real Estate Agent Networking",
      description: "Connect with top real estate professionals in our exclusive network. Access collaboration opportunities, referrals, and industry insights to grow your business.",
    },
    {
      icon: Target,
      title: "Buyer-Seller Connections",
      description: "Facilitate meaningful connections between qualified buyers and motivated sellers. Our platform ensures smooth transactions and satisfied parties on both sides.",
    },
    {
      icon: BarChart3,
      title: "Market Analysis & Consultation",
      description: "Get detailed insights and data-driven market analysis reports. Make informed decisions backed by comprehensive research and expert consultation.",
    },
    {
      icon: Megaphone,
      title: "Digital Marketing Solutions",
      description: "Leverage cutting-edge digital marketing strategies including social media, SEO, email campaigns, and online advertising to reach more potential buyers.",
    },
    {
      icon: Building2,
      title: "Property Listing Services",
      description: "Professional listing services with compelling descriptions, high-quality visuals, and strategic pricing to attract the right buyers quickly.",
    },
    {
      icon: LineChart,
      title: "Investment Opportunity Matching",
      description: "Connect investors with lucrative real estate opportunities. Our expert team identifies and vets potential investments aligned with your goals.",
    },
    {
      icon: Calendar,
      title: "Real Estate Event Coordination",
      description: "Professional coordination of open houses, networking events, and industry conferences. Create memorable experiences that drive results.",
    },
  ];

  const howItWorks = [
    {
      number: "01",
      title: "Initial Consultation",
      description: "We start with a comprehensive consultation to understand your needs, goals, and current situation.",
    },
    {
      number: "02",
      title: "Strategy Development",
      description: "Our team creates a customized strategy tailored to your specific requirements and market conditions.",
    },
    {
      number: "03",
      title: "Implementation",
      description: "We execute the strategy with precision, leveraging our network and expertise for maximum impact.",
    },
    {
      number: "04",
      title: "Results & Optimization",
      description: "Track results, analyze performance, and continuously optimize for better outcomes.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="pt-20">
        <HeroSection
          title="Comprehensive Real Estate Solutions"
          subtitle="Strategic Services Designed to Elevate Your Success"
          primaryCta={{ text: "Request Consultation", href: "/contact" }}
          backgroundImage={heroImage}
          compact
        />
      </div>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              End-to-end solutions for all your real estate marketing needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                ctaText="Get Started"
                ctaHref="/contact"
              />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-accent/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our proven process for delivering exceptional results
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {howItWorks.map((step) => (
              <div key={step.number} className="relative">
                <div className="text-6xl font-bold text-primary/20 mb-4">{step.number}</div>
                <h3 className="font-semibold text-xl mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Benefits */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Why Choose Our Services?</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-accent/30 rounded-lg">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Proven Track Record</h3>
                  <p className="text-muted-foreground">Over 500 successful property transactions and a 98% client satisfaction rate speak to our effectiveness.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-accent/30 rounded-lg">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Expert Team</h3>
                  <p className="text-muted-foreground">Our professionals bring decades of combined experience in real estate marketing and sales.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-accent/30 rounded-lg">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Comprehensive Network</h3>
                  <p className="text-muted-foreground">Access to 250+ agents and developers ensures maximum exposure for your properties.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-accent/30 rounded-lg">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Cutting-Edge Technology</h3>
                  <p className="text-muted-foreground">We leverage the latest digital tools and platforms to maximize your reach and results.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Get Started?"
        description="Let's discuss how our services can help you achieve your real estate goals."
        ctaText="Request Consultation"
        ctaHref="/contact"
        backgroundImage={ctaBg}
      />

      <Footer />
    </div>
  );
}
