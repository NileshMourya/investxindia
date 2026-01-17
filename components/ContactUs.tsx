import Image from "next/image";
import Link from "next/link";
import React from "react";

const data = [
  { icon: "/instagram.png", link: "https://www.instagram.com/investxindia" },
  {
    icon: "/linkedin.png",
    link: "https://www.linkedin.com/company/investxindia-corporate-distribution-private-limited",
  },
  { icon: "/facebook.png", link: "https://www.facebook.com/investxindia" },
  { icon: "/whatsapp.png", link: "" },
  { icon: "/x.jpg", link: "https://x.com/investxindia0" },
];

const ContactUs = () => {
  return (
    <div className="w-full bg-[#f7f9fc] py-16 px-4 md:px-8 mt-5 mb-5">
      <div
        className="lg:w-1/2 sm:w-full text-center mx-auto p-2"
        style={{ flexDirection: "column" }}
      >
        <p className="text-2xl font-bold">Connect With Us</p>
        <br />
        <p className="mt-5 lg:text-sm sm:text-xs">
          Be part of the InvestX India community for expert perspectives,
          regular updates, and valuable financial planning insights across our
          social channels.
        </p>
      </div>
      <div className="w-full grid grid-cols-1 lg:grid-cols-5 sm:grid-cols-2 gap-5 mt-5 mb-5">
        {data.map((item, id) => (
          <div key={id} className="p-2 flex justify-center ">
            <Link href={item.link} target="_blank">
              <Image
                src={item.icon}
                alt="icon link"
                width={100}
                height={100}
                className="shadow-sm cursor-pointer rounded-full p-2 hover:shadow-lg"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactUs;
