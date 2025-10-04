import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, ArrowRight } from 'lucide-react';
import portraitImage from '@/assets/portrait.jpg';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHoveringImage, setIsHoveringImage] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    const ctx = gsap.context(() => {
      const chars = titleRef.current?.querySelectorAll('.char');
      if (chars) {
        gsap.from(chars, {
          opacity: 0,
          y: 100,
          stagger: 0.02,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 80%',
          },
        });
      }

      const subtitleChars = subtitleRef.current?.querySelectorAll('.subtitle-char');
      if (subtitleChars) {
        gsap.from(subtitleChars, {
          opacity: 0,
          y: 30,
          stagger: 0.01,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: subtitleRef.current,
            start: 'top 80%',
          },
        });
      }

      gsap.from(imageRef.current, {
        opacity: 0,
        scale: 0.9,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 80%',
        },
      });
    }, heroRef);

    return () => {
      ctx.revert();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const splitText = (text: string) => {
    return text.split('').map((char, i) => (
      <span key={i} className="char inline-block hover:text-primary hover:scale-125 transition-all duration-300 cursor-default">
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  const splitSubtitle = (text: string) => {
    return text.split('').map((char, i) => (
      <span key={i} className="subtitle-char inline-block">
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  return (
    <section 
      ref={heroRef} 
      className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-16 py-20 relative overflow-hidden"
      data-scroll-section
    >
      {/* Floating Sparkles */}
      <div className="absolute top-20 left-20 animate-float">
        <Sparkles className="w-8 h-8 text-primary opacity-20" />
      </div>
      <div className="absolute bottom-40 right-32 animate-float" style={{ animationDelay: '1s' }}>
        <Sparkles className="w-6 h-6 text-primary opacity-30" />
      </div>
      <div className="absolute top-1/2 left-1/4 animate-float" style={{ animationDelay: '2s' }}>
        <Sparkles className="w-5 h-5 text-primary opacity-25" />
      </div>

      {/* Custom Cursor */}
      {isHoveringImage && (
        <div
          ref={cursorRef}
          className="fixed pointer-events-none z-50 mix-blend-difference"
          style={{
            left: mousePosition.x - 50,
            top: mousePosition.y - 50,
            transition: 'all 0.1s ease-out',
          }}
        >
          <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center text-black font-bold animate-pulse">
            VIEW
          </div>
        </div>
      )}

      <div className="max-w-[1800px] w-full">
        <h1 
          ref={titleRef} 
          className="text-[18vw] md:text-[15vw] lg:text-[12vw] leading-[0.9] tracking-tighter font-light mb-16 md:mb-20"
        >
          {splitText('Digital')}
          <br />
          {splitText('Studio')}
        </h1>
        
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12 mt-16 md:mt-24">
          <div ref={subtitleRef} className="flex-1">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight mb-4">
              {splitSubtitle('shanniii.dev')}
            </h2>
            <p className="text-xl md:text-2xl lg:text-3xl font-light tracking-tight opacity-60 max-w-2xl mb-8">
              {splitSubtitle('Creative developer crafting digital experiences with passion and precision.')}
            </p>
            
            {/* CTA Button with Playful Hover */}
            <a
              href="mailto:justaskcoding76@gmail.com"
              className="
                inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground
                rounded-full font-semibold text-lg
                hover:scale-110 hover:rotate-2 active:scale-95
                transition-all duration-300 shadow-lg hover:shadow-2xl
                group
              "
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </a>
          </div>
          
          <div 
            ref={imageRef} 
            className="w-full md:w-auto relative"
            onMouseEnter={() => setIsHoveringImage(true)}
            onMouseLeave={() => setIsHoveringImage(false)}
          >
            <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 overflow-hidden rounded-2xl relative group cursor-pointer">
              <img
                src={portraitImage}
                alt="shanniii"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
              />
              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-xl animate-bounce">
              Available for hire ✨
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;