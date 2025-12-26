"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const data = [
  {
    message:
      "My experience with InvestX India has been professional and well-structured. The team took time to understand my financial goals and risk profile before discussing mutual fund options. All product-related information, including features and risks, was explained clearly, which helped me make an informed decision. I appreciated their transparent approach and regular communication during the onboarding process. Overall, the guidance provided was process-driven and aligned with my stated investment objectives.",
    name: "",
    cityName: "",
  },
  {
    message:
      "As a first-time investor, I had limited understanding of financial products. InvestX India helped me understand the basics in a simple and patient manner. They explained different options, associated risks, and documentation requirements clearly. At no point were any assurances or return expectations made. The overall experience was informative and supportive, which helped me feel comfortable while starting my investment journey.",
    name: "",
    cityName: "",
  },
  {
    message:
      "I approached InvestX India for information regarding PMS and AIF products. The team explained the structure, eligibility criteria, risks, and documentation involved in detail. The discussion was informative and helped me understand how these products work. I found their approach to be process-oriented and compliant, without any claims or assurances. The overall experience was professional and focused on providing relevant information for informed decision-making.",
    name: "",
    cityName: "",
  },
  {
    message:
      "InvestX India provided me with relevant information regarding fixed-income products such as bonds and deposits. The features, tenure, and risk aspects were explained clearly, allowing me to evaluate the available options. The team was responsive to my queries and maintained transparency throughout the process. My experience with their services has been smooth and professional.",
    name: "",
    cityName: "",
  },
  {
    message:
      "My interactions with InvestX India have been smooth. They provided regular updates and responded promptly to my queries.",
    name: "",
    cityName: "",
  },
  {
    message:
      "My experience with InvestX India has been satisfactory. They explained mutual fund options clearly and helped me choose products suitable to my financial objectives and risk profile.",
    name: "",
    cityName: "",
  },
  {
    message:
      "The onboarding process through InvestX India was smooth and well-guided. I received assistance at every step.",
    name: "",
    cityName: "",
  },
];

const Testimonials = () => {
  return (
    <div className="bg-[#f7f9fc]">
      <section className="w-full bg-[#f7f9fc] py-16 px-4 md:px-8 mt-5 mb-5">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-xs tracking-widest font-semibold text-blue-500 uppercase mb-3">
                Testimonials
              </p>

              <h2 className="text-3xl md:text-4xl font-bold text-[#0b2b7f] leading-tight">
                Confidence built through
                <br />
                measurable outcomes.
              </h2>
            </div>

            <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-xl">
              Families across maharashtra trust investxindia for transparent
              communication, disciplined execution, and on-time goal delivery.
            </p>
          </div>
        </div>
      </section>
      <Carousel
        plugins={[Autoplay({ delay: 3000 })]}
        className="w-full mx-auto"
      >
        <CarouselContent className="-ml-1">
          {data.map((item, index) => (
            <CarouselItem key={index}>
              <div
                className="relative w-full h-[40vh] sm:h-[70vh] lg:h-[40vh] p-1 flex items-center"
                style={{ flexDirection: "column", justifyContent: "center" }}
              >
                <div className="p-4 shadow-lg w-2/3 rounded-lg bg-white">
                  <div className="">
                    <p className="text-8xl text-[#f38120]">“</p>
                    <p className="p-2 text-sm text-gray-600 -mt-5">
                      {item.message}
                    </p>
                  </div>
                  <div
                    className="flex"
                    style={{
                      flexDirection: "column",
                      justifyContent: "flex-end",
                      alignItems: "end",
                    }}
                  >
                    <p className="text-md text-[#f38120]">Name</p>
                    <i className="text-sm text-[#f38120]">- city name</i>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Testimonials;
