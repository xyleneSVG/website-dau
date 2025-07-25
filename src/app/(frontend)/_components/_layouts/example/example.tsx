'use client'

import React from 'react'
import ExampleCard from './ExampleCard'

const data = [
  {
    title: 'Sektor Pertanian',
    image: '/assets/landing/example/image3.png',
  },
  {
    title: 'Sektor Distribusi',
    image: '/assets/landing/example/image3.png',
  },
  {
    title: 'Sektor Logistik',
    image: '/assets/landing/example/image3.png',
  },
  {
    title: 'Sektor Multifinance',
    image: '/assets/landing/example/image3.png',
  },
  {
    title: 'Sektor Retail & Restoran',
    image: '/assets/landing/example/image3.png',
  },
  {
    title: 'Sektor Transportasi',
    image: '/assets/landing/example/image3.png',
  },
]

export default function Example() {
  return (
    <div className="relative overflow-hidden pb-14 sm:pb-16 md:pb-18 lg:pb-20 xl:md:pb-24 2xl:pb-30">
        <div className='w-full text-center mx-auto mb-6 sm:mb-8 bg-[#E3F1FE] px-6 pt-6 sm:pt-8 md:pt-12 min-2xl:pt-20 pb-6 sm:pb-10 lg:pb-30 xl:pb-34 2xl:pb-40'>
          <h1 className="text-start text-[16px] md:text-[20px] lg:text-[28px] xl:text-[32px] 2xl:text-[40px] font-light sm:pl-[1.5%] md:pl-[9.5%] lg:pl-[10%] xl:pl-[12%] 2xl:pl-[11.5%] uppercase">
            <span className="font-semibold">Penerapan</span><br />
            Mobile Device Management (MDM) <br />
            <span className="font-semibold">di berbagai industri</span>
          </h1>
        </div>

        <div className="flex flex-wrap justify-center gap-x-4 md:gap-x-6 lg:gap-x-8 xl:gap-10 2xl:gap-12 gap-y-8 lg:gap-y-12 px-6 sm:px-8 lg:mt-[-100px] xl:mt-[-120px] md:max-w-[85%] xl:max-w-[80%] mx-auto">
          {data.map((item, index) => (
            <ExampleCard key={index} image={item.image} title={item.title} />
          ))}
        </div>
    </div>
  )
}
