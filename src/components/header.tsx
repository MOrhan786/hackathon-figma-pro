
"use client"

import {  Search, Settings2, SettingsIcon } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { BsBellFill, BsHeartFill } from 'react-icons/bs'





function header() {
  return (
    < div className='lg:w-full lg:max-w-[1440px] sm:w-[800px] sm:h-[141px] px-[65px]  '>
      {/* navbar div */}
    
         <nav className=" h-[124px] bg-[#FFFFFF] border-b border-[rgba(195,212,233,0.4)] px-4  ">
      <div className="max-w-[1440px] mx-auto h-full flex items-center justify-between">
        {/* Logo */}
        <a href="#" className=" w-[148px] h-[44px] text-[32px] font-bold text-[#3563E9] tracking-[-0.03em]">
          MORENT
        </a>

        {/* Search Bar */}
        <div className="relative max-w-[449px] w-full h-[44px]  ">
          <div className="absolute left-3 top-1/2 -translate-y-1/2">
            <Search className="h-6 w-6 text-[#596780]" />
          </div>
          <Input 
            className="h-11 pl-12 pr-12   border-[rgba(195,212,233,0.4)] text-[#596780] rounded-3xl"
            placeholder="Search something here"
            type="search"
          />
          <Button
            size="icon"
            variant="ghost"
            className="absolute right-3 top-1/2 -translate-y-1/2 hover:bg-transparent"
          >
            <Settings2  className="h-6 w-6 text-[#596780]" />
          </Button>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-5">
          {/* Like Button */}
          <Button
            size="icon"
            variant="outline"
            className="h-11 w-11 rounded-full border-[rgba(195,212,233,0.4)]"
          >
            <BsHeartFill className="h-6 w-6 text-[#596780]" />
          </Button>

          {/* Notifications */}
          <div className="relative">
            <Button
              size="icon"
              variant="outline"
              className="h-11 w-11 rounded-full border-[rgba(195,212,233,0.4)]"
            >
              <BsBellFill className="h-6 w-6 text-[#596780]" />
            </Button>
            <span className="absolute -top-0.5 right-0.5 h-[11px] w-[11px] bg-[#FF4423] rounded-full" />
          </div>

          {/* Settings */}
          <Button
            size="icon"
            variant="outline"
            className="h-11 w-11 rounded-full border-[rgba(195,212,233,0.4)]"
          >
            <SettingsIcon className="h-6 w-6  text-[#596780]" />
          </Button>

          {/* Profile */}
          <Button
            size="icon"
            variant="outline"
            className="h-11 w-11 p-0 rounded-full border-[rgba(195,212,233,0.4)] overflow-hidden"
          >
            <img
              src="/images/t-img.png"
              alt="Profile"
              className="h-full w-full object-cover"
            />
          </Button>
        </div>
      </div>
    </nav>
          
    </div>
  )
}
export default header ;











