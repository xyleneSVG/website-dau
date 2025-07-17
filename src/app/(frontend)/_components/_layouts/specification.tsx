'use client'

import Image from 'next/image'
import React from 'react'

const data = [
  {
    os: 'LINUX',
    specs: [
      '4 CPU Core',
      '8 GB RAM',
      '75 GB Storage',
      '1 Dedicated IP',
      'Unmetered Bandwidth',
      'Full Root Access',
    ],
  },
  {
    os: 'WINDOWS',
    specs: [
      '4 CPU Core',
      '8 GB RAM',
      '75 GB Storage',
      '1 Dedicated IP',
      'Unmetered Bandwidth',
      'RDP Admin Access',
    ],
  },
]

export default function Specification() {
  return (
    <div className="min-h-screen px-6 md:px-12 py-16 flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-50">
      <div className="text-center max-w-3xl">
        <h1 className="md:max-w-[600px] lg:max-w-[800px] xl:max-w-4xl 2xl:max-w-5xl text-[16px] md:text-[18px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] font-semibold text-black">
          PILIHLAH YANG TERBAIK, BUKAN YANG TERMURAH
        </h1>
        <p className="md:max-w-[600px] lg:max-w-[800px] xl:max-w-4xl 2xl:max-w-5xl mt-3 md:mt-5 xl:mt-7 2xl:mt-10 text-black font-light text-[14px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[24px]">
          Pilih Sistem Operasi Linux dengan Full Root Access atau Windows dengan Full RDP Admin
          Access. Bebas install software dan upgrade resource kapan saja sesuai kebutuhan
          pengembangan Anda.
        </p>
      </div>

      <div className="mt-14 w-full max-w-5xl 2xl:max-w-7xl flex flex-col items-center">
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-6">
          {/* Card */}
          <div className="w-full md:flex-[1] order-2 md:order-1">
            <div className="rounded-2xl border border-gray-200 bg-white shadow-lg text-center h-full">
              <div className="text-white bg-[#00DB05] font-bold text-xl mb-4 py-6 rounded-t-2xl">{data[0].os}</div>
              <ul className="space-y-2 text-sm md:text-base text-gray-800 px-6 pb-6">
                {data[0].specs.map((item, index) => (
                  <li className='text-start' key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Image */}
          <div className="w-full md:flex-[2] order-1 md:order-2 flex justify-center">
            <div className="relative w-full max-w-[500px] md:max-w-[600px] lg:max-w-[700px] xl:max-w-[800px] h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px]">
              <Image
                src="/assets/landing/specification/specification.png"
                alt="specification"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Card */}
          <div className="w-full md:flex-[1] order-3 md:order-3">
            <div className="rounded-2xl border border-gray-200 bg-white shadow-lg text-center h-full">
              <div className="text-white bg-[#00DB05] font-bold text-xl mb-4 py-6 rounded-t-2xl">{data[1].os}</div>
              <ul className="space-y-2 text-sm md:text-base text-gray-800 px-6 pb-6">
                {data[1].specs.map((item, index) => (
                  <li className='text-start' key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 sm:mt-10 lg:mt-12">
        <button className="border border-[#00DB05] text-[#00DB05] px-6 py-2 rounded-lg text-[12px] sm:text-[14px] md:text-[16px] xl:text-[20px] shadow-lg hover:shadow-xl transition duration-300">
          Hubungi Kami
        </button>
      </div>
    </div>
  )
}
