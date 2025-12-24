"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  return (
    <div>
      <header className="fixed top-0 left-0 w-full z-40 bg-white shadow backdrop-blur">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="cursor-pointer">
              <Link href="/">
                <Image src="/logo.png" alt="Image" height={70} width={120} />
              </Link>
            </div>
            {/* Left Menu */}
            <div className="hidden md:flex items-center space-x-6">
              <Link
                href="/"
                className="text-sm font-medium text-[#f38120] border-b-2 border-[#f38120]"
              >
                Home
              </Link>
              <div className="relative group">
                <button className="text-sm font-medium text-gray-700 hover:text-[#f38120]">
                  Product
                </button>
                <div className="absolute left-0 mt-2 w-60 bg-white rounded-md shadow-md opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all">
                  <Link
                    href="/Services/MutualFunds"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    Mutual Funds
                  </Link>
                  <Link
                    href="/Services/kycStatus"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    Insurance
                  </Link>
                  <Link
                    href="/Services/FATCA"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    PMS/AIF
                  </Link>
                  <Link
                    href="/Services/FATCA"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    SIF
                  </Link>
                  <Link
                    href="/Services/FATCA"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    Fixed Deposit
                  </Link>
                  <Link
                    href="/Services/FATCA"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    Loans
                  </Link>
                  <Link
                    href="/Services/FATCA"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    Property
                  </Link>
                </div>
              </div>
              <Link
                href="/Services"
                className="text-sm font-medium hover:text-[#f38120]"
              >
                Service
              </Link>

              <Link
                href="/About"
                className="text-sm font-medium text-gray-700 hover:text-[#f38120]"
              >
                Calculators
              </Link>
              <Link
                href="/Learn"
                className="text-sm font-medium text-gray-700 hover:text-[#f38120]"
              >
                Learn
              </Link>
              <Link
                href="/company"
                className="text-sm font-medium text-gray-700 hover:text-[#f38120]"
              >
                company
              </Link>

              <div className="relative group">
                <button className="text-sm font-medium text-gray-700 hover:text-[#f38120]">
                  Login
                </button>
                <div className="absolute left-0 mt-2 w-60 bg-white rounded-md shadow-md opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all">
                  <Link
                    href="/Services/MutualFunds"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    Client Login
                  </Link>
                  <Link
                    href="/Services/kycStatus"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    Partner Login
                  </Link>
                  <Link
                    href="/Services/FATCA"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    Employee Login
                  </Link>
                </div>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden"
              aria-label="Toggle Menu"
            >
              ☰
            </button>
          </div>

          {/* Mobile Menu */}
          {open && (
            <div className="md:hidden bg-white shadow rounded-md mt-2 p-3 space-y-3">
              <Link href="/" className="block text-sm">
                Home
              </Link>

              {/* Product Menu */}
              <div>
                <button
                  onClick={() => setProductOpen(!productOpen)}
                  className="w-full flex justify-between items-center text-sm font-medium"
                >
                  Product
                  <span className="text-lg">{productOpen ? "−" : "+"}</span>
                </button>

                {productOpen && (
                  <div className="mt-2 pl-4 space-y-2">
                    <Link
                      href="/Services/MutualFunds"
                      className="block text-sm"
                    >
                      Mutual Funds
                    </Link>
                    <Link href="/Services/kycStatus" className="block text-sm">
                      Insurance
                    </Link>
                    <Link href="/Services/FATCA" className="block text-sm">
                      PMS/AIF
                    </Link>
                    <Link href="/Services/FATCA" className="block text-sm">
                      SIF
                    </Link>
                    <Link href="/Services/FATCA" className="block text-sm">
                      Fixed Deposit
                    </Link>
                    <Link href="/Services/FATCA" className="block text-sm">
                      Loans
                    </Link>
                    <Link href="/Services/FATCA" className="block text-sm">
                      Property
                    </Link>
                  </div>
                )}
              </div>

              <Link href="/Services" className="block text-sm">
                Service
              </Link>

              <Link href="/About" className="block text-sm">
                Calculators
              </Link>

              <Link href="/Learn" className="block text-sm">
                Learn
              </Link>

              <Link href="/company" className="block text-sm">
                Company
              </Link>

              {/* Login Menu */}
              <div>
                <button
                  onClick={() => setLoginOpen(!loginOpen)}
                  className="w-full flex justify-between items-center text-sm font-medium"
                >
                  Login
                  <span className="text-lg">{loginOpen ? "−" : "+"}</span>
                </button>

                {loginOpen && (
                  <div className="mt-2 pl-4 space-y-2">
                    <Link
                      href="/Services/MutualFunds"
                      className="block text-sm"
                    >
                      Client Login
                    </Link>
                    <Link href="/Services/kycStatus" className="block text-sm">
                      Partner Login
                    </Link>
                    <Link href="/Services/FATCA" className="block text-sm">
                      Employee Login
                    </Link>
                  </div>
                )}
              </div>
            </div>
          )}
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
