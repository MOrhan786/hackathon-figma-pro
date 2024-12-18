"use client";

import { Search, Settings2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BsBellFill, BsHeartFill } from "react-icons/bs";
import Image from "next/image";

function Header() {
  return (
    <div className="w-full px-4 lg:px-[65px]">
      {/* Navbar */}
      <nav className="h-[124px] bg-[#FFFFFF] border-b border-[rgba(195,212,233,0.4)]">
        <div className="max-w-[1440px] mx-auto h-full flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="text-[24px] lg:text-[32px] font-bold text-[#3563E9] tracking-[-0.03em]"
          >
            MORENT
          </a>

          {/* Search Bar */}
          <div className="hidden sm:flex relative w-full max-w-[449px] h-[44px]">
            <div className="absolute left-3 top-1/2 -translate-y-1/2">
              <Search className="h-6 w-6 text-[#596780]" />
            </div>
            <Input
              className="h-11 pl-12 pr-12 border-[rgba(195,212,233,0.4)] text-[#596780] rounded-3xl"
              placeholder="Search something here"
              type="search"
            />
            <Button
              size="icon"
              variant="ghost"
              className="absolute right-3 top-1/2 -translate-y-1/2 hover:bg-transparent"
            >
              <Settings2 className="h-6 w-6 text-[#596780]" />
            </Button>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3 sm:gap-5">
            {/* Like Button - Hidden on Small Screens */}
            <Button
              size="icon"
              variant="outline"
              className="hidden sm:flex h-10 w-10 sm:h-11 sm:w-11 rounded-full border-[rgba(195,212,233,0.4)]"
            >
              <BsHeartFill className="h-5 w-5 sm:h-6 sm:w-6 text-[#596780]" />
            </Button>

            {/* Notifications - Hidden on Small Screens */}
            <div className="relative hidden sm:flex">
              <Button
                size="icon"
                variant="outline"
                className="h-10 w-10 sm:h-11 sm:w-11 rounded-full border-[rgba(195,212,233,0.4)]"
              >
                <BsBellFill className="h-5 w-5 sm:h-6 sm:w-6 text-[#596780]" />
              </Button>
              <span className="absolute -top-0.5 right-0.5 h-[8px] sm:h-[11px] w-[8px] sm:w-[11px] bg-[#FF4423] rounded-full" />
            </div>

            {/* Profile - Always Visible */}
            <Button
              size="icon"
              variant="outline"
              className="h-10 w-10 sm:h-11 sm:w-11 p-0 rounded-full border-[rgba(195,212,233,0.4)] overflow-hidden"
            >
              <Image
                src="/images/t-img.png" // Replace with your profile image URL
                alt="Profile"
                width={44}
                height={44}
                className="object-cover"
              />
            </Button>
          </div>
        </div>

        {/* Search Bar for Small Screens */}
        <div className="sm:hidden mt-3 px-4">
          <div className="relative w-full h-[44px] flex items-center gap-2">
            {/* Search Bar */}
            <div className="relative flex-grow h-full">
              <div className="absolute left-1 top-1/2 -translate-y-1/2">
                <Search className="h-4 w-4 text-[#596780]" />
              </div>
              <Input
                className="h-full pl-6 pr-6 border-[rgba(195,212,233,0.4)] text-[#596780] rounded-[10px]"
                placeholder="Search something here"
                type="search"
              />
            </div>

            {/* Settings Icon */}
            <div className="flex items-center justify-center w-12 h-12  border-[rgba(195,212,233,0.4)] text-[#596780] rounded-[10px] border-[2px]">
              <Settings2 className="h-6 w-6 text-[#596780]" />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
