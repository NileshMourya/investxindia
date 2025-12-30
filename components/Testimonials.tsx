"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const data = [
  {
    message:
      "My experience with InvestX India has been professional and well-structured. The team took time to understand my financial goals and risk profile before discussing mutual fund options...",
  },
  {
    message:
      "As a first-time investor, I had limited understanding of financial products. InvestX India helped me understand the basics in a simple and patient manner...",
  },
  {
    message:
      "I approached InvestX India for information regarding PMS and AIF products. The team explained the structure, eligibility criteria, risks, and documentation involved...",
  },
  {
    message:
      "InvestX India provided me with relevant information regarding fixed-income products such as bonds and deposits...",
  },
  {
    message:
      "My interactions with InvestX India have been smooth. They provided regular updates and responded promptly to my queries.",
  },
  {
    message:
      "My experience with InvestX India has been satisfactory. They explained mutual fund options clearly and helped me choose products suitable to my financial objectives.",
  },
  {
    message:
      "The onboarding process through InvestX India was smooth and well-guided. I received assistance at every step.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-[#f7f9fc] py-12 sm:py-16">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <p className="text-xs tracking-widest font-semibold text-[#f38120] uppercase mb-3">
              Client Testimonials
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#00113d] leading-tight">
              Built on trust,
              <br className="hidden sm:block" />
              delivered through outcomes.
            </h2>
          </div>

          <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-xl">
            InvestX India is trusted by families across Maharashtra for
            structured planning, transparent advice, and goal-driven execution.
          </p>
        </div>
      </div>

      {/* Carousel */}
      <Carousel plugins={[Autoplay({ delay: 4000 })]} className="w-full">
        <CarouselContent>
          {data.map((item, index) => (
            <CarouselItem key={index} className="flex justify-center px-4">
              <Card className="w-full max-w-xl sm:max-w-2xl lg:max-w-3xl shadow-lg rounded-2xl mb-2">
                <CardContent className="p-6 sm:p-8">
                  {/* Quote */}
                  <span className="block text-5xl sm:text-6xl text-[#f38120] leading-none mb-3">
                    “
                  </span>

                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {item.message}
                  </p>

                  {/* Author */}
                  <div className="mt-6 text-right">
                    <p className="text-sm font-semibold text-[#f38120]">
                      Client Name
                    </p>
                    <p className="text-xs text-gray-400">City Name</p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default Testimonials;
