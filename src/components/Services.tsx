import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  'Brand Strategy',
  'Visual Identity',
  'Web Design',
  'Development',
];

export const Services = () => {
  const servicesRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate header
      gsap.from('.services-header', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.services-header',
          start: 'top 80%',
        },
      });

      // Animate each service item with character stagger
      const items = servicesRef.current?.querySelectorAll('.service-item');
      items?.forEach((item, index) => {
        const chars = item.querySelectorAll('.service-char');
        gsap.from(chars, {
          opacity: 0,
          y: 30,
          stagger: 0.02,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
          },
        });
      });
    }, servicesRef);

    return () => ctx.revert();
  }, []);

  const splitText = (text: string) => {
    return text.split('').map((char, i) => (
      <span key={i} className="service-char inline-block">
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  return (
    <section ref={servicesRef} data-scroll-section className="py-32 px-8">
      <div className="max-w-[1800px] mx-auto">
        <h2 className="services-header text-sm mb-20 text-gray-500">Capabilities</h2>
        
        <div className="grid md:grid-cols-2 gap-x-32 gap-y-8">
          {services.map((service, index) => (
            <div key={index} className="service-item text-3xl md:text-5xl font-light tracking-tight text-black">
              {splitText(service)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};