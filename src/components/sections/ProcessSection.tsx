import { Lightbulb, Palette, Rocket } from "lucide-react";

const processSteps = [
  {
    icon: Lightbulb,
    number: "01",
    title: "Concept",
    description: "Understanding your vision, brand identity, and project goals to create a solid creative foundation.",
  },
  {
    icon: Palette,
    number: "02",
    title: "Design",
    description: "Crafting storyboards, motion concepts, and visual styles that align perfectly with your brand.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Deliver",
    description: "Producing polished, high-quality animations ready for deployment across all platforms.",
  },
];

const ProcessSection = () => {
  return (
    <section
      id="process"
      className="section-container relative"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
            The Process
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient mb-6">
            How I Work
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A streamlined approach to transform your ideas into captivating motion experiences.
          </p>
        </div>

        {/* Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {processSteps.map((step, index) => (
            <div
              key={step.number}
              className="glass-card group hover:border-accent/20 transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Step Number */}
              <span className="text-6xl font-bold text-accent/10 absolute top-6 right-6 group-hover:text-accent/20 transition-colors duration-500">
                {step.number}
              </span>

              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-500">
                <step.icon className="w-7 h-7 text-accent" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-semibold mb-4 text-foreground">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>

              {/* Bottom Accent Line */}
              <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
