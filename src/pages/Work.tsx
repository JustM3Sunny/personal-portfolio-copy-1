import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A modern e-commerce solution with seamless checkout experience.",
    year: "2024",
  },
  {
    title: "Portfolio Website",
    description: "Creative portfolio showcasing design and development work.",
    year: "2024",
  },
  {
    title: "Dashboard App",
    description: "Analytics dashboard with real-time data visualization.",
    year: "2023",
  },
  {
    title: "Mobile App",
    description: "Cross-platform mobile application for social networking.",
    year: "2023",
  },
];

export const Work = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<(HTMLDivElement | null)[]>([]);

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

      // Projects animation - on scroll
      projectsRef.current.forEach((project, index) => {
        if (project) {
          gsap.fromTo(
            project,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              scrollTrigger: {
                trigger: project,
                start: "top 80%",
              },
            }
          );
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      
      <section ref={heroRef} className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-6xl md:text-7xl mb-8 opacity-100">Selected Work</h1>
          <p className="text-xl text-muted opacity-100">
            A collection of projects I've worked on recently.
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => (projectsRef.current[index] = el)}
              className="group border border-border rounded-2xl p-8 md:p-12 hover:border-foreground transition-colors cursor-pointer opacity-100"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="opacity-100">
                  <h2 className="text-3xl md:text-4xl mb-2 opacity-100">{project.title}</h2>
                  <p className="text-muted opacity-100">{project.description}</p>
                </div>
                <div className="text-sm text-muted opacity-100">{project.year}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Work;