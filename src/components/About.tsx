import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const About = () => {
  const aboutRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(aboutRef.current?.querySelector('.about-text'), {
        opacity: 0,
        y: 60,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: aboutRef.current,
          start: 'top 70%',
        },
      });
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={aboutRef} className="min-h-screen flex items-center px-8 py-32">
      <div className="max-w-[1800px] mx-auto">
        <div className="about-text max-w-4xl">
          <p className="text-4xl md:text-6xl font-light leading-[1.2] tracking-tight">
            We create purposeful digital experiences through strategic design and 
            thoughtful execution. Our work speaks for itself.
          </p>
        </div>
      </div>
    </section>
  );
};