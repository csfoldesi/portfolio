import { ChevronLeft, ChevronRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "./ui/dialog";
import { useState } from "react";

interface ThumbnailProps {
  url: string | null | undefined;
  imageList: string[];
}

export const Thumbnail = ({ url, imageList }: ThumbnailProps) => {
  const [open, setOpen] = useState(false);

  if (!url) return null;

  const Overlay = () => (
    <div className="absolute inset-0 z-10 pointer-events-none flex items-center justify-between opacity-0 group-hover:opacity-100 transitiopn-all duration-300">
      <div className="bg-white/70 rounded-full p-2">
        <ChevronLeft className="h-6 w-6 text-gray-800" />
      </div>
      <div className="bg-white/70 rounded-full p-2">
        <ChevronRight className="h-6 w-6 text-gray-800" />
      </div>
    </div>
  );

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <Carousel opts={{ loop: true }}>
          <CarouselContent>
            {imageList.map((image, index) => (
              <CarouselItem key={index}>
                <img
                  src={image || "/placeholder.svg"}
                  alt="Screenshot"
                  className="object-cover transition-transform hover:scale-105"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <Overlay />
        </Carousel>
      </DialogTrigger>
      <DialogContent className="min-w-full max-w-full h-screen w-screen border-none bg-transparent flex items-center justify-center">
        <DialogTitle />
        <DialogDescription />
        <Carousel opts={{ loop: true }} className="w-full">
          <CarouselContent onClick={() => setOpen(false)}>
            {imageList.map((image, index) => (
              <CarouselItem key={index} className="flex items-center justify-center">
                <img src={image || "/placeholder.svg"} alt="Screenshot" className="object-cover transition-transform" />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0" />
          <CarouselNext className="right-0" />
        </Carousel>
      </DialogContent>
    </Dialog>
  );
};
