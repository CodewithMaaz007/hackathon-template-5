'use client';
import Image from "next/image";

export default function Summer2020() {
  return (
    <>
      {/* First Section: Image on Right */}
      <div className="w-full h-[711px] bg-[#23856D] flex justify-center py-[40px]">
        <div className="w-[1124px] flex justify-between items-center">
          {/* Left Side Content */}
          <div className="w-[50%] flex flex-col items-start gap-[40px]">
            {/* Small Heading: Summer 2020 */}
            <div className="w-full flex justify-start">
              <h4 className="font-Montserrat font-normal text-[20px] leading-[30px] text-[#FFF] tracking-[0.2px]">
                Summer 2020
              </h4>
            </div>

            {/* Main Heading: Vita Classic Product */}
            <div className="w-[70%] flex justify-start">
              <h3 className="font-Montserrat font-bold text-[58px] leading-[80px] text-[#FFF] tracking-[0.2px]">
                Vita Classic Product
              </h3>
            </div>

            {/* Content Description */}
            <div className="w-[70%] text-left">
              <p className="font-Montserrat font-normal text-[16px] leading-[24px] text-[#FFF]">
                We know how large objects will act, we know how our projects will act, we know this.
              </p>
            </div>

            {/* Price and Add to Cart */}
            <div className="w-[50%] flex justify-between items-center gap-[10px]">
              {/* Price Section */}
              <div className="flex items-center gap-[10px]">
                <h5 className="font-Montserrat font-bold text-[16px] leading-[24px] text-[#FFF]">
                  $16.48
                </h5>
              </div>

              {/* Add to Cart Button */}
              <div className="w-[184px] h-[52px] bg-[#2Dc071] rounded-[5px] flex justify-center items-center text-[#FFFFFF] font-Montserrat font-semibold text-[16px] leading-[24px]">
                <button aria-label="Add to Cart" className="w-full h-full flex justify-center items-center">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-[50%] flex justify-center items-center">
            <div className="w-[443px] h-[685px]">
              <Image
                src="/images/hero1.png"
                alt="Vita Classic Product Image"
                width={443}
                height={685}
                className="w-full h-full object-cover"
                sizes="(max-width: 768px) 80vw, 443px"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Second Section: Image on Left */}
      <div className="w-full h-[711px] bg-[#FAFAFA] flex justify-center py-[40px]">
        <div className="w-[1124px] flex flex-row items-center justify-between">
          {/* Left Image Section */}
          <div className="w-[50%] flex justify-center items-center">
            <div className="w-[704px] h-[685px]">
              <Image
                src="/images/hero2.png"
                alt="Neural Universe Image"
                width={704}
                height={685}
                className="w-full h-full object-cover"
                sizes="(max-width: 768px) 80vw, 704px"
              />
            </div>
          </div>

          {/* Right Text Section */}
          <div className="w-[50%] flex flex-col gap-[20px] ml-[30px]">
            {/* Additional Small Heading: Summer 2020 */}
            <div className="w-full flex justify-start">
              <h5 className="font-Montserrat font-normal text-[20px] leading-[30px] text-[#BDBDBD] tracking-[0.2px]">
                Summer 2020
              </h5>
            </div>

            {/* Main Heading */}
            <div className="w-full flex justify-start">
              <h4 className="font-Montserrat font-normal text-[40px] leading-[50px] text-[#252B42] tracking-[0.2px]">
                Part of the Neural Universe
              </h4>
            </div>

            {/* Paragraph */}
            <div className="w-full text-left">
              <p className="font-Montserrat font-normal text-[20px] leading-[30px] text-[#737373] tracking-[0.2px]">
                We know how large objects will act but things on a small scale.
              </p>
            </div>

            {/* Buttons */}
            <div className="w-full flex justify-start gap-[10px] mt-[30px]">
              {/* Buy Now Button */}
              <div className="w-[156px] h-[52px] bg-[#2Dc071] rounded-[5px] flex justify-center items-center text-[#FFF] font-Montserrat font-semibold text-[16px] leading-[24px]">
                <button aria-label="Buy Now" className="w-full h-full flex justify-center items-center">
                  Buy Now
                </button>
              </div>

              {/* Read More Button */}
              <div className="w-[173px] h-[52px] border-[1px] border-[#2Dc071] rounded-[5px] flex justify-center items-center text-[#2Dc071] font-Montserrat font-semibold text-[16px] leading-[24px]">
                <button aria-label="Read More" className="w-full h-full flex justify-center items-center">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
