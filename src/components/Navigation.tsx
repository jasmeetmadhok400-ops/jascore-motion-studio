import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Intro", href: "#intro" },
  { label: "Process", href: "#process" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Determine active section
      const sections = navItems.map((item) => item.href.slice(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (href: string) => {
    const element = document.getElementById(href.slice(1));
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={cn(
        "fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500",
        isScrolled ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
      )}
    >
      <div className="glass rounded-full px-2 py-2 flex items-center gap-1 relative">
        {/* Animated pill background */}
        <div
          className="absolute h-[calc(100%-16px)] rounded-full bg-foreground/10 transition-all duration-300 ease-out"
          style={{
            width: `${navItems.find(item => item.href.slice(1) === activeSection)?.label.length ? 'auto' : '0px'}`,
            left: `${8 + navItems.findIndex(item => item.href.slice(1) === activeSection) * (64 + 4)}px`,
            minWidth: '56px',
            padding: '0 16px',
          }}
          ref={(el) => {
            if (el) {
              const activeIndex = navItems.findIndex(item => item.href.slice(1) === activeSection);
              const buttons = el.parentElement?.querySelectorAll('button');
              if (buttons && buttons[activeIndex]) {
                const btn = buttons[activeIndex] as HTMLButtonElement;
                el.style.width = `${btn.offsetWidth}px`;
                el.style.left = `${btn.offsetLeft}px`;
              }
            }
          }}
        />
        {navItems.map((item) => (
          <button
            key={item.label}
            onClick={() => handleClick(item.href)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 relative z-10",
              activeSection === item.href.slice(1)
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
