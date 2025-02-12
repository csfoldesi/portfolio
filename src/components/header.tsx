import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="sticky pl-2 top-0 z-50 w-full border-b backdrop-blur bg-sky-900 border-sky-200">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex ml-4">
          <a className="mr-6 flex items-center space-x-2" href="/">
            <span className="hidden font-bold sm:inline-block">Csaba.Földesi</span>
          </a>
          <nav className="flex items-center space-x-6 text-sm font-medium text-sky-200">
            <a href="#about" className="transition-colors hover:text-sky-400">
              About
            </a>
            <a href="#projects" className="transition-colors hover:text-sky-400">
              Projects
            </a>
            <a href="#contact" className="transition-colors hover:text-sky-400">
              Contact
            </a>
          </nav>
        </div>
        <Button variant="default" className="ml-auto">
          Resume
        </Button>
      </div>
    </header>
  );
};

export default Header;
