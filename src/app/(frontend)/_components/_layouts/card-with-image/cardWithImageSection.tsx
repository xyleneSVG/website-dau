'use client'

import React from 'react'
import type { CardWithImage } from '@/app/(frontend)/_interfaces/pages'
import CardWithImageComponent from './CardWithImageComponent'

interface CardWithImageSectionProps {
  data: CardWithImage
  domainBlob: string
}

export default function CardWithImageSection({data, domainBlob}: CardWithImageSectionProps) {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative py-16 px-6 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[15%] sm:h-[20%] lg:h-[30%] bg-[#E3F1FE] z-0" />

      <div className="relative z-10 md:w-[85%] xl:max-w-6xl mx-auto">
        <h2 className="text-center text-[16px] md:text-[18px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] font-light mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-16 uppercase">
          {data.sectionTitle}
        </h2>

        <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
          {data.sectionCardArray.map((item, index) => (
            <CardWithImageComponent
              key={index}
              image={domainBlob+item.cardThumbnail.filename}
              title={item.cardTitle}
              description={item.cardDescription}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
