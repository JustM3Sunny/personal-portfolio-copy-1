import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Contact = () => {
  const contactRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(contactRef.current?.querySelector('.contact-content'), {
        opacity: 0,
        y: 60,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: contactRef.current,
          start: 'top 70%',
        },
      });
    }, contactRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={contactRef} data-scroll-section className="min-h-screen flex items-center px-8 py-32">
      <div className="max-w-[1800px] mx-auto w-full">
        <div className="contact-content">
          <h2 className="text-sm mb-20 opacity-50">Get in Touch</h2>
          <div className="text-6xl md:text-8xl font-light tracking-tighter mb-12">
            Let's create<br />something together
          </div>
          <a href="mailto:hello@clou.ch" className="text-2xl md:text-4xl hover:opacity-50 transition-opacity">
            hello@clou.ch
          </a>
        </div>
      </div>
    </section>
  );
};