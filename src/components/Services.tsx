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
      const items = servicesRef.current?.querySelectorAll('.service-item');
      items?.forEach((item) => {
        gsap.from(item, {
          opacity: 0,
          x: -40,
          duration: 1,
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

  return (
    <section ref={servicesRef} data-scroll-section className="py-32 px-8">
      <div className="max-w-[1800px] mx-auto">
        <h2 className="text-sm mb-20 opacity-50">Capabilities</h2>
        
        <div className="grid md:grid-cols-2 gap-x-32 gap-y-8">
          {services.map((service, index) => (
            <div key={index} className="service-item text-3xl md:text-5xl font-light tracking-tight">
              {service}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};