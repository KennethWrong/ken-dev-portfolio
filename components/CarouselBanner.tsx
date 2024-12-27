"use client";

// Autoplay can only be used on the client
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function CarouselBanner({ images = [] }: { images: string[] }) {
  return (
    <main className="flex flex-row justify-center mt-5">
      <Carousel
        className="w-[90%]"
        opts={{ loop: true }}
        plugins={[Autoplay({ delay: 5000 })]}
      >
        <CarouselContent>
          {images.map((imgSrc, index) => (
            <CarouselItem key={index}>
              <img src={imgSrc} alt="Banner images" className="w-full" />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious color="bg-white" />
        <CarouselNext color="bg-white" />
      </Carousel>
    </main>
  );
}
