import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const headerRef = useRef<HTMLElement>(null);
  const location = useLocation();

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

  return (
    <header ref={headerRef} className="fixed top-0 left-0 right-0 z-50 px-8 py-8 bg-white/80 backdrop-blur-sm">
      <div className="max-w-[1800px] mx-auto flex items-center justify-between">
        <Link to="/" className="text-sm tracking-tight hover:opacity-50 transition-opacity">
          shanniiii
        </Link>
        
        <nav className="flex items-center gap-12">
          {isHomePage ? (
            <>
              <Link to="/work" className="text-sm tracking-tight hover:opacity-50 transition-opacity">
                Work
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
              <Link to="/about" className="text-sm tracking-tight hover:opacity-50 transition-opacity">
                About
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;