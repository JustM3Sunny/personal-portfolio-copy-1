import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useLocomotiveScroll } from '@/hooks/useLocomotiveScroll';
import Footer from '@/components/Footer';

const Work = () => {
  useLocomotiveScroll();
  
  const heroRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const chars = heroRef.current?.querySelectorAll('.hero-char');
      if (chars) {
        gsap.from(chars, {
          opacity: 0,
          y: 100,
          stagger: 0.02,
          duration: 1,
          ease: 'power3.out',
        });
      }

      const projectItems = workRef.current?.querySelectorAll('.project-item');
      if (projectItems) {
        gsap.from(projectItems, {
          opacity: 0,
          y: 60,
          stagger: 0.15,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: workRef.current,
            start: 'top 70%',
          },
        });
      }
    });

    return () => ctx.revert();
  }, []);

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
            {'Selected Work'.split('').map((char, i) => (
              <span key={i} className="hero-char inline-block">
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
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
                    <span className="text-sm opacity-30 group-hover:opacity-50 transition-opacity">
                      {project.index}
                    </span>
                    <h2 className="text-6xl md:text-8xl lg:text-9xl font-light tracking-tighter group-hover:translate-x-4 transition-transform duration-700">
                      {project.title}
                    </h2>
                  </div>
                  <div className="flex flex-col items-end gap-2 pt-2">
                    <span className="text-sm opacity-50">{project.description}</span>
                    <span className="text-sm opacity-30">{project.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Spacer */}
      <div data-scroll-section className="h-32" />

      <Footer />
    </div>
  );
};

export default Work;