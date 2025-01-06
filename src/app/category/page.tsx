<<<<<<< HEAD
import PickUp from '@/components/pickUp';
import SideNavbar from '@/components/sideNavbar';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { BsHeartFill } from 'react-icons/bs';
import { cars2 } from '@/constant/cars';

function CategorySection() {
  return (
    <div className="w-full flex">
          {/* sidebar  */}
      <div className="first hidden sm:flex w-[20%]">
        <SideNavbar />
      </div>

      {/* pick up section */}
      <div className="sec w-full sm:w-[80%] bg-[#f6f7f9] p-4 sm:p-6  flex flex-col gap-10 font-[family-name:var(--font-geist-sans)]">
        <section className="w-full flex flex-col sm:flex-row items-center justify-center sm:justify-between ">
          <PickUp />    
        </section>
       

        {/* 3rd car section */}
        <section className="popular w-full  flex flex-col gap-4 ">
        <div className="sec  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {cars2.map(( car) => (
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
              <Image src={"/spec1.png"} alt="" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p className="text-[20px] font-bold text-[#1A202C]  leading-none tracking-tight">
               {car.price}
                <span className="text-sm font-medium text-gray-500">/day</span>
              </p>
              <Link href={"/detailPage"}>
                <Button className="bg-[#3563e9] p-2 text-white rounded-md">
                  Rent Now
                </Button>
              </Link>
            </CardFooter>
          </Card>
              
          ))}
=======
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
>>>>>>> a7519b108b369aac18848dc1718d99266fad7b80
        </div>
          
               {/* button */}
       {/* <section id="block5" className="button w-full text-center  "> */}
        <div className="w-[50px] mt-[30px ] flex  flex-col items-center justify-between gap-4">
           
              <Link
                href={"/carDetail"}
                className="text-[16px] leading-6 hover:text-gray-600 flex items-center lg:justify-center md:justify-center sm:justify-center"
              >
                <Button className="bg-[#3563E9] hover:bg-[#3563E9] text-white px-5 py-3 rounded ml-40 ">
                  Show more car
                </Button>
              </Link>
            </div>
            
          
          
            </section>
            {/* </section> */}
            
              </div>
    </div>
  )
}

export default CategorySection;
 