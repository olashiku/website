import { Link } from "wouter";
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import logo from "@assets/Screenshot 2025-11-03 at 20.40.36_1762251289200.png";

export default function Footer() {
  const quickLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/services", label: "Services" },
    { path: "/contact", label: "Contact Us" },
  ];

  const services = [
    "Property Marketing",
    "Agent Networking",
    "Market Analysis",
    "Digital Marketing",
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <img src={logo} alt="Rock City Home" className="h-16 w-auto" />
            </div>
            <p className="text-secondary-foreground/80 mb-4">
              Your trusted partner in real estate marketing and professional networking.
            </p>
            <Link href="/contact" asChild>
              <Button variant="outline" className="bg-transparent border-secondary-foreground/20 text-secondary-foreground hover:bg-secondary-foreground/10" data-testid="button-join-network">
                Get In Touch
              </Button>
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    href={link.path}
                    className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors" 
                    data-testid={`footer-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service} className="text-secondary-foreground/80">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail size={20} className="mt-0.5 flex-shrink-0" />
                <a href="mailto:info@rockcityhome.com" className="text-secondary-foreground/80 hover:text-secondary-foreground" data-testid="link-email">
                  info@rockcityhome.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={20} className="mt-0.5 flex-shrink-0" />
                <a href="tel:+2347014668925" className="text-secondary-foreground/80 hover:text-secondary-foreground" data-testid="link-phone">07014668925</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={20} className="mt-0.5 flex-shrink-0" />
                <span className="text-secondary-foreground/80">14 Asajon Way, Off Lekki Epe Expressway, Sangotedo, Lagos, Nigeria</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-secondary-foreground/80 text-sm">
            © 2025 Rock City Home. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/profile.php?id=61550313096017" target="_blank" rel="noopener noreferrer" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors" data-testid="link-facebook">
              <Facebook size={20} />
            </a>
            <a href="https://www.instagram.com/rockycityreslestate?igsh=b3YzMXBuMXVsaHU4" target="_blank" rel="noopener noreferrer" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors" data-testid="link-instagram">
              <Instagram size={20} />
            </a>
            <a href="https://api.whatsapp.com/send?phone=%2B2349133920447&context=AfcnDiXn3AUqc53CpYaqAhEzmFdJlnEGb7AbhNG9kYdmlTxA12QG3K9sY8caHCt9DzQuYxNcwfKh2onfjgCnkyCdD2cvSGW0y0eQ8P787iiPC6aVkxxyTnOtj7DZutDEdh2usDrCP2pk2XF1NMTRhpc&source=FB_Page&app=facebook&entry_point=page_cta" target="_blank" rel="noopener noreferrer" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors" data-testid="link-whatsapp">
              <FaWhatsapp size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
