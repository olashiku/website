import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ContactForm from "@/components/ContactForm";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import heroImage from '@assets/generated_images/Team_collaboration_hero_background_b9958d28.png';

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="pt-20">
        <HeroSection
          title="Get In Touch"
          subtitle="Let's Build Your Vision Together"
          description="Whether you're planning a construction project, need estate management, or require land services, our expert team is ready to help."
          backgroundImage={heroImage}
          compact
        />
      </div>

      {/* Contact Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-7xl mx-auto">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-card border border-card-border rounded-2xl p-8">
                <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
                <ContactForm />
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <a href="mailto:info@rockcityhome.com" className="text-muted-foreground hover:text-primary" data-testid="link-contact-email">
                        info@rockcityhome.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Phone</h4>
                      <a href="tel:+2347014668925" className="text-muted-foreground hover:text-primary" data-testid="link-contact-phone">07014668925</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Address</h4>
                      <p className="text-muted-foreground">
                        14 Asajon Way, Off Lekki Epe Expressway<br />
                        Sangotedo, Lagos, Nigeria
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Operating Hours</h4>
                      <p className="text-muted-foreground">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 10:00 AM - 4:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-accent/50 rounded-2xl h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="mx-auto mb-2 text-muted-foreground" size={48} />
                  <p className="text-muted-foreground">Map Integration Coming Soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
