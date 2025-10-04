import { useLocomotiveScroll } from '@/hooks/useLocomotiveScroll';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import { Services } from '@/components/Services';
import { Contact } from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  const { scrollRef } = useLocomotiveScroll();

  return (
    <div ref={scrollRef} data-scroll-container className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;