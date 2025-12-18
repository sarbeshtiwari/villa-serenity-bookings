import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactPage = () => {
  return (
    <main className="pt-20">
      {/* Header */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <p className="text-accent font-body text-sm tracking-[0.2em] uppercase mb-3">
              Get in Touch
            </p>
            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4">
              Contact Us
            </h1>
            <p className="text-muted-foreground font-body text-lg">
              We're here to help you plan your perfect Goa getaway. Reach out to us anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="font-display text-2xl text-foreground mb-8">
                Contact Information
              </h2>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-foreground mb-1">
                      Our Office
                    </h3>
                    <p className="text-muted-foreground font-body">
                      1st Floor, Shop No. 59–61,
                      <br />
                      Alfran Plaza, MG Road,
                      <br />
                      Near Municipal Market,
                      <br />
                      Panaji, Goa 403001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-foreground mb-1">
                      Phone
                    </h3>
                    <a
                      href="tel:+919607382020"
                      className="text-muted-foreground font-body hover:text-primary transition-colors"
                    >
                      +91 96073 82020
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-foreground mb-1">
                      Email
                    </h3>
                    <a
                      href="mailto:info@basilstays.com"
                      className="text-muted-foreground font-body hover:text-primary transition-colors"
                    >
                      info@basilstays.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-foreground mb-1">
                      Hours
                    </h3>
                    <p className="text-muted-foreground font-body">
                      Available 24/7 for inquiries and bookings
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="mt-12 p-8 bg-card rounded-xl border border-border">
                <h3 className="font-display text-xl text-foreground mb-4">
                  Quick Contact via WhatsApp
                </h3>
                <p className="text-muted-foreground font-body text-sm mb-6">
                  For instant responses and booking assistance, reach out to us on WhatsApp. Our team is ready to help!
                </p>
                <Button
                  variant="whatsapp"
                  size="lg"
                  className="w-full"
                  onClick={() =>
                    window.open("https://wa.me/919607382020", "_blank")
                  }
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Chat on WhatsApp
                </Button>
              </div>
            </div>

            {/* Map */}
            <div>
              <h2 className="font-display text-2xl text-foreground mb-8">
                Find Us
              </h2>
              <div className="aspect-square rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3844.5897373742454!2d73.82724091485983!3d15.498773389243082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfc1021af4ccc1%3A0x9daea1c08c9e3b5c!2sPanaji%2C%20Goa!5e0!3m2!1sen!2sin!4v1640000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Basil Stays Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
