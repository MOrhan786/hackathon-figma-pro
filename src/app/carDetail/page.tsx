import React from 'react'

function CarDetail() {
  return (
    <>
       <section className='bg-black w-full max-w-[1440px] h-[2016px] px-[65px]  max-auto grid lg:grid-cols-3  md:grid-cols-1 gap-8'>
      <div className='bg-blue-500 py-5 text-center row-span-4'>1 div</div>
      <div className='bg-pink-400 py-5 text-center col-span-2'></div>
      <div className='bg-yellow-400 py-5 text-center row-span-2 col-span-2 '>3 div</div>
      <div className='bg-white py-5 text-center col-span-1'> 4 div</div>
      <div className='bg-gray-300 py-5 text-center row-span-1 ' >5 div</div>
      <div className='bg-orange-500 py-5 text-center row-span-1'> 6 div</div>
      <div className='bg-slate-400 py-5 text-center col-span-2'>7th div</div>
      <div className='bg-red-500 py-5 text-center col-span-2'>8 div</div>
      <div className='bg-green-500 py-5 text-center col-span-2'>9 div</div>
      </section>
    </>
  )
}

export default  CarDetail;
