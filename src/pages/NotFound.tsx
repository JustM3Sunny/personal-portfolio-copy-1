import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Header } from "@/components/Header";

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
    <div className="min-h-screen">
      <Header />
      
      <section className="min-h-screen flex items-center justify-center px-6">
        <div ref={contentRef} className="text-center">
          <h1 className="text-8xl md:text-9xl mb-6 opacity-100">404</h1>
          <p className="text-xl md:text-2xl text-muted mb-8 opacity-100">
            Page not found
          </p>
          <a
            href="/"
            className="inline-block px-8 py-3 bg-foreground text-background rounded-full text-sm hover:opacity-80 transition-opacity opacity-100"
          >
            Back to Home
          </a>
        </div>
      </section>
    </div>
  );
};

export default NotFound;