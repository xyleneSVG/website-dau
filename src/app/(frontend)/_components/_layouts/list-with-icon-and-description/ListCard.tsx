'use client'

import React from 'react'
import Image from 'next/image'

type ListCardProps = {
  icon: string
  title: string
  description: string
}

export default function ListCard({ icon, title, description }: ListCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 xl:p-8 flex flex-col items-center text-center hover:shadow-lg transition">
      <div className="bg-[#D9FAD9] flex items-center justify-center rounded-full w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 mb-4">
        <div className="relative w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10">
          <Image src={icon} alt={title} fill className="object-contain p-1" />
        </div>
      </div>

      <h3 className="text-[14px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[24px] font-semibold mb-2 md:mb-3">
        {title}
      </h3>
      <p className="text-[14px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[24px] font-light text-justify">{description}</p>
    </div>
  )
}
