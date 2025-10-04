import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export const HeroSection = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
      );
      
      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, delay: 0.2, ease: "power2.out" }
      );
      
      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, delay: 0.4, ease: "power2.out" }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 
          ref={titleRef}
          className="text-6xl md:text-8xl mb-6 opacity-100"
        >
          Creative Developer
        </h1>
        
        <p 
          ref={subtitleRef}
          className="text-xl md:text-2xl text-muted mb-12 opacity-100"
        >
          Building beautiful digital experiences with code & design
        </p>
        
        <div ref={ctaRef} className="flex gap-4 justify-center opacity-100">
          <a
            href="/work"
            className="px-8 py-3 bg-foreground text-background rounded-full text-sm hover:opacity-80 transition-opacity"
          >
            View Work
          </a>
          <a
            href="/contact"
            className="px-8 py-3 border border-border rounded-full text-sm hover:bg-foreground hover:text-background transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};