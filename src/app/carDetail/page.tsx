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
              width={492}
              height={360}
              className="rounded-[10px]"
            />
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
