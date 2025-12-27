"use client";

import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";

export function Component() {
  return (
    <Footer container>
      <div className="w-full">
        <div className="relative grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className="">
            <Link href="/" className="cursor-pointer">
              <Image src="/logo.png" alt="Image" height={70} width={150} />
            </Link>
            <div className="mt-4">
              <p className="text-sm font-semibold text-gray-700">
                Registered & Corporate Office:
              </p>
              <p className="text-sm text-gray-600">
                902, Gomes Garden, Kaul Heritage City,
              </p>
              <p className="text-sm text-gray-600">
                Chulna Road, Vasai (West),
              </p>
              <p className="text-sm text-gray-600">
                Thane – 401202, Maharashtra, India.
              </p>
            </div>
            <div className="flex gap-2 items-center mt-4">
              <div className="flex gap-1">
                <p className="text-gray-600 font-semibold text-sm">
                  AMFI ARN:{" "}
                </p>
                <p className="text-sm text-gray-600">346230</p>
              </div>
              <b>|</b>
              <div className="flex gap-1">
                <p className="text-gray-600 font-semibold text-sm">
                  APRN Code:
                </p>
                <p className="text-sm text-gray-600">APRN07831</p>
              </div>
            </div>
            <div className="flex gap-1">
              <p className="text-gray-600 font-semibold text-sm">
                BSE Member Code:
              </p>
              <p className="text-sm text-gray-600">65516</p>
            </div>
            <div className="flex gap-1 mt-5">
              <p className="text-gray-600 font-semibold text-sm">Email:</p>
              <p className="text-sm text-gray-600">contact@investxindia.com</p>
            </div>
            <div className="flex gap-1 mb-4">
              <p className="text-gray-600 font-semibold text-sm">Help Desk:</p>
              <p className="text-sm text-gray-600">
                Help Desk: +91 98924 40999
              </p>
            </div>
            <i className="mt-5 text-sm text-gray-500 absolute bottom-0 text-wrap">
              Investments in securities are subject to market risks. Please read
              all scheme-related documents carefully before investing.
            </i>
          </div>

          <div className="grid lg:grid-cols-4 grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <FooterTitle title="Register Under" />
              <div className="mt-2">
                <Image
                  src="/APMI.png"
                  alt="APMI"
                  height={50}
                  width={100}
                ></Image>
              </div>
              <div className="mt-5">
                <Image
                  src="/AMFI.png"
                  alt="APMI"
                  height={60}
                  width={120}
                ></Image>
              </div>
              <div className="mt-4">
                <Image
                  src="/BSE.png"
                  alt="APMI"
                  height={50}
                  width={100}
                ></Image>
              </div>
            </div>
            <div>
              <FooterTitle title="Quick Link" />
              <FooterLinkGroup col>
                <FooterLink href="#">Home</FooterLink>
                <FooterLink href="#">About Us</FooterLink>
                <FooterLink href="#">Contact Us</FooterLink>
                <FooterLink href="#">Disclosures & How We Work</FooterLink>
                <FooterLink href="/PrivacyPolicy">Privacy Policy</FooterLink>
                <FooterLink href="/Terms&Condition">
                  Terms of Conditions
                </FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="Calculator" />
              <FooterLinkGroup col>
                <FooterLink href="#">SIP Calculator</FooterLink>
                <FooterLink href="#">Retirement Calculator</FooterLink>
                <FooterLink href="#">Goal Calculator</FooterLink>
                <FooterLink href="#">Tax Saving Calculator</FooterLink>
                <FooterLink href="#">Term Plan Calculator</FooterLink>
                <FooterLink href="#">Health Insurance Calculator</FooterLink>
                <FooterLink href="#">Emergency Fund Calculator</FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="Resources" />
              <FooterLinkGroup col>
                <FooterLink href="#">Mutual Fund Basics</FooterLink>
                <FooterLink href="#">SIP / SWP / STP Guide</FooterLink>
              </FooterLinkGroup>
            </div>
          </div>
        </div>
        <FooterDivider className="mt-5" />
        <div className="w-full sm:flex sm:items-center sm:justify-between mt-5 mb-5">
          <p className="text-sm text-gray-400 p-2">
            © Investxindia Corporate Distribution Private Limited. All Rights
            Reserved.
          </p>
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <FooterIcon
              href="https://www.facebook.com/investxindia"
              icon={BsFacebook}
            />
            <FooterIcon
              href="https://www.instagram.com/investxindia"
              icon={BsInstagram}
            />
            <FooterIcon href="https://x.com/investxindia" icon={BsTwitter} />
            <FooterIcon
              href="https://www.linkedin.com/company/investxindia"
              icon={BsLinkedin}
            />
          </div>
        </div>
      </div>
    </Footer>
  );
}

export default Component;

//   { icon: "/instagram.png", link: "https://www.instagram.com/investxindia" },
//   {
//     icon: "/linkedin.png",
//     link: "https://www.linkedin.com/company/investxindia",
//   },
//   { icon: "/facebook.png", link: "https://www.facebook.com/investxindia" },
//   { icon: "/whatsapp.png", link: "" },
//   { icon: "/x.jpg", link: "https://x.com/investxindia" },
