import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

gsap.registerPlugin(ScrollTrigger);

export const About = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation - immediate
      if (heroRef.current) {
        gsap.fromTo(
          heroRef.current.querySelectorAll("h1, p"),
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power2.out" }
        );
      }

      // Content animation - on scroll
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: contentRef.current,
              start: "top 80%",
            },
          }
        );
      }

      // Skills animation - on scroll
      if (skillsRef.current) {
        gsap.fromTo(
          skillsRef.current.querySelectorAll(".skill-item"),
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            scrollTrigger: {
              trigger: skillsRef.current,
              start: "top 80%",
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  const skills = [
    "React", "TypeScript", "Next.js", "Tailwind CSS",
    "GSAP", "Three.js", "Node.js", "UI/UX Design"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section ref={heroRef} className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl mb-8 opacity-100">About Me</h1>
          <p className="text-xl text-muted opacity-100">
            I'm a creative developer passionate about building exceptional digital experiences.
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div ref={contentRef} className="prose prose-lg opacity-100">
            <p className="text-lg mb-6 opacity-100">
              With over 5 years of experience in web development and design, I specialize in creating
              beautiful, performant, and user-friendly digital products. My work combines technical
              expertise with creative vision to deliver solutions that not only look great but also
              work flawlessly.
            </p>
            <p className="text-lg text-muted opacity-100">
              I believe in the power of good design and clean code. Every project is an opportunity
              to push boundaries and create something meaningful.
            </p>
          </div>
        </div>
      </section>

      <section ref={skillsRef} className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl mb-12 opacity-100">Skills & Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="skill-item p-4 border border-border rounded-lg text-center opacity-100"
              >
                <span className="opacity-100">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;