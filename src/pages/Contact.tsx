import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Header } from "@/components/Header";
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
          heroRef.current.querySelectorAll("h1, p"),
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power2.out" }
        );
      }

      if (formRef.current) {
        gsap.fromTo(
          formRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1, delay: 0.4, ease: "power2.out" }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <section ref={heroRef} className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl mb-8 opacity-100">Get in Touch</h1>
          <p className="text-xl text-muted opacity-100">
            Have a project in mind? Let's talk about it.
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 opacity-100">
            <div className="opacity-100">
              <label htmlFor="name" className="block text-sm mb-2 opacity-100">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-foreground transition-colors opacity-100"
              />
            </div>

            <div className="opacity-100">
              <label htmlFor="email" className="block text-sm mb-2 opacity-100">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-foreground transition-colors opacity-100"
              />
            </div>

            <div className="opacity-100">
              <label htmlFor="message" className="block text-sm mb-2 opacity-100">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-foreground transition-colors resize-none opacity-100"
              />
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 bg-foreground text-background rounded-lg hover:opacity-80 transition-opacity opacity-100"
            >
              Send Message
            </button>
          </form>

          <div className="mt-16 pt-16 border-t border-border opacity-100">
            <h3 className="text-2xl mb-6 opacity-100">Other Ways to Connect</h3>
            <div className="space-y-4 text-muted opacity-100">
              <p className="opacity-100">
                Email: <a href="mailto:hello@example.com" className="text-foreground hover:underline">hello@example.com</a>
              </p>
              <p className="opacity-100">
                Twitter: <a href="#" className="text-foreground hover:underline">@portfolio</a>
              </p>
              <p className="opacity-100">
                LinkedIn: <a href="#" className="text-foreground hover:underline">linkedin.com/in/portfolio</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;