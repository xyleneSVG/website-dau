'use client'

import React from 'react'
import ListCard from './ListCard'
import { LucideIcon } from 'lucide-react'
import { ListWithIconDescSection } from '@/app/(frontend)/_interfaces/pages'

interface ListWithIconProps {
  data: ListWithIconDescSection
  getLucideIcon: (name?: string) => LucideIcon | null
}

export default function ListWithIconAndDescription({ data, getLucideIcon }: ListWithIconProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-10">
      <div className="absolute top-1/3 left-0 w-full h-1/3 bg-[#E9F4FE] -z-10" />

      <div className="relative z-10 w-full md:w-[90%] lg:w-[80%] xl:w-[70%] mx-auto">
        <h2 className="text-[14px] md:text-[18px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] font-light uppercase mb-4 sm:mb-6 md:mb-8 xl:mb-10 text-center">
          {data.sectionListIconDescTitle}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 px-2 sm:px-4">
          {data.contentLists.map((item, index) => (
            <ListCard
              key={index}
              icon={item.contentIcon}
              title={item.contentName}
              description={item.contentDesc}
              backgroundIconColor={data.backgroundIconColor}
              iconColor={data.iconColor}
              getLucideIcon={getLucideIcon}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
