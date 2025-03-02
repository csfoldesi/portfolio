import { SiGithub } from "@icons-pack/react-simple-icons";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Thumbnail } from "./thumbnail";

interface ProjectCardProps {
  title: string;
  description: string;
  imageList: string[];
  githubUrl: string;
  demoUrl?: string;
  tags: string[];
}

export default function ProjectCard({ title, description, imageList, githubUrl, tags }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative flex">
        <Card>
          <CardContent className="flex items-center justify-center p-6 cursor-grab group">
            <Thumbnail url={imageList[0]} imageList={imageList} />
          </CardContent>
        </Card>
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-xl mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10">
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <a href={githubUrl} target="_blank" className="inline-flex items-center gap-2 text-sm hover:underline">
          <SiGithub className="h-4 w-4" />
          View on GitHub
        </a>
      </CardFooter>
    </Card>
  );
}
