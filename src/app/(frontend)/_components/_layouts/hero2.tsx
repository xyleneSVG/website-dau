'use client'

import Image from 'next/image'
import React from 'react'
import { Hero2Section } from '../../_interfaces/pages'

interface Hero2SectionProps {
  data: Hero2Section
  domainBlob: string
}

export default function Hero2({ data, domainBlob }: Hero2SectionProps) {
  return (
    <div className="w-full min-h-screen relative overflow-hidden">
      <Image
        src={domainBlob+data.sectionBackground.filename}
        alt="Globe Background"
        fill
        className="object-cover z-0"
        priority
      />

      <div className="absolute inset-0 bg-black/20 z-10" />

      <div className="absolute inset-0 z-20 flex justify-center lg:justify-end items-center px-4 sm:px-8 xl:pr-16">
        <div className="text-center lg:max-w-[50%]">
          <h1 className="text-white text-[18px] sm:text-[20px] md:text-[28px] lg:text-[32px] xl:text-[48px] 2xl:text-[64px] font-bold uppercase leading-snug">
            {data.sectionTextBold}
          </h1>
          <p className="text-white mt-4 text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] xl:text-[32px] 2xl:text-[40px] tracking-[0.4em] font-light uppercase">
            {data.sectionTextLight}
          </p>
        </div>
      </div>
    </div>
  )
}
