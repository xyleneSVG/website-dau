'use client'
import React from 'react'
import ListCard from './ListCard'
import { ListWithIconSection } from '@/app/(frontend)/_interfaces/pages'
import { LucideIcon } from 'lucide-react'

interface ListWithIconProps {
  data: ListWithIconSection
  getLucideIcon: (name?: string) => LucideIcon | null
}

export default function ListWithIcon({ data, getLucideIcon }: ListWithIconProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <div
        className={`absolute top-0 left-0 w-full h-1/2 bg-[${data.backgroundPageColor}] -z-10`}
      />

      <div className="relative z-10 w-full md:w-[90%] lg:w-[80%] xl:w-[70%] px-4">
        <h2 className="text-[14px] md:text-[18px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] font-light uppercase mb-4 sm:mb-6 md:mb-8 xl:mb-10 text-center">
          {data.sectionListIconTitle}
        </h2>
        <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 lg:p-10 xl:p-14 w-full">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8 lg:gap-x-10 lg:gap-y-14">
            {data.contentLists.map((item, index) => (
              <ListCard
                key={index}
                icon={item.contentIcon}
                title={item.contentName}
                getLucideIcon={getLucideIcon}
                backgroundIconColor={data.backgroundIconColor}
                iconColor={data.iconColor}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
