import { useParams, Link } from "react-router-dom";
import { getVillaById } from "@/data/villas";
import { Button } from "@/components/ui/button";
import { Bed, Bath, Users, MapPin, Check, ArrowLeft, ChevronLeft, ChevronRight, X, Grid3X3 } from "lucide-react";
import { useState, useEffect } from "react";

const VillaDetailPage = () => {
  const { id } = useParams();
  const villa = getVillaById(id || "");
  const [activeImage, setActiveImage] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // Close lightbox on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    
    if (lightboxOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [lightboxOpen, activeImage]);

  if (!villa) {
    return (
      <main className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-2xl mb-4">Villa not found</h1>
          <Link to="/villas">
            <Button variant="outline">Back to Villas</Button>
          </Link>
        </div>
      </main>
    );
  }

  const nextImage = () => {
    setActiveImage((prev) => (prev + 1) % villa.images.length);
  };

  const prevImage = () => {
    setActiveImage((prev) => (prev - 1 + villa.images.length) % villa.images.length);
  };

  return (
    <main className="pt-20">
      {/* Back Button */}
      <div className="container mx-auto px-4 py-6">
        <Link
          to="/villas"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-body text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Villas
        </Link>
      </div>

      {/* Image Gallery */}
      <section className="container mx-auto px-4 mb-12">
        {/* Main Image */}
        <div className="relative mb-4">
          <div 
            className="aspect-[16/9] md:aspect-[21/9] rounded-xl overflow-hidden cursor-pointer group"
            onClick={() => setLightboxOpen(true)}
          >
            <img
              src={villa.images[activeImage]}
              alt={villa.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-background/90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2">
                <Grid3X3 className="w-4 h-4" />
                <span className="font-body text-sm">View all {villa.images.length} photos</span>
              </div>
            </div>
          </div>
          
          {/* Navigation Arrows */}
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors shadow-lg"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors shadow-lg"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-4 right-4 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full">
            <span className="font-body text-sm">{activeImage + 1} / {villa.images.length}</span>
          </div>
        </div>

        {/* Thumbnail Strip */}
        <div className="relative">
          <div className="overflow-x-auto scrollbar-hide pb-2">
            <div className="flex gap-3" style={{ width: "max-content" }}>
              {villa.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`relative flex-shrink-0 w-24 h-16 md:w-32 md:h-20 rounded-lg overflow-hidden transition-all ${
                    activeImage === index
                      ? "ring-2 ring-primary ring-offset-2 ring-offset-background"
                      : "opacity-60 hover:opacity-100"
                  }`}
                >
                  <img
                    src={image}
                    alt={`${villa.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4">
            <span className="text-white/80 font-body">
              {activeImage + 1} / {villa.images.length}
            </span>
            <button
              onClick={() => setLightboxOpen(false)}
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Main Image */}
          <div className="flex-1 flex items-center justify-center px-4 relative">
            <button
              onClick={prevImage}
              className="absolute left-4 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            
            <img
              src={villa.images[activeImage]}
              alt={`${villa.name} ${activeImage + 1}`}
              className="max-h-[70vh] max-w-full object-contain rounded-lg"
            />
            
            <button
              onClick={nextImage}
              className="absolute right-4 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Thumbnail Strip in Lightbox */}
          <div className="p-4">
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex gap-2 justify-center" style={{ width: "max-content", margin: "0 auto" }}>
                {villa.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`relative flex-shrink-0 w-16 h-12 md:w-20 md:h-14 rounded-md overflow-hidden transition-all ${
                      activeImage === index
                        ? "ring-2 ring-white"
                        : "opacity-40 hover:opacity-80"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${villa.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Villa Info */}
      <section className="container mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 text-muted-foreground mb-2">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-body">{villa.location}</span>
            </div>

            <h1 className="font-display text-3xl md:text-4xl text-foreground mb-4">
              {villa.name}
            </h1>

            {/* Quick Info */}
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8 pb-8 border-b border-border">
              <div className="flex items-center gap-2">
                <Bed className="w-5 h-5" />
                <span className="font-body">{villa.bedrooms} Bedrooms</span>
              </div>
              <div className="flex items-center gap-2">
                <Bath className="w-5 h-5" />
                <span className="font-body">{villa.bathrooms} Bathrooms</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span className="font-body">Up to {villa.guests} Guests</span>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className="font-display text-xl text-foreground mb-4">
                About This Villa
              </h2>
              <p className="text-muted-foreground font-body leading-relaxed">
                {villa.longDescription}
              </p>
            </div>

            {/* Highlights */}
            <div className="mb-8">
              <h2 className="font-display text-xl text-foreground mb-4">
                Highlights
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {villa.highlights.map((highlight, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-muted-foreground font-body"
                  >
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            {/* Amenities */}
            <div>
              <h2 className="font-display text-xl text-foreground mb-4">
                Amenities
              </h2>
              <ul className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {villa.amenities.map((amenity, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-muted-foreground font-body text-sm"
                  >
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    {amenity}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-card rounded-xl p-6 card-luxury border border-border">
              <h3 className="font-display text-lg text-foreground mb-4">
                Interested in this villa?
              </h3>
              <p className="text-muted-foreground font-body text-sm mb-6">
                Contact us directly on WhatsApp for availability, detailed information, and instant booking assistance.
              </p>

              <Button
                variant="whatsapp"
                size="lg"
                className="w-full mb-4"
                onClick={() =>
                  window.open(
                    `https://wa.me/919607382020?text=Hi! I'm interested in booking ${villa.name} in ${villa.location}`,
                    "_blank"
                  )
                }
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Book on WhatsApp
              </Button>

              <a
                href="tel:+919607382020"
                className="block text-center text-muted-foreground hover:text-foreground transition-colors font-body text-sm"
              >
                Or call: +91 96073 82020
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default VillaDetailPage;
