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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient mb-6">
            Selected Work
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of motion graphics, UI animations, and brand commercials.
          </p>
        </div>

        {/* Featured Video - 16:9 */}
        <div className="mb-8">
          <VideoCard
            title="Introduction Reel"
            description="A compilation of my best work showcasing UI/UX motion design"
            aspectRatio="16/9"
          />
        </div>

        {/* Two Square Videos - 1:1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <VideoCard
            title="Brand Commercial #1"
            description="Concept advertisement for a tech brand"
            aspectRatio="1/1"
          />
          <VideoCard
            title="Brand Commercial #2"
            description="Concept advertisement for a lifestyle brand"
            aspectRatio="1/1"
          />
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
