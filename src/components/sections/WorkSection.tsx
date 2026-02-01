import VideoCard from "@/components/VideoCard";

const WorkSection = () => {
  return (
    <section
      id="work"
      className="section-container relative py-32"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-accent/8 rounded-full blur-[100px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
            Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" style={{ fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif" }}>
            Selected Work
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of motion graphics, UI animations, and brand commercials.
          </p>
        </div>

        {/* SaaS Work Section */}
        <div className="mb-16">
          <h3 className="text-xl md:text-2xl font-semibold text-muted-foreground mb-6 text-center">
            SaaS Work
          </h3>
          <div className="max-w-4xl mx-auto">
            <VideoCard
              src="/videos/chatgpt-sfx.mp4"
              title="ChatGPT SFX"
              description="Motion graphics for AI interface"
              aspectRatio="16/9"
            />
          </div>
        </div>

        {/* Apple Style Showcase Section */}
        <div>
          <h3 className="text-xl md:text-2xl font-semibold text-muted-foreground mb-6 text-center">
            Apple Style Showcase
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <VideoCard
              src="/videos/wise-ad.mp4"
              title="Wise Commercial"
              description="Concept advertisement for Wise"
              aspectRatio="1/1"
            />
            <VideoCard
              src="/videos/uber-ad.mp4"
              title="Uber Commercial"
              description="Uber app showcase"
              aspectRatio="1/1"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
