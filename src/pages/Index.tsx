import { useLocomotiveScroll } from '@/hooks/useLocomotiveScroll';
import HeroSection from '@/components/HeroSection';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export const Index = () => {
  useLocomotiveScroll();

  return (
    <div className="bg-white text-black" data-scroll-container>
      <HeroSection />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;