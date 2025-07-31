'use client'

import Image from 'next/image'
import React from 'react'
import { IconListWithSideImagesSection } from '../../_interfaces/pages'

interface Props {
  data: IconListWithSideImagesSection
  domainBlob: string
}

export default function IconListWithSideImages({ data, domainBlob }: Props) {
  return (
    <section className="w-full p-6 sm:p-8 md:p-12 min-2xl:p-20 py-14 sm:py-16 md:py-18 lg:py-20 xl:md:py-24 2xl:py-30 bg-white">
      <h2 className="text-center text-[14px] sm:text-[16px] md:text-[18px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] font-light uppercase mb-8 lg:mb-20">
        {data.sectionTitle}
      </h2>

      <div className="lg:w-[80%] xl:w-[75%] flex flex-col-reverse lg:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 mx-auto">
        <div className="w-full sm:w-[90%] md:w-[85%] lg:w-[55%] space-y-6 lg:space-y-8 xl:space-y-10 2xl:space-y-12">
          {Array.isArray(data.sectionContent) &&
            data.sectionContent.map((item, index) => (
              <div key={index} className="flex items-center gap-4 sm:gap-6">
                <div className="w-12 h-12 md:w-14 md:h-14 lg:w-18 lg:h-18 xl:w-24 xl:h-24 2xl:w-28 2xl:h-28 bg-white rounded-full overflow-hidden relative">
                  <div
                    className="absolute inset-0 z-10"
                    style={{
                      WebkitMaskImage: 'url(/assets/landing/procedure/mask.png)',
                      WebkitMaskRepeat: 'no-repeat',
                      WebkitMaskSize: 'cover',
                      WebkitMaskComposite: 'destination-out',
                      maskImage: 'url(/assets/landing/procedure/mask.png)',
                      maskRepeat: 'no-repeat',
                      maskSize: 'cover',
                      maskComposite: 'exclude',
                      backgroundColor: 'white',
                    }}
                  />

                  <Image
                    src={domainBlob + item.itemImage?.filename}
                    alt={item.itemImage?.id || ''}
                    fill
                    className="object-contain z-0"
                  />
                </div>

                <div className="flex-1">
                  <h3 className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] font-semibold">
                    {item.itemTitle}
                  </h3>
                  <p className="text-[14px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[24px] text-justify lg:mt-3">
                    {item.itemDescription}
                  </p>
                </div>
              </div>
            ))}
        </div>

        <div className="w-full lg:w-[45%] flex flex-col items-center lg:items-end gap-6 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-14">
          {Array.isArray(data.sectionIllustrationArray) &&
            data.sectionIllustrationArray.map((data, index) => (
              <div
                key={index}
                className="relative w-[50%] lg:w-[85%] max-w-[400px] 2xl:max-w-[500px] aspect-square "
              >
                <Image src={domainBlob+data.sectionIllustration?.filename} alt={data.sectionIllustration?.id || ''} fill className="object-contain" />
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}
