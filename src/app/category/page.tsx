"use client";

import PickUp from "@/components/pickUp";
import SideNavbar from "@/components/sideNavbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cars2 } from "@/constant/cars";
import { BsHeartFill } from "react-icons/bs";
import Image from "next/image";

function CategorySection() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[65px] grid lg:grid-cols-3 sm:grid-cols-1 gap-8">
      {/* Side Navbar */}
      <div className="hidden lg:flex py-5 text-center w-[360px] h-full">
        <SideNavbar />
      </div>

      {/* PickUp Section */}
      <div className="py-5 text-center col-span-2 w-full">
        <PickUp />
     

      {/* Car Cards Section */}
      <div className="py-5 text-center col-span-2 lg:col-span-2 w-full h-auto">
        <section className="bg-gray-200 w-full h-auto mt-[36px]">
          {/* Header */}
          <div className="w-full h-[44px] flex justify-between items-center px-5">
            <span className="text-[#90A3BF] font-semibold text-[16px]">
              Popular Car
            </span>
            <span className="text-[#3563E9] font-semibold text-[16px] cursor-pointer">
              View All
            </span>
          </div>

          {/* Cards Grid */}
          <div className="mt-5 px-5 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {cars2.map((car) => (
              <Card
                key={car.id}
                className="relative w-full h-[378px] p-6 bg-[#FFFFFF] rounded-[10px] shadow-md transition-transform duration-300 hover:scale-105"
              >
                {/* Header Section */}
                <div className="flex justify-between items-start">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-[20px] font-bold text-[#1A202C]">
                      {car.name}
                    </h3>
                    <p className="text-sm font-bold text-[#90A3BF]">
                      {car.type}
                    </p>
                  </div>
                  <button className="text-[#ED3F3F]">
                    <BsHeartFill className="w-6 h-6" />
                  </button>
                </div>

                {/* Car Image */}
                <div className="relative mt-8">
                  <Image
                    src={car.image}
                    alt={car.name}
                    className="mx-auto"
                    width={232}
                    height={72}
                  />
                  <div className="absolute bottom-0 left-0 w-full h-[68px] bg-gradient-to-t from-white to-transparent" />
                </div>

                {/* Specifications */}
                <div className="flex gap-4 mt-16 mb-6">
                  <Image
                    src="/images/petrol.png"
                    alt="petrol-img"
                    width={58}
                    height={24}
                  />
                  <Image
                    src="/images/menue.png"
                    alt="menu-img"
                    width={79}
                    height={24}
                  />
                  <Image
                    src="/images/people.png"
                    alt="people-img"
                    width={90}
                    height={24}
                  />
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
        </section>
        </div>

        {/* Show More Button */}
        <div className="text-center mt-6">
          <a href="/carDetail">
            <button className="bg-[#3563E9] hover:bg-[#3563E9]/90 text-white px-5 py-3 rounded">
              Show More Details
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default CategorySection;
