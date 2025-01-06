

import React from "react";

import Image from "next/image";
import PickUp from "./pickUp";


import CardsCar from "./cardsCar";
import { Button } from "./ui/button";
import Link from "next/link";

function HeroSection() {
  return (
    <div className="min-w-full  h-[2129px] mt-[32px] ">
      {/* Top Car Section */}
      <div className=" min-w-full  h-[375px] flex items-center justify-center relative gap-24 ">
        {/* Left Car Image */}
         <div className=" min-w-[327px] ">
            <Image
              src="/images/left-car.svg"
              alt="hero"
              width={640}
              height={360}
              className="rounded-[10px] "
            />
           </div>  
        

        {/* Right Car Image */}
    
          <div className=" sm:flex hidden lg:inline-flex">
            <Image
              src="/images/r-car.svg"
              alt="hero"
              width={640}
              height={360}
              className="rounded-[10px]"
            />
       
        </div>
      </div>
     <PickUp/>
    
          <CardsCar/>


      {/* button */}
      <div className=" max-w-[734px] max-auto h-[44px]  mt-16 ml-[370px] flex items-center justify-between ">
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
