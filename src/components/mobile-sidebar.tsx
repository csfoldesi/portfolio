import { Menu } from "lucide-react";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./ui/sheet";
import { useState } from "react";

export const MobileSidebar = () => {
  const [open, setOpen] = useState(false);

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setOpen(false);

    setTimeout(() => {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }, 300);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="md:hidden pr-4 hover:opacity-75 transition">
        <Menu />
      </SheetTrigger>
      <SheetContent side="left" className="p-0 w-72" onInteractOutside={(e) => e.preventDefault()}>
        <SheetTitle />
        <SheetDescription />
        <div className="p-8 space-y-8">
          <nav className="flex flex-col text-lg/8 font-medium">
            <SheetClose>
              <a href="#about" className="transition-colors" onClick={(e) => handleAnchorClick(e, "about")}>
                About
              </a>
            </SheetClose>
            <SheetClose>
              <a href="#projects" className="transition-colors" onClick={(e) => handleAnchorClick(e, "projects")}>
                Projects
              </a>
            </SheetClose>
            <SheetClose>
              <a href="#projects" className="transition-colors" onClick={(e) => handleAnchorClick(e, "tech-stack")}>
                Tech Stack
              </a>
            </SheetClose>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
};
