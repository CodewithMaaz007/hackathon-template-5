'use client';
import Image from 'next/image';

export default function Editors() {
  return (
    <div className="w-full flex justify-center bg-[#FAFAFA]">
      <div className="w-[1440px] h-[770px] flex flex-col bg-[#FAFAFA] p-10">
        {/* Title Section */}
        <div className="flex flex-col items-center gap-2">
          <h3 className="font-Montserrat font-semibold text-[24px] leading-[32px]">
            EDITOR’S PICK
          </h3>
          <p className="w-[347px] font-Montserrat font-normal text-[14px] leading-[20px] text-[#737373] text-center">
            Problems trying to resolve the conflict between
          </p>
        </div>

        {/* Images Section */}
        <div className="flex justify-center gap-8 mt-8">
          {/* Men Image */}
          <div className="relative w-[510px] h-[500px]">
            <Image
              src="/images/men.jpeg"
              alt="Men"
              fill
              sizes="(max-width: 640px) 240px, (max-width: 768px) 400px, 510px"
              className="object-cover rounded-md"
            />
            <button className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white px-8 py-2 shadow-md font-Montserrat font-bold text-[#252B42] text-sm hover:bg-gray-100">
              MEN
            </button>
          </div>

          {/* Women Image */}
          <div className="relative w-[240px] h-[500px]">
            <Image
              src="/images/women.jpeg"
              alt="Women"
              fill
              sizes="(max-width: 640px) 240px, (max-width: 768px) 320px, 240px"
              className="object-cover rounded-md"
            />
            <button className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white px-6 py-2 shadow-md font-Montserrat font-bold text-[#252B42] text-sm hover:bg-gray-100">
              WOMEN
            </button>
          </div>

          {/* Accessories and Kids */}
          <div className="flex flex-col gap-6 w-[240px] h-[500px]">
            {/* Accessories */}
            <div className="relative w-full h-[242px]">
              <Image
                src="/images/girl.jpeg"
                alt="Accessories"
                fill
                sizes="(max-width: 640px) 240px, (max-width: 768px) 320px, 240px"
                className="object-cover rounded-md"
              />
              <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 shadow-md font-Montserrat font-bold text-[#252B42] text-sm hover:bg-gray-100">
                ACCESSORIES
              </button>
            </div>
            {/* Kids */}
            <div className="relative w-full h-[242px]">
              <Image
                src="/images/kids.jpeg"
                alt="Kids"
                fill
                sizes="(max-width: 640px) 240px, (max-width: 768px) 320px, 240px"
                className="object-cover rounded-md"
              />
              <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 shadow-md font-Montserrat font-bold text-[#252B42] text-sm hover:bg-gray-100">
                KIDS
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
