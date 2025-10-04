import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLocomotiveScroll } from '@/hooks/useLocomotiveScroll';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const { scrollRef } = useLocomotiveScroll();
  const heroRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation - immediate
      const heroTitle = heroRef.current?.querySelectorAll('.hero-char');
      gsap.fromTo(heroTitle,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.015,
          ease: 'power3.out',
          delay: 0.2,
        }
      );

      gsap.fromTo('.hero-subtitle',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          delay: 0.5,
        }
      );

      // Form animation - scroll triggered
      gsap.fromTo(formRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 80%',
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const splitText = (text: string) => {
    return text.split('').map((char, i) => (
      <span key={i} className="hero-char inline-block opacity-100">
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast.success('Message sent! I\'ll get back to you soon.');
    
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div ref={scrollRef} data-scroll-container className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section ref={heroRef} data-scroll-section className="min-h-screen flex items-center justify-center px-8 pt-32">
        <div className="max-w-[1800px] w-full">
          <h1 className="text-[15vw] font-light tracking-tighter leading-[0.85] mb-16 text-black opacity-100">
            {splitText('Get in Touch')}
          </h1>
          <p className="hero-subtitle text-2xl md:text-4xl lg:text-5xl font-light leading-relaxed tracking-tight text-gray-600 max-w-4xl opacity-100">
            Have a project in mind? Let's discuss how we can work together to bring your vision to life.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section data-scroll-section className="py-32 px-8">
        <div className="max-w-[1200px] mx-auto">
          <div ref={formRef} className="max-w-3xl opacity-100">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium text-black mb-3 block opacity-100">
                    Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="text-lg py-6 border-black/20 focus:border-black text-black opacity-100"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-black mb-3 block opacity-100">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="text-lg py-6 border-black/20 focus:border-black text-black opacity-100"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="message" className="text-sm font-medium text-black mb-3 block opacity-100">
                  Message *
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="text-lg min-h-[200px] border-black/20 focus:border-black text-black opacity-100"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full md:w-auto px-16 py-6 text-lg bg-black hover:bg-black/80 text-white opacity-100"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>

            {/* Contact Info */}
            <div className="mt-32 pt-16 border-t border-black/10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-sm uppercase tracking-wider mb-4 text-gray-400 opacity-100">Email</h3>
                  <a href="mailto:hello@clou.ch" className="text-2xl font-light text-black hover:opacity-50 transition-opacity opacity-100">
                    hello@clou.ch
                  </a>
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-wider mb-4 text-gray-400 opacity-100">Social</h3>
                  <div className="space-y-2">
                    <a href="#" className="block text-xl font-light text-black hover:opacity-50 transition-opacity opacity-100">
                      Instagram
                    </a>
                    <a href="#" className="block text-xl font-light text-black hover:opacity-50 transition-opacity opacity-100">
                      LinkedIn
                    </a>
                    <a href="#" className="block text-xl font-light text-black hover:opacity-50 transition-opacity opacity-100">
                      Twitter
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;