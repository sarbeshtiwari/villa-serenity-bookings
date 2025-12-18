import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <main className="pt-20 min-h-screen flex items-center justify-center">
      <div className="text-center px-4">
        <p className="text-accent font-body text-sm tracking-[0.3em] uppercase mb-4">
          404 Error
        </p>
        <h1 className="font-display text-5xl md:text-6xl text-foreground mb-4">
          Page Not Found
        </h1>
        <p className="text-muted-foreground font-body text-lg mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/">
          <Button variant="default" size="lg">
            Return Home
          </Button>
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
