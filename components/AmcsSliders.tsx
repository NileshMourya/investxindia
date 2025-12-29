"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { data } from "./details";
import Image from "next/image";

export function CarouselSpacing() {
  return (
    <Carousel
      plugins={[Autoplay({ delay: 2000 })]}
      className="w-full max-w-7xl mx-auto my-8"
    >
      <CarouselContent className="-ml-4">
        {data.map((item, index) => (
          <CarouselItem
            key={index}
            className="pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/5"
          >
            <Card className="h-[260px] flex items-center justify-center">
              <CardContent className="flex flex-col items-center justify-center gap-4 p-6">
                {/* Image Wrapper */}
                <div className="w-24 h-24 flex items-center justify-center">
                  <Image
                    src={item.image}
                    alt={item.companyName}
                    width={96}
                    height={96}
                    className="object-contain"
                  />
                </div>

                {/* Company Name */}
                <p className="text-center text-sm font-medium text-gray-700">
                  {item.companyName.toUpperCase().replace("-", " ")}
                </p>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

export default CarouselSpacing;
