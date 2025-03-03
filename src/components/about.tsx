import { Linkedin } from "lucide-react";
import { Button } from "./ui/button";
import { SiGithub } from "@icons-pack/react-simple-icons";

const About = () => {
  return (
    <section id="about" className="py-12 md:py-12 lg:py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-primary">
              Full Stack Developer
            </h1>
            <div className="mx-auto max-w-[800px] m-12">
              <p>
                A highly skilled Full Stack Developer with a passion for continuous learning and exploring new
                technologies.
              </p>
              <p>
                With expertise in .NET Core, React, TypeScript, and Next.js, thrives in creating simple, intuitive
                applications.
              </p>
              <p>
                Curiosity about emerging trends and commitment to staying up-to-date with the latest advancements enable
                the delivery of innovative solutions and seamless user experiences. Dedicated to leveraging skills and
                knowledge to drive impactful results in dynamic and evolving environments.
              </p>
            </div>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
