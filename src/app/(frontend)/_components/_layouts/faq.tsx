'use client'

import React from 'react'
import type { FaqSection } from '../../_interfaces/pages'

export default function FaqSection({data}: {data: FaqSection}) {
  return (
    <div className="min-h-screen">
      <div className={`w-full text-center mb-12 mx-auto bg-[${data.backgroundColor}] px-6 pt-12 lg:pt-16 pb-24 lg:pb-30`}>
        <h1 className="text-[16px] md:max-w-[600px] lg:max-w-[800px] xl:max-w-4xl 2xl:max-w-5xl md:text-[18px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] font-bold text-black mx-auto">
          {data.sectionTitle}
        </h1>
        <p className="md:max-w-[600px] lg:max-w-[800px] xl:max-w-4xl 2xl:max-w-5xl mt-3 md:mt-5 xl:mt-7 2xl:mt-10 text-black font-light text-[14px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[24px] mx-auto">
          {data.sectionDescription}
        </p>
      </div>

      <div className="md:w-[90%] lg:w-[80%] xl:w-[70%] mx-auto columns-1 md:columns-2 gap-6 space-y-6 px-6 sm:px-8 md:px-16 pb-12 xl:pb-16 mt-[-120px]">
        {data.sectionFaqArray.map((item, index) => (
          <div
            key={index}
            className="break-inside-avoid bg-white p-6 rounded-3xl shadow-md hover:shadow-lg transition"
          >
            <h2 className="font-semibold text-[14px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[24px] text-gray-800 mb-2 md:mb-3.5 xl:mb-4 break-words">
              {item.question}
            </h2>
            <p className="font-light text-[14px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[24px] leading-relaxed">
              {item.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
