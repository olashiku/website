import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ContactForm from "@/components/ContactForm";
import { updateMetaTags, seoConfigs } from "@/lib/seo";
import { Mail, Phone, MapPin, Clock, Facebook, Instagram } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import heroImage from '@assets/generated_images/Team_collaboration_hero_background_b9958d28.png';

export default function Contact() {
  useEffect(() => {
    updateMetaTags(seoConfigs.contact);
  }, []);

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
                          No 4 Oke Ogboni street off lekki epe express way<br />
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

              <div className="mt-8">
                <h3 className="text-2xl font-bold mb-6">Connect With Us</h3>
                <div className="space-y-4">
                  <a 
                    href="https://www.facebook.com/profile.php?id=61550313096017" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg bg-card border border-card-border hover:bg-accent transition-colors"
                    data-testid="link-facebook"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Facebook className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold">Facebook</h4>
                      <p className="text-sm text-muted-foreground">Follow us on Facebook</p>
                    </div>
                  </a>

                  <a 
                    href="https://www.instagram.com/rockycityreslestate" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg bg-card border border-card-border hover:bg-accent transition-colors"
                    data-testid="link-instagram"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Instagram className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold">Instagram</h4>
                      <p className="text-sm text-muted-foreground">@rockycityreslestate</p>
                    </div>
                  </a>

                  <a 
                    href="https://wa.me/2349133920447" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg bg-card border border-card-border hover:bg-accent transition-colors"
                    data-testid="link-whatsapp"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <FaWhatsapp className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold">WhatsApp</h4>
                      <p className="text-sm text-muted-foreground">+234 913 392 0447</p>
                    </div>
                  </a>
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
