import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Contact = () => {
  const contactRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const emailRef = useRef<HTMLAnchorElement>(null);

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
          <a ref={emailRef} href="mailto:hello@clou.ch" className="text-2xl md:text-4xl hover:opacity-50 transition-opacity">
            {splitText('hello@clou.ch', 'email-char')}
          </a>
        </div>
      </div>
    </section>
  );
};