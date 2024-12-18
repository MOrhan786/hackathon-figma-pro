'use client'
import {  ShieldCheck } from 'lucide-react'
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
 import {ChevronDown} from 'lucide-react'

import { 
    Card, 
    CardContent, 
    CardHeader, 
    CardTitle, 
    CardDescription 
  } from "@/components/ui/card";
  import { Input } from "@/components/ui/input";
  import { Label } from "@radix-ui/react-label"; // Corrected Label import
  import Image from 'next/image'
  import React from 'react';
import Link from 'next/link'
  
  function RentCar() {
    return (
      <div className='w-full px-[65px] '>
        <div className='bg-[#F6F7F9]  w-full max-w-[1440px] h-[2240px] mx-auto grid lg:grid-cols-3 md:grid-cols-1 gap-8'>
  
          {/* Billing Info */}
          <Card className='bg-[#FFFFFF]  w-auto h-[336px] col-span-2 row-span-1 rounded-[10px]'>
             <CardHeader className="space-y-1 p-6">
                <CardTitle className="text-xl font-bold tracking-tight">Billing Info</CardTitle>
                <CardDescription className="text-sm text-[#90A3BF] ">
                  Please enter your billing info
                </CardDescription>
                <div className=" ml-[500px] top-6">
                  <span className="text-sm text-[#90A3BF]">Step 1 of 4</span>
                </div>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-base font-semibold">
                        Name
                      </Label>
                      <Input 
                        id="name" 
                        placeholder="Your name" 
                        className="h-14 bg-[#F6F7F9]  border-0 text-sm placeholder:text-[#90A3BF]" 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address" className="text-base font-semibold">
                        Address
                      </Label>
                      <Input 
                        id="address" 
                        placeholder="Address" 
                        className="h-14 bg-[#F6F7F9] border-0 text-sm placeholder:text-[#90A3BF]" 
                      />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-base font-semibold">
                        Phone Number
                      </Label>
                      <Input 
                        id="phone" 
                        placeholder="Phone number" 
                        className="h-14 bg-[#F6F7F9] border-0 text-sm placeholder:text-[#90A3BF]" 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="city" className="text-base font-semibold">
                        Town / City
                      </Label>
                      <Input 
                        id="city" 
                        placeholder="Town or city" 
                        className="h-14 bg-[#F6F7F9] border-0 text-sm placeholder:text-[#90A3BF]" 
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card> 
        
  
          {/*Rental Summary  */}
          <div className='bg-[#FFFFFF]  w-auto h-[560px] col-span-1 rounded-[10px] px-[24px]'>
            {/* heading div */}
            <div className='w-auto h-[76px] mt-[24px]  mb-[50px] ' > 
               <h1 className='   text-[#1A202C]    font-bold text-xl leading-[30px] text-left tracking-[-0.03em]  '>Rental Summary</h1>
               <p  className="font-['Plus_Jakarta_Sans'] text-[14px] font-medium leading-[21px] tracking-[-0.02em] text-left">
               Prices may change depending on the length of the 
               rental and the price of your rental car.
               </p>
            </div>
            {/* img div */}
            <div className=' w-auto h-[108px] mt-[24px]  flex items-center justify-between gap-2'> 
               <Image src="/images/blue-car.svg" alt=" blue car " width={132} height={108} />
                <div className=' w-[220px] h-[72px] flex flex-col items-start  ' >
                <h1 className='   text-[#1A202C]    font-bold text-xl leading-[48px] text-left tracking-[-0.03em]  '>Nissan GT - R</h1>
                <Image src="/images/Review-star.svg" alt=" yellow-star " width={220} height={24} />
              </div>
            </div>
          
            {/* price div */}

             <div className=' w-auto h-[20px] mt-[32px] flex items-center justify-between '>
              <span  className=" font-['Plus_Jakarta_Sans'] text-[#90A3BF] text-[16px] font-medium leading-[24px] tracking-[-0.02em] text-left decoration-skip-ink-none" >
                Subtotal</span>
              <span className ="font-['Plus_Jakarta_Sans'] text-[16px] font-semibold leading-[24px] tracking-[-0.02em] text-right decoration-skip-ink-none" >
              $80.00
              </span>
              </div> 

              {/* tax div */}
             <div className=' w-auto h-[20px] mt-[24px] flex items-center justify-between '>
             <span  className=" font-['Plus_Jakarta_Sans'] text-[#90A3BF] text-[16px] font-medium leading-[24px] tracking-[-0.02em] text-left " >
             Tax</span>
              <span className ="font-['Plus_Jakarta_Sans'] text-[16px] font-semibold leading-[24px] tracking-[-0.02em] text-right" >
              $0
              </span>
             </div>

             {/* total price div */}
             <div className='bg-[#F6F7F9] w-auto h-[56px] mt-[32px]  flex items-center justify-between '  >
               <span  className="text-[#90A3BF] font-['Plus_Jakarta_Sans'] text-[14px] font-medium leading-[21px] tracking-[-0.02em] text-left " >Apply promo code</span>
               <span className="font-['Plus_Jakarta_Sans'] text-[16px] font-semibold leading-[24px] tracking-[-0.02em] text-right ">Apply now</span>
             </div>

           {/*  botom div */}
             <div className='w-auto h-[48px] mt-[32px] flex justify-between gap-[32px] ' >
             <div className='flex flex-col items-start justify-center '>
               <h1 className="font-['Plus_Jakarta_Sans'] text-[18px] font-bold leading-[30px] tracking-[-0.02em] text-left " >Total Rental Price</h1>
               <p className="font-['Plus_Jakarta_Sans'] text-[10px] text-[#90A3BF] font-medium leading-[21px] tracking-[-0.03em] text-left ">Overall price and includes rental discount</p>
              </div>
              <div className="font-['Plus_Jakarta_Sans'] text-[24px] font-bold leading-[40.32px] text-right ">
              $80.00
              </div>
             </div>
            </div>

          {/* Rental info div */}
          <div className='bg-[#4d1749] text-[#90A3BF] w-auto h-[664px] col-span-2 row-span-1 rounded-[10px] -mt-56'>
          
          <div className="w-full max-w-[852px] bg-white rounded-[10px] p-6">
      <div className="flex justify-between items-start mb-8">
        <div className="space-y-1">
          <h1 className="text-[20px] font-bold text-[#1A202C] tracking-[-0.03em]">
            Rental Info
          </h1>
          <p className="text-[14px] text-[#90A3BF] tracking-[-0.02em]">
            Please select your rental date
          </p>
        </div>
        <span className="text-[14px] text-[#90A3BF] tracking-[-0.02em]">
          Step 2 of 4
        </span>
      </div>

      {/* Pick-Up Section */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-4 h-4 rounded-full bg-[rgba(53,99,233,0.3)] flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-[#3563E9]" />
          </div>
          <span className="text-[16px] font-semibold text-[#1A202C] tracking-[-0.02em]">
            Pick - Up
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-4">
            <label  className="text-[16px] font-semibold text-[#1A202C] tracking-[-0.02em]">
              Locations
            </label>
            
            <Select>
          
                
              <SelectTrigger className="h-14 bg-[#F6F7F9] border-0 flex items-center justify-between">
              <SelectValue placeholder="Select your city"  />
              <ChevronDown className="w-5 h-5 text-[#90A3BF]" />
            </SelectTrigger>
            <SelectContent>
            <SelectItem value="new-york">New York</SelectItem>
          <SelectItem value="los-angeles">Los Angeles</SelectItem>
          <SelectItem value="chicago">Chicago</SelectItem>
       </SelectContent>
       </Select>
          </div>

          <div className="space-y-4">
            <label className="text-[16px] font-semibold text-[#1A202C] tracking-[-0.02em]">
              Date
            </label>
            <Select>
              <SelectTrigger className="h-14 bg-[#F6F7F9] border-0">
                <SelectValue placeholder="Select your date" />
                <ChevronDown className="w-5 h-5 text-[#90A3BF]" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="tomorrow">Tomorrow</SelectItem>
                <SelectItem value="next-week">Next Week</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-4">
            <label className="text-[16px] font-semibold text-[#1A202C] tracking-[-0.02em]">
              Time
            </label>
            <Select>
              <SelectTrigger className="h-14 bg-[#F6F7F9] border-0">
                <SelectValue placeholder="Select your time" />
                <ChevronDown className="w-5 h-5 text-[#90A3BF]" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="morning">Morning</SelectItem>
                <SelectItem value="afternoon">Afternoon</SelectItem>
                <SelectItem value="evening">Evening</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Drop-Off Section */}
      <div>
        <div className="flex items-center gap-2 mb-6">
          <div className="w-4 h-4 rounded-full bg-[rgba(92,175,252,0.3)] flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-[#54A6FF]" />
          </div>
          <span className="text-[16px] font-semibold text-[#1A202C] tracking-[-0.02em]">
            Drop - Off
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-4">
            <label className="text-[16px] font-semibold text-[#1A202C] tracking-[-0.02em]">
              Locations
            </label>
            <Select>
              <SelectTrigger className="h-14 bg-[#F6F7F9] border-0">
                <SelectValue placeholder="Select your city" />
                <ChevronDown className="w-5 h-5 text-[#90A3BF]" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="new-york">New York</SelectItem>
                <SelectItem value="los-angeles">Los Angeles</SelectItem>
                <SelectItem value="chicago">Chicago</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-4">
            <label className="text-[16px] font-semibold text-[#1A202C] tracking-[-0.02em]">
              Date
            </label>
            <Select>
              <SelectTrigger className="h-14 bg-[#F6F7F9] border-0">
               <SelectValue placeholder="Select your date" />
                
                <ChevronDown className="w-5 h-5 text-[#90A3BF]" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="tomorrow">Tomorrow</SelectItem>
                <SelectItem value="next-week">Next Week</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-4">
            <label className="text-[16px] font-semibold text-[#1A202C] tracking-[-0.02em]">
              Time
            </label>
            <Select>
              <SelectTrigger className="h-14 bg-[#F6F7F9] border-0">
                <SelectValue placeholder="Select your time" />
                <ChevronDown className="w-5 h-5 text-[#90A3BF]" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="morning">Morning</SelectItem>
                <SelectItem value="afternoon">Afternoon</SelectItem>
                <SelectItem value="evening">Evening</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>

          </div>

          {/* Payment Method Div */}
          <div className='bg-[#1a6e3c] text-white w-auto h-[596px] col-span-2 row-span-1 rounded-[10px]'>
          <div className="w-full max-w-[852px] p-6 bg-white rounded-lg">
      <div className="flex justify-between items-start mb-20">
        <div className="space-y-1">
          <h1 className="text-xl font-bold text-gray-900">Payment Method</h1>
          <p className="text-sm text-[#90A3BF]">Please enter your payment method</p>
        </div>
        <span className="text-sm text-[#90A3BF]">Step 3 of 4</span>
      </div>

      <div className="space-y-6">
        <Card className="bg-[#F6F7F9] border-0">
          <CardContent className="p-6">
            <div className="flex items-center justify-between gap-2 mb-6">
              <div className="w-4 h-4 rounded-full bg-blue-500/30 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
              </div>
              <span className="font-semibold text-gray-900  ml-[-300px]">Credit Card</span>
              <div className="flex justify-end mt-4">
              <div className="flex items-center gap-3">
                <Image src="/images/visa-1.svg" alt="Visa" width={48} height={16} />
                <Image src="/images/visa-2.svg" alt="Mastercard" width={32} height={20}/>
              </div>
            </div>
            </div>
                <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4 ">
                <div className="space-y-2 ">
                  <Label htmlFor="card-number ">Card Number</Label>
                  <Input 
                    id="card-number" 
                    placeholder= "Card number"
                    className="bg-white "
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="card-holder">Card Holder</Label>
                  <Input 
                    id="card-holder" 
                    placeholder="Card holder" 
                    className="bg-white"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="expiry">Expiration Date</Label>
                  <Input 
                    id="expiry" 
                    placeholder="DD / MM / YY" 
                    className="bg-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cvc">CVC</Label>
                  <Input 
                    id="cvc" 
                    placeholder="CVC" 
                    className="bg-white"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <RadioGroup defaultValue="card" className="space-y-4">
          <div className="flex items-center justify-between space-x-4 bg-[#F6F7F9] p-4 rounded-lg">
            <RadioGroupItem value="paypal" id="paypal" />
            <Label htmlFor="paypal" className="font-semibold">PayPal</Label>
            <div className="ml-auto">
              <Image src="/images/PayPal-1.svg" alt="PayPal"width={100} height={24}  />
            </div>
          </div>

          <div className="flex items-center justify-between space-x-4 bg-[#F6F7F9] p-4 rounded-lg">
            <RadioGroupItem value="bitcoin" id="bitcoin" />
            <Label htmlFor="bitcoin" className="font-semibold">Bitcoin</Label>
            <div className="ml-auto">
              <Image src="/images/Bitcoin.svg" alt="Bitcoin" width={90} height={20} />
            </div>
          </div>
        </RadioGroup>
      </div>
    </div>
          </div>
          {/* Confirmation Div */}
          <div className='bg-[#8d8227]  w-auto h-[484px] col-span-2 row-span-1 rounded-[10px] '>
          <div className="w-full max-w-[852px]  h-[484px]   bg-white rounded-lg p-6 space-y-6  ">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div className="space-y-1">
          <h1 className="text-xl font-bold text-[#1A202C]">Confirmation</h1>
          <p className="text-sm text-[#90A3BF]">
            We are getting to the end. Just few clicks and your rental is ready!
          </p>
        </div>
        <span className="text-sm text-[#90A3BF]">Step 4 of 4</span>
      </div>

      {/* Agreement Sections */}
      <div className="space-y-6">
        <div className="flex items-center gap-4 bg-[#F6F7F9] p-4 rounded-lg">
          <Checkbox id="spam" className="border-[#90A3BF]" />
          <label 
            htmlFor="spam" 
            className="text-[#1F2544] font-semibold cursor-pointer"
          >
            Spam Agreement
          </label>
        </div>

        <div className="flex items-center gap-4 bg-[#F6F7F9] p-4 rounded-lg">
          <Checkbox id="terms" className="border-[#90A3BF]" />
          <label 
            htmlFor="terms" 
            className="text-[#1F2544] font-semibold cursor-pointer"
          >
            I agree with our terms and conditions and privacy policy.
          </label>
        </div>
      </div>

      {/* Action Button */}

      
      
       <Link  href="/adminCar">
               <Button className="px-6 py-4 h-14 text-base bg-[#3563E9] hover:bg-[#3563E9]/90 text-white rounded">
               Rent Now
               </Button>
               </Link>


      {/* Security Section */}
      <div className="flex gap-4 items-start mt-8">
        <div className="p-2">
          <ShieldCheck className="w-8 h-8 text-[#3563E9]" />
          
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-[#1A202C]">All your data are safe</h3>
          <p className="text-sm text-[#90A3BF] max-w-lg">
            We are using the most advanced security to provide you the best experience ever.
          </p>
        </div>
      </div>
    </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default RentCar;
  
  