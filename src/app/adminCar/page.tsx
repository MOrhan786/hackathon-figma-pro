import CarStats from '@/components/carStats';
import MapCar from '@/components/mapCar';
import { SideBar } from '@/components/sideBar';
import React from 'react';
import Image from 'next/image';

function AdminCar() {
  return (
<<<<<<< HEAD
    <div className="flex flex-col lg:flex-row bg-gray-100 min-h-screen">
      {/* Sidebar */}
      <div className="hidden lg:block">
         <SideBar/>
=======
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
>>>>>>> a7519b108b369aac18848dc1718d99266fad7b80
      </div>

        {/* Main Content */}
          {/* map car div */}
        <div className=" flex-1 p-4 lg:p-8">
         <MapCar/>
         </div>

          {/* car details  in one div two section*/}
          <div className="flex-1 p-4 lg:p-8 space-y-4">
           <CarStats/>
        {/* Recent Transactions */}
        <div className="bg-white   p-4 lg:p-6  rounded-lg shadow-lg">
        
              <h2 className="font-semibold text-lg lg:text-xl mb-4 flex justify-between">
                Recent Transaction{" "}
                <span className="text-blue-500 text-xs lg:text-sm cursor-pointer">
                  View All
                </span>
              </h2>
              <ul className="space-y-3 lg:space-y-4">
                {[
                  {
                    name: "Nissan GT - R",
                    tag: "Sport Car",
                    date: "20 July",
                    price: "$80.00",
                    img: "/car2.png",
                  },
                  {
                    name: "Koenigsegg",
                    tag: "Sport Car",
                    date: "19 July",
                    price: "$99.00",
                    img: "/car1.png",
                  },
                  {
                    name: "Rolls - Royce",
                    tag: "Sport Car",
                    date: "18 July",
                    price: "$96.00",
                    img: "/car3.png",
                  },
                  {
                    name: "CR - V",
                    tag: "SUV",
                    date: "17 July",
                    price: "$80.00",
                    img: "/car6.png",
                  },
                ].map((car, index) => (
                  <li key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Image
                        src={car.img}
                        alt={car.name}
                        width={50}
                        height={30}
                        className="rounded-md"
                      />
                      <div className="text-sm lg:text-lg">
                        <h3 className="font-bold">{car.name}</h3>
                        <p className="text-gray-500 text-xs lg:text-sm">
                          {car.tag}
                        </p>
                      </div>
                    </div>
                    <div className="text-right text-xs lg:text-sm">
                      <p className="text-gray-500">{car.date}</p>
                      <span className="font-bold text-gray-800">
                        {car.price}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
           </div>
    </div>
<<<<<<< HEAD
    
  )
=======
  );
>>>>>>> a7519b108b369aac18848dc1718d99266fad7b80
}

export default   AdminCar;

