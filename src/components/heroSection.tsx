

import React from "react";

import Image from "next/image";
import PickUp from "./pickUp";


import CardsCar from "./cardsCar";
import { Button } from "./ui/button";
import Link from "next/link";

function HeroSection() {
  return (
    <div className="w-full h-[2129px]">
      {/* Top Car Section */}
      <div className="w-auto max-w-[1400px] mx-auto h-[360px] flex items-center justify-between gap-6 p-4">
        {/* Left Car Image */}
        <div className="bg-white w-[640px]">
          <div className="w-full h-full">
            <Image
              src="/images/left-car.svg"
              alt="hero"
              width={640}
              height={360}
              className="rounded-[10px]"
            />
          </div>
        </div>

        {/* Right Car Image */}
        <div className="bg-white w-[640px]">
          <div className="w-full h-full">
            <Image
              src="/images/r-car.svg"
              alt="hero"
              width={640}
              height={360}
              className="rounded-[10px]"
            />
          </div>
        </div>
      </div>
     <PickUp/>
    
     <CardsCar/>


      {/* button */}
      <div className="w-[734px] h-[44px]  mt-16 ml-[370px] flex items-center justify-between ">
            <div className=" w-[156px]  ">
              <Link
                href={"/category"}
                className="text-[16px] leading-6 hover:text-gray-600 "
              >
                <Button className="bg-[#3563E9] hover:bg-[#3563E9]/90 text-white px-5 py-3 rounded ml-40 ">
                  Show more car
                </Button>
              </Link>
            </div>
            
            <span className="font-medium text-[14px] leading-[21px] text-right text-[#90A3BF] ">
              120 Car
            </span>

       </div>
    </div>
  );
}

export default HeroSection;
