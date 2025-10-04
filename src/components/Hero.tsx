import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title characters
      if (titleRef.current) {
        const chars = titleRef.current.querySelectorAll('.char');
        gsap.from(chars, {
          opacity: 0,
          y: 100,
          rotateX: -90,
          stagger: 0.02,
          duration: 1,
          ease: 'power4.out',
          delay: 0.3,
        });
      }

      // Animate subtitle
      gsap.from(subtitleRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power3.out',
        delay: 1,
      });

      // Animate CTA
      gsap.from(ctaRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power3.out',
        delay: 1.2,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const splitText = (text: string) => {
    return text.split('').map((char, i) => (
      <span key={i} className="char inline-block" style={{ display: 'inline-block' }}>
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex items-center justify-center px-6 md:px-12 py-20"
    >
      <div className="max-w-7xl w-full">
        <h1
          ref={titleRef}
          className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-none mb-8 perspective-1000"
        >
          {splitText('Creative')}
          <br />
          {splitText('Agency')}
        </h1>
        <p
          ref={subtitleRef}
          className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mb-12"
        >
          We craft digital experiences that blend bold aesthetics with strategic clarity.
          Specializing in branding, websites, and purpose-driven design.
        </p>
        <div ref={ctaRef} className="flex flex-wrap gap-4">
          <button className="px-8 py-4 bg-foreground text-background rounded-full font-medium hover:scale-105 transition-transform duration-300">
            View Our Work
          </button>
          <button className="px-8 py-4 border-2 border-foreground rounded-full font-medium hover:bg-foreground hover:text-background transition-all duration-300">
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
};