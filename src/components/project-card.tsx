import { SiGithub } from "@icons-pack/react-simple-icons";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Thumbnail } from "./thumbnail";
import { TvMinimalIcon } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  imageList: string[];
  githubUrl: string;
  demoUrl?: string;
  tags: string[];
}

export default function ProjectCard({ title, description, imageList, githubUrl, demoUrl, tags }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden flex flex-col h-full">
      <div className="relative flex">
        <Card>
          <CardContent className="flex items-center justify-center p-6 cursor-grab group">
            <Thumbnail url={imageList[0]} imageList={imageList} />
          </CardContent>
        </Card>
      </div>
      <CardContent className="p-4 flex-1">
        <h3 className="font-semibold text-xl mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-sm font-medium ring-1 ring-inset text-muted-foreground">
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex flex-row">
        <a href={githubUrl} target="_blank" className="inline-flex items-center gap-2 text-sm hover:underline mr-5">
          <SiGithub className="h-4 w-4" />
          View on GitHub
        </a>
        {demoUrl && (
          <a href={demoUrl} target="_blank" className="inline-flex items-center gap-2 text-sm hover:underline">
            <TvMinimalIcon className="h-4 w-4" />
            Live Demo
          </a>
        )}
      </CardFooter>
    </Card>
  );
}
