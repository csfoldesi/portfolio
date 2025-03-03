import ProjectCard from "./project-card";

const Projects = () => {
  return (
    <section id="projects" className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center text-primary">
          Projects
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ProjectCard
            title="Learning Management System"
            description="An application designed for the creation, organization, and management of video-centric courses."
            imageList={[
              "/projects/lms/screen1.png",
              "/projects/lms/screen2.png",
              "/projects/lms/screen3.png",
              "/projects/lms/screen4.png",
              "/projects/lms/screen5.png",
              "/projects/lms/screen6.png",
            ]}
            githubUrl="https://github.com/csfoldesi/lms"
            demoUrl="https://lms.appx.hu"
            tags={["Next.js", "Prisma", "PostgreSQL", "React", "Clerk", "Stripe"]}
          />
          <ProjectCard
            title="Slack Clone application"
            description="A real-time messaging application built with .NET core and React."
            imageList={[
              "/projects/slack/screen1.png",
              "/projects/slack/screen2.png",
              "/projects/slack/screen3.png",
              "/projects/slack/screen4.png",
              "/projects/slack/screen5.png",
            ]}
            githubUrl="https://github.com/csfoldesi/slack-dotnet"
            demoUrl="https://slack.appx.hu"
            tags={[".NET Core", "Entity Framework", "React", "TailwindCSS", "react-query"]}
          />
          <ProjectCard
            title="Activity sharing application"
            description="An activity sharing application built with .NET core and React."
            imageList={[
              "/projects/reactivities/screen1.png",
              "/projects/reactivities/screen2.png",
              "/projects/reactivities/screen3.png",
              "/projects/reactivities/screen4.png",
              "/projects/reactivities/screen5.png",
            ]}
            githubUrl="https://github.com/csfoldesi/Reactivities"
            tags={[".NET Core", "Entity Framework", "SignalR", "React", "Semantic UI"]}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
