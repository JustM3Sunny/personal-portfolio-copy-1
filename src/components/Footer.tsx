import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate copyright with character stagger
      const copyrightChars = footerRef.current?.querySelectorAll('.copyright-char');
      gsap.from(copyrightChars, {
        opacity: 0,
        y: 20,
        stagger: 0.02,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 90%',
        },
      });

      // Animate links
      const links = footerRef.current?.querySelectorAll('.footer-link');
      gsap.from(links, {
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 90%',
        },
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const splitText = (text: string) => {
    return text.split('').map((char, i) => (
      <span key={i} className="copyright-char inline-block">
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  return (
    <footer ref={footerRef} data-scroll-section className="px-8 py-12 border-t border-black/10">
      <div className="max-w-[1800px] mx-auto flex justify-between items-center">
        <div className="text-sm text-gray-500">{splitText('© 2024 Clou')}</div>
        <div className="flex gap-8 text-sm">
          <a href="#" className="footer-link text-black hover:opacity-50 transition-opacity">Instagram</a>
          <a href="#" className="footer-link text-black hover:opacity-50 transition-opacity">LinkedIn</a>
          <a href="#" className="footer-link text-black hover:opacity-50 transition-opacity">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;