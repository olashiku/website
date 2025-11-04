import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import { updateMetaTags, seoConfigs } from "@/lib/seo";
import { Building2, Hammer, Home, FileText, Wrench, Scale, TreePine } from "lucide-react";
import heroImage from '@assets/generated_images/Soft_property_management_background_2248a055.png';
import ctaBg from '@assets/generated_images/Clean_land_development_background_7b9767fa.png';

export default function Services() {
  useEffect(() => {
    updateMetaTags(seoConfigs.services);
  }, []);

  const services = [
    {
      icon: Building2,
      title: "Building and Developing",
      description: "Comprehensive building and development services from concept to completion. We handle residential and commercial projects with expert planning, design coordination, and construction management to bring your vision to life.",
    },
    {
      icon: Hammer,
      title: "Renovation & Construction Projects",
      description: "Professional renovation and construction services for both residential and commercial properties. From minor upgrades to major overhauls, we deliver quality workmanship and timely completion on every project.",
    },
    {
      icon: Home,
      title: "Estate Management",
      description: "Full-service estate management including property maintenance, tenant relations, rent collection, and facilities oversight. We ensure your properties are well-maintained and operating at peak efficiency.",
    },
    {
      icon: FileText,
      title: "Sourcing and Land Documents",
      description: "Expert assistance with land document procurement, title searches, deed verification, and land registry services. We streamline the documentation process to ensure clear property ownership and legal compliance.",
    },
    {
      icon: Wrench,
      title: "Equipment and Tools",
      description: "Access to quality construction equipment and tools for rent or purchase. From heavy machinery to specialized tools, we provide everything you need for your construction and development projects.",
    },
    {
      icon: Scale,
      title: "Land Scale",
      description: "Professional land surveying and measurement services using advanced technology. We provide accurate land assessments, boundary surveys, topographic mapping, and subdivision planning for your property needs.",
    },
    {
      icon: TreePine,
      title: "Land & Environment Management",
      description: "Sustainable land and environmental management services including soil testing, environmental impact assessments, land clearing, erosion control, and eco-friendly development planning.",
    },
  ];

  const howItWorks = [
    {
      number: "01",
      title: "Initial Consultation",
      description: "We discuss your project requirements, budget, timeline, and vision to understand your needs clearly.",
    },
    {
      number: "02",
      title: "Planning & Documentation",
      description: "Our team handles all necessary documentation, permits, surveys, and creates a detailed project plan.",
    },
    {
      number: "03",
      title: "Execution & Management",
      description: "We execute the project with skilled professionals, quality materials, and rigorous oversight at every stage.",
    },
    {
      number: "04",
      title: "Completion & Support",
      description: "Deliver the finished project on schedule with ongoing support and maintenance services as needed.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="pt-20">
        <HeroSection
          title="Complete Real Estate & Construction Services"
          subtitle="From Land Acquisition to Development - Your Trusted Partner in Property Solutions"
          primaryCta={{ text: "Request Consultation", href: "/contact" }}
          backgroundImage={heroImage}
          compact
        />
      </div>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Core Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions for construction, development, and property management
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
                  <h3 className="font-semibold text-lg mb-2">Comprehensive Expertise</h3>
                  <p className="text-muted-foreground">From land acquisition to construction completion, we handle every aspect of your property development with professional expertise.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-accent/30 rounded-lg">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Quality Workmanship</h3>
                  <p className="text-muted-foreground">Our skilled team delivers superior construction and development services using high-quality materials and proven techniques.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-accent/30 rounded-lg">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Complete Documentation Support</h3>
                  <p className="text-muted-foreground">We simplify the complex process of land documentation, surveys, and legal compliance to protect your investment.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-accent/30 rounded-lg">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Environmental Responsibility</h3>
                  <p className="text-muted-foreground">We prioritize sustainable practices and environmental management in all our development projects.</p>
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
