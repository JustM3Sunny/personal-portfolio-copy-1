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
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title
      const titleChars = titleRef.current?.querySelectorAll('.char');
      if (titleChars) {
        gsap.from(titleChars, {
          opacity: 0,
          y: 20,
          stagger: 0.02,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 85%',
          },
        });
      }

      // Animate each service item with character stagger
      const items = servicesRef.current?.querySelectorAll('.service-item');
      items?.forEach((item) => {
        const chars = item.querySelectorAll('.service-char');
        gsap.from(chars, {
          opacity: 0,
          y: 30,
          stagger: 0.01,
          duration: 0.5,
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
        <h2 ref={titleRef} className="text-sm mb-20 opacity-50">
          {splitText('Capabilities')}
        </h2>
        
        <div className="grid md:grid-cols-2 gap-x-32 gap-y-8">
          {services.map((service, index) => (
            <div key={index} className="service-item text-3xl md:text-5xl font-light tracking-tight">
              {splitText(service)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};