import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Navigation = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="text-sm opacity-100">
            Dennis Snellenberg
          </Link>
          
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-sm opacity-100 hover:opacity-60 transition-opacity"
          >
            Menu
          </button>
        </div>
      </nav>

      {/* Full screen menu */}
      <div 
        className={`fixed inset-0 bg-background z-[100] transition-transform duration-700 ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full pointer-events-none'
        }`}
      >
        <div className="h-full flex flex-col">
          <div className="px-6 py-6 flex justify-between items-center">
            <span className="text-sm opacity-100">Dennis Snellenberg</span>
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="text-sm opacity-100 hover:opacity-60 transition-opacity"
            >
              Close
            </button>
          </div>

          <div className="flex-1 flex items-center justify-center px-6">
            <div className="w-full max-w-4xl">
              <div className="space-y-2 mb-16 opacity-100">
                <Link 
                  to="/" 
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-6xl md:text-8xl hover:opacity-60 transition-opacity"
                >
                  Home
                </Link>
                <Link 
                  to="/work" 
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-6xl md:text-8xl hover:opacity-60 transition-opacity"
                >
                  Work
                </Link>
                <Link 
                  to="/about" 
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-6xl md:text-8xl hover:opacity-60 transition-opacity"
                >
                  About
                </Link>
                <Link 
                  to="/contact" 
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-6xl md:text-8xl hover:opacity-60 transition-opacity"
                >
                  Contact
                </Link>
              </div>

              <div className="opacity-100">
                <h4 className="text-sm mb-4 text-muted">Socials</h4>
                <div className="space-y-2 text-sm">
                  <a href="#" className="block hover:opacity-60 transition-opacity">Instagram</a>
                  <a href="#" className="block hover:opacity-60 transition-opacity">Twitter</a>
                  <a href="#" className="block hover:opacity-60 transition-opacity">LinkedIn</a>
                  <a href="#" className="block hover:opacity-60 transition-opacity">GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};