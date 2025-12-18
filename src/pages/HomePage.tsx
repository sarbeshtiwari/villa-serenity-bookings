import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { VillaCard } from "@/components/VillaCard";
import { villas } from "@/data/villas";
import { Star, Shield, Heart, Clock } from "lucide-react";
import heroImage from "@/assets/hero-villa.jpg";

const features = [
  {
    icon: Star,
    title: "Handpicked Properties",
    description: "Each villa is personally selected to ensure the highest standards of luxury and comfort.",
  },
  {
    icon: Shield,
    title: "Trusted Service",
    description: "With years of experience, we guarantee a seamless and memorable stay.",
  },
  {
    icon: Heart,
    title: "Personalized Experience",
    description: "We tailor every aspect of your stay to create unforgettable moments.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Our team is always available to assist you throughout your stay.",
  },
];

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Mumbai",
    text: "Absolutely stunning villa! The team at Basil Stays made our anniversary celebration truly special. The attention to detail was impeccable.",
    rating: 5,
  },
  {
    name: "Rajesh Patel",
    location: "Delhi",
    text: "Best family vacation we've ever had. The villa was beautiful, spacious, and the location was perfect. Will definitely book again!",
    rating: 5,
  },
  {
    name: "Sarah Johnson",
    location: "London",
    text: "Found Basil Stays through Google reviews and they exceeded all expectations. The WhatsApp booking was so convenient!",
    rating: 5,
  },
];

const HomePage = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl animate-fade-up">
            <p className="text-accent font-body text-sm tracking-[0.3em] uppercase mb-4 opacity-0 animate-fade-in stagger-1">
              Luxury Villas in Goa
            </p>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-primary-foreground font-medium leading-tight mb-6 opacity-0 animate-fade-up stagger-2">
              Experience the Finest
              <span className="block text-gradient">Goan Hospitality</span>
            </h1>
            <p className="text-primary-foreground/80 font-body text-lg md:text-xl mb-8 max-w-xl opacity-0 animate-fade-up stagger-3">
              Discover our collection of handpicked luxury villas, where every stay becomes an unforgettable memory.
            </p>
            <div className="flex flex-wrap gap-4 opacity-0 animate-fade-up stagger-4">
              <Link to="/villas">
                <Button variant="hero" size="lg">
                  Explore Villas
                </Button>
              </Link>
              <Button
                variant="luxury"
                size="lg"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                onClick={() => window.open("https://wa.me/919607382020", "_blank")}
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Book via WhatsApp
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-accent font-body text-sm tracking-[0.2em] uppercase mb-3">
              Why Choose Us
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground">
              The Basil Stays Experience
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="text-center p-6 rounded-xl bg-card card-luxury"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-lg font-medium text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm font-body">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Villas */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <p className="text-accent font-body text-sm tracking-[0.2em] uppercase mb-3">
                Our Collection
              </p>
              <h2 className="font-display text-3xl md:text-4xl text-foreground">
                Featured Villas
              </h2>
            </div>
            <Link to="/villas" className="mt-4 md:mt-0">
              <Button variant="outline" size="sm">
                View All Villas
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {villas.slice(0, 3).map((villa) => (
              <VillaCard key={villa.id} {...villa} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-accent font-body text-sm tracking-[0.2em] uppercase mb-3">
              Guest Reviews
            </p>
            <h2 className="font-display text-3xl md:text-4xl">
              What Our Guests Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-8"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-accent text-accent"
                    />
                  ))}
                </div>
                <p className="font-body text-primary-foreground/90 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-display font-medium">{testimonial.name}</p>
                  <p className="text-sm text-primary-foreground/70 font-body">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
              Ready to Plan Your Goa Getaway?
            </h2>
            <p className="text-muted-foreground font-body text-lg mb-8">
              Contact us on WhatsApp for personalized recommendations and instant booking assistance.
            </p>
            <Button
              variant="whatsapp"
              size="xl"
              onClick={() => window.open("https://wa.me/919607382020", "_blank")}
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat with Us on WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
