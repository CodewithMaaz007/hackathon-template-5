import React from "react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

const HeroSection: React.FC = () => {
  return (
    <section
      className="relative w-full h-[716px] bg-cover bg-center"
      style={{ backgroundImage: "url('/images/hero.jpeg')" }} // Use the image as background
    >
      <div
        className="absolute inset-0 bg-black bg-opacity-10"
        aria-hidden="true"
      ></div> {/* Overlay for better text visibility */}
      <div className="container mx-auto h-full flex items-center justify-start px-8">
        {/* Text Content */}
        <div
          className={`text-left space-y-6 text-[#FFFFFF] ${montserrat.className}`}
        >
          <h5 className="text-lg uppercase tracking-wider">
            Summer 2020
          </h5>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            New Collection
          </h1>
          <p className="text-base md:text-lg">
            We know how large objects will act, but things on a small scale.
          </p>
          <button className="bg-[#2DC07E] hover:bg-[#1d640f] text-white text-sm font-semibold px-8 py-3 shadow-lg transition">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
