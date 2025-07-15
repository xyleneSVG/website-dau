import React from 'react'
import Image from 'next/image'

type ListCardProps = {
  icon: string;
  title: string;
}

export default function ListCard({ icon, title }: ListCardProps) {
  return (
    <div className="
      flex flex-col items-center text-center
      gap-y-1 sm:gap-y-2 md:gap-y-3 lg:gap-y-4
    ">
      <div className="bg-[#D9FAD9] flex items-center justify-center rounded-full
        w-12 sm:w-14 md:w-16 lg:w-20 aspect-square">
        
        <div className="relative w-6 sm:w-7 md:w-8 lg:w-10 aspect-square">
          <Image src={icon} alt={title} fill className="object-contain p-1" />
        </div>
      </div>

      <p className="text-xs sm:text-sm md:text-base font-medium">{title}</p>
    </div>
  )
}
