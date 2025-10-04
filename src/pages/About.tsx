import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLocomotiveScroll } from '@/hooks/useLocomotiveScroll';
import Footer from '@/components/Footer';
import portrait from '@/assets/portrait.jpg';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useLocomotiveScroll();

  const heroRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const bioRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero title animation - scroll triggered
      const heroTitle = heroRef.current?.querySelector('.hero-title');
      if (heroTitle) {
        const chars = heroTitle.querySelectorAll('.char');
        gsap.from(chars, {
          opacity: 0,
          y: 80,
          stagger: 0.015,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: heroTitle,
            start: 'top 80%',
          },
        });
      }

      // Subtitle animation - scroll triggered
      const heroSubtitle = heroRef.current?.querySelector('.hero-subtitle');
      if (heroSubtitle) {
        const chars = heroSubtitle.querySelectorAll('.subtitle-char');
        gsap.from(chars, {
          opacity: 0,
          y: 30,
          stagger: 0.01,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: heroSubtitle,
            start: 'top 80%',
          },
        });
      }

      // Image animation
      gsap.from(imageRef.current, {
        opacity: 0,
        scale: 0.9,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 75%',
        },
      });

      // Bio paragraphs with character stagger
      const bioParas = bioRef.current?.querySelectorAll('.bio-para');
      bioParas?.forEach((para) => {
        const chars = para.querySelectorAll('.bio-char');
        gsap.from(chars, {
          opacity: 0,
          y: 20,
          stagger: 0.005,
          duration: 0.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: para,
            start: 'top 80%',
          },
        });
      });

      // Skills title
      const skillsTitle = skillsRef.current?.querySelector('.skills-title');
      if (skillsTitle) {
        const chars = skillsTitle.querySelectorAll('.title-char');
        gsap.from(chars, {
          opacity: 0,
          y: 30,
          stagger: 0.02,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: skillsTitle,
            start: 'top 80%',
          },
        });
      }

      // Skills items
      gsap.from(skillsRef.current?.querySelectorAll('.skill-category'), {
        opacity: 0,
        y: 40,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: skillsRef.current,
          start: 'top 70%',
        },
      });
    });

    return () => ctx.revert();
  }, []);

  const splitText = (text: string, className: string = 'char') => {
    return text.split('').map((char, i) => (
      <span key={i} className={`${className} inline-block`}>
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
            {splitText('Designer & Developer crafting digital experiences', 'subtitle-char')}
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
          <p className="bio-para text-2xl md:text-4xl lg:text-5xl font-light tracking-tight leading-relaxed">
            {splitText('I\'m a passionate designer and developer with a love for creating beautiful, functional digital experiences.', 'bio-char')}
          </p>
          <p className="bio-para text-2xl md:text-4xl lg:text-5xl font-light tracking-tight leading-relaxed opacity-60">
            {splitText('With years of experience in the field, I specialize in bringing ideas to life through thoughtful design and clean code.', 'bio-char')}
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section ref={skillsRef} data-scroll-section className="py-32 px-8">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="skills-title text-4xl md:text-6xl font-light tracking-tight mb-16">
            {splitText('Skills & Expertise', 'title-char')}
          </h2>
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