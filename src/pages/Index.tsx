import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import { Services } from '@/components/Services';
import { Contact } from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
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