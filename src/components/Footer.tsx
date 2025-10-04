const Footer = () => {
  return (
    <footer className="px-8 py-12 border-t border-black/10">
      <div className="max-w-[1800px] mx-auto flex justify-between items-center">
        <div className="text-sm opacity-50">© 2024 Clou</div>
        <div className="flex gap-8 text-sm">
          <a href="#" className="hover:opacity-50 transition-opacity">Instagram</a>
          <a href="#" className="hover:opacity-50 transition-opacity">LinkedIn</a>
          <a href="#" className="hover:opacity-50 transition-opacity">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;