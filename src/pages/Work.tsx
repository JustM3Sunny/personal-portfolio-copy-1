import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLocomotiveScroll } from '@/hooks/useLocomotiveScroll';
import Footer from '@/components/Footer';

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  useLocomotiveScroll();
  
  const heroRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero title with scroll trigger
      const chars = heroRef.current?.querySelectorAll('.hero-char');
      if (chars) {
        gsap.from(chars, {
          opacity: 0,
          y: 80,
          stagger: 0.015,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top 80%',
          },
        });
      }

      // Project items with enhanced animations
      const projectItems = workRef.current?.querySelectorAll('.project-item');
      projectItems?.forEach((item) => {
        // Animate index
        gsap.from(item.querySelector('.project-index'), {
          opacity: 0,
          x: -20,
          duration: 0.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 80%',
          },
        });

        // Animate title with character stagger
        const titleChars = item.querySelectorAll('.title-char');
        gsap.from(titleChars, {
          opacity: 0,
          y: 40,
          stagger: 0.01,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 80%',
          },
        });

        // Animate metadata
        gsap.from(item.querySelector('.project-meta'), {
          opacity: 0,
          x: 20,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 80%',
          },
        });
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

  const projects = [
    { index: '01', title: 'Project Alpha', description: 'Web Design', year: '2024' },
    { index: '02', title: 'Project Beta', description: 'Brand Identity', year: '2023' },
    { index: '03', title: 'Project Gamma', description: 'UI/UX Design', year: '2023' },
  ];

  return (
    <div data-scroll-container className="min-h-screen bg-white">
      {/* Hero Section */}
      <section ref={heroRef} data-scroll-section className="min-h-screen flex items-center justify-center px-8 pt-32">
        <div className="max-w-[1800px] w-full">
          <h1 className="text-[15vw] font-light tracking-tighter leading-[0.85] overflow-hidden">
            {splitText('Selected Work', 'hero-char')}
          </h1>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={workRef} data-scroll-section className="py-32 px-8">
        <div className="max-w-[1800px] mx-auto">
          <div className="space-y-1">
            {projects.map((project) => (
              <div
                key={project.index}
                className="project-item border-t border-black/10 py-12 hover:bg-black/[0.02] transition-all duration-700 cursor-pointer group"
              >
                <div className="flex items-start justify-between gap-8">
                  <div className="flex gap-12 items-baseline">
                    <span className="project-index text-sm opacity-30 group-hover:opacity-50 transition-opacity">
                      {project.index}
                    </span>
                    <h2 className="text-6xl md:text-8xl lg:text-9xl font-light tracking-tighter group-hover:translate-x-4 transition-transform duration-700">
                      {splitText(project.title, 'title-char')}
                    </h2>
                  </div>
                  <div className="project-meta flex flex-col items-end gap-2 pt-2">
                    <span className="text-sm opacity-50">{project.description}</span>
                    <span className="text-sm opacity-30">{project.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div data-scroll-section className="h-32" />

      <Footer />
    </div>
  );
};

export default Work;