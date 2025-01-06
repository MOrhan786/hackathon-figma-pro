<<<<<<< HEAD
import SideNavbar from "@/components/sideNavbar";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Reviews from "@/components/reviews";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BsHeartFill } from "react-icons/bs";
import { cars3, cars4 } from "@/constant/cars";

function CarDetail() {
    return (
        <div className="w-full flex">
       {/* side bar div */}
       <div className="first hidden sm:flex w-[25%]">
        <SideNavbar />
      </div>
      {/* 2nd div */}

      <div className="sec w-full sm:w-[75%] bg-[#f6f7f9] p-4 sm:p-6  flex flex-col gap-10 font-[family-name:var(--font-geist-sans)]">
      <section className=" w-full flex flex-col md:flex-row gap-5  items-center justify-around">
          {/* four car img */}
          <div className="first flex flex-col gap-4 w-full  lg:max-w-[470px]  lg:max-h-[508px]">
            <div>
              <Image src={"/View.png"} alt="" width={492} height={360} />
            </div>
            <div className=" flex items-center justify-between gap-2 lg:gap-2">
              <Image src={"/View 1.png"} alt="" width={148} height={124} />
              <Image src={"/View 2 .png"} alt="" width={148} height={124} />
              <Image src={"/View 3.png"} alt="" width={148} height={124} />
            </div>
          </div>
          {/* second div  rent button */}
          <div className="flex flex-col w-full  lg:max-w-[492px] h-auto lg:max-h-[508px] bg-white justify-between rounded-xl shadow-md">
          <Image
              src={"/Detail Car (1).png"}
              alt="Detail Car"
=======
'use client'

import { Star, Heart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import SideNavbar from '@/components/sideNavbar';
import {  cars4 } from '@/constant/cars';
import Image from 'next/image';
import React from 'react'
import { BsHeartFill } from 'react-icons/bs';
import Reviews from '@/components/reviews';

function CarDetail() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-[65px] bg-[#F6F7F9]">
      <section className="w-full max-w-[1440px] mx-auto grid lg:grid-cols-3 sm:grid-cols-1 gap-8">
        {/* Side Navbar */}
        <div className="hidden lg:flex py-5 row-span-4 w-[360px] h-[2016px]">
          <SideNavbar />
        </div>

        {/* Main Image Section */}
        <div className="bg-[#FFFFFF] py-5 col-span-1 w-full h-auto mt-[32px] grid gap-6 grid-cols-3">
          {/* Large Image */}
          <div className="col-span-3">
            <Image
              src="/images/car-deatail-1.svg"
              alt="car-detail-1"
>>>>>>> a7519b108b369aac18848dc1718d99266fad7b80
              width={492}
              height={508}
              className="w-full h-auto rounded-t-xl object-cover"
            />
<<<<<<< HEAD

            <div className="p-4 flex  items-center gap-4">
              <div className="flex items-center justify-between w-full">
                <h1 className="font-bold text-lg sm:text-xl lg:text-2xl">
                  $80.00 /{" "}
                  <span className="text-gray-500 text-sm lg:text-base">
                    day $100.00
                  </span>
                </h1>
              </div>
              <Link href={"/rentCar"}>
                <button className="bg-[#3563e9] hover:bg-[#264ac6] transition-all p-3 sm:p-4 px-6 sm:px-10 text-nowrap  text-white rounded-md w-full max-w-[180px] text-center">
                  Rent Now
                </button>
              </Link>
            </div>
            </div>
         

          </section>
             {/* review sec */}
             <section className=" w-full flex items-center justify-">
             <Reviews />
                </section>

                {/* car sec */}
            
        <section className="popular w-full flex flex-col gap-5">
        <div className="first w-full flex justify-between items-center mb-[20px] mt-[20px] ">
          <span className="text-[#90A3BF] font-semibold text-lg sm:text-xl">
            Popular Car
          </span>
          <span className="text-[#3563E9] font-semibold text-[16px] cursor-pointer">
            View All
          </span>
        </div>
        
        {/* Cards Section */}
        <div className="sec  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {cars3.map (( car) => (
            <Card
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
              <Link href={"/rentCar"}>
                <Button className="bg-[#3563e9] p-2 text-white rounded-md">
                  Rent Now
                </Button>
              </Link>
            </CardFooter>
          </Card>
              
          ))}
        </div>

        {/* recomendation car div */}
        <div className="first w-full flex justify-between items-center mb-[20px] mt-[20px] ">
          <span className="text-[#90A3BF] font-semibold text-lg sm:text-xl">
            Recomendation Car
          </span>
          <span className="text-[#3563E9] font-semibold text-[16px] cursor-pointer">
            View All
          </span>
        </div>
        
        {/* Cards Section */}
        <div className="sec  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {cars4.map (( car) => (
            <Card
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
              <Link href={"/rentCar"}>
                <Button className="bg-[#3563e9] p-2 text-white rounded-md">
                  Rent Now
                </Button>
              </Link>
            </CardFooter>
          </Card>
              
          ))}
        </div>

        </section>
          

     
        </div>
  </div>
    )
}
    export default  CarDetail;
=======
          </div>

          {/* Small Images */}
          {[2, 3, 4].map((num) => (
            <div key={num} className="w-auto h-auto mt-[24px]">
              <Image
                src={`/images/car-detail-${num}.svg`}
                alt={`car-detail-${num}`}
                width={148}
                height={124}
                className="rounded-[10px]"
              />
            </div>
          ))}
        </div>

        {/* Rent Now Section */}
        <div className="py-5 col-span-1 w-full mt-[32px]">
          <Card className="w-full max-w-[492px] p-6 rounded-[10px]">
            <CardContent className="p-0">
              <div className="flex justify-between items-start">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
                    Nissan GT - R
                  </h2>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(4)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-[#FBAD39] text-[#FBAD39]" />
                      ))}
                      <Star className="w-5 h-5 text-gray-400 stroke-2" />
                    </div>
                    <span className="text-sm text-gray-600">440+ Reviewer</span>
                  </div>
                </div>
                <Button variant="ghost" size="icon" className="text-red-500 hover:text-red-600">
                  <Heart className="h-6 w-6 fill-current" />
                </Button>
              </div>

              <p className="mt-8 font-normal text-lg leading-relaxed text-[#596780] text-left">
                NISMO has become the embodiment of Nissan&apos;s outstanding performance, inspired by the
                most unforgiving proving ground, the &quot;race track&quot;.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-11">
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Type Car</span>
                    <span className="text-gray-700 font-semibold">Sport</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Steering</span>
                    <span className="text-gray-700 font-semibold">Manual</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Capacity</span>
                    <span className="text-gray-700 font-semibold">2 Person</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Gasoline</span>
                    <span className="text-gray-700 font-semibold">70L</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex justify-between items-center">
                <div>
                  <p className="text-2xl font-bold text-gray-900">
                    $80.00<span className="text-lg font-normal text-gray-600">/days</span>
                  </p>
                  <p className="text-gray-400 line-through">$100.00</p>
                </div>
                <a href="/rentCar">
                  <Button className="px-6 py-4 h-14 text-base bg-[#3563E9] hover:bg-[#3563E9]/90 text-white rounded">
                    Rent Now
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Reviews Section */}
        <div className="py-5 col-span-2 w-full">
          <Reviews />
        </div>

        {/* Popular Cars */}
        <div className="bg-[#FFFFFF] py-5 col-span-2 w-full">
          <div className="w-full flex justify-between items-center px-5">
            <span className="text-[#90A3BF] font-semibold text-[16px]">Popular Car</span>
            <span className="text-[#3563E9] font-semibold text-[16px] cursor-pointer">View All</span>
          </div>
          <div className="mt-5 px-5 grid sm:grid-cols-1 lg:grid-cols-3 gap-5">
            {cars4.map((car) => (
              <Card
                key={car.id}
                className="relative w-full h-[378px] p-6 bg-[#FFFFFF] rounded-[10px] shadow-md transition-transform duration-300 hover:scale-105"
              >
                <div className="flex justify-between items-start">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-[20px] font-bold text-[#1A202C]">{car.name}</h3>
                    <p className="text-sm font-bold text-[#90A3BF]">{car.type}</p>
                  </div>
                  <button className="text-[#ED3F3F]">
                    <BsHeartFill className="w-6 h-6" />
                  </button>
                </div>
                <div className="relative mt-8">
                  <Image src={car.image} alt={car.name} className="mx-auto" width={232} height={72} />
                  <div className="absolute bottom-0 left-0 w-full h-[68px] bg-gradient-to-t from-white to-transparent" />
                </div>
                <div className="flex justify-between items-center mt-20">
                  <div className="flex items-center">
                    <span className="text-[20px] font-bold text-[#1A202C]">{car.price}</span>
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
  )
}

export default CarDetail;
>>>>>>> a7519b108b369aac18848dc1718d99266fad7b80
