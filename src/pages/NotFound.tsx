import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Navigation } from "@/components/Navigation";

export const NotFound = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current.querySelectorAll("h1, p, a"),
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power2.out" }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div ref={contentRef} className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-2xl">
          <h1 className="text-8xl md:text-9xl mb-8 opacity-100">404</h1>
          <p className="text-2xl md:text-3xl mb-8 opacity-100">
            Page not found
          </p>
          <p className="text-lg text-muted mb-12 opacity-100">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <a
            href="/"
            className="inline-block px-12 py-4 bg-foreground text-background text-sm hover:opacity-80 transition-opacity opacity-100"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;