import Navigation from "@/components/Navigation";
import IntroSection from "@/components/sections/IntroSection";
import ProcessSection from "@/components/sections/ProcessSection";
import WorkSection from "@/components/sections/WorkSection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <main className="relative">
      {/* Gradient Background */}
      <div className="gradient-bg" />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Sections - Work now comes before Process */}
      <IntroSection />
      <WorkSection />
      <ProcessSection />
      <ContactSection />
    </main>
  );
};

export default Index;
