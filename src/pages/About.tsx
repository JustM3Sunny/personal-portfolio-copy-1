import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useLocomotiveScroll } from '@/hooks/useLocomotiveScroll';
import Footer from '@/components/Footer';
import portrait from '@/assets/portrait.jpg';

const About = () => {
  useLocomotiveScroll();

  const heroRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const bioRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero title animation
      const heroTitle = heroRef.current?.querySelector('.hero-title');
      if (heroTitle) {
        const chars = heroTitle.querySelectorAll('.char');
        gsap.from(chars, {
          opacity: 0,
          y: 100,
          stagger: 0.02,
          duration: 1.2,
          ease: 'power3.out',
          delay: 0.3,
        });
      }

      // Subtitle animation
      gsap.from(heroRef.current?.querySelector('.hero-subtitle'), {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: 'power2.out',
        delay: 1,
      });

      // Image animation
      gsap.from(imageRef.current, {
        opacity: 0,
        scale: 0.9,
        duration: 1.4,
        ease: 'power2.out',
        delay: 0.6,
      });

      // Bio animation
      gsap.from(bioRef.current?.querySelectorAll('p'), {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: bioRef.current,
          start: 'top 70%',
        },
      });

      // Skills animation
      gsap.from(skillsRef.current?.querySelectorAll('.skill-category'), {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: skillsRef.current,
          start: 'top 70%',
        },
      });
    });

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
    <div data-scroll-container className="min-h-screen bg-white">
      {/* Hero Section */}
      <section ref={heroRef} data-scroll-section className="min-h-screen flex items-center justify-center px-8 pt-32">
        <div className="max-w-[1800px] w-full">
          <h1 className="hero-title text-[16vw] md:text-[12vw] lg:text-[10vw] font-light tracking-tighter leading-[0.85] mb-8">
            {splitText('About Me')}
          </h1>
          <p className="hero-subtitle text-2xl md:text-4xl lg:text-5xl font-light tracking-tight opacity-60 max-w-4xl">
            Designer & Developer crafting digital experiences
          </p>
        </div>
      </section>

      {/* Image Section */}
      <section data-scroll-section className="py-32 px-8">
        <div ref={imageRef} className="max-w-[1400px] mx-auto">
          <img 
            src={portrait} 
            alt="Portrait" 
            className="w-full h-auto rounded-3xl shadow-2xl"
          />
        </div>
      </section>

      {/* Bio Section */}
      <section data-scroll-section className="py-32 px-8">
        <div ref={bioRef} className="max-w-[1200px] mx-auto space-y-8">
          <p className="text-2xl md:text-4xl lg:text-5xl font-light tracking-tight leading-relaxed">
            I'm a passionate designer and developer with a love for creating beautiful, 
            functional digital experiences.
          </p>
          <p className="text-2xl md:text-4xl lg:text-5xl font-light tracking-tight leading-relaxed opacity-60">
            With years of experience in the field, I specialize in bringing ideas to life 
            through thoughtful design and clean code.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section ref={skillsRef} data-scroll-section className="py-32 px-8">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-6xl font-light tracking-tight mb-16">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="skill-category">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-light mb-4 opacity-60">Design</h3>
              <p className="text-xl md:text-2xl lg:text-3xl font-light">UI/UX, Brand Identity, Web Design</p>
            </div>
            <div className="skill-category">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-light mb-4 opacity-60">Development</h3>
              <p className="text-xl md:text-2xl lg:text-3xl font-light">React, TypeScript, Next.js</p>
            </div>
            <div className="skill-category">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-light mb-4 opacity-60">Animation</h3>
              <p className="text-xl md:text-2xl lg:text-3xl font-light">GSAP, Framer Motion, Locomotive Scroll</p>
            </div>
            <div className="skill-category">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-light mb-4 opacity-60">Tools</h3>
              <p className="text-xl md:text-2xl lg:text-3xl font-light">Figma, Adobe CC, Git</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;