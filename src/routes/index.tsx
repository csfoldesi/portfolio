import { createFileRoute } from "@tanstack/react-router";
import About from "../components/about";
import Projects from "../components/projects";
import TechStack from "../components/tech-stack";
import Footer from "../components/footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="flex w-full flex-col">
      <About />
      <Projects />
      <section id="tech-stack" className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center text-primary">
            Tech Stack
          </h2>
          <TechStack />
        </div>
      </section>
      <Footer />
    </div>
  );
}
