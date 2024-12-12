import React from 'react'

function CarDetail() {
  return (
    <>
       <section className='bg-black w-full max-w-[1440px] h-[2016px] px-[65px]  max-auto grid lg:grid-cols-3  md:grid-cols-1 gap-2'>
        {/* section grid */}
      <div className='bg-blue-500 py-5 text-center row-span-4 w-[360px] h-[2016px] '>
        1 div
        </div>

      <div className='bg-pink-400 py-5 text-center col-span-1 w-[492px] h-[360px] mt-[32px] pr-[556px] pl-[392px] '> 2nd div</div>

      <div className='bg-yellow-400 py-5 text-center col-span-1 w-[492px] h-[508px] mt-[32px] pl-[916px] pr-[32px]  '>3 div</div>

      <div className='bg-green-500 py-5 text-center col-span-1 w-[148px] h-[124px] mt-[416px] pl-[392px] '> 4 div</div>

      <div className='bg-gray-300 py-5 text-center col-span-1 w-[148px] h-[124px]  ' >5 div</div>

      <div className='bg-orange-500 py-5 text-center row-span-1 w-[148px] h-[124px] '> 6 div</div>

      <div className='bg-slate-400 py-5 text-center col-span-2 w-[1016px] h-[452px] '>7th div</div>

      <div className='bg-red-500 py-5 text-center col-span-2 w-[1016px] h-[448px]'>8 div</div>


      <div className='bg-green-500 py-5 text-center col-span-2  w-[1016px] h-[448px] '>9 div</div>
      </section>
    </>
  )
}

export default  CarDetail;
