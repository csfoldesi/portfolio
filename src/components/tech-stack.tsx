import { Card } from "./ui/card";

const technologies = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "TailwindCSS", "shadcn/ui", "Redux"],
  },
  {
    category: "Backend",
    skills: [".NET Core", "ASP.NET", "MS SQL", "PostgreSQL", "Entity Framework", "RESTful API"],
  },
  {
    category: "DevOps",
    skills: ["Docker", "AWS", "CI/CD", "Git", "Azure"],
  },
  {
    category: "Tools",
    skills: ["Visual Studio", "VS Code", "Postman", "GitHub"],
  },
];

export default function TechStack() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {technologies.map((tech) => (
        <Card key={tech.category} className="p-6">
          <h3 className="text-lg font-semibold mb-4">{tech.category}</h3>
          <div className="flex flex-wrap gap-2">
            {tech.skills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-sm font-medium ring-1 ring-inset text-muted-foreground">
                {skill}
              </span>
            ))}
          </div>
        </Card>
      ))}
    </div>
  );
}
