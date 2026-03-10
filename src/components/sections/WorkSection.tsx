import VideoCard from "@/components/VideoCard";

const WorkSection = () => {
  return (
    <section
      id="work"
      className="section-container relative py-32"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-muted-foreground text-sm font-medium tracking-widest uppercase mb-4">
            Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6" style={{ fontFamily: "'SF UI Text', sans-serif", fontWeight: 700 }}>
            Selected Work
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of motion graphics, UI animations, and brand commercials.
          </p>
        </div>

        {/* SaaS Work Section */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center" style={{ fontFamily: "'SF UI Text', sans-serif", fontWeight: 500 }}>
            SaaS Work
          </h3>
          <div className="flex flex-col md:flex-row gap-6 max-w-5xl mx-auto items-stretch">
            <div className="md:w-[65%]">
              <VideoCard
                src="/videos/chatgpt-sfx.mp4"
                title="ChatGPT"
                description="Concept motion design work for ChatGPT."
                aspectRatio="16/9"
              />
            </div>
            <div className="md:w-[35%]">
              <VideoCard
                src="/videos/instagram-sfx.mp4"
                title="Instagram"
                description="Spec commercial for Instagram."
                aspectRatio="9/16"
                className="h-full"
              />
            </div>
          </div>
        </div>

        {/* Apple Style Showcase Section */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center" style={{ fontFamily: "'SF UI Text', sans-serif", fontWeight: 500 }}>
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
              whiteOverlay
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
