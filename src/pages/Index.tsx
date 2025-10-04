import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { Services } from "@/components/Services";
import { Footer } from "@/components/Footer";

export const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <Services />
      <Footer />
    </div>
  );
};

export default Index;