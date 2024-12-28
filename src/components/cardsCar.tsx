import React from "react";
import { Button } from "./ui/button";


import { BsHeartFill } from "react-icons/bs";
import { cars, cars1 } from "@/constant/cars";
import { Card } from "./ui/card";
import Image from "next/image";

 export function Cards() {
  return (

    <div>
      <section className="bg-[#F6F7F9] w-full h-auto mt-[36px] ">
        {/* Header */}
        <div className="w-full h-[44px] flex justify-between items-center px-5">
          <span className="text-[#90A3BF] font-semibold text-[16px]">
            Popular Car
          </span>
          <span className="text-[#3563E9] font-semibold text-[16px] cursor-pointer">
            View All
          </span>
        </div>
        
        {/* Cards Section */}
        <div className="mt-5 px-5 grid grid-cols-1  sm:grid-cols-1 lg:grid-cols-4 lg:gap-5 sm:gap-3 ">
          {cars1.map(( car) => (
            <Card
              key={car.id}
              className="relative min-w-full max-h-[388px] p-6 bg-[#FFFFFF] rounded-[10px]  shadow-md transition-transform duration-300 hover:scale-105  "
            >
              {/* Header Section */}
              <div className="flex justify-between items-start ">
                <div className="flex flex-col gap-1">
                  <h3 className="text-[20px] font-bold text-[#1A202C]">
                    {car.name}
                  </h3>
                  <p className="text-sm font-bold text-[#90A3BF]">{car.type}</p>
                </div>
                <button className="text-[#ED3F3F] ">
                  <BsHeartFill className="w-6 h-6" />
                </button>
              </div>

              {/* Car Image */}
              <div className="relative mt-8 ">
                <Image
                  src={car.image}
                  alt={car.name}
                  className="mx-auto"
                  width={232}
                  height={72}
                />
                <div className="absolute bottom-0 left-0 w-full h-[68px]  bg-gradient-to-t from-white to-transparent " />
              </div>

              {/* Specifications */}
              <div className="  max-w-[190px] min-h-[24] flex gap-4 mr-1   mt-16 mb-6">
                <div className=" max-w-[58px] min-h-full flex items-center gap-1.5">
                  <Image
                    src="/images/petrol.png"
                    alt="petrol-img"
                    width={58}
                    height={24}
                  />
                </div>
                <div className=" w-[79px]  ">
                  <Image
                    src="/images/menue.png"
                    alt="petrol-img"
                    width={79}
                    height={24}
                  />
                </div>
                <div className=" w-[90px]  ">
                  <Image
                    src="/images/people.png"
                    alt="petrol-img"
                    width={90}
                    height={24}
                  />
                </div>
              </div>

              {/* Footer */}
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <span className="text-[20px] font-bold text-[#1A202C]">
                    {car.price}
                  </span>
                  <span className="text-[#90A3BF] text-sm">/day</span>
                </div>
                <Button className="bg-[#3563E9] hover:bg-[#3563E9]/90 text-white px-5 py-3 rounded">
                  Rent Now
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* 2nd div */}
        <div className="">
            {/* Header */}
        <div className="w-full h-[44px] flex justify-between items-center px-5">
          <span className="text-[#90A3BF] font-semibold text-[16px]">
            Popular Car
          </span>
          <span className="text-[#3563E9] font-semibold text-[16px] cursor-pointer">
            View All
          </span>
        </div>
              
        {/* Cards Section */}
        
        <div className="mt-5 px-5 grid grid-cols-1  sm:grid-cols-1 lg:grid-cols-4 gap-5 ">
          {cars.map((car) => (
            <Card
              key={car.id}
              className="relative w-full h-[388px] p-6 bg-[#FFFFFF] rounded-[10px]  shadow-md transition-transform duration-300 hover:scale-105  "
            >
              {/* Header Section */}
              <div className="flex justify-between items-start">
                <div className="flex flex-col gap-1">
                  <h3 className="text-[20px] font-bold text-[#1A202C]">
                    {car.name}
                  </h3>
                  <p className="text-sm font-bold text-[#90A3BF]">{car.type}</p>
                </div>
                <button className="text-[#ED3F3F] ">
                  <BsHeartFill className="w-6 h-6" />
                </button>
              </div>

              {/* Car Image */}
              <div className="relative mt-8 ">
                <Image
                  src={car.image}
                  alt={car.name}
                  className="mx-auto"
                  width={232}
                  height={72}
                />
                <div className="absolute bottom-0 left-0 w-full h-[68px]  bg-gradient-to-t from-white to-transparent " />
              </div>

              {/* Specifications */}
              <div className="  w-[190px] h-[24] flex gap-4 mr-1   mt-16 mb-6">
                <div className=" w-[58px] h-full flex items-center gap-1.5">
                  <Image
                    src="/images/petrol.png"
                    alt="petrol-img"
                    width={58}
                    height={24}
                  />
                </div>
                <div className=" w-[79px]  ">
                  <Image
                    src="/images/menue.png"
                    alt="petrol-img"
                    width={79}
                    height={24}
                  />
                </div>
                <div className=" w-[90px]  ">
                  <Image
                    src="/images/people.png"
                    alt="petrol-img"
                    width={90}
                    height={24}
                  />
                </div>
              </div>

              {/* Footer */}
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <span className="text-[20px] font-bold text-[#1A202C]">
                    {car.price}
                  </span>
                  <span className="text-[#90A3BF] text-sm">/day</span>
                </div>
                <Button className="bg-[#3563E9] hover:bg-[#3563E9]/90 text-white px-5 py-3 rounded">
                  Rent Now
                </Button>
              </div>
            </Card>
          ))}
        </div>
       </div>
      </section>
    </div>
  );
}

export default Cards;
