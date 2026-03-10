import { GlassButton } from "@/components/GlassButton";
import { Play } from "lucide-react";
import jascoreLogo from "@/assets/jascore-logo.png";

const IntroSection = () => {
  const scrollToWork = () => {
    document.getElementById("work")?.scrollIntoView({
      behavior: "smooth"
    });
  };
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <section id="intro" className="section-container relative min-h-screen pt-20">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Logo */}
        <div className="mb-8 animate-fade-up">
          <div className="inline-flex items-center justify-center w-40 h-40 rounded-full overflow-hidden mb-6 ring-2 ring-border ring-offset-4 ring-offset-background">
            <img 
              src={jascoreLogo} 
              alt="Jascore Logo" 
              className="w-full h-full object-cover"
              loading="eager"
              fetchPriority="high"
            />
          </div>
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 animate-fade-up-delay-1 text-foreground" style={{ fontFamily: "'SF UI Text', sans-serif", fontWeight: 700 }}>
          <span>Jascore</span>
          <span>.aep</span>
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 animate-fade-up-delay-2" style={{ fontFamily: "'SF UI Text', sans-serif", fontWeight: 500 }}>
          Apple Style UI/UX Motion Graphics
        </p>

        {/* Description */}
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-up-delay-3">
          Crafting seamless motion experiences that blend elegance with functionality. Specializing in After Effects, to bring brands to life through cinematic visuals and fluid animations.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up-delay-3">
          <GlassButton size="lg" onClick={scrollToWork}>
            <Play className="w-5 h-5" />
            View My Work
          </GlassButton>
          <GlassButton size="lg" onClick={scrollToContact}>
            Get in Touch
          </GlassButton>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
