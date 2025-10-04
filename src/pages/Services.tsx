import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code2, Database, Globe, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Code2,
    title: 'Frontend Development',
    description: 'Building beautiful, responsive interfaces with React, Next.js, and modern web technologies',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Database,
    title: 'Backend Development',
    description: 'Creating robust, scalable server-side solutions with Node.js, databases, and APIs',
    skills: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'REST APIs'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Full-stack web applications from concept to deployment with modern best practices',
    skills: ['Full Stack', 'DevOps', 'AWS', 'Docker', 'CI/CD'],
    color: 'from-orange-500 to-red-500',
  },
];

const Services = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title
      const titleChars = titleRef.current?.querySelectorAll('.char');
      if (titleChars) {
        gsap.from(titleChars, {
          opacity: 0,
          y: 50,
          rotateX: -90,
          stagger: 0.02,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 85%',
          },
        });
      }

      // Animate subtitle
      const subtitleChars = subtitleRef.current?.querySelectorAll('.subtitle-char');
      if (subtitleChars) {
        gsap.from(subtitleChars, {
          opacity: 0,
          y: 20,
          stagger: 0.01,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: subtitleRef.current,
            start: 'top 85%',
          },
        });
      }

      // Animate service cards
      const cards = servicesRef.current?.querySelectorAll('.service-card');
      cards?.forEach((card, index) => {
        gsap.from(card, {
          opacity: 0,
          y: 100,
          scale: 0.8,
          rotateY: -15,
          duration: 1,
          delay: index * 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
          },
        });
      });
    }, heroRef);

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
    <div className="min-h-screen pt-32 pb-20 px-8">
      <div ref={heroRef} className="max-w-[1400px] mx-auto">
        {/* Hero Section */}
        <div className="mb-32 text-center">
          <h1 ref={titleRef} className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-8">
            {splitText('Services')}
          </h1>
          <p ref={subtitleRef} className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            {splitText('Crafting digital experiences that blend creativity with cutting-edge technology', 'subtitle-char')}
          </p>
        </div>

        {/* Services Grid */}
        <div ref={servicesRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isHovered = hoveredIndex === index;
            
            return (
              <div
                key={index}
                className="service-card group relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Card Container with Playful Hover */}
                <div className={`
                  relative p-8 rounded-3xl bg-card border border-border
                  transition-all duration-500 ease-out
                  ${isHovered ? 'scale-105 -rotate-1' : 'scale-100 rotate-0'}
                  hover:shadow-2xl hover:border-primary/50
                  cursor-pointer overflow-hidden
                `}>
                  {/* Animated Background Gradient */}
                  <div className={`
                    absolute inset-0 bg-gradient-to-br ${service.color} opacity-0
                    transition-opacity duration-500
                    ${isHovered ? 'opacity-10' : 'opacity-0'}
                  `} />

                  {/* Floating Icon */}
                  <div className={`
                    relative w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${service.color}
                    flex items-center justify-center
                    transition-all duration-500
                    ${isHovered ? 'rotate-12 scale-110' : 'rotate-0 scale-100'}
                  `}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Sparkle Effect */}
                  {isHovered && (
                    <div className="absolute top-4 right-4 animate-spin">
                      <Sparkles className="w-6 h-6 text-primary" />
                    </div>
                  )}

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-4 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2">
                    {service.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className={`
                          text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground
                          transition-all duration-300 delay-${skillIndex * 100}
                          ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-70'}
                          hover:bg-primary hover:text-primary-foreground hover:scale-110
                          cursor-default
                        `}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

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

        {/* CTA Section */}
        <div className="mt-32 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Ready to build something amazing?
          </h2>
          <a
            href="mailto:justaskcoding76@gmail.com"
            className="
              inline-block px-8 py-4 text-lg font-semibold rounded-full
              bg-primary text-primary-foreground
              hover:scale-105 hover:rotate-2 active:scale-95
              transition-all duration-300
              shadow-lg hover:shadow-2xl
            "
          >
            Let's Talk →
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;