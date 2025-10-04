import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const works = [
  { title: 'Brand Identity', client: 'Client A', year: '2024' },
  { title: 'Web Design', client: 'Client B', year: '2024' },
  { title: 'Digital Experience', client: 'Client C', year: '2023' },
  { title: 'Creative Direction', client: 'Client D', year: '2023' },
];

const WorkSection = () => {
  const workRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = workRef.current?.querySelectorAll('.work-item');
      items?.forEach((item) => {
        gsap.from(item, {
          opacity: 0,
          y: 60,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
          },
        });
      });
    }, workRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="work" ref={workRef} className="min-h-screen py-32 px-8">
      <div className="max-w-[1800px] mx-auto">
        <h2 className="text-sm mb-20 opacity-50">Selected Work</h2>
        
        <div className="space-y-1">
          {works.map((work, index) => (
            <div
              key={index}
              className="work-item border-t border-black/10 py-8 hover:opacity-50 transition-opacity cursor-pointer"
            >
              <div className="flex items-baseline justify-between">
                <h3 className="text-6xl md:text-8xl font-light tracking-tighter">{work.title}</h3>
                <div className="flex gap-12 text-sm opacity-50">
                  <span>{work.client}</span>
                  <span>{work.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;