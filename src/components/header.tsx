"use client";
import React, { useState } from "react";
import { Montserrat } from "next/font/google";
import { BsTelephone, BsCart } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import { FaInstagram, FaYoutube, FaFacebook, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import { CgChevronDown } from "react-icons/cg";
import { IoIosSearch } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";

const montserrat = Montserrat({ subsets: ["latin"] });

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Top Header */}
      <div className="bg-[#252842] text-white py-2">
        <div className="container mx-auto flex items-center justify-between px-4">
          {/* Contact Info */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <BsTelephone />
              <p className={`text-sm font-semibold ${montserrat.className}`}>
                (225) 555-0118
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <TfiEmail />
              <p className={`text-sm font-semibold ${montserrat.className}`}>
                michelle.rivera@example.com
              </p>
            </div>
          </div>

          {/* Follow Us Text with 80% Offer */}
          <p
            className={`text-sm font-semibold ${montserrat.className} text-center`}
          >
            Follow Us and get a chance to win 80% off
          </p>

          {/* Follow Us with Icons */}
          <div className="flex items-center space-x-4">
            <p className="text-sm font-semibold">Follow Us:</p>
            <FaFacebook size={16} className="text-white hover:text-gray-300" />
            <FaTwitter size={16} className="text-white hover:text-gray-300" />
            <FaInstagram size={16} className="text-white hover:text-gray-300" />
            <FaYoutube size={16} className="text-white hover:text-gray-300" />
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white shadow">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          {/* Logo */}
          <div className="text-2xl font-bold text-[#252B42] flex-shrink-0">
            <span className={`${montserrat.className}`}>Bandage</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex flex-grow justify-center space-x-6">
            <Link href="/" passHref>
              <span className="text-sm font-semibold text-[#737373] hover:text-gray-800">
                Home
              </span>
            </Link>
            <Link href="/shop" passHref>
              <span className="text-sm font-semibold text-[#737373] hover:text-gray-800">
                Shop <CgChevronDown className="inline" size={14} />
              </span>
            </Link>
            <Link href="/about" passHref>
              <span className="text-sm font-semibold text-[#737373] hover:text-gray-800">
                About
              </span>
            </Link>
            <Link href="/blog" passHref>
              <span className="text-sm font-semibold text-[#737373] hover:text-gray-800">
                Blog
              </span>
            </Link>
            <Link href="/contact" passHref>
              <span className="text-sm font-semibold text-[#737373] hover:text-gray-800">
                Contact
              </span>
            </Link>
            <Link href="/pages" passHref>
              <span className="text-sm font-semibold text-[#737373] hover:text-gray-800">
                Pages
              </span>
            </Link>
          </nav>

          {/* Right Side of Header */}
          <div className="flex justify-between items-center w-[70%] max-w-[250px]">
            {/* Login/Register */}
            <Link href="/login" passHref className="flex items-center gap-1">
              <IoPersonOutline
                size={16}
                className="text-[#23A6F0] hover:text-gray-800"
              />
              <span className="text-sm font-semibold text-[#23A6F0] hover:text-gray-800">
                Login / Register
              </span>
            </Link>

            {/* Search Icon */}
            <div className="flex items-center">
              <IoIosSearch
                size={16}
                className="text-[#23A6F0] hover:text-gray-800"
              />
            </div>

            {/* Cart Icon */}
            <div className="flex items-center">
              <BsCart
                size={16}
                className="text-[#23A6F0] hover:text-gray-800"
              /> <span className="text-[#23A6F0] hover:text-gray-800">1</span>
            </div>

            {/* Wishlist Icon */}
            <div className="flex items-center">
              <CiHeart
                size={16}
                className="text-[#23A6F0] hover:text-gray-800"
              /> <span className="text-[#23A6F0] hover:text-gray-800">1</span>
            </div>
          </div>

          {/* Hamburger menu for mobile */}
          <button
            className="md:hidden flex items-center ml-4"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="w-6 h-0.5 bg-gray-800 mb-1"></div>
            <div className="w-6 h-0.5 bg-gray-800 mb-1"></div>
            <div className="w-6 h-0.5 bg-gray-800"></div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="flex flex-col px-4 py-4 space-y-4">
            <Link href="/" passHref>
              <span className="text-sm font-semibold text-[#737373] hover:text-gray-800">
                Home
              </span>
            </Link>
            <Link href="/shop" passHref>
              <span className="text-sm font-semibold text-[#737373] hover:text-gray-800">
                Shop
              </span>
            </Link>
            <Link href="/about" passHref>
              <span className="text-sm font-semibold text-[#737373] hover:text-gray-800">
                About
              </span>
            </Link>
            <Link href="/blog" passHref>
              <span className="text-sm font-semibold text-[#737373] hover:text-gray-800">
                Blog
              </span>
            </Link>
            <Link href="/contact" passHref>
              <span className="text-sm font-semibold text-[#737373] hover:text-gray-800">
                Contact
              </span>
            </Link>
            <Link href="/pages" passHref>
              <span className="text-sm font-semibold text-[#737373] hover:text-gray-800">
                Pages
              </span>
            </Link>
            <Link href="/login" passHref>
              <span className="text-sm font-semibold text-[#737373] hover:text-gray-800">
                Login / Register
              </span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
