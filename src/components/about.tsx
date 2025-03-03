import { Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { SiGithub } from "@icons-pack/react-simple-icons";

const About = () => {
  return (
    <section id="about" className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-primary">
              Full Stack Developer
            </h1>
            <p className="mx-auto max-w-[700px]">
              Building digital experiences with modern technologies. Focused on creating elegant solutions to complex
              problems.
            </p>
          </div>
          <div className="space-x-4">
            <a href="https://github.com/csfoldesi" target="_blank">
              <Button variant="outline" size="icon" className="cursor-pointer">
                <SiGithub className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/csfoldesi" target="_blank">
              <Button variant="outline" size="icon" className="cursor-pointer">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </a>
            <a href="mailto:hello@example.com">
              <Button variant="outline" size="icon" className="cursor-pointer">
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
