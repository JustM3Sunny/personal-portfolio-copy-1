import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "TWICE",
    service: "Interaction & Development",
    description: "Building a modern e-commerce platform with seamless user interactions and smooth animations.",
    year: "2024",
  },
  {
    title: "The Damai",
    service: "Design & Development",
    description: "Luxury resort website featuring immersive visuals and elegant design.",
    year: "2024",
  },
  {
    title: "FABRIC™",
    service: "Design & Development",
    description: "Creative agency portfolio with bold typography and interactive elements.",
    year: "2023",
  },
  {
    title: "Aanstekelijk",
    service: "Design & Development",
    description: "Healthcare platform focused on user experience and accessibility.",
    year: "2023",
  },
  {
    title: "Base Create",
    service: "Development",
    description: "Digital studio website with custom animations and smooth transitions.",
    year: "2023",
  },
  {
    title: "AVVR",
    service: "Design & Development",
    description: "Virtual reality experience platform with immersive web design.",
    year: "2023",
  },
  {
    title: "GraphicHunters",
    service: "Design & Development",
    description: "Design community platform featuring creative showcases.",
    year: "2022",
  },
  {
    title: "Future Goals",
    service: "Design & Development",
    description: "Goal-tracking application with intuitive interface design.",
    year: "2022",
  },
];

export const Work = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<(HTMLDivElement | null)[]>([]);

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

      // Projects animation
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
      <section ref={heroRef} className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-8xl mb-8 opacity-100">Work</h1>
          <p className="text-xl md:text-2xl text-muted max-w-3xl opacity-100">
            A collection of selected projects showcasing design and development expertise.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-6">
            {projects.map((project, index) => (
              <div
                key={index}
                ref={(el) => (projectsRef.current[index] = el)}
                className="border-t border-border pt-8 opacity-100"
              >
                <div className="group cursor-pointer">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                    <div className="flex-1 opacity-100">
                      <h2 className="text-4xl md:text-6xl mb-3 group-hover:opacity-60 transition-opacity opacity-100">
                        {project.title}
                      </h2>
                      <p className="text-sm text-muted mb-2 opacity-100">{project.service}</p>
                      <p className="text-base text-muted max-w-2xl opacity-100">
                        {project.description}
                      </p>
                    </div>
                    <div className="text-sm text-muted opacity-100">{project.year}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Work;