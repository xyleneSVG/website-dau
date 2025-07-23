'use client'

import Image from 'next/image'
import React from 'react'

export default function HeroSection() {
  return (
    <div className="w-full min-h-screen relative overflow-hidden">
      <Image
        src="/assets/landing/hero2/background-hero2.png"
        alt="Globe Background"
        fill
        className="object-cover z-0"
        priority
      />

      <div className="absolute inset-0 bg-black/20 z-10" />

      <div className="absolute inset-0 z-20 flex justify-center lg:justify-end items-center px-4 sm:px-8 xl:pr-16">
        <div className="text-center lg:max-w-[50%]">
          <h1 className="text-white text-[18px] sm:text-[20px] md:text-[28px] lg:text-[32px] xl:text-[48px] 2xl:text-[64px] font-bold uppercase leading-snug">
            “We Take You to the Internet of Things”
          </h1>
          <p className="text-white mt-4 text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] xl:text-[32px] 2xl:text-[40px] tracking-[0.4em] font-light uppercase">
            Data Andalan Utama
          </p>
        </div>
      </div>
    </div>
  )
}
