import { VillaCard } from "@/components/VillaCard";
import { villas } from "@/data/villas";

const VillasPage = () => {
  return (
    <main className="pt-20">
      {/* Header */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <p className="text-accent font-body text-sm tracking-[0.2em] uppercase mb-3">
              Our Collection
            </p>
            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4">
              Luxury Villas
            </h1>
            <p className="text-muted-foreground font-body text-lg">
              Discover our handpicked selection of premium villas across Goa's most desirable locations.
            </p>
          </div>
        </div>
      </section>

      {/* Villas Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {villas.map((villa) => (
              <VillaCard key={villa.id} {...villa} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default VillasPage;
