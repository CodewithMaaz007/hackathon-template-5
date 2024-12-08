import Image from "next/image";
import CardText from "./cardtext"; // Importing the CardText component

export default function ProductCard() {
  return (
    <div className="w-full h-[1652px] flex justify-center bg-[#FAFAFA]">
      <div className="w-[1124px] py-[20px] flex flex-col gap-[80px]">
        {/* Text Section */}
        <div className="w-full flex flex-col gap-[10px] justify-center items-center">
          <h4 className="font-Montserrat font-normal text-[20px] leading-[30px] text-[#737373]">
            Featured Products
          </h4>
          <h3 className="font-Montserrat font-bold text-[24px] leading-[32px] text-[#252B42]">
            BESTSELLER PRODUCTS
          </h3>
          <p className="font-Montserrat font-normal text-[14px] leading-[20px] text-[#737373]">
            Problems trying to resolve the conflict between
          </p>
        </div>

        {/* Card Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px]">
          {[ 
            "/images/best1.jpeg",
            "/images/best2.jpeg",
            "/images/best3.jpeg",
            "/images/best4.jpeg",
            "/images/best5.jpeg",
            "/images/best6.jpeg",
            "/images/best7.jpeg",
            "/images/best8.jpeg",
          ].map((src, index) => (
            <div
              key={index}
              className="w-[239px] h-[615px] bg-white shadow-md rounded-md flex flex-col"
            >
              {/* Image Section */}
              <div className="w-[239px] h-[427px]">
                <Image
                  src={src}
                  alt={`Featured Product ${index + 1}`}
                  width={239}
                  height={427}
                  className="w-full h-full object-cover rounded-t-md"
                />
              </div>
              {/* Text Section */}
              <CardText />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
