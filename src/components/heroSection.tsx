

import React from "react";

import Image from "next/image";
import PickUp from "./pickUp";
import PouplerCar from "./populerCar";

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
     <br />
     <PouplerCar/>
     
    </div>
  );
}

export default HeroSection;
