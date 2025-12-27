"use client";

import * as React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const images = ["/1.png", "/2.png", "/3.png", "/4.png"];

export default function HeroCarousel() {
  const [api, setApi] = React.useState<CarouselApi | null>(null);

  return (
    <section className="w-full">
      <Carousel
        setApi={setApi}
        plugins={[Autoplay({ delay: 4000, stopOnInteraction: false })]}
        className="relative w-full overflow-hidden"
      >
        <CarouselContent>
          {images.map((img, index) => (
            <CarouselItem key={index}>
              <div className="relative w-full h-[60vh] sm:h-[70vh] lg:h-[85vh]">
                {/* Image */}
                <Image
                  src={img}
                  alt={`slide-${index}`}
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
