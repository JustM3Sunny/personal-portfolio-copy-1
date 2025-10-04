export const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border mt-32">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="opacity-100">
            <h3 className="text-sm mb-4 opacity-100">Dennis Snellenberg</h3>
            <p className="text-sm text-muted opacity-100">
              Freelance Designer & Developer
            </p>
          </div>
          
          <div className="opacity-100">
            <h4 className="text-sm mb-4 opacity-100">Navigation</h4>
            <ul className="space-y-2 text-sm text-muted opacity-100">
              <li><a href="/" className="hover:text-foreground transition-colors">Home</a></li>
              <li><a href="/work" className="hover:text-foreground transition-colors">Work</a></li>
              <li><a href="/about" className="hover:text-foreground transition-colors">About</a></li>
              <li><a href="/contact" className="hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div className="opacity-100">
            <h4 className="text-sm mb-4 opacity-100">Socials</h4>
            <ul className="space-y-2 text-sm text-muted opacity-100">
              <li><a href="#" className="hover:text-foreground transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">GitHub</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border text-center opacity-100">
          <p className="text-sm text-muted opacity-100">
            © {new Date().getFullYear()} Dennis Snellenberg. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};