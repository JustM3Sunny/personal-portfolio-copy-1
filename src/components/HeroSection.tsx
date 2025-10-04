import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import portraitImage from '@/assets/portrait.jpg';

const HeroSection = () => {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const chars = titleRef.current?.querySelectorAll('.char');
      if (chars) {
        gsap.from(chars, {
          opacity: 0,
          y: 50,
          stagger: 0.015,
          duration: 0.8,
          ease: 'power3.out',
          delay: 0.1,
        });
      }

      gsap.from(subtitleRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power2.out',
        delay: 0.4,
      });

      gsap.from(imageRef.current, {
        opacity: 0,
        scale: 0.95,
        duration: 1,
        ease: 'power2.out',
        delay: 0.6,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const splitText = (text: string) => {
    return text.split('').map((char, i) => (
      <span key={i} className="char inline-block">
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  return (
    <section 
      ref={heroRef} 
      className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-16 py-20"
      data-scroll-section
    >
      <div className="max-w-[1800px] w-full">
        <h1 
          ref={titleRef} 
          className="text-[18vw] md:text-[15vw] lg:text-[12vw] leading-[0.9] tracking-tighter font-light mb-16 md:mb-20 text-black"
        >
          {splitText('Digital')}
          <br />
          {splitText('Studio')}
        </h1>
        
        {/* shanniii.dev with Image */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12 mt-16 md:mt-24">
          <div ref={subtitleRef} className="flex-1">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight mb-4 text-black">
              shanniii.dev
            </h2>
            <p className="text-xl md:text-2xl lg:text-3xl font-light tracking-tight text-gray-600 max-w-2xl">
              Creative developer crafting digital experiences with passion and precision.
            </p>
          </div>
          
          <div ref={imageRef} className="w-full md:w-auto">
            <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 overflow-hidden rounded-2xl">
              <img
                src={portraitImage}
                alt="shanniii"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;