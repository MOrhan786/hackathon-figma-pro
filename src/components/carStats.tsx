'use client'

import { Card } from "@/components/ui/card"
import { MoreHorizontal } from 'lucide-react'
// import { DonutChart } from "@tremor/react"

const carData = [
  { name: "Sport Car", value: 17439, color: "#0D3559" },
  { name: "SUV", value: 9478, color: "#175D9C" },
  { name: "Coupe", value: 18197, color: "#2185DE" },
  { name: "Hatchback", value: 12510, color: "#63A9E8" },
  { name: "MPV", value: 14406, color: "#A6CEF2" },
]

export default function CarStats() {
  return (
    <Card className="w-auto h-[324px]  col-span-2 row-span-1   relative">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-xl font-bold text-[#1A202C]">Top 5 Car Rental</h2>
        <button className="hover:bg-gray-100 p-2 rounded-full">
          <MoreHorizontal className="w-6 h-6 text-[#1A202C]" />
        </button>
      </div>

      <div className="flex items-center mt-[90px] ">
        {/* Left side - Total stats */}
        <div className="flex flex-col items-center justify-center ml-[-30px]  w-[220px] ">
          <p className="text-xl font-bold text-[#1A202C]">72,030</p>
          <p className="text-[12px] text-[#90A3BF]">Rental Car</p>
          
        </div>

        {/* Right side - Chart and legend */}
        <div className="absolute  ">
         <img src="/images/Chart (1).svg" alt="img" width={150} height={150} />
        </div>
      </div>

      {/* Legend */}
      <div className="absolute right-6 top-20 space-y-4">
        {carData.map((item) => (
          <div key={item.name} className="flex items-center justify-between w-[172px]">
            <div className="flex items-center gap-3">
              <div 
                className="w-3 h-3 rounded-full" 
                style={{ backgroundColor: item.color }}
              />
              <span className="text-sm text-[#90A3BF] font-semibold">{item.name}</span>
            </div>
            <span className="text-sm text-[#1A202C] font-semibold">
              {item.value.toLocaleString()}
            </span>
          </div>
        ))}
      </div>
    </Card>
  )
}

