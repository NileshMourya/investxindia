"use client";

import * as React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const images = [
  "/1.png",
  "/2.png",
  "/3.png",
  "/4.png",
  "/5.png",
  "/6.png",
];

export default function HeroCarousel() {
  const [api, setApi] = React.useState<CarouselApi | null>(null);

  return (
    <section className="w-full overflow-hidden">
      <Carousel
        setApi={setApi}
        opts={{
          loop: true,
          align: "start",
        }}
        plugins={[
          Autoplay({
            delay: 4000,
            stopOnInteraction: false,
            stopOnMouseEnter: false,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent className="ml-0">
          {images.map((img, index) => (
            <CarouselItem
              key={img}
              className="basis-full pl-0"
            >
              <div className="relative w-full">
                <Image
                  src={img}
                  alt={`Hero banner ${index + 1}`}
                  width={1942}
                  height={809}
                  priority={index === 0}
                  sizes="100vw"
                  className="block w-full h-auto"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}