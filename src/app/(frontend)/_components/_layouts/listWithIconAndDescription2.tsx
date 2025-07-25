'use client'

import Image from 'next/image'
import React from 'react'
import type { ListWithIconDesc2Section } from '../../_interfaces/pages'
import { LucideIcon } from 'lucide-react'

interface ListWithIconDesc2SectionProps {
  data: ListWithIconDesc2Section
  domainBlob: string
  getLucideIcon: (name?: string) => LucideIcon | null
}

export default function ListWithIconAndDescription2({
  data,
  domainBlob,
  getLucideIcon,
}: ListWithIconDesc2SectionProps) {
  return (
    <section className="w-full min-h-screen px-6 py-8 md:py-12 lg:py-20 flex flex-col justify-center items-center">
      <h2 className="text-center text-[14px] sm:text-[16px] md:text-[18px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] font-light uppercase mb-8">
        {data.sectionTitle}
      </h2>

      <div className="lg:w-[80%] xl:w-[75%] flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-20 mx-auto">
        <div className="w-[70%] sm:w-[60%] lg:w-1/2 flex justify-center">
          <Image
            src={domainBlob + data.sectionIllustration.filename}
            alt={data.sectionIllustration.filename}
            width={500}
            height={500}
            className="w-full h-auto max-w-[500px]"
            priority
          />
        </div>

        <div className="w-full lg:w-1/2 space-y-4 sm:space-y-5 md:space-y-6">
          {data.contentLists.map((item, index) => {
            const IconComponent = getLucideIcon?.(item.contentIcon)
            return (
              <div key={index} className="flex items-center gap-4 sm:gap-6">
                <div
                  className={`p-2 sm:p-2 md:p-3 xl:p-4 bg-[${data.backgroundIconColor}] rounded-full`}
                >
                  {IconComponent && (
                    <IconComponent
                      className="size-6 sm:size-7 md:size-8 lg:size-12"
                      strokeWidth={1.5}
                      style={{ color: data.iconColor }}
                    />
                  )}
                </div>

                <div>
                  <h3 className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] font-semibold">
                    {item.contentName}
                  </h3>
                  <p className="text-[14px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[24px] text-justify">
                    {item.contentDesc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
