import { GlassButton } from "@/components/GlassButton";
import { Mail, Instagram, ExternalLink, Youtube } from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "jascore.aep@gmail.com",
    href: "mailto:jascore.aep@gmail.com",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@jascore.aep",
    href: "https://instagram.com/jascore.aep",
  },
  {
    icon: ExternalLink,
    label: "Fiverr",
    value: "View Gig",
    href: "https://www.fiverr.com/s/99ZEZ4j",
  },
];

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="section-container relative min-h-screen"
    >
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        {/* Section Header */}
        <p className="text-muted-foreground text-sm font-medium tracking-widest uppercase mb-4">
          Let's Connect
        </p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6" style={{ fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif" }}>
          Get in Touch
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-16">
          Ready to bring your vision to life? Let's create something extraordinary together.
        </p>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card group hover:border-muted-foreground/30 transition-all duration-500 text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center mx-auto mb-4 group-hover:bg-muted-foreground/10 transition-colors duration-500">
                <link.icon className="w-7 h-7 text-muted-foreground" />
              </div>
              <p className="text-sm text-muted-foreground mb-1">{link.label}</p>
              <p className="text-lg font-medium text-foreground">{link.value}</p>
            </a>
          ))}
        </div>

        {/* YouTube Promo Box */}
        <a
          href="https://www.youtube.com/@Jasmeet_ae"
          target="_blank"
          rel="noopener noreferrer"
          className="glass-card group hover:border-muted-foreground/30 transition-all duration-500 flex items-center gap-4 max-w-md mx-auto"
        >
          <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center shrink-0 group-hover:bg-red-500/20 transition-colors duration-500">
            <Youtube className="w-6 h-6 text-red-500" />
          </div>
          <div className="text-left">
            <p className="text-sm text-muted-foreground">Need other types of videos?</p>
            <p className="text-base font-medium text-foreground">Check out my YouTube for more!</p>
          </div>
        </a>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-border/30">
          <p className="text-sm text-muted-foreground">
            © 2025 Jascore.aep. Crafted with precision.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
