'use client'

import React from 'react'
import { TechnologySection2 } from '../../_interfaces/pages'

export default function Tech2({technologySection2, domainBlob}:{technologySection2:TechnologySection2, domainBlob: string}) {
  return (
    <div className="w-full px-6 py-8 sm:py-10 md:py-12 lg:py-14 xl:py-16 2xl:py-20">
      <h1 className='text-[14px] md:text-[18px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] text-black font-light uppercase mb-4 sm:mb-6 md:mb-8 xl:mb-10 text-center'>
        {technologySection2.sectionTechnology2Title}
      </h1>
      
      <div className='md:w-[80%] lg:w-[75%] border border-[#CECFDB] py-4 sm:py-6 md:py-8 xl:py-10 2xl:py-12 overflow-hidden rounded-2xl mx-auto'>
        <div className="relative w-full">
          <div className="flex scroll-container">
            {[...technologySection2.technology2Lists, ...technologySection2.technology2Lists].map((img, index) => (
              <div key={index} className="flex-shrink-0 mx-4 md:mx-6 lg:mx-8 xl:mx-10">
                <div className="w-16 md:w-20 lg:w-24 xl:w-28 flex items-center justify-center">
                  <img 
                    src={domainBlob+img.technologyIcon.filename}
                    alt={img.technologyName || 'Technology'} 
                    className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
