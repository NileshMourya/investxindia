"use client";

import * as React from "react";

// import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Image from "next/image";
import AutoPlay from "embla-carousel-autoplay";

const image = ["/logo.png", "/logo.png", "/logo.png", "/logo.png"];

export function CarouselDApiDemo() {
  const [api, setApi] = React.useState<CarouselApi>();

  React.useEffect(() => {
    if (!api) {
      return;
    }
  }, [api]);

  return (
    <div className="mx-auto w-full shadow-sm">
      <Carousel
        plugins={[AutoPlay({ delay: 4000 })]}
        setApi={setApi}
        className="w-full "
      >
        <CarouselContent>
          {image.map((img, index) => (
            <CarouselItem key={index}>
              <div className="relative w-full h-screen aspect-[16\/9] rounded-md">
                <Image
                  src={img}
                  alt="image"
                  fill
                  className="object-cover rounded-md"
                  priority
                ></Image>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default CarouselDApiDemo;
