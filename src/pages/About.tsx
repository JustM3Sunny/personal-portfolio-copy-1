import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLocomotiveScroll } from '@/hooks/useLocomotiveScroll';
import { Code2, Palette, Zap, Heart } from 'lucide-react';
import Footer from '@/components/Footer';
import portrait from '@/assets/portrait.jpg';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useLocomotiveScroll();

  const heroRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const bioRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

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

  const skills = [
    { 
      id: 'design', 
      icon: Palette, 
      title: 'Design', 
      subtitle: 'UI/UX, Brand Identity, Web Design',
      color: 'from-pink-500 to-purple-500'
    },
    { 
      id: 'development', 
      icon: Code2, 
      title: 'Development', 
      subtitle: 'React, TypeScript, Next.js',
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      id: 'animation', 
      icon: Zap, 
      title: 'Animation', 
      subtitle: 'GSAP, Framer Motion, Locomotive Scroll',
      color: 'from-orange-500 to-yellow-500'
    },
    { 
      id: 'tools', 
      icon: Heart, 
      title: 'Tools', 
      subtitle: 'Figma, Adobe CC, Git',
      color: 'from-red-500 to-pink-500'
    },
  ];

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
        <div ref={imageRef} className="max-w-[600px] mx-auto relative group">
          <img 
            src={portrait} 
            alt="Portrait" 
            className="w-full h-auto rounded-3xl shadow-2xl transition-all duration-700 group-hover:shadow-3xl group-hover:scale-105"
          />
          {/* Fun Overlay */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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

      {/* Skills Section with Interactive Cards */}
      <section ref={skillsRef} data-scroll-section className="py-32 px-8">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="skills-title text-4xl md:text-6xl font-light tracking-tight mb-16">
            {splitText('Skills & Expertise', 'title-char')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill) => {
              const Icon = skill.icon;
              const isHovered = hoveredSkill === skill.id;
              
              return (
                <div
                  key={skill.id}
                  className="skill-category group relative"
                  onMouseEnter={() => setHoveredSkill(skill.id)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <div className={`
                    p-8 rounded-3xl border border-border bg-card
                    transition-all duration-500 cursor-pointer
                    ${isHovered ? 'scale-105 -rotate-2 shadow-2xl' : 'scale-100 rotate-0 shadow-lg'}
                  `}>
                    {/* Gradient Background */}
                    <div className={`
                      absolute inset-0 rounded-3xl bg-gradient-to-br ${skill.color} opacity-0
                      transition-opacity duration-500
                      ${isHovered ? 'opacity-10' : 'opacity-0'}
                    `} />

                    {/* Icon */}
                    <div className={`
                      relative w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${skill.color}
                      flex items-center justify-center
                      transition-all duration-500
                      ${isHovered ? 'rotate-12 scale-110' : 'rotate-0 scale-100'}
                    `}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl md:text-3xl font-light mb-4 relative z-10">
                      {skill.title}
                    </h3>
                    <p className="text-lg md:text-xl font-light opacity-60 relative z-10">
                      {skill.subtitle}
                    </p>

                    {/* Hover Arrow */}
                    <div className={`
                      absolute bottom-8 right-8 transition-all duration-500
                      ${isHovered ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}
                    `}>
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;