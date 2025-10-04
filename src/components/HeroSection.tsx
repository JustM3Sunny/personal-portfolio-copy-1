import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const HeroSection = () => {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const chars = titleRef.current?.querySelectorAll('.char');
      if (chars) {
        gsap.from(chars, {
          opacity: 0,
          y: 100,
          stagger: 0.03,
          duration: 1.2,
          ease: 'power3.out',
          delay: 0.5,
        });
      }
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
    <section ref={heroRef} className="min-h-screen flex items-center justify-center px-8">
      <div className="max-w-[1800px] w-full">
        <h1 ref={titleRef} className="text-[15vw] leading-[0.9] tracking-tighter font-light">
          {splitText('Digital')}
          <br />
          {splitText('Studio')}
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;