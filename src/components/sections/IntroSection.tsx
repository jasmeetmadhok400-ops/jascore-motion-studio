import { GlassButton } from "@/components/GlassButton";
import { ArrowDown, Play } from "lucide-react";

const IntroSection = () => {
  const scrollToWork = () => {
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
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
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl glass mb-6">
            <span className="text-3xl font-bold text-gradient-purple">J</span>
          </div>
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4 animate-fade-up-delay-1">
          <span className="text-gradient">Jascore</span>
          <span className="text-muted-foreground text-2xl md:text-3xl lg:text-4xl font-light">.aep</span>
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-muted-foreground font-light mb-8 animate-fade-up-delay-2">
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
          {["After Effects", "Cinema 4D", "Blender", "Premiere Pro"].map((software) => (
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
          <GlassButton size="lg">
            Get in Touch
          </GlassButton>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-fade-up-delay-3">
          <div className="scroll-indicator" />
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
