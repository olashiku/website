import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import StatsSection from "@/components/StatsSection";
import CTASection from "@/components/CTASection";
import AnimatedSection from "@/components/AnimatedSection";
import { updateMetaTags, seoConfigs } from "@/lib/seo";
import { Building2, Hammer, Home as HomeIcon, FileText, Target, Users, BarChart3 } from "lucide-react";
import heroImage from '@assets/generated_images/Minimalist_construction_hero_background_2acfe09c.png';
import testimonial1 from '@assets/generated_images/Nigerian_businesswoman_professional_headshot_a49f7260.png';
import testimonial2 from '@assets/generated_images/Nigerian_businessman_professional_headshot_e5c059ce.png';
import testimonial3 from '@assets/generated_images/Nigerian_professional_woman_headshot_ab02d47d.png';
import ctaBg from '@assets/generated_images/Clean_land_development_background_7b9767fa.png';

export default function Home() {
  useEffect(() => {
    updateMetaTags(seoConfigs.home);
  }, []);

  const services = [
    {
      icon: Building2,
      title: "Building and Developing",
      description: "Comprehensive building and development services from concept to completion with expert planning and construction management.",
    },
    {
      icon: Hammer,
      title: "Renovation & Construction Projects",
      description: "Professional renovation and construction services for residential and commercial properties with quality workmanship.",
    },
    {
      icon: HomeIcon,
      title: "Estate Management",
      description: "Full-service estate management including property maintenance, tenant relations, and facilities oversight.",
    },
    {
      icon: FileText,
      title: "Sourcing and Land Documents",
      description: "Expert assistance with land document procurement, title searches, and land registry services.",
    },
  ];

  const testimonials = [
    {
      quote: "Rock City Home managed our entire construction project from permits to completion. Their professionalism and attention to detail exceeded our expectations.",
      author: "Funmilayo Adeyemi",
      role: "Property Owner",
      avatar: testimonial1,
    },
    {
      quote: "Their estate management services have been outstanding. Our properties are well-maintained and tenants are always satisfied. Highly recommend!",
      author: "Chukwuemeka Nnamdi",
      role: "Real Estate Developer",
      avatar: testimonial2,
    },
    {
      quote: "The land documentation and surveying services saved us months of hassle. They handled everything efficiently and professionally.",
      author: "Chioma Okafor",
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
          title="Building Your Dreams, Managing Your Assets"
          subtitle="Complete Construction, Development & Property Management Solutions"
          primaryCta={{ text: "Request Consultation", href: "/contact" }}
          secondaryCta={{ text: "View Services", href: "/services" }}
          backgroundImage={heroImage}
          trustIndicator="Your trusted partner in real estate development"
        />
      </div>

      {/* Services Preview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From construction to estate management - complete property solutions
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
              We deliver comprehensive construction, development, and property management solutions with expertise, quality, and commitment to excellence.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <AnimatedSection className="text-center" delay={100}>
              <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-6 transition-transform duration-300 hover:scale-110">
                <Building2 className="text-primary" size={32} />
              </div>
              <h3 className="font-semibold text-xl mb-3">Complete Solutions</h3>
              <p className="text-muted-foreground">From land acquisition to construction completion - we handle it all</p>
            </AnimatedSection>
            <AnimatedSection className="text-center" delay={200}>
              <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-6 transition-transform duration-300 hover:scale-110">
                <Target className="text-primary" size={32} />
              </div>
              <h3 className="font-semibold text-xl mb-3">Quality Focused</h3>
              <p className="text-muted-foreground">Superior workmanship and materials in every project we undertake</p>
            </AnimatedSection>
            <AnimatedSection className="text-center" delay={300}>
              <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-6 transition-transform duration-300 hover:scale-110">
                <Users className="text-primary" size={32} />
              </div>
              <h3 className="font-semibold text-xl mb-3">Expert Team</h3>
              <p className="text-muted-foreground">Experienced professionals dedicated to your project success</p>
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
        title="Ready to Start Your Next Project?"
        description="Let's bring your property development vision to life with our comprehensive services."
        ctaText="Get Started"
        ctaHref="/contact"
        backgroundImage={ctaBg}
      />

      <Footer />
    </div>
  );
}
