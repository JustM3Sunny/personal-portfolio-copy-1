import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Contact = () => {
  const contactRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate header
      gsap.from('.contact-header', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.contact-header',
          start: 'top 80%',
        },
      });

      // Animate main text with character stagger
      const mainChars = contactRef.current?.querySelectorAll('.main-char');
      gsap.from(mainChars, {
        opacity: 0,
        y: 40,
        stagger: 0.015,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.contact-main',
          start: 'top 75%',
        },
      });

      // Animate email
      gsap.from('.contact-email', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.contact-email',
          start: 'top 85%',
        },
      });
    }, contactRef);

    return () => ctx.revert();
  }, []);

  const splitText = (text: string) => {
    return text.split('').map((char, i) => (
      <span key={i} className="main-char inline-block">
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  return (
    <section id="contact" ref={contactRef} data-scroll-section className="min-h-screen flex items-center px-8 py-32">
      <div className="max-w-[1800px] mx-auto w-full">
        <div className="contact-content">
          <h2 className="contact-header text-sm mb-20 text-gray-500">Get in Touch</h2>
          <div className="contact-main text-6xl md:text-8xl font-light tracking-tighter mb-12 text-black">
            {splitText('Let\'s create')}
            <br />
            {splitText('something together')}
          </div>
          <a href="mailto:hello@clou.ch" className="contact-email text-2xl md:text-4xl text-black hover:opacity-50 transition-opacity">
            hello@clou.ch
          </a>
        </div>
      </div>
    </section>
  );
};