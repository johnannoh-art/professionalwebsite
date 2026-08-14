import Hero from "@/components/Hero";
import ProofBar from "@/components/ProofBar";
import WhatIBring from "@/components/WhatIBring";
import HowIWork from "@/components/HowIWork";
import About from "@/components/About";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import BeyondWork from "@/components/BeyondWork";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProofBar />
      <WhatIBring />
      <HowIWork />
      <About />
      <CaseStudies />
      <Testimonials />
      <BeyondWork />
      <Contact />
      <Footer />
    </main>
  );
}
