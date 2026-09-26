"use client";

import {
  Footer,
  FooterDivider,
  FooterIcon,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

const links = [
  { name: "Home", link: "/" },
  { name: "About Us", link: "/About" },
  { name: "Contact Us", link: "/Contact" },
  { name: "Privacy Policy", link: "/PrivacyPolicy" },
  { name: "Terms of Conditions", link: "/Terms&Condition" },
  { name: "Disclaimers", link: "/Disclaimers" },
  { name: "Code Of Conduct", link: "/CodeofConduct" },
  { name: "Commission Disclosures", link: "/CommissionDisclosures" },
  { name: "Website & App Disclaimer", link: "/website&appdisclaimer" },
  { name: "Risk Disclosures", link: "/riskDisclosures" },
  { name: "Grievance Redressal Policy", link: "/grievance" },
];

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
                Investxindia Corporate Distribution Private Limited.
              </p>
              <p className="text-sm font-semibold text-gray-700 text-wrap">
                AMFI Registered Mutual Fund
              </p>
              <p className="text-sm font-semibold text-gray-700 text-wrap">
                Specialized Investment Fund (SIF) Distributor
              </p>
              <p className="text-sm font-semibold text-gray-700">
                APMI Registered PMS Distributor
              </p>
              <p className="text-sm mb-2 font-semibold text-gray-700">
                CIN No. U66309MH2025PTC460880
              </p>
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
                <p className="text-gray-600 font-semibold text-sm">AMFI ARN:</p>
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
              <p className="text-sm text-gray-600">+91 98924 40999</p>
            </div>
            <div className="flex gap-3 items-center">
              <Link href="https://play.google.com/store/apps/details?id=com.investxindia.investxindia">
                <Image
                  src="/googlePlay.png"
                  height={30}
                  width={100}
                  alt="playstore"
                ></Image>
              </Link>
              <Link href="https://apps.apple.com/us/app/investxindia/id6757598740">
                <Image
                  src="/appStore.png"
                  height={30}
                  width={100}
                  alt="playstore"
                ></Image>
              </Link>
            </div>
          </div>

          <div
            className="w-100 flex flex-wrap sm:flex-row items-center"
            style={{ flexDirection: "column", gap: 4 }}
          >
            <div className="text-xs leading-6 text-gray-600">
              <p>
                <span className="font-semibold text-gray-800">
                  AMFI Reg No.:
                </span>{" "}
                ARN-346230{" "}
                <span className="text-gray-500">
                  (Date of initial Registration: 25 November 2025; Current
                  validity of ARN: 24 November 2028)
                </span>
              </p>

              <p>
                <span className="font-semibold text-gray-800">
                  APMI Reg No.:
                </span>{" "}
                APRN-07831{" "}
                <span className="text-gray-500">
                  (Date of initial Registration: 31 October 2022; Current
                  validity of APRN: 30 October 2028)
                </span>
              </p>

              <p>
                <span className="font-semibold text-gray-800">
                  BSE Member Id:
                </span>{" "}
                65516
              </p>
            </div>
            <div className="mt-4">
              <Image src="/ISO1.png" alt="APMI" height={90} width={90}></Image>
            </div>
            <p className="text-xs text-black font-bold text-nowrap mb-2">
              AN ISO 9001:2015 CERTIFIED COMPANY
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-2">
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
                <Image src="/BSE.png" alt="BSE" height={50} width={100}></Image>
              </div>
              <div className="mt-4">
                <Image src="/NSE.png" alt="NSE" height={50} width={100}></Image>
              </div>
            </div>
            <div>
              <FooterTitle title="Quick Link" />
              <FooterLinkGroup col>
                {links.map((item, id) => (
                  <Link
                    key={id}
                    href={item.link}
                    style={{ lineHeight: "10px" }}
                  >
                    {item.name}
                  </Link>
                ))}
                <li className="mb-1">
                  <a
                    href="https://www.sebi.gov.in/filings/mutual-funds.html"
                    target="blank"
                    className="hover:underline text-sm"
                  >
                    SID / SAI / KIM Sheets
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    href="https://www.sebi.gov.in/sebiweb/home/HomeAction.do?doListing=yes&sid=1&ssid=7&smid=0"
                    target="blank"
                    className="hover:underline text-sm"
                  >
                    Risk Factor
                  </a>
                </li>
              </FooterLinkGroup>
            </div>
          </div>
        </div>
        <FooterDivider className="mt-5" />
        <div className="w-full sm:flex sm:items-center sm:justify-between mt-5 mb-5">
          <p className="text-xs text-gray-400 p-2">
            Mutual fund investments are subject to market risks, read all scheme
            related documents carefully.
          </p>
          <p className="text-xs text-gray-400 p-2">
            Copyright © 2026 Investxindia Corporate Distribution Private
            Limited. All Rights Reserved.
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
