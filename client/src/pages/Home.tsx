import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import StatsSection from "@/components/StatsSection";
import CTASection from "@/components/CTASection";
import AnimatedSection from "@/components/AnimatedSection";
import { TrendingUp, Users, BarChart3, Megaphone, Target } from "lucide-react";
import heroImage from '@assets/generated_images/Modern_luxury_home_hero_1e61facd.png';
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
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive real estate solutions tailored to your needs
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 100}>
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  ctaText="Learn More"
                  ctaHref="/services"
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 bg-accent/50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose Rock City Home?
            </h2>
            <p className="text-xl text-muted-foreground">
              We revolutionize real estate marketing by creating meaningful connections between buyers, sellers, agents, and developers.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <AnimatedSection className="text-center" delay={100}>
              <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-6 transition-transform duration-300 hover:scale-110">
                <Target className="text-primary" size={32} />
              </div>
              <h3 className="font-semibold text-xl mb-3">Strategic Marketing</h3>
              <p className="text-muted-foreground">Data-driven strategies that deliver real results for every property</p>
            </AnimatedSection>
            <AnimatedSection className="text-center" delay={200}>
              <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-6 transition-transform duration-300 hover:scale-110">
                <Users className="text-primary" size={32} />
              </div>
              <h3 className="font-semibold text-xl mb-3">Expert Network</h3>
              <p className="text-muted-foreground">Access to top professionals and opportunities in the industry</p>
            </AnimatedSection>
            <AnimatedSection className="text-center" delay={300}>
              <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-6 transition-transform duration-300 hover:scale-110">
                <BarChart3 className="text-primary" size={32} />
              </div>
              <h3 className="font-semibold text-xl mb-3">Proven Results</h3>
              <p className="text-muted-foreground">Track record of successful transactions and satisfied clients</p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <AnimatedSection>
        <StatsSection />
      </AnimatedSection>

      {/* Testimonials */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real stories from satisfied clients and partners
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={testimonial.author} delay={index * 150}>
                <TestimonialCard {...testimonial} />
              </AnimatedSection>
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
