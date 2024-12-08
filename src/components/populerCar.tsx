import { Heart } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cars, cars2, cars3 } from "@/constant/cars";
import Link from "next/link";

function PopularCar() {
  return (
    <div>
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

        {/* Cards Section */}
        <div className="mt-5 px-5 grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 gap-5  ">
          {cars.map((car) => (
            <Card
              key={car.id}
              className="relative w-full h-[388px] p-6 bg-white"
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
                  <Heart className="w-6 h-6" />
                </button>
              </div>

              {/* Car Image */}
              <div className="relative mt-8 ">
                <img
                  src={car.image}
                  alt={car.name}
                  className="mx-auto"
                  width={220}
                  height={68}
                />
                <div className="absolute bottom-0 left-0 w-full h-[68px]  bg-gradient-to-t from-white to-transparent " />
              </div>

              {/* Specifications */}

              <div className=" w-full flex gap-4 mr-1   mt-16 mb-6">
                <div className="flex items-center gap-1.5">
                  <svg
                    className="w-4 h-4 text-[#90A3BF]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 7a2 2 0 00-2-2H7a2 2 0 00-2 2m14 0v10a2 2 0 01-2 2H7a2 2 0 01-2-2V7m14 0h-3m-1 4l-3-3m0 0L12 5m3 3l3-3"
                    />
                  </svg>
                  <span className="text-xsm text-[#90A3BF]">{car.fuel}</span>
                </div>
                <div className="flex items-center gap-1">
                  <svg
                    className="w-6 h-6 text-[#90A3BF]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <circle cx="12" cy="12" r="8" strokeWidth="2" />
                    <path
                      strokeLinecap="round"
                      strokeWidth="2"
                      d="M12 8v4M12 16h.01"
                    />
                  </svg>
                  <span className="text-xs text-[#90A3BF]">
                    {car.transmission}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <svg
                    className="w-6 h-6 text-[#90A3BF]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="text-xsm text-[#90A3BF]">
                    {car.capacity}
                  </span>
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

        {/* 2nd div section */}

       
          <section className="bg-gray-200 w-full h-auto mt-[32px] ">
            {/* Header */}
            <div className="w-full h-[44px] flex justify-between items-center px-5">
              <span className="text-[#90A3BF] font-semibold text-[16px]">
                Recomendation Car
              </span>
            </div>

            {/* Cards Section */}
            <div className="mt-5 px-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {cars2.map((car) => (
                <Card
                  key={car.id}
                  className="relative w-full h-[388px] p-6 bg-white"
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
                      <Heart className="w-6 h-6" />
                    </button>
                  </div>

                  {/* Car Image */}
                  <div className="relative mt-8 ">
                    <img
                      src={car.image}
                      alt={car.name}
                      className="mx-auto"
                      width={220}
                      height={68}
                    />
                    <div className="absolute bottom-0 left-0 w-full h-[68px]  bg-gradient-to-t from-white to-transparent " />
                  </div>

                  {/* Specifications */}

                  <div className=" w-full flex gap-4 mr-1   mt-16 mb-6">
                    <div className="flex items-center gap-1.5">
                      <svg
                        className="w-4 h-4 text-[#90A3BF]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 7a2 2 0 00-2-2H7a2 2 0 00-2 2m14 0v10a2 2 0 01-2 2H7a2 2 0 01-2-2V7m14 0h-3m-1 4l-3-3m0 0L12 5m3 3l3-3"
                        />
                      </svg>
                      <span className="text-xsm text-[#90A3BF]">
                        {car.fuel}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg
                        className="w-6 h-6 text-[#90A3BF]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <circle cx="12" cy="12" r="8" strokeWidth="2" />
                        <path
                          strokeLinecap="round"
                          strokeWidth="2"
                          d="M12 8v4M12 16h.01"
                        />
                      </svg>
                      <span className="text-xs text-[#90A3BF]">
                        {car.transmission}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <svg
                        className="w-6 h-6 text-[#90A3BF]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                      <span className="text-xsm text-[#90A3BF]">
                        {car.capacity}
                      </span>
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



          {/* 3rd section */}
             {/* Cards Section */}
            <div className="mt-5 px-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {cars3.map((car) => (
                <Card
                  key={car.id}
                  className="relative w-full h-[388px] p-6 bg-white"
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
                      <Heart className="w-6 h-6" />
                    </button>
                  </div>

                  {/* Car Image */}
                  <div className="relative mt-8 ">
                    <img
                      src={car.image}
                      alt={car.name}
                      className="mx-auto"
                      width={220}
                      height={68}
                    />
                    <div className="absolute bottom-0 left-0 w-full h-[68px]  bg-gradient-to-t from-white to-transparent " />
                  </div>

                  {/* Specifications */}

                  <div className=" w-full flex gap-4 mr-1   mt-16 mb-6">
                    <div className="flex items-center gap-1.5">
                      <svg
                        className="w-4 h-4 text-[#90A3BF]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 7a2 2 0 00-2-2H7a2 2 0 00-2 2m14 0v10a2 2 0 01-2 2H7a2 2 0 01-2-2V7m14 0h-3m-1 4l-3-3m0 0L12 5m3 3l3-3"
                        />
                      </svg>
                      <span className="text-xsm text-[#90A3BF]">
                        {car.fuel}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg
                        className="w-6 h-6 text-[#90A3BF]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <circle cx="12" cy="12" r="8" strokeWidth="2" />
                        <path
                          strokeLinecap="round"
                          strokeWidth="2"
                          d="M12 8v4M12 16h.01"
                        />
                      </svg>
                      <span className="text-xs text-[#90A3BF]">
                        {car.transmission}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <svg
                        className="w-6 h-6 text-[#90A3BF]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                      <span className="text-xsm text-[#90A3BF]">
                        {car.capacity}
                      </span>
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
        <span className="font-medium text-[14px] leading-[21px] text-right text-[#90A3BF] ">120 Car</span>
      </div>
      
      </section>

     
    </div>
  );
}

export default PopularCar;
