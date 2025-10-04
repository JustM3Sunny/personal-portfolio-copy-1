import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLocomotiveScroll } from '@/hooks/useLocomotiveScroll';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import portraitImage from '@/assets/portrait.jpg';

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { category: 'Frontend', items: ['React', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'GSAP', 'Three.js'] },
  { category: 'Backend', items: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'GraphQL', 'REST APIs'] },
  { category: 'Design', items: ['Figma', 'Adobe Creative Suite', 'Sketch', 'Principle', 'Framer', 'Webflow'] },
  { category: 'Tools', items: ['Git', 'Docker', 'AWS', 'Vercel', 'Webpack', 'Jest'] }
];

const About = () => {
  const { scrollRef } = useLocomotiveScroll();
  const heroRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const bioRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero title animation - immediate
      const heroTitle = heroRef.current?.querySelector('.hero-title');
      if (heroTitle) {
        const chars = heroTitle.querySelectorAll('.char');
        gsap.fromTo(chars,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.015,
            duration: 0.8,
            ease: 'power3.out',
            delay: 0.2,
          }
        );
      }

      // Subtitle animation - immediate
      gsap.fromTo(heroRef.current?.querySelector('.hero-subtitle'),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          delay: 0.5,
        }
      );

      // Image animation - immediate
      gsap.fromTo(imageRef.current,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'power2.out',
          delay: 0.7,
        }
      );

      // Bio animation with character stagger
      const bioParas = bioRef.current?.querySelectorAll('.bio-text');
      bioParas?.forEach((para) => {
        const chars = para.querySelectorAll('.bio-char');
        gsap.fromTo(chars,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.01,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: para,
              start: 'top 80%',
            },
          }
        );
      });

      // Skills header with character stagger
      const skillsTitle = skillsRef.current?.querySelector('.skills-title');
      if (skillsTitle) {
        const chars = skillsTitle.querySelectorAll('.skill-title-char');
        gsap.fromTo(chars,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.015,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: skillsTitle,
              start: 'top 80%',
            },
          }
        );
      }

      // Skills subtitle
      gsap.fromTo('.skills-subtitle',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.skills-subtitle',
            start: 'top 85%',
          },
        }
      );

      // Skills categories
      gsap.fromTo(skillsRef.current?.querySelectorAll('.skill-category'),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: skillsRef.current,
            start: 'top 70%',
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const splitText = (text: string) => {
    return text.split('').map((char, i) => (
      <span key={i} className="char inline-block opacity-100">
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  const splitTextWithClass = (text: string, className: string) => {
    return text.split('').map((char, i) => (
      <span key={i} className={`${className} inline-block opacity-100`}>
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  return (
    <div ref={scrollRef} data-scroll-container className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section ref={heroRef} className="min-h-screen flex items-center px-6 md:px-12 lg:px-16 pt-32 pb-20" data-scroll-section>
        <div className="max-w-[1800px] mx-auto w-full">
          <div className="mb-20 md:mb-32">
            <h1 className="hero-title text-[16vw] md:text-[12vw] lg:text-[10vw] font-light leading-[0.85] tracking-tighter mb-8 md:mb-12 text-black opacity-100">
              {splitText('About')}
            </h1>
            <p className="hero-subtitle text-2xl md:text-4xl lg:text-5xl font-light leading-relaxed tracking-tight text-gray-600 max-w-4xl opacity-100">
              Creative developer & designer crafting meaningful digital experiences
            </p>
          </div>

          <div ref={imageRef} className="max-w-3xl opacity-100">
            <div className="aspect-[4/5] md:aspect-[3/2] overflow-hidden rounded-3xl">
              <img
                src={portraitImage}
                alt="Developer"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section ref={bioRef} className="min-h-[60vh] flex items-center px-6 md:px-12 lg:px-16 py-20 md:py-32" data-scroll-section>
        <div className="max-w-[1800px] mx-auto w-full">
          <div className="max-w-5xl">
            <p className="bio-text text-2xl md:text-4xl lg:text-5xl font-light leading-relaxed tracking-tight mb-12 md:mb-16 text-gray-900 opacity-100">
              {splitTextWithClass("I'm a creative developer based in the Netherlands, specializing in building digital products that blend aesthetics with functionality.", 'bio-char')}
            </p>
            <p className="bio-text text-xl md:text-3xl lg:text-4xl font-light leading-relaxed tracking-tight text-gray-600 opacity-100">
              {splitTextWithClass("With a focus on user-centric design and clean code, I help brands and businesses create memorable online experiences that resonate with their audience.", 'bio-char')}
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section ref={skillsRef} className="min-h-screen flex items-center px-6 md:px-12 lg:px-16 py-20 md:py-32 bg-neutral-50" data-scroll-section>
        <div className="max-w-[1800px] mx-auto w-full">
          <div className="mb-16 md:mb-24">
            <h2 className="skills-title text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-6 md:mb-8 text-black opacity-100">
              {splitTextWithClass('Skills & Expertise', 'skill-title-char')}
            </h2>
            <p className="skills-subtitle text-xl md:text-2xl lg:text-3xl font-light text-gray-600 max-w-3xl opacity-100">
              A comprehensive toolkit built over years of experience in the digital landscape.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="skill-category opacity-100">
                <h3 className="text-base md:text-lg uppercase tracking-wider mb-6 md:mb-8 text-gray-400 font-medium opacity-100">
                  {skillGroup.category}
                </h3>
                <ul className="space-y-4">
                  {skillGroup.items.map((skill, idx) => (
                    <li 
                      key={idx}
                      className="text-xl md:text-2xl lg:text-3xl font-light tracking-tight text-black hover:opacity-60 transition-opacity cursor-default opacity-100"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;