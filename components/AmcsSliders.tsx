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
      className="w-full max-w-7xl mx-auto mt-5 mb-5"
    >
      <CarouselContent className="-ml-1">
        {data.map((item, index) => (
          <CarouselItem
            key={index}
            className="pl-1 sm:basis-1/2 md:basis-1/3 lg:basis-1/5"
          >
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <div
                    className="flex items-center"
                    style={{ flexDirection: "column" }}
                  >
                    <div className="w-40 h-40 flex justify-center items-center mx-auto">
                      <Image
                        src={item.image}
                        width={100}
                        height={100}
                        alt="amc"
                      />
                    </div>
                    <p className="text-sm font-normal mt-4">
                      {item.companyName
                        .toLocaleUpperCase()
                        .split("-")
                        .join(" ")}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
export default CarouselSpacing;
