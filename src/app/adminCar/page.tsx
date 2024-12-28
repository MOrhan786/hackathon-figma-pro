import CarStats from '@/components/carStats';
import MapCar from '@/components/mapCar';
import { SideBar } from '@/components/sideBar';
import React from 'react';
import Image from 'next/image';

function AdminCar() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-[65px]">
      <div className="bg-[#F6F7F9] h-auto grid lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-1 gap-6">
        {/* Sidebar */}
        <div className="hidden md:block col-span-1 row-span-3 w-full h-auto">
          <SideBar />
        </div>

        {/* Map Section */}
        <div className="col-span-2 md:col-span-4 lg:col-span-2 row-span-3 w-full h-auto my-[62px]">
          <MapCar />
        </div>

        {/* Car Stats */}
        <div className="col-span-2 row-span-1 w-full h-auto mt-[32px] mr-0 lg:mr-[32px]">
          <CarStats />
        </div>

        {/* Recent Transactions */}
        <div className="bg-[#FFFFFF] col-span-2 row-span-1 w-full h-auto mb-[32px] rounded-[10px] p-[24px]">
          {/* Header */}
          <div className="h-[24px] flex items-center justify-between">
            <span className="font-['Plus_Jakarta_Sans'] text-[20px] font-bold leading-[30px] tracking-[-0.03em]">
              Recent Transaction
            </span>
            <span className="text-[12px] font-medium leading-[24px] text-[#3563E9] cursor-pointer">
              View All
            </span>
          </div>

          {/* Recent Transactions List */}
          <div className="grid grid-rows-4 gap-y-[32px] mt-4">
            <div className="w-full h-auto">
              <Image src="images/R-1-car.svg" alt="img" width={476} height={70} className="w-full h-auto" />
            </div>
            <div className="w-full h-auto">
              <Image src="images/R-2.svg" alt="img" width={476} height={70} className="w-full h-auto" />
            </div>
            <div className="w-full h-auto">
              <Image src="images/R-3.svg" alt="img" width={476} height={70} className="w-full h-auto" />
            </div>
            <div className="w-full h-auto">
              <Image src="images/R-4.svg" alt="img" width={476} height={70} className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminCar;
