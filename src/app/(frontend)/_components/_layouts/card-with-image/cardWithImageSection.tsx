'use client'

import React from 'react'
import { CardWithImageSection } from '@/app/(frontend)/_interfaces/pages'
import CardWithImageComponent from './cardWithImageComponent'

interface Props {
  data: CardWithImageSection
  domainBlob: string
}

export default function CardWithImage({ data, domainBlob }: Props) {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative py-16 px-6 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[15%] sm:h-[20%] lg:h-[30%] z-0" style={{backgroundColor: data.headerColor}}/>

      <div className="relative z-10 md:w-[85%] xl:max-w-6xl mx-auto">
        <h2 className="text-center text-[16px] md:text-[18px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] font-light mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-16 uppercase">
          {data.sectionTitle}
        </h2>

        <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
          {Array.isArray(data.cardArray) &&
            data.cardArray.map((item, index) => (
              <CardWithImageComponent
                key={index}
                image={domainBlob + item.itemThumbnail?.filename}
                title={item.itemTitle}
                description={item.itemDescription}
              />
            ))}
        </div>
      </div>
    </section>
  )
}
