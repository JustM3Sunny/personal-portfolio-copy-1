import { useState } from 'react';
import { Linkedin, Twitter, Instagram, Heart } from 'lucide-react';

const Footer = () => {
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);
  const [likes, setLikes] = useState(0);

  const socialLinks = [
    { name: 'instagram', icon: Instagram, url: 'https://instagram.com', color: 'hover:text-pink-500' },
    { name: 'linkedin', icon: Linkedin, url: 'https://linkedin.com', color: 'hover:text-blue-500' },
    { name: 'twitter', icon: Twitter, url: 'https://twitter.com', color: 'hover:text-sky-400' },
  ];

  return (
    <footer data-scroll-section className="px-8 py-12 border-t border-black/10">
      <div className="max-w-[1800px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Copyright with Playful Heart */}
        <div className="flex items-center gap-2 text-sm opacity-50">
          <span>© 2024 shanniiii</span>
          <button
            onClick={() => setLikes(likes + 1)}
            className="group relative"
          >
            <Heart 
              className={`w-4 h-4 transition-all duration-300 ${likes > 0 ? 'fill-red-500 text-red-500 scale-125' : 'hover:fill-red-500 hover:text-red-500 hover:scale-125'}`}
            />
            {likes > 0 && (
              <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center animate-bounce">
                {likes}
              </span>
            )}
          </button>
        </div>

        {/* Social Links with Playful Animations */}
        <div className="flex gap-6">
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
                  relative text-sm transition-all duration-300
                  ${social.color}
                  ${isHovered ? 'scale-125 -rotate-12' : 'scale-100 rotate-0'}
                `}
                onMouseEnter={() => setHoveredSocial(social.name)}
                onMouseLeave={() => setHoveredSocial(null)}
              >
                <div className="flex items-center gap-2">
                  <Icon className={`w-5 h-5 transition-all duration-300 ${isHovered ? 'animate-bounce' : ''}`} />
                  <span className="hidden md:inline capitalize">{social.name}</span>
                </div>
                {/* Ripple Effect */}
                {isHovered && (
                  <span className="absolute inset-0 rounded-full border-2 border-current animate-ping opacity-75" />
                )}
              </a>
            );
          })}
        </div>

        {/* Email Link */}
        <a
          href="mailto:justaskcoding76@gmail.com"
          className="text-sm opacity-50 hover:opacity-100 hover:scale-110 transition-all duration-300"
        >
          justaskcoding76@gmail.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;