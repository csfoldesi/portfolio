import ProjectCard from "./project-card";

const Projects = () => {
  return (
    <section id="projects" className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">Projects</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ProjectCard
            title="E-commerce Platform"
            description="A full-stack e-commerce platform built with Next.js, Prisma, and Stripe integration."
            image="/placeholder.svg?height=400&width=600"
            link="https://github.com"
            tags={["Next.js", "Prisma", "Stripe"]}
          />
          <ProjectCard
            title="Task Management App"
            description="A real-time task management application with team collaboration features."
            image="/placeholder.svg?height=400&width=600"
            link="https://github.com"
            tags={["React", "Node.js", "Socket.io"]}
          />
          <ProjectCard
            title="AI Chat Interface"
            description="An AI-powered chat interface with natural language processing capabilities."
            image="/placeholder.svg?height=400&width=600"
            link="https://github.com"
            tags={["OpenAI", "Next.js", "TailwindCSS"]}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
