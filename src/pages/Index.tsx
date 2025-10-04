import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

gsap.registerPlugin(ScrollTrigger);

const greetings = [
  "Hello", "Bonjour", "स्वागत हे", "Ciao", 
  "Olá", "おい", "Hallå", "Guten tag", "Hallo"
];

const projects = [
  {
    title: "TWICE",
    service: "Interaction & Development",
    year: "2024",
  },
  {
    title: "The Damai",
    service: "Design & Development",
    year: "2024",
  },
  {
    title: "FABRIC™",
    service: "Design & Development",
    year: "2023",
  },
  {
    title: "Aanstekelijk",
    service: "Design & Development",
    year: "2023",
  },
];

export const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const greetingsRef = useRef<(HTMLHeadingElement | null)[]>([]);
  const taglineRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const projectsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Greetings animation
      greetingsRef.current.forEach((greeting, index) => {
        if (greeting) {
          gsap.fromTo(
            greeting,
            { opacity: 0, y: 30 },
            { 
              opacity: 1, 
              y: 0, 
              duration: 0.8, 
              delay: index * 0.1,
              ease: "power2.out" 
            }
          );
        }
      });

      // Tagline and description
      gsap.fromTo(
        [taglineRef.current, descRef.current],
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          delay: 1,
          stagger: 0.2,
          ease: "power2.out" 
        }
      );

      // Projects scroll animation
      projectsRef.current.forEach((project) => {
        if (project) {
          gsap.fromTo(
            project,
            { opacity: 0, y: 60 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              scrollTrigger: {
                trigger: project,
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
      <section ref={heroRef} className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-5xl w-full">
          {/* Multi-language greetings */}
          <div className="mb-20 opacity-100">
            {greetings.map((greeting, index) => (
              <h1 
                key={index}
                ref={(el) => (greetingsRef.current[index] = el)}
                className="text-5xl md:text-7xl mb-2 opacity-100"
              >
                {greeting}
              </h1>
            ))}
          </div>

          {/* Main tagline */}
          <h2 
            ref={taglineRef}
            className="text-3xl md:text-5xl leading-tight mb-8 opacity-100"
          >
            Helping brands to stand out in the digital era. Together we will set the new status quo. No nonsense, always on the cutting edge.
          </h2>

          {/* Description */}
          <p 
            ref={descRef}
            className="text-lg md:text-xl text-muted max-w-3xl opacity-100"
          >
            The combination of my passion for design, code & interaction positions me in a unique place in the web design world.
          </p>
        </div>
      </section>

      {/* Recent Work Section */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-sm mb-12 text-muted opacity-100">Recent work</h3>
          
          <div className="space-y-6">
            {projects.map((project, index) => (
              <div
                key={index}
                ref={(el) => (projectsRef.current[index] = el)}
                className="border-t border-border pt-6 opacity-100"
              >
                <a 
                  href="/work"
                  className="group block"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="opacity-100">
                      <h4 className="text-3xl md:text-5xl mb-2 group-hover:opacity-60 transition-opacity opacity-100">
                        {project.title}
                      </h4>
                      <p className="text-sm text-muted opacity-100">{project.service}</p>
                    </div>
                    <div className="text-sm text-muted opacity-100">{project.year}</div>
                  </div>
                </a>
              </div>
            ))}
          </div>

          <div className="mt-12 opacity-100">
            <a 
              href="/work" 
              className="text-sm border-b border-foreground hover:opacity-60 transition-opacity inline-block"
            >
              More work
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;