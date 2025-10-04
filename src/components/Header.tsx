import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Link, useLocation } from 'react-router-dom';
import { Linkedin, Twitter, Instagram } from 'lucide-react';

const Header = () => {
  const headerRef = useRef<HTMLElement>(null);
  const location = useLocation();
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        y: -20,
        opacity: 0,
        duration: 1.2,
        ease: 'power2.out',
      });
    }, headerRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const isHomePage = location.pathname === '/';

  const socialLinks = [
    { name: 'linkedin', icon: Linkedin, url: 'https://linkedin.com', color: 'hover:text-blue-500' },
    { name: 'twitter', icon: Twitter, url: 'https://twitter.com', color: 'hover:text-sky-400' },
    { name: 'instagram', icon: Instagram, url: 'https://instagram.com', color: 'hover:text-pink-500' },
  ];

  return (
    <header ref={headerRef} className="fixed top-0 left-0 right-0 z-50 px-8 py-8 bg-white/80 dark:bg-background/80 backdrop-blur-sm">
      <div className="max-w-[1800px] mx-auto flex items-center justify-between">
        <Link to="/" className="text-sm tracking-tight hover:opacity-50 transition-opacity">
          shanniiii
        </Link>
        
        <nav className="flex items-center gap-8">
          {isHomePage ? (
            <>
              <Link to="/work" className="text-sm tracking-tight hover:opacity-50 transition-opacity">
                Work
              </Link>
              <Link to="/services" className="text-sm tracking-tight hover:opacity-50 transition-opacity">
                Services
              </Link>
              <Link to="/about" className="text-sm tracking-tight hover:opacity-50 transition-opacity">
                About
              </Link>
              <button onClick={() => scrollToSection('contact')} className="text-sm tracking-tight hover:opacity-50 transition-opacity">
                Contact
              </button>
            </>
          ) : (
            <>
              <Link to="/" className="text-sm tracking-tight hover:opacity-50 transition-opacity">
                Home
              </Link>
              <Link to="/work" className="text-sm tracking-tight hover:opacity-50 transition-opacity">
                Work
              </Link>
              <Link to="/services" className="text-sm tracking-tight hover:opacity-50 transition-opacity">
                Services
              </Link>
              <Link to="/about" className="text-sm tracking-tight hover:opacity-50 transition-opacity">
                About
              </Link>
            </>
          )}

          {/* Social Links */}
          <div className="flex gap-3 ml-4 border-l border-border pl-4">
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
                    relative w-8 h-8 rounded-full flex items-center justify-center
                    transition-all duration-300
                    ${social.color}
                    ${isHovered ? 'scale-125 rotate-12' : 'scale-100 rotate-0'}
                    hover:bg-secondary
                  `}
                  onMouseEnter={() => setHoveredSocial(social.name)}
                  onMouseLeave={() => setHoveredSocial(null)}
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;