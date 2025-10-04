import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLocomotiveScroll } from '@/hooks/useLocomotiveScroll';
import { ExternalLink, Sparkles } from 'lucide-react';
import Footer from '@/components/Footer';

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  useLocomotiveScroll();
  
  const heroRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLElement>(null);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

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
    { index: '01', title: 'Project Alpha', description: 'Web Design', year: '2024', color: 'from-blue-500 to-cyan-500' },
    { index: '02', title: 'Project Beta', description: 'Brand Identity', year: '2023', color: 'from-purple-500 to-pink-500' },
    { index: '03', title: 'Project Gamma', description: 'UI/UX Design', year: '2023', color: 'from-orange-500 to-red-500' },
  ];

  return (
    <div data-scroll-container className="min-h-screen bg-white">
      {/* Hero Section */}
      <section ref={heroRef} data-scroll-section className="min-h-screen flex items-center justify-center px-8 pt-32 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-40 left-20 w-40 h-40 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

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
            {projects.map((project) => {
              const isHovered = hoveredProject === project.index;
              
              return (
                <div
                  key={project.index}
                  className="project-item border-t border-black/10 py-12 transition-all duration-700 cursor-pointer group relative overflow-hidden"
                  onMouseEnter={() => setHoveredProject(project.index)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  {/* Animated Background Gradient on Hover */}
                  <div className={`
                    absolute inset-0 bg-gradient-to-r ${project.color} opacity-0
                    transition-opacity duration-700
                    ${isHovered ? 'opacity-5' : 'opacity-0'}
                  `} />

                  {/* Sparkle Effect */}
                  {isHovered && (
                    <div className="absolute top-1/2 right-20 -translate-y-1/2 animate-spin">
                      <Sparkles className="w-8 h-8 text-primary" />
                    </div>
                  )}

                  <div className="flex items-start justify-between gap-8 relative z-10">
                    <div className="flex gap-12 items-baseline">
                      <span className={`
                        project-index text-sm transition-all duration-500
                        ${isHovered ? 'opacity-100 scale-125 text-primary' : 'opacity-30'}
                      `}>
                        {project.index}
                      </span>
                      <h2 className={`
                        text-6xl md:text-8xl lg:text-9xl font-light tracking-tighter
                        transition-all duration-700
                        ${isHovered ? 'translate-x-8 text-primary' : 'translate-x-0'}
                      `}>
                        {splitText(project.title, 'title-char')}
                      </h2>
                    </div>
                    <div className="project-meta flex flex-col items-end gap-2 pt-2">
                      <span className={`
                        text-sm transition-all duration-500
                        ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-50 translate-x-4'}
                      `}>
                        {project.description}
                      </span>
                      <span className={`
                        text-sm transition-all duration-500
                        ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-30 translate-x-4'}
                      `}>
                        {project.year}
                      </span>
                      {/* External Link Icon */}
                      <div className={`
                        mt-4 transition-all duration-500
                        ${isHovered ? 'opacity-100 translate-x-0 rotate-0' : 'opacity-0 translate-x-8 rotate-45'}
                      `}>
                        <ExternalLink className="w-6 h-6" />
                      </div>
                    </div>
                  </div>

                  {/* Bottom Progress Bar on Hover */}
                  <div className={`
                    absolute bottom-0 left-0 h-1 bg-gradient-to-r ${project.color}
                    transition-all duration-700 ease-out
                    ${isHovered ? 'w-full' : 'w-0'}
                  `} />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <div data-scroll-section className="h-32" />

      <Footer />
    </div>
  );
};

export default Work;