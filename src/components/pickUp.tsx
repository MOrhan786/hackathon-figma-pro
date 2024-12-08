"use client";
import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
  import { Card, CardContent } from "@/components/ui/card";
  import Image from 'next/image'

function pickUp() {
  return (
   <>
   <section className='w-full h[136px] mt-[20px] '>
  
     {/* Bottom Section */}
     <div className="  flex flex-row mt-[20px] gap-[8px]">
        {/* Left Card */}
        <div className="w-[582px] h-[136px] bg-[#FFFFFF] rounded-[10px]">
          <Card>
            <CardContent className="pt-12">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[#3563E9]" />
                </div>
                <span className="text-[#1A202C] font-semibold">Pick - Up</span>
              </div>
              <div className="flex items-start gap-6">
                {/* Locations */}
                <div className="flex flex-col gap-2">
                  <label className="font-bold text-[#1A202C]">Locations</label>
                  <Select>
                    <SelectTrigger className="w-[126px] text-xs text-[#90A3BF]">
                      <SelectValue placeholder="Select your city" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="new-york">New York</SelectItem>
                      <SelectItem value="london">London</SelectItem>
                      <SelectItem value="paris">Paris</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="w-px h-12 bg-[#C3D4E9]/40 my-auto" />
                {/* Date */}
                <div className="flex flex-col gap-2">
                  <label className="font-bold text-[#1A202C]">Date</label>
                  <Select>
                    <SelectTrigger className="w-[134px] text-xs text-[#90A3BF]">
                      <SelectValue placeholder="Select your date" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="today">Today</SelectItem>
                      <SelectItem value="tomorrow">Tomorrow</SelectItem>
                      <SelectItem value="next-week">Next Week</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="w-px h-12 bg-[#C3D4E9]/40 my-auto" />
                {/* Time */}
                <div className="flex flex-col gap-2">
                  <label className="font-bold text-[#1A202C]">Time</label>
                  <Select>
                    <SelectTrigger className="w-[130px] text-xs text-[#90A3BF]">
                      <SelectValue placeholder="Select your time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="morning">Morning</SelectItem>
                      <SelectItem value="afternoon">Afternoon</SelectItem>
                      <SelectItem value="evening">Evening</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Middle Item */}
        
          <Image src="/images/mid-item.svg" alt="hero" width={60} height={60} />
   


        {/* Right Card */}
        <div className="w-[582px] h-[136px] bg-[#FFFFFF] rounded-[10px]">
          <Card>
            <CardContent className="pl-8 pt-12">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[#3563E9]" />
                </div>
                <span className="text-[#1A202C] font-semibold">Pick - Up</span>
              </div>
              <div className="flex items-start gap-6">
                {/* Locations */}
                <div className="flex flex-col gap-2">
                  <label className="font-bold text-[#1A202C]">Locations</label>
                  <Select>
                    <SelectTrigger className="w-[126px] text-xs text-[#90A3BF]">
                      <SelectValue placeholder="Select your city" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="new-york">New York</SelectItem>
                      <SelectItem value="london">London</SelectItem>
                      <SelectItem value="paris">Paris</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="w-px h-12 bg-[#C3D4E9]/40 my-auto" />
                {/* Date */}
                <div className="flex flex-col gap-2">
                  <label className="font-bold text-[#1A202C]">Date</label>
                  <Select>
                    <SelectTrigger className="w-[134px] text-xs text-[#90A3BF]">
                      <SelectValue placeholder="Select your date" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="today">Today</SelectItem>
                      <SelectItem value="tomorrow">Tomorrow</SelectItem>
                      <SelectItem value="next-week">Next Week</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="w-px h-12 bg-[#C3D4E9]/40 my-auto" />
                {/* Time */}
                <div className="flex flex-col gap-2">
                  <label className="font-bold text-[#1A202C]">Time</label>
                  <Select>
                    <SelectTrigger className="w-[130px] text-xs text-[#90A3BF]">
                      <SelectValue placeholder="Select your time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="morning">Morning</SelectItem>
                      <SelectItem value="afternoon">Afternoon</SelectItem>
                      <SelectItem value="evening">Evening</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        </div>

   </section>
   </>
  )
}

export default pickUp;
