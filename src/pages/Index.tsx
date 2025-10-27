import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import UseCases from "@/components/UseCases";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import About from "@/components/About";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Banner de fundo com animação e overlay */}
      <div aria-hidden className="fixed inset-0 -z-10 pointer-events-none">
        <img
          src="/imfundo.png"
          alt=""
          className="banner-image w-full h-full object-cover animate-kenburns-hq"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-background/45" />
      </div>

      <Hero />
      <Features />
      <HowItWorks />
      <About />
      <UseCases />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
