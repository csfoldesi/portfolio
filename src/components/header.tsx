import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

const Header = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="sticky pl-2 top-0 z-50 w-full border-b backdrop-blur">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex ml-4">
          <a className="mr-6 flex items-center space-x-2" href="/">
            <span className="hidden font-bold sm:inline-block">Csaba.Földesi</span>
          </a>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <a href="#about" className="transition-colors">
              About
            </a>
            <a href="#projects" className="transition-colors">
              Projects
            </a>
            <a href="#contact" className="transition-colors">
              Contact
            </a>
          </nav>
        </div>
        <Button variant="destructive" className="ml-auto">
          Resume
        </Button>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" onClick={toggleTheme} className="ml-4">
                {theme === "light" && <Moon />}
                {theme === "dark" && <Sun />}
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Change theme</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </header>
  );
};

export default Header;
