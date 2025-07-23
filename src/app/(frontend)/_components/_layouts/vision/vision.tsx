import Image from 'next/image'
import React from 'react'

import VisionCard from './VisionCard'
import { VisionSection } from '@/app/(frontend)/_interfaces/pages'

export default function Vision({visionSection, domainBlob}:{visionSection:VisionSection, domainBlob:string}) {
  return (
    <div className=''>
        <div className="relative w-full h-[100px] sm:h-[120px] md:h-[160px] lg:h-[250px] xl:h-[300px] 2xl:h-[400px]">
          <Image
            src={domainBlob + visionSection.sectionVisionBanner.filename}
            alt={visionSection.sectionVisionBanner.filename}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <h1 className="text-[#00DB05] text-[18px] md:text-[24px] lg:text-[32px] xl:text-[40px] 2xl:text-[48px] font-bold uppercase">
              {visionSection.sectionVisionTitle}
            </h1>
            <p className="text-white text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px] mt-[10px] font-bold tracking-[0.35em] uppercase">
              {visionSection.sectionVisionSubtitle}
            </p>
          </div>
        </div>
        <div className="relative z-10 flex flex-wrap justify-center gap-[20px] xl:gap-[30px] 2xl:gap-[50px] justify-items-center px-6 sm:px-8 md:px-12 min-2xl:px-20 pb-14 sm:pb-16 md:pb-18 lg:pb-20 xl:md:pb-24 2xl:pb-30 mt-[20px] md:mt-[-3%] lg:mt-[-4%]">
          {visionSection.visionCardLists.map((item, index) => (
            <VisionCard
              key={index}
              title={item.visionCardTitle}
              description={item.visionCardDescription}
            />
          ))}
        </div>
    </div>
  )
}
