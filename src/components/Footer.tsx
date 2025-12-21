import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <img src={'/logo.png'} alt="Basil Stays" className="h-20 w-auto mb-4 bg-white rounded-full p-1" />
            <p className="text-primary-foreground/80 font-body text-sm leading-relaxed mb-6">
              Experience the finest luxury villas in Goa. Your perfect tropical escape awaits with us.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About", "Villas", "Gallery", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm font-body"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-medium mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm font-body">
                  1st Floor, Shop No. 59–61, Alfran Plaza, MG Road, Panaji, Goa 403001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a
                  href="tel:+919607382020"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm font-body"
                >
                  +91 96073 82020
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a
                  href="mailto:info@basilstays.com"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm font-body"
                >
                  info@basilstays.com
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display text-lg font-medium mb-4">Open Hours</h4>
            <p className="text-primary-foreground/80 text-sm font-body mb-2">
              We're available 24/7
            </p>
            <p className="text-primary-foreground/60 text-sm font-body">
              For bookings and inquiries, reach out anytime via WhatsApp or call.
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm font-body">
            © {new Date().getFullYear()} Basil Stays. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
