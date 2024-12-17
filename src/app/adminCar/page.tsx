import CarStats from '@/components/carStats';
import MapCar from '@/components/mapCar';
import { SideBar } from '@/components/sideBar';
import React from 'react'
import Image from 'next/image';

function AdminCar() {
  return (
    <div className='w-full px-[65px] '>
        <div className='bg-[#F6F7F9]    h-[900px]  grid lg:grid-cols-5 md:grid-cols-1 gap-6'>

         {/* first side bar div */}
         <div className='w-auto h-[900px] col-span-1 row-span-3 '>
          <SideBar />

         </div>

         {/* 2nd div */}
         <div className=' w-auto h-[836px] col-span-2 row-span-3 my-[32px]  '>
          <MapCar/>
           
           
         </div>

         {/* 3rd div */}
         <div className=' w-auto h-[324px] col-span-2 row-span-1 mt-[32px] mr-[32px] '>
          <CarStats/>
         </div>

         {/* 4th div */}
         <div className='bg-[#FFFFFF] w-auto h-[480px] col-span-2 row-span-1 mb-[32px] mr-[32px] rounded-[10px] '>
          <div className=' h-[24px] flex  items-center justify-between mx-[24px] my-[24px] '>
           <span className="font-['Plus_Jakarta_Sans'] text-[20px] font-bold leading-[30px] tracking-[-0.03em] text-left " >Recent Transaction</span>
          
           <span className=' text-[12px] font-medium leading-[24px] text-right text-[#3563E9] '>View All</span>
           </div>
           {/* car div */}
           {/* <div className='  h-[476px]'> */}
               <div className='  grid  grid-rows-4 gap-y-[32px] mx-[24px] '>
            <div className=' w-auto h-[70px] '>
               <Image src="images/R-1-car.svg" alt="img" width={476} height={70} />
            </div>
            <div className=' w-auto h-[70px] '>
            <Image src="images/R-2.svg" alt="img"width={476} height={70} />
            </div>
             <div className=' w-auto h-[70px] '  >
             <Image src="images/R-3.svg" alt="img" width={476} height={70} />
             </div>
             <div className=' w-auto h-[70px] '>
             <Image src="images/R-4.svg" alt="img" width={476} height={70} />
             </div>
            
          
          </div>
         </div>



      </div>
    </div>
  )
}

export default AdminCar;
