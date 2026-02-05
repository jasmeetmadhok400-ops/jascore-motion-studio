import { cn } from "@/lib/utils";

const navItems = [
  { label: "Intro", href: "#intro" },
  { label: "Process", href: "#process" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

const Navigation = () => {
  const handleClick = (href: string) => {
    const element = document.getElementById(href.slice(1));
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background">
      <div className="flex items-center justify-center gap-8 py-4">
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
      <div className="h-[1px] bg-border" />
    </nav>
  );
};

export default Navigation;
