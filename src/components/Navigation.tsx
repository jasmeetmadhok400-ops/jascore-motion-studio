import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";

const navItems = [
  { label: "Intro", href: "#intro" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

const Navigation = () => {
  const { theme, toggleTheme } = useTheme();

  const handleClick = (href: string) => {
    const element = document.getElementById(href.slice(1));
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo on the left */}
        <span 
          className="text-lg font-bold text-foreground"
          style={{ fontFamily: "'Whyte Inktrap', 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif" }}
        >
          Jascore
        </span>

        {/* Nav links in center */}
        <div className="flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleClick(item.href)}
              className={cn(
                "text-sm font-medium text-foreground hover:text-muted-foreground transition-colors duration-200"
              )}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Theme toggle on the right */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-muted transition-colors duration-200"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? (
            <Sun className="w-5 h-5 text-foreground" />
          ) : (
            <Moon className="w-5 h-5 text-foreground" />
          )}
        </button>
      </div>
      <div className="h-[1px] bg-border" />
    </nav>
  );
};

export default Navigation;
