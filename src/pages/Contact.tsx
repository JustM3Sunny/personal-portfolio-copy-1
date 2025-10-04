import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { toast } from "sonner";

export const Contact = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (heroRef.current) {
        gsap.fromTo(
          heroRef.current.querySelectorAll("h1, p, form"),
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power2.out" }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }

    // Simulate form submission
    toast.success("Message sent successfully! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-8xl mb-8 opacity-100">Contact</h1>
          <p className="text-xl md:text-2xl text-muted max-w-3xl mb-16 opacity-100">
            Let's create something amazing together. Get in touch to discuss your project.
          </p>

          {/* Contact Form */}
          <form ref={formRef} onSubmit={handleSubmit} className="max-w-2xl opacity-100">
            <div className="space-y-8">
              <div className="opacity-100">
                <label htmlFor="name" className="block text-sm mb-3 opacity-100">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-border pb-3 text-lg focus:outline-none focus:border-foreground transition-colors opacity-100"
                  placeholder="Your name"
                />
              </div>

              <div className="opacity-100">
                <label htmlFor="email" className="block text-sm mb-3 opacity-100">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-border pb-3 text-lg focus:outline-none focus:border-foreground transition-colors opacity-100"
                  placeholder="your@email.com"
                />
              </div>

              <div className="opacity-100">
                <label htmlFor="message" className="block text-sm mb-3 opacity-100">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full bg-transparent border-b border-border pb-3 text-lg focus:outline-none focus:border-foreground transition-colors resize-none opacity-100"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="px-12 py-4 bg-foreground text-background text-sm hover:opacity-80 transition-opacity opacity-100"
              >
                Send Message
              </button>
            </div>
          </form>

          {/* Contact Info */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-2xl opacity-100">
            <div className="opacity-100">
              <h3 className="text-sm mb-3 text-muted opacity-100">Email</h3>
              <a 
                href="mailto:hello@dennissnellenberg.com" 
                className="text-lg hover:opacity-60 transition-opacity opacity-100"
              >
                hello@dennissnellenberg.com
              </a>
            </div>
            
            <div className="opacity-100">
              <h3 className="text-sm mb-3 text-muted opacity-100">Social</h3>
              <div className="space-y-2 opacity-100">
                <a href="#" className="block text-lg hover:opacity-60 transition-opacity opacity-100">Instagram</a>
                <a href="#" className="block text-lg hover:opacity-60 transition-opacity opacity-100">Twitter</a>
                <a href="#" className="block text-lg hover:opacity-60 transition-opacity opacity-100">LinkedIn</a>
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