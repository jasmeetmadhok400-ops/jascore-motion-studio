import { GlassButton } from "@/components/GlassButton";
import { Play } from "lucide-react";
import jascoreLogo from "@/assets/jascore-logo.png";

const IntroSection = () => {
  const scrollToWork = () => {
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="intro"
      className="section-container relative min-h-screen"
    >
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-[100px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/10 rounded-full blur-[80px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Logo */}
        <div className="mb-8 animate-fade-up">
          <div className="inline-flex items-center justify-center w-40 h-40 rounded-full overflow-hidden mb-6 ring-2 ring-border/50 ring-offset-4 ring-offset-background">
            <img src={jascoreLogo} alt="Jascore Logo" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4 animate-fade-up-delay-1">
          <span className="text-gradient">Jascore</span>
          <span className="text-gradient">.aep</span>
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-muted-foreground font-semibold mb-8 animate-fade-up-delay-2">
          Apple Style UI/UX Motion Graphics
        </p>

        {/* Description */}
        <p className="text-base md:text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-up-delay-3">
          Crafting seamless motion experiences that blend elegance with functionality. 
          Specializing in After Effects, Cinema 4D, and Blender to bring brands to life 
          through cinematic visuals and fluid animations.
        </p>

        {/* Software Tags */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-up-delay-3">
          {["After Effects"].map((software) => (
            <span
              key={software}
              className="px-4 py-2 rounded-full text-sm text-muted-foreground border border-border/50 bg-secondary/30"
            >
              {software}
            </span>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up-delay-3">
          <GlassButton variant="accent" size="lg" onClick={scrollToWork}>
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
