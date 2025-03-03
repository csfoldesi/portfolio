import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";
import { MobileSidebar } from "./mobile-sidebar";

const Header = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky pl-2 top-0 z-50 w-full border-b backdrop-blur">
      <div className="container flex h-14 items-center">
        <MobileSidebar />
        <a className="mr-6 flex items-center space-x-2" href="/">
          <span className="font-bold sm:inline-block">Csaba.Földesi</span>
        </a>
        <div className="mr-4 hidden md:flex ml-4">
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <a href="#about" className="transition-colors" onClick={(e) => smoothScroll(e, "about")}>
              About
            </a>
            <a href="#projects" className="transition-colors" onClick={(e) => smoothScroll(e, "projects")}>
              Projects
            </a>
            <a href="#projects" className="transition-colors" onClick={(e) => smoothScroll(e, "tech-stack")}>
              Tech Stack
            </a>
            <a href="#contact" className="transition-colors" onClick={(e) => smoothScroll(e, "contact")}>
              Contact
            </a>
          </nav>
        </div>
        <Button variant="destructive" className="ml-auto">
          Resume
        </Button>
        <Button variant="ghost" onClick={toggleTheme} className="ml-4 mr-4">
          {theme === "light" ? <Moon /> : <Sun />}
        </Button>
      </div>
    </header>
  );
};

export default Header;
