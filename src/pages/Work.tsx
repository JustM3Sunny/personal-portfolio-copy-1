import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLocomotiveScroll } from '@/hooks/useLocomotiveScroll';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'TWICE',
    description: 'Interaction & Development',
    year: '2024',
    index: '01'
  },
  {
    title: 'The Damai',
    description: 'Design & Development',
    year: '2024',
    index: '02'
  },
  {
    title: 'FABRIC™',
    description: 'Design & Development',
    year: '2023',
    index: '03'
  },
  {
    title: 'Aanstekelijk',
    description: 'Design & Development',
    year: '2023',
    index: '04'
  },
];

const Work = () => {
  const { scrollRef } = useLocomotiveScroll();
  const workRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation - immediate
      const heroTitle = heroRef.current?.querySelectorAll('.hero-char');
      gsap.fromTo(heroTitle,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.015,
          ease: 'power3.out',
          delay: 0.2,
        }
      );

      // Projects animation with stagger
      const projectItems = workRef.current?.querySelectorAll('.project-item');
      projectItems?.forEach((item) => {
        // Animate index
        gsap.fromTo(item.querySelector('.project-index'),
          { opacity: 0, x: -20 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
            },
          }
        );

        // Animate title with character stagger
        const titleChars = item.querySelectorAll('.title-char');
        gsap.fromTo(titleChars,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.02,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
            },
          }
        );

        // Animate metadata
        gsap.fromTo(item.querySelector('.project-meta'),
          { opacity: 0, x: 20 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
            },
          }
        );
      });
    }, workRef);

    return () => ctx.revert();
  }, []);

  const splitText = (text: string, className: string = '') => {
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
      <section ref={heroRef} data-scroll-section className="min-h-screen flex items-center justify-center px-8 pt-32">
        <div className="max-w-[1800px] w-full">
          <h1 className="text-[15vw] font-light tracking-tighter leading-[0.85] overflow-hidden text-black opacity-100">
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
                    <span className="project-index text-sm text-gray-400 group-hover:text-gray-500 transition-colors opacity-100">
                      {project.index}
                    </span>
                    <h2 className="text-6xl md:text-8xl lg:text-9xl font-light tracking-tighter text-black group-hover:translate-x-4 transition-transform duration-700 opacity-100">
                      {splitText(project.title, 'title-char')}
                    </h2>
                  </div>
                  <div className="project-meta flex flex-col items-end gap-2 pt-2 opacity-100">
                    <span className="text-sm text-gray-600 opacity-100">{project.description}</span>
                    <span className="text-sm text-gray-400 opacity-100">{project.year}</span>
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