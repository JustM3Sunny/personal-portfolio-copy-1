import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Linkedin, Twitter, Instagram } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const Contact = () => {
  const contactRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const emailRef = useRef<HTMLAnchorElement>(null);
  const socialsRef = useRef<HTMLDivElement>(null);
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title
      const titleChars = titleRef.current?.querySelectorAll('.char');
      if (titleChars) {
        gsap.from(titleChars, {
          opacity: 0,
          y: 20,
          stagger: 0.02,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 85%',
          },
        });
      }

      // Animate heading characters
      const headingChars = headingRef.current?.querySelectorAll('.heading-char');
      if (headingChars) {
        gsap.from(headingChars, {
          opacity: 0,
          y: 50,
          stagger: 0.01,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 80%',
          },
        });
      }

      // Animate email
      const emailChars = emailRef.current?.querySelectorAll('.email-char');
      if (emailChars) {
        gsap.from(emailChars, {
          opacity: 0,
          y: 30,
          stagger: 0.02,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: emailRef.current,
            start: 'top 85%',
          },
        });
      }

      // Animate social links
      const socialLinks = socialsRef.current?.querySelectorAll('.social-link');
      if (socialLinks) {
        gsap.from(socialLinks, {
          opacity: 0,
          y: 30,
          scale: 0,
          rotation: -180,
          stagger: 0.1,
          duration: 0.8,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: socialsRef.current,
            start: 'top 85%',
          },
        });
      }
    }, contactRef);

    return () => ctx.revert();
  }, []);

  const splitText = (text: string, className: string = 'char') => {
    return text.split('').map((char, i) => (
      <span key={i} className={`${className} inline-block`}>
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  const socialLinks = [
    { name: 'linkedin', icon: Linkedin, url: 'https://linkedin.com', color: 'hover:text-blue-500' },
    { name: 'twitter', icon: Twitter, url: 'https://twitter.com', color: 'hover:text-sky-400' },
    { name: 'instagram', icon: Instagram, url: 'https://instagram.com', color: 'hover:text-pink-500' },
  ];

  return (
    <section id="contact" ref={contactRef} data-scroll-section className="min-h-screen flex items-center px-8 py-32">
      <div className="max-w-[1800px] mx-auto w-full">
        <div className="contact-content">
          <h2 ref={titleRef} className="text-sm mb-20 opacity-50">
            {splitText('Get in Touch')}
          </h2>
          <div ref={headingRef} className="text-6xl md:text-8xl font-light tracking-tighter mb-12">
            {splitText('Let\'s create', 'heading-char')}
            <br />
            {splitText('something together', 'heading-char')}
          </div>
          <a 
            ref={emailRef} 
            href="mailto:justaskcoding76@gmail.com" 
            className="text-2xl md:text-4xl hover:opacity-50 transition-opacity inline-block mb-16"
          >
            {splitText('justaskcoding76@gmail.com', 'email-char')}
          </a>

          {/* Social Links */}
          <div ref={socialsRef} className="flex gap-6 mt-12">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              const isHovered = hoveredSocial === social.name;
              
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    social-link group relative w-16 h-16 rounded-full 
                    bg-secondary flex items-center justify-center
                    transition-all duration-300 cursor-pointer
                    ${social.color}
                    ${isHovered ? 'scale-125 rotate-12' : 'scale-100 rotate-0'}
                    hover:bg-primary hover:text-primary-foreground
                    hover:shadow-2xl
                  `}
                  onMouseEnter={() => setHoveredSocial(social.name)}
                  onMouseLeave={() => setHoveredSocial(null)}
                >
                  <Icon className={`w-6 h-6 transition-all duration-300 ${isHovered ? 'scale-110' : 'scale-100'}`} />
                  
                  {/* Ripple effect */}
                  {isHovered && (
                    <span className="absolute inset-0 rounded-full border-2 border-current animate-ping opacity-75" />
                  )}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};