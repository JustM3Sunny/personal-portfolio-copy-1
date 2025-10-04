import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Web Development",
    description: "Building responsive and performant web applications with modern technologies.",
  },
  {
    title: "UI/UX Design",
    description: "Creating intuitive and beautiful user interfaces that users love.",
  },
  {
    title: "Animation",
    description: "Adding life to digital products with smooth, meaningful animations.",
  },
];

export const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
          },
        }
      );

      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(
            card,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              delay: index * 0.2,
              scrollTrigger: {
                trigger: card,
                start: "top 80%",
              },
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 ref={titleRef} className="text-5xl md:text-6xl mb-16 text-center opacity-100">
          What I Do
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="p-8 border border-border rounded-2xl hover:border-foreground transition-colors opacity-100"
            >
              <h3 className="text-2xl mb-4 opacity-100">{service.title}</h3>
              <p className="text-muted opacity-100">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};