import React from "react";
import { Button } from "@/components/ui/button"
import { BsHeartFill } from "react-icons/bs";
import { cars, cars1 } from "@/constant/cars";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";

<<<<<<< HEAD

function Cards() {
  return (

    <>
    
=======
 export function Cards() {
  return (

    <div>
      <section className="bg-[#F6F7F9] w-full h-auto mt-[36px] ">
>>>>>>> a7519b108b369aac18848dc1718d99266fad7b80
        {/* Header */}
        <div className="first w-full flex justify-between items-center mb-[20px] mt-[20px] ">
          <span className="text-[#90A3BF] font-semibold text-lg sm:text-xl">
            Popular Car
          </span>
          <span className="text-[#3563E9] font-semibold text-[16px] cursor-pointer">
            View All
          </span>
        </div>
        
        {/* Cards Section */}
        <div className="sec  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ">
          {cars1.map(( car) => (
            <Card
<<<<<<< HEAD
             key={car.id }
            className="w-full max-w-[304px] mx-auto h-[388px] flex flex-col justify-between  shadow-md transition-transform duration-300 hover:scale-105 ">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
               {car.name}
               <button className="text-[#ED3F3F] ">
                  <BsHeartFill className="w-6 h-6" />
                </button>
              </CardTitle>
              <CardDescription>{car.type}</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
              <Image src={car.image} alt={car.name} width={220} height={68}
               className=" bg-gradient-to-t from-white to-transparent " 
              />
              <Image src={car.spec} alt="" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p className="text-[20px] font-bold text-[#1A202C]  leading-none tracking-tight">
               {car.price}
                <span className="text-sm font-medium text-gray-500">/day</span>
              </p>
            
                <Button className="bg-[#3563e9] p-2 text-white rounded-md">
=======
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
>>>>>>> a7519b108b369aac18848dc1718d99266fad7b80
                  Rent Now
                </Button>
           
            </CardFooter>
          </Card>
              
          ))}
        </div>

        {/* 2nd div */}
        <div className="first w-full mb-[20px] mt-[20px]  ">
          <span className="text-[#90A3BF] font-semibold text-lg sm:text-xl">
            Recomendation Car
          </span>
          
        </div>
        
        {/* Cards Section */}
<<<<<<< HEAD
        <div className="sec  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ">
          {cars.map(( car) => (
=======
        
        <div className="mt-5 px-5 grid grid-cols-1  sm:grid-cols-1 lg:grid-cols-4 gap-5 ">
          {cars.map((car) => (
>>>>>>> a7519b108b369aac18848dc1718d99266fad7b80
            <Card
             key={car.id }
            className="w-full max-w-[304px] mx-auto h-[388px] flex flex-col justify-between  shadow-md transition-transform duration-300 hover:scale-105">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
               {car.name}
              
                <Image src={"/heart.png"} alt="" width={24} height={24} />
                
            
              </CardTitle>
              <CardDescription>{car.type}</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4   ">
              <Image src={car.image} alt={car.name} width={220} height={68}
              />
              <Image src={car.spec} alt="" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p className="text-[20px] font-bold text-[#1A202C] leading-none tracking-tight">
               {car.price}
                <span className="text-sm font-medium text-gray-500">/day</span>
              </p>
            
                <Button className="bg-[#3563e9] p-2 text-white rounded-md">
                  Rent Now
                </Button>
             
            </CardFooter>
          </Card>
              
          ))}

      
      
      </div>
    </>
  );
}

export default Cards;
