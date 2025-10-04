import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
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
  const heroRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero text animation
      gsap.from(heroRef.current?.querySelector('.hero-text'), {
        opacity: 0,
        y: 40,
        duration: 1.2,
        ease: 'power2.out',
        delay: 0.3,
      });

      // Image animation
      gsap.from(imageRef.current, {
        opacity: 0,
        scale: 0.95,
        duration: 1.2,
        ease: 'power2.out',
        delay: 0.5,
      });

      // Skills animation
      gsap.from(skillsRef.current?.querySelectorAll('.skill-category'), {
        opacity: 0,
        y: 30,
        duration: 0.8,
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

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section with Image */}
      <section ref={heroRef} className="min-h-screen flex items-center px-8 pt-32 pb-16">
        <div className="max-w-[1800px] mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="hero-text">
              <h1 className="text-[12vw] md:text-[8vw] lg:text-[6vw] font-light leading-[0.9] tracking-tighter mb-8">
                Developer
                <br />
                & Designer
              </h1>
              <p className="text-xl md:text-2xl font-light leading-relaxed tracking-tight opacity-60 max-w-xl">
                Creating purposeful digital experiences through strategic design and 
                thoughtful execution. Based in the Netherlands, working globally.
              </p>
            </div>
            
            <div ref={imageRef} className="relative">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={portraitImage}
                  alt="Developer"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section ref={skillsRef} className="min-h-screen flex items-center px-8 py-32 bg-neutral-50">
        <div className="max-w-[1800px] mx-auto w-full">
          <div className="mb-20">
            <h2 className="text-4xl md:text-6xl font-light tracking-tight mb-4">
              Skills & Expertise
            </h2>
            <p className="text-lg md:text-xl font-light opacity-60 max-w-2xl">
              A comprehensive toolkit built over years of experience in the digital landscape.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="skill-category">
                <h3 className="text-sm uppercase tracking-wider mb-6 opacity-40">
                  {skillGroup.category}
                </h3>
                <ul className="space-y-3">
                  {skillGroup.items.map((skill, idx) => (
                    <li 
                      key={idx}
                      className="text-lg font-light tracking-tight hover:opacity-60 transition-opacity cursor-default"
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