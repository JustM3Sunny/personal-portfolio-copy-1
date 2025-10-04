import { Link, useLocation } from "react-router-dom";

export const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-medium opacity-100">
            Portfolio
          </Link>
          
          <div className="flex gap-8 opacity-100">
            <Link 
              to="/work" 
              className={`text-sm transition-colors hover:text-foreground ${
                isActive('/work') ? 'text-foreground' : 'text-muted'
              }`}
            >
              Work
            </Link>
            <Link 
              to="/about" 
              className={`text-sm transition-colors hover:text-foreground ${
                isActive('/about') ? 'text-foreground' : 'text-muted'
              }`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`text-sm transition-colors hover:text-foreground ${
                isActive('/contact') ? 'text-foreground' : 'text-muted'
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};