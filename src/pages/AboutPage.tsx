import { Button } from "@/components/ui/button";
import aboutHero from "@/assets/about-hero.jpg";
import villa3 from "@/assets/villa-3.jpg";

const AboutPage = () => {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${aboutHero})` }}
        >
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <p className="text-accent font-body text-sm tracking-[0.3em] uppercase mb-4">
              Our Story
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground font-medium leading-tight">
              About Basil Stays
            </h1>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-accent font-body text-sm tracking-[0.2em] uppercase mb-3">
                Who We Are
              </p>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
                Your Trusted Partner for Luxury Stays in Goa
              </h2>
              <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
                <p>
                  Founded with a passion for hospitality and a deep love for Goa, Basil Stays has been curating exceptional villa experiences for discerning travelers since our inception.
                </p>
                <p>
                  We believe that a vacation should be more than just a trip – it should be a transformative experience. That's why we handpick each property in our collection, ensuring it meets our exacting standards for luxury, comfort, and authentic Goan charm.
                </p>
                <p>
                  Our team of dedicated hospitality professionals works tirelessly to ensure every aspect of your stay exceeds expectations. From the moment you reach out to us until your departure, we're committed to creating memories that last a lifetime.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src={villa3}
                alt="Luxury villa interior"
                className="w-full rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -left-8 bg-primary text-primary-foreground p-8 rounded-xl shadow-xl hidden md:block">
                <p className="font-display text-4xl font-semibold mb-1">4.9</p>
                <p className="text-sm font-body text-primary-foreground/80">Google Reviews</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-accent font-body text-sm tracking-[0.2em] uppercase mb-3">
              Our Values
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground">
              What Drives Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Excellence",
                description:
                  "We never compromise on quality. Every villa, every service, every interaction is held to the highest standards.",
              },
              {
                title: "Authenticity",
                description:
                  "We celebrate Goa's rich culture and heritage, ensuring our properties reflect the true spirit of this beautiful destination.",
              },
              {
                title: "Hospitality",
                description:
                  "Genuine warmth and personalized care are at the heart of everything we do. Your comfort is our priority.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-xl card-luxury text-center"
              >
                <h3 className="font-display text-xl font-medium text-foreground mb-4">
                  {value.title}
                </h3>
                <p className="text-muted-foreground font-body text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
              Let's Plan Your Perfect Getaway
            </h2>
            <p className="text-muted-foreground font-body text-lg mb-8">
              Reach out to us and let our team help you find the perfect villa for your Goa vacation.
            </p>
            <Button
              variant="whatsapp"
              size="lg"
              onClick={() => window.open("https://wa.me/919607382020", "_blank")}
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Get in Touch
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
