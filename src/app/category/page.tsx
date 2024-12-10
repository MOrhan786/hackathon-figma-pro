"use client";

import PickUp from "@/components/pickUp";
import SideNavbar from "@/components/sideNavbar";
import { Button } from "@/components/ui/button";


import { Card } from "@/components/ui/card";
import { cars } from "@/constant/cars";
import { Link } from "lucide-react";
import { BsHeartFill } from "react-icons/bs";

interface FilterOption {
  label: string;
  count: number;
  checked?: boolean;
}

function CategorySection() {
  return (
    <section className=" w-full max-w-[1440px] h-[1616px] px-[65px]  max-auto grid lg:grid-cols-3  md:grid-cols-1 gap-8">
      {/* grid 1 */}
      <div className="py-5 text-center row-span-3 w-[360px] h-[1600px] mt-[20px] ">
        <SideNavbar />
      </div>

      {/* grid 2 */}
      <div className=" py-5 text-center  col-span-2 w-auto h-[132px] mt-[5px] ">
        <PickUp />
      </div>

      {/* grid 3 */}
      <div className=" py-5 text-center row-span-3 col-span-2 w-auto h-[1228px] mt-[50px]  ">
        {/* card div */}
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
          <div className="mt-5 px-5 grid sm:grid-cols-1 lg:grid-cols-3 gap-5 ">
            {cars.map((car) => (
              <Card
                key={car.id}
                className="relative w-full h-[378px] p-6 bg-[#FFFFFF] rounded-[10px]  "
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
                  <button className="text-[#ED3F3F] ">
                    <BsHeartFill className="w-6 h-6" />
                  </button>
                </div>

                {/* Car Image */}
                <div className="relative mt-8 ">
                  <img
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
                    <img
                      src="/images/petrol.png"
                      alt="petrol-img"
                      width={58}
                      height={24}
                    />
                  </div>
                  <div className=" w-[79px]  ">
                    <img
                      src="/images/menue.png"
                      alt="petrol-img"
                      width={79}
                      height={24}
                    />
                  </div>
                  <div className=" w-[90px]  ">
                    <img
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

  
        </section>
             {/* button */}
             <div className=" text-white px-5 py-3 rounded ml-40 ">
              <a href="/carDetail">
              <button className="bg-[#3563E9] hover:bg-[#3563E9]/90 text-white px-5 py-3 rounded ml-40 " >
                Shoe more Detail

                </button>
              </a>
          
          
      
             
             </div>
           

       
      </div>
    </section>
  );
}

export default CategorySection;
