import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { category: "Design", items: ["UI/UX Design", "Web Design", "Interaction Design", "Branding"] },
  { category: "Development", items: ["React", "TypeScript", "GSAP", "Tailwind CSS", "Next.js"] },
  { category: "Tools", items: ["Figma", "Webflow", "VS Code", "Git"] },
];

export const About = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      if (heroRef.current) {
        gsap.fromTo(
          heroRef.current.querySelectorAll("h1, p"),
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power2.out" }
        );
      }

      // Content animation
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

      // Skills animation
      skillsRef.current.forEach((skill, index) => {
        if (skill) {
          gsap.fromTo(
            skill,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              delay: index * 0.1,
              scrollTrigger: {
                trigger: skill,
                start: "top 85%",
              },
            }
          );
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-8xl mb-8 opacity-100">About</h1>
          <p className="text-xl md:text-2xl text-muted max-w-3xl opacity-100">
            Designer and developer, focused on creating memorable digital experiences.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div ref={contentRef} className="prose prose-lg max-w-3xl opacity-100">
            <p className="text-lg leading-relaxed mb-6 opacity-100">
              I'm a freelance designer and developer based in the Netherlands, specializing in creating 
              unique digital experiences that help brands stand out in the digital era.
            </p>
            <p className="text-lg leading-relaxed mb-6 opacity-100">
              With a passion for both design and code, I bridge the gap between aesthetics and 
              functionality. My work focuses on interaction design, smooth animations, and clean, 
              maintainable code.
            </p>
            <p className="text-lg leading-relaxed opacity-100">
              I believe in creating digital products that are not only visually stunning but also 
              intuitive and performant. Every project is an opportunity to push boundaries and 
              deliver exceptional results.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-sm mb-12 text-muted opacity-100">Skills & Expertise</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {skills.map((skill, index) => (
              <div
                key={index}
                ref={(el) => (skillsRef.current[index] = el)}
                className="opacity-100"
              >
                <h3 className="text-2xl mb-6 opacity-100">{skill.category}</h3>
                <ul className="space-y-3 opacity-100">
                  {skill.items.map((item, i) => (
                    <li key={i} className="text-muted text-sm opacity-100">
                      {item}
                    </li>
                  ))}
                </ul>
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